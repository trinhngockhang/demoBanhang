'use strict';

var _defineProperty = require('babel-runtime/core-js/object/define-property');

var _defineProperty2 = _interopRequireDefault(_defineProperty);

var _keys = require('babel-runtime/core-js/object/keys');

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _receipt = require('./receipt');

(0, _keys2.default)(_receipt).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _receipt[key];
    }
  });
});

var _fetchAds = require('./fetchAds');

(0, _keys2.default)(_fetchAds).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  (0, _defineProperty2.default)(exports, key, {
    enumerable: true,
    get: function get() {
      return _fetchAds[key];
    }
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFBO2lEQUFBOzs7Z0JBQUE7d0JBQUE7c0JBQUE7QUFBQTtBQUFBOzs7OztBQUNBLHNEQUFBO2lEQUFBOzs7Z0JBQUE7d0JBQUE7dUJBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9