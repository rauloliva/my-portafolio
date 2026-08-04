const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [
      path.join(__dirname, 'styles'),
      path.join(__dirname, 'styles/modules')
    ],
  },
  allowedDevOrigins: ['192.168.100.143'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'logo.clearbit.com',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'cdn-icons-png.flaticon.com',
        pathname: '**'
      }
    ]
  },
  turbopack: {
    
  },
  webpack: config => {
    config.module.rules.push({
      test: /\.pdf$/i,
      type: 'asset/source',
    });

    return config;
  },
};
