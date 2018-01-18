'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

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

var _DisplayProduce = require('./DisplayProduce');

var _DisplayProduce2 = _interopRequireDefault(_DisplayProduce);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _ref = (0, _jsx3.default)('br', {});

var _ref2 = (0, _jsx3.default)('div', {
    className: 'box-cart style2 home'
}, void 0, (0, _jsx3.default)('div', {
    className: 'btn-add-cart home'
}, void 0, (0, _jsx3.default)('a', {
    href: '#',
    title: ''
}, void 0, (0, _jsx3.default)('img', {
    src: './images/icons/add-cart.png',
    alt: ''
}), 'Mua')));

var _ref3 = (0, _jsx3.default)('div', {
    className: 'col-md-2 col-sm-2 imgCategory'
}, void 0, (0, _jsx3.default)('img', {
    src: '/static/images/slider/img_tittle2.jpg',
    className: 'img_tittle',
    alt: ''
}));

var Produce = function (_React$Component) {
    (0, _inherits3.default)(Produce, _React$Component);

    function Produce() {
        (0, _classCallCheck3.default)(this, Produce);
        return (0, _possibleConstructorReturn3.default)(this, (Produce.__proto__ || (0, _getPrototypeOf2.default)(Produce)).apply(this, arguments));
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
            }, void 0, (0, _values2.default)(this.props.produce).map(function (item) {
                return item.map(function (s, idx) {
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
                    }, void 0, s.subtitle, _ref)), (0, _jsx3.default)('div', {
                        className: 'price'
                    }, void 0, (0, _jsx3.default)('span', {
                        className: 'sale'
                    }, void 0, s.price), (0, _jsx3.default)('span', {
                        className: 'regular'
                    }, void 0, s.quantity))), _ref2);
                });
            }))), _ref3))));
        }
    }]);
    return Produce;
}(_react2.default.Component);

exports.default = Produce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhvbWVcXGluZGV4LmpzIl0sIm5hbWVzIjpbIlByb2R1Y2UiLCJuZXh0UHJvcHMiLCJwcm9kdWNlIiwicHJvcHMiLCJuYW1lIiwibWFwIiwiaXRlbSIsInMiLCJpZHgiLCJpbWFnZV91cmwiLCJ0aXRsZSIsInN1YnRpdGxlIiwicHJpY2UiLCJxdWFudGl0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7Ozs7O2VBK0N1RTs7ZUFDSTs7VUFDSCxBO1dBQVU7O1NBQVksQTtTQUFrQzs7OztlQVVyRjs7U0FDRixBO2VBQWtELEE7U0FBaUI7OztJLEFBMUR2Rjs7Ozs7Ozs7Ozs4QyxBQUNLLFdBQVcsQUFDN0I7Z0JBQUksVUFBQSxBQUFVLFlBQVksS0FBQSxBQUFLLE1BQS9CLEFBQXFDLFNBQVMsQUFDMUM7dUJBQUEsQUFBTyxBQUNWO0FBQ0Q7bUJBQUEsQUFBTyxBQUNWOzs7O2lDQUVRLEFBQ0w7OzJCQUFBLEFBRTJCO0FBRjNCLGVBRXVELEtBQUEsQUFBSyxNQUY1RCxBQUVrRTsyQkFGbEUsQUFHMkI7QUFIM0I7MkJBQUEsQUFJK0I7QUFKL0I7MkJBQUEsQUFLbUM7QUFMbkM7MkJBQUEsQUFNdUM7QUFOdkMsNERBT2lDLEtBQUEsQUFBSyxNQVB0QyxBQU80QzsyQkFQNUMsQUFXK0I7QUFYL0I7MkJBQUEsQUFZbUM7QUFabkM7MkJBQUEsQUFhdUM7QUFidkMsNkNBZThDLEtBQUEsQUFBSyxNQUFuQixBQUF5QixTQUF6QixBQUFrQyxJQUFJLGdCQUFRLEFBQzFDOzRCQUFPLEFBQUssSUFBSSxVQUFBLEFBQUMsR0FBRCxBQUFHLEtBQVEsQUFDdkI7O21DQUFBLEFBQ21CO0FBRG5CO21DQUFBLEFBRXVCO0FBRnZCOzhCQUFBLEFBR29COytCQUhwQixBQUc4QjtBQUg5Qjs2QkFJMEIsRUFKMUIsQUFJNEI7NkJBSjVCLEFBSTJDO0FBSjNDO21DQUFBLEFBT3VCO0FBUHZCO21DQUFBLEFBUTJCO0FBUjNCOzhCQUFBLEFBU3dCOytCQVR4QixBQVNrQztBQVRsQywrQkFTc0MsRUFUdEMsQUFTd0M7bUNBVHhDLEFBVzJCO0FBWDNCOzhCQUFBLEFBWXdCOytCQVp4QixBQVlrQztBQVpsQywrQkFZc0MsRUFadEMsQUFZd0M7bUNBWnhDLEFBYzJCO0FBZDNCO21DQUFBLEFBZWdDO0FBZmhDLCtCQWV3QyxFQWZ4QyxBQWUwQzttQ0FmMUMsQUFnQmdDO0FBaEJoQywrQkFnQjJDLEVBaEIzQyxBQWdCNkMsYUFVaEQ7QUEzQkQsQUFBTyxBQTRCVixpQkE1QlU7QUFoQjNDLEFBZWdDLGFBQUEsS0F5Q25DOzs7O0VBakVnQyxnQkFBTSxBOztrQkFBdEIsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==