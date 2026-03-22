/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["files.quartr.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "files.quartr.com",
      },
    ],
  },
}

module.exports = nextConfig
