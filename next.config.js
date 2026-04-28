/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Image optimization for Vercel
  images: {
    unoptimized: false,
    formats: ['image/avif', 'image/webp'],
  },
  // Enable SWR caching
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 5,
  },
  // Compress response
  compress: true,
  // Disable problematic CSS optimization
  experimental: {
    optimizeCss: false,
  },
}

module.exports = nextConfig
