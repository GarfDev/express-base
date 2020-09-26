module.exports = {
  plugins: [
    ["inline-dotenv"],
    ["@babel/plugin-transform-typescript"],
    ["@babel/plugin-transform-modules-commonjs"],
    ["@babel/plugin-proposal-async-generator-functions"],
    ["@babel/plugin-proposal-optional-catch-binding"],
    ["@babel/plugin-proposal-optional-chaining"],
    ["@babel/plugin-proposal-decorators", { legacy: true }],
    ["@babel/plugin-proposal-class-properties", { loose: true }], //must be after @babel/plugin-proposal-decorators

    [
      "module-resolver",
      {
        //"root": ["./src", "./test"],
        alias: {
          //"__root": ".",
          "@": "./server",
          //"#": "./src/assets",
          //"_": "./src/assets/_",
          //"!": "./static"
        },
      },
    ],
  ],
};
