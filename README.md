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
### Add Webpack Tree Shaking (use { modules: false } on babel-2015 preset)

### Next up: add support for pug (option #2)
### Next up: add support for multiple files
### Next up: add support for production

### Steps:
1. Create a new branch: tree-shaking
2. Build the app 
3. Note down the bundle.js file size from the Dev-Tool / Network tab (Red state)
4. Compare the webpack.config to make the change
5. Build the app again
6. Note down the bundle.js file size from the Dev-Tool / Network tab (Green state)

7. The key is in this line
```
 [ 'es2015', { modules: false } ],
 ```