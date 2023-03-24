/** @type {import('next').NextConfig} */
module.exports = {
  // nextConfig,
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: ["@stripe/firestore-stripe-payments"],

  webpack(config, { isServer }) {
    // svgを使うための記述
    config.module.rules.push({
      issuer: /\.[jt]sx?$/,
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
