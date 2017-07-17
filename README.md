## Change Log:

1. Remove the "selector" from components under router
2. Add scss files to components
  a. install raw-loader
  b. update webpack.config.js to bundle component scss
3. Use ":host" vs "*" to target the entire component


## TODO's

1. Add enableProdMode()
```
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}
```
2. Add a hero section to the home page

