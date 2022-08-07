const path = require('path')
const { VueLoaderPlugin } = require('vue-loader') // vue loader須額外引入並掛入plugins(*1)
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const ESLintOptions = {
  context: path.resolve(__dirname, 'src')
}

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
        type: 'asset'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(), // vue loader須額外引入並掛入plugins(*1)
    new HtmlWebpackPlugin({template: "./public/index.html"}),
    new ESLintPlugin(ESLintOptions)
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