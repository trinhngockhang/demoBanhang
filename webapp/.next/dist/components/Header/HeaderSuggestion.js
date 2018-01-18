"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _jsx2 = require("babel-runtime/helpers/jsx");

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var HeaderSuggestion = function (_React$Component) {
    (0, _inherits3.default)(HeaderSuggestion, _React$Component);

    function HeaderSuggestion() {
        (0, _classCallCheck3.default)(this, HeaderSuggestion);
        return (0, _possibleConstructorReturn3.default)(this, (HeaderSuggestion.__proto__ || (0, _getPrototypeOf2.default)(HeaderSuggestion)).apply(this, arguments));
    }

    (0, _createClass3.default)(HeaderSuggestion, [{
        key: "shouldComponentUpdate",
        value: function shouldComponentUpdate(nexpProps) {
            if (nexpProps.items !== this.props.items) {
                return true;
            }
            return false;
        }
    }, {
        key: "render",
        value: function render() {
            return (0, _jsx3.default)("div", {}, void 0, this.props.items.map(function (item, index) {
                return (0, _jsx3.default)("li", {}, index, (0, _jsx3.default)("div", {
                    className: "image"
                }, void 0, (0, _jsx3.default)("img", {
                    src: item.image_url,
                    alt: ""
                })), (0, _jsx3.default)("div", {
                    className: "info-product"
                }, void 0, (0, _jsx3.default)("div", {
                    className: "name"
                }, void 0, (0, _jsx3.default)("a", {
                    href: "#",
                    title: ""
                }, void 0, item.title)), (0, _jsx3.default)("div", {
                    className: "price"
                }, void 0, (0, _jsx3.default)("span", {
                    className: "sale"
                }, void 0, item.price), (0, _jsx3.default)("span", {
                    className: "regular"
                }, void 0, item.quantity))));
            }));
        }
    }]);
    return HeaderSuggestion;
}(_react2.default.Component);

exports.default = HeaderSuggestion;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcSGVhZGVyU3VnZ2VzdGlvbi5qcyJdLCJuYW1lcyI6WyJIZWFkZXJTdWdnZXN0aW9uIiwibmV4cFByb3BzIiwiaXRlbXMiLCJwcm9wcyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsImltYWdlX3VybCIsInRpdGxlIiwicHJpY2UiLCJxdWFudGl0eSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7O0lBRXFCLEE7Ozs7Ozs7Ozs7OEMsQUFDSyxXQUFXLEFBQzdCO2dCQUFHLFVBQUEsQUFBVSxVQUFVLEtBQUEsQUFBSyxNQUE1QixBQUFrQyxPQUFPLEFBQ3JDO3VCQUFBLEFBQU8sQUFDVjtBQUNEO21CQUFBLEFBQU8sQUFDVjs7OztpQ0FDUSxBQUNMOzhEQUVTLEFBQUssTUFBTCxBQUFXLE1BQVgsQUFBaUIsSUFBSSxVQUFBLEFBQUMsTUFBRCxBQUFPLE9BQVUsQUFDbkM7b0RBQUEsQUFDYTsrQkFEYixBQUV1QjtBQUZ2Qjt5QkFHc0IsS0FIdEIsQUFHMkI7eUJBSDNCLEFBRzBDO0FBSDFDOytCQUFBLEFBS3VCO0FBTHZCOytCQUFBLEFBTTJCO0FBTjNCOzBCQUFBLEFBT3dCOzJCQVB4QixBQU9rQztBQVBsQywyQkFPc0MsS0FQdEMsQUFPMkM7K0JBUDNDLEFBUzJCO0FBVDNCOytCQUFBLEFBVWdDO0FBVmhDLDJCQVdxQixLQVhyQixBQVcwQjsrQkFYMUIsQUFhZ0M7QUFiaEMsMkJBY3FCLEtBZHJCLEFBYzBCLEFBTTdCO0FBdkJULEFBRVMsQUF3QlosYUF4Qlk7Ozs7RUFWNkIsZ0JBQU0sQTs7a0JBQS9CLEEiLCJmaWxlIjoiSGVhZGVyU3VnZ2VzdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy9uZXh0anMifQ==