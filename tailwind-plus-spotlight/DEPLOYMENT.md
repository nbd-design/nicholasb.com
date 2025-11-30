# GitHub Pages Deployment Guide

This template is configured for deployment to GitHub Pages using static export. The pages are already built and ready to deploy.

## Prerequisites

- A GitHub repository
- Node.js 20+ installed locally (for testing)
- GitHub Pages enabled in your repository settings

## Quick Start

### Option 1: Automatic Deployment (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**
   - The workflow will automatically deploy on push to `main`

3. **Set Environment Variable (Optional)**
   - Go to **Settings** → **Secrets and variables** → **Actions**
   - Add a new repository secret named `NEXT_PUBLIC_SITE_URL`
   - Set the value to your GitHub Pages URL (e.g., `https://yourusername.github.io/repository-name`)
   - If not set, it will default to `https://yourusername.github.io`

4. **Wait for deployment**
   - The GitHub Actions workflow will build and deploy your site
   - Check the **Actions** tab to see the deployment progress
   - Your site will be live at `https://yourusername.github.io/repository-name`

### Option 2: Manual Deployment

1. **Build the site locally**
   ```bash
   cd spotlight-js  # or spotlight-ts
   npm install
   npm run build
   ```

2. **Deploy the `out` folder**
   - The build creates an `out` folder with static files
   - You can deploy this folder using any static hosting service
   - For GitHub Pages, push the `out` folder contents to the `gh-pages` branch

## Configuration

### Custom Domain

If deploying to a custom domain or subdirectory:

1. **Update `next.config.mjs`**
   ```javascript
   const nextConfig = {
     // ... other config
     basePath: '/repository-name', // Uncomment and set your repository name
     assetPrefix: '/repository-name', // Uncomment if using basePath
   }
   ```

2. **Update `.env.local`**
   ```
   NEXT_PUBLIC_SITE_URL=https://yourdomain.com
   ```

### Environment Variables

Create a `.env.local` file in the project root:

```
NEXT_PUBLIC_SITE_URL=https://yourusername.github.io/repository-name
```

For GitHub Actions, set this as a repository secret named `NEXT_PUBLIC_SITE_URL`.

## Project Structure

The template includes the following pages:

- **Home** (`/`) - Main landing page
- **About** (`/about`) - About page
- **Articles** (`/articles`) - Blog/articles listing
- **Projects** (`/projects`) - Projects showcase
- **Speaking** (`/speaking`) - Speaking engagements
- **Uses** (`/uses`) - Tools and resources
- **Thank You** (`/thank-you`) - Newsletter thank you page
- **Feed** (`/feed.xml`) - RSS feed

## Customization

Before deploying, you should customize:

1. **Content** - Edit pages in `src/app/`
2. **Author information** - Update in `src/app/feed.xml/route.js` (or `.ts`)
3. **Metadata** - Update in `src/app/layout.jsx` (or `.tsx`)
4. **Styling** - Modify Tailwind classes or CSS files

## Troubleshooting

### Build Fails

- Ensure Node.js 20+ is installed
- Run `npm install` to install dependencies
- Check that all environment variables are set

### Pages Not Loading

- Verify `basePath` is correctly set in `next.config.mjs` if using a subdirectory
- Check that `NEXT_PUBLIC_SITE_URL` matches your actual GitHub Pages URL
- Ensure GitHub Pages is enabled in repository settings

### Feed.xml Not Working

- The feed is generated at build time
- Ensure articles have proper metadata (title, date, description)
- Check that `NEXT_PUBLIC_SITE_URL` is set correctly

## Local Development

To test locally before deploying:

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to preview your site.

To test the static export locally:

```bash
npm run build
npx serve out
```

## Notes

- The site uses static export, so all pages are pre-rendered at build time
- Dynamic routes and API routes are not supported with static export
- Images are unoptimized for static export compatibility
- The feed.xml is generated statically at build time

