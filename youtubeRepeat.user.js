// ==UserScript==
// @name        Youtube Repeat
// @version     0.1.0
// @namespace   https://andys-net.co.uk/
// @homepageURL https://andys-net.co.uk/
// @match       https://www.youtube.com/*
// @license     GPL-3.0-or-later; https://spdx.org/licenses/GPL-3.0-or-later.html
// @author      Xmillsa
// @description Adds a repeat option to youtube. (No longer needed as youtube added their own, finally!)
// @grant       none
// ==/UserScript==

/*
    Please note this is old code!
    Obsolete as youtube finally added their own repeat option.
*/

const findVideoLoop = setInterval(findVideo, 300);

function findVideo() {

    const vid = document.querySelector('#movie_player video');
    const loc = document.querySelector('.ytp-panel-menu');
    const loo = document.getElementById('ytp-loopButton')

    if (vid && loc && !loo) {

        // Create and display loop option.
        let div = createLoopOption();

        // Add div to the top of the menu. (settings box content is made on click, so ends up at the bottom.)
        loc.insertBefore(div, loc.children[0]);

        // Event listener for the end of the video, loop if required.
        vid.addEventListener('ended', function (e) {
            e.stopImmediatePropagation();
            e.preventDefault();

            if (div.getAttribute('aria-checked') === 'true') {
                vid.currentTime = 0;
                vid.play();
            }
        });

        // Also check via a loop, before "ended" === true.
        setInterval(() => {
            if (vid.currentTime > vid.duration - .3 && div.getAttribute('aria-checked') === 'true') {
                vid.currentTime = 0;
            }
        }, 100);
    }
}
// Create DIV element and return.
function createLoopOption() {

    const div = document.createElement('div');

    div.id = 'ytp-loopButton';
    div.className = 'ytp-menuitem';
    div.setAttribute('role', 'menuitemcheckbox');
    div.setAttribute('aria-checked', false);
    div.setAttribute('tabindex', '0');

    div.innerHTML = '<div class="ytp-menuitem-icon"></div><div class="ytp-menuitem-label">Loop</div><div class="ytp-menuitem-content"><div id="loopCheck" class="ytp-menuitem-toggle-checkbox"></div></div>';

    // Event Listener for the checkbox.
    div.addEventListener('click', () => {
        div.setAttribute('aria-checked', div.getAttribute('aria-checked') === 'false' ? 'true' : 'false');
    });

    return div;
}
