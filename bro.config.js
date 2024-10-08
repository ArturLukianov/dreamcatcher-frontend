const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    output: {
      publicPath: `/static/dreamcatcher/${process.env.VERSION || pkg.version}/`,
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
    "dreamcatcher.main": "/dreamcatcher",
    "dreamcatcher.fpv": "/dreamcatcher/map/fpv",
    "dreamcatcher.graph": "/dreamcatcher/map/graph",
    "dreamcatcher.street": "/dreamcatcher/map/street"
  },
  features: {
    "dreamcatcher": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "dreamcatcher.api": "/api",
  },
};
