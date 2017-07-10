export const getCarouselInfo = () => getElemDisplayInfo(document.querySelector('.js-carousel'));
export const getSemiNavInfo = () => getElemDisplayInfo(document.querySelector('.js-SemiNav'));
export const getSiteNavInfo = () => getElemDisplayInfo(document.querySelector('.js-siteNav'));
export const getUtilityNavInfo = () => getElemDisplayInfo(document.querySelector('.js-utilityNav'));
export const getContentWrapperInfo = () => getElemDisplayInfo(document.querySelector('.js-contentWrapper'));

const getElemDisplayInfo = (elem) => {
  if (!!elem) { 
    const displayed = (window.getComputedStyle(elem).display === 'none') ? false : true;
    const height = elem.offsetHeight;
    const marginTop = elem.style.marginTop;
    const positionFixed = (window.getComputedStyle(elem).position === 'fixed') ? true : false;
    
    return { elem, displayed, height, marginTop, positionFixed }
  }
  else {
    return { elem: undefined, displayed: false, height: 0, marginTop: 0, positionFixed: false}
  }
}