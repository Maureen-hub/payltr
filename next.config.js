/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  experimental: {
    serverActions: {
      allowedOrigins: ['*.replit.dev', '*.repl.co'],
    },
  },
};

module.exports = nextConfig;