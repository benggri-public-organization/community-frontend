/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return [
        {
            source: '/back-end/:path*',
            destination: process.env.NEXT_PUBLIC_BACK_API_URL
        }
    ];
  }
}

module.exports = nextConfig
