const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
    module: {
      rules: [
        {
          test: /\.fbx$/,
          use: [
            {
              loader: "file-loader",
            },
          ],
        },
      ],
    },
  },
  /* use https://kc.admin.inno-js.ru/ to create config, navigations and features */
  navigations: {
    "dreamcatcher-frontend.main": "/dreamcatcher-frontend",
  },
  features: {
    "dreamcatcher-frontend": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "dreamcatcher-frontend.api": "/api",
  },
};
