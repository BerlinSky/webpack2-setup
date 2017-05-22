import { selectArtistInfo } from './001-simple-object';
import { filterArtistList } from './002-array-filter';
import { getUniqueAlbumYear } from './003-array-filter2';
import { getArtistAlbumTitle } from './004-nested-object';
import { getUniqueAlbumYearWithLog } from './005-debug-with-tap';
import { checkSystemConfig } from './006-conditionally';
import { getJustArtistName } from './007-try-catch';
import { getSubsetArtist } from './008-array-filter3';
import { getAlbumOfYear } from './009-array-filter4';
import { artistInfoTransformed, artistInfoMerged, artistInfoChanged } from './011-object-transformation';

import { compareOutputs } from './012-point-free2';
import { moveElements } from './013-point-free3';

import { someArtists } from './014-array-filter5';

import { artistStreams } from './015-promise';

export const allRamdaExamples = ()  => {

  artistInfoTransformed();
  artistInfoMerged();
  artistInfoChanged();
  
  getAlbumOfYear();

  getSubsetArtist();
  
  getJustArtistName();

  checkSystemConfig();

  getArtistAlbumTitle();
  getUniqueAlbumYearWithLog();

  selectArtistInfo();
  filterArtistList();
  getUniqueAlbumYear();

  compareOutputs();

  moveElements();

  someArtists();

  artistStreams();

};
