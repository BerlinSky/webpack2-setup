// import 'jquery';

$(function () {
  setSiteNav();
  window.addEventListener('resize', setSiteNav);
});

const setSiteNav = () => {
  const siteNav = document.querySelector('.js-sitenav');
  if (!!siteNav) {
    const utilityNavInfo = getUtilityNavInfo();
    siteNav.style.top = `${utilityNavInfo.height}px`;
  }
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