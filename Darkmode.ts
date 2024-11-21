// ==UserScript==
// @name         Dark Mode for Website
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Enable dark mode on a specific website
// @author       Sten-Hendrik Remmel
// @match        https://tahvel.edu.ee/#/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Define your dark mode styles
    const darkModeCSS = `
        body {
            background-color: #121212 !important;
            color: #e0e0e0 !important;
        }

        a {
            color: #bb86fc !important;
        }

        .header, .footer {
            background-color: #1f1f1f !important;
        }

        /* Add more selectors as needed for the site's structure */
    `;

    // Create a <style> element to hold the CSS
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = darkModeCSS;

    // Append the <style> to the head
    document.head.appendChild(style);
})();
