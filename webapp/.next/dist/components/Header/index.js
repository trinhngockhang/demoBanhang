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

require('isomorphic-unfetch');

var _HeaderMobile = require('./HeaderMobile');

var _HeaderMobile2 = _interopRequireDefault(_HeaderMobile);

var _HeaderSuggestion = require('./HeaderSuggestion');

var _HeaderSuggestion2 = _interopRequireDefault(_HeaderSuggestion);

var _Menu = require('../Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _IconCart = require('./IconCart');

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

///
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXEhlYWRlclxcaW5kZXguanMiXSwibmFtZXMiOlsiSGVhZGVyIiwic3RhdGUiLCJzdWNjZXNzIiwiaXNMb2dpbiIsInRlc3RBUEkiLCJjb25zb2xlIiwibG9nIiwiRkIiLCJhcGkiLCJyZXNwb25zZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuYW1lIiwic3RhdHVzQ2hhbmdlQ2FsbGJhY2siLCJzdGF0dXMiLCJzZXRTdGF0ZSIsImNoZWNrTG9naW5TdGF0ZSIsImdldExvZ2luU3RhdHVzIiwiYmluZCIsImhhbmRsZUNsaWNrIiwibG9naW4iLCJwcm9wcyIsImxvYWRBZHMiLCJ3aW5kb3ciLCJmYkFzeW5jSW5pdCIsImluaXQiLCJhcHBJZCIsImNvb2tpZSIsInhmYm1sIiwidmVyc2lvbiIsImQiLCJzIiwiaWQiLCJqcyIsImZqcyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsImRvY3VtZW50IiwibmV4dFByb3BzIiwiYWRzIiwiZmlsdGVyIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiYWR2ZXJ0aXNlbWVudFJlZHVjZXIiLCJtYXBEaXNwYXRjaFRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7OztZQTZFdUI7O08sQUFHSjtRQUFpQjs7OztPLEFBVWpCO1FBQTRCOzs7O0tBRTlCOztPLEFBQ0U7UUFBNEI7Ozs7WUFVeEI7O0tBQ04sQTtZQUFpQjs7TyxBQUNoQjtRQUF3Qjs7OztZQVNoQjs7T0FDRDs7O1FBQ1M7OztRQUNBOzs7UUFDQTs7O1FBQ0E7O1lBRUgsQTtnQkFBK0I7O1lBQ25DOztZQUNDOztZQUNDOztZQVdEOztZQUNDOztZQVdEOztZ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QyxjQUFBLEFBZ0JpRDtlQWhCakQsQUE2QmtCO0FBN0JsQjtlQUFBLEFBOEJtQjtBQTlCbkI7ZUFBQSxBQStCb0I7QUEvQnBCO2VBQUEsQUF3Q3FCO0FBeENyQjtlQUFBLEFBeUNzQjtBQXpDdEI7WUFBQSxBQTBDcUI7WUExQ3JCLEFBMENnQztlQTFDaEMsQUEwQ2dEO21CQTFDaEQsQUEwQzRFO0FBMUM1RTtlQUFBLEFBMEZ3QjtBQTFGeEI7ZUFBQSxBQStGeUI7QUEvRnpCO2VBQUEsQUFnRzBCO0FBaEcxQiwwREFzR2MsS0FBQSxBQUFLLE1BQUwsQUFBVztXQUFvQyxLQUFBLEFBQUssTUF0R2xFLEFBc0djLEFBQTBEO0FBQTFELGlDQStDVCxLQUFBLEFBQUssTUFBTCxBQUFXO1dBQXdCLEtBQUEsQUFBSyxNQXJKN0MsQUFxSkssQUFBOEM7QUFBOUMsUUFLTDs7OztFQS9ObUIsZ0JBQU0sQTs7QUFrTzNCLElBQU0sa0JBQWtCLFNBQWxCLEFBQWtCLHVCQUFTLEFBQ2hDOztPQUNNLE1BQUEsQUFBTSxxQkFEWixBQUFPLEFBQzBCLEFBRWpDO0FBSE8sQUFDTjtBQUZGOztBQU1BLElBQU07bUJBQU4sQUFBNEI7QUFBQSxBQUMzQjs7a0JBR2MseUJBQUEsQUFBUSxpQkFBUixBQUF5QixvQkFBekIsQUFBNkMsQTs7QUFFNUQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiRDovZGVtb0Jhbmhhbmcvd2ViYXBwIn0=