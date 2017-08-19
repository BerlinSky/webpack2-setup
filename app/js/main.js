import { initFancyInputBox } from './fancy-input';
import { initMobileMenu } from './mobile-menu';
import { initInfiniteScroll } from './infinite-scroll';
import { formValidationEvents } from './form/form-events';
import { initStateDropDownBox } from './state-dropdown';
import { sizePicker } from './offer-size-picker';
import { newsArchive } from './news-archive';
import { slider } from './slider';

$(function () {
  initMobileMenu();
  initFancyInputBox();
  initInfiniteScroll();
  initStateDropDownBox();
  formValidationEvents();
  sizePicker();
  newsArchive();
  slider();
});
