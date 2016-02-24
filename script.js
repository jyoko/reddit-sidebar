// ==UserScript==
// @name         Reddit Sidebar Offscreen
// @namespace    https://jyoko.github.io/
// @version      1.0
// @description  Moves Reddit right sidebar offscreen, uses "q" to toggle
// @author       jyoko
// @downloadURL  https://raw.githubusercontent.com/jyoko/reddit-sidebar/master/script.js
// @include      http*://*.reddit.com/
// @grant        none
// ==/UserScript==
/* jshint -W097 */
'use strict';

if (window.hasOwnProperty('$')) {
  window.addEventListener('keyup', function(e) {
    if (e.target.tagName === 'TEXTAREA') return;
    if (e.keyCode === 81) { // q
      toggler($('.side'));
    }
  });
  toggler($('.side'));
}
// Full credit to /u/GameFreak4321 here, excellent idea
// https://www.reddit.com/r/Enhancement/comments/swp8s/feature_request_a_button_to_hide_the_sidebar
function toggler(side) {
  if (side.hasClass('RESSidebarHide')){
    side.css('margin-right', '0px').removeClass('RESSidebarHide');
  } else {
    side.css('margin-right','-'+side.width()+'px').addClass('RESSidebarHide');
  }            
}

