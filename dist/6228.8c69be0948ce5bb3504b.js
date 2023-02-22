/*! For license information please see 6228.8c69be0948ce5bb3504b.js.LICENSE.txt */
"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[6228],{923:(t,a,e)=>{var i=e(5307),s=e(9038),r=e(29),n=e(4295),h=e(5323),o=e(1573),c=new n.y3;r.s$.prototype._cacheAsBitmap=!1,r.s$.prototype._cacheData=null;var l=function(){this.textureCacheId=null,this.originalRender=null,this.originalRenderCanvas=null,this.originalCalculateBounds=null,this.originalGetLocalBounds=null,this.originalUpdateTransform=null,this.originalDestroy=null,this.originalMask=null,this.originalFilterArea=null,this.originalContainsPoint=null,this.sprite=null};Object.defineProperties(r.s$.prototype,{cacheAsBitmap:{get:function(){return this._cacheAsBitmap},set:function(t){var a;this._cacheAsBitmap!==t&&(this._cacheAsBitmap=t,t?(this._cacheData||(this._cacheData=new l),(a=this._cacheData).originalRender=this.render,a.originalRenderCanvas=this.renderCanvas,a.originalUpdateTransform=this.updateTransform,a.originalCalculateBounds=this.calculateBounds,a.originalGetLocalBounds=this.getLocalBounds,a.originalDestroy=this.destroy,a.originalContainsPoint=this.containsPoint,a.originalMask=this._mask,a.originalFilterArea=this.filterArea,this.render=this._renderCached,this.renderCanvas=this._renderCachedCanvas,this.destroy=this._cacheAsBitmapDestroy):((a=this._cacheData).sprite&&this._destroyCachedDisplayObject(),this.render=a.originalRender,this.renderCanvas=a.originalRenderCanvas,this.calculateBounds=a.originalCalculateBounds,this.getLocalBounds=a.originalGetLocalBounds,this.destroy=a.originalDestroy,this.updateTransform=a.originalUpdateTransform,this.containsPoint=a.originalContainsPoint,this._mask=a.originalMask,this.filterArea=a.originalFilterArea))}}}),r.s$.prototype._renderCached=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObject(t),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._render(t))},r.s$.prototype._initCachedDisplayObject=function(t){if(!this._cacheData||!this._cacheData.sprite){var a=this.alpha;this.alpha=1,t.batch.flush();var e=this.getLocalBounds(null,!0).clone();if(this.filters){var r=this.filters[0].padding;e.pad(r)}e.ceil(o.X.RESOLUTION);var n=t.renderTexture.current,l=t.renderTexture.sourceFrame.clone(),d=t.renderTexture.destinationFrame.clone(),u=t.projection.transform,p=i.TI.create({width:e.width,height:e.height}),_="cacheAsBitmap_"+(0,h.uid)();this._cacheData.textureCacheId=_,i.VL.addToCache(p.baseTexture,_),i.xE.addToCache(p,_);var f=this.transform.localTransform.copyTo(c).invert().translate(-e.x,-e.y);this.render=this._cacheData.originalRender,t.render(this,p,!0,f,!1),t.projection.transform=u,t.renderTexture.bind(n,l,d),this.render=this._renderCached,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var m=new s.j(p);m.transform.worldTransform=this.transform.worldTransform,m.anchor.x=-e.x/e.width,m.anchor.y=-e.y/e.height,m.alpha=a,m._bounds=this._bounds,this._cacheData.sprite=m,this.transform._parentID=-1,this.parent?this.updateTransform():(this.enableTempParent(),this.updateTransform(),this.disableTempParent(null)),this.containsPoint=m.containsPoint.bind(m)}},r.s$.prototype._renderCachedCanvas=function(t){!this.visible||this.worldAlpha<=0||!this.renderable||(this._initCachedDisplayObjectCanvas(t),this._cacheData.sprite.worldAlpha=this.worldAlpha,this._cacheData.sprite._renderCanvas(t))},r.s$.prototype._initCachedDisplayObjectCanvas=function(t){if(!this._cacheData||!this._cacheData.sprite){var a=this.getLocalBounds(null,!0),e=this.alpha;this.alpha=1;var r=t.context,n=t._projTransform;a.ceil(o.X.RESOLUTION);var l=i.TI.create({width:a.width,height:a.height}),d="cacheAsBitmap_"+(0,h.uid)();this._cacheData.textureCacheId=d,i.VL.addToCache(l.baseTexture,d),i.xE.addToCache(l,d);var u=c;this.transform.localTransform.copyTo(u),u.invert(),u.tx-=a.x,u.ty-=a.y,this.renderCanvas=this._cacheData.originalRenderCanvas,t.render(this,l,!0,u,!1),t.context=r,t._projTransform=n,this.renderCanvas=this._renderCachedCanvas,this.updateTransform=this.displayObjectUpdateTransform,this.calculateBounds=this._calculateCachedBounds,this.getLocalBounds=this._getCachedLocalBounds,this._mask=null,this.filterArea=null;var p=new s.j(l);p.transform.worldTransform=this.transform.worldTransform,p.anchor.x=-a.x/a.width,p.anchor.y=-a.y/a.height,p.alpha=e,p._bounds=this._bounds,this._cacheData.sprite=p,this.transform._parentID=-1,this.parent?this.updateTransform():(this.parent=t._tempDisplayObjectParent,this.updateTransform(),this.parent=null),this.containsPoint=p.containsPoint.bind(p)}},r.s$.prototype._calculateCachedBounds=function(){this._bounds.clear(),this._cacheData.sprite.transform._worldID=this.transform._worldID,this._cacheData.sprite._calculateBounds(),this._bounds.updateID=this._boundsID},r.s$.prototype._getCachedLocalBounds=function(){return this._cacheData.sprite.getLocalBounds(null)},r.s$.prototype._destroyCachedDisplayObject=function(){this._cacheData.sprite._texture.destroy(!0),this._cacheData.sprite=null,i.VL.removeFromCache(this._cacheData.textureCacheId),i.xE.removeFromCache(this._cacheData.textureCacheId),this._cacheData.textureCacheId=null},r.s$.prototype._cacheAsBitmapDestroy=function(t){this.cacheAsBitmap=!1,this.destroy(t)}},4451:(t,a,e)=>{var i=e(29);i.s$.prototype.name=null,i.W2.prototype.getChildByName=function(t,a){for(var e=0,i=this.children.length;e<i;e++)if(this.children[e].name===t)return this.children[e];if(a)for(e=0,i=this.children.length;e<i;e++)if(this.children[e].getChildByName){var s=this.children[e].getChildByName(t,!0);if(s)return s}return null}},476:(t,a,e)=>{var i=e(29),s=e(4295);i.s$.prototype.getGlobalPosition=function(t,a){return void 0===t&&(t=new s.E9),void 0===a&&(a=!1),this.parent?this.parent.toGlobal(this.position,t,a):(t.x=this.position.x,t.y=this.position.y),t}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cUJBQXdCRCxLQUFLb0IsV0FBV25CLGdCQUN4Q0QsS0FBS29CLFdBQVduQixlQUFpQixJQUNyQyxFQVNBLHFDQUFnRCxTQUErQmdHLEdBQzNFakcsS0FBS2MsZUFBZ0IsRUFDckJkLEtBQUswQixRQUFRdUUsRUFDakIsOEJDbFRBLG9CQUErQixLQVkvQiw4QkFBcUMsU0FBd0JDLEVBQU1DLEdBQy9ELElBQUssSUFBSUMsRUFBSSxFQUFHQyxFQUFJckcsS0FBS3NHLFNBQVNDLE9BQVFILEVBQUlDLEVBQUdELElBQzdDLEdBQUlwRyxLQUFLc0csU0FBU0YsR0FBR0YsT0FBU0EsRUFDMUIsT0FBT2xHLEtBQUtzRyxTQUFTRixHQUc3QixHQUFJRCxFQUNBLElBQVNDLEVBQUksRUFBR0MsRUFBSXJHLEtBQUtzRyxTQUFTQyxPQUFRSCxFQUFJQyxFQUFHRCxJQUU3QyxHQURZcEcsS0FBS3NHLFNBQVNGLEdBQ2ZJLGVBQVgsQ0FHQSxJQUFJQyxFQUFTekcsS0FBS3NHLFNBQVNGLEdBQUdJLGVBQWVOLEdBQU0sR0FDbkQsR0FBSU8sRUFDQSxPQUFPQSxDQUhYLENBT1IsT0FBTyxJQUNYLHVDQ3pCQSxpQ0FBNEMsU0FBMkJDLEVBQU9DLEdBVTFFLFlBVGMsSUFBVkQsSUFBb0JBLEVBQVEsSUFBSSxXQUNqQixJQUFmQyxJQUF5QkEsR0FBYSxHQUN0QzNHLEtBQUtpRixPQUNMakYsS0FBS2lGLE9BQU8yQixTQUFTNUcsS0FBSzZHLFNBQVVILEVBQU9DLElBRzNDRCxFQUFNcEMsRUFBSXRFLEtBQUs2RyxTQUFTdkMsRUFDeEJvQyxFQUFNbkMsRUFBSXZFLEtBQUs2RyxTQUFTdEMsR0FFckJtQyxDQUNYIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VhcjNlbmdpbmUtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcGl4aS9taXhpbi1jYWNoZS1hcy1iaXRtYXAvbGliL21peGluLWNhY2hlLWFzLWJpdG1hcC5lcy5qcyIsIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BwaXhpL21peGluLWdldC1jaGlsZC1ieS1uYW1lL2xpYi9taXhpbi1nZXQtY2hpbGQtYnktbmFtZS5lcy5qcyIsIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BwaXhpL21peGluLWdldC1nbG9iYWwtcG9zaXRpb24vbGliL21peGluLWdldC1nbG9iYWwtcG9zaXRpb24uZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAcGl4aS9taXhpbi1jYWNoZS1hcy1iaXRtYXAgLSB2NS4zLjEyXG4gKiBDb21waWxlZCBXZWQsIDIzIE1hciAyMDIyIDE4OjM0OjI4IFVUQ1xuICpcbiAqIEBwaXhpL21peGluLWNhY2hlLWFzLWJpdG1hcCBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKi9cbmltcG9ydCB7IFJlbmRlclRleHR1cmUsIEJhc2VUZXh0dXJlLCBUZXh0dXJlIH0gZnJvbSAnQHBpeGkvY29yZSc7XG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tICdAcGl4aS9zcHJpdGUnO1xuaW1wb3J0IHsgRGlzcGxheU9iamVjdCB9IGZyb20gJ0BwaXhpL2Rpc3BsYXknO1xuaW1wb3J0IHsgTWF0cml4IH0gZnJvbSAnQHBpeGkvbWF0aCc7XG5pbXBvcnQgeyB1aWQgfSBmcm9tICdAcGl4aS91dGlscyc7XG5pbXBvcnQgeyBzZXR0aW5ncyB9IGZyb20gJ0BwaXhpL3NldHRpbmdzJztcblxudmFyIF90ZW1wTWF0cml4ID0gbmV3IE1hdHJpeCgpO1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuX2NhY2hlQXNCaXRtYXAgPSBmYWxzZTtcbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9jYWNoZURhdGEgPSBudWxsO1xuLy8gZmlndXJlZCB0aGVyZSdzIG5vIHBvaW50IGFkZGluZyBBTEwgdGhlIGV4dHJhIHZhcmlhYmxlcyB0byBwcm90b3R5cGUuXG4vLyB0aGlzIG1vZGVsIGNhbiBob2xkIHRoZSBpbmZvcm1hdGlvbiBuZWVkZWQuIFRoaXMgY2FuIGFsc28gYmUgZ2VuZXJhdGVkIG9uIGRlbWFuZCBhc1xuLy8gbW9zdCBvYmplY3RzIGFyZSBub3QgY2FjaGVkIGFzIGJpdG1hcHMuXG4vKipcbiAqIEBjbGFzc1xuICogQGlnbm9yZVxuICovXG52YXIgQ2FjaGVEYXRhID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIENhY2hlRGF0YSgpIHtcbiAgICAgICAgdGhpcy50ZXh0dXJlQ2FjaGVJZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxSZW5kZXIgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsUmVuZGVyQ2FudmFzID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbENhbGN1bGF0ZUJvdW5kcyA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxHZXRMb2NhbEJvdW5kcyA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxVcGRhdGVUcmFuc2Zvcm0gPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGVzdHJveSA9IG51bGw7XG4gICAgICAgIHRoaXMub3JpZ2luYWxNYXNrID0gbnVsbDtcbiAgICAgICAgdGhpcy5vcmlnaW5hbEZpbHRlckFyZWEgPSBudWxsO1xuICAgICAgICB0aGlzLm9yaWdpbmFsQ29udGFpbnNQb2ludCA9IG51bGw7XG4gICAgICAgIHRoaXMuc3ByaXRlID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIENhY2hlRGF0YTtcbn0oKSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhEaXNwbGF5T2JqZWN0LnByb3RvdHlwZSwge1xuICAgIC8qKlxuICAgICAqIFNldCB0aGlzIHRvIHRydWUgaWYgeW91IHdhbnQgdGhpcyBkaXNwbGF5IG9iamVjdCB0byBiZSBjYWNoZWQgYXMgYSBiaXRtYXAuXG4gICAgICogVGhpcyBiYXNpY2FsbHkgdGFrZXMgYSBzbmFwIHNob3Qgb2YgdGhlIGRpc3BsYXkgb2JqZWN0IGFzIGl0IGlzIGF0IHRoYXQgbW9tZW50LiBJdCBjYW5cbiAgICAgKiBwcm92aWRlIGEgcGVyZm9ybWFuY2UgYmVuZWZpdCBmb3IgY29tcGxleCBzdGF0aWMgZGlzcGxheU9iamVjdHMuXG4gICAgICogVG8gcmVtb3ZlIHNpbXBseSBzZXQgdGhpcyBwcm9wZXJ0eSB0byBgZmFsc2VgXG4gICAgICpcbiAgICAgKiBJTVBPUlRBTlQgR09UQ0hBIC0gTWFrZSBzdXJlIHRoYXQgYWxsIHlvdXIgdGV4dHVyZXMgYXJlIHByZWxvYWRlZCBCRUZPUkUgc2V0dGluZyB0aGlzIHByb3BlcnR5IHRvIHRydWVcbiAgICAgKiBhcyBpdCB3aWxsIHRha2UgYSBzbmFwc2hvdCBvZiB3aGF0IGlzIGN1cnJlbnRseSB0aGVyZS4gSWYgdGhlIHRleHR1cmVzIGhhdmUgbm90IGxvYWRlZCB0aGVuIHRoZXkgd2lsbCBub3QgYXBwZWFyLlxuICAgICAqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn1cbiAgICAgKiBAbWVtYmVyb2YgUElYSS5EaXNwbGF5T2JqZWN0I1xuICAgICAqL1xuICAgIGNhY2hlQXNCaXRtYXA6IHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FjaGVBc0JpdG1hcDtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9jYWNoZUFzQml0bWFwID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2NhY2hlQXNCaXRtYXAgPSB2YWx1ZTtcbiAgICAgICAgICAgIHZhciBkYXRhO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jYWNoZURhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FjaGVEYXRhID0gbmV3IENhY2hlRGF0YSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5fY2FjaGVEYXRhO1xuICAgICAgICAgICAgICAgIGRhdGEub3JpZ2luYWxSZW5kZXIgPSB0aGlzLnJlbmRlcjtcbiAgICAgICAgICAgICAgICBkYXRhLm9yaWdpbmFsUmVuZGVyQ2FudmFzID0gdGhpcy5yZW5kZXJDYW52YXM7XG4gICAgICAgICAgICAgICAgZGF0YS5vcmlnaW5hbFVwZGF0ZVRyYW5zZm9ybSA9IHRoaXMudXBkYXRlVHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIGRhdGEub3JpZ2luYWxDYWxjdWxhdGVCb3VuZHMgPSB0aGlzLmNhbGN1bGF0ZUJvdW5kcztcbiAgICAgICAgICAgICAgICBkYXRhLm9yaWdpbmFsR2V0TG9jYWxCb3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzO1xuICAgICAgICAgICAgICAgIGRhdGEub3JpZ2luYWxEZXN0cm95ID0gdGhpcy5kZXN0cm95O1xuICAgICAgICAgICAgICAgIGRhdGEub3JpZ2luYWxDb250YWluc1BvaW50ID0gdGhpcy5jb250YWluc1BvaW50O1xuICAgICAgICAgICAgICAgIGRhdGEub3JpZ2luYWxNYXNrID0gdGhpcy5fbWFzaztcbiAgICAgICAgICAgICAgICBkYXRhLm9yaWdpbmFsRmlsdGVyQXJlYSA9IHRoaXMuZmlsdGVyQXJlYTtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlciA9IHRoaXMuX3JlbmRlckNhY2hlZDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyA9IHRoaXMuX3JlbmRlckNhY2hlZENhbnZhcztcbiAgICAgICAgICAgICAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLl9jYWNoZUFzQml0bWFwRGVzdHJveTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLl9jYWNoZURhdGE7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3ByaXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Rlc3Ryb3lDYWNoZWREaXNwbGF5T2JqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyID0gZGF0YS5vcmlnaW5hbFJlbmRlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckNhbnZhcyA9IGRhdGEub3JpZ2luYWxSZW5kZXJDYW52YXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jYWxjdWxhdGVCb3VuZHMgPSBkYXRhLm9yaWdpbmFsQ2FsY3VsYXRlQm91bmRzO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0TG9jYWxCb3VuZHMgPSBkYXRhLm9yaWdpbmFsR2V0TG9jYWxCb3VuZHM7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXN0cm95ID0gZGF0YS5vcmlnaW5hbERlc3Ryb3k7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVUcmFuc2Zvcm0gPSBkYXRhLm9yaWdpbmFsVXBkYXRlVHJhbnNmb3JtO1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGFpbnNQb2ludCA9IGRhdGEub3JpZ2luYWxDb250YWluc1BvaW50O1xuICAgICAgICAgICAgICAgIHRoaXMuX21hc2sgPSBkYXRhLm9yaWdpbmFsTWFzaztcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFyZWEgPSBkYXRhLm9yaWdpbmFsRmlsdGVyQXJlYTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG4vKipcbiAqIFJlbmRlcnMgYSBjYWNoZWQgdmVyc2lvbiBvZiB0aGUgc3ByaXRlIHdpdGggV2ViR0xcbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIF9yZW5kZXJDYWNoZWRcbiAqIEBtZW1iZXJvZiBQSVhJLkRpc3BsYXlPYmplY3QjXG4gKiBAcGFyYW0ge1BJWEkuUmVuZGVyZXJ9IHJlbmRlcmVyIC0gdGhlIFdlYkdMIHJlbmRlcmVyXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9yZW5kZXJDYWNoZWQgPSBmdW5jdGlvbiBfcmVuZGVyQ2FjaGVkKHJlbmRlcmVyKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy53b3JsZEFscGhhIDw9IDAgfHwgIXRoaXMucmVuZGVyYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0KHJlbmRlcmVyKTtcbiAgICB0aGlzLl9jYWNoZURhdGEuc3ByaXRlLnRyYW5zZm9ybS5fd29ybGRJRCA9IHRoaXMudHJhbnNmb3JtLl93b3JsZElEO1xuICAgIHRoaXMuX2NhY2hlRGF0YS5zcHJpdGUud29ybGRBbHBoYSA9IHRoaXMud29ybGRBbHBoYTtcbiAgICB0aGlzLl9jYWNoZURhdGEuc3ByaXRlLl9yZW5kZXIocmVuZGVyZXIpO1xufTtcbi8qKlxuICogUHJlcGFyZXMgdGhlIFdlYkdMIHJlbmRlcmVyIHRvIGNhY2hlIHRoZSBzcHJpdGVcbiAqXG4gKiBAcHJpdmF0ZVxuICogQGZ1bmN0aW9uIF9pbml0Q2FjaGVkRGlzcGxheU9iamVjdFxuICogQG1lbWJlcm9mIFBJWEkuRGlzcGxheU9iamVjdCNcbiAqIEBwYXJhbSB7UElYSS5SZW5kZXJlcn0gcmVuZGVyZXIgLSB0aGUgV2ViR0wgcmVuZGVyZXJcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0ID0gZnVuY3Rpb24gX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0KHJlbmRlcmVyKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlRGF0YSAmJiB0aGlzLl9jYWNoZURhdGEuc3ByaXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gbWFrZSBzdXJlIGFscGhhIGlzIHNldCB0byAxIG90aGVyd2lzZSBpdCB3aWxsIGdldCByZW5kZXJlZCBhcyBpbnZpc2libGUhXG4gICAgdmFyIGNhY2hlQWxwaGEgPSB0aGlzLmFscGhhO1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgIC8vIGZpcnN0IHdlIGZsdXNoIGFueXRoaW5nIGxlZnQgaW4gdGhlIHJlbmRlcmVyIChvdGhlcndpc2UgaXQgd291bGQgZ2V0IHJlbmRlcmVkIHRvIHRoZSBjYWNoZWQgdGV4dHVyZSlcbiAgICByZW5kZXJlci5iYXRjaC5mbHVzaCgpO1xuICAgIC8vIHRoaXMuZmlsdGVycz0gW107XG4gICAgLy8gbmV4dCB3ZSBmaW5kIHRoZSBkaW1lbnNpb25zIG9mIHRoZSB1bnRyYW5zZm9ybWVkIG9iamVjdFxuICAgIC8vIHRoaXMgZnVuY3Rpb24gYWxzbyBjYWxscyB1cGRhdGV0cmFuc2Zvcm0gb24gYWxsIGl0cyBjaGlsZHJlbiBhcyBwYXJ0IG9mIHRoZSBtZWFzdXJpbmcuXG4gICAgLy8gVGhpcyBtZWFucyB3ZSBkb24ndCBuZWVkIHRvIHVwZGF0ZSB0aGUgdHJhbnNmb3JtIGFnYWluIGluIHRoaXMgZnVuY3Rpb25cbiAgICAvLyBUT0RPIHBhc3MgYW4gb2JqZWN0IHRvIGNsb25lIHRvbz8gc2F2ZXMgaGF2aW5nIHRvIGNyZWF0ZSBhIG5ldyBvbmUgZWFjaCB0aW1lIVxuICAgIHZhciBib3VuZHMgPSB0aGlzLmdldExvY2FsQm91bmRzKG51bGwsIHRydWUpLmNsb25lKCk7XG4gICAgLy8gYWRkIHNvbWUgcGFkZGluZyFcbiAgICBpZiAodGhpcy5maWx0ZXJzKSB7XG4gICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5maWx0ZXJzWzBdLnBhZGRpbmc7XG4gICAgICAgIGJvdW5kcy5wYWQocGFkZGluZyk7XG4gICAgfVxuICAgIGJvdW5kcy5jZWlsKHNldHRpbmdzLlJFU09MVVRJT04pO1xuICAgIC8vIGZvciBub3cgd2UgY2FjaGUgdGhlIGN1cnJlbnQgcmVuZGVyVGFyZ2V0IHRoYXQgdGhlIFdlYkdMIHJlbmRlcmVyIGlzIGN1cnJlbnRseSB1c2luZy5cbiAgICAvLyB0aGlzIGNvdWxkIGJlIG1vcmUgZWxlZ2FudC4uXG4gICAgdmFyIGNhY2hlZFJlbmRlclRleHR1cmUgPSByZW5kZXJlci5yZW5kZXJUZXh0dXJlLmN1cnJlbnQ7XG4gICAgdmFyIGNhY2hlZFNvdXJjZUZyYW1lID0gcmVuZGVyZXIucmVuZGVyVGV4dHVyZS5zb3VyY2VGcmFtZS5jbG9uZSgpO1xuICAgIHZhciBjYWNoZWREZXN0aW5hdGlvbkZyYW1lID0gcmVuZGVyZXIucmVuZGVyVGV4dHVyZS5kZXN0aW5hdGlvbkZyYW1lLmNsb25lKCk7XG4gICAgdmFyIGNhY2hlZFByb2plY3Rpb25UcmFuc2Zvcm0gPSByZW5kZXJlci5wcm9qZWN0aW9uLnRyYW5zZm9ybTtcbiAgICAvLyBXZSBhbHNvIHN0b3JlIHRoZSBmaWx0ZXIgc3RhY2sgLSBJIHdpbGwgZGVmaW5pdGVseSBsb29rIHRvIGNoYW5nZSBob3cgdGhpcyB3b3JrcyBhIGxpdHRsZSBsYXRlciBkb3duIHRoZSBsaW5lLlxuICAgIC8vIGNvbnN0IHN0YWNrID0gcmVuZGVyZXIuZmlsdGVyTWFuYWdlci5maWx0ZXJTdGFjaztcbiAgICAvLyB0aGlzIHJlbmRlclRleHR1cmUgd2lsbCBiZSB1c2VkIHRvIHN0b3JlIHRoZSBjYWNoZWQgRGlzcGxheU9iamVjdFxuICAgIHZhciByZW5kZXJUZXh0dXJlID0gUmVuZGVyVGV4dHVyZS5jcmVhdGUoeyB3aWR0aDogYm91bmRzLndpZHRoLCBoZWlnaHQ6IGJvdW5kcy5oZWlnaHQgfSk7XG4gICAgdmFyIHRleHR1cmVDYWNoZUlkID0gXCJjYWNoZUFzQml0bWFwX1wiICsgdWlkKCk7XG4gICAgdGhpcy5fY2FjaGVEYXRhLnRleHR1cmVDYWNoZUlkID0gdGV4dHVyZUNhY2hlSWQ7XG4gICAgQmFzZVRleHR1cmUuYWRkVG9DYWNoZShyZW5kZXJUZXh0dXJlLmJhc2VUZXh0dXJlLCB0ZXh0dXJlQ2FjaGVJZCk7XG4gICAgVGV4dHVyZS5hZGRUb0NhY2hlKHJlbmRlclRleHR1cmUsIHRleHR1cmVDYWNoZUlkKTtcbiAgICAvLyBuZWVkIHRvIHNldCAvL1xuICAgIHZhciBtID0gdGhpcy50cmFuc2Zvcm0ubG9jYWxUcmFuc2Zvcm0uY29weVRvKF90ZW1wTWF0cml4KS5pbnZlcnQoKS50cmFuc2xhdGUoLWJvdW5kcy54LCAtYm91bmRzLnkpO1xuICAgIC8vIHNldCBhbGwgcHJvcGVydGllcyB0byB0aGVyZSBvcmlnaW5hbCBzbyB3ZSBjYW4gcmVuZGVyIHRvIGEgdGV4dHVyZVxuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fY2FjaGVEYXRhLm9yaWdpbmFsUmVuZGVyO1xuICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLCByZW5kZXJUZXh0dXJlLCB0cnVlLCBtLCBmYWxzZSk7XG4gICAgLy8gbm93IHJlc3RvcmUgdGhlIHN0YXRlIGJlIHNldHRpbmcgdGhlIG5ldyBwcm9wZXJ0aWVzXG4gICAgcmVuZGVyZXIucHJvamVjdGlvbi50cmFuc2Zvcm0gPSBjYWNoZWRQcm9qZWN0aW9uVHJhbnNmb3JtO1xuICAgIHJlbmRlcmVyLnJlbmRlclRleHR1cmUuYmluZChjYWNoZWRSZW5kZXJUZXh0dXJlLCBjYWNoZWRTb3VyY2VGcmFtZSwgY2FjaGVkRGVzdGluYXRpb25GcmFtZSk7XG4gICAgLy8gcmVuZGVyZXIuZmlsdGVyTWFuYWdlci5maWx0ZXJTdGFjayA9IHN0YWNrO1xuICAgIHRoaXMucmVuZGVyID0gdGhpcy5fcmVuZGVyQ2FjaGVkO1xuICAgIC8vIHRoZSByZXN0IGlzIHRoZSBzYW1lIGFzIGZvciBDYW52YXNcbiAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybSA9IHRoaXMuZGlzcGxheU9iamVjdFVwZGF0ZVRyYW5zZm9ybTtcbiAgICB0aGlzLmNhbGN1bGF0ZUJvdW5kcyA9IHRoaXMuX2NhbGN1bGF0ZUNhY2hlZEJvdW5kcztcbiAgICB0aGlzLmdldExvY2FsQm91bmRzID0gdGhpcy5fZ2V0Q2FjaGVkTG9jYWxCb3VuZHM7XG4gICAgdGhpcy5fbWFzayA9IG51bGw7XG4gICAgdGhpcy5maWx0ZXJBcmVhID0gbnVsbDtcbiAgICAvLyBjcmVhdGUgb3VyIGNhY2hlZCBzcHJpdGVcbiAgICB2YXIgY2FjaGVkU3ByaXRlID0gbmV3IFNwcml0ZShyZW5kZXJUZXh0dXJlKTtcbiAgICBjYWNoZWRTcHJpdGUudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtID0gdGhpcy50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgY2FjaGVkU3ByaXRlLmFuY2hvci54ID0gLShib3VuZHMueCAvIGJvdW5kcy53aWR0aCk7XG4gICAgY2FjaGVkU3ByaXRlLmFuY2hvci55ID0gLShib3VuZHMueSAvIGJvdW5kcy5oZWlnaHQpO1xuICAgIGNhY2hlZFNwcml0ZS5hbHBoYSA9IGNhY2hlQWxwaGE7XG4gICAgY2FjaGVkU3ByaXRlLl9ib3VuZHMgPSB0aGlzLl9ib3VuZHM7XG4gICAgdGhpcy5fY2FjaGVEYXRhLnNwcml0ZSA9IGNhY2hlZFNwcml0ZTtcbiAgICB0aGlzLnRyYW5zZm9ybS5fcGFyZW50SUQgPSAtMTtcbiAgICAvLyByZXN0b3JlIHRoZSB0cmFuc2Zvcm0gb2YgdGhlIGNhY2hlZCBzcHJpdGUgdG8gYXZvaWQgdGhlIG5hc3R5IGZsaWNrZXIuLlxuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgdGhpcy5lbmFibGVUZW1wUGFyZW50KCk7XG4gICAgICAgIHRoaXMudXBkYXRlVHJhbnNmb3JtKCk7XG4gICAgICAgIHRoaXMuZGlzYWJsZVRlbXBQYXJlbnQobnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIH1cbiAgICAvLyBtYXAgdGhlIGhpdCB0ZXN0Li5cbiAgICB0aGlzLmNvbnRhaW5zUG9pbnQgPSBjYWNoZWRTcHJpdGUuY29udGFpbnNQb2ludC5iaW5kKGNhY2hlZFNwcml0ZSk7XG59O1xuLyoqXG4gKiBSZW5kZXJzIGEgY2FjaGVkIHZlcnNpb24gb2YgdGhlIHNwcml0ZSB3aXRoIGNhbnZhc1xuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gX3JlbmRlckNhY2hlZENhbnZhc1xuICogQG1lbWJlcm9mIFBJWEkuRGlzcGxheU9iamVjdCNcbiAqIEBwYXJhbSB7UElYSS5DYW52YXNSZW5kZXJlcn0gcmVuZGVyZXIgLSBUaGUgY2FudmFzIHJlbmRlcmVyXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9yZW5kZXJDYWNoZWRDYW52YXMgPSBmdW5jdGlvbiBfcmVuZGVyQ2FjaGVkQ2FudmFzKHJlbmRlcmVyKSB7XG4gICAgaWYgKCF0aGlzLnZpc2libGUgfHwgdGhpcy53b3JsZEFscGhhIDw9IDAgfHwgIXRoaXMucmVuZGVyYWJsZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0Q2FudmFzKHJlbmRlcmVyKTtcbiAgICB0aGlzLl9jYWNoZURhdGEuc3ByaXRlLndvcmxkQWxwaGEgPSB0aGlzLndvcmxkQWxwaGE7XG4gICAgdGhpcy5fY2FjaGVEYXRhLnNwcml0ZS5fcmVuZGVyQ2FudmFzKHJlbmRlcmVyKTtcbn07XG4vLyBUT0RPIHRoaXMgY2FuIGJlIHRoZSBzYW1lIGFzIHRoZSBXZWJHTCB2ZXJzaW9uLi4gd2lsbCBuZWVkIHRvIGRvIGEgbGl0dGxlIHR3ZWFraW5nIGZpcnN0IHRob3VnaC4uXG4vKipcbiAqIFByZXBhcmVzIHRoZSBDYW52YXMgcmVuZGVyZXIgdG8gY2FjaGUgdGhlIHNwcml0ZVxuICpcbiAqIEBwcml2YXRlXG4gKiBAZnVuY3Rpb24gX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0Q2FudmFzXG4gKiBAbWVtYmVyb2YgUElYSS5EaXNwbGF5T2JqZWN0I1xuICogQHBhcmFtIHtQSVhJLkNhbnZhc1JlbmRlcmVyfSByZW5kZXJlciAtIFRoZSBjYW52YXMgcmVuZGVyZXJcbiAqL1xuRGlzcGxheU9iamVjdC5wcm90b3R5cGUuX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0Q2FudmFzID0gZnVuY3Rpb24gX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0Q2FudmFzKHJlbmRlcmVyKSB7XG4gICAgaWYgKHRoaXMuX2NhY2hlRGF0YSAmJiB0aGlzLl9jYWNoZURhdGEuc3ByaXRlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gZ2V0IGJvdW5kcyBhY3R1YWxseSB0cmFuc2Zvcm1zIHRoZSBvYmplY3QgZm9yIHVzIGFscmVhZHkhXG4gICAgdmFyIGJvdW5kcyA9IHRoaXMuZ2V0TG9jYWxCb3VuZHMobnVsbCwgdHJ1ZSk7XG4gICAgdmFyIGNhY2hlQWxwaGEgPSB0aGlzLmFscGhhO1xuICAgIHRoaXMuYWxwaGEgPSAxO1xuICAgIHZhciBjYWNoZWRSZW5kZXJUYXJnZXQgPSByZW5kZXJlci5jb250ZXh0O1xuICAgIHZhciBjYWNoZWRQcm9qZWN0aW9uVHJhbnNmb3JtID0gcmVuZGVyZXIuX3Byb2pUcmFuc2Zvcm07XG4gICAgYm91bmRzLmNlaWwoc2V0dGluZ3MuUkVTT0xVVElPTik7XG4gICAgdmFyIHJlbmRlclRleHR1cmUgPSBSZW5kZXJUZXh0dXJlLmNyZWF0ZSh7IHdpZHRoOiBib3VuZHMud2lkdGgsIGhlaWdodDogYm91bmRzLmhlaWdodCB9KTtcbiAgICB2YXIgdGV4dHVyZUNhY2hlSWQgPSBcImNhY2hlQXNCaXRtYXBfXCIgKyB1aWQoKTtcbiAgICB0aGlzLl9jYWNoZURhdGEudGV4dHVyZUNhY2hlSWQgPSB0ZXh0dXJlQ2FjaGVJZDtcbiAgICBCYXNlVGV4dHVyZS5hZGRUb0NhY2hlKHJlbmRlclRleHR1cmUuYmFzZVRleHR1cmUsIHRleHR1cmVDYWNoZUlkKTtcbiAgICBUZXh0dXJlLmFkZFRvQ2FjaGUocmVuZGVyVGV4dHVyZSwgdGV4dHVyZUNhY2hlSWQpO1xuICAgIC8vIG5lZWQgdG8gc2V0IC8vXG4gICAgdmFyIG0gPSBfdGVtcE1hdHJpeDtcbiAgICB0aGlzLnRyYW5zZm9ybS5sb2NhbFRyYW5zZm9ybS5jb3B5VG8obSk7XG4gICAgbS5pbnZlcnQoKTtcbiAgICBtLnR4IC09IGJvdW5kcy54O1xuICAgIG0udHkgLT0gYm91bmRzLnk7XG4gICAgLy8gbS5hcHBlbmQodGhpcy50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0uKVxuICAgIC8vIHNldCBhbGwgcHJvcGVydGllcyB0byB0aGVyZSBvcmlnaW5hbCBzbyB3ZSBjYW4gcmVuZGVyIHRvIGEgdGV4dHVyZVxuICAgIHRoaXMucmVuZGVyQ2FudmFzID0gdGhpcy5fY2FjaGVEYXRhLm9yaWdpbmFsUmVuZGVyQ2FudmFzO1xuICAgIHJlbmRlcmVyLnJlbmRlcih0aGlzLCByZW5kZXJUZXh0dXJlLCB0cnVlLCBtLCBmYWxzZSk7XG4gICAgLy8gbm93IHJlc3RvcmUgdGhlIHN0YXRlIGJlIHNldHRpbmcgdGhlIG5ldyBwcm9wZXJ0aWVzXG4gICAgcmVuZGVyZXIuY29udGV4dCA9IGNhY2hlZFJlbmRlclRhcmdldDtcbiAgICByZW5kZXJlci5fcHJvalRyYW5zZm9ybSA9IGNhY2hlZFByb2plY3Rpb25UcmFuc2Zvcm07XG4gICAgdGhpcy5yZW5kZXJDYW52YXMgPSB0aGlzLl9yZW5kZXJDYWNoZWRDYW52YXM7XG4gICAgLy8gdGhlIHJlc3QgaXMgdGhlIHNhbWUgYXMgZm9yIFdlYkdMXG4gICAgdGhpcy51cGRhdGVUcmFuc2Zvcm0gPSB0aGlzLmRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm07XG4gICAgdGhpcy5jYWxjdWxhdGVCb3VuZHMgPSB0aGlzLl9jYWxjdWxhdGVDYWNoZWRCb3VuZHM7XG4gICAgdGhpcy5nZXRMb2NhbEJvdW5kcyA9IHRoaXMuX2dldENhY2hlZExvY2FsQm91bmRzO1xuICAgIHRoaXMuX21hc2sgPSBudWxsO1xuICAgIHRoaXMuZmlsdGVyQXJlYSA9IG51bGw7XG4gICAgLy8gY3JlYXRlIG91ciBjYWNoZWQgc3ByaXRlXG4gICAgdmFyIGNhY2hlZFNwcml0ZSA9IG5ldyBTcHJpdGUocmVuZGVyVGV4dHVyZSk7XG4gICAgY2FjaGVkU3ByaXRlLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSA9IHRoaXMudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xuICAgIGNhY2hlZFNwcml0ZS5hbmNob3IueCA9IC0oYm91bmRzLnggLyBib3VuZHMud2lkdGgpO1xuICAgIGNhY2hlZFNwcml0ZS5hbmNob3IueSA9IC0oYm91bmRzLnkgLyBib3VuZHMuaGVpZ2h0KTtcbiAgICBjYWNoZWRTcHJpdGUuYWxwaGEgPSBjYWNoZUFscGhhO1xuICAgIGNhY2hlZFNwcml0ZS5fYm91bmRzID0gdGhpcy5fYm91bmRzO1xuICAgIHRoaXMuX2NhY2hlRGF0YS5zcHJpdGUgPSBjYWNoZWRTcHJpdGU7XG4gICAgdGhpcy50cmFuc2Zvcm0uX3BhcmVudElEID0gLTE7XG4gICAgLy8gcmVzdG9yZSB0aGUgdHJhbnNmb3JtIG9mIHRoZSBjYWNoZWQgc3ByaXRlIHRvIGF2b2lkIHRoZSBuYXN0eSBmbGlja2VyLi5cbiAgICBpZiAoIXRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50ID0gcmVuZGVyZXIuX3RlbXBEaXNwbGF5T2JqZWN0UGFyZW50O1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYW5zZm9ybSgpO1xuICAgIH1cbiAgICAvLyBtYXAgdGhlIGhpdCB0ZXN0Li5cbiAgICB0aGlzLmNvbnRhaW5zUG9pbnQgPSBjYWNoZWRTcHJpdGUuY29udGFpbnNQb2ludC5iaW5kKGNhY2hlZFNwcml0ZSk7XG59O1xuLyoqXG4gKiBDYWxjdWxhdGVzIHRoZSBib3VuZHMgb2YgdGhlIGNhY2hlZCBzcHJpdGVcbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5fY2FsY3VsYXRlQ2FjaGVkQm91bmRzID0gZnVuY3Rpb24gX2NhbGN1bGF0ZUNhY2hlZEJvdW5kcygpIHtcbiAgICB0aGlzLl9ib3VuZHMuY2xlYXIoKTtcbiAgICB0aGlzLl9jYWNoZURhdGEuc3ByaXRlLnRyYW5zZm9ybS5fd29ybGRJRCA9IHRoaXMudHJhbnNmb3JtLl93b3JsZElEO1xuICAgIHRoaXMuX2NhY2hlRGF0YS5zcHJpdGUuX2NhbGN1bGF0ZUJvdW5kcygpO1xuICAgIHRoaXMuX2JvdW5kcy51cGRhdGVJRCA9IHRoaXMuX2JvdW5kc0lEO1xufTtcbi8qKlxuICogR2V0cyB0aGUgYm91bmRzIG9mIHRoZSBjYWNoZWQgc3ByaXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcmV0dXJuIHtSZWN0YW5nbGV9IFRoZSBsb2NhbCBib3VuZHMuXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9nZXRDYWNoZWRMb2NhbEJvdW5kcyA9IGZ1bmN0aW9uIF9nZXRDYWNoZWRMb2NhbEJvdW5kcygpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FjaGVEYXRhLnNwcml0ZS5nZXRMb2NhbEJvdW5kcyhudWxsKTtcbn07XG4vKipcbiAqIERlc3Ryb3lzIHRoZSBjYWNoZWQgc3ByaXRlLlxuICpcbiAqIEBwcml2YXRlXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9kZXN0cm95Q2FjaGVkRGlzcGxheU9iamVjdCA9IGZ1bmN0aW9uIF9kZXN0cm95Q2FjaGVkRGlzcGxheU9iamVjdCgpIHtcbiAgICB0aGlzLl9jYWNoZURhdGEuc3ByaXRlLl90ZXh0dXJlLmRlc3Ryb3kodHJ1ZSk7XG4gICAgdGhpcy5fY2FjaGVEYXRhLnNwcml0ZSA9IG51bGw7XG4gICAgQmFzZVRleHR1cmUucmVtb3ZlRnJvbUNhY2hlKHRoaXMuX2NhY2hlRGF0YS50ZXh0dXJlQ2FjaGVJZCk7XG4gICAgVGV4dHVyZS5yZW1vdmVGcm9tQ2FjaGUodGhpcy5fY2FjaGVEYXRhLnRleHR1cmVDYWNoZUlkKTtcbiAgICB0aGlzLl9jYWNoZURhdGEudGV4dHVyZUNhY2hlSWQgPSBudWxsO1xufTtcbi8qKlxuICogRGVzdHJveXMgdGhlIGNhY2hlZCBvYmplY3QuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7b2JqZWN0fGJvb2xlYW59IFtvcHRpb25zXSAtIE9wdGlvbnMgcGFyYW1ldGVyLiBBIGJvb2xlYW4gd2lsbCBhY3QgYXMgaWYgYWxsIG9wdGlvbnNcbiAqICBoYXZlIGJlZW4gc2V0IHRvIHRoYXQgdmFsdWUuXG4gKiAgVXNlZCB3aGVuIGRlc3Ryb3lpbmcgY29udGFpbmVycywgc2VlIHRoZSBDb250YWluZXIuZGVzdHJveSBtZXRob2QuXG4gKi9cbkRpc3BsYXlPYmplY3QucHJvdG90eXBlLl9jYWNoZUFzQml0bWFwRGVzdHJveSA9IGZ1bmN0aW9uIF9jYWNoZUFzQml0bWFwRGVzdHJveShvcHRpb25zKSB7XG4gICAgdGhpcy5jYWNoZUFzQml0bWFwID0gZmFsc2U7XG4gICAgdGhpcy5kZXN0cm95KG9wdGlvbnMpO1xufTtcblxuZXhwb3J0IHsgQ2FjaGVEYXRhIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXhpbi1jYWNoZS1hcy1iaXRtYXAuZXMuanMubWFwXG4iLCIvKiFcbiAqIEBwaXhpL21peGluLWdldC1jaGlsZC1ieS1uYW1lIC0gdjUuMy4xMlxuICogQ29tcGlsZWQgV2VkLCAyMyBNYXIgMjAyMiAxODozNDoyOCBVVENcbiAqXG4gKiBAcGl4aS9taXhpbi1nZXQtY2hpbGQtYnktbmFtZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4gKiBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlXG4gKi9cbmltcG9ydCB7IERpc3BsYXlPYmplY3QsIENvbnRhaW5lciB9IGZyb20gJ0BwaXhpL2Rpc3BsYXknO1xuXG4vKipcbiAqIFRoZSBpbnN0YW5jZSBuYW1lIG9mIHRoZSBvYmplY3QuXG4gKlxuICogQG1lbWJlcm9mIFBJWEkuRGlzcGxheU9iamVjdCNcbiAqIEBtZW1iZXIge3N0cmluZ30gbmFtZVxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5uYW1lID0gbnVsbDtcbi8qKlxuICogUmV0dXJucyB0aGUgZGlzcGxheSBvYmplY3QgaW4gdGhlIGNvbnRhaW5lci5cbiAqXG4gKiBSZWN1cnNpdmUgc2VhcmNoZXMgYXJlIGRvbmUgaW4gYSBwcmVvcmRlciB0cmF2ZXJzYWwuXG4gKlxuICogQG1ldGhvZCBnZXRDaGlsZEJ5TmFtZVxuICogQG1lbWJlcm9mIFBJWEkuQ29udGFpbmVyI1xuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSBJbnN0YW5jZSBuYW1lLlxuICogQHBhcmFtIHtib29sZWFufVtkZWVwPWZhbHNlXSAtIFdoZXRoZXIgdG8gc2VhcmNoIHJlY3Vyc2l2ZWx5XG4gKiBAcmV0dXJuIHtQSVhJLkRpc3BsYXlPYmplY3R9IFRoZSBjaGlsZCB3aXRoIHRoZSBzcGVjaWZpZWQgbmFtZS5cbiAqL1xuQ29udGFpbmVyLnByb3RvdHlwZS5nZXRDaGlsZEJ5TmFtZSA9IGZ1bmN0aW9uIGdldENoaWxkQnlOYW1lKG5hbWUsIGRlZXApIHtcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkcmVuW2ldLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gdGhpcy5jaGlsZHJlbi5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IHRoaXMuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWNoaWxkLmdldENoaWxkQnlOYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5jaGlsZHJlbltpXS5nZXRDaGlsZEJ5TmFtZShuYW1lLCB0cnVlKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1peGluLWdldC1jaGlsZC1ieS1uYW1lLmVzLmpzLm1hcFxuIiwiLyohXG4gKiBAcGl4aS9taXhpbi1nZXQtZ2xvYmFsLXBvc2l0aW9uIC0gdjUuMy4xMlxuICogQ29tcGlsZWQgV2VkLCAyMyBNYXIgMjAyMiAxODozNDoyOCBVVENcbiAqXG4gKiBAcGl4aS9taXhpbi1nZXQtZ2xvYmFsLXBvc2l0aW9uIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgRGlzcGxheU9iamVjdCB9IGZyb20gJ0BwaXhpL2Rpc3BsYXknO1xuaW1wb3J0IHsgUG9pbnQgfSBmcm9tICdAcGl4aS9tYXRoJztcblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBnbG9iYWwgcG9zaXRpb24gb2YgdGhlIGRpc3BsYXlPYmplY3QuIERvZXMgbm90IGRlcGVuZCBvbiBvYmplY3Qgc2NhbGUsIHJvdGF0aW9uIGFuZCBwaXZvdC5cbiAqXG4gKiBAbWV0aG9kIGdldEdsb2JhbFBvc2l0aW9uXG4gKiBAbWVtYmVyb2YgUElYSS5EaXNwbGF5T2JqZWN0I1xuICogQHBhcmFtIHtQSVhJLlBvaW50fSBbcG9pbnQ9bmV3IFBJWEkuUG9pbnQoKV0gLSBUaGUgcG9pbnQgdG8gd3JpdGUgdGhlIGdsb2JhbCB2YWx1ZSB0by5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NraXBVcGRhdGU9ZmFsc2VdIC0gU2V0dGluZyB0byB0cnVlIHdpbGwgc3RvcCB0aGUgdHJhbnNmb3JtcyBvZiB0aGUgc2NlbmUgZ3JhcGggZnJvbVxuICogIGJlaW5nIHVwZGF0ZWQuIFRoaXMgbWVhbnMgdGhlIGNhbGN1bGF0aW9uIHJldHVybmVkIE1BWSBiZSBvdXQgb2YgZGF0ZSBCVVQgd2lsbCBnaXZlIHlvdSBhXG4gKiAgbmljZSBwZXJmb3JtYW5jZSBib29zdC5cbiAqIEByZXR1cm4ge1BJWEkuUG9pbnR9IFRoZSB1cGRhdGVkIHBvaW50LlxuICovXG5EaXNwbGF5T2JqZWN0LnByb3RvdHlwZS5nZXRHbG9iYWxQb3NpdGlvbiA9IGZ1bmN0aW9uIGdldEdsb2JhbFBvc2l0aW9uKHBvaW50LCBza2lwVXBkYXRlKSB7XG4gICAgaWYgKHBvaW50ID09PSB2b2lkIDApIHsgcG9pbnQgPSBuZXcgUG9pbnQoKTsgfVxuICAgIGlmIChza2lwVXBkYXRlID09PSB2b2lkIDApIHsgc2tpcFVwZGF0ZSA9IGZhbHNlOyB9XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHRoaXMucGFyZW50LnRvR2xvYmFsKHRoaXMucG9zaXRpb24sIHBvaW50LCBza2lwVXBkYXRlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHBvaW50LnggPSB0aGlzLnBvc2l0aW9uLng7XG4gICAgICAgIHBvaW50LnkgPSB0aGlzLnBvc2l0aW9uLnk7XG4gICAgfVxuICAgIHJldHVybiBwb2ludDtcbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1taXhpbi1nZXQtZ2xvYmFsLXBvc2l0aW9uLmVzLmpzLm1hcFxuIl0sIm5hbWVzIjpbIl90ZW1wTWF0cml4IiwiQ2FjaGVEYXRhIiwidGhpcyIsInRleHR1cmVDYWNoZUlkIiwib3JpZ2luYWxSZW5kZXIiLCJvcmlnaW5hbFJlbmRlckNhbnZhcyIsIm9yaWdpbmFsQ2FsY3VsYXRlQm91bmRzIiwib3JpZ2luYWxHZXRMb2NhbEJvdW5kcyIsIm9yaWdpbmFsVXBkYXRlVHJhbnNmb3JtIiwib3JpZ2luYWxEZXN0cm95Iiwib3JpZ2luYWxNYXNrIiwib3JpZ2luYWxGaWx0ZXJBcmVhIiwib3JpZ2luYWxDb250YWluc1BvaW50Iiwic3ByaXRlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydGllcyIsImNhY2hlQXNCaXRtYXAiLCJnZXQiLCJfY2FjaGVBc0JpdG1hcCIsInNldCIsInZhbHVlIiwiZGF0YSIsIl9jYWNoZURhdGEiLCJyZW5kZXIiLCJyZW5kZXJDYW52YXMiLCJ1cGRhdGVUcmFuc2Zvcm0iLCJjYWxjdWxhdGVCb3VuZHMiLCJnZXRMb2NhbEJvdW5kcyIsImRlc3Ryb3kiLCJjb250YWluc1BvaW50IiwiX21hc2siLCJmaWx0ZXJBcmVhIiwiX3JlbmRlckNhY2hlZCIsIl9yZW5kZXJDYWNoZWRDYW52YXMiLCJfY2FjaGVBc0JpdG1hcERlc3Ryb3kiLCJfZGVzdHJveUNhY2hlZERpc3BsYXlPYmplY3QiLCJyZW5kZXJlciIsInZpc2libGUiLCJ3b3JsZEFscGhhIiwicmVuZGVyYWJsZSIsIl9pbml0Q2FjaGVkRGlzcGxheU9iamVjdCIsInRyYW5zZm9ybSIsIl93b3JsZElEIiwiX3JlbmRlciIsImNhY2hlQWxwaGEiLCJhbHBoYSIsImJhdGNoIiwiZmx1c2giLCJib3VuZHMiLCJjbG9uZSIsImZpbHRlcnMiLCJwYWRkaW5nIiwicGFkIiwiY2VpbCIsImNhY2hlZFJlbmRlclRleHR1cmUiLCJyZW5kZXJUZXh0dXJlIiwiY3VycmVudCIsImNhY2hlZFNvdXJjZUZyYW1lIiwic291cmNlRnJhbWUiLCJjYWNoZWREZXN0aW5hdGlvbkZyYW1lIiwiZGVzdGluYXRpb25GcmFtZSIsImNhY2hlZFByb2plY3Rpb25UcmFuc2Zvcm0iLCJwcm9qZWN0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJ1aWQiLCJiYXNlVGV4dHVyZSIsIm0iLCJsb2NhbFRyYW5zZm9ybSIsImNvcHlUbyIsImludmVydCIsInRyYW5zbGF0ZSIsIngiLCJ5IiwiYmluZCIsImRpc3BsYXlPYmplY3RVcGRhdGVUcmFuc2Zvcm0iLCJfY2FsY3VsYXRlQ2FjaGVkQm91bmRzIiwiX2dldENhY2hlZExvY2FsQm91bmRzIiwiY2FjaGVkU3ByaXRlIiwid29ybGRUcmFuc2Zvcm0iLCJhbmNob3IiLCJfYm91bmRzIiwiX3BhcmVudElEIiwicGFyZW50IiwiZW5hYmxlVGVtcFBhcmVudCIsImRpc2FibGVUZW1wUGFyZW50IiwiX2luaXRDYWNoZWREaXNwbGF5T2JqZWN0Q2FudmFzIiwiX3JlbmRlckNhbnZhcyIsImNhY2hlZFJlbmRlclRhcmdldCIsImNvbnRleHQiLCJfcHJvalRyYW5zZm9ybSIsInR4IiwidHkiLCJfdGVtcERpc3BsYXlPYmplY3RQYXJlbnQiLCJjbGVhciIsIl9jYWxjdWxhdGVCb3VuZHMiLCJ1cGRhdGVJRCIsIl9ib3VuZHNJRCIsIl90ZXh0dXJlIiwib3B0aW9ucyIsIm5hbWUiLCJkZWVwIiwiaSIsImoiLCJjaGlsZHJlbiIsImxlbmd0aCIsImdldENoaWxkQnlOYW1lIiwidGFyZ2V0IiwicG9pbnQiLCJza2lwVXBkYXRlIiwidG9HbG9iYWwiLCJwb3NpdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=