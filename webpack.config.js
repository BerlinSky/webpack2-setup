const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const extractPlugin = new ExtractTextPlugin({
//   filename: 'main.css'
// });

const mainCssExtractPlugin = new ExtractTextPlugin({
  filename: 'main.[chunkhash].css'
});

const cssExtractPlugin = new ExtractTextPlugin({
});

const providerPlugin = new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})

const cleanWebPackPlugin = new CleanWebpackPlugin(['dist'])

const babelOptions = {
  presets:  [
    [ 'es2015' ],
    [ 'es2017' ]
  ],
  plugins: ['transform-runtime', 'transform-decorators-legacy', 'transform-class-properties', 'transform-object-rest-spread']
}

const entryConfig = {
  'vendor': [path.resolve(__dirname, 'app/ts/vendor.ts')],
  'polyfills': [path.resolve(__dirname, 'app/ts/polyfills.ts')],
  'app': [
    path.resolve(__dirname, 'app/ts/main.ts'),
    path.resolve(__dirname, 'app/sass/main.scss')
  ]
}

const outputConfig = {
  path: path.resolve(__dirname, 'dist'),
  filename: '[name].js',
  chunkFilename: '[id].chunk.js'
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

const tsRules = {
  test: /\.ts(x?)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'babel-loader',
      options: babelOptions
    },
    {
      loader: 'awesome-typescript-loader'
    },
    {
      loader: 'angular-router-loader'
    },
    {
      loader: 'angular2-template-loader'
    },
    {
      loader: 'tslint-loader'
    }
  ]
}

const sassRulesForMain = {
  test: /\.scss$/,
  exclude: /node_modules/,
  exclude: path.resolve(__dirname, 'app', 'ts'),

  use: mainCssExtractPlugin.extract({
    use: [
      {
        loader: "css-loader",
        options: {
          sourceMap: true
        }
      },
      {
        loader: "resolve-url-loader",
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: 'inline'
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  })
}

const sassRulesForComponent = {
  test: /\.scss$/,
  // exclude: /node_modules/,
  include: path.resolve(__dirname, 'app', 'ts'),

  use: cssExtractPlugin.extract({
    use: [
      {
        loader: 'raw-loader'
        // options: {
        //   sourceMap: true
        // }
      },
      {
        loader: "postcss-loader",
        options: {
          sourceMap: 'inline'
        }
      },
      {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
      }
    ]
  })
}

const htmlRules = {
  test: /\.html$/,
  exclude: /node_modules/,
  use: ['html-loader']
}

const pugRules = {
  test: /\.pug$/,
  exclude: /node_modules/,
  use: [
    // { loader: 'html-loader' },
    // { loader: 'pug-html-loader',
    { loader: 'pug-ng-html-loader',
      options: {
        name: '[name],[ext]'
      }
    }
  ]
}

const fontRules = {
  test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
  exclude: '/app/images/',
  use: [
    {
      loader: 'file-loader',
      options: {
          name: '[name].[ext]',
          outputPath: 'fonts/'
        }
    }
  ]
}

const imageRules = {
  test: /\.(jpg|png|ico|svg)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'images/',
      }
    }
  ]
}

module.exports = (env = {}) => {
  // Variables set by npm scripts in package.json
  const isProduction = env.production === true

  // const minifyPlugin = new webpack.LoaderOptionsPlugin({
  //   minimize: (isProduction) ? true : false,
  //   debug: (isProduction) ? false : true
  // })

  return {
    entry: entryConfig,
    output: outputConfig,

    devtool: (() => {
      return (isProduction) ? 'source-map' : 'cheap-module-eval-source-map'
    })(),

    module: {
      rules: [ tsRules, jsRules, sassRulesForMain, sassRulesForComponent, htmlRules, pugRules, fontRules, imageRules ]
    },

    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },

    plugins: [
      // extractPlugin,
      mainCssExtractPlugin,
      providerPlugin,
      cleanWebPackPlugin,

      new webpack.optimize.CommonsChunkPlugin({
        // name: 'vendor',
        // filename: 'vendor.js',
        name: ['app', 'vendor', 'polyfills']
      }),

      // Workaround for angular/angular#11580
      new webpack.ContextReplacementPlugin(
        // The (\\|\/) piece accounts for path separators in *nix and Windows
        /angular(\\|\/)core(\\|\/)@angular/,
        path.resolve(__dirname, 'app/ts'),
        {} // a map of your routes
      ),

      new HtmlWebpackPlugin({
        favicon: 'app/favicon.png',
        template: 'app/index.pug'
      }),

      // minifyPlugin
      new webpack.LoaderOptionsPlugin({
        minimize: false,
        debug: true
      }),

      new webpack.optimize.UglifyJsPlugin({
        beautify: true,
        sourceMap: true,
        mangle: {
          screw_ie8: false,
          keep_fnames: true
        },
        compress: {
          screw_ie8: false,
          warnings: false,
          comparisons: false
        },
        comments: false
      })
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

  }
};
