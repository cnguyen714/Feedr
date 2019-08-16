const path = require('path');

module.exports = {
  entry: './frontend/feedr.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/env', '@babel/react']
        }
      },
      {
        test: /\.(jpg|jpeg|png)(\?.*)?$/, // Load only .jpg .jpeg, and .png files
        use: {
          loader: 'file-loader',
          options: {
            name: '[name][md5:hash].[ext]', // Name of bundled asset
            outputPath: '../webpack-assets', // Output location for assets. Final: `app/assets/webpack/webpack-assets/`
            publicPath: '/assets/webpack-assets/' // Endpoint asset can be found at on Rails server
          }
        }
      }
    ]
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
    alias: {
      assets: path.resolve(__dirname, 'app', 'assets'),
    }
  }
};
