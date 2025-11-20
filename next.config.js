/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['nl', 'en'],
    defaultLocale: 'nl',
  },
};

module.exports = nextConfig;