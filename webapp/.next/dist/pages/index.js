'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _jsx2 = require('babel-runtime/helpers/jsx');

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-unfetch');

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Advertisments = require('../components/Home/Advertisments');

var _Advertisments2 = _interopRequireDefault(_Advertisments);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)(_Advertisments2.default, {});

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
        (0, _classCallCheck3.default)(this, Home);
        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
    }

    (0, _createClass3.default)(Home, [{
        key: 'render',
        value: function render() {
            return (0, _jsx3.default)(_layouts2.default, {}, void 0, _ref, (0, _jsx3.default)(_Home2.default, {
                name: 'D\u1ECBch v\u1EE5',
                produce: this.props.ads
            }), (0, _jsx3.default)(_Home2.default, {
                name: '\u0110i\u1EC7n t\u1EED',
                produce: this.props.ads
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref3) {
                var store = _ref3.store;
                var pageid, response, listId, id, result;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pageid = '5a007c92c846cac15b53ab81';
                                _context.next = 3;
                                return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&level=1').then(function (r) {
                                    return r.json();
                                });

                            case 3:
                                response = _context.sent;
                                listId = response.data.map(function (s) {
                                    return s.id;
                                });
                                id = listId[0];
                                _context.next = 8;
                                return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&level=2&parent=' + id).then(function (r) {
                                    return r.json();
                                });

                            case 8:
                                result = _context.sent;
                                return _context.abrupt('return', { ads: result.data });

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref2.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return Home;
}(_react2.default.Component);

exports.default = (0, _store2.default)(null, null)(Home);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJhZHMiLCJzdG9yZSIsInBhZ2VpZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVzcG9uc2UiLCJsaXN0SWQiLCJkYXRhIiwibWFwIiwicyIsImlkIiwicmVzdWx0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTSxBOzs7Ozs7Ozs7O2lDQVVPLEFBQ0w7O3NCQUFBLEFBR3NCO3lCQUFtQixLQUFBLEFBQUssTUFIOUMsQUFHb0Q7QUFIcEQ7c0JBQUEsQUFJc0I7eUJBQW1CLEtBQUEsQUFBSyxNQUo5QyxBQUlvRCxBQUd2RDtBQVBHOzs7Ozs7b0IsQUFWMkIsYyxBQUFBOzs7OztpQ0FDckI7QSx5Q0FBUyxBOztzR0FDUSxBQUE2RCxxQkFBN0QsQUFBK0UsS0FBSyxhQUFBOzJDQUFLLEVBQUwsQUFBSyxBQUFFO0EsQUFBM0YsaUNBQUE7O2lDQUFqQjtBLG9EQUNBO0Esa0RBQVMsQUFBUyxLQUFULEFBQWMsSUFBSSxhQUFBOzJDQUFLLEVBQUwsQUFBTztBQUF6QixBLEFBQ1QsaUNBRFM7QSxxQ0FDSixPQUFPLEEsQUFBUDs7c0dBQ1UsQUFBNkQsOEJBQTdELEFBQXNGLElBQXRGLEFBQTRGLEtBQUssYUFBQTsyQ0FBSyxFQUFMLEFBQUssQUFBRTtBQUF4RyxBLGlDQUFBOztpQ0FBZjtBO2lFQUNDLEVBQUUsS0FBSyxPQUFQLEEsQUFBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBUFYsZ0IsQUFBTTs7a0JBcUJWLHFCQUFBLEFBQVEsTUFBUixBQUFjLE1BQWQsQUFBb0IsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==