webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _swing = __webpack_require__(1);

var _swing2 = _interopRequireDefault(_swing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _swing2.default();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var swing = function () {
  function swing() {
    _classCallCheck(this, swing);

    this.accelerationX = null;
    this.accelerationY = null;
    this.accelerationZ = null;
    this.isSwing = 0;
    this.addEvent();
  }

  _createClass(swing, [{
    key: 'addEvent',
    value: function addEvent() {
      var _this = this;

      window.addEventListener('devicemotion', function (event) {
        _this.accelerationX = event.acceleration.x;
        _this.accelerationY = event.acceleration.y;
        _this.accelerationZ = event.acceleration.z;

        if (_this.accelerationX > 10 || _this.accelerationY > 10 || _this.accelerationZ > 10) {
          _this.isSwing++;
        }
        if (_this.isSwing >= 20) {
          _this.showAlert();
        }
      });
    }
  }, {
    key: 'showAlert',
    value: function showAlert() {
      alert(this.accelerationX + ',' + this.accelerationY + ',' + this.accelerationZ + ',' + this.isSwing);
    }
  }]);

  return swing;
}();

exports.default = swing;

/***/ })
],[0]);