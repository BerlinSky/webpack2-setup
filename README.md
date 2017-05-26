## Webpack 2 - Basic

### Use webpack-dev-server for development
### Use webpack.config.js 
### Inject CSS 

#### Steps
1 Update package.json 
  ```
  "build:dev": "webpack-dev-server",
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