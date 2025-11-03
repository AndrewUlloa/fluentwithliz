/**
 * Shared animation constants aligned with animation guidelines
 * @see https://motion.dev/docs/react-animate-presence
 */

export const DURATIONS = {
  fast: 0.2,
  base: 0.24,
  slow: 0.3,
} as const;

/**
 * ease-out-cubic: Best for elements entering the screen or user-initiated interactions
 * cubic-bezier(.215, .61, .355, 1)
 */
export const EASE_OUT = [0.215, 0.61, 0.355, 1] as const;

/**
 * Stagger delays for cascading animations
 */
export const STAGGER = {
  menuItem: 0.03,
  section: 0.05,
} as const;

