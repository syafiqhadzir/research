# Contributing

We welcome contributions to improve this research portfolio. Please follow these guidelines to
ensure a smooth process.

## Code Style

- **Sass**: We follow the **7-1 Pattern**. Styles must be broken down into `abstracts`,
  `components`, `layout`, etc.
  - No vendor prefixes in source (handled by PostCSS).
  - Use modern syntax (e.g., `rgb(r g b / a)` or `color.change` instead of `rgba()`).
- **Formatting**: We use **Prettier** for all file types. Run `npm run format` before committing.
- **Linting**: Ensure all linters pass by running `npm run lint`.

## Workflow

1. Fork the repository.
2. Create feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`).
4. Push to the branch.
5. Open a Pull Request.

## Commit Messages

Please follow conventional commits:

- `feat:` for new features
- `fix:` for bug fixes
- `refactor:` for code restructuring
- `style:` for formatting changes
- `docs:` for documentation updates
