const path = require('path');

const htmlWebPackPlugin = require('html-webpack-plugin');
const { cleanWebpackPlugin } = require('clean-webpack-plugin');
const { postcssPresetEnv } = require('postcss-preset-env');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      // JavaScript
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      // CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      // Images
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },
      // Fonts and SVGs
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
        type: 'asset/inline',
      },
    ],
  },
  plugins: [
    new htmlWebPackPlugin({
      title: 'react-webpack-app',
      template: './src/template.html',
      filename: './index.html',
    }),
    new cleanWebpackPlugin(),
    new postcssPresetEnv(),
  ],
};
