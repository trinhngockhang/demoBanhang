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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var MenuProduce = function (_React$Component) {
    (0, _inherits3.default)(MenuProduce, _React$Component);

    function MenuProduce() {
        (0, _classCallCheck3.default)(this, MenuProduce);
        return (0, _possibleConstructorReturn3.default)(this, (MenuProduce.__proto__ || (0, _getPrototypeOf2.default)(MenuProduce)).apply(this, arguments));
    }

    (0, _createClass3.default)(MenuProduce, [{
        key: 'shouldComponentUpdate',
        value: function shouldComponentUpdate(nextProps) {
            if (nextProps.items !== this.props.items) {
                return true;
            }
            return false;
        }
    }, {
        key: 'render',
        value: function render() {
            return (0, _jsx3.default)('div', {
                className: 'row'
            }, void 0, this.props.items.map(function (item, index) {
                return (0, _jsx3.default)('div', {
                    className: 'col-lg-3 col-md-12 col-6'
                }, index, (0, _jsx3.default)('a', {
                    className: 'home-category-list__category-grid',
                    href: ''
                }, void 0, (0, _jsx3.default)('div', {
                    className: 'home-category-list__category-grid-content'
                }, void 0, (0, _jsx3.default)('div', {
                    className: 'lazy-image__container home-category-list__category-grid-thumbnail'
                }, void 0, (0, _jsx3.default)(_link2.default, {
                    href: { pathname: '/sanpham', query: { id: item.id } }
                }, void 0, (0, _jsx3.default)('img', {
                    className: 'lazy-image__image',
                    src: item.image_url
                }))), (0, _jsx3.default)('div', {
                    className: 'home-category-list__category-grid-name'
                }, void 0, item.title))));
            }));
        }
    }]);
    return MenuProduce;
}(_react2.default.Component);

exports.default = MenuProduce;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXE1lbnVcXE1lbnVQcm9kdWNlLmpzIl0sIm5hbWVzIjpbIk1lbnVQcm9kdWNlIiwibmV4dFByb3BzIiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBhdGhuYW1lIiwicXVlcnkiLCJpZCIsImltYWdlX3VybCIsInRpdGxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7OztJQUVNLEE7Ozs7Ozs7Ozs7OEMsQUFDb0IsV0FBVyxBQUM3QjtnQkFBSSxVQUFBLEFBQVUsVUFBVSxLQUFBLEFBQUssTUFBN0IsQUFBbUMsT0FBTyxBQUN0Qzt1QkFBQSxBQUFPLEFBQ1Y7QUFDRDttQkFBQSxBQUFPLEFBQ1Y7Ozs7aUNBQ1EsQUFDTDs7MkJBQUEsQUFDbUI7QUFEbkIsNEJBR1ksQUFBSyxNQUFMLEFBQVcsTUFBWCxBQUFpQixJQUFJLFVBQUEsQUFBQyxNQUFELEFBQU8sT0FBVSxBQUNsQzs7K0JBQUEsQUFDbUI7QUFEbkIsbUJBQUEsQUFDbUQ7K0JBRG5ELEFBRXFCOzBCQUZyQixBQUU4RDtBQUY5RDsrQkFBQSxBQUcyQjtBQUgzQjsrQkFBQSxBQUkrQjtBQUovQjswQkFLZ0MsRUFBRSxVQUFGLEFBQVksWUFBWSxPQUFPLEVBQUUsSUFBSSxLQUxyRSxBQUtnQyxBQUErQixBQUFXO0FBTDFFOytCQUFBLEFBS2lHO3lCQUF5QixLQUwxSCxBQUsrSDtBQUwvSDsrQkFBQSxBQU8rQjtBQVAvQiwyQkFPeUUsS0FQekUsQUFPOEUsQUFLakY7QUFoQmIsQUFHWSxBQWlCZixhQWpCZTs7OztFQVhNLGdCQUFNLEE7O2tCQWdDakIsQSIsImZpbGUiOiJNZW51UHJvZHVjZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==