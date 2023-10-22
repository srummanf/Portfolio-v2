/** @type {import('next').NextConfig} */


require('dotenv').config();

const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: true,
  },
  
  
}


module.exports = nextConfig
