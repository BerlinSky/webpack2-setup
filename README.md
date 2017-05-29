## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js 
### Inject CSS 

#### Steps
1. Install css-loader and style-loader as DEV dependencies
  ```
  npm i css-loader -D
  npm i style-loader -D
  ```
2. Update webpack.config.js
3. Create 'app\css' folder
4. Create 'main.css' in css folder
  ```
  body {
    background-color: tomato;
  }
  ```
5. Create 'content.css' in css folder
  ```
  .contentWrapper {
    width: 75%;
    margin: auto;
    padding: 50px;
    border: 1px solid green;
  }
  ```
6 Update package.json 
  ```
  "build:dev": "webpack-dev-server",
  ```
7. Make sure that no <link> in the index.htm.  CSS will be injected.