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

### Next up: add support for pug 

### Steps:
1. Off the latest branch, create a new git branch: images
2. Switch to the new branch
3. Create a new folder under app: "images"
4. Add the attached png file to the "app/images" folder
5. Update the index.html to use the image file. 
6. Launch the dev-server with "npm start" to see the "red" failure state

7. Install the html and file loaders (see the package.json attached)
```
npm i file-loader -D
npm i html-loader -D
```

8. Update webpack.config.js (attached) to use 'html-loader' and "file-loader'

9. Restart the dev-server to test html with image (the green state)