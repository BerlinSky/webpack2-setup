## Setup Conditions and Assumptions:

1. UtilityNav, SiteNav, Carousel and ContentWrapper are layed out sequentially as sibling elements.
2. Display UtilityNav only in the desktop mode
3. Set Carousel as fixed only in the desktop mode to allow the page content slide over it. 


### Utility Nav:

1. Does the element exist?
2. Is it hidden, "display: none"?
3. What is its height;?
4. Obtain the info in an object

### Site Nav

## Change Log:

1. Add a new ts file, vendor.ts 
2. Install angular-related packages
3. Update webpack.config.js
  a. Add vendor.ts to the entry point
  b. Update plugin definitions