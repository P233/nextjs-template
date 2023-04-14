module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  sassOptions: {
    prependData: `@use "styles/_common" as *;`
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};
