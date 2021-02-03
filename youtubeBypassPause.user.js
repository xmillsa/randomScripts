// ==UserScript==
// @name        Youtube Bypass Pause
// @version     0.1.0
// @namespace   https://andys-net.co.uk/
// @homepageURL https://andys-net.co.uk/
// @match       https://www.youtube.com/*
// @license     GPL-3.0-or-later; https://spdx.org/licenses/GPL-3.0-or-later.html
// @author      Xmillsa
// @description Auto click "Are you still watching?" popup.
// @grant       none
// ==/UserScript==

(function(){
    'use strict';
    const loop = () => {
        let els = document.querySelectorAll( '.line-text.style-scope.yt-confirm-dialog-renderer' );
        if ( els.length > 0 ){
            els.forEach( el => {
                if ( el.innerText == 'Video paused. Continue watching?' ){
                    el.parentNode.parentNode.parentNode.querySelector( '#confirm-button' ).click();
                }
            });
        }
    };
    setInterval( loop, 75 );
})();
