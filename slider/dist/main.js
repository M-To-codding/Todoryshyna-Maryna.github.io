!function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){t.exports=class{constructor(){this.slider=null,this._sliderName="",this._scrolledContent=null,this._sliderContent=null,this._sliderImgs=null,this.fadeSlide=.1,this._contentWidth=350,this._bodyWidth=350,this._slideWidth=355,this._offsetLeft=0,this._currentPos=0,this.stopSwipe=this._stopSwipe.bind(this),this.moveSlide=this._moveSlide.bind(this)}init(t){this._sliderName=t,this.slider=document.querySelector(t),this._sliderContent=document.querySelector(`${t} .slider-content`),this._scrolledContent=document.querySelector(`${t} .scrolled-content`),this._sliderImgs=document.querySelectorAll(`${t} .slide-image`),this._checkSliderWidthParams(),document.querySelector(`${t} .slide-item[data-key="0"]`).style.opacity=1;let e=this.sliderImgs=document.querySelectorAll(`${t} .btn`);for(let t=0;t<e.length;t++)e[t].addEventListener("click",t=>this.buttonClick(t));this._addSwiping(),this._resize()}buttonClick(t){t.preventDefault(),t.target.classList.contains("-next")?(this._replaceSlides("next"),this._checkContentWidth()):t.target.classList.contains("-prev")&&(this._replaceSlides("prev"),this._checkContentWidth())}_checkSliderWidthParams(){this._bodyWidth=this._checkBodyWidth()-40,this._slideWidth=this._checkBodyWidth()-40,this._offsetLeft=0,this._scrolledContent.style.marginLeft=this._offsetLeft+"px",this._contentWidth=this._checkContentWidth()+40,this._scrolledContent.style.width=`${this._contentWidth}px`,this._sliderContent.style.width=`${this._bodyWidth}px`}_addSwiping(){this._scrolledContent.style.marginLeft=0,this.slider.addEventListener("mousedown",this._swipeStart.bind(this)),this.slider.addEventListener("mouseup",this.stopSwipe),console.log("_addSwiping")}_swipeStart(t){this._currentPos=t.clientX,this.slider.addEventListener("mousemove",this.moveSlide)}_moveSlide(t){this._currentPos<t.clientX?(this._replaceSlides("prev"),this._checkContentWidth()):(this._replaceSlides("next"),this._checkContentWidth()),this._currentPos=t.clientX,this.slider.removeEventListener("mousemove",this.moveSlide)}_stopSwipe(){this.slider.removeEventListener("mousemove",this.moveSlide)}_checkBodyWidth(){return this.slider.offsetWidth}_checkContentWidth(){var t=0;return Array.prototype.forEach.call(this._sliderImgs,(e,i)=>{e.parentNode.style.width=`${this._bodyWidth}px`,e.parentNode.setAttribute("data-key",i),t+=this._bodyWidth}),t}_replaceSlides(t){let e=this._sliderImgs.length;"prev"===t?(this._sliderImgs[e-1].parentNode.style.opacity=this.fadeSlide,this._sliderImgs[0].parentNode.style.opacity=this.fadeSlide,this._scrolledContent.insertBefore(this._sliderImgs[e-1].parentNode,document.querySelector(`${this._sliderName} .slide-item`)),setTimeout(()=>{this._sliderImgs[0].parentNode.style.opacity=1},100)):(this._sliderImgs[0].parentNode.style.opacity=this.fadeSlide,this._scrolledContent.appendChild(this._sliderImgs[0].parentNode),setTimeout(()=>{this._sliderImgs[0].parentNode.style.opacity=1},100)),this._sliderImgs=document.querySelectorAll(`${this._sliderName} .slide-image`)}_resize(){window.onresize=()=>{this._checkSliderWidthParams()}}}},function(t,e,i){"use strict";i.r(e);var n=i(0),r=i.n(n),o=(i(2),new r.a);document.addEventListener("DOMContentLoaded",()=>{o.init("#slider")})},function(t,e,i){var n=i(3);"string"==typeof n&&(n=[[t.i,n,""]]);var r={insert:"head",singleton:!1};i(5)(n,r);n.locals&&(t.exports=n.locals)},function(t,e,i){(t.exports=i(4)(!1)).push([t.i,"*{font-family:sans-serif;font-size:16px;font-weight:normal;background-repeat:no-repeat;margin:0;padding:0;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;box-sizing:border-box}*::after,*::before{box-sizing:border-box;transition:0.5s}input,button,textarea{-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:0.5s;background-color:transparent}button{border:none;cursor:pointer}ul{list-style-type:none;display:inherit;width:inherit;justify-content:inherit}textarea{resize:none;transition:0.5s}h1,p{margin:0}h2,p{margin:0}h3,p{margin:0}h4,p{margin:0}h5,p{margin:0}h6,p{margin:0}:focus{outline:0;transition:0.5s}a{color:inherit;text-decoration:none;transition:0.5s}a:hover,a:focus{color:#878787;text-decoration:none;transition:0.5s}.slider{width:100%;display:flex;justify-content:center}.slider-content{width:100%;height:95vh;position:relative;min-height:250px;background-color:#000;overflow:hidden;cursor:grab}.slider-content:active{cursor:grabbing}.slider .scrolled-content{height:inherit;min-height:inherit;transition:0.7s}.slider .slide-item{opacity:0.1;width:350px;height:inherit;min-height:inherit;display:inline-block;border-radius:6px;overflow:hidden;transition:0.7s}.slider .slide-image{background-position:center;background-size:cover;background-repeat:no-repeat;margin-right:20px;width:100%;height:100%}.slider .btn{display:flex;align-items:center;justify-content:center;position:absolute;background-color:#000;color:#fff;border:none;top:0;margin:auto;bottom:0;height:200px;width:80px;text-align:center;font-weight:bold;opacity:0;cursor:pointer;transition:0.7s;z-index:10}.slider .btn.-prev{left:0;transform:scaleX(-1)}.slider .btn.-next{right:0}.slider:hover .btn{opacity:0.7;transition:0.7s}\n",""])},function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"==typeof btoa){var r=(s=n,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(l," */")),o=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot).concat(t," */")}));return[i].concat(o).concat([r]).join("\n")}var s,a,l;return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2],"{").concat(i,"}"):i})).join("")},e.i=function(t,i){"string"==typeof t&&(t=[[null,t,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(var s=0;s<t.length;s++){var a=t[s];null!=a[0]&&n[a[0]]||(i&&!a[2]?a[2]=i:i&&(a[2]="(".concat(a[2],") and (").concat(i,")")),e.push(a))}},e}},function(t,e,i){"use strict";var n,r={},o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},s=function(){var t={};return function(e){if(void 0===t[e]){var i=document.querySelector(e);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}t[e]=i}return t[e]}}();function a(t,e){for(var i=[],n={},r=0;r<t.length;r++){var o=t[r],s=e.base?o[0]+e.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):i.push(n[s]={id:s,parts:[a]})}return i}function l(t,e){for(var i=0;i<t.length;i++){var n=t[i],o=r[n.id],s=0;if(o){for(o.refs++;s<o.parts.length;s++)o.parts[s](n.parts[s]);for(;s<n.parts.length;s++)o.parts.push(g(n.parts[s],e))}else{for(var a=[];s<n.parts.length;s++)a.push(g(n.parts[s],e));r[n.id]={id:n.id,refs:1,parts:a}}}}function d(t){var e=document.createElement("style");if(void 0===t.attributes.nonce){var n=i.nc;n&&(t.attributes.nonce=n)}if(Object.keys(t.attributes).forEach((function(i){e.setAttribute(i,t.attributes[i])})),"function"==typeof t.insert)t.insert(e);else{var r=s(t.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var c,h=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=h(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}function p(t,e,i){var n=i.css,r=i.media,o=i.sourceMap;if(r&&t.setAttribute("media",r),o&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var f=null,m=0;function g(t,e){var i,n,r;if(e.singleton){var o=m++;i=f||(f=d(e)),n=u.bind(null,i,o,!1),r=u.bind(null,i,o,!0)}else i=d(e),n=p.bind(null,i,e),r=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(i)};return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}t.exports=function(t,e){(e=e||{}).attributes="object"==typeof e.attributes?e.attributes:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=o());var i=a(t,e);return l(i,e),function(t){for(var n=[],o=0;o<i.length;o++){var s=i[o],d=r[s.id];d&&(d.refs--,n.push(d))}t&&l(a(t,e),e);for(var c=0;c<n.length;c++){var h=n[c];if(0===h.refs){for(var u=0;u<h.parts.length;u++)h.parts[u]();delete r[h.id]}}}}}]);