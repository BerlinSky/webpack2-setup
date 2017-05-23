import $ from 'jquery';
// import { allRamdaExamples } from './use-ramda/000-all-ramda';

import { getArtistCountryFromList } from './use-js-basic/001-js-map'
import { getArtistCountryFromList2 } from './use-js-basic/002-js-filter'

$(function () {
  // allRamdaExamples();

  console.clear();
  getArtistCountryFromList();
  getArtistCountryFromList2();
});
