// ==UserScript==
// @name         Krunker Chat Colorizer
// @namespace    https://github.com/MogJP/KrunkUserscripts
// @version      1.3
// @description  Changes the color of Join/Leave in chatbox!
// @author       Mogura
// @match        https://krunker.io/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=krunker.io
// @grant        none
// @updateURL    https://github.com/MogJP/KrunkUserscripts/raw/main/ChatColorizer.user.js
// @downloadURL  https://github.com/MogJP/KrunkUserscripts/raw/main/ChatColorizer.user.js
// ==/UserScript==

var monitorElement = window.document.getElementById('chatList');
var observer = new MutationObserver(function(){
    /* element update detected */
    let chatMsgs = window.document.querySelectorAll(".chatMsg");
    chatMsgs.forEach(chat => {
        if (chat.style.color != "") { //pickup system element
            if (chat.innerText.includes("joined the game")) {
                chat.style.color = "limegreen";
            } else if (chat.innerText.includes("left the game")) {
                chat.style.color = "crimson";
            }
        }
    });
});

var setting = {
    childList: true,
    subtree: true
};

observer.observe(monitorElement, setting);
