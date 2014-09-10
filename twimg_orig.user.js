// ==UserScript==
// @name twimg +orig
// @namespace twimg Plus
// @description twimgにorigを付けます
// @include http://pbs.twimg.com/media/*
// @include https://pbs.twimg.com/media/*
// ==/UserScript==
(function () {
  if (document.URL.indexOf('about:') == - 1) {
    var nowurl = document.URL;
    if (nowurl.match(/:large/)) {
      location.href = nowurl.replace(':large', ':orig');
    } 
    else if (!nowurl.match(/:orig/)) {
      location.href = nowurl + ':orig';
    }
  }
}) ();