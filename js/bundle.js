!function(e){function t(t){for(var r,c,i=t[0],u=t[1],l=t[2],d=0,f=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(s&&s(t);f.length;)f.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={0:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var i=window.webpackJsonp=window.webpackJsonp||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var s=u;a.push([398,1]),n()}({397:function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o=document.querySelector(".header__burger"),a=document.querySelector(".header"),c=document.querySelector(".footer__btn "),i=document.querySelectorAll(".nav__link"),u=[].concat(function(e){if(Array.isArray(e))return n(e)}(r=i)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(),[c]),l=function(){a.classList.remove("header--open"),document.body.classList.remove("no-scroll")};o&&o.addEventListener("click",(function(){a.classList.contains("header--open")?l():(a.classList.add("header--open"),document.body.classList.add("no-scroll"))}));var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"smooth",n=e?e.currentTarget.hash:window.location.hash;if(n){var r="".concat(n,"-section"),o=document.getElementById(r.replace("#","")),c=o?o.offsetTop-a.clientHeight:0;window.scroll({top:c,behavior:t})}};u&&u.forEach((function(e){e.addEventListener("click",(function(e){s(e),a.classList.contains("header--open")&&(l(),s(e,"smooth"))}))})),window.addEventListener("load",(function(e){s()}))},398:function(e,t,n){"use strict";n.r(t);n(158),n(159),n(397);var r=n(157),o=document.querySelector(".form__body"),a=document.querySelectorAll(".form__input"),c=document.querySelector(".form__success"),i=document.querySelector("[name=phone]"),u=document.querySelector("[name=name]"),l=document.querySelector("[name=email]"),s=Object(r.a)(i,{mask:"+{7} (000) 000-00-00"});function d(){var e=!1;return i.value.length<18?(i.classList.add("form__input--error"),i.setCustomValidity("Введите валидный номер телефона")):(i.classList.remove("form__input--error"),i.setCustomValidity(""),e=!0),e}i.addEventListener("input",d),o.addEventListener("submit",(function(e){if(e.preventDefault(),d()){var t={name:u.value,phone:s.unmaskedValue,email:l.value};fetch("https://landing-backend.zerno-agregator.ru/call-me",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){if(!e.ok)throw new Error("Ошибка отправки формы");c.style.display="flex",o.style.display="none",a.forEach((function(e){return e.value=""})),document.querySelector(".form__button-repeatedly").addEventListener("click",(function(){o.style.display="block",c.style.display="none"}))})).catch((function(){alert("Ошибка отправки формы")}))}else i.setCustomValidity("Введите валидный номер телефона")}))}});