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
        destination: "/log-in",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
