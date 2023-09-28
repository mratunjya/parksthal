/** @type {import('next').NextConfig} */
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
