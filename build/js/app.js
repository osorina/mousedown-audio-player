!function(e){var o={};function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(o){return e[o]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},t.p="js/",t(t.s=0)}([function(e,o,t){"use strict";var n=i(t(1)),r=i(t(2));function i(e){return e&&e.__esModule?e:{default:e}}(0,n.default)(),(0,r.default)()},function(e,o,t){"use strict";e.exports=function(){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){window.console.log.apply(console,["\n %c Made with ❤️ by Osorina Irina 🚀 %c http://osorina.github.io/ \n","border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;","color: #fff; background: #1c1c1c; padding:5px 0;"])}else window.console&&window.console.log("Made with love ❤️ by Osorina Irina 🚀 - http://osorina.github.io/")}},function(e,o,t){"use strict";e.exports=function(){var e={datas:{},audios:{},audio:1,audio_playing:!1};return new Promise((function(o,t){for(var n=0,r=1;r<=3;r++){var i=new Audio("https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/chano-0"+r+".mp3");e.audios["id-"+r]=i,i.setAttribute("preload","auto"),i.setAttribute("controls","controls"),i.setAttribute("loop",!0),i.setAttribute("data-order",r),i.addEventListener("canplaythrough",(function(e){3==++n&&o("Audios Loaded!")}))}})).then((function(){document.addEventListener("mousedown",o),document.addEventListener("touchstart",t),document.addEventListener("mouseleave",t),document.addEventListener("mouseup",t)})),e;function o(){e.audio_playing=!0,document.body.className="playing audio-"+e.audio,e.audios["id-"+e.audio].play()}function t(){var o=e.audios["id-"+e.audio];o.pause(),o.currentTime=0,e.audio_playing&&(e.audio++,document.body.className="",e.audio_playing=!1,e.audio>3&&(e.audio=1))}}}]);
//# sourceMappingURL=app.js.map