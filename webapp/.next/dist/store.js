'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _nextReduxSaga = require('next-redux-saga');

var _nextReduxSaga2 = _interopRequireDefault(_nextReduxSaga);

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (mapStateToProps, actions) {
    return function (component) {
        return (0, _nextReduxWrapper2.default)(_reducers2.default, mapStateToProps, actions)(component);
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLmpzIl0sIm5hbWVzIjpbIm1hcFN0YXRlVG9Qcm9wcyIsImFjdGlvbnMiLCJjb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7a0JBRWUsVUFBQyxBQUFELGlCQUFrQixBQUFsQixTQUE4QixBQUN6QztXQUFPLFVBQUMsQUFBRCxXQUFBO2VBQWUsb0RBQTJCLEFBQTNCLGlCQUE0QyxBQUE1QyxTQUFxRCxBQUFyRCxBQUFmO0FBQVAsQUFDSDtBIiwiZmlsZSI6InN0b3JlLmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9