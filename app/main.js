import $ from 'jquery';
import { selectArtistInfo } from './use-ramda/001-simple-object';
import { filterArtistList } from './use-ramda/002-array-filter';

$(function () {
  selectArtistInfo();
  filterArtistList();
});
