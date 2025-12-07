import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "peer flex w-full rounded-md border bg-input px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors motion-reduce:transition-none",
  {
    variants: {
      size: {
        default: "h-10",
        sm: "h-9",
        lg: "h-11",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof inputVariants> {
  label?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, label, placeholder, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)
    const inputRef = React.useRef<HTMLInputElement>(null)

    // Combine refs
    React.useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

    // Check if input has value
    React.useEffect(() => {
      const checkValue = () => {
        if (inputRef.current) {
          setHasValue(inputRef.current.value !== "")
        }
      }
      // Check initial value
      checkValue()
      const input = inputRef.current
      if (input) {
        input.addEventListener("input", checkValue)
        return () => input.removeEventListener("input", checkValue)
      }
    }, [])

    // Handle controlled components
    React.useEffect(() => {
      if (props.value !== undefined) {
        setHasValue(String(props.value) !== "")
      }
    }, [props.value])

    const labelText = label || placeholder || ""
    const shouldFloat = isFocused || hasValue

    return (
      <div className="relative w-full">
        <input
          type={type}
          className={cn(inputVariants({ size, className }))}
          ref={inputRef}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {labelText && (
          <label
            className={cn(
              "pointer-events-none absolute left-3 text-sm text-muted-foreground transition-all duration-200 ease-out origin-left",
              shouldFloat
                ? "top-0 -translate-y-1/2 scale-75 bg-background px-1 text-foreground"
                : "top-1/2 -translate-y-1/2 scale-100"
            )}
          >
            {labelText}
          </label>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }

