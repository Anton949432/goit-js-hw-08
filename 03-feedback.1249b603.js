!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var o="Expected a function",r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,p=function(){return d.Date.now()};function b(e,t,n){var i,r,a,u,f,l,c=0,s=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError(o);function b(t){var n=i,o=r;return i=r=void 0,c=t,u=e.apply(o,n)}function S(e){return c=e,f=setTimeout(w,t),s?b(e):u}function h(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function w(){var e=p();if(h(e))return O(e);f=setTimeout(w,function(e){var n=t-(e-l);return d?g(n,a-(e-c)):n}(e))}function O(e){return f=void 0,v&&i?b(e):(i=r=void 0,u)}function T(){var e=p(),n=h(e);if(i=arguments,r=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(w,t),b(l)}return void 0===f&&(f=setTimeout(w,t)),u}return t=j(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?m(j(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=r=f=void 0},T.flush=function(){return void 0===f?u:O(p())},T}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==v.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var o=u.test(t);return o||f.test(t)?l(t.slice(2),o?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(o);return y(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var S=document.querySelector(".feedback-form"),h=S.querySelector('input[name="email"]'),w=S.querySelector('textarea[name="message"]'),O=e(t)((function(){var e={email:h.value,message:w.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}),500);h.addEventListener("input",O),w.addEventListener("input",O);!function(){var e=localStorage.getItem("feedback-form-state");if(e){var t=JSON.parse(e);h.value=t.email||"",w.value=t.message||""}}(),S.addEventListener("submit",(function(e){e.preventDefault();var t=h.value,n=w.value;console.log("Form submitted with data:"),console.log("Email:",t),console.log("Message:",n),localStorage.removeItem("feedback-form-state"),h.value="",w.value=""}))}();
//# sourceMappingURL=03-feedback.1249b603.js.map
