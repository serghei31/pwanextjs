/** @type {import('next').NextConfig} */
const withPWA = require("@ducanh2912/next-pwa");

const nextConfig = {
  ...withPWA.default({
    dest: "public",
    register: true,
    skipWaiting: true,
  }),
};

module.exports = nextConfig;
