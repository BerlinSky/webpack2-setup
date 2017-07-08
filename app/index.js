// import 'jquery';

$(function () {
  adjustPageSections();
  window.addEventListener('resize', adjustPageSections);
});

const adjustPageSections = () => {
  const utilityNavInfo = getUtilityNavInfo();
  const siteNavInfo = getSiteNavInfo();

console.log('siteNavInfo', siteNavInfo);

  setSiteNav(utilityNavInfo);
  setCarousel(utilityNavInfo, siteNavInfo)
  setContentWrapper(utilityNavInfo, siteNavInfo, getCarouselInfo())
}

const setContentWrapper = (utilityNavInfo, siteNavInfo, carouselInfo) => {
  const elem = document.querySelector('.js-contentWrapper');
  if (!!elem) {
    elem.style.marginTop = `${utilityNavInfo.height + siteNavInfo.height + carouselInfo.height}px`;
  }
}

const setCarousel = (utilityNavInfo, siteNavInfo) => {
  const elem = document.querySelector('.js-carousel');
  if (!!elem) {
    elem.style.top = `${utilityNavInfo.height + siteNavInfo.height}px`;
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