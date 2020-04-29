/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "js/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _sayHello = __webpack_require__(/*! ./lib/sayHello */ \"./lib/sayHello.js\");\n\nvar _sayHello2 = _interopRequireDefault(_sayHello);\n\nvar _playTrack = __webpack_require__(/*! ./lib/playTrack */ \"./lib/playTrack.js\");\n\nvar _playTrack2 = _interopRequireDefault(_playTrack);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _sayHello2.default)();\n(0, _playTrack2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAuanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2FwcC5qcz8wMzU0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzYXlIZWxsbyBmcm9tICcuL2xpYi9zYXlIZWxsbyc7XG5pbXBvcnQgcGxheVRyYWNrIGZyb20gJy4vbGliL3BsYXlUcmFjayc7XG5cbnNheUhlbGxvKCk7XG5wbGF5VHJhY2soKTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./app.js\n");

/***/ }),

/***/ "./lib/playTrack.js":
/*!**************************!*\
  !*** ./lib/playTrack.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction playTrack() {\n    var A = {};\n\n    init();\n\n    return A;\n\n    //   init\n\n    function init() {\n        setupData();\n        var setup_audios = setupAudios();\n        setup_audios.then(function () {\n            setupEvents();\n        });\n    }\n\n    // setters\n\n    function setupData() {\n        A.datas = {};\n        A.audios = {};\n        A.audio = 1;\n        A.audio_playing = false;\n    }\n\n    function setupEvents() {\n        document.addEventListener(\"mousedown\", playAudio);\n        document.addEventListener(\"touchstart\", pauseAudio);\n        document.addEventListener(\"mouseleave\", pauseAudio);\n        document.addEventListener(\"mouseup\", pauseAudio);\n    }\n\n    // setup audios\n    function setupAudios() {\n        return new Promise(function (resolve, reject) {\n            var count = 3,\n                loaded = 0;\n            // do a thing, possibly async, then…\n            for (var i = 1; i <= count; i++) {\n                var url = \"https://s3-us-west-2.amazonaws.com/s.cdpn.io/111863/chano-0\" + i + \".mp3\";\n                var audio = new Audio(url);\n                A.audios[\"id-\" + i] = audio;\n                audio.setAttribute(\"preload\", \"auto\");\n                audio.setAttribute(\"controls\", \"controls\");\n                audio.setAttribute(\"loop\", true);\n                audio.setAttribute(\"data-order\", i);\n                // document.body.appendChild(audio);\n                audio.addEventListener(\"canplaythrough\", function (e) {\n                    loaded++;\n                    if (loaded === count) {\n                        resolve(\"Audios Loaded!\");\n                    }\n                });\n            }\n        });\n    }\n\n    function playAudio() {\n        A.audio_playing = true;\n        document.body.className = \"playing audio-\" + A.audio;\n        A.audios[\"id-\" + A.audio].play();\n    }\n\n    function pauseAudio() {\n        var audio = A.audios[\"id-\" + A.audio];\n        audio.pause();\n        audio.currentTime = 0;\n        if (A.audio_playing) {\n            A.audio++;\n            document.body.className = \"\";\n            A.audio_playing = false;\n            if (A.audio > 3) A.audio = 1;\n        }\n    }\n}\n\nmodule.exports = playTrack;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcGxheVRyYWNrLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9qcy9saWIvcGxheVRyYWNrLmpzP2YzOGMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcGxheVRyYWNrKCkge1xyXG4gICAgdmFyIEEgPSB7fTtcclxuXHJcbiAgICBpbml0KCk7XHJcblxyXG4gICAgcmV0dXJuIEE7XHJcblxyXG4gICAgLy8gICBpbml0XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBzZXR1cERhdGEoKTtcclxuICAgICAgICB2YXIgc2V0dXBfYXVkaW9zID0gc2V0dXBBdWRpb3MoKTtcclxuICAgICAgICBzZXR1cF9hdWRpb3MudGhlbihmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgc2V0dXBFdmVudHMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR0ZXJzXHJcblxyXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRhKCkge1xyXG4gICAgICAgIEEuZGF0YXMgPSB7fTtcclxuICAgICAgICBBLmF1ZGlvcyA9IHt9O1xyXG4gICAgICAgIEEuYXVkaW8gPSAxO1xyXG4gICAgICAgIEEuYXVkaW9fcGxheWluZyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHNldHVwRXZlbnRzKCkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgcGxheUF1ZGlvKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBwYXVzZUF1ZGlvKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBwYXVzZUF1ZGlvKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBwYXVzZUF1ZGlvKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXR1cCBhdWRpb3NcclxuICAgIGZ1bmN0aW9uIHNldHVwQXVkaW9zKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICAgICAgdmFyIGNvdW50ID0gMyxcclxuICAgICAgICAgICAgICAgIGxvYWRlZCA9IDA7XHJcbiAgICAgICAgICAgIC8vIGRvIGEgdGhpbmcsIHBvc3NpYmx5IGFzeW5jLCB0aGVu4oCmXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciB1cmwgPSBcImh0dHBzOi8vczMtdXMtd2VzdC0yLmFtYXpvbmF3cy5jb20vcy5jZHBuLmlvLzExMTg2My9jaGFuby0wXCIgKyBpICsgXCIubXAzXCI7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXVkaW8gPSBuZXcgQXVkaW8odXJsKTtcclxuICAgICAgICAgICAgICAgIEEuYXVkaW9zW1wiaWQtXCIgKyBpXSA9IGF1ZGlvO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uc2V0QXR0cmlidXRlKFwicHJlbG9hZFwiLCBcImF1dG9cIik7XHJcbiAgICAgICAgICAgICAgICBhdWRpby5zZXRBdHRyaWJ1dGUoXCJjb250cm9sc1wiLCBcImNvbnRyb2xzXCIpO1xyXG4gICAgICAgICAgICAgICAgYXVkaW8uc2V0QXR0cmlidXRlKFwibG9vcFwiLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgaSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1ZGlvKTtcclxuICAgICAgICAgICAgICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoXCJjYW5wbGF5dGhyb3VnaFwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkKys7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvYWRlZCA9PT0gY291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShcIkF1ZGlvcyBMb2FkZWQhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBmdW5jdGlvbiBwbGF5QXVkaW8oKSB7XHJcbiAgICAgICAgQS5hdWRpb19wbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IFwicGxheWluZyBhdWRpby1cIiArIEEuYXVkaW87XHJcbiAgICAgICAgQS5hdWRpb3NbXCJpZC1cIiArIEEuYXVkaW9dLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBwYXVzZUF1ZGlvKCkge1xyXG4gICAgICAgIHZhciBhdWRpbyA9IEEuYXVkaW9zW1wiaWQtXCIgKyBBLmF1ZGlvXTtcclxuICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGF1ZGlvLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICBpZiAoQS5hdWRpb19wbGF5aW5nKSB7XHJcbiAgICAgICAgICAgIEEuYXVkaW8rKztcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBBLmF1ZGlvX3BsYXlpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKEEuYXVkaW8gPiAzKSBBLmF1ZGlvID0gMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHBsYXlUcmFjaztcclxuIl0sIm1hcHBpbmdzIjoiOztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/playTrack.js\n");

/***/ }),

/***/ "./lib/sayHello.js":
/*!*************************!*\
  !*** ./lib/sayHello.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sayHello() {\n    if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {\n        var args = ['\\n %c Made with ❤️ by Osorina Irina 🚀 %c http://osorina.github.io/ \\n', 'border: 1px solid #000;color: #fff; background: #171717; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;'];\n        window.console.log.apply(console, args);\n    } else if (window.console) {\n        window.console.log('Made with love ❤️ by Osorina Irina 🚀 - http://osorina.github.io/');\n    }\n}\nmodule.exports = sayHello;\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc2F5SGVsbG8uanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2pzL2xpYi9zYXlIZWxsby5qcz8xNTc1Il0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNheUhlbGxvKCkge1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgICAgICBjb25zdCBhcmdzID0gWydcXG4gJWMgTWFkZSB3aXRoIOKdpO+4jyBieSBPc29yaW5hIElyaW5hIPCfmoAgJWMgaHR0cDovL29zb3JpbmEuZ2l0aHViLmlvLyBcXG4nLCAnYm9yZGVyOiAxcHggc29saWQgIzAwMDtjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogIzE3MTcxNzsgcGFkZGluZzo1cHggMDsnLCAnY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6ICMxYzFjMWM7IHBhZGRpbmc6NXB4IDA7J107XG4gICAgICAgIHdpbmRvdy5jb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBhcmdzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAod2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgd2luZG93LmNvbnNvbGUubG9nKCdNYWRlIHdpdGggbG92ZSDinaTvuI8gYnkgT3NvcmluYSBJcmluYSDwn5qAIC0gaHR0cDovL29zb3JpbmEuZ2l0aHViLmlvLycpO1xuICAgIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2F5SGVsbG87XG4iXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/sayHello.js\n");

/***/ })

/******/ });