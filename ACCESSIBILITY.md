# WCAG AAA Accessibility Compliance

This project implements Web Content Accessibility Guidelines (WCAG) 2.1 Level AAA standards where possible.

## Implemented Features

### 1. Color Contrast (WCAG AAA - 7:1 ratio)
- **Text Colors**: All text meets 7:1 contrast ratio against backgrounds
  - `$neutral-700` on white: 10.28:1
  - `$neutral-900` on white: 15.3:1
  - `$accent-dark` (links): 7.09:1
  - White text on `$dark-bg`: 21:1 (perfect contrast)
- **Interactive Elements**: Minimum 4.5:1 for large text, 7:1 for normal text
- **Focus Indicators**: High contrast outlines (3px solid with background contrast)

### 2. Focus Indicators
- **Visible Focus**: 3px solid outline with 3px offset
- **Dual Indication**: Outline + box-shadow for multi-layered visibility
- **Skip Links**: Enhanced visibility with white outline on colored background
- **Keyboard Navigation**: All interactive elements keyboard accessible

### 3. Motion & Animation
- **Reduced Motion Support**: Respects `prefers-reduced-motion: reduce`
  - Animations disabled completely
  - Transitions reduced to 0.01ms
  - Scroll behavior changed to auto
- **Smooth Scrolling**: Only enabled when motion is acceptable

### 4. Semantic HTML & ARIA
- **Landmark Roles**: 
  - `<header role="banner">`
  - `<nav role="navigation" aria-label="...">`
  - `<main role="main" aria-label="Main content">`
  - `<footer role="contentinfo" aria-label="Site footer">`
- **ARIA Labels**: All interactive elements properly labeled
- **Live Regions**: Theme changes announced to screen readers
- **Heading Hierarchy**: Proper H1-H6 structure maintained

### 5. Screen Reader Support
- **Skip Links**: "Skip to main content" available at page top
- **Alt Text**: All images have descriptive alt attributes (via Jekyll/Markdown)
- **ARIA Live**: Theme toggle announces changes
- **SR-Only Classes**: Content hidden visually but available to screen readers

### 6. Touch Targets
- **Minimum Size**: 48x48px (exceeds WCAG AAA 44x44px requirement)
  - Theme toggle button: 48x48px
  - All buttons meet minimum size
- **Spacing**: Adequate spacing between interactive elements

### 7. Text & Typography
- **Resizable**: Text can be zoomed to 200% without loss of functionality
- **Line Height**: 1.5 for body text (WCAG AAA)
- **Paragraph Width**: Max 680px (70-80 characters per line)
- **Font Weights**: Clear hierarchy with sufficient weight differences

### 8. High Contrast Mode
- **Windows High Contrast**: Respects `prefers-contrast: high`
- **Custom Outlines**: Elements maintain visibility in high contrast
- **Border Enforcement**: Critical elements have forced borders

### 9. Keyboard Navigation
- **Tab Order**: Logical and consistent
- **Focus Trapping**: Modal/dialog focus management (where applicable)
- **Keyboard Shortcuts**: Theme toggle accessible via keyboard
- **No Keyboard Traps**: All focusable elements can be exited

### 10. Error Prevention & Recovery
- **Form Validation**: Clear error messages (where forms exist)
- **Confirmation**: Important actions have confirmation
- **Undo**: Changes can be reversed where applicable

## Utility Classes

### Screen Reader Only
```html
<span class="sr-only">Descriptive text for screen readers</span>
```

### Focus Visible Only
```html
<div class="sr-only-focusable">
  Visible only when focused (for skip links)
</div>
```

### High Contrast
```html
<div class="high-contrast-border">
  Has border in high contrast mode
</div>
```

## Testing Recommendations

### Automated Testing
- **axe DevTools**: Run in Chrome/Firefox
- **WAVE**: Browser extension for visual feedback
- **Lighthouse**: Built into Chrome DevTools

### Manual Testing
1. **Keyboard Only**: Navigate entire site with Tab/Shift+Tab
2. **Screen Reader**: Test with NVDA (Windows) or VoiceOver (Mac)
3. **Zoom**: Test at 200% zoom level
4. **High Contrast**: Enable Windows High Contrast mode
5. **Reduced Motion**: Enable in system preferences

### Browser Testing
- Chrome/Edge: Latest + last 2 versions
- Firefox: Latest + ESR
- Safari: Latest + last 2 versions

## Known Limitations

While we strive for AAA compliance:
- **External Content**: Third-party embeds may not meet AAA standards
- **Images**: Alt text quality depends on content authors
- **Dynamic Content**: JavaScript-rendered content follows best practices

## Reporting Issues

If you encounter accessibility issues:
1. Note the specific barrier
2. Include browser/assistive technology info
3. Provide steps to reproduce
4. Open an issue on GitHub

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Inclusive Design Principles](https://inclusivedesignprinciples.org/)
