import $ from 'jquery';
import { selectArtistInfo } from './use-ramda/001-simple-object';
import { filterArtistList } from './use-ramda/002-array-filter';
import { getUniqueAlbumYear } from './use-ramda/003-array-filter2';
import { getArtistAlbumTitle } from './use-ramda/004-nested-object';
import { getUniqueAlbumYearWithLog } from './use-ramda/005-debug-with-tap';

$(function () {
  getArtistAlbumTitle();
  getUniqueAlbumYearWithLog();

  selectArtistInfo();
  filterArtistList();
  getUniqueAlbumYear();
});
