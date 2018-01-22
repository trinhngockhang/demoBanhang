webpackHotUpdate(7,{

/***/ 475:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _jsx2 = __webpack_require__(391);

var _jsx3 = _interopRequireDefault(_jsx2);

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(395);

var _actions = __webpack_require__(423);

__webpack_require__(398);

var _HeaderMobile = __webpack_require__(478);

var _HeaderMobile2 = _interopRequireDefault(_HeaderMobile);

var _HeaderSuggestion = __webpack_require__(479);

var _HeaderSuggestion2 = _interopRequireDefault(_HeaderSuggestion);

var _Menu = __webpack_require__(480);

var _Menu2 = _interopRequireDefault(_Menu);

var _IconCart = __webpack_require__(486);

var _IconCart2 = _interopRequireDefault(_IconCart);

function _interopRequireDefault(obj) {
	return obj && obj.__esModule ? obj : { default: obj };
}

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

var _ref11 = (0, _jsx3.default)('div', {
	className: 'col-md-2 col-sm-3'
}, void 0, (0, _jsx3.default)('div', {
	className: 'box-cart'
}, void 0, (0, _jsx3.default)(_IconCart2.default, {})));

var _ref12 = (0, _jsx3.default)(_HeaderMobile2.default, {});

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
			success: false,
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
			this.props.loadAds('5a007c92c846cac15b53ab81');
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
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.setState({ success: true });
		}
	}, {
		key: 'shouldComponentUpdate',
		value: function shouldComponentUpdate(nextProps) {
			if (nextProps.ads !== this.props.ads) {
				return true;
			}
			return false;
		}
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
			}, void 0, _ref9, (0, _jsx3.default)('ul', {}, void 0, this.state.success && (0, _jsx3.default)(_HeaderSuggestion2.default, {
				items: this.props.ads
			}))), _ref10))))), _ref11))), this.state.success && (0, _jsx3.default)(_Menu2.default, {
				items: this.props.ads
			})), _ref12);
		}
	}]);
	return Header;
}(_react2.default.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		ads: state.advertisementReducer.ads
	};
};

var mapDispatchToProps = {
	loadAds: _actions.loadAds
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Header);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3RhdGUiLCJzdWNjZXNzIiwiaXNMb2dpbiIsInRlc3RBUEkiLCJjb25zb2xlIiwibG9nIiwiRkIiLCJhcGkiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuYW1lIiwic3RhdHVzQ2hhbmdlQ2FsbGJhY2siLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImNoZWNrTG9naW5TdGF0ZSIsImdldExvZ2luU3RhdHVzIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9naW4iLCJwcm9wcyIsImxvYWRBZHMiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsImluaXQiLCJhcHBJZCIsImNvb2tpZSIsInhmYm1sIiwidmVyc2lvbiIsImQiLCJzIiwiaWQiLCJqcyIsImZqcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImRvY3VtZW50IiwibmV4dFByb3BzIiwiYWRzIiwiZmlsdGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYWR2ZXJ0aXNlbWVudFJlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztZQTZFdUI7O08sQUFHSjtRQUFpQjs7OztPLEFBVWpCO1FBQTRCOzs7O0tBRTlCOztPLEFBQ0U7UUFBNEI7Ozs7WUFVeEI7O0ssQUFDTjtZQUFpQjs7TyxBQUNoQjtRQUF3Qjs7OztZQVNoQjs7T0FDRDs7O1FBQ1M7OztRQUNBOzs7UUFDQTs7O1FBQ0E7O1lBRUgsQTtnQkFBK0I7O1lBQ25DOztZQUNDOztZQUNDOztZQVdEOztZQUNDOztZQVdEOztZ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QyxjQUFBLEFBZ0JpRDtlQWhCakQsQUE2QmtCO0FBN0JsQjtlQUFBLEFBOEJtQjtBQTlCbkI7ZUFBQSxBQStCb0I7QUEvQnBCO2VBQUEsQUF3Q3FCO0FBeENyQjtlQUFBLEFBeUNzQjtBQXpDdEI7WUFBQSxBQTBDcUI7WUExQ3JCLEFBMENnQztlQTFDaEMsQUEwQ2dEO21CQTFDaEQsQUEwQzRFO0FBMUM1RTtlQUFBLEFBMEZ3QjtBQTFGeEI7ZUFBQSxBQStGeUI7QUEvRnpCO2VBQUEsQUFnRzBCO0FBaEcxQiwwREFzR2MsS0FBQSxBQUFLLE1BQUwsQUFBVztXQUFvQyxLQUFBLEFBQUssTUF0R2xFLEFBc0djLEFBQTBEO0FBQTFELGlDQStDVCxLQUFBLEFBQUssTUFBTCxBQUFXO1dBQXdCLEtBQUEsQUFBSyxNQXJKN0MsQUFxSkssQUFBOEM7QUFBOUMsUUFLTDs7OztFQS9ObUIsZ0JBQU0sQTs7QUFrTzNCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQ2hDOztPQUNNLE1BQUEsQUFBTSxxQkFEWixBQUFPLEFBQzBCLEFBRWpDO0FBSE8sQUFDTjtBQUZGOztBQU1BLElBQU07bUJBQU4sQUFBNEI7QUFBQSxBQUMzQjs7a0JBR2MseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBekIsQUFBNkMsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "D:\\demoBanhang\\webapp\\components\\Header\\index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "D:\\demoBanhang\\webapp\\components\\Header\\index.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy4xZmM5MjJiNTFlMzhmM2YzMjkwNC5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/Zjc5NTJlOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBsb2FkQWRzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucyc7XHJcbmltcG9ydCAnaXNvbW9ycGhpYy11bmZldGNoJztcclxuaW1wb3J0IEhlYWRlck1vYmlsZSBmcm9tICcuL0hlYWRlck1vYmlsZSc7XHJcbmltcG9ydCBIZWFkZXJTdWdnZXN0aW9uIGZyb20gJy4vSGVhZGVyU3VnZ2VzdGlvbic7XHJcbmltcG9ydCBNZW51IGZyb20gJy4uL01lbnUnO1xyXG5pbXBvcnQgSWNvbkNhcnQgZnJvbSAnLi9JY29uQ2FydCc7XHJcblxyXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG5cclxuXHRzdGF0ZSA9IHtcclxuXHRcdHN1Y2Nlc3M6IGZhbHNlLFxyXG5cdFx0aXNMb2dpbjogZmFsc2UsXHJcblx0fVxyXG5cclxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcclxuXHRcdHRoaXMucHJvcHMubG9hZEFkcygnNWEwMDdjOTJjODQ2Y2FjMTViNTNhYjgxJyk7XHJcblx0XHR3aW5kb3cuZmJBc3luY0luaXQgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdEZCLmluaXQoe1xyXG5cdFx0XHRcdGFwcElkOiAnNTUzODY1NTg4Mjk1NzU0JyxcclxuXHRcdFx0XHRjb29raWU6IHRydWUsICAvLyBlbmFibGUgY29va2llcyB0byBhbGxvdyB0aGUgc2VydmVyIHRvIGFjY2Vzc1xyXG5cdFx0XHRcdC8vIHRoZSBzZXNzaW9uXHJcblx0XHRcdFx0eGZibWw6IHRydWUsICAvLyBwYXJzZSBzb2NpYWwgcGx1Z2lucyBvbiB0aGlzIHBhZ2VcclxuXHRcdFx0XHR2ZXJzaW9uOiAndjIuMTEnIC8vIHVzZSB2ZXJzaW9uIDIuMVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0RkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdFx0dGhpcy5zdGF0dXNDaGFuZ2VDYWxsYmFjayhyZXNwb25zZSk7XHJcblx0XHRcdH0uYmluZCh0aGlzKSk7XHJcblx0XHR9LmJpbmQodGhpcyk7XHJcblx0XHQoZnVuY3Rpb24gKGQsIHMsIGlkKSB7XHJcblx0XHRcdHZhciBqcywgZmpzID0gZC5nZXRFbGVtZW50c0J5VGFnTmFtZShzKVswXTtcclxuXHRcdFx0aWYgKGQuZ2V0RWxlbWVudEJ5SWQoaWQpKSByZXR1cm47XHJcblx0XHRcdGpzID0gZC5jcmVhdGVFbGVtZW50KHMpOyBqcy5pZCA9IGlkO1xyXG5cdFx0XHRqcy5zcmMgPSBcIi8vY29ubmVjdC5mYWNlYm9vay5uZXQvZW5fVVMvc2RrLmpzXCI7XHJcblx0XHRcdGZqcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShqcywgZmpzKTtcclxuXHRcdH0oZG9jdW1lbnQsICdzY3JpcHQnLCAnZmFjZWJvb2stanNzZGsnKSk7XHJcblx0fVxyXG5cclxuXHR0ZXN0QVBJID0gKCkgPT4ge1xyXG5cdFx0Y29uc29sZS5sb2coJ1dlbGNvbWUhICBGZXRjaGluZyB5b3VyIGluZm9ybWF0aW9uLi4uLiAnKTtcclxuXHRcdEZCLmFwaSgnL21lJywgZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcm5hbWVcIiwgcmVzcG9uc2UubmFtZSk7XHJcblx0XHRcdGNvbnNvbGUubG9nKCdTdWNjZXNzZnVsIGxvZ2luIGZvcjogJyArIHJlc3BvbnNlLm5hbWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHQvLyBUaGlzIGlzIGNhbGxlZCB3aXRoIHRoZSByZXN1bHRzIGZyb20gZnJvbSBGQi5nZXRMb2dpblN0YXR1cygpLlxyXG5cdHN0YXR1c0NoYW5nZUNhbGxiYWNrID0gKHJlc3BvbnNlKSA9PiB7XHJcblx0XHRpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAnY29ubmVjdGVkJykge1xyXG5cdFx0XHR0aGlzLnNldFN0YXRlKHsgaXNMb2dpbjogdHJ1ZSB9KVxyXG5cdFx0XHR0aGlzLnRlc3RBUEkoKTtcclxuXHRcdH1cclxuXHR9XHJcblx0Y2hlY2tMb2dpblN0YXRlID0gKCkgPT4ge1xyXG5cdFx0RkIuZ2V0TG9naW5TdGF0dXMoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcblx0XHRcdHRoaXMuc3RhdHVzQ2hhbmdlQ2FsbGJhY2socmVzcG9uc2UpO1xyXG5cdFx0fS5iaW5kKHRoaXMpKTtcclxuXHR9XHJcblxyXG5cclxuXHRoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdEZCLmxvZ2luKHRoaXMuY2hlY2tMb2dpblN0YXRlKCkpO1xyXG5cdH1cclxuXHJcblx0Y29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcclxuXHRcdHRoaXMuc2V0U3RhdGUoeyBzdWNjZXNzOiB0cnVlIH0pO1xyXG5cdH1cclxuXHJcblx0c2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xyXG5cdFx0aWYgKG5leHRQcm9wcy5hZHMgIT09IHRoaXMucHJvcHMuYWRzKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0Y29uc3QgZmlsdGVyID0gdGhpcy5zdGF0ZS5pc0xvZ2luID8gbnVsbCA6IFwixJDEg25nIG5o4bqtcFwiO1xyXG5cdFx0cmV0dXJuIChcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8c2VjdGlvbiBpZD1cImhlYWRlclwiIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJoZWFkZXItdG9wXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJmYXEuaHRtbFwiIHRpdGxlPVwiXCI+SG90bGluZTogMTkwMDE1ODM8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiB0ZXh0LXJpZ2h0XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJmbGF0LXN1cHBvcnRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9PntmaWx0ZXJ9PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIm9yZGVyLXRyYWNraW5nLmh0bWxcIiB0aXRsZT1cIlwiPkLDoW4gaMOgbmc8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkgaWQ9XCJsaS10b3BcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJvcmRlci10cmFja2luZy5odG1sXCIgdGl0bGU9XCJcIj5DaMSDbSBzw7NjIGtow6FjaCBow6BuZzwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1taWRkbGVcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMiBjb2wtc20tM1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGlkPVwibG9nb1wiIGNsYXNzTmFtZT1cImxvZ29cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwiaHR0cHM6Ly9tZXNpLnZuXCIgdGl0bGU9XCJcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdE1lc2kudm5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpPkPhuqNtIMahbiBxdcO9IGtow6FjaCAhIDwvaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTggY29sLXNtLVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWFyY2hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8Zm9ybSBhY3Rpb249XCIjXCIgbWV0aG9kPVwiZ2V0XCIgY2xhc3NOYW1lPVwiZm9ybS1zZWFyY2hcIiBhY2NlcHRDaGFyc2V0PVwidXRmLThcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2F0LXdyYXBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNlbGVjdCBuYW1lPVwiY2F0ZWdvcnlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbiB2YWx1ZT1cIlwiPkRhbmggbeG7pWM8L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uIGhpZGRlbiB2YWx1ZT1cIlwiPsSQaeG7h24gdGhv4bqhaTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiXCI+TcOheSB0w61uaDwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxvcHRpb24gaGlkZGVuIHZhbHVlPVwiXCI+TGFwdG9wczwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+PGkgY2xhc3NOYW1lPVwiZmEgZmEtYW5nbGUtZG93blwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxsLWNhdGVnb3JpZXNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhdC1saXN0LXNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbGVjdHJvbmljc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkNvbXBvbmVudHM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+TGFwdG9wPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPk1vbml0b3I8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+TXAzIHBsYXllcjwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5TY2FubmVyczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2F0LWxpc3Qtc2VhcmNoXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEZ1cm5pdHVyZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkJvb2tjYXNlczwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5CYXJzdG9vbHM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+VFYgc3RhbmRzPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkRlc2tzPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPkFjY2VudCBjaGFpcnM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhdC1saXN0LXNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBY2Nlc3Nvcmllc1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlNvZnR3YXJlPC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPk1vYmlsZTwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5UViBzdGFuZHM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+UHJpbnRlcnM8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGk+TWVkaWE8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LXNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJUw6xtIGtp4bq/bSB0csOqbiBNZXNpXCIgLz5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXNlYXJjaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cIndhdmVzLWVmZmVjdFwiPjxpbWcgc3JjPVwiL3N0YXRpYy9pbWFnZXMvaWNvbnMvc2VhcmNoLnBuZ1wiIGFsdD1cIlwiIC8+PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtc3VnZ2VzdGlvbnNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveC1zdWdnZXN0aW9uc1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRTZWFyY2ggU3VnZ2VzdGlvbnNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgPEhlYWRlclN1Z2dlc3Rpb24gaXRlbXM9e3RoaXMucHJvcHMuYWRzfSAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94LWNhdFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXQtbGlzdC1zZWFyY2hcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdENhdGVnb3JpZXNcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+TmV0d29ya2luZyAgSW50ZXJuZXQgRGV2aWNlczwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+TGFwdG9wcywgRGVza3RvcHMgIE1vbml0b3JzPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5IYXJkIERyaXZlcyAgTWVtb3J5IENhcmRzPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5QcmludGVycyAgSW5rPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5OZXR3b3JraW5nICBJbnRlcm5ldCBEZXZpY2VzPC9hPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGEgaHJlZj1cIiNcIj5Db21wdXRlciBBY2Nlc3NvcmllczwvYT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCIjXCI+U29mdHdhcmU8L2E+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZm9ybT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTIgY29sLXNtLTNcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3gtY2FydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxJY29uQ2FydCAvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0eyB0aGlzLnN0YXRlLnN1Y2Nlc3MgJiYgPE1lbnUgaXRlbXM9e3RoaXMucHJvcHMuYWRzfSAvPiB9XHJcblx0XHRcdFx0PC9zZWN0aW9uPlxyXG5cdFx0XHRcdDxIZWFkZXJNb2JpbGUgLz5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQpXHJcblx0fVxyXG59XHJcblxyXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGFkczogc3RhdGUuYWR2ZXJ0aXNlbWVudFJlZHVjZXIuYWRzLFxyXG5cdH1cclxufVxyXG5cclxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gKHtcclxuXHRsb2FkQWRzLFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoSGVhZGVyKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci9pbmRleC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUE0RUE7OztBQUdBOzs7OztBQVVBOzs7O0FBRUE7OztBQUNBOzs7O0FBVUE7OztBQUNBOzs7QUFDQTs7OztBQVNBOztBQUNBOzs7QUFDQTs7O0FBQ0E7OztBQUNBOzs7QUFDQTs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBV0E7O0FBQ0E7O0FBV0E7O0FBQ0E7Ozs7OztBQWNBOzs7O0FBQ0E7OztBQUNBOzs7QUFBQTs7OztBQUlBOzs7O0FBU0E7O0FBQ0E7O0FBQ0E7O0FBS0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7O0FBR0E7Ozs7QUFVQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEvTUE7O0FBREE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7Ozs7OztBQTdDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFEQTtBQVJBO0FBWUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQWlCQTtBQUNBOzs7OztBQWtCQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUdBO0FBQUE7O0FBR0E7QUFBQTtBQUZBO0FBR0E7QUFIQTtBQUlBO0FBSkE7QUFLQTtBQUxBO0FBYUE7QUFiQTtBQWNBO0FBZEE7QUFnQkE7QUFBQTtBQWhCQTtBQTZCQTtBQTdCQTtBQThCQTtBQTlCQTtBQStCQTtBQS9CQTtBQXdDQTtBQXhDQTtBQXlDQTtBQXpDQTtBQTBDQTtBQUFBO0FBQUE7QUFBQTtBQTFDQTtBQTBGQTtBQTFGQTtBQStGQTtBQS9GQTtBQWdHQTtBQWhHQTtBQXNHQTtBQUFBO0FBK0NBO0FBQUE7Ozs7QUExTkE7QUFDQTtBQWlPQTs7QUFFQTtBQUFBO0FBRkE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==