import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
  // Enable static export for GitHub Pages
  output: 'export',
  // Uncomment and set basePath if deploying to a subdirectory (e.g., /repository-name/)
  // basePath: '/repository-name',
  // Uncomment if using basePath
  // assetPrefix: '/repository-name',
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
