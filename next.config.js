/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.datocms-assets.com'],
  },
  async redirects() {
    return [
      {
        source: '/auth',
        destination: '/auth/login',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig
