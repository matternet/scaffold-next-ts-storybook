require('dotenv-flow').config();

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  /**
   * Any Next.js configuration needed
   */
};

module.exports = withBundleAnalyzer(nextConfig);
