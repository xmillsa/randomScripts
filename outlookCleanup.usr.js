// ==UserScript==
// @name Outlook Cleanup
// @version     0.1.0
// @namespace   https://andys-net.co.uk/
// @homepageURL https://andys-net.co.uk/
// @match       https://outlook.live.com/mail/*
// @license     GPL-3.0-or-later; https://spdx.org/licenses/GPL-3.0-or-later.html
// @author      Xmillsa
// @description Remove outlooks "need more space?" (ad blocked) sidebar.
// @grant       none
// ==/UserScript==

(function(){
  'use strict';
  function loop(){
    if ( document.querySelector('i[data-icon-name="OutlookLogo"]') !== null ){
      document.querySelector('i[data-icon-name="OutlookLogo"]').parentNode.parentNode.parentNode.remove();
    } else {
      setTimeout( loop, 100 );
    }
  }
  loop();
}());
