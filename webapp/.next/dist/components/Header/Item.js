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

var _actions = require('../../actions');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)('div', {
    className: 'clearfix'
});

var Item = function (_React$Component) {
    (0, _inherits3.default)(Item, _React$Component);

    function Item() {
        (0, _classCallCheck3.default)(this, Item);
        return (0, _possibleConstructorReturn3.default)(this, (Item.__proto__ || (0, _getPrototypeOf2.default)(Item)).apply(this, arguments));
    }

    (0, _createClass3.default)(Item, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.item !== this.props.item) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('div', {
                className: 'img-product'
            }, void 0, (0, _jsx3.default)('img', {
                src: this.props.item.image_url
            })), (0, _jsx3.default)('div', {
                className: 'info-product'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'name'
            }, void 0, this.props.item.title), (0, _jsx3.default)('div', {
                className: 'price'
            }, void 0, (0, _jsx3.default)('span', {}, void 0, this.props.item.stock, ' x'), (0, _jsx3.default)('span', {}, void 0, this.props.item.price))), _ref, (0, _jsx3.default)('span', {
                className: 'delete',
                onClick: function onClick() {
                    return _this2.props.subShopingBasket(_this2.props.item);
                }
            }, void 0, 'x'));
        }
    }]);
    return Item;
}(_react2.default.Component);

var mapDispatchToProps = {
    subShopingBasket: _actions.subShopingBasket
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Item);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcSXRlbS5qcyJdLCJuYW1lcyI6WyJJdGVtIiwibmV4dFByb3BzIiwiaXRlbSIsInByb3BzIiwiaW1hZ2VfdXJsIiwidGl0bGUiLCJzdG9jayIsInByaWNlIiwic3ViU2hvcGluZ0Jhc2tldCIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7OztlQXlCK0I7OztJLEFBdEJ6Qjs7Ozs7Ozs7Ozs4Q0FDb0IsQSxXQUFXLEFBQzdCO2dCQUFHLFVBQUEsQUFBVSxTQUFTLEtBQUEsQUFBSyxNQUEzQixBQUFpQyxNQUFNLEFBQ25DO3VCQUFBLEFBQU8sQUFDVjtBQUNEO21CQUFBLEFBQU8sQUFDVjs7OztpQ0FDUTt5QkFDTDs7OzJCQUFBLEFBRXVCO0FBRnZCO3FCQUdzQixLQUFBLEFBQUssTUFBTCxBQUFXLEtBSGpDLEFBR3NDO0FBSHRDOzJCQUFBLEFBS3VCO0FBTHZCOzJCQUFBLEFBTTJCO0FBTjNCLHVCQU9pQixLQUFBLEFBQUssTUFBTCxBQUFXLEtBUDVCLEFBT2lDOzJCQVBqQyxBQVMyQjtBQVQzQiw4REFVdUIsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQVZsQyxBQVV1QyxxREFDaEIsS0FBQSxBQUFLLE1BQUwsQUFBVyxLQVhsQyxBQVd1QzsyQkFYdkMsQUFld0I7eUJBQWtCLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxNQUFMLEFBQVcsaUJBQWlCLE9BQUEsQUFBSyxNQUF2QyxBQUFNLEFBQXVDO0FBZnZGO0FBQUEsdUJBa0JIOzs7O0VBMUJjLGdCQUFNLEE7O0FBNkJ6QixJQUFNOytCQUFOLEFBQTRCO0FBQUEsQUFDeEI7O2tCQUdXLHlCQUFBLEFBQVEsTUFBUixBQUFjLG9CQUFkLEFBQWtDLEEiLCJmaWxlIjoiSXRlbS5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==