'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var shopingBasket = exports.shopingBasket = function shopingBasket(item) {
    return {
        type: 'SHOPING_BASKET',
        item: item
    };
};

var addShopingBasket = exports.addShopingBasket = function addShopingBasket(item) {
    return {
        type: 'ADD_SHOPING_BASKET',
        item: item
    };
};

var subShopingBasket = exports.subShopingBasket = function subShopingBasket(item) {
    return {
        type: 'SUB_SHOPING_BASKET',
        item: item
    };
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjdGlvbnNcXHJlY2VpcHQuanMiXSwibmFtZXMiOlsic2hvcGluZ0Jhc2tldCIsIml0ZW0iLCJ0eXBlIiwiYWRkU2hvcGluZ0Jhc2tldCIsInN1YlNob3BpbmdCYXNrZXQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBTSx3Q0FBZ0IsU0FBaEIsQUFBZ0IsY0FBQSxBQUFDLE1BQVMsQUFDbkM7O2NBQU8sQUFDRyxBQUNOO2NBRkosQUFBTyxBQUVHLEFBRWI7QUFKVSxBQUNIO0FBRkQ7O0FBT0EsSUFBTSw4Q0FBbUIsU0FBbkIsQUFBbUIsaUJBQUEsQUFBQyxNQUFTLEFBQ3RDOztjQUFPLEFBQ0csQUFDTjtjQUZKLEFBQU8sQUFFRyxBQUViO0FBSlUsQUFDSDtBQUZEOztBQU9BLElBQU0sOENBQW1CLFNBQW5CLEFBQW1CLGlCQUFBLEFBQUMsTUFBUyxBQUN0Qzs7Y0FBTyxBQUNHLEFBQ047Y0FGSixBQUFPLEFBRUcsQUFFYjtBQUpVLEFBQ0g7QUFGRCIsImZpbGUiOiJyZWNlaXB0LmpzIiwic291cmNlUm9vdCI6IkQ6L2RlbW9CYW5oYW5nL3dlYmFwcCJ9