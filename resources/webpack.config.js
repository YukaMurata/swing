var webpack = require('webpack');

module.exports = {
  entry: {
    index: './js/index.js'
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '[name].bundle.js',
    // 出力先のパス
    path: __dirname + './../js/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        test: /\.jsx?$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/, /\.test\.jsx?$/],
        loader: 'babel-loader'
      },
      {
        test: /\.coffee$/,
        use: ['coffee-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
    // new webpack.optimize.UglifyJsPlugin()
  ]
};

if (process.env.NODE_ENV === 'production') {
  module.exports.plugins = [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_console: true
      }
    })
  ];
}
