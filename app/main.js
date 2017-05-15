import $ from 'jquery';
import { selectArtistInfo } from './use-ramda/001-simple-object';
import { filterArtistList } from './use-ramda/002-array-filter';
import { getUniqueAlbumYear } from './use-ramda/003-array-filter2';

$(function () {
  selectArtistInfo();
  filterArtistList();
  getUniqueAlbumYear();
});
