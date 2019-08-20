module.exports = {
  assets: ['./assets/fonts'], // stays the same
  dependencies: {
    '<dependency>': {
      platforms: {
        android: null, // disable Android platform, other platforms will still autolink
      },
    },
  },
};