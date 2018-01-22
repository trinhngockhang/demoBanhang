'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _effects = require('redux-saga/effects');

require('isomorphic-unfetch');

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = /*#__PURE__*/_regenerator2.default.mark(fetchData),
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(advertisementSaga);

function fetchData(action) {
    var pageid, response, listId, id, result;
    return _regenerator2.default.wrap(function fetchData$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;

                    console.log('app');
                    pageid = action.pageid;
                    _context.next = 5;
                    return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&level=1').then(function (r) {
                        return r.json();
                    });

                case 5:
                    response = _context.sent;
                    listId = response.data.map(function (s) {
                        return s.id;
                    });
                    id = listId[0];
                    _context.next = 10;
                    return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&level=2&parent=' + id).then(function (r) {
                        return r.json();
                    });

                case 10:
                    result = _context.sent;
                    _context.next = 13;
                    return (0, _effects.put)({ type: 'LOADING_ADVERTISEMENT_SUCCESS', ads: result.data, message: 'Success' });

                case 13:
                    _context.next = 19;
                    break;

                case 15:
                    _context.prev = 15;
                    _context.t0 = _context['catch'](0);
                    _context.next = 19;
                    return (0, _effects.put)({ type: 'LOADING_ADVERTISEMENT_FAILED', message: 'Lỗi không xác định' });

                case 19:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 15]]);
}

function advertisementSaga() {
    return _regenerator2.default.wrap(function advertisementSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)('LOADING_ADVERTISEMENT', fetchData);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

exports.default = advertisementSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2FcXGFkdmVydGlzZW1lbnRTYWdhLmpzIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsImFkdmVydGlzZW1lbnRTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsInBhZ2VpZCIsImZldGNoIiwidGhlbiIsInIiLCJqc29uIiwicmVzcG9uc2UiLCJsaXN0SWQiLCJkYXRhIiwibWFwIiwicyIsImlkIiwicmVzdWx0IiwidHlwZSIsImFkcyIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7Ozs7O3NEQUVVLEE7dURBY0EsQTs7QUFkVixTQUFBLEFBQVUsVUFBVixBQUFvQixRQUFwQjtzQ0FBQTtvRUFBQTtrQkFBQTs2Q0FBQTtxQkFBQTtvQ0FFUTs7NEJBQUEsQUFBUSxJQUFSLEFBQVksQUFDTjtBQUhkLDZCQUd1QixPQUh2QixBQUc4QjtvQ0FIOUI7MEZBSStCLEFBQTZELHFCQUE3RCxBQUErRSxLQUFLLGFBQUE7K0JBQUssRUFBTCxBQUFLLEFBQUU7QUFKMUgsQUFJK0IscUJBQUE7O3FCQUFqQjtBQUpkLHdDQUtjO0FBTGQsc0NBS3VCLEFBQVMsS0FBVCxBQUFjLElBQUksYUFBQTsrQkFBSyxFQUFMLEFBQU87QUFMaEQsQUFLdUIsQUFDVCxxQkFEUztBQUx2Qix5QkFNbUIsT0FObkIsQUFNbUIsQUFBTztvQ0FOMUI7MEZBTzZCLEFBQTZELDhCQUE3RCxBQUFzRixJQUF0RixBQUE0RixLQUFLLGFBQUE7K0JBQUssRUFBTCxBQUFLLEFBQUU7QUFQckksQUFPNkIscUJBQUE7O3FCQUFmO0FBUGQsc0NBQUE7b0NBQUE7MkJBUWMsa0JBQUksRUFBRSxNQUFGLEFBQVEsaUNBQWdDLEtBQUssT0FBN0MsQUFBb0QsTUFBTSxTQVI1RSxBQVFjLEFBQUksQUFBbUU7O3FCQVJyRjtvQ0FBQTtBQUFBOztxQkFBQTtvQ0FBQTtvREFBQTtvQ0FBQTsyQkFVYyxrQkFBSSxFQUFFLE1BQUYsQUFBUSxnQ0FBZ0MsU0FWMUQsQUFVYyxBQUFJLEFBQWlEOztxQkFWbkU7cUJBQUE7b0NBQUE7O0FBQUE7MkJBQUE7OztBQWNBLFNBQUEsQUFBVSxvQkFBVjs2RUFBQTtrQkFBQTsrQ0FBQTtxQkFBQTtxQ0FBQTsyQkFDVSx5QkFBQSxBQUFXLHlCQURyQixBQUNVLEFBQW9DOztxQkFEOUM7cUJBQUE7cUNBQUE7O0FBQUE7aUJBQUE7OztrQkFJZSxBIiwiZmlsZSI6ImFkdmVydGlzZW1lbnRTYWdhLmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9