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
  optimizeFonts: false,
  reactStrictMode: true,

  compiler: {
    styledComponents: true,
  },

  images: {
    domains: ["lh3.googleusercontent.com", "platform-lookaside.fbsbx.com"],
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
