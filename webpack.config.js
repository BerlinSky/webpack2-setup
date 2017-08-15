const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const providerPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})

const cleanWebPackPlugin = new CleanWebpackPlugin([path.resolve(__dirname, 'dist')])

const babelOptions = {
  presets:  [
    [ 'es2015', { modules: false } ],
    [ 'es2017' ]
  ],
  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
}

const entryConfig = {
  vendor: ['jquery', 'ramda'],
  main: [
    path.resolve(__dirname, 'app/js/main.js'),
  ]
}

const outputConfig = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js'
}

const jsRules = {
  test: /\.js$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: babelOptions
    },
    {
      loader: 'eslint-loader'
    }
  ]
}

module.exports = (env) => {
  // Variables set by npm scripts in package.json
  const isProduction = env.production === true

  const minifyPlugin = new webpack.LoaderOptionsPlugin({
    minimize: (isProduction) ? true : false,
    debug: (isProduction) ? false : true
  })

  return {
    entry: entryConfig,
    output: outputConfig,

    devtool: (() => {
      return (isProduction) ? 'hidden-source-map' : 'cheap-module-eval-source-map'
    })(),

    module: {
      rules: [ jsRules ]
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },

    plugins: [
      providerPlugin,
      cleanWebPackPlugin,

      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        chunks: ['vendor'],
        filename: 'vendor.js'
      }),

      new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        chunks: ['main'],
        filename: 'main.js'
      }),

      minifyPlugin
    ],

    watch: true,

    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: 1000
    }

    // devServer: {
    //   watchOptions: {
    //     aggregateTimeout: 300,
    //     poll: 1000
    //   }
    // }

  }
};
