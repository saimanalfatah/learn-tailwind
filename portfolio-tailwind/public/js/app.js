!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){n(1),e.exports=n(2)},function(e,t){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var r,o,a;(new WOW).init(),document.querySelector(".navbar-toggler").addEventListener("click",(function(e){var t=document.getElementById("navbar-collapse");t.classList.toggle("slide-down"),t.classList.contains("slide-down")?t.classList.remove("slide-up"):t.classList.add("slide-up"),this.querySelector("svg > path:nth-of-type(1)").classList.toggle("opacity-0"),this.querySelector("svg > path:nth-of-type(2)").classList.toggle("opacity-0")})),window.addEventListener("scroll",(r=function(){var e=window.pageYOffset,t=document.querySelector(".hero"),n=.4*e+"px";t.style.transform="translateY("+n+")"},o=14,a=Date.now(),function(){a+o-Date.now()<0&&(r(),a=Date.now())}));var c=document.getElementById("mynav"),l=document.querySelector(".brand-scroll"),i=document.querySelector(".btn-github"),s=document.querySelectorAll(".nav-link"),u=document.querySelectorAll(".section-link");window.onscroll=function(){"use strict";document.body.scrollTop>=64||document.documentElement.scrollTop>=64?(c.classList.remove("md:bg-transparent","md:shadow-none"),l.classList.remove("md:text-gray-100"),i.classList.remove("md:bg-gray-800","md:hover:bg-gray-900","md:focus:shadow-none"),[].forEach.call(s,(function(e){e.classList.remove("md:text-gray-200","md:hover:text-white")}))):(c.classList.add("md:bg-transparent","md:shadow-none"),l.classList.add("md:text-gray-100"),i.classList.add("md:bg-gray-800","md:hover:bg-gray-900","md:focus:shadow-none"),[].forEach.call(s,(function(e){e.classList.add("md:text-gray-200","md:hover:text-white")})));var e=document.documentElement.scrollTop||document.body.scrollTop;for(var t in u)if(u.hasOwnProperty(t)&&u[t].offsetTop-64<=e){var n=u[t].id;document.getElementsByClassName("active")[0].classList.remove("active"),document.querySelector("#navbar-collapse a[href*=".concat(n,"]")).classList.add("active")}};var d,f=function(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,l=!0,i=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return l=e.done,e},e:function(e){i=!0,c=e},f:function(){try{l||null==r.return||r.return()}finally{if(i)throw c}}}}(s);try{for(f.s();!(d=f.n()).done;){d.value.addEventListener("click",m)}}catch(e){f.e(e)}finally{f.f()}function m(e){e.preventDefault();var t=this.getAttribute("href"),n=document.querySelector(t).offsetTop-64;scroll({top:n,behavior:"smooth"})}},function(e,t){}]);