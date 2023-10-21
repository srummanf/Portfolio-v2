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
  env: {
    RESEND_API_KEY:'re_N3WLfEEQ_LdBUrJrAiBcWXZEU1fcTyAMo',
  },
  
}


module.exports = nextConfig
