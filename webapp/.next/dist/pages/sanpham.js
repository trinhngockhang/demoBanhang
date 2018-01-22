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

var _store = require('../store');

var _store2 = _interopRequireDefault(_store);

var _layouts = require('../layouts');

var _layouts2 = _interopRequireDefault(_layouts);

var _Product = require('../components/Product');

var _Product2 = _interopRequireDefault(_Product);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Product = function (_React$Component) {
    (0, _inherits3.default)(Product, _React$Component);

    function Product() {
        (0, _classCallCheck3.default)(this, Product);
        return (0, _possibleConstructorReturn3.default)(this, (Product.__proto__ || (0, _getPrototypeOf2.default)(Product)).apply(this, arguments));
    }

    (0, _createClass3.default)(Product, [{
        key: 'render',
        value: function render() {
            return (0, _jsx3.default)(_layouts2.default, {
                title: this.props.product.title
            }, void 0, (0, _jsx3.default)(_Product2.default, {
                product: this.props.product
            }));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2) {
                var store = _ref2.store,
                    query = _ref2.query;
                var pageid, item;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                pageid = '5a007c92c846cac15b53ab81';
                                _context.next = 3;
                                return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&id=' + query.id).then(function (r) {
                                    return r.json();
                                });

                            case 3:
                                item = _context.sent;
                                return _context.abrupt('return', { product: item.data });

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);
    return Product;
}(_react2.default.Component);

exports.default = (0, _store2.default)(null, null)(Product);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxzYW5waGFtLmpzIl0sIm5hbWVzIjpbIlByb2R1Y3QiLCJwcm9wcyIsInByb2R1Y3QiLCJ0aXRsZSIsInN0b3JlIiwicXVlcnkiLCJwYWdlaWQiLCJmZXRjaCIsImlkIiwidGhlbiIsInIiLCJqc29uIiwiaXRlbSIsImRhdGEiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O0ksQUFFTTs7Ozs7Ozs7OztpQ0FNTyxBQUNMOzt1QkFDeUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxRQURwQyxBQUM0QztBQUQ1Qzt5QkFFaUMsS0FBQSxBQUFLLE1BRnRDLEFBRTRDLEFBRy9DO0FBTEc7Ozs7OztvQixBQU4yQixjQUFBLEE7b0IsQUFBTyxjLEFBQUE7Ozs7O2lDQUM1QjtBLHlDQUFTLEE7O3NHQUNJLEFBQTZELGtCQUFhLE1BQTFFLEFBQWdGLElBQWhGLEFBQXNGLEtBQUssYUFBQTsyQ0FBSyxFQUFMLEFBQUssQUFBRTtBQUFsRyxBLGlDQUFBOztpQ0FBYjtBO2lFQUNDLEVBQUUsU0FBUyxLQUFYLEFBQWdCLEE7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUpULGdCLEFBQU07O2tCQWViLHFCQUFBLEFBQVEsTUFBUixBQUFjLE1BQWQsQUFBb0IsQSIsImZpbGUiOiJzYW5waGFtLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9