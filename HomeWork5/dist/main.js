!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=class{constructor(t={}){this.slidesCount=t.slidesCount||3,this.dots=t.dots||!0,this.arrows=t.arrows||!0,this.slideWidth=371,this.sliderContentWidth=371,this.slider=null,this.sliderContent=null,this.sliderImgs=null,this.buttons=null}createSlider(t){this.slider=document.querySelector(t),this.sliderContent=document.querySelector(t+" .slider-content"),this.sliderImgs=document.querySelectorAll(t+" .slide-image"),this.slidesCount=this.sliderImgs.length,this.sliderContentWidth=this.sumWidthOfSlides(),this.sliderContent.style.width=this.sliderContentWidth+"px";let e=this.sliderImgs=document.querySelectorAll(t+" .btn");for(let t=0;t<e.length;t++)e[t].addEventListener("click",t=>this.handleBtnClick(t))}sumWidthOfSlides(){let t=0;for(let e=0;e<this.slidesCount;e++)t+=this.slideWidth+21;return t}handleBtnClick(t){let e=parseFloat(this.sliderContent.style.marginLeft);e||(this.sliderContent.style.marginLeft=0,e=0),t.target.classList.contains("-prev")&&e<0?this.sliderContent.style.marginLeft=e+this.slideWidth+"px":t.target.classList.contains("-next")&&e<this.slideWidth&&e>0-this.sliderContentWidth/2&&(this.sliderContent.style.marginLeft=e-this.slideWidth+"px")}}},function(t,e,n){"use strict";n.r(e);var r=n(0),i=n.n(r);n(2);document.addEventListener("DOMContentLoaded",()=>{(new i.a).createSlider(".slider")})},function(t,e,n){var r=n(3);"string"==typeof r&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(5)(r,i);r.locals&&(t.exports=r.locals)},function(t,e,n){(t.exports=n(4)(!1)).push([t.i,"*{font-family:sans-serif;font-size:16px;font-weight:normal;background-repeat:no-repeat;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box}*::after,*::before{box-sizing:border-box;transition:0.5s}input,button,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:0.5s;background-color:transparent}button{border:none;cursor:pointer}ul{list-style-type:none;display:inherit;width:inherit;justify-content:inherit}textarea{resize:none;transition:0.5s}h1,p{margin:0}h2,p{margin:0}h3,p{margin:0}h4,p{margin:0}h5,p{margin:0}h6,p{margin:0}:focus{outline:0;transition:0.5s}a{color:inherit;text-decoration:none;transition:0.5s}a:hover,a:focus{color:#878787;text-decoration:none;transition:0.5s}.slider{overflow:hidden;width:80%;margin:auto;position:relative;height:250px;padding:25px 0;transition:0.7s}.slider-content{height:250px;margin:auto;margin-left:0;transition:0.7s}.slider .slide-item{width:350px;height:200px;display:inline-block;margin-right:20px;border-radius:6px;overflow:hidden;box-shadow:0 0 18px 9px rgba(0,0,0,0.1)}.slider .slide-image{background-position:center;background-size:cover;background-repeat:no-repeat;margin-right:20px;width:100%;height:100%}.slider .btn{position:absolute;background-color:#000;color:#fff;border:none;top:0;margin:auto;bottom:0;height:200px;width:80px;text-align:center;font-weight:bold;opacity:0;cursor:pointer;transition:0.7s}.slider .btn.-prev{left:0}.slider .btn.-next{right:0}.slider:hover .btn{opacity:0.7;transition:0.7s}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var i=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot).concat(t," */")}));return[n].concat(o).concat([i]).join("\n")}var s,a,l;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(n,"}"):n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="(".concat(a[2],") and (").concat(n,")")),e.push(a))}},e}},function(t,e,n){"use strict";var r,i={},o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},s=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}();function a(t,e){for(var n=[],r={},i=0;i<t.length;i++){var o=t[i],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};r[s]?r[s].parts.push(a):n.push(r[s]={id:s,parts:[a]})}return n}function l(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=i[r.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],e))}else{for(var a=[];s<r.parts.length;s++)a.push(b(r.parts[s],e));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var r=n.nc;r&&(t.attributes.nonce=r)}if(Object.keys(t.attributes).forEach((function(n){e.setAttribute(n,t.attributes[n])})),"function"==typeof t.insert)t.insert(e);else{var i=s(t.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var c,u=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function f(t,e,n,r){var i=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=u(e,i);else{var o=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function h(t,e,n){var r=n.css,i=n.media,o=n.sourceMap;if(i&&t.setAttribute("media",i),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var p=null,g=0;function b(t,e){var n,r,i;if(e.singleton){var o=g++;n=p||(p=d(e)),r=f.bind(null,n,o,!1),i=f.bind(null,n,o,!0)}else n=d(e),r=h.bind(null,n,e),i=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else i()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=a(t,e);return l(n,e),function(t){for(var r=[],o=0;o<n.length;o++){var s=n[o],d=i[s.id];d&&(d.refs--,r.push(d))}t&&l(a(t,e),e);for(var c=0;c<r.length;c++){var u=r[c];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete i[u.id]}}}}}]);