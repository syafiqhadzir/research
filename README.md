# Research Portfolio & Blog

A professional research portfolio and blog built with Jekyll, focused on showcasing publications, research interests, and expertise.

## Key Features

- **Interactive Publications**: Real-time search and category filtering for research papers.
- **Modern UI**: Clean, responsive design with "Pill/Chip" aesthetic and smooth interactions.
- **Theme Support**: Customizable color themes (Light, Dark, Solarized, Sepia) with a sleek selector.
- **PWA Support**: Progressive Web App capabilities for offline access and installability.
- **SEO & Analytics**: Fully integrated with GA4 and optimized for search discovery.
- **WCAG AAA Compliance**: Enhanced accessibility with high-contrast themes, skip links, and semantic HTML.

## Getting Started

### Prerequisites

- Ruby 3.4+
- Bundler
- Node.js (for CI/CD and tooling)

### Local Development

1. Install dependencies:

   ```bash
   bundle install
   npm install
   ```

2. Run the development server:

   ```bash
   bundle exec jekyll serve
   ```

3. Open `http://localhost:4000` in your browser.

## Deployment

The site is automatically built and deployed via GitHub Actions upon pushing to the `main` branch.