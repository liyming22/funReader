const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const AutoDllPlugin = require('autodll-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HappyPack = require('happypack')

// const isProduction = process.env.NODE_ENV == 'production'

module.exports = {
  entry: {
    bundle: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, '../dist'),
    chunkFilename: '[id].chunk.js',
    publicPath: 'production' == process.env.NODE_ENV ? './' : ''
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: 'babel-loader',
        // exclude: /node_modules/
        use: 'happypack/loader',
        include: path.resolve(__dirname, '../src')
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },

      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
          'postcss-loader',
        ]
      },

      {
        test: /\.scss$/,
        use: [
          process.env.NODE_ENV !== 'production'
            ? 'vue-style-loader'
            : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
        ]
      },

      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html')
    }),
    new VueLoaderPlugin(),
    new AutoDllPlugin({
      inject: true, //  自动把打包出来的第三方库文件插入到HTML
      debug: true,
      filename: '[name]_[hash].js',
      path: './dist',
      entry: {
        vendor: ['vue', 'vue-router', 'vuex', 'vant', 'axios']
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HappyPack({
      loaders: ['babel-loader']
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: ['.vue', '.js']
  }
}