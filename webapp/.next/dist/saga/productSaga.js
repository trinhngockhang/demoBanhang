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
    _marked2 = /*#__PURE__*/_regenerator2.default.mark(productSaga);

function fetchData(action) {
    var id, pageid, response, data;
    return _regenerator2.default.wrap(function fetchData$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.prev = 0;

                    console.log('product');
                    id = action.id;
                    pageid = action.pageid;
                    _context.next = 6;
                    return fetch('https://api.botbanhang.vn/v1/webapp/category?pageid=' + pageid + '&id=' + id);

                case 6:
                    response = _context.sent;
                    data = response.json();
                    _context.next = 10;
                    return (0, _effects.put)({ type: 'FETCH_PRODUCT_SUCCESS', product: data, message: 'Success' });

                case 10:
                    _context.next = 16;
                    break;

                case 12:
                    _context.prev = 12;
                    _context.t0 = _context['catch'](0);
                    _context.next = 16;
                    return (0, _effects.put)({ type: 'FETCH_PRODUCT_FAILED', message: 'Something wrong' });

                case 16:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this, [[0, 12]]);
}

function productSaga() {
    return _regenerator2.default.wrap(function productSaga$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    _context2.next = 2;
                    return (0, _effects.takeLatest)('FETCH_PRODUCT', fetchData);

                case 2:
                case 'end':
                    return _context2.stop();
            }
        }
    }, _marked2, this);
}

exports.default = productSaga;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2FcXHByb2R1Y3RTYWdhLmpzIl0sIm5hbWVzIjpbImZldGNoRGF0YSIsInByb2R1Y3RTYWdhIiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImlkIiwicGFnZWlkIiwiZmV0Y2giLCJyZXNwb25zZSIsImRhdGEiLCJqc29uIiwidHlwZSIsInByb2R1Y3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztzREFFVSxBO3VEQWFBLEE7O0FBYlYsU0FBVSxBQUFWLFVBQW9CLEFBQXBCLFFBQUE7OEJBQUE7b0VBQUE7a0JBQUE7NkNBQUE7cUJBQUE7b0NBRVE7OzRCQUFRLEFBQVIsSUFBWSxBQUFaLEFBQ007QUFIZCx5QkFHbUIsT0FBTyxBQUgxQixBQUljO0FBSmQsNkJBSXVCLE9BQU8sQUFKOUI7b0NBQUE7MkJBSytCLCtEQUE2RCxBQUE3RCxrQkFBMEUsQUFBMUUsQUFML0I7O3FCQUtjO0FBTGQsd0NBTWM7QUFOZCwyQkFNcUIsU0FBUyxBQUFULEFBTnJCO29DQUFBOzJCQU9jLGtCQUFJLEVBQUMsTUFBTSxBQUFQLHlCQUFnQyxTQUFTLEFBQXpDLE1BQStDLFNBQVMsQUFBeEQsQUFBSixBQVBkOztxQkFBQTtvQ0FBQTtBQUFBOztxQkFBQTtvQ0FBQTtvREFBQTtvQ0FBQTsyQkFTYyxrQkFBSSxFQUFDLE1BQU0sQUFBUCx3QkFBK0IsU0FBUyxBQUF4QyxBQUFKLEFBVGQ7O3FCQUFBO3FCQUFBO29DQUFBOztBQUFBOzJCQUFBOzs7QUFhQSxTQUFVLEFBQVYsY0FBQTt1RUFBQTtrQkFBQTsrQ0FBQTtxQkFBQTtxQ0FBQTsyQkFDVSx5QkFBVyxBQUFYLGlCQUE0QixBQUE1QixBQURWOztxQkFBQTtxQkFBQTtxQ0FBQTs7QUFBQTtpQkFBQTs7O2tCQUllLEEiLCJmaWxlIjoicHJvZHVjdFNhZ2EuanMiLCJzb3VyY2VSb290IjoiRDovZGVtb0Jhbmhhbmcvd2ViYXBwIn0=