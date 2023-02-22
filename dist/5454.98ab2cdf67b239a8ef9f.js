/*! For license information please see 5454.98ab2cdf67b239a8ef9f.js.LICENSE.txt */
"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[5454],{5454:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var i=r(2514),n=r(1234),o=r(1784),s=function(t,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},s(t,e)},u=function(t){function e(e,r){void 0===r&&(r=!0);var n=t.call(this,e[0]instanceof i.Texture?e[0]:e[0].texture)||this;return n._textures=null,n._durations=null,n._autoUpdate=r,n._isConnectedToTicker=!1,n.animationSpeed=1,n.loop=!0,n.updateAnchor=!1,n.onComplete=null,n.onFrameChange=null,n.onLoop=null,n._currentTime=0,n._playing=!1,n._previousFrame=null,n.textures=e,n}return function(t,e){function r(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}(e,t),e.prototype.stop=function(){this._playing&&(this._playing=!1,this._autoUpdate&&this._isConnectedToTicker&&(o.Ticker.shared.remove(this.update,this),this._isConnectedToTicker=!1))},e.prototype.play=function(){this._playing||(this._playing=!0,this._autoUpdate&&!this._isConnectedToTicker&&(o.Ticker.shared.add(this.update,this,o.UPDATE_PRIORITY.HIGH),this._isConnectedToTicker=!0))},e.prototype.gotoAndStop=function(t){this.stop();var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture()},e.prototype.gotoAndPlay=function(t){var e=this.currentFrame;this._currentTime=t,e!==this.currentFrame&&this.updateTexture(),this.play()},e.prototype.update=function(t){if(this._playing){var e=this.animationSpeed*t,r=this.currentFrame;if(null!==this._durations){var i=this._currentTime%1*this._durations[this.currentFrame];for(i+=e/60*1e3;i<0;)this._currentTime--,i+=this._durations[this.currentFrame];var n=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);i>=this._durations[this.currentFrame];)i-=this._durations[this.currentFrame]*n,this._currentTime+=n;this._currentTime+=i/this._durations[this.currentFrame]}else this._currentTime+=e;this._currentTime<0&&!this.loop?(this.gotoAndStop(0),this.onComplete&&this.onComplete()):this._currentTime>=this._textures.length&&!this.loop?(this.gotoAndStop(this._textures.length-1),this.onComplete&&this.onComplete()):r!==this.currentFrame&&(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<r||this.animationSpeed<0&&this.currentFrame>r)&&this.onLoop(),this.updateTexture())}},e.prototype.updateTexture=function(){var t=this.currentFrame;this._previousFrame!==t&&(this._previousFrame=t,this._texture=this._textures[t],this._textureID=-1,this._textureTrimmedID=-1,this._cachedTint=16777215,this.uvs=this._texture._uvs.uvsFloat32,this.updateAnchor&&this._anchor.copyFrom(this._texture.defaultAnchor),this.onFrameChange&&this.onFrameChange(this.currentFrame))},e.prototype.destroy=function(e){this.stop(),t.prototype.destroy.call(this,e),this.onComplete=null,this.onFrameChange=null,this.onLoop=null},e.fromFrames=function(t){for(var r=[],n=0;n<t.length;++n)r.push(i.Texture.from(t[n]));return new e(r)},e.fromImages=function(t){for(var r=[],n=0;n<t.length;++n)r.push(i.Texture.from(t[n]));return new e(r)},Object.defineProperty(e.prototype,"totalFrames",{get:function(){return this._textures.length},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"textures",{get:function(){return this._textures},set:function(t){if(t[0]instanceof i.Texture)this._textures=t,this._durations=null;else{this._textures=[],this._durations=[];for(var e=0;e<t.length;e++)this._textures.push(t[e].texture),this._durations.push(t[e].time)}this._previousFrame=null,this.gotoAndStop(0),this.updateTexture()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"currentFrame",{get:function(){var t=Math.floor(this._currentTime)%this._textures.length;return t<0&&(t+=this._textures.length),t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"playing",{get:function(){return this._playing},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"autoUpdate",{get:function(){return this._autoUpdate},set:function(t){t!==this._autoUpdate&&(this._autoUpdate=t,!this._autoUpdate&&this._isConnectedToTicker?(o.Ticker.shared.remove(this.update,this),this._isConnectedToTicker=!1):this._autoUpdate&&!this._isConnectedToTicker&&this._playing&&(o.Ticker.shared.add(this.update,this),this._isConnectedToTicker=!0))},enumerable:!1,configurable:!0}),e}(n.Sprite);e.AnimatedSprite=u}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBN1FtQyxDQTZRakNWLEVBQU9tRixRQUVUdEYsRUFBUWEsZUFBaUJBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VhcjNlbmdpbmUtd2Vic2l0ZS8uLi8uLi9HQU1FUy1TSU1VTEFUT1JTLUZVTi9nZWFyM2VuZ2luZS9wbHVnaW5zL2czZS1jYW52YXMtMmQvbm9kZV9tb2R1bGVzL0BwaXhpL3Nwcml0ZS1hbmltYXRlZC9kaXN0L2Nqcy9zcHJpdGUtYW5pbWF0ZWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAcGl4aS9zcHJpdGUtYW5pbWF0ZWQgLSB2Ni40LjJcbiAqIENvbXBpbGVkIFRodSwgMDIgSnVuIDIwMjIgMTU6Mzk6MjYgVVRDXG4gKlxuICogQHBpeGkvc3ByaXRlLWFuaW1hdGVkIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BwaXhpL2NvcmUnKTtcbnZhciBzcHJpdGUgPSByZXF1aXJlKCdAcGl4aS9zcHJpdGUnKTtcbnZhciB0aWNrZXIgPSByZXF1aXJlKCdAcGl4aS90aWNrZXInKTtcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcbnZhciBleHRlbmRTdGF0aWNzID0gZnVuY3Rpb24oZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fFxyXG4gICAgICAgICh7IF9fcHJvdG9fXzogW10gfSBpbnN0YW5jZW9mIEFycmF5ICYmIGZ1bmN0aW9uIChkLCBiKSB7IGQuX19wcm90b19fID0gYjsgfSkgfHxcclxuICAgICAgICBmdW5jdGlvbiAoZCwgYikgeyBmb3IgKHZhciBwIGluIGIpIHsgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIHsgZFtwXSA9IGJbcF07IH0gfSB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XG5cbi8qKlxuICogQW4gQW5pbWF0ZWRTcHJpdGUgaXMgYSBzaW1wbGUgd2F5IHRvIGRpc3BsYXkgYW4gYW5pbWF0aW9uIGRlcGljdGVkIGJ5IGEgbGlzdCBvZiB0ZXh0dXJlcy5cbiAqXG4gKiBgYGBqc1xuICogbGV0IGFsaWVuSW1hZ2VzID0gW1wiaW1hZ2Vfc2VxdWVuY2VfMDEucG5nXCIsXCJpbWFnZV9zZXF1ZW5jZV8wMi5wbmdcIixcImltYWdlX3NlcXVlbmNlXzAzLnBuZ1wiLFwiaW1hZ2Vfc2VxdWVuY2VfMDQucG5nXCJdO1xuICogbGV0IHRleHR1cmVBcnJheSA9IFtdO1xuICpcbiAqIGZvciAobGV0IGk9MDsgaSA8IDQ7IGkrKylcbiAqIHtcbiAqICAgICAgbGV0IHRleHR1cmUgPSBQSVhJLlRleHR1cmUuZnJvbShhbGllbkltYWdlc1tpXSk7XG4gKiAgICAgIHRleHR1cmVBcnJheS5wdXNoKHRleHR1cmUpO1xuICogfTtcbiAqXG4gKiBsZXQgYW5pbWF0ZWRTcHJpdGUgPSBuZXcgUElYSS5BbmltYXRlZFNwcml0ZSh0ZXh0dXJlQXJyYXkpO1xuICogYGBgXG4gKlxuICogVGhlIG1vcmUgZWZmaWNpZW50IGFuZCBzaW1wbGVyIHdheSB0byBjcmVhdGUgYW4gYW5pbWF0ZWQgc3ByaXRlIGlzIHVzaW5nIGEge0BsaW5rIFBJWEkuU3ByaXRlc2hlZXR9XG4gKiBjb250YWluaW5nIHRoZSBhbmltYXRpb24gZGVmaW5pdGlvbnM6XG4gKlxuICogYGBganNcbiAqIFBJWEkuTG9hZGVyLnNoYXJlZC5hZGQoXCJhc3NldHMvc3ByaXRlc2hlZXQuanNvblwiKS5sb2FkKHNldHVwKTtcbiAqXG4gKiBmdW5jdGlvbiBzZXR1cCgpIHtcbiAqICAgbGV0IHNoZWV0ID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tcImFzc2V0cy9zcHJpdGVzaGVldC5qc29uXCJdLnNwcml0ZXNoZWV0O1xuICogICBhbmltYXRlZFNwcml0ZSA9IG5ldyBQSVhJLkFuaW1hdGVkU3ByaXRlKHNoZWV0LmFuaW1hdGlvbnNbXCJpbWFnZV9zZXF1ZW5jZVwiXSk7XG4gKiAgIC4uLlxuICogfVxuICogYGBgXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG52YXIgQW5pbWF0ZWRTcHJpdGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoX3N1cGVyKSB7XG4gICAgX19leHRlbmRzKEFuaW1hdGVkU3ByaXRlLCBfc3VwZXIpO1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB0ZXh0dXJlcyAtIEFuIGFycmF5IG9mIHtAbGluayBQSVhJLlRleHR1cmV9IG9yIGZyYW1lXG4gICAgICogIG9iamVjdHMgdGhhdCBtYWtlIHVwIHRoZSBhbmltYXRpb24uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYXV0b1VwZGF0ZT10cnVlXSAtIFdoZXRoZXIgdG8gdXNlIFBJWEkuVGlja2VyLnNoYXJlZCB0byBhdXRvIHVwZGF0ZSBhbmltYXRpb24gdGltZS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBBbmltYXRlZFNwcml0ZSh0ZXh0dXJlcywgYXV0b1VwZGF0ZSkge1xuICAgICAgICBpZiAoYXV0b1VwZGF0ZSA9PT0gdm9pZCAwKSB7IGF1dG9VcGRhdGUgPSB0cnVlOyB9XG4gICAgICAgIHZhciBfdGhpcyA9IF9zdXBlci5jYWxsKHRoaXMsIHRleHR1cmVzWzBdIGluc3RhbmNlb2YgY29yZS5UZXh0dXJlID8gdGV4dHVyZXNbMF0gOiB0ZXh0dXJlc1swXS50ZXh0dXJlKSB8fCB0aGlzO1xuICAgICAgICBfdGhpcy5fdGV4dHVyZXMgPSBudWxsO1xuICAgICAgICBfdGhpcy5fZHVyYXRpb25zID0gbnVsbDtcbiAgICAgICAgX3RoaXMuX2F1dG9VcGRhdGUgPSBhdXRvVXBkYXRlO1xuICAgICAgICBfdGhpcy5faXNDb25uZWN0ZWRUb1RpY2tlciA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5hbmltYXRpb25TcGVlZCA9IDE7XG4gICAgICAgIF90aGlzLmxvb3AgPSB0cnVlO1xuICAgICAgICBfdGhpcy51cGRhdGVBbmNob3IgPSBmYWxzZTtcbiAgICAgICAgX3RoaXMub25Db21wbGV0ZSA9IG51bGw7XG4gICAgICAgIF90aGlzLm9uRnJhbWVDaGFuZ2UgPSBudWxsO1xuICAgICAgICBfdGhpcy5vbkxvb3AgPSBudWxsO1xuICAgICAgICBfdGhpcy5fY3VycmVudFRpbWUgPSAwO1xuICAgICAgICBfdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICBfdGhpcy5fcHJldmlvdXNGcmFtZSA9IG51bGw7XG4gICAgICAgIF90aGlzLnRleHR1cmVzID0gdGV4dHVyZXM7XG4gICAgICAgIHJldHVybiBfdGhpcztcbiAgICB9XG4gICAgLyoqIFN0b3BzIHRoZSBBbmltYXRlZFNwcml0ZS4gKi9cbiAgICBBbmltYXRlZFNwcml0ZS5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b1VwZGF0ZSAmJiB0aGlzLl9pc0Nvbm5lY3RlZFRvVGlja2VyKSB7XG4gICAgICAgICAgICB0aWNrZXIuVGlja2VyLnNoYXJlZC5yZW1vdmUodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0ZWRUb1RpY2tlciA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogUGxheXMgdGhlIEFuaW1hdGVkU3ByaXRlLiAqL1xuICAgIEFuaW1hdGVkU3ByaXRlLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fcGxheWluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3BsYXlpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5fYXV0b1VwZGF0ZSAmJiAhdGhpcy5faXNDb25uZWN0ZWRUb1RpY2tlcikge1xuICAgICAgICAgICAgdGlja2VyLlRpY2tlci5zaGFyZWQuYWRkKHRoaXMudXBkYXRlLCB0aGlzLCB0aWNrZXIuVVBEQVRFX1BSSU9SSVRZLkhJR0gpO1xuICAgICAgICAgICAgdGhpcy5faXNDb25uZWN0ZWRUb1RpY2tlciA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFN0b3BzIHRoZSBBbmltYXRlZFNwcml0ZSBhbmQgZ29lcyB0byBhIHNwZWNpZmljIGZyYW1lLlxuICAgICAqIEBwYXJhbSBmcmFtZU51bWJlciAtIEZyYW1lIGluZGV4IHRvIHN0b3AgYXQuXG4gICAgICovXG4gICAgQW5pbWF0ZWRTcHJpdGUucHJvdG90eXBlLmdvdG9BbmRTdG9wID0gZnVuY3Rpb24gKGZyYW1lTnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB2YXIgcHJldmlvdXNGcmFtZSA9IHRoaXMuY3VycmVudEZyYW1lO1xuICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IGZyYW1lTnVtYmVyO1xuICAgICAgICBpZiAocHJldmlvdXNGcmFtZSAhPT0gdGhpcy5jdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBHb2VzIHRvIGEgc3BlY2lmaWMgZnJhbWUgYW5kIGJlZ2lucyBwbGF5aW5nIHRoZSBBbmltYXRlZFNwcml0ZS5cbiAgICAgKiBAcGFyYW0gZnJhbWVOdW1iZXIgLSBGcmFtZSBpbmRleCB0byBzdGFydCBhdC5cbiAgICAgKi9cbiAgICBBbmltYXRlZFNwcml0ZS5wcm90b3R5cGUuZ290b0FuZFBsYXkgPSBmdW5jdGlvbiAoZnJhbWVOdW1iZXIpIHtcbiAgICAgICAgdmFyIHByZXZpb3VzRnJhbWUgPSB0aGlzLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgPSBmcmFtZU51bWJlcjtcbiAgICAgICAgaWYgKHByZXZpb3VzRnJhbWUgIT09IHRoaXMuY3VycmVudEZyYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgdGhlIG9iamVjdCB0cmFuc2Zvcm0gZm9yIHJlbmRlcmluZy5cbiAgICAgKiBAcGFyYW0gZGVsdGFUaW1lIC0gVGltZSBzaW5jZSBsYXN0IHRpY2suXG4gICAgICovXG4gICAgQW5pbWF0ZWRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkZWx0YVRpbWUpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9wbGF5aW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGVsYXBzZWQgPSB0aGlzLmFuaW1hdGlvblNwZWVkICogZGVsdGFUaW1lO1xuICAgICAgICB2YXIgcHJldmlvdXNGcmFtZSA9IHRoaXMuY3VycmVudEZyYW1lO1xuICAgICAgICBpZiAodGhpcy5fZHVyYXRpb25zICE9PSBudWxsKSB7XG4gICAgICAgICAgICB2YXIgbGFnID0gdGhpcy5fY3VycmVudFRpbWUgJSAxICogdGhpcy5fZHVyYXRpb25zW3RoaXMuY3VycmVudEZyYW1lXTtcbiAgICAgICAgICAgIGxhZyArPSBlbGFwc2VkIC8gNjAgKiAxMDAwO1xuICAgICAgICAgICAgd2hpbGUgKGxhZyA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZS0tO1xuICAgICAgICAgICAgICAgIGxhZyArPSB0aGlzLl9kdXJhdGlvbnNbdGhpcy5jdXJyZW50RnJhbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHNpZ24gPSBNYXRoLnNpZ24odGhpcy5hbmltYXRpb25TcGVlZCAqIGRlbHRhVGltZSk7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSA9IE1hdGguZmxvb3IodGhpcy5fY3VycmVudFRpbWUpO1xuICAgICAgICAgICAgd2hpbGUgKGxhZyA+PSB0aGlzLl9kdXJhdGlvbnNbdGhpcy5jdXJyZW50RnJhbWVdKSB7XG4gICAgICAgICAgICAgICAgbGFnIC09IHRoaXMuX2R1cmF0aW9uc1t0aGlzLmN1cnJlbnRGcmFtZV0gKiBzaWduO1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRUaW1lICs9IHNpZ247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50VGltZSArPSBsYWcgLyB0aGlzLl9kdXJhdGlvbnNbdGhpcy5jdXJyZW50RnJhbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudFRpbWUgKz0gZWxhcHNlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY3VycmVudFRpbWUgPCAwICYmICF0aGlzLmxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy5fY3VycmVudFRpbWUgPj0gdGhpcy5fdGV4dHVyZXMubGVuZ3RoICYmICF0aGlzLmxvb3ApIHtcbiAgICAgICAgICAgIHRoaXMuZ290b0FuZFN0b3AodGhpcy5fdGV4dHVyZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICBpZiAodGhpcy5vbkNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJldmlvdXNGcmFtZSAhPT0gdGhpcy5jdXJyZW50RnJhbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmxvb3AgJiYgdGhpcy5vbkxvb3ApIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hbmltYXRpb25TcGVlZCA+IDAgJiYgdGhpcy5jdXJyZW50RnJhbWUgPCBwcmV2aW91c0ZyYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb29wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuYW5pbWF0aW9uU3BlZWQgPCAwICYmIHRoaXMuY3VycmVudEZyYW1lID4gcHJldmlvdXNGcmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uTG9vcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGV4dHVyZSgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKiogVXBkYXRlcyB0aGUgZGlzcGxheWVkIHRleHR1cmUgdG8gbWF0Y2ggdGhlIGN1cnJlbnQgZnJhbWUgaW5kZXguICovXG4gICAgQW5pbWF0ZWRTcHJpdGUucHJvdG90eXBlLnVwZGF0ZVRleHR1cmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjdXJyZW50RnJhbWUgPSB0aGlzLmN1cnJlbnRGcmFtZTtcbiAgICAgICAgaWYgKHRoaXMuX3ByZXZpb3VzRnJhbWUgPT09IGN1cnJlbnRGcmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3ByZXZpb3VzRnJhbWUgPSBjdXJyZW50RnJhbWU7XG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSB0aGlzLl90ZXh0dXJlc1tjdXJyZW50RnJhbWVdO1xuICAgICAgICB0aGlzLl90ZXh0dXJlSUQgPSAtMTtcbiAgICAgICAgdGhpcy5fdGV4dHVyZVRyaW1tZWRJRCA9IC0xO1xuICAgICAgICB0aGlzLl9jYWNoZWRUaW50ID0gMHhGRkZGRkY7XG4gICAgICAgIHRoaXMudXZzID0gdGhpcy5fdGV4dHVyZS5fdXZzLnV2c0Zsb2F0MzI7XG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZUFuY2hvcikge1xuICAgICAgICAgICAgdGhpcy5fYW5jaG9yLmNvcHlGcm9tKHRoaXMuX3RleHR1cmUuZGVmYXVsdEFuY2hvcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMub25GcmFtZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5vbkZyYW1lQ2hhbmdlKHRoaXMuY3VycmVudEZyYW1lKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU3RvcHMgdGhlIEFuaW1hdGVkU3ByaXRlIGFuZCBkZXN0cm95cyBpdC5cbiAgICAgKiBAcGFyYW0ge29iamVjdHxib29sZWFufSBbb3B0aW9uc10gLSBPcHRpb25zIHBhcmFtZXRlci4gQSBib29sZWFuIHdpbGwgYWN0IGFzIGlmIGFsbCBvcHRpb25zXG4gICAgICogIGhhdmUgYmVlbiBzZXQgdG8gdGhhdCB2YWx1ZS5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmNoaWxkcmVuPWZhbHNlXSAtIElmIHNldCB0byB0cnVlLCBhbGwgdGhlIGNoaWxkcmVuIHdpbGwgaGF2ZSB0aGVpciBkZXN0cm95XG4gICAgICogICAgICBtZXRob2QgY2FsbGVkIGFzIHdlbGwuICdvcHRpb25zJyB3aWxsIGJlIHBhc3NlZCBvbiB0byB0aG9zZSBjYWxscy5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLnRleHR1cmU9ZmFsc2VdIC0gU2hvdWxkIGl0IGRlc3Ryb3kgdGhlIGN1cnJlbnQgdGV4dHVyZSBvZiB0aGUgc3ByaXRlIGFzIHdlbGwuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5iYXNlVGV4dHVyZT1mYWxzZV0gLSBTaG91bGQgaXQgZGVzdHJveSB0aGUgYmFzZSB0ZXh0dXJlIG9mIHRoZSBzcHJpdGUgYXMgd2VsbC5cbiAgICAgKi9cbiAgICBBbmltYXRlZFNwcml0ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBfc3VwZXIucHJvdG90eXBlLmRlc3Ryb3kuY2FsbCh0aGlzLCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkZyYW1lQ2hhbmdlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbkxvb3AgPSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzaG9ydCBoYW5kIHdheSBvZiBjcmVhdGluZyBhbiBBbmltYXRlZFNwcml0ZSBmcm9tIGFuIGFycmF5IG9mIGZyYW1lIGlkcy5cbiAgICAgKiBAcGFyYW0gZnJhbWVzIC0gVGhlIGFycmF5IG9mIGZyYW1lcyBpZHMgdGhlIEFuaW1hdGVkU3ByaXRlIHdpbGwgdXNlIGFzIGl0cyB0ZXh0dXJlIGZyYW1lcy5cbiAgICAgKiBAcmV0dXJucyAtIFRoZSBuZXcgYW5pbWF0ZWQgc3ByaXRlIHdpdGggdGhlIHNwZWNpZmllZCBmcmFtZXMuXG4gICAgICovXG4gICAgQW5pbWF0ZWRTcHJpdGUuZnJvbUZyYW1lcyA9IGZ1bmN0aW9uIChmcmFtZXMpIHtcbiAgICAgICAgdmFyIHRleHR1cmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZnJhbWVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0ZXh0dXJlcy5wdXNoKGNvcmUuVGV4dHVyZS5mcm9tKGZyYW1lc1tpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgQW5pbWF0ZWRTcHJpdGUodGV4dHVyZXMpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogQSBzaG9ydCBoYW5kIHdheSBvZiBjcmVhdGluZyBhbiBBbmltYXRlZFNwcml0ZSBmcm9tIGFuIGFycmF5IG9mIGltYWdlIGlkcy5cbiAgICAgKiBAcGFyYW0gaW1hZ2VzIC0gVGhlIGFycmF5IG9mIGltYWdlIHVybHMgdGhlIEFuaW1hdGVkU3ByaXRlIHdpbGwgdXNlIGFzIGl0cyB0ZXh0dXJlIGZyYW1lcy5cbiAgICAgKiBAcmV0dXJucyBUaGUgbmV3IGFuaW1hdGUgc3ByaXRlIHdpdGggdGhlIHNwZWNpZmllZCBpbWFnZXMgYXMgZnJhbWVzLlxuICAgICAqL1xuICAgIEFuaW1hdGVkU3ByaXRlLmZyb21JbWFnZXMgPSBmdW5jdGlvbiAoaW1hZ2VzKSB7XG4gICAgICAgIHZhciB0ZXh0dXJlcyA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdGV4dHVyZXMucHVzaChjb3JlLlRleHR1cmUuZnJvbShpbWFnZXNbaV0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IEFuaW1hdGVkU3ByaXRlKHRleHR1cmVzKTtcbiAgICB9O1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRlZFNwcml0ZS5wcm90b3R5cGUsIFwidG90YWxGcmFtZXNcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogVGhlIHRvdGFsIG51bWJlciBvZiBmcmFtZXMgaW4gdGhlIEFuaW1hdGVkU3ByaXRlLiBUaGlzIGlzIHRoZSBzYW1lIGFzIG51bWJlciBvZiB0ZXh0dXJlc1xuICAgICAgICAgKiBhc3NpZ25lZCB0byB0aGUgQW5pbWF0ZWRTcHJpdGUuXG4gICAgICAgICAqIEByZWFkb25seVxuICAgICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlcy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0ZWRTcHJpdGUucHJvdG90eXBlLCBcInRleHR1cmVzXCIsIHtcbiAgICAgICAgLyoqIFRoZSBhcnJheSBvZiB0ZXh0dXJlcyB1c2VkIGZvciB0aGlzIEFuaW1hdGVkU3ByaXRlLiAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90ZXh0dXJlcztcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZVswXSBpbnN0YW5jZW9mIGNvcmUuVGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVyYXRpb25zID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RleHR1cmVzID0gW107XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVyYXRpb25zID0gW107XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl90ZXh0dXJlcy5wdXNoKHZhbHVlW2ldLnRleHR1cmUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kdXJhdGlvbnMucHVzaCh2YWx1ZVtpXS50aW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c0ZyYW1lID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZ290b0FuZFN0b3AoMCk7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRleHR1cmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH0pO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBbmltYXRlZFNwcml0ZS5wcm90b3R5cGUsIFwiY3VycmVudEZyYW1lXCIsIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIFRoZSBBbmltYXRlZFNwcml0ZXMgY3VycmVudCBmcmFtZSBpbmRleC5cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50RnJhbWUgPSBNYXRoLmZsb29yKHRoaXMuX2N1cnJlbnRUaW1lKSAlIHRoaXMuX3RleHR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjdXJyZW50RnJhbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudEZyYW1lICs9IHRoaXMuX3RleHR1cmVzLmxlbmd0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50RnJhbWU7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQW5pbWF0ZWRTcHJpdGUucHJvdG90eXBlLCBcInBsYXlpbmdcIiwge1xuICAgICAgICAvKipcbiAgICAgICAgICogSW5kaWNhdGVzIGlmIHRoZSBBbmltYXRlZFNwcml0ZSBpcyBjdXJyZW50bHkgcGxheWluZy5cbiAgICAgICAgICogQHJlYWRvbmx5XG4gICAgICAgICAqL1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wbGF5aW5nO1xuICAgICAgICB9LFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEFuaW1hdGVkU3ByaXRlLnByb3RvdHlwZSwgXCJhdXRvVXBkYXRlXCIsIHtcbiAgICAgICAgLyoqIFdoZXRoZXIgdG8gdXNlIFBJWEkuVGlja2VyLnNoYXJlZCB0byBhdXRvIHVwZGF0ZSBhbmltYXRpb24gdGltZS4gKi9cbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXV0b1VwZGF0ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fYXV0b1VwZGF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2F1dG9VcGRhdGUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2F1dG9VcGRhdGUgJiYgdGhpcy5faXNDb25uZWN0ZWRUb1RpY2tlcikge1xuICAgICAgICAgICAgICAgICAgICB0aWNrZXIuVGlja2VyLnNoYXJlZC5yZW1vdmUodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZFRvVGlja2VyID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX2F1dG9VcGRhdGUgJiYgIXRoaXMuX2lzQ29ubmVjdGVkVG9UaWNrZXIgJiYgdGhpcy5fcGxheWluZykge1xuICAgICAgICAgICAgICAgICAgICB0aWNrZXIuVGlja2VyLnNoYXJlZC5hZGQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9pc0Nvbm5lY3RlZFRvVGlja2VyID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gQW5pbWF0ZWRTcHJpdGU7XG59KHNwcml0ZS5TcHJpdGUpKTtcblxuZXhwb3J0cy5BbmltYXRlZFNwcml0ZSA9IEFuaW1hdGVkU3ByaXRlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c3ByaXRlLWFuaW1hdGVkLmpzLm1hcFxuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29yZSIsInNwcml0ZSIsInRpY2tlciIsImV4dGVuZFN0YXRpY3MiLCJkIiwiYiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiQXJyYXkiLCJwIiwiaGFzT3duUHJvcGVydHkiLCJBbmltYXRlZFNwcml0ZSIsIl9zdXBlciIsInRleHR1cmVzIiwiYXV0b1VwZGF0ZSIsIl90aGlzIiwiY2FsbCIsInRoaXMiLCJUZXh0dXJlIiwidGV4dHVyZSIsIl90ZXh0dXJlcyIsIl9kdXJhdGlvbnMiLCJfYXV0b1VwZGF0ZSIsIl9pc0Nvbm5lY3RlZFRvVGlja2VyIiwiYW5pbWF0aW9uU3BlZWQiLCJsb29wIiwidXBkYXRlQW5jaG9yIiwib25Db21wbGV0ZSIsIm9uRnJhbWVDaGFuZ2UiLCJvbkxvb3AiLCJfY3VycmVudFRpbWUiLCJfcGxheWluZyIsIl9wcmV2aW91c0ZyYW1lIiwiX18iLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsImNyZWF0ZSIsIl9fZXh0ZW5kcyIsInN0b3AiLCJUaWNrZXIiLCJzaGFyZWQiLCJyZW1vdmUiLCJ1cGRhdGUiLCJwbGF5IiwiYWRkIiwiVVBEQVRFX1BSSU9SSVRZIiwiSElHSCIsImdvdG9BbmRTdG9wIiwiZnJhbWVOdW1iZXIiLCJwcmV2aW91c0ZyYW1lIiwiY3VycmVudEZyYW1lIiwidXBkYXRlVGV4dHVyZSIsImdvdG9BbmRQbGF5IiwiZGVsdGFUaW1lIiwiZWxhcHNlZCIsImxhZyIsInNpZ24iLCJNYXRoIiwiZmxvb3IiLCJsZW5ndGgiLCJfdGV4dHVyZSIsIl90ZXh0dXJlSUQiLCJfdGV4dHVyZVRyaW1tZWRJRCIsIl9jYWNoZWRUaW50IiwidXZzIiwiX3V2cyIsInV2c0Zsb2F0MzIiLCJfYW5jaG9yIiwiY29weUZyb20iLCJkZWZhdWx0QW5jaG9yIiwiZGVzdHJveSIsIm9wdGlvbnMiLCJmcm9tRnJhbWVzIiwiZnJhbWVzIiwiaSIsInB1c2giLCJmcm9tIiwiZnJvbUltYWdlcyIsImltYWdlcyIsImdldCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJzZXQiLCJ0aW1lIiwiU3ByaXRlIl0sInNvdXJjZVJvb3QiOiIifQ==