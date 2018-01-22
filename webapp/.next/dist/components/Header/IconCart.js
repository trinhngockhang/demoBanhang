'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _reactRedux = require('react-redux');

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _Item = require('./Item');

var _Item2 = _interopRequireDefault(_Item);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = (0, _jsx3.default)('img', {
    src: '/static/images/icons/cart.png',
    alt: ''
});

var _ref3 = (0, _jsx3.default)('span', {}, void 0, 'Subtotal:');

var _ref4 = (0, _jsx3.default)('div', {
    className: 'btn-cart'
}, void 0, (0, _jsx3.default)(_link2.default, {
    href: '/giohang',
    className: 'view-cart',
    title: ''
}, void 0, 'View Cart'), (0, _jsx3.default)(_link2.default, {
    href: '/dathangonline',
    className: 'check-out',
    title: ''
}, void 0, 'Checkout'));

var IconCart = function (_React$Component) {
    (0, _inherits3.default)(IconCart, _React$Component);

    function IconCart() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, IconCart);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = IconCart.__proto__ || (0, _getPrototypeOf2.default)(IconCart)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            success: false,
            count: 0,
            sub_total: 0
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(IconCart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            if (JSON.parse(localStorage.getItem("item"))) {
                this.setState({ success: true });
            }
            this.setState({ count: localStorage.getItem("count"), sub_total: localStorage.getItem("sub_total") });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ count: localStorage.getItem("count"), sub_total: localStorage.getItem("sub_total") });
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _jsx3.default)('div', {
                className: 'inner-box'
            }, void 0, (0, _jsx3.default)('a', {
                href: '#',
                title: ''
            }, void 0, (0, _jsx3.default)('div', {
                className: 'icon-cart'
            }, void 0, _ref2, (0, _jsx3.default)('span', {}, void 0, this.state.count))), (0, _jsx3.default)('div', {
                className: 'dropdown-box mobile'
            }, void 0, (0, _jsx3.default)('ul', {}, void 0, this.state.success && JSON.parse(localStorage.getItem("item")).map(function (e, index) {
                return (0, _jsx3.default)(_Item2.default, {
                    item: e
                }, index);
            })), (0, _jsx3.default)('div', {
                className: 'total'
            }, void 0, _ref3, (0, _jsx3.default)('span', {
                className: 'price'
            }, void 0, this.state.sub_total)), _ref4));
        }
    }]);
    return IconCart;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        item: state.receiptReducers.item,
        sub_total: state.receiptReducers.sub_total
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(IconCart);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcSWNvbkNhcnQuanMiXSwibmFtZXMiOlsiSWNvbkNhcnQiLCJzdGF0ZSIsInN1Y2Nlc3MiLCJjb3VudCIsInN1Yl90b3RhbCIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRTdGF0ZSIsIm5leHRQcm9wcyIsIm1hcCIsImUiLCJpbmRleCIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsIml0ZW0iLCJyZWNlaXB0UmVkdWNlcnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7O1MsQUF5QmlDO1NBQW9DOzs7Ozs7ZUFhbEM7O1UsQUFDQTtlLEFBQXFCO1dBQWtCOztVLEFBQ3ZDO2VBQTJCLEE7V0FBa0I7OztJQXRDMUUsQTs7Ozs7Ozs7Ozs7Ozs7b04sQUFDRjtxQkFBUSxBQUNLLEFBQ1Q7bUJBRkksQUFFRyxBQUNQO3VCQUhJLEEsQUFHTztBQUhQLEFBQ0o7Ozs7OzRDQUtnQixBQUNoQjtnQkFBRyxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBM0IsQUFBRyxBQUFXLEFBQXFCLFVBQVUsQUFDekM7cUJBQUEsQUFBSyxTQUFTLEVBQUUsU0FBaEIsQUFBYyxBQUFXLEFBQzVCO0FBQ0Q7aUJBQUEsQUFBSyxTQUFTLEVBQUMsT0FBTyxhQUFBLEFBQWEsUUFBckIsQUFBUSxBQUFxQixVQUFVLFdBQVcsYUFBQSxBQUFhLFFBQTdFLEFBQWMsQUFBa0QsQUFBcUIsQUFDeEY7Ozs7a0RBRXlCLEEsV0FBVyxBQUNqQztpQkFBQSxBQUFLLFNBQVMsRUFBQyxPQUFPLGFBQUEsQUFBYSxRQUFyQixBQUFRLEFBQXFCLFVBQVUsV0FBVyxhQUFBLEFBQWEsUUFBN0UsQUFBYyxBQUFrRCxBQUFxQixBQUN4Rjs7OztpQ0FFUSxBQUNMOzsyQkFBQSxBQUNtQjtBQURuQjtzQkFBQSxBQUVnQjt1QkFGaEIsQUFFMEI7QUFGMUI7MkJBQUEsQUFHMkI7QUFIM0IscUVBS3dCLEtBQUEsQUFBSyxNQUw3QixBQUttQzsyQkFMbkMsQUFRdUI7QUFSdkIsNERBU29CLEtBQUEsQUFBSyxNQUFMLEFBQVcsZ0JBQ1gsQUFBSyxNQUFNLGFBQUEsQUFBYSxRQUF4QixBQUFXLEFBQXFCLFNBQWhDLEFBQXlDLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxPQUFKOzswQkFBQSxBQUEwQjtBQUExQixtQkFBQSxBQUFrQztBQVZuRyxBQVVvQixhQUFBOzJCQVZwQixBQWEyQjtBQWIzQjsyQkFBQSxBQWVnQztBQWZoQyx1QkFlMEMsS0FBQSxBQUFLLE1BZi9DLEFBZXFELGFBU3hEOzs7O0VBM0NrQixnQkFBTSxBOztBQThDN0IsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDN0I7O2NBQ1UsTUFBQSxBQUFNLGdCQURULEFBQ3lCLEFBQzVCO21CQUFXLE1BQUEsQUFBTSxnQkFGckIsQUFBTyxBQUU4QixBQUV4QztBQUpVLEFBQ0g7QUFGUjs7a0JBUWUseUJBQUEsQUFBUSxpQkFBUixBQUF5QixBIiwiZmlsZSI6Ikljb25DYXJ0LmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9