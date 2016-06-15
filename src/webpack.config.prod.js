var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pkg = require('./package.json');

module.exports = {
  entry: {
    main: './ClientApp/boot-client.js',
    vendor: Object.keys(pkg.dependencies)
  },
  output: {
    path: path.join(__dirname, 'wwwroot', 'dist'),
    filename: '[name].min.js',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, include: /ClientApp/, loader: 'babel-loader' },
      { test: /\.css/, loader:ExtractTextPlugin.extract('style', 'css'), },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
    ]
  },
  resolve: {
    extensions: [ '', '.js', '.jsx' ]
  },
  plugins: [
    new ExtractTextPlugin('site.min.css'),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false, screw_ie8: true }}),
    new webpack.optimize.CommonsChunkPlugin('vendor', '[name].min.js'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.ProvidePlugin({ $: 'jquery', jQuery: 'jquery' }),
  ],
};
