var path = require('path');
var webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

var clientBundleConfig = {
  entry: {
    main: ['./ClientApp/boot-client.js'],
  },
  output: {
    path: path.join(__dirname, 'wwwroot', 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: /ClientApp/, loader: 'babel-loader' },
      { test: /\.css/, loader: "style!css" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' })
  ],
  devtool: 'inline-source-map'
};

var serverBundleConfig = {
  entry: {
    'boot-server' : path.join(__dirname, 'ClientApp', 'boot-server.js')
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'ClientApp', 'dist'),
    libraryTarget: 'commonjs'
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: /ClientApp/, loader: 'babel-loader' },
      { test: /\.css/, loader: "style!css" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  },
  //target: 'node',
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  target: 'node',
  devtool: 'inline-source-map',
  externals: [nodeExternals()] // Don't bundle .js files from node_modules
};

module.exports = [clientBundleConfig, serverBundleConfig];