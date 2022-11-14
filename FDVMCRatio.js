// ==UserScript==
// @name         Coinmarketcap coin ratio
// @namespace    Custom coin ratio
// @version      0.1
// @description  FDV/MarketCap ratio script
// @author       Mogdrogen
// @match        *://coinmarketcap.com/currencies/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=coinmarketcap.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let marketCapString = document.getElementsByClassName('statsValue')[0].textContent.split('$')[1].replaceAll(',', '');
    let FDVString = document.getElementsByClassName('statsValue')[1].textContent.split('$')[1].replaceAll(',', '');
    let ratio = (Number(FDVString) / Number(marketCapString)).toFixed(2);

    let node = document.getElementsByClassName('statsItemRight')[0];
    let ratioDivNode = document.createElement('div');
    ratioDivNode.classList.add('statsValue');
    ratioDivNode.style.color = 'red';
    ratioDivNode.style.fontSize = '18px';
    ratioDivNode.textContent = 'FDV/MC ratio:' + ratio;
    node.appendChild(ratioDivNode);

    let interval = setInterval(() => {
        let marketCapString = document.getElementsByClassName('statsValue')[0].textContent.split('$')[1].replaceAll(',', '');
        let FDVString = document.getElementsByClassName('statsValue')[2].textContent.split('$')[1].replaceAll(',', '');

        let ratio = (Number(FDVString) / Number(marketCapString)).toFixed(2);
        ratioDivNode.textContent = 'FDV/MC ratio:' + ratio;
    }, 3000);
})();
