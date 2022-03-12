(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>u});var o=t(81),r=t.n(o),a=t(645),i=t.n(a),c=t(667),p=t.n(c),l=new URL(t(562),t.b),s=i()(r()),d=p()(l);s.push([n.id,"@font-face { font-family: Pokemon; src: url("+d+"); } ji\n\nhtml {\n  background-color: rgb(96, 120, 255);\n}\nbody{\n  margin: 0;\n}\n#header{\n  background-color: rgb(25, 25, 206);\n  width:100%;\n  padding-top: 10px;\n  padding-bottom: 10px;\n}\n#header img{\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n#pokemon-cards{\n  margin-top: 20px;\n  margin-right:20px;\n  margin-left:20px;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.pokemon-card{\n  display: inline-block;\n  width: 200px;\n  height:275px;\n  background-color: white;\n  border: 2px solid black;\n}\n.pokemon-card img{\n  max-height:100%;\n  max-width:100%;\n  pointer-events: none;\n}\n.pokemon-card p{\n  text-align: center;\n  margin-top: 0;\n  margin-bottom:0;\n  pointer-events: none;\n}\n.pokemon-card h3{\n  text-align: center;\n  pointer-events: none;\n}\n#pokemon-cards.active :hover{\n  cursor: pointer;\n  -webkit-transform: scale(1.2);\n  -ms-transform: scale(3);\n  transform: scale(1.2);\n}\n\n#overlay{\n  position:fixed;\n  opacity:0;\n  top:0;\n  left:0;\n  right:0;\n  bottom:0;\n  background-color: rgba(0, 0, 0, 0.5);\n  pointer-events: none;\n  transition: 200ms ease-in-out;\n}\n\n#overlay.active {\n  pointer-events: all;\n  opacity: 1;\n}\n\n.modal {\n  display: inline-block;\n  position:fixed;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%) scale(0);\n  transition: 200ms ease-in-out;\n  z-index: 1;\n  background-color: white;\n  height:calc(189px * 2.75);\n  width:calc(255px * 2.75);\n  max-width: 80%;\n}\n\n.modal.active {\n  transform: translate(-50%, -50%) scale(1);\n}\n\n#pokedex_template {\n  height:100%;\n  width:100%;\n  top: 0;\n  left: 0;\n  z-index: 2;\n}\n\n.pkmn_sprite_front {\n  display: inline-block;\n  position: absolute;\n  height: calc(96px*3);\n  width: calc(96px*3);\n  top: 10%;\n  left:0;\n  z-index: 3;\n}\n\n.pkmn_sprite_back {\n  display: inline-block;\n  position: absolute;\n  height: 90px;\n  width: 90px;\n  top: 33.5%;\n  left:41%;\n  z-index: 3;\n}\n\n.pkdx_name {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -2px 2px 0px #000,\n  2px 2px 0px #000,\n 2px -2px 0px #000,\n-2px -2px 0px #000;\n  top:8.5%;\n  left:60%;\n  z-index: 4;\n}\n\n.pkdx_nickname {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000,\n  1px 1px 1px #000,\n 1px -1px 1px #000,\n-1px -1px 1px #000,\n-2px 2px 1px #000,\n  2px 2px 1px #000,\n 2px -2px 1px #000,\n-2px -2px 1px #000;\n  top:17%;\n  left:50%;\n  z-index: 4;\n}\n\n.pkdx_id {\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000,\n  1px 1px 1px #000,\n 1px -1px 1px #000,\n-1px -1px 1px #000,\n-2px 2px 1px #000,\n  2px 2px 1px #000,\n 2px -2px 1px #000,\n-2px -2px 1px #000;\n  top:8.5%;\n  left:50%;\n  z-index: 5;\n}\n\n.pkdx_ht{  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top:42.5%;\n  left:78%;\n  z-index: 5;\n}\n\n.pkdx_wt{  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top:51.5%;\n  left:75%;\n  z-index: 5;\n}\n\n.pkdx_description{ \n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  top:67%;\n  left:10%;\n  margin-right: 35px;\n  z-index: 5;\n}\n\n.type{\n  display: inline-block;\n  position: absolute;\n  font-family: Pokemon;\n  font-size: x-large;\n  color: white;\n  text-shadow: -1px 1px 1px #000,\n  1px 1px 1px #000,\n 1px -1px 1px #000,\n-1px -1px 1px #000,\n-2px 2px 1px #000,\n  2px 2px 1px #000,\n 2px -2px 1px #000,\n-2px -2px 1px #000;\nbackground-color: green;\nwidth:127px;\nheight:42px;\nborder-radius: 6%;\nborder: 2.2px solid black;\ntext-align: center;\nvertical-align: middle;\nline-height: 42px;\n}\n.left{\n  top:28.5%;\n  left:57%;\n}\n\n.right{\n  top:28.5%;\n  left: 76.2%;\n}\n\n.normal{\n  background-color: brown;\n}\n.fire{\n  background-color: red;\n}\n.water{\n  background-color: blue;\n}\n.electr{\n  background-color: yellow;\n}\n.grass{\n  background-color: rgb(29, 185, 29);\n}\n.ice{\n  background-color: lightblue;\n}\n.fighting{\n  background-color: red;\n}\n.poison{\n  background-color: purple;\n}\n.ground{\n  background-color: brown;\n}\n.flying{\n  background-color: lightblue;\n}\n.psychic{\n  background-color: pink;\n}\n.bug{\n  background-color: lightgreen;\n}\n.rock{\n  background-color: brown;\n}\n.ghost{\n  background-color: purple;\n}\n.dragon{\n  background-color: purple;\n}\n.dark{\n  background-color: gray;\n}\n.steel{\n  background-color: lightgray;\n}\n\n/* .pokemon-card {\n  position: relative;\n  background-color: white;\n  top: 0;\n  left: 0;\n  height:400px;\n  border-radius: 10%;\n}\n#charmander{\n  background-color: white;\n}\n.overlay {\n  position: relative;\n  top: 0;\n  left: 0;\n  height: 400px;\n  width:300px;\n  z-index: 1;\n}\n.pokemon_img {\n  display: inline-block;\n  position: absolute;\n  top: 40px;\n  left: 75px;\n  height:150px;\n  width:150px;\n  z-index: 2;\n}\n\n.pokemon_id{\n  display: inline-block;\n  position: absolute;\n  top:195px;\n  left:130px;\n  z-index: 3;\n  color: black;\n}\n.pokemon_name{\n  display: inline-block;\n  position: absolute;\n  margin:0;\n  top:15px;\n  left:60px;\n  z-index: 3;\n  color: black;\n} */",""]);const u=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var p=this[c][0];null!=p&&(i[p]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],c=0;c<n.length;c++){var p=n[c],l=o.base?p[0]+o.base:p[0],s=a[l]||0,d="".concat(l," ").concat(s);a[l]=s+1;var u=t(d),m={css:p[1],media:p[2],sourceMap:p[3],supports:p[4],layer:p[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var x=r(m,o);o.byIndex=c,e.splice(c,0,{identifier:d,updater:x,references:1})}i.push(d)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var p=o(n,r),l=0;l<a.length;l++){var s=t(a[l]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=p}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},562:(n,e,t)=>{n.exports=t.p+"56513356c9572f84bb02.ttf"}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");o.length&&(n=o[o.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,(()=>{var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),c=t(565),p=t.n(c),l=t(216),s=t.n(l),d=t(589),u=t.n(d),m=t(426),x={};x.styleTagTransform=u(),x.setAttributes=p(),x.insert=i().bind(null,"head"),x.domAPI=r(),x.insertStyleElement=s(),e()(m.Z,x),m.Z&&m.Z.locals&&m.Z.locals;const f={cardContainer:document.getElementById("pokemon-cards"),modal:document.getElementById("modal")},h=document.querySelectorAll("[data-modal-target]"),g=document.getElementById("overlay");function b(n){null!=n&&(n.classList.add("active"),g.classList.add("active"),f.cardContainer.classList.remove("active"))}h.forEach((n=>{n.addEventListener("click",(()=>{b(document.querySelector(n.dataset.modalTarget)),console.log("hi")}))})),g.addEventListener("click",(()=>{document.querySelectorAll(".modal.active").forEach((n=>{!function(n){null!=n&&(n.classList.remove("active"),g.classList.remove("active"),f.cardContainer.classList.add("active"),document.querySelectorAll(".temp").forEach((n=>{n.remove()})))}(n)}))}));const k=async function(n,e=""){try{const t=`https://pokeapi.co/api/v2/pokemon${e}/${n}`,o=await fetch(t);return await o.json()}catch(n){console.log(n)}return null};function y(n){return String(n).charAt(0).toUpperCase()+String(n).slice(1)}function v(n,e=!0){const t=String(n);return!1===e?1===t.length?`00${t}`:2===t.length?`0${t}`:`${t}`:1===t.length?`#00${t}`:2===t.length?`#0${t}`:`#${t}`}async function w(n){const e=await k(n),t=await k(n,"-species"),o=function(n){const e=document.createElement("div");e.className="pokemon-card",e.id=n.id;const t=document.createElement("img");t.src=n.sprites.other["official-artwork"].front_default;const o=document.createElement("p");o.innerHTML=v(n.id);const r=document.createElement("h3"),a=y(n.name);return r.innerHTML=a,e.appendChild(t),e.appendChild(o),e.appendChild(r),f.cardContainer.appendChild(e),e}(e);!function(n,e,t){document.getElementById(n.id).addEventListener("click",(()=>{b(f.modal),function(n,e){const t=document.createElement("img");t.src=n.sprites.front_default,t.className="pkmn_sprite_front temp";const o=document.createElement("img");o.src=n.sprites.back_default,o.className="pkmn_sprite_back temp";const r=document.createElement("p");r.innerHTML=y(n.name),r.className="pkdx_name temp";const a=document.createElement("p");a.innerHTML=e.genera[7].genus,a.className="pkdx_nickname temp";const i=document.createElement("p");i.innerHTML=v(n.id,!1),i.className="pkdx_id temp";const c=document.createElement("p");c.innerHTML=function(n){const e=Math.round(.328084*n*100)/100,t=Math.floor(e),o=e-t;let r=Math.round(o/.0833333);return r=r<10?`0${String(r)}`:`${String(r)}`,`${String(t)}'${r}"`}(n.height),c.className="pkdx_ht temp";const p=document.createElement("p");p.innerHTML=function(n){const e=Math.round(.220462*n*10)/10;return`${String(e)} lbs.`}(n.weight),p.className="pkdx_wt temp";const l=document.createElement("p");l.innerHTML=e.flavor_text_entries[9].flavor_text,l.className="pkdx_description temp";const s=document.createElement("p");s.innerHTML=y(n.types[0].type.name),s.className=`type ${n.types[0].type.name} left temp`;const d=document.createElement("p");try{d.innerHTML=y(n.types[1].type.name),d.className=`type ${n.types[1].type.name} right temp`}catch(n){console.error(n),console.log(n)}f.modal.appendChild(t),f.modal.appendChild(o),f.modal.appendChild(r),f.modal.appendChild(a),f.modal.appendChild(i),f.modal.appendChild(c),f.modal.appendChild(p),f.modal.appendChild(l),f.modal.appendChild(s),f.modal.appendChild(d)}(e,t)}))}(o,e,t)}!async function(){for(let n=1;n<152;n+=1)await w(n)}()})()})();