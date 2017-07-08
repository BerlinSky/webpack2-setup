// import 'jquery';

$(function () {
  adjustPageSections();
  setStickyNav();
  window.addEventListener('resize', adjustPageSections);
  window.addEventListener('scroll', setStickyNav);
});

const setStickyNav = () => {
  const semiNavInfo = getSemiNavInfo();
  const contentWrapper = document.querySelector('.js-contentWrapper');

  // Only invoke when semiNav is displayed:
  if (!!semiNavInfo.displayed && !!contentWrapper) {

    const utilityNavInfo = getUtilityNavInfo();
    const siteNavInfo = getSiteNavInfo();
    const contentWrapperTop = contentWrapper.getBoundingClientRect().top;
    const topGap = utilityNavInfo.height + siteNavInfo.height;

    const utilityNav = document.querySelector('.js-utilityNav');

    // check if the scolling reaches the triger 
    if (contentWrapperTop <= topGap) { 
      moveElemVertically(utilityNav, (-1) * utilityNavInfo.height);
      // utilityNav.style.WebkitTransform = 'translate3d(0, -100px, 0)';
      // utilityNav.style.msTransform = 'translate3d(0, -100px, 0)';
      // utilityNav.style.transform = 'translate3d(0, -100px, 0)';

      // console.log(contentWrapperTop);
    } 
    else {
      moveElemVertically(utilityNav, 0);
      
      // utilityNav.style.transform = 'translate3d(0, 0, 0)';
      // console.log(contentWrapperTop);
    }
  }
}

const moveElemVertically = (elem, pos) => {
  if (!!elem) {
    elem.style.WebkitTransform = `translate3d(0, ${pos}px, 0)`;
    elem.style.msTransform = `translate3d(0, ${pos}px, 0`;
    elem.style.transform = `translate3d(0, ${pos}px, 0)`;
  }
}

const adjustPageSections = () => {
  const utilityNavInfo = getUtilityNavInfo();
  const siteNavInfo = getSiteNavInfo();
  const carouselInfo = getCarouselInfo();

  setSiteNav(utilityNavInfo);
  setCarousel(utilityNavInfo, siteNavInfo, carouselInfo)
  setContentWrapper(utilityNavInfo, siteNavInfo, carouselInfo)
}

const setContentWrapper = (utilityNavInfo, siteNavInfo, carouselInfo) => {
  const elem = document.querySelector('.js-contentWrapper');
  if (!!elem) {
    let targetMarginTop = 0;

    if (carouselInfo.positionFixed || !carouselInfo.displayed) {
      targetMarginTop = utilityNavInfo.height + siteNavInfo.height + carouselInfo.height;
    }
  
    elem.style.marginTop = `${targetMarginTop}px`;
  }
}

const setCarousel = (utilityNavInfo, siteNavInfo, carouselInfo) => {
  const elem = document.querySelector('.js-carousel');
  if (!!elem) {
    const heightOfElementsOnTop = utilityNavInfo.height + siteNavInfo.height;
    const heightZero = 0;

    if (carouselInfo.positionFixed) {
      elem.style.top = `${heightOfElementsOnTop}px`;
      elem.style.marginTop = `${heightZero}px`;
    }
    else {
      elem.style.top = `${heightZero}px`;
      elem.style.marginTop = `${heightOfElementsOnTop}px`;
    }
  }
}

const setSiteNav = (utilityNavInfo) => {
  const elem = document.querySelector('.js-sitenav');
  if (!!elem) {
    elem.style.top = `${utilityNavInfo.height}px`;
  }
}

const getCarouselInfo = () => getElemDisplayInfo(document.querySelector('.js-carousel'));

const getSemiNavInfo = () => getElemDisplayInfo(document.querySelector('.js-SemiNav'));

const getSiteNavInfo = () => getElemDisplayInfo(document.querySelector('.js-siteNav'));

const getUtilityNavInfo = () => getElemDisplayInfo(document.querySelector('.js-utilityNav'));

const getElemDisplayInfo = (elem) => {
  if (!!elem) { 
    const displayed = (window.getComputedStyle(elem).display === 'none') ? false : true;
    const height = elem.offsetHeight;
    const marginTop = elem.style.marginTop;
    const positionFixed = (window.getComputedStyle(elem).position === 'fixed') ? true : false;
    
    return { displayed, height, marginTop, positionFixed }
  }
  else {
    return { displayed: false, height: 0, marginTop: 0, positionFixed: false}
  }
}