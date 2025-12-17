/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // यह Vercel को Type Errors इग्नोर करने के लिए बोलेगा
    ignoreBuildErrors: true,
  },
  eslint: {
    // यह Vercel को ESLint Errors इग्नोर करने के लिए बोलेगा
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
