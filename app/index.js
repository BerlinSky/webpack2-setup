// import 'jquery';

$(function () {
  adjustPageSections();
  window.addEventListener('resize', adjustPageSections);
});

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
    const heightOfElementsOnTop = utilityNavInfo.height + siteNavInfo.height + carouselInfo.height;
    const heightZero = 0;
    
    if (carouselInfo.positionFixed) {
      elem.style.marginTop = `${heightOfElementsOnTop}px`;
    }    
    else {
      elem.style.marginTop = `${heightZero}px`;
    }
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