import $ from 'jquery';
import Parallax from 'parallax-js'

$(function () {
  console.log('main');

  var scene = document.getElementById('scene');
	var parallax = new Parallax(scene);
  
  console.log(parallax);

});
