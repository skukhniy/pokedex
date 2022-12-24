(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),l=t.n(c),p=new URL(t(562),t.b),s=i()(r()),d=l()(p);s.push([n.id,"@font-face {\n  font-family: Pokemon;\n  src: url("+d+");\n}\nji html {\n  background-color: rgb(96, 120, 255);\n}\nbody {\n  margin: 0;\n}\nheader {\n  background-color: rgb(25, 25, 206);\n  background-image: linear-gradient(rgb(36, 36, 92), rgb(25, 25, 206, 0.75));\n  width: 100%;\n  padding-top: 25px;\n  padding-bottom: 25px;\n  display: flex;\n  justify-content: center;\n}\n#header img {\n  display: inline-block;\n}\n#pokeball_logo {\n  height: 100px;\n}\n.pokeball {\n  height: 90px;\n  width: 90px;\n}\n#pokemon-cards {\n  margin-top: 20px;\n  margin-right: 20px;\n  margin-left: 20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.pokemon-card {\n  display: inline-block;\n  width: 200px;\n  height: 275px;\n  background-color: white;\n  border: 2px solid black;\n}\n.pokemon-card img {\n  max-height: 100%;\n  max-width: 100%;\n  pointer-events: none;\n}\n.pokemon-card p {\n  text-align: center;\n  margin-top: 0;\n  margin-bottom: 0;\n  pointer-events: none;\n}\n.pokemon-card h3 {\n  text-align: center;\n  pointer-events: none;\n}\n#pokemon-cards.active :hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n}\n\n#overlay {\n  position: fixed;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n.modal {\n  display: inline-block;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(0);\n  transition: 200ms ease-in-out;\n  z-index: 1;\n  background-color: white;\n  height: calc(189px * 2.75);\n  width: calc(255px * 2.75);\n  max-width: 80%;\n}\n\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n#pokedex_template {\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.pkmn_sprite_front {\n  display: inline-block;\n  position: absolute;\n  height: calc(96px * 3);\n  width: calc(96px * 3);\n  top: 10%;\n  left: 0;\n  z-index: 3;\n}\n\n.pkmn_sprite_back {\n  display: inline-block;\n  position: absolute;\n  height: 90px;\n  width: 90px;\n  top: 34%;\n  left: 41%;\n  z-index: 3;\n}\n\n.pkdx_name {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -2px 2px 0px #000, 2px 2px 0px #000, 2px -2px 0px #000,\n    -2px -2px 0px #000;\n  top: 8.5%;\n  left: 60%;\n  z-index: 4;\n}\n\n.pkdx_nickname {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 1px #000,\n    -1px -1px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,\n    -2px -2px 1px #000;\n  top: 17%;\n  left: 50%;\n  z-index: 4;\n}\n\n.pkdx_id {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 1px #000,\n    -1px -1px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,\n    -2px -2px 1px #000;\n  top: 8.5%;\n  left: 50%;\n  z-index: 5;\n}\n\n.pkdx_ht {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top: 42.5%;\n  left: 78%;\n  z-index: 5;\n}\n\n.pkdx_wt {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top: 51.5%;\n  left: 75%;\n  z-index: 5;\n}\n\n.pkdx_description {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top: 67%;\n  left: 9.5%;\n  margin-right: 35px;\n  z-index: 5;\n}\n\n.type {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000, 1px 1px 1px #000, 1px -1px 1px #000,\n    -1px -1px 1px #000, -2px 2px 1px #000, 2px 2px 1px #000, 2px -2px 1px #000,\n    -2px -2px 1px #000;\n  background-color: green;\n  width: 127px;\n  height: 42px;\n  border-radius: 6%;\n  border: 2.2px solid black;\n  text-align: center;\n  vertical-align: middle;\n  line-height: 42px;\n}\n.left {\n  top: 28.5%;\n  left: 57%;\n}\n\n.right {\n  top: 28.5%;\n  left: 76.2%;\n}\n\n.normal {\n  background-color: rgb(151, 134, 134);\n}\n.fire {\n  background-color: red;\n}\n.water {\n  background-color: blue;\n}\n.electric {\n  background-color: rgb(247, 202, 2);\n}\n.grass {\n  background-color: rgb(29, 185, 29);\n}\n.ice {\n  background-color: lightblue;\n}\n.fighting {\n  background-color: brown;\n}\n.poison {\n  background-color: purple;\n}\n.ground {\n  background-color: rgb(177, 118, 9);\n}\n.flying {\n  background-color: lightblue;\n}\n.psychic {\n  background-color: rgb(240, 106, 128);\n}\n.bug {\n  background-color: lightgreen;\n}\n.rock {\n  background-color: rgb(110, 62, 7);\n}\n.ghost {\n  background-color: purple;\n}\n.dragon {\n  background-color: rgb(138, 4, 98);\n}\n.dark {\n  background-color: gray;\n}\n.steel {\n  background-color: lightgray;\n}\n.fairy {\n  background-color: pink;\n}\n",""]);const u=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var p=0;p<n.length;p++){var s=[].concat(n[p]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var l=n[c],p=o.base?l[0]+o.base:l[0],s=a[p]||0,d="".concat(p," ").concat(s);a[p]=s+1;var u=t(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(f);else{var m=r(f,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:m,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var l=o(n,r),p=0;p<a.length;p++){var s=t(a[p]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},562:(n,e,t)=>{n.exports=t.p+"56513356c9572f84bb02.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),l=t.n(c),p=t(216),s=t.n(p),d=t(589),u=t.n(d),f=t(426),m={};m.styleTagTransform=u(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=r(),m.insertStyleElement=s(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h={cardContainer:document.getElementById("pokemon-cards"),modal:document.getElementById("modal"),openModalButtons:Array.from(document.querySelectorAll("[data-modal-target]")),overlay:document.getElementById("overlay")};function x(n){null!=n&&(n.classList.add("active"),h.overlay.classList.add("active"),h.cardContainer.classList.remove("active"))}h.openModalButtons.forEach((function(n){n.addEventListener("click",(function(){var e=n.dataset.modalTarget;x(document.querySelector(e)),console.log("hi")}))})),h.overlay.addEventListener("click",(function(){document.querySelectorAll(".modal.active").forEach((function(n){!function(n){null!=n&&(n.classList.remove("active"),h.overlay.classList.remove("active"),h.cardContainer.classList.add("active"),document.querySelectorAll(".temp").forEach((function(n){n.remove()})))}(n)}))}));function g(n,e){return void 0===e&&(e=""),t=this,o=void 0,a=function(){var t,o,r;return function(n,e){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(n,i)}catch(n){c=[6,n],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}}(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,4]),t="https://pokeapi.co/api/v2/pokemon".concat(e,"/").concat(n),[4,fetch(t)];case 1:return[4,a.sent().json()];case 2:return o=a.sent(),console.log(typeof o),[2,o];case 3:return r=a.sent(),console.log(r),[3,4];case 4:return[2,null]}}))},new((r=void 0)||(r=Promise))((function(n,e){function i(n){try{l(a.next(n))}catch(n){e(n)}}function c(n){try{l(a.throw(n))}catch(n){e(n)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,c)}l((a=a.apply(t,o||[])).next())}));var t,o,r,a}var b=function(n,e,t,o){return new(t||(t=Promise))((function(r,a){function i(n){try{l(o.next(n))}catch(n){a(n)}}function c(n){try{l(o.throw(n))}catch(n){a(n)}}function l(n){var e;n.done?r(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(i,c)}l((o=o.apply(n,e||[])).next())}))},v=function(n,e){var t,o,r,a,i={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(c){return function(l){return function(c){if(t)throw new TypeError("Generator is already executing.");for(;a&&(a=0,c[0]&&(i=0)),i;)try{if(t=1,o&&(r=2&c[0]?o.return:c[0]?o.throw||((r=o.return)&&r.call(o),0):o.next)&&!(r=r.call(o,c[1])).done)return r;switch(o=0,r&&(c=[2&c[0],r.value]),c[0]){case 0:case 1:r=c;break;case 4:return i.label++,{value:c[1],done:!1};case 5:i.label++,o=c[1],c=[0];continue;case 7:c=i.ops.pop(),i.trys.pop();continue;default:if(!((r=(r=i.trys).length>0&&r[r.length-1])||6!==c[0]&&2!==c[0])){i=0;continue}if(3===c[0]&&(!r||c[1]>r[0]&&c[1]<r[3])){i.label=c[1];break}if(6===c[0]&&i.label<r[1]){i.label=r[1],r=c;break}if(r&&i.label<r[2]){i.label=r[2],i.ops.push(c);break}r[2]&&i.ops.pop(),i.trys.pop();continue}c=e.call(n,i)}catch(n){c=[6,n],o=0}finally{t=r=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,l])}}};function y(n){return String(n).charAt(0).toUpperCase()+String(n).slice(1)}function k(n,e){void 0===e&&(e=!0);var t=String(n);return!1===e?1===t.length?"00".concat(t):2===t.length?"0".concat(t):"".concat(t):1===t.length?"#00".concat(t):2===t.length?"#0".concat(t):"#".concat(t)}function w(n){return b(this,void 0,void 0,(function(){var e,t,o;return v(this,(function(r){switch(r.label){case 0:return[4,g(n)];case 1:return e=r.sent(),[4,g(n,"-species")];case 2:return t=r.sent(),o=function(n){var e=document.createElement("div");e.className="pokemon-card",e.id=n.id;var t=document.createElement("img");t.src=n.sprites.other["official-artwork"].front_default;var o=document.createElement("p");o.innerHTML=k(n.id);var r=document.createElement("h3"),a=y(n.name);return r.innerHTML=a,e.appendChild(t),e.appendChild(o),e.appendChild(r),h.cardContainer.appendChild(e),e}(e),function(n,e,t){document.getElementById(n.id).addEventListener("click",(function(){x(h.modal),function(n,e){var t=document.createElement("img");t.src=n.sprites.front_default,t.className="pkmn_sprite_front temp";var o=document.createElement("img");o.src=n.sprites.back_default,o.className="pkmn_sprite_back temp";var r=document.createElement("p");r.innerHTML=y(n.name),r.className="pkdx_name temp";var a=document.createElement("p");a.innerHTML=e.genera[7].genus,a.className="pkdx_nickname temp";var i=document.createElement("p");i.innerHTML=k(n.id,!1),i.className="pkdx_id temp";var c,l,p,s,d,u=document.createElement("p");u.innerHTML=(c=n.height,s=(l=Math.round(.328084*c*100)/100)-(p=Math.floor(l)),d=(d=Math.round(s/.0833333))<10?"0".concat(String(d)):"".concat(String(d)),"".concat(String(p),"'").concat(d,'"')),u.className="pkdx_ht temp";var f=document.createElement("p");f.innerHTML=function(n){var e=Math.round(.220462*n*10)/10;return"".concat(String(e)," lbs.")}(n.weight),f.className="pkdx_wt temp";var m=document.createElement("p");m.innerHTML=e.flavor_text_entries[9].flavor_text,m.className="pkdx_description temp";var x=document.createElement("p");x.innerHTML=y(n.types[0].type.name),x.className="type ".concat(n.types[0].type.name," left temp");var g=document.createElement("p");try{g.innerHTML=y(n.types[1].type.name),g.className="type ".concat(n.types[1].type.name," right temp")}catch(n){console.error(n),console.log(n)}h.modal.appendChild(t),h.modal.appendChild(o),h.modal.appendChild(r),h.modal.appendChild(a),h.modal.appendChild(i),h.modal.appendChild(u),h.modal.appendChild(f),h.modal.appendChild(m),h.modal.appendChild(x),h.modal.appendChild(g)}(e,t)}))}(o,e,t),[2]}}))}))}!function(){b(this,void 0,void 0,(function(){var n;return v(this,(function(e){switch(e.label){case 0:n=1,e.label=1;case 1:return n<152?[4,w(n)]:[3,4];case 2:e.sent(),e.label=3;case 3:return n+=1,[3,1];case 4:return[2]}}))}))}(),console.log("hi")})()})();