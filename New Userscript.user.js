// ==UserScript==
// @name         Etoro blocker
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  remove posts from feed for blocked users. You can still
//               see their personal wall and their comments.
//               I use chrome. Feel free to message me on danrobertsamoila@yahoo.com if you find any bugs.
// @author       Samoila Dan Robert
// @match        https://www.etoro.com/feed
// @grant        none
// ==/UserScript==
removePost();
setInterval(removePost,100)
function removePost() {
    console.log('abc');
    //put the name in blocked like this var blocked = ['@example1name', '@example2name', '@example3name'];
    var blocked = [];
    var html = document.getElementsByClassName("feed-posts ng-star-inserted");
    var j = 0;
    var blockedIterator = 0;
    for (blockedIterator = 0; blockedIterator < blocked.length; blockedIterator++) {
        for (j = 0; j < html.length; j++) {
            if (html[j].children[0].getElementsByClassName("post-user-name et-link")[0].innerText === blocked[blockedIterator]) {
                html[j].remove();
            }
        }
    }


}

(function() {

})();