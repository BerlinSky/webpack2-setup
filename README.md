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

1. Does the element exist?
2. What is its height?
3. What is its top position?
4. Obtain the info in an object
5. On page load and window resize: reset the top of the site nav.
6. Calculation: siteNaveTop = the height of the utility nav. 

### Carousel 

1. Does the element exist?
2. What is its height?
3. What is its marginTop?
4. What is its postion value? Fixed?
5. On page load and window resize: reset the top of the carousel.
6. Calculation: carouselTop = the height of the utility nav + the height of the site nav. 

### contentWrapper

1. Does the element exist?
2. On page load and window resize: reset the margin top fo the content wrapper
3. Calcaulation: contentWrapperMarginTop = UtilityNavHeight + SiteNavHeight + CarouselHeight


### contentWrapper: scrollup 
1. Only takes place in the desktop mode: when semiNav.displayed: true. 


