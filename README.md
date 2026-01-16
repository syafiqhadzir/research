# Research Portfolio & Blog

A professional research portfolio and blog built with Jekyll and Sass (7-1 architecture), focused on
showcasing publications, research interests, and expertise.

## Key Features

- **Interactive Publications**: Real-time search and category filtering for research papers.
- **Modern UI**: Clean, responsive design with "Pill/Chip" aesthetic.
- **Expert Sass Architecture**: Organized using the 7-1 pattern with strict linting.
- **PWA Support**: Progressive Web App capabilities for offline access and installability.
- **SEO & Analytics**: Fully integrated with GA4 and optimized for search discovery.
- **WCAG Compliance**: Enhanced accessibility with semantic HTML and careful contrast.

## Getting Started

### Prerequisites

- Ruby 3.4+
- Bundler
- Node.js 22+ (for Sass compilation and tooling)

### Local Development

1. Install dependencies:

   ```bash
   bundle install
   npm install
   ```

2. Run the development server (includes Sass watch):

   For styling development:

   ```bash
   npm run dev
   ```

   For content development (Jekyll serve only):

   ```bash
   bundle exec jekyll serve
   ```

   _Note: `npm run dev` typically runs Sass in watch mode. For a full dev experience, you might want
   to run Jekyll and Sass concurrently, or use the pre-built `styles.css` if not editing styles._

3. Open `http://localhost:4000` in your browser.

### Linting & Formatting

We enforce strict code quality rules.

```bash
# Run all linters (Styles, JS, Markdown)
npm run lint

# Format code
npm run format
```

## Deployment

The site is automatically built and deployed via GitHub Actions upon pushing to the `main` branch.
The workflow compiles Sass, runs PostCSS/Autoprefixer, and builds the Jekyll site.
