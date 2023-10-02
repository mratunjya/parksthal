/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});

const nextConfig = {
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  async redirects() {
    return [
      {
        source: "/",
        destination: "/Log-In",
        permanent: false, // Set to true for a permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
