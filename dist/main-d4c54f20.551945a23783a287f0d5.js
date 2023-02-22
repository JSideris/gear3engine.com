"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[7634],{3723:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=i(5412),a=i(565),l=s(i(2803));class o extends n.GameInstancePlugin{constructor(){super(),this.renderStats=new l.default,this.giFixedUpateStats=new l.default,this.giCycleStats=new l.default,this.memoryStats=new l.default,this.dependencies=[a.GameClientPlugin],this.container=document.createElement("div"),this.container.style.cssText="opacity:0.75;position:fixed;top:0px;left:0px;",document.body.appendChild(this.container);let e=0;this.renderStats.showPanel(0),this.renderStats.domElement.style.cssText=`position:absolute;top:0px;left:${e}px;cursor:help;`,this.renderStats.domElement.title="Rendering FPS.",this.container.appendChild(this.renderStats.domElement),this.renderStats.begin(),e+=80,this.giFixedUpateStats.showPanel(0),this.giFixedUpateStats.domElement.style.cssText=`position:absolute;top:0px;left:${e}px;cursor:help;`,this.container.appendChild(this.giFixedUpateStats.domElement),this.giFixedUpateStats.domElement.title="Fixed update FPS.",this.giFixedUpateStats.begin(),e+=80,this.giCycleStats.showPanel(1),this.giCycleStats.domElement.style.cssText=`position:absolute;top:0px;left:${e}px;cursor:help;`,this.container.appendChild(this.giCycleStats.domElement),this.giCycleStats.domElement.title="Fixed update length.",e+=80,this.memoryStats.showPanel(2),this.memoryStats.domElement.style.cssText=`position:absolute;top:0px;left:${e}px;cursor:help;`,this.container.appendChild(this.memoryStats.domElement),this.memoryStats.domElement.title="Memory usage.",e+=80}initialize(){this.gameInstance.on("renderUpdate",(()=>{this.renderStats.end(),this.renderStats.begin()})),this.gameInstance.on("beforeFixedUpdate",(()=>{this.giCycleStats.begin()})),this.gameInstance.on("afterFixedUpdate",(()=>{this.giFixedUpateStats.end(),this.giFixedUpateStats.begin(),this.giCycleStats.end(),this.memoryStats.end()}))}destroy(){}}t.default=o},221:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ClientDebuggerPlugin=void 0;var n=i(3723);Object.defineProperty(t,"ClientDebuggerPlugin",{enumerable:!0,get:function(){return s(n).default}})}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0MsWUFBWSxFQUFNQyxJQUFLLFdBQWMsT0FBT3pDLEVBQWdCdUMsR0FBMEJ2QixPQUFTLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4uLy4uL0dBTUVTLVNJTVVMQVRPUlMtRlVOL2dlYXIzZW5naW5lL3BsdWdpbnMvZzNlLWNsaWVudC1kZWJ1Z2dlci9idWlsZC9jbGllbnQtZGVidWdnZXItcGx1Z2luLmpzIiwid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi4vLi4vR0FNRVMtU0lNVUxBVE9SUy1GVU4vZ2VhcjNlbmdpbmUvcGx1Z2lucy9nM2UtY2xpZW50LWRlYnVnZ2VyL2J1aWxkL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IGdlYXIzZW5naW5lXzEgPSByZXF1aXJlKFwiZ2VhcjNlbmdpbmVcIik7XHJcbmNvbnN0IGczZV9jbGllbnRfMSA9IHJlcXVpcmUoXCJnM2UtY2xpZW50XCIpO1xyXG5jb25zdCBzdGF0c19qc18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJzdGF0cy5qc1wiKSk7XHJcbmNsYXNzIENsaWVudERlYnVnZ2VyUGx1Z2luIGV4dGVuZHMgZ2VhcjNlbmdpbmVfMS5HYW1lSW5zdGFuY2VQbHVnaW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlbmRlclN0YXRzID0gbmV3IHN0YXRzX2pzXzEuZGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMuZ2lGaXhlZFVwYXRlU3RhdHMgPSBuZXcgc3RhdHNfanNfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5naUN5Y2xlU3RhdHMgPSBuZXcgc3RhdHNfanNfMS5kZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5tZW1vcnlTdGF0cyA9IG5ldyBzdGF0c19qc18xLmRlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcyA9IFtnM2VfY2xpZW50XzEuR2FtZUNsaWVudFBsdWdpbl07XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBgb3BhY2l0eTowLjc1O3Bvc2l0aW9uOmZpeGVkO3RvcDowcHg7bGVmdDowcHg7YDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuY29udGFpbmVyKTtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICB0aGlzLnJlbmRlclN0YXRzLnNob3dQYW5lbCgwKTtcclxuICAgICAgICB0aGlzLnJlbmRlclN0YXRzLmRvbUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6JHtvZmZzZXR9cHg7Y3Vyc29yOmhlbHA7YDtcclxuICAgICAgICB0aGlzLnJlbmRlclN0YXRzLmRvbUVsZW1lbnQudGl0bGUgPSBcIlJlbmRlcmluZyBGUFMuXCI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXJTdGF0cy5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLnJlbmRlclN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgb2Zmc2V0ICs9IDgwO1xyXG4gICAgICAgIHRoaXMuZ2lGaXhlZFVwYXRlU3RhdHMuc2hvd1BhbmVsKDApO1xyXG4gICAgICAgIHRoaXMuZ2lGaXhlZFVwYXRlU3RhdHMuZG9tRWxlbWVudC5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOmFic29sdXRlO3RvcDowcHg7bGVmdDoke29mZnNldH1weDtjdXJzb3I6aGVscDtgO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZ2lGaXhlZFVwYXRlU3RhdHMuZG9tRWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5naUZpeGVkVXBhdGVTdGF0cy5kb21FbGVtZW50LnRpdGxlID0gXCJGaXhlZCB1cGRhdGUgRlBTLlwiO1xyXG4gICAgICAgIHRoaXMuZ2lGaXhlZFVwYXRlU3RhdHMuYmVnaW4oKTtcclxuICAgICAgICBvZmZzZXQgKz0gODA7XHJcbiAgICAgICAgdGhpcy5naUN5Y2xlU3RhdHMuc2hvd1BhbmVsKDEpO1xyXG4gICAgICAgIHRoaXMuZ2lDeWNsZVN0YXRzLmRvbUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6JHtvZmZzZXR9cHg7Y3Vyc29yOmhlbHA7YDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmdpQ3ljbGVTdGF0cy5kb21FbGVtZW50KTtcclxuICAgICAgICB0aGlzLmdpQ3ljbGVTdGF0cy5kb21FbGVtZW50LnRpdGxlID0gXCJGaXhlZCB1cGRhdGUgbGVuZ3RoLlwiO1xyXG4gICAgICAgIG9mZnNldCArPSA4MDtcclxuICAgICAgICB0aGlzLm1lbW9yeVN0YXRzLnNob3dQYW5lbCgyKTtcclxuICAgICAgICB0aGlzLm1lbW9yeVN0YXRzLmRvbUVsZW1lbnQuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MHB4O2xlZnQ6JHtvZmZzZXR9cHg7Y3Vyc29yOmhlbHA7YDtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm1lbW9yeVN0YXRzLmRvbUVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMubWVtb3J5U3RhdHMuZG9tRWxlbWVudC50aXRsZSA9IFwiTWVtb3J5IHVzYWdlLlwiO1xyXG4gICAgICAgIG9mZnNldCArPSA4MDtcclxuICAgIH1cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5zdGFuY2Uub24oXCJyZW5kZXJVcGRhdGVcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclN0YXRzLmVuZCgpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5zdGFuY2Uub24oXCJiZWZvcmVGaXhlZFVwZGF0ZVwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2lDeWNsZVN0YXRzLmJlZ2luKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nYW1lSW5zdGFuY2Uub24oXCJhZnRlckZpeGVkVXBkYXRlXCIsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5naUZpeGVkVXBhdGVTdGF0cy5lbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5naUZpeGVkVXBhdGVTdGF0cy5iZWdpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmdpQ3ljbGVTdGF0cy5lbmQoKTtcclxuICAgICAgICAgICAgdGhpcy5tZW1vcnlTdGF0cy5lbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3koKSB7IH1cclxufVxyXG5leHBvcnRzLmRlZmF1bHQgPSBDbGllbnREZWJ1Z2dlclBsdWdpbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xpZW50LWRlYnVnZ2VyLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkNsaWVudERlYnVnZ2VyUGx1Z2luID0gdm9pZCAwO1xyXG52YXIgY2xpZW50X2RlYnVnZ2VyX3BsdWdpbl8xID0gcmVxdWlyZShcIi4vY2xpZW50LWRlYnVnZ2VyLXBsdWdpblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQ2xpZW50RGVidWdnZXJQbHVnaW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9faW1wb3J0RGVmYXVsdChjbGllbnRfZGVidWdnZXJfcGx1Z2luXzEpLmRlZmF1bHQ7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCJdLCJuYW1lcyI6WyJfX2ltcG9ydERlZmF1bHQiLCJ0aGlzIiwibW9kIiwiX19lc01vZHVsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiZ2VhcjNlbmdpbmVfMSIsImczZV9jbGllbnRfMSIsInN0YXRzX2pzXzEiLCJDbGllbnREZWJ1Z2dlclBsdWdpbiIsIkdhbWVJbnN0YW5jZVBsdWdpbiIsImNvbnN0cnVjdG9yIiwic3VwZXIiLCJyZW5kZXJTdGF0cyIsImRlZmF1bHQiLCJnaUZpeGVkVXBhdGVTdGF0cyIsImdpQ3ljbGVTdGF0cyIsIm1lbW9yeVN0YXRzIiwiZGVwZW5kZW5jaWVzIiwiR2FtZUNsaWVudFBsdWdpbiIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsInN0eWxlIiwiY3NzVGV4dCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsIm9mZnNldCIsInNob3dQYW5lbCIsImRvbUVsZW1lbnQiLCJ0aXRsZSIsImJlZ2luIiwiaW5pdGlhbGl6ZSIsImdhbWVJbnN0YW5jZSIsIm9uIiwiZW5kIiwiZGVzdHJveSIsImNsaWVudF9kZWJ1Z2dlcl9wbHVnaW5fMSIsImVudW1lcmFibGUiLCJnZXQiXSwic291cmNlUm9vdCI6IiJ9