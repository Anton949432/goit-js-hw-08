!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequired7c6=i);var o,a=i("l5bVx"),u="Expected a function",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,d=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,m="object"==typeof self&&self&&self.Object===Object&&self,p=v||m||Function("return this")(),g=Object.prototype.toString,b=Math.max,y=Math.min,w=function(){return p.Date.now()};function x(e,t,n){var r,i,o,a,l,f,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(u);function m(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function p(e){return c=e,l=setTimeout(x,t),s?m(e):a}function g(e){var n=e-f;return void 0===f||n>=t||n<0||d&&e-c>=o}function x(){var e=w();if(g(e))return O(e);l=setTimeout(x,function(e){var n=t-(e-f);return d?y(n,o-(e-c)):n}(e))}function O(e){return l=void 0,v&&r?m(e):(r=i=void 0,a)}function T(){var e=w(),n=g(e);if(r=arguments,i=this,f=e,n){if(void 0===l)return p(f);if(d)return l=setTimeout(x,t),m(f)}return void 0===l&&(l=setTimeout(x,t)),a}return t=h(t)||0,S(n)&&(s=!!n.leading,o=(d="maxWait"in n)?b(h(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==l&&clearTimeout(l),c=0,r=f=i=l=void 0},T.flush=function(){return void 0===l?a:O(w())},T}function S(t){var n=void 0===t?"undefined":e(a)(t);return!!t&&("object"==n||"function"==n)}function h(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(a)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==g.call(t)}(t))return NaN;if(S(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=S(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var r=c.test(t);return r||s.test(t)?d(t.slice(2),r?2:8):f.test(t)?NaN:+t}o=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(u);return S(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),x(e,t,{leading:r,maxWait:t,trailing:i})};var O=i("gK76q"),T=document.querySelector(".feedback-form"),j=T.querySelector('input[name="email"]'),E=T.querySelector('textarea[name="message"]'),N=document.querySelector("iframe"),q=new(0,O.default)(N);q.on("timeupdate",(function(e){var t=e.seconds;localStorage.setItem("videoplayer-current-time",t)}));var I=parseFloat(localStorage.getItem("videoplayer-current-time"));isNaN(I)||q.setCurrentTime(I);var M=e(o)((function(){var e={email:j.value,message:E.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);j.addEventListener("input",M),E.addEventListener("input",M);!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);j.value=t.email||"",E.value=t.message||""}}(),T.addEventListener("submit",(function(e){e.preventDefault();var t=j.value.trim(),n=E.value.trim();t&&n?(console.log("Form submitted with data:"),console.log("Email:",t),console.log("Message:",n),localStorage.removeItem("feedback-form-state"),j.value="",E.value=""):alert("Please fill in both fields: Email and Message")}))}();
//# sourceMappingURL=03-feedback.df1ea2b8.js.map
