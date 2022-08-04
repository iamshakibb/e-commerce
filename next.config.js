/** @type {import('next').NextConfig} */
const path = require("path");
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
      // loader: 'cloudinary',
      // path: '<cloudinary-path-here>'
  },
  reactStrictMode: true,
};

module.exports = nextConfig



// Modify webpack for modal
// webpack(config, { buildId, dev, isServer, defaultLoaders, webpack }) {
//   config.module.rules.push({
//     test: /\.svg$/,
//     use: ['@svgr/webpack'],
//   });
//   config.resolve.alias["react"] = path.resolve("./node_modules/react");
//   return config;
// },