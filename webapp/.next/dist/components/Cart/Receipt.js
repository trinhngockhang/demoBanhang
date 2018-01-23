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

var _link = require('next\\dist\\lib\\link.js');

var _link2 = _interopRequireDefault(_link);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref2 = (0, _jsx3.default)('h3', {}, void 0, 'T\u1ED5ng \u0111\u01A1n h\xE0ng');

var _ref3 = (0, _jsx3.default)('td', {}, void 0, 'T\u1ED5ng ti\u1EC1n');

var _ref4 = (0, _jsx3.default)('td', {}, void 0, 'Gi\xE1 ship');

var _ref5 = (0, _jsx3.default)('input', {
    type: 'radio',
    id: 'flat-rate',
    defaultChecked: true,
    name: 'radio-flat-rate'
});

var _ref6 = (0, _jsx3.default)('div', {
    className: 'radio-info'
}, void 0, (0, _jsx3.default)('input', {
    type: 'radio',
    id: 'free-shipping',
    name: 'radio-flat-rate'
}), (0, _jsx3.default)('label', {
    htmlFor: 'free-shipping'
}, void 0, 'Mi\u1EC5n ph\xED giao h\xE0ng'));

var _ref7 = (0, _jsx3.default)('div', {
    className: 'btn-shipping'
}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, 'T\u1ED5ng gi\xE1'));

var _ref8 = (0, _jsx3.default)('td', {}, void 0, 'T\u1ED5ng');

var _ref9 = (0, _jsx3.default)('div', {
    className: 'btn-cart-totals'
}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    className: 'update',
    title: ''
}, void 0, 'C\u1EADp nh\u1EADp gi\u1ECF h\xE0ng'), (0, _jsx3.default)(_link2.default, {
    href: '/dathangonline',
    className: 'checkout',
    title: ''
}, void 0, 'Ki\u1EC3m tra \u0111\u01A1n h\xE0ng'));

var Receipt = function (_React$Component) {
    (0, _inherits3.default)(Receipt, _React$Component);

    function Receipt() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Receipt);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Receipt.__proto__ || (0, _getPrototypeOf2.default)(Receipt)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            sub_total: 0,
            price_total: 0
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Receipt, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({ sub_total: localStorage.getItem("sub_total"), price_total: localStorage.getItem("price_total") });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ sub_total: localStorage.getItem("sub_total"), price_total: localStorage.getItem("price_total") });
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _jsx3.default)('div', {
                className: 'col-lg-4'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'cart-totals'
            }, void 0, _ref2, (0, _jsx3.default)('form', {
                action: '#',
                method: 'get',
                acceptCharset: 'utf-8'
            }, void 0, (0, _jsx3.default)('table', {}, void 0, (0, _jsx3.default)('tbody', {}, void 0, (0, _jsx3.default)('tr', {}, void 0, _ref3, (0, _jsx3.default)('td', {
                className: 'subtotal'
            }, void 0, this.state.sub_total)), (0, _jsx3.default)('tr', {}, void 0, _ref4, (0, _jsx3.default)('td', {
                className: 'btn-radio'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'radio-info'
            }, void 0, _ref5, (0, _jsx3.default)('label', {
                htmlFor: 'flat-rate'
            }, void 0, 'Gi\xE1(VN\u0110): ', (0, _jsx3.default)('span', {}, void 0, this.props.flatRate))), _ref6, _ref7)), (0, _jsx3.default)('tr', {}, void 0, _ref8, (0, _jsx3.default)('td', {
                className: 'price-total'
            }, void 0, this.state.price_total)))), _ref9)));
        }
    }]);
    return Receipt;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        sub_total: state.receiptReducers.sub_total,
        flatRate: state.receiptReducers.flatRate
    };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Receipt);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcnRcXFJlY2VpcHQuanMiXSwibmFtZXMiOlsiUmVjZWlwdCIsInN0YXRlIiwic3ViX3RvdGFsIiwicHJpY2VfdG90YWwiLCJzZXRTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXh0UHJvcHMiLCJwcm9wcyIsImZsYXRSYXRlIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwicmVjZWlwdFJlZHVjZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7VUErQndELEE7USxBQUFXOztVQUFnQzs7OztlQUc1Qzs7VUFDQyxBO1FBQVcsQTtVQUFxQjs7YUFDN0I7Ozs7ZUFFSjs7VUFDSCxBO1dBQVU7Ozs7OztlQVV2Qjs7VSxBQUNIO2VBQWMsQTtXQUFlOztVQUMxQixBO2UsQUFBMkI7V0FBaUI7OztJLEFBakQ3RTs7Ozs7Ozs7Ozs7Ozs7a04sQUFDRjt1QkFBUSxBQUNPLEFBQ1g7eUJBRkksQUFFUyxBO0FBRlQsQUFDSjs7Ozs7NENBSWdCLEFBQ2hCO2lCQUFBLEFBQUssU0FBUyxFQUFHLFdBQVcsYUFBQSxBQUFhLFFBQTNCLEFBQWMsQUFBcUIsY0FBYSxhQUFhLGFBQUEsQUFBYSxRQUF4RixBQUFjLEFBQTZELEFBQXFCLEFBQ25HOzs7O2tELEFBRXlCLFdBQVcsQUFDakM7aUJBQUEsQUFBSyxTQUFTLEVBQUUsV0FBVyxhQUFBLEFBQWEsUUFBMUIsQUFBYSxBQUFxQixjQUFjLGFBQWEsYUFBQSxBQUFhLFFBQXhGLEFBQWMsQUFBNkQsQUFBcUIsQUFDbkc7Ozs7aUNBQ1EsQUFDTDs7MkJBQUEsQUFDbUI7QUFEbkI7MkJBQUEsQUFFdUI7QUFGdkI7d0JBQUEsQUFJeUI7d0JBSnpCLEFBSW9DOytCQUpwQyxBQUl3RDtBQUp4RDsyQkFBQSxBQVMwQztBQVQxQyx1QkFTc0QsS0FBQSxBQUFLLE1BVDNELEFBU2lFOzJCQVRqRSxBQWEwQztBQWIxQzsyQkFBQSxBQWMrQztBQWQvQzt5QkFBQSxBQWdCbUQ7QUFoQm5ELG9GQWdCZ0YsS0FBQSxBQUFLLE1BaEJyRixBQWdCMkY7MkJBaEIzRixBQTZCMEM7QUE3QjFDLHVCQTZCeUQsS0FBQSxBQUFLLE1BN0I5RCxBQTZCb0UsaUJBWXZFOzs7O0VBdkRpQixnQixBQUFNOztBQTBENUIsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDN0I7O21CQUNlLE1BQUEsQUFBTSxnQkFEZCxBQUM4QixBQUNqQztrQkFBVSxNQUFBLEFBQU0sZ0JBRnBCLEFBQU8sQUFFNkIsQUFFdkM7QUFKVSxBQUNIO0FBRlI7O2tCQU9lLHlCQUFBLEFBQVEsaUJBQVIsQUFBeUIsQSIsImZpbGUiOiJSZWNlaXB0LmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9