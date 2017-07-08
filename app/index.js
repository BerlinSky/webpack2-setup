// import 'jquery';

$(function () {
  adjustPageSections();
  window.addEventListener('resize', adjustPageSections);
});

const adjustPageSections = () => {
  const utilityNavInfo = getUtilityNavInfo();
  const siteNavInfo = getSiteNavInfo();

  setSiteNav(utilityNavInfo);
  setCarousel(utilityNavInfo, siteNavInfo)
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

const getSiteNavInfo = () => {
  const elem = document.querySelector('.js-siteNav');
  return getElemDisplayInfo(elem);
}

const getUtilityNavInfo = () => {
  const utilityNav = document.querySelector('.js-utilityNav');
  return getElemDisplayInfo(utilityNav);
}

const getElemDisplayInfo = (elem) => {
  if (!!elem) { 
    const displayed = (window.getComputedStyle(elem).display === 'none') ? false : true;
    const height = elem.offsetHeight;
    
    return { displayed, height }
  }
}