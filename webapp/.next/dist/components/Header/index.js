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

var _HeaderMobile = require('./HeaderMobile');

var _HeaderMobile2 = _interopRequireDefault(_HeaderMobile);

var _HeaderSuggestion = require('./HeaderSuggestion');

var _HeaderSuggestion2 = _interopRequireDefault(_HeaderSuggestion);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

// import IconCart from './IconCart';

var _ref2 = (0, _jsx3.default)('div', {
	className: 'col-md-6'
}, void 0, (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: 'faq.html',
	title: ''
}, void 0, 'Hotline: 19001583'))));

var _ref3 = (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: 'order-tracking.html',
	title: ''
}, void 0, 'B\xE1n h\xE0ng'));

var _ref4 = (0, _jsx3.default)('li', {
	id: 'li-top'
}, void 0, (0, _jsx3.default)('a', {
	href: 'order-tracking.html',
	title: ''
}, void 0, 'Ch\u0103m s\xF3c kh\xE1ch h\xE0ng'));

var _ref5 = (0, _jsx3.default)('div', {
	className: 'col-md-2 col-sm-3'
}, void 0, (0, _jsx3.default)('div', {
	id: 'logo',
	className: 'logo'
}, void 0, (0, _jsx3.default)('a', {
	href: 'https://mesi.vn',
	title: ''
}, void 0, 'Mesi.vn'), (0, _jsx3.default)('i', {}, void 0, 'C\u1EA3m \u01A1n qu\xFD kh\xE1ch ! ')));

var _ref6 = (0, _jsx3.default)('div', {
	className: 'cat-wrap'
}, void 0, (0, _jsx3.default)('select', {
	name: 'category'
}, void 0, (0, _jsx3.default)('option', {
	hidden: true,
	value: ''
}, void 0, 'Danh m\u1EE5c'), (0, _jsx3.default)('option', {
	hidden: true,
	value: ''
}, void 0, '\u0110i\u1EC7n tho\u1EA1i'), (0, _jsx3.default)('option', {
	hidden: true,
	value: ''
}, void 0, 'M\xE1y t\xEDnh'), (0, _jsx3.default)('option', {
	hidden: true,
	value: ''
}, void 0, 'Laptops')), (0, _jsx3.default)('span', {}, void 0, (0, _jsx3.default)('i', {
	className: 'fa fa-angle-down',
	'aria-hidden': 'true'
})), (0, _jsx3.default)('div', {
	className: 'all-categories'
}, void 0, (0, _jsx3.default)('div', {
	className: 'cat-list-search'
}, void 0, (0, _jsx3.default)('div', {
	className: 'title'
}, void 0, 'Electronics'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'Components'), (0, _jsx3.default)('li', {}, void 0, 'Laptop'), (0, _jsx3.default)('li', {}, void 0, 'Monitor'), (0, _jsx3.default)('li', {}, void 0, 'Mp3 player'), (0, _jsx3.default)('li', {}, void 0, 'Scanners'))), (0, _jsx3.default)('div', {
	className: 'cat-list-search'
}, void 0, (0, _jsx3.default)('div', {
	className: 'title'
}, void 0, 'Furniture'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'Bookcases'), (0, _jsx3.default)('li', {}, void 0, 'Barstools'), (0, _jsx3.default)('li', {}, void 0, 'TV stands'), (0, _jsx3.default)('li', {}, void 0, 'Desks'), (0, _jsx3.default)('li', {}, void 0, 'Accent chairs'))), (0, _jsx3.default)('div', {
	className: 'cat-list-search'
}, void 0, (0, _jsx3.default)('div', {
	className: 'title'
}, void 0, 'Accessories'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, 'Software'), (0, _jsx3.default)('li', {}, void 0, 'Mobile'), (0, _jsx3.default)('li', {}, void 0, 'TV stands'), (0, _jsx3.default)('li', {}, void 0, 'Printers'), (0, _jsx3.default)('li', {}, void 0, 'Media')))));

var _ref7 = (0, _jsx3.default)('input', {
	type: 'text',
	name: 'search',
	placeholder: 'T\xECm ki\u1EBFm tr\xEAn Mesi'
});

var _ref8 = (0, _jsx3.default)('span', {
	className: 'btn-search'
}, void 0, (0, _jsx3.default)('button', {
	type: 'submit',
	className: 'waves-effect'
}, void 0, (0, _jsx3.default)('img', {
	src: '/static/images/icons/search.png',
	alt: ''
})));

var _ref9 = (0, _jsx3.default)('div', {
	className: 'title'
}, void 0, 'Search Suggestions');

var _ref10 = (0, _jsx3.default)('div', {
	className: 'box-cat'
}, void 0, (0, _jsx3.default)('div', {
	className: 'cat-list-search'
}, void 0, (0, _jsx3.default)('div', {
	className: 'title'
}, void 0, 'Categories'), (0, _jsx3.default)('ul', {}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Networking  Internet Devices')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Laptops, Desktops  Monitors')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Hard Drives  Memory Cards')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Printers  Ink')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Networking  Internet Devices')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Computer Accessories')), (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
	href: '#'
}, void 0, 'Software')))));

var _ref11 = (0, _jsx3.default)(_HeaderMobile2.default, {});

var Header = function (_React$Component) {
	(0, _inherits3.default)(Header, _React$Component);

	function Header() {
		var _ref;

		var _temp, _this, _ret;

		(0, _classCallCheck3.default)(this, Header);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
			isLogin: false
		}, _this.testAPI = function () {
			console.log('Welcome!  Fetching your information.... ');
			FB.api('/me', function (response) {
				localStorage.getItem("username", response.name);
				console.log('Successful login for: ' + response.name);
			});
		}, _this.statusChangeCallback = function (response) {
			if (response.status === 'connected') {
				_this.setState({ isLogin: true });
				_this.testAPI();
			}
		}, _this.checkLoginState = function () {
			FB.getLoginStatus(function (response) {
				this.statusChangeCallback(response);
			}.bind(_this));
		}, _this.handleClick = function () {
			FB.login(_this.checkLoginState());
		}, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
	}

	(0, _createClass3.default)(Header, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			window.fbAsyncInit = function () {
				FB.init({
					appId: '553865588295754',
					cookie: true, // enable cookies to allow the server to access
					// the session
					xfbml: true, // parse social plugins on this page
					version: 'v2.11' // use version 2.1
				});
				FB.getLoginStatus(function (response) {
					this.statusChangeCallback(response);
				}.bind(this));
			}.bind(this);
			(function (d, s, id) {
				var js,
				    fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) return;
				js = d.createElement(s);js.id = id;
				js.src = "//connect.facebook.net/en_US/sdk.js";
				fjs.parentNode.insertBefore(js, fjs);
			})(document, 'script', 'facebook-jssdk');
		}

		// This is called with the results from from FB.getLoginStatus().

	}, {
		key: 'render',
		value: function render() {
			var filter = this.state.isLogin ? null : "Đăng nhập";
			return (0, _jsx3.default)('div', {}, void 0, (0, _jsx3.default)('section', {
				id: 'header',
				className: 'header'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'header-top'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'container'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'row'
			}, void 0, _ref2, (0, _jsx3.default)('div', {
				className: 'col-md-6 text-right'
			}, void 0, (0, _jsx3.default)('ul', {
				className: 'flat-support'
			}, void 0, (0, _jsx3.default)('li', {}, void 0, (0, _jsx3.default)('a', {
				href: '#',
				onClick: this.handleClick
			}, void 0, filter)), _ref3, _ref4))))), (0, _jsx3.default)('div', {
				className: 'header-middle'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'container'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'row'
			}, void 0, _ref5, (0, _jsx3.default)('div', {
				className: 'col-md-8 col-sm-'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'top-search'
			}, void 0, (0, _jsx3.default)('form', {
				action: '#',
				method: 'get',
				className: 'form-search',
				acceptCharset: 'utf-8'
			}, void 0, _ref6, (0, _jsx3.default)('div', {
				className: 'box-search'
			}, void 0, _ref7, _ref8, (0, _jsx3.default)('div', {
				className: 'search-suggestions'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'box-suggestions'
			}, void 0, _ref9, (0, _jsx3.default)('ul', {}, void 0, this.props.categoryLevel2.map(function (s, idx) {
				return (0, _jsx3.default)(_HeaderSuggestion2.default, {
					items: s
				}, idx);
			}))), _ref10))))), (0, _jsx3.default)('div', {
				className: 'col-md-2 col-sm-3'
			}, void 0, (0, _jsx3.default)('div', {
				className: 'box-cart'
			}, void 0))))), (0, _jsx3.default)(_Menu2.default, {
				items: this.props.categoryLevel2
			})), _ref11);
		}
	}]);
	return Header;
}(_react2.default.Component);

exports.default = Header;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3RhdGUiLCJpc0xvZ2luIiwidGVzdEFQSSIsImNvbnNvbGUiLCJsb2ciLCJGQiIsImFwaSIsInJlc3BvbnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIm5hbWUiLCJzdGF0dXNDaGFuZ2VDYWxsYmFjayIsInN0YXR1cyIsInNldFN0YXRlIiwiY2hlY2tMb2dpblN0YXRlIiwiZ2V0TG9naW5TdGF0dXMiLCJiaW5kIiwiaGFuZGxlQ2xpY2siLCJsb2dpbiIsIndpbmRvdyIsImZiQXN5bmNJbml0IiwiaW5pdCIsImFwcElkIiwiY29va2llIiwieGZibWwiLCJ2ZXJzaW9uIiwiZCIsInMiLCJpZCIsImpzIiwiZmpzIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiZG9jdW1lbnQiLCJmaWx0ZXIiLCJwcm9wcyIsImNhdGVnb3J5TGV2ZWwyIiwibWFwIiwiaWR4IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFDQTs7O1lBZ0V1Qjs7TyxBQUdKO1FBQWlCOzs7O09BVWpCLEE7UUFBNEI7Ozs7S0FFOUI7O08sQUFDRTtRQUE0Qjs7OztZQVV4Qjs7SyxBQUNOO1lBQWlCOztPQUNoQixBO1FBQXdCOzs7O1lBU2hCOztPQUNEOzs7UUFDUzs7O1FBQ0E7OztRQUNBOzs7UUFDQTs7WUFFSCxBO2dCQUErQjs7WUFDbkM7O1lBQ0M7O1lBQ0M7O1lBV0Q7O1lBQ0M7O1lBV0Q7O1lBQ0M7Ozs7TyxBQWNMO08sQUFBWTtjQUFxQjs7OztZQUM3Qjs7TyxBQUNGO1lBQW1COztNLEFBQXdCO01BQXNDOzs7O1lBSTlFOzs7O1lBV0Q7O1lBQ0M7O1lBQ0M7O09BS0w7O09BR0E7O09BR0E7O09BR0E7O09BR0E7O09BR0E7O09BR0E7Ozs7O0ksQUE3TG5COzs7Ozs7Ozs7Ozs7OzswTSxBQUVMO1lBQVEsQUFDRSxBO0FBREYsQUFDUCxXLEFBeUJELFVBQVUsWUFBTSxBQUNmO1dBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtNQUFBLEFBQUcsSUFBSCxBQUFPLE9BQU8sVUFBQSxBQUFVLFVBQVUsQUFDakM7aUJBQUEsQUFBYSxRQUFiLEFBQXFCLFlBQVksU0FBakMsQUFBMEMsQUFDMUM7WUFBQSxBQUFRLElBQUksMkJBQTJCLFNBQXZDLEFBQWdELEFBQ2hEO0FBSEQsQUFJQTtBLFcsQUFHRCx1QkFBdUIsVUFBQSxBQUFDLFVBQWEsQUFDcEM7T0FBSSxTQUFBLEFBQVMsV0FBYixBQUF3QixhQUFhLEFBQ3BDO1VBQUEsQUFBSyxTQUFTLEVBQUMsU0FBZixBQUFjLEFBQVUsQUFDeEI7VUFBQSxBQUFLLEFBQ0w7QUFDRDtBLFcsQUFDRCxrQkFBa0IsWUFBTSxBQUN2QjtNQUFBLEFBQUcseUJBQWUsQUFBVSxVQUFVLEFBQ3JDO1NBQUEsQUFBSyxxQkFBTCxBQUEwQixBQUMxQjtBQUZpQixJQUFBLENBQUEsQUFFaEIsS0FGRixBQUdBO0EsVyxBQUdELGNBQWMsWUFBTSxBQUNuQjtNQUFBLEFBQUcsTUFBTSxNQUFULEFBQVMsQUFBSyxBQUNkO0E7Ozs7O3NDQTlDbUIsQUFDbkI7VUFBQSxBQUFPLDBCQUEwQixBQUNoQztPQUFBLEFBQUc7WUFBSyxBQUNBLEFBQ1A7YUFGTyxBQUVDLE1BQU8sQUFDZjtBQUNBO1lBSk8sQUFJQSxNQUFPLEFBQ2Q7Y0FMTyxBQUtFLFFBTFYsQUFBUSxBQUtVLEFBRWxCO0FBUFEsQUFDUDtPQU1ELEFBQUcseUJBQWUsQUFBVSxVQUFVLEFBQ3JDO1VBQUEsQUFBSyxxQkFBTCxBQUEwQixBQUMxQjtBQUZpQixLQUFBLENBQUEsQUFFaEIsS0FGRixBQUFrQixBQUVYLEFBQ1A7QUFYb0IsSUFBQSxDQUFBLEFBV25CLEtBWEYsQUFBcUIsQUFXZCxBQUNOO2NBQUEsQUFBVSxHQUFWLEFBQWEsR0FBYixBQUFnQixJQUFJLEFBQ3BCO1FBQUEsQUFBSTtRQUFJLE1BQU0sRUFBQSxBQUFFLHFCQUFGLEFBQXVCLEdBQXJDLEFBQWMsQUFBMEIsQUFDeEM7UUFBSSxFQUFBLEFBQUUsZUFBTixBQUFJLEFBQWlCLEtBQUssQUFDMUI7U0FBSyxFQUFBLEFBQUUsY0FBUCxBQUFLLEFBQWdCLEdBQUksR0FBQSxBQUFHLEtBQUgsQUFBUSxBQUNqQztPQUFBLEFBQUcsTUFBSCxBQUFTLEFBQ1Q7UUFBQSxBQUFJLFdBQUosQUFBZSxhQUFmLEFBQTRCLElBQTVCLEFBQWdDLEFBQ2hDO0FBTkEsTUFBQSxBQU1DLFVBTkQsQUFNVyxVQU5aLEFBQUMsQUFNcUIsQUFDdEI7QUFVRDs7Ozs7OzJCQWtCUyxBQUNSO09BQU0sU0FBUyxLQUFBLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsT0FBcEMsQUFBMEMsQUFDMUM7O1FBQUEsQUFFYztlQUZkLEFBRWlDO0FBRmpDO2VBQUEsQUFHa0I7QUFIbEI7ZUFBQSxBQUltQjtBQUpuQjtlQUFBLEFBS29CO0FBTHBCO2VBQUEsQUFhcUI7QUFickI7ZUFBQSxBQWNxQjtBQWRyQjtVQUFBLEFBZ0JpQjthQUFhLEtBaEI5QixBQWdCbUM7QUFoQm5DLGNBQUEsQUFnQmlEO2VBaEJqRCxBQTZCa0I7QUE3QmxCO2VBQUEsQUE4Qm1CO0FBOUJuQjtlQUFBLEFBK0JvQjtBQS9CcEI7ZUFBQSxBQXdDcUI7QUF4Q3JCO2VBQUEsQUF5Q3NCO0FBekN0QjtZQUFBLEFBMENxQjtZQTFDckIsQUEwQ2dDO2VBMUNoQyxBQTBDZ0Q7bUJBMUNoRCxBQTBDNEU7QUExQzVFO2VBQUEsQUEwRndCO0FBMUZ4QjtlQUFBLEFBK0Z5QjtBQS9GekI7ZUFBQSxBQWdHMEI7QUFoRzFCLCtEQXNHYyxBQUFLLE1BQUwsQUFBVyxlQUFYLEFBQTBCLElBQUksVUFBQSxBQUFDLEdBQUQsQUFBSSxLQUFRLEFBQ3pDOztZQUFBLEFBQWdDO0FBQWhDLE9BQUEsQUFBd0MsQUFDeEM7QUF4R2YsQUFzR2MsSUFBQTtlQXRHZCxBQStJcUI7QUEvSXJCO2VBQUEsQUFnSnNCO0FBaEp0QjtXQXVKZ0IsS0FBQSxBQUFLLE1BdkpyQixBQXVKMkI7QUF2SjNCLFFBNEpBOzs7O0VBcE5tQixnQkFBTSxBOztrQkF3TlosQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==