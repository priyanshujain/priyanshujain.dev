# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Gatsby-based personal website and blog for Priyanshu Jain (pjay.in). It's a static React site that showcases writings, papers, and personal projects.

## Development Commands

- **Start development server**: `npm run develop` or `npm start` (runs on all interfaces with `-H 0.0.0.0`)
- **Build for production**: `npm run build`
- **Serve built site**: `npm run serve`
- **Format code**: `npm run format` (uses Prettier on JS/JSX files)
- **Deploy**: `./deployment/deploy.sh [environment]` (uses Netlify, requires .env file)

## Architecture

### Page Structure
- **Static pages**: Located in `src/pages/` as individual JS files
- **Blog posts**: Each blog post is a separate React component in `src/pages/writings/`
- **Route generation**: Uses `gatsby-node.js` with custom routes from `src/routes/index.js`
- **Static assets**: Images and documents in `static/` directory

### Blog System
The blog uses a simple file-based approach:
- Each blog post is a React component in `src/pages/writings/`
- The main writings index (`src/pages/writings/index.js`) manually lists all blog posts with dates
- No markdown processing - blog content is written directly in React/JSX
- **When adding new blog posts**: Update both the component file AND the index listing

### Component Organization
- **Layout**: `src/components/layout/` - main page wrapper with header/footer
- **Styling**: Tachyons-based CSS with custom styles in `src/styles/`
- **Images**: Gatsby image processing with `gatsby-plugin-image`

### Key Files
- `gatsby-config.js`: Site metadata, plugins, and configuration
- `gatsby-node.js`: Page generation using routes
- `src/styles/`: CSS organization with separate files for fonts, spacing, etc.
- `static/`: PDF papers and other static assets

## Deployment

Uses Netlify for hosting. The deploy script:
1. Sources environment variables from `.env` or `.env.[environment]`
2. Runs `npm run build`
3. Deploys to Netlify using site API ID

## Notes

- Uses React 18 with Gatsby 5
- No test framework currently configured
- Prettier for code formatting
- Site generates sitemap automatically
- PWA manifest configured but offline plugin disabled