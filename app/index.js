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
  setContentWrapper(utilityNavInfo, siteNavInfo, getCarouselInfo())
}

const setContentWrapper = (utilityNavInfo, siteNavInfo, carouselInfo) => {
  const elem = document.querySelector('.js-contentWrapper');
  if (!!elem) {
    elem.style.marginTop = `${utilityNavInfo.height + siteNavInfo.height + carouselInfo.height}px`;
  }
}

const setCarousel = (utilityNavInfo, siteNavInfo, getCarouselInfo) => {
  const elem = document.querySelector('.js-carousel');
  if (!!elem) {
    if (getCarouselInfo.positionFixed) {
      elem.style.top = `${utilityNavInfo.height + siteNavInfo.height}px`;
      elem.style.marginTop = `${0}px`;
    }
    else {
      elem.style.marginTop = `${utilityNavInfo.height + siteNavInfo.height}px`;
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
}