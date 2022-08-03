const path = require('path')
const { VueLoaderPlugin } = require('vue-loader') // vue loader須額外引入並掛入plugins(*1)
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode:"development",
  entry: './src/main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: {
          loader: 'file-loader',
          options: {
            outputPath: 'images',
            name: '[name]-[hash:8].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue loader須額外引入並掛入plugins(*1)
    new HtmlWebpackPlugin({template: "./public/index.html"}),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    // static: false,
    port: 8888,
    open: true
  }
}