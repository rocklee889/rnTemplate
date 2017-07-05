const path = require('path');
const webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  entry: [
    path.join(__dirname, '../index.web.js')  // 之前创建的 index.web.js 文件路径
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        // exclude: /node_modules\/(?!chameleon | react-native-web)/,
        loader: 'babel-loader',
        query: { 
            cacheDirectory: true,
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?importLoaders=1!postcss-loader',
        })
      },
      {
        test: /\.(gif|jpe?g|png|svg)$/,
        loader: 'url-loader',
        query: { name: '[name].[hash:16].[ext]' }
      }
    ]
  },
  output: {
    /* 打包后的内容输出到config.js文件目录下的 dist 目录下（没有就创建一个） */ 
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'   // 打包后的文件名
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
    // }),
    /* webpack插件，用来打包本地的html模板到编译后的文件中 */
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src/index.html'),
    }),
    new ExtractTextPlugin({
      filename: 'css/index.css',
      allChunks: true
    }),
  ],
  resolve: {
    alias: {
      'react-native': 'chameleon',
      'chameleon/native': 'chameleon/web'
    },
    symlinks: false, // 对于npm link的模块，babel编译时将不会在linked模块中寻找.babelrc文件
    extensions: ["*", ".js", ".json", ".ios.js"]
  }
};
