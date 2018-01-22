'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = require('redux');

var _reduxSaga = require('redux-saga');

var _reduxSaga2 = _interopRequireDefault(_reduxSaga);

var _saga = require('../saga');

var _saga2 = _interopRequireDefault(_saga);

var _receiptReducers = require('./receiptReducers');

var _receiptReducers2 = _interopRequireDefault(_receiptReducers);

var _advertismentReducer = require('./advertismentReducer');

var _advertismentReducer2 = _interopRequireDefault(_advertismentReducer);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var rootReducer = (0, _redux.combineReducers)({
    advertisementReducer: _advertismentReducer2.default,
    receiptReducers: _receiptReducers2.default
});

var saga = (0, _reduxSaga2.default)();

var initializeStore = function initializeStore(initialState) {
    var store = (0, _redux.createStore)(rootReducer, initialState, (0, _redux.applyMiddleware)(saga));

    saga.run(_saga2.default);
    return store;
};

exports.default = initializeStore;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJyb290UmVkdWNlciIsImFkdmVydGlzZW1lbnRSZWR1Y2VyIiwicmVjZWlwdFJlZHVjZXJzIiwic2FnYSIsImluaXRpYWxpemVTdG9yZSIsInN0b3JlIiwiaW5pdGlhbFN0YXRlIiwicnVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFQSxJQUFNO2dEQUE4QixBQUVoQzt1Q0FGSixBQUFvQixBQUFnQjtBQUFBLEFBQ2hDLENBRGdCOztBQUtwQixJQUFNLE9BQU8sZ0JBQWI7O0FBRUEsSUFBTSxrQkFBa0IsU0FBbEIsQUFBa0IsOEJBQWdCLEFBQ3BDO1FBQU0sUUFBUSx3QkFBQSxBQUNWLGFBRFUsQUFFVixjQUNBLDRCQUhKLEFBQWMsQUFHVixBQUFnQixBQUdwQjs7U0FBQSxBQUFLLFdBQ0w7V0FBQSxBQUFPLEFBQ1Y7QUFURDs7a0JBV2UsQSIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==