"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[4587],{4587:(e,r,t)=>{t.d(r,{Q:()=>s});var n=t(5323),a=t(4295),i=t(5307),o=new a.Ae,s=function(){function e(e){this.renderer=e,e.extract=this}return e.prototype.image=function(e,r,t){var n=new Image;return n.src=this.base64(e,r,t),n},e.prototype.base64=function(e,r,t){return this.canvas(e).toDataURL(r,t)},e.prototype.canvas=function(r){var t,a,s,h=this.renderer,d=!1,u=!1;r&&(r instanceof i.TI?s=r:(s=this.renderer.generateTexture(r),u=!0)),s?(t=s.baseTexture.resolution,a=s.frame,d=!1,h.renderTexture.bind(s)):(t=this.renderer.resolution,d=!0,(a=o).width=this.renderer.width,a.height=this.renderer.height,h.renderTexture.bind(null));var c=Math.floor(a.width*t+1e-4),g=Math.floor(a.height*t+1e-4),l=new n.CanvasRenderTarget(c,g,1),v=new Uint8Array(4*c*g),x=h.gl;x.readPixels(a.x*t,a.y*t,c,g,x.RGBA,x.UNSIGNED_BYTE,v);var f=l.context.getImageData(0,0,c,g);if(e.arrayPostDivide(v,f.data),l.context.putImageData(f,0,0),d){var w=new n.CanvasRenderTarget(l.width,l.height,1);w.context.scale(1,-1),w.context.drawImage(l.canvas,0,-g),l.destroy(),l=w}return u&&s.destroy(!0),l.canvas},e.prototype.pixels=function(r){var t,n,a,s=this.renderer,h=!1;r&&(r instanceof i.TI?a=r:(a=this.renderer.generateTexture(r),h=!0)),a?(t=a.baseTexture.resolution,n=a.frame,s.renderTexture.bind(a)):(t=s.resolution,(n=o).width=s.width,n.height=s.height,s.renderTexture.bind(null));var d=n.width*t,u=n.height*t,c=new Uint8Array(4*d*u),g=s.gl;return g.readPixels(n.x*t,n.y*t,d,u,g.RGBA,g.UNSIGNED_BYTE,c),h&&a.destroy(!0),e.arrayPostDivide(c,c),c},e.prototype.destroy=function(){this.renderer.extract=null,this.renderer=null},e.arrayPostDivide=function(e,r){for(var t=0;t<e.length;t+=4){var n=r[t+3]=e[t+3];0!==n?(r[t]=Math.round(Math.min(255*e[t]/n,255)),r[t+1]=Math.round(Math.min(255*e[t+1]/n,255)),r[t+2]=Math.round(Math.min(255*e[t+2]/n,255))):(r[t]=e[t],r[t+1]=e[t+1],r[t+2]=e[t+2])}},e}()}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U1IsRUFBTVEsT0FBU1QsRUFDeEJjLEVBQWMsSUFBSUMsV0FyS1IsRUFxS3FDUCxFQUFRQyxHQUV2RE8sRUFBSzdCLEVBQVM2QixHQU1sQixPQUxBQSxFQUFHQyxXQUFXaEIsRUFBTWlCLEVBQUlsQixFQUFZQyxFQUFNa0IsRUFBSW5CLEVBQVlRLEVBQU9DLEVBQVFPLEVBQUdJLEtBQU1KLEVBQUdLLGNBQWVQLEdBQ2hHVixHQUNBRixFQUFjNkIsU0FBUSxHQUUxQjdDLEVBQVF1QyxnQkFBZ0JYLEVBQWFBLEdBQzlCQSxDQUNYLEVBS0E1QixFQUFRSSxVQUFVeUMsUUFBVSxXQUN4QjNDLEtBQUtELFNBQVNFLFFBQVUsS0FDeEJELEtBQUtELFNBQVcsSUFDcEIsRUFRQUQsRUFBUXVDLGdCQUFrQixTQUFVTyxFQUFRQyxHQUN4QyxJQUFLLElBQUlDLEVBQUksRUFBR0EsRUFBSUYsRUFBT0csT0FBUUQsR0FBSyxFQUFHLENBQ3ZDLElBQUlFLEVBQVFILEVBQUlDLEVBQUksR0FBS0YsRUFBT0UsRUFBSSxHQUN0QixJQUFWRSxHQUNBSCxFQUFJQyxHQUFLeEIsS0FBSzJCLE1BQU0zQixLQUFLNEIsSUFBZ0IsSUFBWk4sRUFBT0UsR0FBYUUsRUFBTyxNQUN4REgsRUFBSUMsRUFBSSxHQUFLeEIsS0FBSzJCLE1BQU0zQixLQUFLNEIsSUFBb0IsSUFBaEJOLEVBQU9FLEVBQUksR0FBYUUsRUFBTyxNQUNoRUgsRUFBSUMsRUFBSSxHQUFLeEIsS0FBSzJCLE1BQU0zQixLQUFLNEIsSUFBb0IsSUFBaEJOLEVBQU9FLEVBQUksR0FBYUUsRUFBTyxRQUdoRUgsRUFBSUMsR0FBS0YsRUFBT0UsR0FDaEJELEVBQUlDLEVBQUksR0FBS0YsRUFBT0UsRUFBSSxHQUN4QkQsRUFBSUMsRUFBSSxHQUFLRixFQUFPRSxFQUFJLEdBRWhDLENBQ0osRUFDT2hELENBQ1gsQ0F4TDRCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4vbm9kZV9tb2R1bGVzL0BwaXhpL2V4dHJhY3QvbGliL2V4dHJhY3QuZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBAcGl4aS9leHRyYWN0IC0gdjUuMy4xMlxuICogQ29tcGlsZWQgV2VkLCAyMyBNYXIgMjAyMiAxODozNDoyOCBVVENcbiAqXG4gKiBAcGl4aS9leHRyYWN0IGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuaW1wb3J0IHsgQ2FudmFzUmVuZGVyVGFyZ2V0IH0gZnJvbSAnQHBpeGkvdXRpbHMnO1xuaW1wb3J0IHsgUmVjdGFuZ2xlIH0gZnJvbSAnQHBpeGkvbWF0aCc7XG5pbXBvcnQgeyBSZW5kZXJUZXh0dXJlIH0gZnJvbSAnQHBpeGkvY29yZSc7XG5cbnZhciBURU1QX1JFQ1QgPSBuZXcgUmVjdGFuZ2xlKCk7XG52YXIgQllURVNfUEVSX1BJWEVMID0gNDtcbi8qKlxuICogVGhpcyBjbGFzcyBwcm92aWRlcyByZW5kZXJlci1zcGVjaWZpYyBwbHVnaW5zIGZvciBleHBvcnRpbmcgY29udGVudCBmcm9tIGEgcmVuZGVyZXIuXG4gKiBGb3IgaW5zdGFuY2UsIHRoZXNlIHBsdWdpbnMgY2FuIGJlIHVzZWQgZm9yIHNhdmluZyBhbiBJbWFnZSwgQ2FudmFzIGVsZW1lbnQgb3IgZm9yIGV4cG9ydGluZyB0aGUgcmF3IGltYWdlIGRhdGEgKHBpeGVscykuXG4gKlxuICogRG8gbm90IGluc3RhbnRpYXRlIHRoZXNlIHBsdWdpbnMgZGlyZWN0bHkuIEl0IGlzIGF2YWlsYWJsZSBmcm9tIHRoZSBgcmVuZGVyZXIucGx1Z2luc2AgcHJvcGVydHkuXG4gKiBTZWUge0BsaW5rIFBJWEkuQ2FudmFzUmVuZGVyZXIjcGx1Z2luc30gb3Ige0BsaW5rIFBJWEkuUmVuZGVyZXIjcGx1Z2luc30uXG4gKiBAZXhhbXBsZVxuICogLy8gQ3JlYXRlIGEgbmV3IGFwcCAod2lsbCBhdXRvLWFkZCBleHRyYWN0IHBsdWdpbiB0byByZW5kZXJlcilcbiAqIGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uKCk7XG4gKlxuICogLy8gRHJhdyBhIHJlZCBjaXJjbGVcbiAqIGNvbnN0IGdyYXBoaWNzID0gbmV3IFBJWEkuR3JhcGhpY3MoKVxuICogICAgIC5iZWdpbkZpbGwoMHhGRjAwMDApXG4gKiAgICAgLmRyYXdDaXJjbGUoMCwgMCwgNTApO1xuICpcbiAqIC8vIFJlbmRlciB0aGUgZ3JhcGhpY3MgYXMgYW4gSFRNTEltYWdlRWxlbWVudFxuICogY29uc3QgaW1hZ2UgPSBhcHAucmVuZGVyZXIucGx1Z2lucy5leHRyYWN0LmltYWdlKGdyYXBoaWNzKTtcbiAqIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICogQGNsYXNzXG4gKiBAbWVtYmVyb2YgUElYSVxuICovXG52YXIgRXh0cmFjdCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge1BJWEkuUmVuZGVyZXJ9IHJlbmRlcmVyIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnQgcmVuZGVyZXJcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBFeHRyYWN0KHJlbmRlcmVyKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvbGxlY3Rpb24gb2YgbWV0aG9kcyBmb3IgZXh0cmFjdGluZyBkYXRhIChpbWFnZSwgcGl4ZWxzLCBldGMuKSBmcm9tIGEgZGlzcGxheSBvYmplY3Qgb3IgcmVuZGVyIHRleHR1cmVcbiAgICAgICAgICpcbiAgICAgICAgICogQG1lbWJlciB7UElYSS5FeHRyYWN0fSBleHRyYWN0XG4gICAgICAgICAqIEBtZW1iZXJvZiBQSVhJLlJlbmRlcmVyI1xuICAgICAgICAgKiBAc2VlIFBJWEkuRXh0cmFjdFxuICAgICAgICAgKi9cbiAgICAgICAgcmVuZGVyZXIuZXh0cmFjdCA9IHRoaXM7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFdpbGwgcmV0dXJuIGEgSFRNTCBJbWFnZSBvZiB0aGUgdGFyZ2V0XG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BJWEkuRGlzcGxheU9iamVjdHxQSVhJLlJlbmRlclRleHR1cmV9IHRhcmdldCAtIEEgZGlzcGxheU9iamVjdCBvciByZW5kZXJUZXh0dXJlXG4gICAgICogIHRvIGNvbnZlcnQuIElmIGxlZnQgZW1wdHkgd2lsbCB1c2UgdGhlIG1haW4gcmVuZGVyZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gW2Zvcm1hdF0gLSBJbWFnZSBmb3JtYXQsIGUuZy4gXCJpbWFnZS9qcGVnXCIgb3IgXCJpbWFnZS93ZWJwXCIuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtxdWFsaXR5XSAtIEpQRUcgb3IgV2VicCBjb21wcmVzc2lvbiBmcm9tIDAgdG8gMS4gRGVmYXVsdCBpcyAwLjkyLlxuICAgICAqIEByZXR1cm4ge0hUTUxJbWFnZUVsZW1lbnR9IEhUTUwgSW1hZ2Ugb2YgdGhlIHRhcmdldFxuICAgICAqL1xuICAgIEV4dHJhY3QucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24gKHRhcmdldCwgZm9ybWF0LCBxdWFsaXR5KSB7XG4gICAgICAgIHZhciBpbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSB0aGlzLmJhc2U2NCh0YXJnZXQsIGZvcm1hdCwgcXVhbGl0eSk7XG4gICAgICAgIHJldHVybiBpbWFnZTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFdpbGwgcmV0dXJuIGEgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb2YgdGhpcyB0YXJnZXQuIEl0IHdvcmtzIGJ5IGNhbGxpbmdcbiAgICAgKiAgYEV4dHJhY3QuZ2V0Q2FudmFzYCBhbmQgdGhlbiBydW5uaW5nIHRvRGF0YVVSTCBvbiB0aGF0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQSVhJLkRpc3BsYXlPYmplY3R8UElYSS5SZW5kZXJUZXh0dXJlfSB0YXJnZXQgLSBBIGRpc3BsYXlPYmplY3Qgb3IgcmVuZGVyVGV4dHVyZVxuICAgICAqICB0byBjb252ZXJ0LiBJZiBsZWZ0IGVtcHR5IHdpbGwgdXNlIHRoZSBtYWluIHJlbmRlcmVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IFtmb3JtYXRdIC0gSW1hZ2UgZm9ybWF0LCBlLmcuIFwiaW1hZ2UvanBlZ1wiIG9yIFwiaW1hZ2Uvd2VicFwiLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcXVhbGl0eV0gLSBKUEVHIG9yIFdlYnAgY29tcHJlc3Npb24gZnJvbSAwIHRvIDEuIERlZmF1bHQgaXMgMC45Mi5cbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IEEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9mIHRoZSB0ZXh0dXJlLlxuICAgICAqL1xuICAgIEV4dHJhY3QucHJvdG90eXBlLmJhc2U2NCA9IGZ1bmN0aW9uICh0YXJnZXQsIGZvcm1hdCwgcXVhbGl0eSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jYW52YXModGFyZ2V0KS50b0RhdGFVUkwoZm9ybWF0LCBxdWFsaXR5KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBDYW52YXMgZWxlbWVudCwgcmVuZGVycyB0aGlzIHRhcmdldCB0byBpdCBhbmQgdGhlbiByZXR1cm5zIGl0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtQSVhJLkRpc3BsYXlPYmplY3R8UElYSS5SZW5kZXJUZXh0dXJlfSB0YXJnZXQgLSBBIGRpc3BsYXlPYmplY3Qgb3IgcmVuZGVyVGV4dHVyZVxuICAgICAqICB0byBjb252ZXJ0LiBJZiBsZWZ0IGVtcHR5IHdpbGwgdXNlIHRoZSBtYWluIHJlbmRlcmVyXG4gICAgICogQHJldHVybiB7SFRNTENhbnZhc0VsZW1lbnR9IEEgQ2FudmFzIGVsZW1lbnQgd2l0aCB0aGUgdGV4dHVyZSByZW5kZXJlZCBvbi5cbiAgICAgKi9cbiAgICBFeHRyYWN0LnByb3RvdHlwZS5jYW52YXMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICAgIHZhciByZXNvbHV0aW9uO1xuICAgICAgICB2YXIgZnJhbWU7XG4gICAgICAgIHZhciBmbGlwWSA9IGZhbHNlO1xuICAgICAgICB2YXIgcmVuZGVyVGV4dHVyZTtcbiAgICAgICAgdmFyIGdlbmVyYXRlZCA9IGZhbHNlO1xuICAgICAgICBpZiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0IGluc3RhbmNlb2YgUmVuZGVyVGV4dHVyZSkge1xuICAgICAgICAgICAgICAgIHJlbmRlclRleHR1cmUgPSB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZW5kZXJUZXh0dXJlID0gdGhpcy5yZW5kZXJlci5nZW5lcmF0ZVRleHR1cmUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZW5kZXJUZXh0dXJlKSB7XG4gICAgICAgICAgICByZXNvbHV0aW9uID0gcmVuZGVyVGV4dHVyZS5iYXNlVGV4dHVyZS5yZXNvbHV0aW9uO1xuICAgICAgICAgICAgZnJhbWUgPSByZW5kZXJUZXh0dXJlLmZyYW1lO1xuICAgICAgICAgICAgZmxpcFkgPSBmYWxzZTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlclRleHR1cmUuYmluZChyZW5kZXJUZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSB0aGlzLnJlbmRlcmVyLnJlc29sdXRpb247XG4gICAgICAgICAgICBmbGlwWSA9IHRydWU7XG4gICAgICAgICAgICBmcmFtZSA9IFRFTVBfUkVDVDtcbiAgICAgICAgICAgIGZyYW1lLndpZHRoID0gdGhpcy5yZW5kZXJlci53aWR0aDtcbiAgICAgICAgICAgIGZyYW1lLmhlaWdodCA9IHRoaXMucmVuZGVyZXIuaGVpZ2h0O1xuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyVGV4dHVyZS5iaW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWR0aCA9IE1hdGguZmxvb3IoKGZyYW1lLndpZHRoICogcmVzb2x1dGlvbikgKyAxZS00KTtcbiAgICAgICAgdmFyIGhlaWdodCA9IE1hdGguZmxvb3IoKGZyYW1lLmhlaWdodCAqIHJlc29sdXRpb24pICsgMWUtNCk7XG4gICAgICAgIHZhciBjYW52YXNCdWZmZXIgPSBuZXcgQ2FudmFzUmVuZGVyVGFyZ2V0KHdpZHRoLCBoZWlnaHQsIDEpO1xuICAgICAgICB2YXIgd2ViZ2xQaXhlbHMgPSBuZXcgVWludDhBcnJheShCWVRFU19QRVJfUElYRUwgKiB3aWR0aCAqIGhlaWdodCk7XG4gICAgICAgIC8vIHJlYWQgcGl4ZWxzIHRvIHRoZSBhcnJheVxuICAgICAgICB2YXIgZ2wgPSByZW5kZXJlci5nbDtcbiAgICAgICAgZ2wucmVhZFBpeGVscyhmcmFtZS54ICogcmVzb2x1dGlvbiwgZnJhbWUueSAqIHJlc29sdXRpb24sIHdpZHRoLCBoZWlnaHQsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIHdlYmdsUGl4ZWxzKTtcbiAgICAgICAgLy8gYWRkIHRoZSBwaXhlbHMgdG8gdGhlIGNhbnZhc1xuICAgICAgICB2YXIgY2FudmFzRGF0YSA9IGNhbnZhc0J1ZmZlci5jb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgRXh0cmFjdC5hcnJheVBvc3REaXZpZGUod2ViZ2xQaXhlbHMsIGNhbnZhc0RhdGEuZGF0YSk7XG4gICAgICAgIGNhbnZhc0J1ZmZlci5jb250ZXh0LnB1dEltYWdlRGF0YShjYW52YXNEYXRhLCAwLCAwKTtcbiAgICAgICAgLy8gcHVsbGluZyBwaXhlbHNcbiAgICAgICAgaWYgKGZsaXBZKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0XzEgPSBuZXcgQ2FudmFzUmVuZGVyVGFyZ2V0KGNhbnZhc0J1ZmZlci53aWR0aCwgY2FudmFzQnVmZmVyLmhlaWdodCwgMSk7XG4gICAgICAgICAgICB0YXJnZXRfMS5jb250ZXh0LnNjYWxlKDEsIC0xKTtcbiAgICAgICAgICAgIC8vIHdlIGNhbid0IHJlbmRlciB0byBpdHNlbGYgYmVjYXVzZSB3ZSBzaG91bGQgYmUgZW1wdHkgYmVmb3JlIHJlbmRlci5cbiAgICAgICAgICAgIHRhcmdldF8xLmNvbnRleHQuZHJhd0ltYWdlKGNhbnZhc0J1ZmZlci5jYW52YXMsIDAsIC1oZWlnaHQpO1xuICAgICAgICAgICAgY2FudmFzQnVmZmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGNhbnZhc0J1ZmZlciA9IHRhcmdldF8xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZW5lcmF0ZWQpIHtcbiAgICAgICAgICAgIHJlbmRlclRleHR1cmUuZGVzdHJveSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzZW5kIHRoZSBjYW52YXMgYmFjay4uXG4gICAgICAgIHJldHVybiBjYW52YXNCdWZmZXIuY2FudmFzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogV2lsbCByZXR1cm4gYSBvbmUtZGltZW5zaW9uYWwgYXJyYXkgY29udGFpbmluZyB0aGUgcGl4ZWwgZGF0YSBvZiB0aGUgZW50aXJlIHRleHR1cmUgaW4gUkdCQVxuICAgICAqIG9yZGVyLCB3aXRoIGludGVnZXIgdmFsdWVzIGJldHdlZW4gMCBhbmQgMjU1IChpbmNsdWRlZCkuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge1BJWEkuRGlzcGxheU9iamVjdHxQSVhJLlJlbmRlclRleHR1cmV9IHRhcmdldCAtIEEgZGlzcGxheU9iamVjdCBvciByZW5kZXJUZXh0dXJlXG4gICAgICogIHRvIGNvbnZlcnQuIElmIGxlZnQgZW1wdHkgd2lsbCB1c2UgdGhlIG1haW4gcmVuZGVyZXJcbiAgICAgKiBAcmV0dXJuIHtVaW50OEFycmF5fSBPbmUtZGltZW5zaW9uYWwgYXJyYXkgY29udGFpbmluZyB0aGUgcGl4ZWwgZGF0YSBvZiB0aGUgZW50aXJlIHRleHR1cmVcbiAgICAgKi9cbiAgICBFeHRyYWN0LnByb3RvdHlwZS5waXhlbHMgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgICAgIHZhciByZXNvbHV0aW9uO1xuICAgICAgICB2YXIgZnJhbWU7XG4gICAgICAgIHZhciByZW5kZXJUZXh0dXJlO1xuICAgICAgICB2YXIgZ2VuZXJhdGVkID0gZmFsc2U7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgaW5zdGFuY2VvZiBSZW5kZXJUZXh0dXJlKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyVGV4dHVyZSA9IHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlbmRlclRleHR1cmUgPSB0aGlzLnJlbmRlcmVyLmdlbmVyYXRlVGV4dHVyZSh0YXJnZXQpO1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlbmRlclRleHR1cmUpIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZW5kZXJUZXh0dXJlLmJhc2VUZXh0dXJlLnJlc29sdXRpb247XG4gICAgICAgICAgICBmcmFtZSA9IHJlbmRlclRleHR1cmUuZnJhbWU7XG4gICAgICAgICAgICAvLyBiaW5kIHRoZSBidWZmZXJcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlclRleHR1cmUuYmluZChyZW5kZXJUZXh0dXJlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlc29sdXRpb24gPSByZW5kZXJlci5yZXNvbHV0aW9uO1xuICAgICAgICAgICAgZnJhbWUgPSBURU1QX1JFQ1Q7XG4gICAgICAgICAgICBmcmFtZS53aWR0aCA9IHJlbmRlcmVyLndpZHRoO1xuICAgICAgICAgICAgZnJhbWUuaGVpZ2h0ID0gcmVuZGVyZXIuaGVpZ2h0O1xuICAgICAgICAgICAgcmVuZGVyZXIucmVuZGVyVGV4dHVyZS5iaW5kKG51bGwpO1xuICAgICAgICB9XG4gICAgICAgIHZhciB3aWR0aCA9IGZyYW1lLndpZHRoICogcmVzb2x1dGlvbjtcbiAgICAgICAgdmFyIGhlaWdodCA9IGZyYW1lLmhlaWdodCAqIHJlc29sdXRpb247XG4gICAgICAgIHZhciB3ZWJnbFBpeGVscyA9IG5ldyBVaW50OEFycmF5KEJZVEVTX1BFUl9QSVhFTCAqIHdpZHRoICogaGVpZ2h0KTtcbiAgICAgICAgLy8gcmVhZCBwaXhlbHMgdG8gdGhlIGFycmF5XG4gICAgICAgIHZhciBnbCA9IHJlbmRlcmVyLmdsO1xuICAgICAgICBnbC5yZWFkUGl4ZWxzKGZyYW1lLnggKiByZXNvbHV0aW9uLCBmcmFtZS55ICogcmVzb2x1dGlvbiwgd2lkdGgsIGhlaWdodCwgZ2wuUkdCQSwgZ2wuVU5TSUdORURfQllURSwgd2ViZ2xQaXhlbHMpO1xuICAgICAgICBpZiAoZ2VuZXJhdGVkKSB7XG4gICAgICAgICAgICByZW5kZXJUZXh0dXJlLmRlc3Ryb3kodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgRXh0cmFjdC5hcnJheVBvc3REaXZpZGUod2ViZ2xQaXhlbHMsIHdlYmdsUGl4ZWxzKTtcbiAgICAgICAgcmV0dXJuIHdlYmdsUGl4ZWxzO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogRGVzdHJveXMgdGhlIGV4dHJhY3RcbiAgICAgKlxuICAgICAqL1xuICAgIEV4dHJhY3QucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuZXh0cmFjdCA9IG51bGw7XG4gICAgICAgIHRoaXMucmVuZGVyZXIgPSBudWxsO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogVGFrZXMgcHJlbXVsdGlwbGllZCBwaXhlbCBkYXRhIGFuZCBwcm9kdWNlcyByZWd1bGFyIHBpeGVsIGRhdGFcbiAgICAgKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHBpeGVscyB7bnVtYmVyW10gfCBVaW50OEFycmF5IHwgVWludDhDbGFtcGVkQXJyYXl9IGFycmF5IG9mIHBpeGVsIGRhdGFcbiAgICAgKiBAcGFyYW0gb3V0IHtudW1iZXJbXSB8IFVpbnQ4QXJyYXkgfCBVaW50OENsYW1wZWRBcnJheX0gb3V0cHV0IGFycmF5XG4gICAgICovXG4gICAgRXh0cmFjdC5hcnJheVBvc3REaXZpZGUgPSBmdW5jdGlvbiAocGl4ZWxzLCBvdXQpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaXhlbHMubGVuZ3RoOyBpICs9IDQpIHtcbiAgICAgICAgICAgIHZhciBhbHBoYSA9IG91dFtpICsgM10gPSBwaXhlbHNbaSArIDNdO1xuICAgICAgICAgICAgaWYgKGFscGhhICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgb3V0W2ldID0gTWF0aC5yb3VuZChNYXRoLm1pbihwaXhlbHNbaV0gKiAyNTUuMCAvIGFscGhhLCAyNTUuMCkpO1xuICAgICAgICAgICAgICAgIG91dFtpICsgMV0gPSBNYXRoLnJvdW5kKE1hdGgubWluKHBpeGVsc1tpICsgMV0gKiAyNTUuMCAvIGFscGhhLCAyNTUuMCkpO1xuICAgICAgICAgICAgICAgIG91dFtpICsgMl0gPSBNYXRoLnJvdW5kKE1hdGgubWluKHBpeGVsc1tpICsgMl0gKiAyNTUuMCAvIGFscGhhLCAyNTUuMCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgb3V0W2ldID0gcGl4ZWxzW2ldO1xuICAgICAgICAgICAgICAgIG91dFtpICsgMV0gPSBwaXhlbHNbaSArIDFdO1xuICAgICAgICAgICAgICAgIG91dFtpICsgMl0gPSBwaXhlbHNbaSArIDJdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gRXh0cmFjdDtcbn0oKSk7XG5cbmV4cG9ydCB7IEV4dHJhY3QgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4dHJhY3QuZXMuanMubWFwXG4iXSwibmFtZXMiOlsiVEVNUF9SRUNUIiwiRXh0cmFjdCIsInJlbmRlcmVyIiwidGhpcyIsImV4dHJhY3QiLCJwcm90b3R5cGUiLCJpbWFnZSIsInRhcmdldCIsImZvcm1hdCIsInF1YWxpdHkiLCJJbWFnZSIsInNyYyIsImJhc2U2NCIsImNhbnZhcyIsInRvRGF0YVVSTCIsInJlc29sdXRpb24iLCJmcmFtZSIsInJlbmRlclRleHR1cmUiLCJmbGlwWSIsImdlbmVyYXRlZCIsImdlbmVyYXRlVGV4dHVyZSIsImJhc2VUZXh0dXJlIiwiYmluZCIsIndpZHRoIiwiaGVpZ2h0IiwiTWF0aCIsImZsb29yIiwiY2FudmFzQnVmZmVyIiwiQ2FudmFzUmVuZGVyVGFyZ2V0Iiwid2ViZ2xQaXhlbHMiLCJVaW50OEFycmF5IiwiZ2wiLCJyZWFkUGl4ZWxzIiwieCIsInkiLCJSR0JBIiwiVU5TSUdORURfQllURSIsImNhbnZhc0RhdGEiLCJjb250ZXh0IiwiZ2V0SW1hZ2VEYXRhIiwiYXJyYXlQb3N0RGl2aWRlIiwiZGF0YSIsInB1dEltYWdlRGF0YSIsInRhcmdldF8xIiwic2NhbGUiLCJkcmF3SW1hZ2UiLCJkZXN0cm95IiwicGl4ZWxzIiwib3V0IiwiaSIsImxlbmd0aCIsImFscGhhIiwicm91bmQiLCJtaW4iXSwic291cmNlUm9vdCI6IiJ9