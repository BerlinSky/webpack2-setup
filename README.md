## Webpack 2 - Basic
### Use webpack-dev-server for development
### Use webpack.config.js
### Generate source-map for SCSS 
### Compile SCSS without importing it from index.js
### Add support for eslint
### Add support for babel preset 2017
### Add JS source-map
### Customize port and start webpack-dev-server
### Use the third party library, such as jquery and Clean up the "dist" folder
### Add support for html templating
### Add support for images 
### Add support for pug 
### Add application favicon 
### Add Webpack Tree Shaking
### Generate multiple ouput (html) files


### Next up: add support for pug (option #2)
### Next up: add support for multiple files
### Next up: add support for production


### Steps:
1. Update webpack.config.js 
```
  const extractPlugin = new ExtractTextPlugin({
    filename: 'main.[chunkhash].css'
  });
```

2. Update webpack.config.js 
```
 output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[chunkhash].js',
    // publicPath: '/dist'
  },
```

1. Create a new branch catche-busting
2. Switch to the new branch
3. Run "git branch" to confirm the correct branch
4. Update webpack.config 
  a. Update webpack.config.js 
  ```
    const extractPlugin = new ExtractTextPlugin({
      filename: 'main.[chunkhash].css'
    });
  ```

  b. Update webpack.config.js 
  ```
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.[chunkhash].js',
      // publicPath: '/dist'
    },
  ```
5. Install text-plugin
```
  npm i -D extract-text-webpack-plugin
```
6. Start server to test
