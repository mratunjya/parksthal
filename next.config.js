/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    scope: "/",
    sw: "sw.js",
    dest: "public",
    register: true,
    cachingStrategy: "offline",
    disable: process.env.NODE_ENV !== "development",
  },
});

const nextConfig = {
  optimizeFonts: false,
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
