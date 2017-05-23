import $ from 'jquery';

// Need this workaround: adding "main": "source/parallax.js" in package.json of this package
import Parallax from 'parallax-js';

$(function () {
  console.log('main');

  var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
  
  console.log(parallax);

});
