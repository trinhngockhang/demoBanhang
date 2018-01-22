'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
    ads: [],
    pageid: '',
    message: ''
    // fetch data and passing to home page;
};var advertisementReducer = function advertisementReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'LOADING_ADVERTISEMENT':
            return (0, _extends3.default)({}, state);
        case 'LOADING_ADVERTISEMENT_SUCCESS':
            return (0, _extends3.default)({}, state, { ads: action.ads, message: action.message });
        case 'LOADING_ADVERTISEMENT_FAILED':
            return (0, _extends3.default)({}, state, { message: action.message });
        default:
            return state;
    }
};

exports.default = advertisementReducer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxhZHZlcnRpc21lbnRSZWR1Y2VyLmpzIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsImFkcyIsInBhZ2VpZCIsIm1lc3NhZ2UiLCJhZHZlcnRpc2VtZW50UmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNO1NBQWUsQUFDWixBQUNMO1lBRmlCLEFBRVQsQUFDUjthQUFTLEFBRWI7QUFMQSxBQUFxQjtBQUFBLEFBQ2pCLE1BS0UsdUJBQXVCLFNBQXZCLEFBQXVCLHVCQUFrQztRQUFqQyxBQUFpQyw0RUFBekIsQUFBeUI7UUFBWCxBQUFXLG1CQUMzRDs7WUFBUSxPQUFSLEFBQWUsQUFDWDthQUFBLEFBQUssQUFDRDs4Q0FBQSxBQUFZLEFBQ2hCO2FBQUEsQUFBSyxBQUNEOzhDQUFBLEFBQVksU0FBTyxLQUFLLE9BQXhCLEFBQStCLEtBQUssU0FBUyxPQUE3QyxBQUFvRCxBQUN4RDthQUFBLEFBQUssQUFDRDs4Q0FBQSxBQUFZLFNBQU8sU0FBUyxPQUE1QixBQUFtQyxBQUN2QztBQUNJO21CQVJSLEFBUVEsQUFBTyxBQUVsQjs7QUFYRCxDQUFBOztrQkFhZSxBIiwiZmlsZSI6ImFkdmVydGlzbWVudFJlZHVjZXIuanMiLCJzb3VyY2VSb290IjoiRDovZGVtb0Jhbmhhbmcvd2ViYXBwIn0=