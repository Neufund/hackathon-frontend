const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    historyApiFallback: true,
    // respond to 404s with index.html
    hot: true,
    // enable HMR on the server
    proxy: {
      '/node': {
        target: 'http://localhost:8545',
        pathRewrite: { '^/node': '' },
      },
    },
  },
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.tsx',
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new CopyWebpackPlugin([{ from: './public' }]),
  ],
  node: {
    __filename: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader',
            options: {
              minimize: isProduction,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
              camelCase: 'dashesOnly',
            },
          },
          { loader: 'sass-loader' },
        ],
      },
      { test: /\.json$/, use: 'json-loader' },
      { 
        test: /\.(j|t)sx?$/, 
        loader: "awesome-typescript-loader",
        exclude: /(node_modules|bower_components)/
      },
      { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
      {
        test: /\.(jpg|png)$/,
        loader: 'url-loader',
        options: {
          limit: 25000,
        },
      },
      {
        test: /\.(ttf|svg|eot|otf)$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[hash].[ext]',
        },
      },
    ],
  },
};
