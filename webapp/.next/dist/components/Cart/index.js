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

var _ref2 = (0, _jsx3.default)('br', {});

var _ref3 = (0, _jsx3.default)('div', {
    className: 'clearfix'
});

var ShopingBasket = function (_React$Component) {
    (0, _inherits3.default)(ShopingBasket, _React$Component);

    function ShopingBasket() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ShopingBasket);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ShopingBasket.__proto__ || (0, _getPrototypeOf2.default)(ShopingBasket)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            stock: _this.props.item.stock,
            total: parseInt(_this.props.item.price) * parseInt(_this.props.item.stock),
            disable: false
        }, _this.add = function (item) {
            _this.props.shopingBasket(item);
            _this.props.addShopingBasket(item);
        }, _this.minus = function (item) {
            _this.props.shopingBasket(item);
            _this.props.subShopingBasket(item);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ShopingBasket, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            this.setState({ stock: nextProps.item.stock, total: parseInt(this.props.item.price) * parseInt(nextProps.item.stock) });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _jsx3.default)('tr', {}, void 0, (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('div', {
                className: 'img-product'
            }, void 0, (0, _jsx3.default)('img', {
                src: this.props.item.image_url,
                alt: this.props.item.title
            })), (0, _jsx3.default)('div', {
                className: 'name-product'
            }, void 0, this.props.item.title, _ref2), (0, _jsx3.default)('div', {
                className: 'price'
            }, void 0, this.props.item.price), _ref3), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('div', {
                className: 'quanlity'
            }, void 0, (0, _jsx3.default)('span', {
                className: 'btn-down',
                onClick: function onClick() {
                    return _this2.minus(_this2.props.item);
                }
            }), (0, _jsx3.default)('input', {
                type: 'text',
                name: 'number',
                value: this.state.stock,
                readOnly: true
            }), (0, _jsx3.default)('span', {
                className: 'btn-up',
                onClick: function onClick() {
                    return _this2.add(_this2.props.item);
                }
            }))), (0, _jsx3.default)('td', {}, void 0, (0, _jsx3.default)('div', {
                className: 'total'
            }, void 0, this.state.total)));
        }
    }]);
    return ShopingBasket;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        item: state.receiptReducers.item,
        sub_total: state.receiptReducers.sub_total
    };
};

var mapDispatchToProps = {
    shopingBasket: _actions.shopingBasket,
    addShopingBasket: _actions.addShopingBasket,
    subShopingBasket: _actions.subShopingBasket
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(ShopingBasket);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENhcnRcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlNob3BpbmdCYXNrZXQiLCJzdGF0ZSIsInN0b2NrIiwicHJvcHMiLCJpdGVtIiwidG90YWwiLCJwYXJzZUludCIsInByaWNlIiwiZGlzYWJsZSIsImFkZCIsInNob3BpbmdCYXNrZXQiLCJhZGRTaG9waW5nQmFza2V0IiwibWludXMiLCJzdWJTaG9waW5nQmFza2V0IiwibmV4dFByb3BzIiwic2V0U3RhdGUiLCJpbWFnZV91cmwiLCJ0aXRsZSIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsInJlY2VpcHRSZWR1Y2VycyIsInN1Yl90b3RhbCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7O2VBb0NtQzs7O0ksQUFsQzdCOzs7Ozs7Ozs7Ozs7Ozs4TkFDRixBO21CQUNXLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FEZCxBQUNtQixBQUN2QjttQkFBTyxTQUFTLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FBcEIsQUFBeUIsU0FBTyxTQUFTLE1BQUEsQUFBSyxNQUFMLEFBQVcsS0FGdkQsQUFFbUMsQUFBeUIsQUFDaEU7cUJBSEksQUFHSyxBO0FBSEwsQUFDSixpQixBQVNKLE1BQU0sVUFBQSxBQUFDLE1BQVMsQUFDWjtrQkFBQSxBQUFLLE1BQUwsQUFBVyxjQUFYLEFBQXlCLEFBQ3pCO2tCQUFBLEFBQUssTUFBTCxBQUFXLGlCQUFYLEFBQTRCLEFBQy9CO0EsaUJBRUQsQSxRQUFRLFVBQUEsQUFBQyxNQUFTLEFBQ2Q7a0JBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixBQUN6QjtrQkFBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixBQUMvQjtBOzs7OztrREFaeUIsQSxXQUFXLEFBQ2pDO2lCQUFBLEFBQUssU0FBUyxFQUFDLE9BQU8sVUFBQSxBQUFVLEtBQWxCLEFBQXVCLE9BQU8sT0FBTyxTQUFTLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FBcEIsQUFBeUIsU0FBTyxTQUFTLFVBQUEsQUFBVSxLQUF0RyxBQUFjLEFBQXFFLEFBQXdCLEFBQzlHOzs7O2lDQVlRO3lCQUNMOzs7MkJBQUEsQUFHMkI7QUFIM0I7cUJBSTJCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FKdEMsQUFJMkM7cUJBQWtCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FKeEUsQUFJNkU7QUFKN0U7MkJBQUEsQUFNMkI7QUFOM0IsdUJBT2tCLEtBQUEsQUFBSyxNQUFMLEFBQVcsS0FQN0IsQUFPa0M7MkJBUGxDLEFBUzJCO0FBVDNCLHVCQVVrQixLQUFBLEFBQUssTUFBTCxBQUFXLEtBVjdCLEFBVWtDOzJCQVZsQyxBQWUyQjtBQWYzQjsyQkFBQSxBQWdCZ0M7eUJBQW9CLG1CQUFBOzJCQUFNLE9BQUEsQUFBSyxNQUFNLE9BQUEsQUFBSyxNQUF0QixBQUFNLEFBQXNCO0FBaEJoRjtBQUFBO3NCQUFBLEFBaUI0QjtzQkFqQjVCLEFBaUJ3Qzt1QkFBZ0IsS0FBQSxBQUFLLE1BakI3RCxBQWlCbUU7MEJBakJuRTtBQUFBOzJCQUFBLEFBa0JnQzt5QkFBa0IsbUJBQUE7MkJBQU0sT0FBQSxBQUFLLElBQUksT0FBQSxBQUFLLE1BQXBCLEFBQU0sQUFBb0I7QUFsQjVFO0FBQUE7MkJBQUEsQUFzQjJCO0FBdEIzQix1QkF1QmtCLEtBQUEsQUFBSyxNQXZCdkIsQUF1QjZCLEFBS2hDOzs7O0VBbER1QixnQkFBTSxBOztBQXFEbEMsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsdUJBQVMsQUFDN0I7O2NBQ1UsTUFBQSxBQUFNLGdCQURULEFBQ3lCLEFBQzVCO21CQUFXLE1BQUEsQUFBTSxnQkFGckIsQUFBTyxBQUU4QixBQUV4QztBQUpVLEFBQ0g7QUFGUjs7QUFPQSxJQUFNOzRCQUFzQixBQUV4QjsrQkFGd0IsQUFHeEI7K0JBSEosQUFBNEI7QUFBQSxBQUN4Qjs7a0JBS1cseUJBQUEsQUFBUSxNQUFSLEFBQWMsb0JBQWQsQUFBa0MsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==