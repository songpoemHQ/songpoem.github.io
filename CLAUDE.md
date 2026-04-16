# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static website for Songpoem Solutions LLP (songpoem.com), a technology consulting company. The site is built using Jekyll with the Minimal Mistakes theme and includes TailwindCSS for styling.

## Development Environment Setup

### Prerequisites
- Ruby (for Jekyll)
- Node.js (for TailwindCSS processing)
- Bundler gem

### Installation
```bash
# Install Ruby dependencies
bundle install

# Install Node.js dependencies  
npm install
```

## Common Development Commands

### Jekyll Development
```bash
# Build and serve the site locally
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### CSS Processing
```bash
# Process TailwindCSS
npm run build:css

# This compiles assets/css/main.scss to assets/css/main.css
```

### Known Issues & Fixes
- **libyaml Issue**: If `bundle install` fails with libyaml errors, run:
  ```bash
  brew install libyaml
  BUNDLE_BUILD__PSYCH="--with-libyaml-dir=$(brew --prefix libyaml)" bundle install
  ```
- **Sitemap**: Manual sitemap.xml is used instead of jekyll-sitemap plugin due to Ruby dependency issues

### Environment-specific Configuration
The site uses different gem configurations based on `JEKYLL_ENV`:
- **Development**: Uses Jekyll 4.2.2 with full plugin support
- **Production**: Uses Jekyll 3.9 with GitHub Pages compatibility

## Site Architecture

### Content Structure
- **Posts**: Blog articles in `_posts/` organized by category folders (AI, Blockchain, Business, etc.)
- **Pages**: Static pages in `_pages/` including about, team, portfolio, etc.
- **Collections**: 
  - `_services/`: Service offerings (AI implementation, blockchain development, etc.)
  - `_portfolio/`: Case studies and project showcases
  - `_skills/`: Technical capabilities
  - `_technologies/`: Technology-specific pages
  - `_why_us/`: Company differentiators
  - `_why_us_human/`: Team culture aspects

### Theme and Styling
- Uses Minimal Mistakes remote theme (`mmistakes/minimal-mistakes@4.27.0`)
- TailwindCSS integration via `jekyll-tailwindcss` plugin
- Custom CSS in `assets/css/custom.css`
- Main stylesheet processed from `assets/css/main.scss`

### Key Configuration Files
- `_config.yml`: Main Jekyll configuration with collections, plugins, and site settings
- `Gemfile`: Ruby dependencies with environment-specific gem loading
- `tailwind.config.js`: TailwindCSS configuration
- `postcss.config.js`: PostCSS processing configuration

### Asset Management
- Images stored in `assets/images/` with organized subdirectories
- JavaScript files in `assets/js/`
- CSS preprocessing handled by both Jekyll/Sass and TailwindCSS

### Content Management
- Blog posts use front matter with categories and tags
- Collections use custom permalinks and layouts
- Site navigation defined in `_data/navigation.yml`
- Analytics integrated with Google Analytics (tracking ID: G-GTYGD0GH2H)

## Development Workflow

1. Make content changes in markdown files
2. Update styles in `assets/css/main.scss` or use TailwindCSS classes
3. Run `npm run build:css` if TailwindCSS changes are made
4. Test locally with `bundle exec jekyll serve`
5. Build for production with `bundle exec jekyll build`

## GitHub Pages Deployment

### Automatic Deployment via GitHub Actions
The site uses GitHub Actions for deployment to handle non-whitelisted Jekyll plugins and TailwindCSS processing:

1. **Push to main branch** triggers automatic deployment
2. **GitHub Actions workflow** (`/.github/workflows/jekyll.yml`):
   - Sets up Ruby and Node.js environments
   - Installs dependencies (gems + npm packages)
   - Builds TailwindCSS with `npm run build:css`
   - Builds Jekyll site with all plugins enabled
   - Deploys to GitHub Pages automatically

### Repository Settings Required
To enable GitHub Actions deployment:
1. Go to repository **Settings > Pages**
2. Set **Source** to "GitHub Actions"
3. The workflow will automatically deploy on next push

### Benefits of This Approach
- ✅ All Jekyll plugins work (including non-whitelisted ones)
- ✅ TailwindCSS processing included
- ✅ Automatic deployment on push
- ✅ Full SEO optimizations preserved
- ✅ No manual build/deploy steps needed

## Important Notes

- Custom domain: songpoem.com (configured via CNAME file)
- Uses environment-specific gem loading for development vs production
- TailwindCSS content paths are configured to scan Jekyll templates and content files
- Jekyll-sitemap plugin generates sitemap.xml automatically