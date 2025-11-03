'use client';

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion, LayoutGroup } from "motion/react"
import { cn } from "@/lib/utils"
import { DURATIONS, EASE_OUT } from "@/lib/animations"

interface AccordionContextValue {
  value: string[]
  onValueChange: (itemValue: string) => void
}

const AccordionContext = React.createContext<AccordionContextValue | undefined>(undefined)

interface AccordionProps {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  children: React.ReactNode
  className?: string
}

const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ type = "single", defaultValue, value: controlledValue, onValueChange, children, className, ...props }, ref) => {
    const [uncontrolledValue, setUncontrolledValue] = React.useState<string[]>(
      defaultValue
        ? Array.isArray(defaultValue)
          ? defaultValue
          : [defaultValue]
        : []
    )

    const isControlled = controlledValue !== undefined
    const value = isControlled
      ? Array.isArray(controlledValue)
        ? controlledValue
        : [controlledValue]
      : uncontrolledValue

    const handleValueChange = React.useCallback(
      (newValue: string[]) => {
        if (!isControlled) {
          setUncontrolledValue(newValue)
        }
        if (onValueChange) {
          if (type === "single") {
            onValueChange(newValue[0] || "")
          } else {
            onValueChange(newValue)
          }
        }
      },
      [isControlled, onValueChange, type]
    )

    const toggleItem = React.useCallback(
      (itemValue: string) => {
        const newValue = value.includes(itemValue)
          ? value.filter((v) => v !== itemValue)
          : type === "single"
          ? [itemValue]
          : [...value, itemValue]
        handleValueChange(newValue)
      },
      [value, type, handleValueChange]
    )

    return (
      <AccordionContext.Provider value={{ value, onValueChange: toggleItem }}>
        <LayoutGroup>
          <div ref={ref} className={cn("space-y-1", className)} {...props}>
            {children}
          </div>
        </LayoutGroup>
      </AccordionContext.Provider>
    )
  }
)
Accordion.displayName = "Accordion"

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, children, className, ...props }, ref) => {
    return (
      <motion.div ref={ref} layout className={cn("border-b", className)} {...props}>
        {children}
      </motion.div>
    )
  }
)
AccordionItem.displayName = "AccordionItem"

interface AccordionTriggerProps {
  children: React.ReactNode
  className?: string
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    if (!context) {
      throw new Error("AccordionTrigger must be used within Accordion")
    }

    const itemContext = React.useContext(AccordionItemContext)
    if (!itemContext) {
      throw new Error("AccordionTrigger must be used within AccordionItem")
    }

    const isOpen = context.value.includes(itemContext.value)

    return (
      <button
        ref={ref}
        type="button"
        className={cn(
          "flex w-full items-center justify-between py-4 text-left font-medium transition-[text-decoration-color] duration-200 ease hover:underline [&[data-state=open]>svg]:rotate-180",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        onClick={() => context.onValueChange(itemContext.value)}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 ease-out motion-reduce:transition-none" />
      </button>
    )
  }
)
AccordionTrigger.displayName = "AccordionTrigger"

interface AccordionContentProps {
  children: React.ReactNode
  className?: string
}

const AccordionItemContext = React.createContext<{ value: string } | undefined>(undefined)

const AccordionContent = React.forwardRef<HTMLDivElement, AccordionContentProps>(
  ({ children, className, ...props }, ref) => {
    const context = React.useContext(AccordionContext)
    if (!context) {
      throw new Error("AccordionContent must be used within Accordion")
    }

    const itemContext = React.useContext(AccordionItemContext)
    if (!itemContext) {
      throw new Error("AccordionContent must be used within AccordionItem")
    }

    const isOpen = context.value.includes(itemContext.value)
    const prefersReducedMotion = useReducedMotion()

    const containerVariants = {
      collapsed: { 
        height: 0,
        transition: { 
          duration: DURATIONS.fast, 
          ease: EASE_OUT 
        }
      },
      expanded: { 
        height: 'auto',
        transition: { 
          duration: DURATIONS.fast, 
          ease: EASE_OUT 
        }
      },
    }

    const contentVariants = {
      hidden: { 
        opacity: 0, 
        filter: prefersReducedMotion ? 'blur(0px)' : 'blur(8px)' 
      },
      visible: { 
        opacity: 1, 
        filter: 'blur(0px)',
        transition: { 
          duration: DURATIONS.fast, 
          ease: EASE_OUT 
        }
      },
      exit: { 
        opacity: 0, 
        filter: prefersReducedMotion ? 'blur(0px)' : 'blur(8px)',
        transition: { 
          duration: DURATIONS.fast, 
          ease: EASE_OUT 
        }
      },
    }

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="collapsed"
        animate={isOpen ? "expanded" : "collapsed"}
        className={cn(
          "overflow-hidden text-sm motion-reduce:transition-none",
          className
        )}
        data-state={isOpen ? "open" : "closed"}
        style={{
          // Disable height animation for reduced motion
          ...(prefersReducedMotion && {
            height: isOpen ? 'auto' : 0,
          }),
        }}
        {...props}
      >
        <AnimatePresence mode="wait">
          {isOpen && (
            <motion.div
              key="accordion-content"
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="pb-4 pt-0"
            >
              {children}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    )
  }
)
AccordionContent.displayName = "AccordionContent"

// Wrapper to provide item context
const AccordionItemWithContext = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ value, children, ...props }, ref) => {
    return (
      <AccordionItemContext.Provider value={{ value }}>
        <AccordionItem ref={ref} value={value} {...props}>
          {children}
        </AccordionItem>
      </AccordionItemContext.Provider>
    )
  }
)
AccordionItemWithContext.displayName = "AccordionItem"

export { Accordion, AccordionItemWithContext as AccordionItem, AccordionTrigger, AccordionContent }

