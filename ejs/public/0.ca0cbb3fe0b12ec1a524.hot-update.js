webpackHotUpdate(0,{465:function(e,t,o){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){var e="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;return function(t,o,r,n){var i=t&&t.defaultProps,a=arguments.length-3;if(o||0===a||(o={}),o&&i)for(var c in i)void 0===o[c]&&(o[c]=i[c]);else o||(o=i||{});if(1===a)o.children=n;else if(a>1){for(var l=Array(a),s=0;s<a;s++)l[s]=arguments[s+3];o.children=l}return{$$typeof:e,type:t,key:void 0===r?null:""+r,ref:null,props:o,_owner:null}}}(),c=function(){function e(e,t){for(var o=0;o<t.length;o++){var r=t[o];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,o,r){return o&&e(t.prototype,o),r&&e(t,r),t}}(),l=o(1),s=function(e){return e&&e.__esModule?e:{default:e}}(l),u=o(33),f=o(466),p=a("br",{}),d=a("img",{src:"./images/icons/add-cart.png",alt:""}),m=function(e){function t(){return r(this,t),n(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),c(t,[{key:"onClick",value:function(e,t){e.preventDefault(),this.props.fetchInfoItem(t,t.regular)}},{key:"render",value:function(){var e=this;return a("div",{className:"imagebox style4"},void 0,a("div",{className:"box-image"},void 0,a("a",{href:"#",title:""},void 0,a("img",{src:this.props.item.src,alt:""}))),a("div",{className:"box-content"},void 0,a("div",{className:"cat-name"},void 0,a("a",{href:"#",title:""},void 0,this.props.item.catName)),a("div",{className:"product-name"},void 0,a("a",{href:"#",title:""},void 0,this.props.item.produceName,p,this.props.item.productName1)),a("div",{className:"price"},void 0,a("span",{className:"sale"},void 0,this.props.item.sale),a("span",{className:"regular"},void 0,this.props.item.regular))),a("div",{className:"box-cart style2 home"},void 0,a("div",{className:"btn-add-cart home"},void 0,a("a",{href:"#",title:"",onClick:function(t){return e.onClick(t,e.props.item)}},void 0,d,"Mua"))))}}]),t}(s.default.Component),v={fetchInfoItem:f.fetchInfoItem};t.default=(0,u.connect)(null,v)(m)}});