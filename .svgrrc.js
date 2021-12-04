module.exports = {
  dimensions: true,
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            removeViewBox: false
          }
        }
      },
      "prefixIds"
    ]
  }
};
