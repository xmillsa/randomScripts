// ==UserScript==
// @name        Amazon Smile!
// @version     0.1.0
// @namespace   https://andys-net.co.uk/
// @homepageURL https://andys-net.co.uk/
// @match       https://www.amazon.co.uk/*
// @match       https://amazon.co.uk/*
// @license     GPL-3.0-or-later; https://spdx.org/licenses/GPL-3.0-or-later.html
// @author      Xmillsa
// @description Auto redirect to Amazon Smile to support donations, Amazon for some reason wont automatically do it for you.
// @grant       none
// ==/UserScript==

window.location.host = 'smile.amazon.co.uk';
