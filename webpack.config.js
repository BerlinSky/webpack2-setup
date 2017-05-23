const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractHtml = new ExtractTextPlugin('[name].html');

const extractSass = new ExtractTextPlugin({
  filename: "[name].css",
  // filename: "[name].[contenthash].css",
  // disable: process.env.NODE_ENV === "development"
});

const extractJsVendor = new webpack.optimize.CommonsChunkPlugin({
  name: "vendor",
  minChunks: Infinity
});

const extractJsCommon = new webpack.optimize.CommonsChunkPlugin({
  name: "main",
  minChunks: Infinity,
  chunks: ["index", "service"],
  sourceMap: true
})

const config = {
  stats: {
    // assets: false,
    // colors: true,
    // version: false,
    // hash: true,
    // timings: true,
    // chunks: false,
    // chunkModules: false
  },

  context: __dirname,

  entry: {
    vendor: [
      'jquery', 'parallax-js'
    ],
    main: [
      path.resolve(__dirname, 'app/main.scss'),
      path.resolve(__dirname, 'app/main.js')
    ],
    index: [
      path.resolve(__dirname, 'app/pages/index.pug')
    ],
    service: [
      path.resolve(__dirname, 'app/pages/service.pug')
    ],
    parallax: [
      path.resolve(__dirname, 'app/pages/parallax.pug')
    ],
    scrolling: [
      path.resolve(__dirname, 'app/pages/scrolling.pug')
    ]
  },

  output: {
    publicPath: '/',
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    sourceMapFilename: '[name].js.map'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'es2017'],
              plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
            }
          },
          {
            loader: 'eslint-loader'
          }]
      },
      {
        test: /\.html$/,
        loader: 'html', options: {
          root: path.resolve(__dirname, 'public'),
          attrs: ['img:src', 'link:href']
        }
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        loader: 'file?name=assets/[name].[hash].[ext]'
      },
      {
        test: /\.pug$/,
        use: extractHtml.extract({
          use: [
            {
              loader: 'html-loader'
            },
            {
              loader: 'pug-html-loader', options: {
                'basedir': path.resolve(__dirname, '/')
              }
            }
          ]
        })
      },
      {
        test: /\.scss$/,
          use: extractSass.extract({
            use: [
              {
                // translates CSS into CommonJS
                loader: "css-loader", options: {
                  importLoaders: 1,
                  sourceMap: true
                }
              },
              {
                // apply auto-prefixer
                loader: "postcss-loader",
              },
              {
                // compiles Sass to CSS
                loader: "sass-loader", options: {
                  sourceMap: true
                }
              }],
              // use style-loader in development
              // creates style nodes from JS strings
            fallback: "style-loader"
          })
      }]
  },

  plugins: [
    extractHtml,
    new HtmlWebpackPlugin({
      // template: 'src/index.html'
      filename: '[name].html'
    }),
    extractSass,
    extractJsVendor,
    extractJsCommon
  ],

  devServer: {
    host: 'localhost',
    port: 7000,
    open: true,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};

// Check if build is running in production mode, then change the sourcemap type
if (process.env.NODE_ENV === "production") {
  // No sourcemap for production
  config.devtool = "";

  // Add more configuration for production here like
  // Offline plugin
  // Etc,
}

module.exports = config;
