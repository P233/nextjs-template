module.exports = {
  svgoConfig: {
    plugins: [
      { removeDimensions: true },
      {
        uniqueID: require("svgo-unique-id")
      }
    ]
  }
};
