// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'medical-calculator.s3.sa-east-1.amazonaws.com',
      },
    ],
  },
}

module.exports = nextConfig
