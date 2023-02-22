"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[4625],{4625:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var r=setTimeout;function o(e){return Boolean(e&&void 0!==e.length)}function i(){}function u(e){if(!(this instanceof u))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(e,this)}function f(e,t){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,u._immediateFn((function(){var n=1===e._state?t.onFulfilled:t.onRejected;if(null!==n){var r;try{r=n(e._value)}catch(e){return void a(t.promise,e)}c(t.promise,r)}else(1===e._state?c:a)(t.promise,e._value)}))):e._deferreds.push(t)}function c(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof u)return e._state=3,e._value=t,void l(e);if("function"==typeof n)return void h((r=n,o=t,function(){r.apply(o,arguments)}),e)}e._state=1,e._value=t,l(e)}catch(t){a(e,t)}var r,o}function a(e,t){e._state=2,e._value=t,l(e)}function l(e){2===e._state&&0===e._deferreds.length&&u._immediateFn((function(){e._handled||u._unhandledRejectionFn(e._value)}));for(var t=0,n=e._deferreds.length;t<n;t++)f(e,e._deferreds[t]);e._deferreds=null}function s(e,t,n){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=n}function h(e,t){var n=!1;try{e((function(e){n||(n=!0,c(t,e))}),(function(e){n||(n=!0,a(t,e))}))}catch(e){if(n)return;n=!0,a(t,e)}}u.prototype.catch=function(e){return this.then(null,e)},u.prototype.then=function(e,t){var n=new this.constructor(i);return f(this,new s(e,t,n)),n},u.prototype.finally=function(e){var t=this.constructor;return this.then((function(n){return t.resolve(e()).then((function(){return n}))}),(function(n){return t.resolve(e()).then((function(){return t.reject(n)}))}))},u.all=function(e){return new u((function(t,n){if(!o(e))return n(new TypeError("Promise.all accepts an array"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var i=r.length;function u(e,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var f=o.then;if("function"==typeof f)return void f.call(o,(function(t){u(e,t)}),n)}r[e]=o,0==--i&&t(r)}catch(e){n(e)}}for(var f=0;f<r.length;f++)u(f,r[f])}))},u.allSettled=function(e){return new this((function(t,n){if(!e||void 0===e.length)return n(new TypeError(typeof e+" "+e+" is not iterable(cannot read property Symbol(Symbol.iterator))"));var r=Array.prototype.slice.call(e);if(0===r.length)return t([]);var o=r.length;function i(e,n){if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,(function(t){i(e,t)}),(function(n){r[e]={status:"rejected",reason:n},0==--o&&t(r)}))}r[e]={status:"fulfilled",value:n},0==--o&&t(r)}for(var u=0;u<r.length;u++)i(u,r[u])}))},u.resolve=function(e){return e&&"object"==typeof e&&e.constructor===u?e:new u((function(t){t(e)}))},u.reject=function(e){return new u((function(t,n){n(e)}))},u.race=function(e){return new u((function(t,n){if(!o(e))return n(new TypeError("Promise.race accepts an array"));for(var r=0,i=e.length;r<i;r++)u.resolve(e[r]).then(t,n)}))},u._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){r(e,0)},u._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};const d=u}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aEIsR0FDRixFRmtLQTlCLEVBQVFxQixRQUFVLFNBQVNhLEdBQ3pCLE9BQUlBLEdBQTBCLGlCQUFWQSxHQUFzQkEsRUFBTUssY0FBZ0J2QyxFQUN2RGtDLEVBR0YsSUFBSWxDLEdBQVEsU0FBU3FCLEdBQzFCQSxFQUFRYSxFQUNWLEdBQ0YsRUFFQWxDLEVBQVFtQixPQUFTLFNBQVNlLEdBQ3hCLE9BQU8sSUFBSWxDLEdBQVEsU0FBU3FCLEVBQVNGLEdBQ25DQSxFQUFPZSxFQUNULEdBQ0YsRUFFQWxDLEVBQVFvRCxLQUFPLFNBQVNWLEdBQ3RCLE9BQU8sSUFBSTFDLEdBQVEsU0FBU3FCLEVBQVNGLEdBQ25DLElBQUt4QixFQUFRK0MsR0FDWCxPQUFPdkIsRUFBTyxJQUFJaEIsVUFBVSxrQ0FHOUIsSUFBSyxJQUFJMkIsRUFBSSxFQUFHQyxFQUFNVyxFQUFJNUMsT0FBUWdDLEVBQUlDLEVBQUtELElBQ3pDOUIsRUFBUXFCLFFBQVFxQixFQUFJWixJQUFJTixLQUFLSCxFQUFTRixFQUUxQyxHQUNGLEVBR0FuQixFQUFRYSxhQUVtQixtQkFBakJ3QyxjQUNOLFNBQVNwRCxHQUVQb0QsYUFBYXBELEVBQ2YsR0FDRixTQUFTQSxHQUNQUixFQUFlUSxFQUFJLEVBQ3JCLEVBRUZELEVBQVE2QixzQkFBd0IsU0FBK0J5QixHQUN0QyxvQkFBWkMsU0FBMkJBLFNBQ3BDQSxRQUFRQyxLQUFLLHdDQUF5Q0YsRUFFMUQsRUFFQSxTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VhcjNlbmdpbmUtd2Vic2l0ZS8uLi8uLi9HQU1FUy1TSU1VTEFUT1JTLUZVTi9nZWFyM2VuZ2luZS9wbHVnaW5zL2czZS1jYW52YXMtMmQvbm9kZV9tb2R1bGVzL3Byb21pc2UtcG9seWZpbGwvc3JjL2luZGV4LmpzIiwid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi4vLi4vR0FNRVMtU0lNVUxBVE9SUy1GVU4vZ2VhcjNlbmdpbmUvcGx1Z2lucy9nM2UtY2FudmFzLTJkL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL3NyYy9maW5hbGx5LmpzIiwid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi4vLi4vR0FNRVMtU0lNVUxBVE9SUy1GVU4vZ2VhcjNlbmdpbmUvcGx1Z2lucy9nM2UtY2FudmFzLTJkL25vZGVfbW9kdWxlcy9wcm9taXNlLXBvbHlmaWxsL3NyYy9hbGxTZXR0bGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcm9taXNlRmluYWxseSBmcm9tICcuL2ZpbmFsbHknO1xuaW1wb3J0IGFsbFNldHRsZWQgZnJvbSAnLi9hbGxTZXR0bGVkJztcblxuLy8gU3RvcmUgc2V0VGltZW91dCByZWZlcmVuY2Ugc28gcHJvbWlzZS1wb2x5ZmlsbCB3aWxsIGJlIHVuYWZmZWN0ZWQgYnlcbi8vIG90aGVyIGNvZGUgbW9kaWZ5aW5nIHNldFRpbWVvdXQgKGxpa2Ugc2lub24udXNlRmFrZVRpbWVycygpKVxudmFyIHNldFRpbWVvdXRGdW5jID0gc2V0VGltZW91dDtcblxuZnVuY3Rpb24gaXNBcnJheSh4KSB7XG4gIHJldHVybiBCb29sZWFuKHggJiYgdHlwZW9mIHgubGVuZ3RoICE9PSAndW5kZWZpbmVkJyk7XG59XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG4vLyBQb2x5ZmlsbCBmb3IgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmRcbmZ1bmN0aW9uIGJpbmQoZm4sIHRoaXNBcmcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGZuLmFwcGx5KHRoaXNBcmcsIGFyZ3VtZW50cyk7XG4gIH07XG59XG5cbi8qKlxuICogQGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICovXG5mdW5jdGlvbiBQcm9taXNlKGZuKSB7XG4gIGlmICghKHRoaXMgaW5zdGFuY2VvZiBQcm9taXNlKSlcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdQcm9taXNlcyBtdXN0IGJlIGNvbnN0cnVjdGVkIHZpYSBuZXcnKTtcbiAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykgdGhyb3cgbmV3IFR5cGVFcnJvcignbm90IGEgZnVuY3Rpb24nKTtcbiAgLyoqIEB0eXBlIHshbnVtYmVyfSAqL1xuICB0aGlzLl9zdGF0ZSA9IDA7XG4gIC8qKiBAdHlwZSB7IWJvb2xlYW59ICovXG4gIHRoaXMuX2hhbmRsZWQgPSBmYWxzZTtcbiAgLyoqIEB0eXBlIHtQcm9taXNlfHVuZGVmaW5lZH0gKi9cbiAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFGdW5jdGlvbj59ICovXG4gIHRoaXMuX2RlZmVycmVkcyA9IFtdO1xuXG4gIGRvUmVzb2x2ZShmbiwgdGhpcyk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZShzZWxmLCBkZWZlcnJlZCkge1xuICB3aGlsZSAoc2VsZi5fc3RhdGUgPT09IDMpIHtcbiAgICBzZWxmID0gc2VsZi5fdmFsdWU7XG4gIH1cbiAgaWYgKHNlbGYuX3N0YXRlID09PSAwKSB7XG4gICAgc2VsZi5fZGVmZXJyZWRzLnB1c2goZGVmZXJyZWQpO1xuICAgIHJldHVybjtcbiAgfVxuICBzZWxmLl9oYW5kbGVkID0gdHJ1ZTtcbiAgUHJvbWlzZS5faW1tZWRpYXRlRm4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNiID0gc2VsZi5fc3RhdGUgPT09IDEgPyBkZWZlcnJlZC5vbkZ1bGZpbGxlZCA6IGRlZmVycmVkLm9uUmVqZWN0ZWQ7XG4gICAgaWYgKGNiID09PSBudWxsKSB7XG4gICAgICAoc2VsZi5fc3RhdGUgPT09IDEgPyByZXNvbHZlIDogcmVqZWN0KShkZWZlcnJlZC5wcm9taXNlLCBzZWxmLl92YWx1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciByZXQ7XG4gICAgdHJ5IHtcbiAgICAgIHJldCA9IGNiKHNlbGYuX3ZhbHVlKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZGVmZXJyZWQucHJvbWlzZSwgZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlc29sdmUoZGVmZXJyZWQucHJvbWlzZSwgcmV0KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc29sdmUoc2VsZiwgbmV3VmFsdWUpIHtcbiAgdHJ5IHtcbiAgICAvLyBQcm9taXNlIFJlc29sdXRpb24gUHJvY2VkdXJlOiBodHRwczovL2dpdGh1Yi5jb20vcHJvbWlzZXMtYXBsdXMvcHJvbWlzZXMtc3BlYyN0aGUtcHJvbWlzZS1yZXNvbHV0aW9uLXByb2NlZHVyZVxuICAgIGlmIChuZXdWYWx1ZSA9PT0gc2VsZilcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgcHJvbWlzZSBjYW5ub3QgYmUgcmVzb2x2ZWQgd2l0aCBpdHNlbGYuJyk7XG4gICAgaWYgKFxuICAgICAgbmV3VmFsdWUgJiZcbiAgICAgICh0eXBlb2YgbmV3VmFsdWUgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBuZXdWYWx1ZSA9PT0gJ2Z1bmN0aW9uJylcbiAgICApIHtcbiAgICAgIHZhciB0aGVuID0gbmV3VmFsdWUudGhlbjtcbiAgICAgIGlmIChuZXdWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgc2VsZi5fc3RhdGUgPSAzO1xuICAgICAgICBzZWxmLl92YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBmaW5hbGUoc2VsZik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZG9SZXNvbHZlKGJpbmQodGhlbiwgbmV3VmFsdWUpLCBzZWxmKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBzZWxmLl9zdGF0ZSA9IDE7XG4gICAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgICBmaW5hbGUoc2VsZik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3Qoc2VsZiwgZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVqZWN0KHNlbGYsIG5ld1ZhbHVlKSB7XG4gIHNlbGYuX3N0YXRlID0gMjtcbiAgc2VsZi5fdmFsdWUgPSBuZXdWYWx1ZTtcbiAgZmluYWxlKHNlbGYpO1xufVxuXG5mdW5jdGlvbiBmaW5hbGUoc2VsZikge1xuICBpZiAoc2VsZi5fc3RhdGUgPT09IDIgJiYgc2VsZi5fZGVmZXJyZWRzLmxlbmd0aCA9PT0gMCkge1xuICAgIFByb21pc2UuX2ltbWVkaWF0ZUZuKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKCFzZWxmLl9oYW5kbGVkKSB7XG4gICAgICAgIFByb21pc2UuX3VuaGFuZGxlZFJlamVjdGlvbkZuKHNlbGYuX3ZhbHVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxmLl9kZWZlcnJlZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBoYW5kbGUoc2VsZiwgc2VsZi5fZGVmZXJyZWRzW2ldKTtcbiAgfVxuICBzZWxmLl9kZWZlcnJlZHMgPSBudWxsO1xufVxuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9taXNlKSB7XG4gIHRoaXMub25GdWxmaWxsZWQgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IG51bGw7XG4gIHRoaXMub25SZWplY3RlZCA9IHR5cGVvZiBvblJlamVjdGVkID09PSAnZnVuY3Rpb24nID8gb25SZWplY3RlZCA6IG51bGw7XG4gIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG59XG5cbi8qKlxuICogVGFrZSBhIHBvdGVudGlhbGx5IG1pc2JlaGF2aW5nIHJlc29sdmVyIGZ1bmN0aW9uIGFuZCBtYWtlIHN1cmVcbiAqIG9uRnVsZmlsbGVkIGFuZCBvblJlamVjdGVkIGFyZSBvbmx5IGNhbGxlZCBvbmNlLlxuICpcbiAqIE1ha2VzIG5vIGd1YXJhbnRlZXMgYWJvdXQgYXN5bmNocm9ueS5cbiAqL1xuZnVuY3Rpb24gZG9SZXNvbHZlKGZuLCBzZWxmKSB7XG4gIHZhciBkb25lID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgZm4oXG4gICAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBpZiAoZG9uZSkgcmV0dXJuO1xuICAgICAgICBkb25lID0gdHJ1ZTtcbiAgICAgICAgcmVzb2x2ZShzZWxmLCB2YWx1ZSk7XG4gICAgICB9LFxuICAgICAgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICByZWplY3Qoc2VsZiwgcmVhc29uKTtcbiAgICAgIH1cbiAgICApO1xuICB9IGNhdGNoIChleCkge1xuICAgIGlmIChkb25lKSByZXR1cm47XG4gICAgZG9uZSA9IHRydWU7XG4gICAgcmVqZWN0KHNlbGYsIGV4KTtcbiAgfVxufVxuXG5Qcm9taXNlLnByb3RvdHlwZVsnY2F0Y2gnXSA9IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpIHtcbiAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAvLyBAdHMtaWdub3JlXG4gIHZhciBwcm9tID0gbmV3IHRoaXMuY29uc3RydWN0b3Iobm9vcCk7XG5cbiAgaGFuZGxlKHRoaXMsIG5ldyBIYW5kbGVyKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBwcm9tKSk7XG4gIHJldHVybiBwcm9tO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGVbJ2ZpbmFsbHknXSA9IHByb21pc2VGaW5hbGx5O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5hbGwgYWNjZXB0cyBhbiBhcnJheScpKTtcbiAgICB9XG5cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICB2YXIgdGhlbiA9IHZhbC50aGVuO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgICB2YWwsXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFyZ3NbaV0gPSB2YWw7XG4gICAgICAgIGlmICgtLXJlbWFpbmluZyA9PT0gMCkge1xuICAgICAgICAgIHJlc29sdmUoYXJncyk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgIHJlamVjdChleCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICByZXMoaSwgYXJnc1tpXSk7XG4gICAgfVxuICB9KTtcbn07XG5cblByb21pc2UuYWxsU2V0dGxlZCA9IGFsbFNldHRsZWQ7XG5cblByb21pc2UucmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlLmNvbnN0cnVjdG9yID09PSBQcm9taXNlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUpIHtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfSk7XG59O1xuXG5Qcm9taXNlLnJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICByZWplY3QodmFsdWUpO1xuICB9KTtcbn07XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uKGFycikge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgaWYgKCFpc0FycmF5KGFycikpIHtcbiAgICAgIHJldHVybiByZWplY3QobmV3IFR5cGVFcnJvcignUHJvbWlzZS5yYWNlIGFjY2VwdHMgYW4gYXJyYXknKSk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGFyci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKGFycltpXSkudGhlbihyZXNvbHZlLCByZWplY3QpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vLyBVc2UgcG9seWZpbGwgZm9yIHNldEltbWVkaWF0ZSBmb3IgcGVyZm9ybWFuY2UgZ2FpbnNcblByb21pc2UuX2ltbWVkaWF0ZUZuID1cbiAgLy8gQHRzLWlnbm9yZVxuICAodHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gJ2Z1bmN0aW9uJyAmJlxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICBzZXRJbW1lZGlhdGUoZm4pO1xuICAgIH0pIHx8XG4gIGZ1bmN0aW9uKGZuKSB7XG4gICAgc2V0VGltZW91dEZ1bmMoZm4sIDApO1xuICB9O1xuXG5Qcm9taXNlLl91bmhhbmRsZWRSZWplY3Rpb25GbiA9IGZ1bmN0aW9uIF91bmhhbmRsZWRSZWplY3Rpb25GbihlcnIpIHtcbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlKSB7XG4gICAgY29uc29sZS53YXJuKCdQb3NzaWJsZSBVbmhhbmRsZWQgUHJvbWlzZSBSZWplY3Rpb246JywgZXJyKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1jb25zb2xlXG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7XG4iLCIvKipcbiAqIEB0aGlzIHtQcm9taXNlfVxuICovXG5mdW5jdGlvbiBmaW5hbGx5Q29uc3RydWN0b3IoY2FsbGJhY2spIHtcbiAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlc29sdmUoY2FsbGJhY2soKSkudGhlbihmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yLnJlamVjdChyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmaW5hbGx5Q29uc3RydWN0b3I7XG4iLCJmdW5jdGlvbiBhbGxTZXR0bGVkKGFycikge1xuICB2YXIgUCA9IHRoaXM7XG4gIHJldHVybiBuZXcgUChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoIShhcnIgJiYgdHlwZW9mIGFyci5sZW5ndGggIT09ICd1bmRlZmluZWQnKSkge1xuICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgbmV3IFR5cGVFcnJvcihcbiAgICAgICAgICB0eXBlb2YgYXJyICtcbiAgICAgICAgICAgICcgJyArXG4gICAgICAgICAgICBhcnIgK1xuICAgICAgICAgICAgJyBpcyBub3QgaXRlcmFibGUoY2Fubm90IHJlYWQgcHJvcGVydHkgU3ltYm9sKFN5bWJvbC5pdGVyYXRvcikpJ1xuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycik7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID09PSAwKSByZXR1cm4gcmVzb2x2ZShbXSk7XG4gICAgdmFyIHJlbWFpbmluZyA9IGFyZ3MubGVuZ3RoO1xuXG4gICAgZnVuY3Rpb24gcmVzKGksIHZhbCkge1xuICAgICAgaWYgKHZhbCAmJiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgdmFyIHRoZW4gPSB2YWwudGhlbjtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgdGhlbi5jYWxsKFxuICAgICAgICAgICAgdmFsLFxuICAgICAgICAgICAgZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICAgIHJlcyhpLCB2YWwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgYXJnc1tpXSA9IHsgc3RhdHVzOiAncmVqZWN0ZWQnLCByZWFzb246IGUgfTtcbiAgICAgICAgICAgICAgaWYgKC0tcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBhcmdzW2ldID0geyBzdGF0dXM6ICdmdWxmaWxsZWQnLCB2YWx1ZTogdmFsIH07XG4gICAgICBpZiAoLS1yZW1haW5pbmcgPT09IDApIHtcbiAgICAgICAgcmVzb2x2ZShhcmdzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlcyhpLCBhcmdzW2ldKTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBhbGxTZXR0bGVkO1xuIl0sIm5hbWVzIjpbInNldFRpbWVvdXRGdW5jIiwic2V0VGltZW91dCIsImlzQXJyYXkiLCJ4IiwiQm9vbGVhbiIsImxlbmd0aCIsIm5vb3AiLCJQcm9taXNlIiwiZm4iLCJ0aGlzIiwiVHlwZUVycm9yIiwiX3N0YXRlIiwiX2hhbmRsZWQiLCJfdmFsdWUiLCJ1bmRlZmluZWQiLCJfZGVmZXJyZWRzIiwiZG9SZXNvbHZlIiwiaGFuZGxlIiwic2VsZiIsImRlZmVycmVkIiwiX2ltbWVkaWF0ZUZuIiwiY2IiLCJvbkZ1bGZpbGxlZCIsIm9uUmVqZWN0ZWQiLCJyZXQiLCJlIiwicmVqZWN0IiwicHJvbWlzZSIsInJlc29sdmUiLCJwdXNoIiwibmV3VmFsdWUiLCJ0aGVuIiwiZmluYWxlIiwidGhpc0FyZyIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3VuaGFuZGxlZFJlamVjdGlvbkZuIiwiaSIsImxlbiIsIkhhbmRsZXIiLCJkb25lIiwidmFsdWUiLCJyZWFzb24iLCJleCIsInByb3RvdHlwZSIsInByb20iLCJjb25zdHJ1Y3RvciIsImNhbGxiYWNrIiwiYWxsIiwiYXJyIiwiYXJncyIsIkFycmF5Iiwic2xpY2UiLCJjYWxsIiwicmVtYWluaW5nIiwicmVzIiwidmFsIiwiYWxsU2V0dGxlZCIsInN0YXR1cyIsInJhY2UiLCJzZXRJbW1lZGlhdGUiLCJlcnIiLCJjb25zb2xlIiwid2FybiJdLCJzb3VyY2VSb290IjoiIn0=