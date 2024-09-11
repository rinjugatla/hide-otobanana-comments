// ==UserScript==
// @name         Hide Otobanana comments
// @namespace    https://x.com/rin_jugatla
// @version      2024-09-11
// @description  otobananaのコメントを非表示にします
// @author       rin_jugatla
// @match        https://otobanana.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=otobanana.com
// @grant        none
// @license MIT
// ==/UserScript==

let timerId = null;

const hideComments = () => {
    const commentElements = document.getElementsByClassName("comment-container");
    if (!commentElements) { return; }

    const element = commentElements[0];
    if (!element) { return; }
    element.style.display = 'none';
}

(function () {
    'use strict';

    console.log("oto 0");
    timerId = setInterval(hideComments, 1000);
})();
