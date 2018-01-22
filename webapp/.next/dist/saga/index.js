'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = rootSaga;

var _effects = require('redux-saga/effects');

var _advertisementSaga = require('./advertisementSaga');

var _advertisementSaga2 = _interopRequireDefault(_advertisementSaga);

var _productSaga = require('./productSaga');

var _productSaga2 = _interopRequireDefault(_productSaga);

var _categorySaga = require('./categorySaga');

var _categorySaga2 = _interopRequireDefault(_categorySaga);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var _marked = /*#__PURE__*/_regenerator2.default.mark(rootSaga);

function rootSaga() {
    return _regenerator2.default.wrap(function rootSaga$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return (0, _effects.all)([(0, _effects.fork)(_advertisementSaga2.default), (0, _effects.fork)(_productSaga2.default)]);

                case 2:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhZ2FcXGluZGV4LmpzIl0sIm5hbWVzIjpbInJvb3RTYWdhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O2tCQUt5QixBOztBQUx6Qjs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7O3NEQUV5QixBOztBQUFWLFNBQVUsQUFBVixXQUFBO21FQUFBO2tCQUFBOzZDQUFBO3FCQUFBO29DQUFBOzJCQUNMLGtCQUFJLENBQ04sdUNBRE0sVUFFTixpQ0FGTSxBQUFKLEFBREs7O3FCQUFBO3FCQUFBO29DQUFBOztBQUFBO2dCQUFBIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9