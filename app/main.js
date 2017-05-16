import $ from 'jquery';
import { selectArtistInfo } from './use-ramda/001-simple-object';
import { filterArtistList } from './use-ramda/002-array-filter';
import { getUniqueAlbumYear } from './use-ramda/003-array-filter2';
import { getArtistAlbumTitle } from './use-ramda/004-nested-object';
import { getUniqueAlbumYearWithLog } from './use-ramda/005-debug-with-tap';
import { checkSystemConfig } from './use-ramda/006-conditionally';
import { getSubsetArtist } from './use-ramda/008-array-filter3';

$(function () {
  getSubsetArtist();
  
  checkSystemConfig();

  getArtistAlbumTitle();
  getUniqueAlbumYearWithLog();

  selectArtistInfo();
  filterArtistList();
  getUniqueAlbumYear();
});