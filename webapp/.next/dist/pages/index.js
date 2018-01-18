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

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _Header = require('../components/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Footer = require('../components/SharedComponent/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

var _Home = require('../components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Advertisments = require('../components/Home/Advertisments');

var _Advertisments2 = _interopRequireDefault(_Advertisments);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)(_Advertisments2.default, {});

var _ref2 = (0, _jsx3.default)(_Footer2.default, {});

var Home = function (_React$Component) {
    (0, _inherits3.default)(Home, _React$Component);

    function Home() {
        (0, _classCallCheck3.default)(this, Home);
        return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
    }

    (0, _createClass3.default)(Home, [{
        key: 'render',
        value: function render() {
            var items = (0, _values2.default)(this.props.json).map(function (s) {
                return s;
            });
            return (0, _jsx3.default)(_layouts2.default, {}, void 0, (0, _jsx3.default)(_Header2.default, {
                categoryLevel2: items
            }), _ref, (0, _jsx3.default)(_Home2.default, {
                name: 'D\u1ECBch v\u1EE5',
                produce: this.props.json
            }), (0, _jsx3.default)(_Home2.default, {
                name: '\u0110i\u1EC7n t\u1EED',
                produce: this.props.json
            }), _ref2);
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var res, json;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=5a007c92c846cac15b53ab81&level=2&parent=5a008022c846cac15b53ab98');

                            case 2:
                                res = _context.sent;
                                _context.next = 5;
                                return res.json();

                            case 5:
                                json = _context.sent;
                                return _context.abrupt('return', { json: json });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref3.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return Home;
}(_react2.default.Component);

exports.default = Home;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJIb21lIiwiaXRlbXMiLCJwcm9wcyIsImpzb24iLCJtYXAiLCJzIiwiZmV0Y2giLCJyZXMiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBRU0sQTs7Ozs7Ozs7OztpQ0FNTyxBQUNMO2dCQUFNLDhCQUFzQixLQUFBLEFBQUssTUFBbkIsQUFBeUIsTUFBekIsQUFBK0IsSUFBSSxhQUFBO3VCQUFBLEFBQUs7QUFBdEQsQUFBYyxBQUNkLGFBRGM7O2dDQUNkLEFBRWdDO0FBRmhDO3NCQUFBLEFBSXNCO3lCQUFtQixLQUFBLEFBQUssTUFKOUMsQUFJb0Q7QUFKcEQ7c0JBQUEsQUFLc0I7eUJBQW1CLEtBQUEsQUFBSyxNQUw5QyxBQUtvRDtBQUxwRCxnQkFTSDs7Ozs7Ozs7Ozs7O3VDQWZxQixNQUFBLEFBQU0sQTs7aUNBQWxCO0E7O3VDQUNhLElBQUEsQUFBSSxBOztpQ0FBakI7QTtpRUFDQyxFQUFFLE1BQUYsQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBSkksZ0JBQU0sQTs7a0JBb0JWLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovZGVtb0Jhbmhhbmcvd2ViYXBwIn0=