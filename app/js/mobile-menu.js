import $ from 'jquery';

export function initMobileMenu() {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();
    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggleClass("js-l-mobile");
  })

  // const menuWrapper = document.querySelector('.js-menuWrapper');

}

$(window).on("resize", function() {
  if($(window).width() <= 895) {
      $('#menuItem-news').attr('data-ts','menu__navigationMobile--news');
      $('#menuItem-tour').attr('data-ts','menu__navigationMobile--tour');
      $('#menuItem-discography').attr('data-ts','menu__navigationMobile--discography');
      $('#menuItem-media').attr('data-ts','menu__navigationMobile--media');
      $('#menuItem-store').attr('data-ts','menu__navigationMobile--store');
      $('#menuItem-userprofile').attr('data-ts','menu__navigationMobile--user');
      $('#menuItem-upgrade').attr('data-ts','menu__navigationMobile--upgrade');
      $('#menuItem-logout').attr('data-ts','menu__navigationMobile--log');
      $('#menuItem-login').attr('data-ts','menu__navigationMobile--login');
      $('#menuItem-join').attr('data-ts','menu__navigationMobile--join');
  } else {
      $('#menuItem-news').attr('data-ts','menu__navigationDesktop--news');
      $('#menuItem-tour').attr('data-ts','menu__navigationDesktop--tour');
      $('#menuItem-discography').attr('data-ts','menu__navigationDesktop--discography');
      $('#menuItem-media').attr('data-ts','menu__navigationDesktop--media');
      $('#menuItem-store').attr('data-ts','menu__navigationDesktop--store');
      $('#menuItem-userprofile').attr('data-ts','menu__navigationDesktop--user');
      $('#menuItem-upgrade').attr('data-ts','menu__navigationDesktop--upgrade');
      $('#menuItem-logout').attr('data-ts','menu__navigationDesktop--log');
      $('#menuItem-login').attr('data-ts','menu__navigationDesktop--login');
      $('#menuItem-join').attr('data-ts','menu__navigationDesktop--join');
  }
}).resize();