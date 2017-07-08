// import 'jquery';

$(function () {
  const utilityNav = document.querySelector('.js-utilityNav');

  const info = getElemDisplayInfo(utilityNav);
  console.log(info);
});

const getElemDisplayInfo = (elem) => {
  if (!!elem) { 
    const displayed = (window.getComputedStyle(elem).display === 'none') ? false : true;
    const height = elem.offsetHeight;
    
    return { displayed, height }
  }
}