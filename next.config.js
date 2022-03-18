/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.goat.com", "images.stockx.com"],
  },
};

module.exports = nextConfig;
