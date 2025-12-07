# Fluid Typography Clamp System

## Overview

All font sizes now use CSS `clamp()` for proportional scaling across all viewport widths. This ensures typography scales smoothly from mobile (320px) to desktop (1920px+) without media queries.

## How It Works

The `clamp()` function uses three values:
- **Minimum**: Smallest size (for mobile screens)
- **Preferred**: Viewport-based size that scales proportionally
- **Maximum**: Largest size (for desktop screens)

Formula: `clamp(min-size, preferred-size, max-size)`

## Font Size Scale

### Semantic Sizes (Primary)

| Variable | Clamp Formula | Mobile (320px) | Desktop (1920px) | Usage |
|----------|---------------|----------------|------------------|-------|
| `--font-size-h1` | `clamp(1.75rem, 2.5vw + 1rem, 2.5rem)` | 28px | 40px | Main headings |
| `--font-size-h2` | `clamp(1.5rem, 2vw + 0.75rem, 2rem)` | 24px | 32px | Section headings |
| `--font-size-h3` | `clamp(1.25rem, 1.5vw + 0.75rem, 1.5rem)` | 20px | 24px | Subsection headings |
| `--font-size-body` | `clamp(0.875rem, 1vw + 0.5rem, 1rem)` | 14px | 16px | Body text |
| `--font-size-small` | `clamp(0.75rem, 0.875vw + 0.5rem, 0.875rem)` | 12px | 14px | Small text |
| `--font-size-eyebrow` | `clamp(0.625rem, 0.75vw + 0.5rem, 0.75rem)` | 10px | 12px | Eyebrow text |

### Utility Classes (Additional)

| Class | Clamp Formula | Mobile (320px) | Desktop (1920px) |
|-------|---------------|----------------|------------------|
| `.text-xs` | `clamp(0.625rem, 0.75vw + 0.5rem, 0.75rem)` | 10px | 12px |
| `.text-sm` | `clamp(0.75rem, 0.875vw + 0.5rem, 0.875rem)` | 12px | 14px |
| `.text-base` | Uses `--font-size-body` | 14px | 16px |
| `.text-lg` | `clamp(1rem, 1.125vw + 0.5rem, 1.125rem)` | 16px | 18px |
| `.text-xl` | `clamp(1.125rem, 1.25vw + 0.75rem, 1.25rem)` | 18px | 20px |
| `.text-2xl` | `clamp(1.25rem, 1.5vw + 0.75rem, 1.5rem)` | 20px | 24px |
| `.text-3xl` | `clamp(1.5rem, 2vw + 0.75rem, 1.875rem)` | 24px | 30px |
| `.text-4xl` | `clamp(1.75rem, 2.5vw + 1rem, 2.5rem)` | 28px | 40px |

## Usage

### Recommended (Semantic Classes)
```tsx
<h1 className="text-h1">Heading 1</h1>
<h2 className="text-h2">Heading 2</h2>
<h3 className="text-h3">Heading 3</h3>
<p className="text-body">Body text</p>
<small className="text-small">Small text</small>
<span className="text-eyebrow">EYEBROW TEXT</span>
```

### Alternative (Utility Classes)
```tsx
<h1 className="text-4xl">Large Heading</h1>
<p className="text-base">Body text</p>
<span className="text-sm">Small text</span>
```

### Direct CSS Variable Usage
```css
.my-custom-element {
  font-size: var(--font-size-h1);
}
```

## Benefits

1. **Proportional Scaling**: Fonts scale smoothly across all viewport sizes
2. **No Media Queries**: Single declaration handles all breakpoints
3. **Performance**: Browser handles scaling natively
4. **Accessibility**: Maintains readable sizes at all viewport widths
5. **Consistency**: All typography uses the same scaling system

## Viewport Scaling Examples

### H1 (40px max)
- 320px viewport: 28px
- 640px viewport: ~32px
- 960px viewport: ~36px
- 1280px viewport: ~38px
- 1920px+ viewport: 40px (max)

### Body (16px max)
- 320px viewport: 14px
- 640px viewport: ~15px
- 960px viewport: ~15.5px
- 1280px viewport: ~16px
- 1920px+ viewport: 16px (max)

## Browser Support

`clamp()` is supported in all modern browsers:
- Chrome 79+
- Firefox 75+
- Safari 13.1+
- Edge 79+

For older browsers, the fallback is the minimum value (first parameter in clamp).

## Customization

To adjust scaling, modify the clamp values in `app/globals.css`:

```css
/* Increase scaling rate */
--font-size-h1: clamp(1.75rem, 3vw + 1rem, 2.5rem);

/* Decrease scaling rate */
--font-size-h1: clamp(1.75rem, 2vw + 1rem, 2.5rem);

/* Change min/max bounds */
--font-size-h1: clamp(2rem, 2.5vw + 1rem, 3rem); /* 32px - 48px */
```
