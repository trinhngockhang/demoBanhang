webpackHotUpdate(0,{497:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,[(0,u.fork)(c.default),(0,u.fork)(f.default)];case 2:case"end":return e.stop()}},p,this)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var u=r(85),s=r(498),o=(n(s),r(499)),c=n(o),i=r(528),f=n(i),p=regeneratorRuntime.mark(a)},519:!1,528:function(e,t,r){"use strict";function n(e){var t,r;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,console.log("emit"),t=e.id,n.next=5,(0,u.call)(o.default.get,"https://api.botbanhang.vn/v1/webapp/category?pageid="+t+"&level=1");case 5:return r=n.sent,n.next=8,(0,u.put)({type:"FETCH_CATEGORY_SUCCESS",items:r.data.data,message:"Success"});case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(0),n.next=14,(0,u.put)({type:"FETCH_CATEGORY_FAILED",message:"Something wrong"});case 14:case"end":return n.stop()}},c,this,[[0,10]])}function a(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.takeLatest)("FETCH_CATEGORY",n);case 2:case"end":return e.stop()}},i,this)}Object.defineProperty(t,"__esModule",{value:!0});var u=r(85),s=r(188),o=function(e){return e&&e.__esModule?e:{default:e}}(s),c=regeneratorRuntime.mark(n),i=regeneratorRuntime.mark(a);t.default=a}});