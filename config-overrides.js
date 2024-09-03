const path = require('path');

module.exports = {
  webpack: (config) => {
    config.resolve.fallback = {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "crypto": require.resolve("crypto-browserify"),
      "stream": require.resolve("stream-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "querystring": require.resolve("querystring-es3"),
      "url": require.resolve("url/"),
      "buffer": require.resolve("buffer/"),
      "util": require.resolve("util/"),
      "os": require.resolve("os-browserify/browser")
    };
    return config;
  }
};
