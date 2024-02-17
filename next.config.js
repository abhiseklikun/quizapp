// next.config.js
module.exports = {
    // Enable or disable the automatic generation of ETags
    generateEtags: true,
  
    // Customize the behavior of page extensions
    pageExtensions: ['jsx', 'js', 'ts', 'tsx'],
  
    // Specify a custom webpack configuration
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
      // Your custom webpack configuration goes here
      return config;
    },
  
    // Add custom headers to all responses
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
          ],
        },
      ];
    },
  };
  