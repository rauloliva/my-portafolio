module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['logo.clearbit.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source',
    });

    return config;
  },
};
