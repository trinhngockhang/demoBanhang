'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {
    item: [],
    count: 0,
    price_total: 0,
    sub_total: 0,
    flatRate: 5000
};

var inList = function inList(e, item) {
    var n = item.length;
    if (n == 0) {
        return true;
    } else {
        for (var i = 0; i < n; i++) {
            if (item[i].id === e.id) return false;
        }
        return true;
    }
};

var check = function check() {
    if (typeof localStorage["item"] == 'undefined') return true;
    return false;
};

var receiptReducers = function receiptReducers() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case 'SHOPING_BASKET':
            {
                var e = action.item !== undefined ? (0, _assign2.default)({}, action.item, { stock: 0 }) : [];
                var root;
                if (check()) {
                    root = state.item;
                    localStorage.setItem("sub_total", state.sub_total);
                    localStorage.setItem("count", state.count);
                } else {
                    root = JSON.parse(localStorage.getItem("item"));
                }
                if (inList(e, root)) {
                    root.push(e);
                    localStorage.setItem("item", (0, _stringify2.default)(item));
                }
                return (0, _extends3.default)({}, state, { item: root });
            }
        case 'ADD_SHOPING_BASKET':
            {
                var sub_total = parseInt(localStorage.getItem("sub_total")) + parseInt(action.item.price);
                localStorage.setItem("sub_total", sub_total);
                var price_total = sub_total + state.flatRate;
                localStorage.setItem("price_total", price_total);
                var item = state.item.map(function (e) {
                    if (e.id !== action.item.id) return e;
                    return (0, _extends3.default)({}, e, { stock: e.stock + 1 });
                });
                localStorage.setItem("item", (0, _stringify2.default)(item));
                var count = parseInt(localStorage.getItem("count")) + 1;
                localStorage.setItem("count", count);
                return (0, _extends3.default)({}, state, {
                    sub_total: sub_total,
                    item: item,
                    count: count,
                    price_total: price_total
                });
            }
        case 'SUB_SHOPING_BASKET':
            {
                var sub_total = parseInt(localStorage.getItem("sub_total")) - parseInt(action.item.price);
                localStorage.setItem("sub_total", sub_total);
                var price_total = sub_total + state.flatRate;
                localStorage.setItem("price_total", price_total);
                var items = JSON.parse(localStorage.getItem("item")).map(function (e) {
                    if (e.id !== action.item.id) return e;
                    return (0, _extends3.default)({}, e, { stock: e.stock - 1 });
                });
                var item = items.filter(function (e) {
                    if (e.stock !== 0) return e;
                });
                localStorage.setItem("item", (0, _stringify2.default)(item));
                var count = parseInt(localStorage.getItem("count")) - 1;
                localStorage.setItem("count", count);
                return (0, _extends3.default)({}, state, {
                    sub_total: sub_total,
                    item: item,
                    count: count,
                    price_total: price_total
                });
            }
        default:
            return state;
    }
};

exports.default = receiptReducers;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZHVjZXJzXFxyZWNlaXB0UmVkdWNlcnMuanMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXRlbSIsImNvdW50IiwicHJpY2VfdG90YWwiLCJzdWJfdG90YWwiLCJmbGF0UmF0ZSIsImluTGlzdCIsImUiLCJuIiwibGVuZ3RoIiwiaSIsImlkIiwiY2hlY2siLCJsb2NhbFN0b3JhZ2UiLCJyZWNlaXB0UmVkdWNlcnMiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJ1bmRlZmluZWQiLCJzdG9jayIsInJvb3QiLCJzZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiZ2V0SXRlbSIsInB1c2giLCJwYXJzZUludCIsInByaWNlIiwibWFwIiwiaXRlbXMiLCJmaWx0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNO1VBQWUsQUFDWCxBQUNOO1dBRmlCLEFBRVYsQUFDUDtpQkFIaUIsQUFHSixBQUNiO2VBSmlCLEFBSU4sQUFDWDtjQUxKLEFBQXFCLEFBS1A7QUFMTyxBQUNqQjs7QUFPSixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxHQUFELEFBQUksTUFBUyxBQUN4QjtRQUFJLElBQUksS0FBUixBQUFhLEFBQ2I7UUFBRyxLQUFILEFBQVEsR0FBRyxBQUNQO2VBQUEsQUFBTyxBQUNWO0FBRkQsV0FFTSxBQUNGO2FBQUksSUFBSSxJQUFSLEFBQVksR0FBRyxJQUFmLEFBQW1CLEdBQW5CLEFBQXNCLEtBQUssQUFDdkI7Z0JBQUcsS0FBQSxBQUFLLEdBQUwsQUFBUSxPQUFPLEVBQWxCLEFBQW9CLElBQUksT0FBQSxBQUFPLEFBQ2xDO0FBQ0Q7ZUFBQSxBQUFPLEFBQ1Y7QUFDSjtBQVZEOztBQVlBLElBQU0sUUFBUSxTQUFSLEFBQVEsUUFBTSxBQUNoQjtRQUFHLE9BQU8sYUFBUCxBQUFPLEFBQWEsV0FBdkIsQUFBa0MsYUFBYSxPQUFBLEFBQU8sQUFDdEQ7V0FBQSxBQUFPLEFBQ1Y7QUFIRDs7QUFLQSxJQUFNLGtCQUFrQixTQUFsQixBQUFrQixrQkFBa0M7UUFBakMsQUFBaUMsNEVBQXpCLEFBQXlCO1FBQVgsQUFBVyxtQkFDdEQ7O1lBQVEsT0FBUixBQUFlLEFBQ1g7YUFBQSxBQUFLLEFBQWtCO0FBQ25CO29CQUFJLElBQUksT0FBQSxBQUFPLFNBQVAsQUFBZ0IsWUFBWSxzQkFBQSxBQUFjLElBQUksT0FBbEIsQUFBeUIsTUFBTSxFQUFFLE9BQTdELEFBQTRCLEFBQStCLEFBQVMsT0FBNUUsQUFBbUYsQUFDbkY7b0JBQUEsQUFBSSxBQUNKO29CQUFBLEFBQUcsU0FBUyxBQUNSOzJCQUFPLE1BQVAsQUFBYSxBQUNiO2lDQUFBLEFBQWEsUUFBYixBQUFxQixhQUFhLE1BQWxDLEFBQXdDLEFBQ3hDO2lDQUFBLEFBQWEsUUFBYixBQUFxQixTQUFTLE1BQTlCLEFBQW9DLEFBQ3ZDO0FBSkQsdUJBSU0sQUFDRjsyQkFBTyxLQUFBLEFBQUssTUFBTSxhQUFBLEFBQWEsUUFBL0IsQUFBTyxBQUFXLEFBQXFCLEFBQzFDO0FBQ0Q7b0JBQUcsT0FBQSxBQUFPLEdBQVYsQUFBRyxBQUFVLE9BQU8sQUFDaEI7eUJBQUEsQUFBSyxLQUFMLEFBQVUsQUFDVjtpQ0FBQSxBQUFhLFFBQWIsQUFBcUIsUUFBUSx5QkFBN0IsQUFBNkIsQUFBZSxBQUMvQztBQUNEO2tEQUFBLEFBQVksU0FBTyxNQUFuQixBQUF5QixBQUM1QjtBQUNEO2FBQUEsQUFBSyxBQUFxQjtBQUN0QjtvQkFBSSxZQUFZLFNBQVMsYUFBQSxBQUFhLFFBQXRCLEFBQVMsQUFBcUIsZ0JBQWdCLFNBQVMsT0FBQSxBQUFPLEtBQTlFLEFBQThELEFBQXFCLEFBQ25GOzZCQUFBLEFBQWEsUUFBYixBQUFxQixhQUFyQixBQUFrQyxBQUNsQztvQkFBSSxjQUFjLFlBQVksTUFBOUIsQUFBb0MsQUFDcEM7NkJBQUEsQUFBYSxRQUFiLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3BDO29CQUFJLGFBQU8sQUFBTSxLQUFOLEFBQVcsSUFBSSxhQUFLLEFBQzNCO3dCQUFJLEVBQUEsQUFBRSxPQUFPLE9BQUEsQUFBTyxLQUFwQixBQUF5QixJQUFJLE9BQUEsQUFBTyxBQUNoQztzREFBQSxBQUFZLEtBQUcsT0FBTyxFQUFBLEFBQUUsUUFBeEIsQUFBZ0MsQUFDL0I7QUFIVCxBQUFXLEFBSVgsaUJBSlc7NkJBSVgsQUFBYSxRQUFiLEFBQXFCLFFBQVEseUJBQTdCLEFBQTZCLEFBQWUsQUFDNUM7b0JBQUksUUFBUSxTQUFTLGFBQUEsQUFBYSxRQUF0QixBQUFTLEFBQXFCLFlBQTFDLEFBQXNELEFBQ3REOzZCQUFBLEFBQWEsUUFBYixBQUFxQixTQUFyQixBQUE4QixBQUM5QjtrREFBQSxBQUNPOytCQURQLEFBR0k7MEJBSEosQUFJSTsyQkFKSixBQUtJO2lDQUxKLEFBT0g7QUFMTztBQU1SO2FBQUEsQUFBSyxBQUFxQjtBQUN0QjtvQkFBSSxZQUFZLFNBQVMsYUFBQSxBQUFhLFFBQXRCLEFBQVMsQUFBcUIsZ0JBQWdCLFNBQVMsT0FBQSxBQUFPLEtBQTlFLEFBQThELEFBQXFCLEFBQ25GOzZCQUFBLEFBQWEsUUFBYixBQUFxQixhQUFyQixBQUFrQyxBQUNsQztvQkFBSSxjQUFjLFlBQVksTUFBOUIsQUFBb0MsQUFDcEM7NkJBQUEsQUFBYSxRQUFiLEFBQXFCLGVBQXJCLEFBQW9DLEFBQ3BDO29CQUFJLGFBQVEsQUFBSyxNQUFNLGFBQUEsQUFBYSxRQUF4QixBQUFXLEFBQXFCLFNBQWhDLEFBQXlDLElBQUksYUFBSyxBQUMxRDt3QkFBSSxFQUFBLEFBQUUsT0FBTyxPQUFBLEFBQU8sS0FBcEIsQUFBeUIsSUFBSSxPQUFBLEFBQU8sQUFDcEM7c0RBQUEsQUFBWSxLQUFHLE9BQU8sRUFBQSxBQUFFLFFBQXhCLEFBQWdDLEFBQ25DO0FBSEQsQUFBWSxBQUlaLGlCQUpZO29CQUlSLGFBQU8sQUFBTSxPQUFPLGFBQUssQUFDekI7d0JBQUcsRUFBQSxBQUFFLFVBQUwsQUFBZSxHQUFHLE9BQUEsQUFBTyxBQUM1QjtBQUZELEFBQVcsQUFHWCxpQkFIVzs2QkFHWCxBQUFhLFFBQWIsQUFBcUIsUUFBUSx5QkFBN0IsQUFBNkIsQUFBZSxBQUM1QztvQkFBSSxRQUFRLFNBQVMsYUFBQSxBQUFhLFFBQXRCLEFBQVMsQUFBcUIsWUFBMUMsQUFBc0QsQUFDdEQ7NkJBQUEsQUFBYSxRQUFiLEFBQXFCLFNBQXJCLEFBQThCLEFBQzlCO2tEQUFBLEFBQ087K0JBRFAsQUFHSTswQkFISixBQUlJOzJCQUpKLEFBS0k7aUNBTEosQUFPSDtBQUxPO0FBTVI7QUFDSTttQkE3RFIsQUE2RFEsQUFBTyxBQUVsQjs7QUFoRUQ7O2tCQW1FZSxBIiwiZmlsZSI6InJlY2VpcHRSZWR1Y2Vycy5qcyIsInNvdXJjZVJvb3QiOiJEOi9kZW1vQmFuaGFuZy93ZWJhcHAifQ==