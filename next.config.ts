// next.config.js
// @ts-check

const path = require('path');
const withNextIntl = require('next-intl/plugin')();

/**
 * @type {import('next').NextConfig}
 */
const baseConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets.vercel.com'],
  },
};

/**
 * @type {import('next').NextConfig}
 */
const fullConfig = {
  ...baseConfig,

  /**
   * Custom webpack configuration
   *
   * @param {import('webpack').Configuration} config
   * @returns {import('webpack').Configuration}
   */
  webpack(config) {
    // Alias @ → ./src
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    return config;
  },
};

// Export wrapped with next-intl
module.exports = withNextIntl(fullConfig);
