var path = require('path');
var webpack = require('webpack');

module.exports = {
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
