webpackHotUpdate(0,{460:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function c(e){var t=e.suggest,o=e.electric,r=e.electricAds;return n("div",{},void 0,n(p.default,{items:t,electric:o,electricAds:r}),A,_,k)}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,r,c){var n=t&&t.defaultProps,u=arguments.length-3;if(o||0===u||(o={}),o&&n)for(var i in n)void 0===o[i]&&(o[i]=n[i]);else o||(o=n||{});if(1===u)o.children=c;else if(u>1){for(var l=Array(u),d=0;d<u;d++)l[d]=arguments[d+3];o.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),u=o(1),i=(r(u),o(113)),l=o(33),d=o(461),a=r(d),f=o(468),p=r(f),s=o(474),v=r(s),h=o(475),y=r(h),g=o(477),m=r(g),R=o(479),b=r(R),A=n(i.Link,{to:"/shop/111004729614967"},void 0,"CLick"),_=n(i.Switch,{},void 0,n(i.Route,{exact:!0,path:"/",component:a.default}),n(i.Route,{path:"/category/:id",component:y.default}),n(i.Route,{path:"/product/:id",component:m.default}),n(i.Route,{path:"/shop/:pageid",component:b.default})),k=n(v.default,{}),w=function(e){return{suggest:e.appReducer.suggest,electric:e.appReducer.electric,electricAds:e.appReducer.electricAds}};t.default=(0,i.withRouter)((0,l.connect)(w)(c))}});