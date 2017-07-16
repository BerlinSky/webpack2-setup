## Change Log:

1. Remove the "selector" from components under router
2. Add scss files to components
  a. install raw-loader
  b. update webpack.config.js to bundle component scss

## TODO's
1. Add enableProdMode()
```
import { enableProdMode } from '@angular/core';

if (process.env.ENV === 'production') {
  enableProdMode();
}
```
