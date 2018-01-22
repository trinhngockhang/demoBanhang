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

var _ref3 = (0, _jsx3.default)('img', {
    src: './images/icons/add-cart.png',
    alt: ''
});

var _ref4 = (0, _jsx3.default)('div', {
    className: 'col-md-2 col-sm-2 imgCategory'
}, void 0, (0, _jsx3.default)('img', {
    src: '/static/images/slider/img_tittle2.jpg',
    className: 'img_tittle',
    alt: ''
}));

var Produce = function (_React$Component) {
    (0, _inherits3.default)(Produce, _React$Component);

    function Produce() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, Produce);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Produce.__proto__ || (0, _getPrototypeOf2.default)(Produce)).call.apply(_ref, [this].concat(args))), _this), _this.save = function (e, item) {
            e.preventDefault();
            _this.props.shopingBasket(item);
            _this.props.addShopingBasket(item);
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Produce, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.produce !== this.props.produce) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('section', {
                className: 'flat-imagebox style4'
            }, this.props.name, (0, _jsx3.default)('div', {
                className: 'container'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'row'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'col-md-12 tittle'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'flat-row-title'
            }, void 0, (0, _jsx3.default)('h3', {}, void 0, this.props.name)))), (0, _jsx3.default)('div', {
                className: 'row'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'col-md-9 col-sm-12'
            }, void 0, (0, _jsx3.default)('div', {
                className: 'owl-carousel-3'
            }, void 0, this.props.produce.map(function (s, idx) {
                return (0, _jsx3.default)('div', {
                    className: 'imagebox style4'
                }, void 0, (0, _jsx3.default)('div', {
                    className: 'box-image'
                }, void 0, (0, _jsx3.default)('a', {
                    href: '#',
                    title: ''
                }, void 0, (0, _jsx3.default)('img', {
                    src: s.image_url,
                    alt: ''
                }))), (0, _jsx3.default)('div', {
                    className: 'box-content'
                }, void 0, (0, _jsx3.default)('div', {
                    className: 'cat-name'
                }, void 0, (0, _jsx3.default)('a', {
                    href: '#',
                    title: ''
                }, void 0, s.title)), (0, _jsx3.default)('div', {
                    className: 'product-name'
                }, void 0, (0, _jsx3.default)('a', {
                    href: '#',
                    title: ''
                }, void 0, s.subtitle, _ref2)), (0, _jsx3.default)('div', {
                    className: 'price'
                }, void 0, (0, _jsx3.default)('span', {
                    className: 'sale'
                }, void 0, s.price), (0, _jsx3.default)('span', {
                    className: 'regular'
                }, void 0, s.quantity))), (0, _jsx3.default)('div', {
                    className: 'box-cart style2 home'
                }, void 0, (0, _jsx3.default)('div', {
                    className: 'btn-add-cart home'
                }, void 0, (0, _jsx3.default)('a', {
                    href: '#',
                    title: '',
                    onClick: function onClick(e) {
                        return _this2.save(e, s);
                    }
                }, void 0, _ref3, 'Mua'))));
            }))), _ref4))));
        }
    }]);
    return Produce;
}(_react2.default.Component);

var mapDispatchToProps = {
    shopingBasket: _actions.shopingBasket,
    addShopingBasket: _actions.addShopingBasket
};

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(Produce);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y2UiLCJzYXZlIiwiZSIsIml0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsInByb3BzIiwic2hvcGluZ0Jhc2tldCIsImFkZFNob3BpbmdCYXNrZXQiLCJuZXh0UHJvcHMiLCJwcm9kdWNlIiwibmFtZSIsIm1hcCIsInMiLCJpZHgiLCJpbWFnZV91cmwiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHJpY2UiLCJxdWFudGl0eSIsIkNvbXBvbmVudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7O1NBc0R5SCxBO1NBQWtDOzs7O2VBU2hIOztTLEFBQ0Y7ZSxBQUFrRDtTQUFpQjs7O0lBOUR0RyxBOzs7Ozs7Ozs7Ozs7OztrTkFRRixBLE9BQU8sVUFBQSxBQUFDLEdBQUQsQUFBRyxNQUFTLEFBQ2Y7Y0FBQSxBQUFFLEFBQ0Y7a0JBQUEsQUFBSyxNQUFMLEFBQVcsY0FBWCxBQUF5QixBQUN6QjtrQkFBQSxBQUFLLE1BQUwsQUFBVyxpQkFBWCxBQUE0QixBQUMvQjtBOzs7Ozs4QyxBQVhxQixXQUFXLEFBQzdCO2dCQUFJLFVBQUEsQUFBVSxZQUFZLEtBQUEsQUFBSyxNQUEvQixBQUFxQyxTQUFTLEFBQzFDO3VCQUFBLEFBQU8sQUFDVjtBQUNEO21CQUFBLEFBQU8sQUFDVjs7OztpQ0FRUTt5QkFDTDs7OzJCQUFBLEFBRTJCO0FBRjNCLGVBRXVELEtBQUEsQUFBSyxNQUY1RCxBQUVrRTsyQkFGbEUsQUFHMkI7QUFIM0I7MkJBQUEsQUFJK0I7QUFKL0I7MkJBQUEsQUFLbUM7QUFMbkM7MkJBQUEsQUFNdUM7QUFOdkMsNERBT2lDLEtBQUEsQUFBSyxNQVB0QyxBQU80QzsyQkFQNUMsQUFXK0I7QUFYL0I7MkJBQUEsQUFZbUM7QUFabkM7MkJBQUEsQUFhdUM7QUFidkMsNEJBZWdDLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFHLEtBQVEsQUFDOUI7OytCQUFBLEFBQ21CO0FBRG5COytCQUFBLEFBRXVCO0FBRnZCOzBCQUFBLEFBR29COzJCQUhwQixBQUc4QjtBQUg5Qjt5QkFJMEIsRUFKMUIsQUFJNEI7eUJBSjVCLEFBSTJDO0FBSjNDOytCQUFBLEFBT3VCO0FBUHZCOytCQUFBLEFBUTJCO0FBUjNCOzBCQUFBLEFBU3dCOzJCQVR4QixBQVNrQztBQVRsQywyQkFTc0MsRUFUdEMsQUFTd0M7K0JBVHhDLEFBVzJCO0FBWDNCOzBCQUFBLEFBWXdCOzJCQVp4QixBQVlrQztBQVpsQywyQkFZc0MsRUFadEMsQUFZd0M7K0JBWnhDLEFBYzJCO0FBZDNCOytCQUFBLEFBZWdDO0FBZmhDLDJCQWV3QyxFQWZ4QyxBQWUwQzsrQkFmMUMsQUFnQmdDO0FBaEJoQywyQkFnQjJDLEVBaEIzQyxBQWdCNkM7K0JBaEI3QyxBQW1CdUI7QUFuQnZCOytCQUFBLEFBb0IyQjtBQXBCM0I7MEJBQUEsQUFxQndCOzJCQXJCeEIsQUFxQmtDOzZCQUFZLG9CQUFBOytCQUFLLE9BQUEsQUFBSyxLQUFMLEFBQVUsR0FBZixBQUFLLEFBQWE7QUFyQmhFO0FBQUEsa0NBMEJIO0FBMUNqQyxBQWVnQyxhQUFBLEtBdUNuQzs7OztFQXJFaUIsZ0JBQU0sQTs7QUF3RTVCLElBQU07NEJBQXNCLEFBRXhCOytCQUZKLEFBQTRCO0FBQUEsQUFDeEI7O2tCQUlXLHlCQUFBLEFBQVEsTUFBUixBQUFjLG9CQUFkLEFBQWtDLEEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovZGVtb0Jhbmhhbmcvd2ViYXBwIn0=