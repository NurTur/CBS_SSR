/* eslint-disable */
const merge = require("webpack-merge");
// Plugins
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
// Configs
const baseConfig = require("./webpack.base.config");

const prodConfiguration = env => {
  return merge([
    {
        output: {
            filename: '[name].[chunkhash].js',
        },
            optimization: {
               minimizer: [
                    new TerserPlugin(),
                    new OptimizeCssAssetsPlugin({}),
                ],
                runtimeChunk: 'single',
                splitChunks: {
                  chunks: 'all',
                  maxInitialRequests: Infinity,
                  minSize: 0,
                  cacheGroups: {
                    vendor: {
                      test: /[\\/]node_modules[\\/]/,
                     
                      name(module) {
                        // get the name. E.g. node_modules/packageName/not/this/part.js
                        // or node_modules/packageName
                        const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            
                        // npm package names are URL-safe, but some servers don't like @ symbols
                        return `npm.${packageName.replace('@', '')}`;
                      },
                    },
                  },
                },
              },           
        plugins: [ new MiniCssExtractPlugin(), new BundleAnalyzerPlugin()]
    }
  ]);
};

module.exports = env => {
  return merge(baseConfig(env), prodConfiguration(env));
};