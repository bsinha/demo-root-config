const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const path = require("path");

module.exports = (webpackConfigEnv, argv) => {
  const orgName = "bipsin";
  const defaultConfig = singleSpaDefaults({
    orgName,
    projectName: "root-config",
    webpackConfigEnv,
    argv,
    disableHtmlGeneration: true,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    // output: {
    //   publicPath:
    //     argv.mode === "development"
    //       ? "http://localhost:8080/"
    //       : "https://demo-root-config.netlify.app/",
    // // },
  
    // resolve: {
    //   extensions: [".jsx", ".js", ".json"],
    // },
  
    devServer: {
      port: 8080,
      historyApiFallback: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      }
    },
    // entry: {
    //   polyfills: path.resolve(__dirname, "src") + "/polyfills.ts",
    //   index: path.resolve(__dirname, "src") + "/root-config.ts",
    //   "root-page": path.resolve(__dirname, "src") + "/apps/root-page.ts",
    // },
    // output: {
    //   path: path.resolve(__dirname, "./dist"),
    //   filename: "[name].js",
    // },
    plugins: [
      // new ModuleFederationPlugin({
      //   name: "header",
      //   filename: "remoteEntry.js",
      //   remotes: {},
      //   exposes: {
      //   //  "./Header": "./src/Header",
      //   },
      //   shared: require("./package.json").dependencies,
      // }),
      new HtmlWebpackPlugin({
        inject: false,
        template: "src/index.ejs",
        templateParameters: {
          isLocal: webpackConfigEnv && webpackConfigEnv.isLocal,
        },
      }),
    ],
  });
};
