/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _addCanvasToDOM = __webpack_require__(5);

	var _addCanvasToDOM2 = _interopRequireDefault(_addCanvasToDOM);

	var _renderMaze = __webpack_require__(6);

	var _renderMaze2 = _interopRequireDefault(_renderMaze);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var canvas = void 0;

	window.addEventListener('resize', function () {
	    (0, _addCanvasToDOM2.default)();
	    (0, _renderMaze2.default)(canvas);
	});

	canvas = (0, _addCanvasToDOM2.default)();
	(0, _renderMaze2.default)(canvas);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var canvas = document.getElementById("canvas") || document.createElement('canvas');
	    var canvas_container = document.getElementById("canvas_container");
	    var offsetWidth = canvas_container.offsetWidth,
	        offsetHeight = canvas_container.offsetHeight;


	    var margin_w = offsetWidth / 10;
	    var margin_h = offsetHeight / 10;
	    var border = 1;
	    var border_color = "white";

	    canvas.id = "canvas";
	    canvas.width = offsetWidth - 2 * margin_w - border * 2;
	    canvas.height = offsetHeight - 2 * margin_h - border * 2;
	    canvas.style.margin = margin_h + "px " + margin_w + "px";
	    canvas.style.border = border + "px solid " + border_color;
	    canvas.style.display = "block";

	    return canvas_container.appendChild(canvas);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (canvas) {
	    var maze = [[0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0], [0, 1, 1, 0, 1, 0, 1, 1, 0, 0, 1, 0], [0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0], [0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0], [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]];

	    var ctx = canvas.getContext('2d');
	    var width = canvas.width;
	    var height = canvas.height;
	    var cell_h = height / maze.length;
	    var cell_w = width / maze[0].length;

	    ctx.clearRect(0, 0, width, height);

	    ctx.fillStyle = "red";

	    maze.forEach(function (row, i) {
	        row.forEach(function (has_wall, j) {
	            if (has_wall) {
	                ctx.rect(j * cell_w, i * cell_h, cell_w, cell_h);
	                ctx.fill();
	            }
	        });
	    });
	};

/***/ }
/******/ ]);