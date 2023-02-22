"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[1562],{912:function(e,t,i){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=i(9777),o=a(i(542)),s=a(i(1054)),h=a(i(9427)),n=a(i(9054));class l extends h.default{constructor(){super(),this.textureCache={},this.loadDelayer=0,this.allSlices=[],this.addAllSlices()}enter(){if(console.log("VIEWER?",!!this.viewer,this.viewer?.alive),!this.viewer||!this.viewer.alive){this.viewer=this.gi.make(n.default);for(let e=0;e<this.allSlices.length;e++){let t=this.allSlices[e];this.viewer.addSlice(t.texture,t.planeNormal,t.ox,t.oy,t.oz,t.scale)}}this.frontDirectionalLightSource||(this.frontDirectionalLightSource=new r.Three.DirectionalLight(16777215,10),this.frontDirectionalLightSource.position.set(0,0,1),this.frontDirectionalLightSource.castShadow=!0,this.frontDirectionalLightSource.shadow.mapSize.width=2048,this.frontDirectionalLightSource.shadow.mapSize.height=2048,this.frontDirectionalLightSource.shadow.camera.near=.5,this.frontDirectionalLightSource.shadow.camera.far=500,this.topDirectionalLightSource=new r.Three.DirectionalLight(16777215,5),this.topDirectionalLightSource.position.set(0,1,0),this.topDirectionalLightSource.castShadow=!0,this.leftDirectionalLightSource=new r.Three.DirectionalLight(16777215,2.5),this.topDirectionalLightSource.position.set(1,0,0),this.topDirectionalLightSource.castShadow=!0,this.rightDirectionalLightSource=new r.Three.DirectionalLight(16777215,2.5),this.topDirectionalLightSource.position.set(-1,0,0),this.topDirectionalLightSource.castShadow=!0),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.add(this.frontDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.add(this.topDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.add(this.rightDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.add(this.leftDirectionalLightSource),this.viewer.show(),this.gm.target=0}leave(){this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.frontDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.topDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.leftDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.rightDirectionalLightSource),this.viewer.hide(),this.gm.target=1}async addAllSlices(){await this.addSlice(i(6486).Z,"x",16,0,0,.949);for(let e=0;e<s.default.length/2;e+=1)await this.addSlice(i(8665)(`./${s.default[e].ID}.png`).default,"z",0,0,2*(s.default[e].IndexInSeries-60));for(let e=0;e<o.default.length;e+=5)await this.addSlice(i(6528)(`./${o.default[e].ID}.png`).default,"y",0,4*(o.default[e].IndexInSeries-15)+8,0)}async addSlice(e,t,i,a,o,s){let h=this.textureCache[e];h||(h=await new Promise((t=>{const i=new r.Three.TextureLoader(r.Three.DefaultLoadingManager).load(e,(()=>{t(i)}))})),this.textureCache[e]=h),this.allSlices.push({texture:h,planeNormal:t,ox:i,oy:a,oz:o,scale:s}),this.viewer&&this.viewer.addSlice(h,t,i,a,o,s)}destroy(e){this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.frontDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.topDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.leftDirectionalLightSource),this.gi.getPlugin(r.Canvas3dPlugin).threeWorld.threeScene.remove(this.rightDirectionalLightSource),this.gi.destroyObject(this.viewer,e)}}t.default=l},9054:function(e,t,i){var a=this&&this.__decorate||function(e,t,i,a){var r,o=arguments.length,s=o<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,i):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,i,a);else for(var h=e.length-1;h>=0;h--)(r=e[h])&&(s=(o<3?r(s):o>3?r(t,i,s):r(t,i))||s);return o>3&&s&&Object.defineProperty(t,i,s),s},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});const o=i(9777),s=i(5412);let h=class extends s.GameObject{constructor(){super(),this.dying=!1,this.opacity=0,this.targetOpacity=0,this.allMaterials=[],this.mainGroup=new o.Three.Group,this.addDisplayObject(this.mainGroup),this.mainGroup.rotation.x=.1,this.square=new o.Three.PlaneGeometry(1,1),this.decorationRedMaterial=new o.Three.MeshBasicMaterial({color:16744576,side:o.Three.DoubleSide,transparent:!0}),this.allMaterials.push(this.decorationRedMaterial);for(let e=0;e<20;e++){const t=new o.Three.Mesh(this.square,this.decorationRedMaterial);e%5?(t.scale.x=.01,t.scale.y=.02):(t.scale.x=.01,t.scale.y=.1);const i=e/20*2*Math.PI,a=Math.cos(i),r=Math.sin(i);t.rotation.x=Math.PI/2,t.rotation.z=i+Math.PI/2,t.position.z=12*r/26,t.position.x=12*a/26,t.position.y=-0,this.mainGroup.add(t)}}show(){this.targetOpacity=1}hide(){this.targetOpacity=0}addSlice(e,t,i,a,r,s){let h=new o.Three.MeshStandardMaterial({color:16777215,side:o.Three.DoubleSide,transparent:!0,alphaMap:e,map:e,alphaTest:.1,opacity:this.opacity});this.allMaterials.push(h),h.depthWrite=!1,h.needsUpdate=!0;const n=new o.Three.Mesh(this.square,h);switch(n.castShadow=!0,n.receiveShadow=!0,t){case"x":n.rotation.y=Math.PI/2;break;case"y":n.rotation.order="YXZ",n.rotation.x=Math.PI/2,n.rotation.y=-Math.PI/2}n.position.x=1*i/162,n.position.y=1*a/162,n.position.z=1*r/162,this.mainGroup.add(n),s&&(n.scale.x=s,n.scale.y=s,n.scale.z=s)}fixedUpdate(){0==this.opacity&&0==this.targetOpacity&&this.gi.destroyObject(this,s.DeathType.Unloaded)}drawUpdate(e){if(this.mainGroup.rotation.y+=e,this.opacity!=this.targetOpacity){let t=Math.exp(-e*(this.targetOpacity?2:4));this.opacity=this.targetOpacity-(this.targetOpacity-this.opacity)*t,Math.abs(this.opacity-this.targetOpacity)<.01&&(this.opacity=this.targetOpacity);for(let e in this.allMaterials)this.allMaterials[e].opacity=this.opacity}}destroy(){this.square.dispose(),this.decorationRedMaterial.dispose()}};h=a([o.drawable3d,r("design:paramtypes",[])],h),t.default=h}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXpIRSxJQTBIckJrRixFQUFNM0UsU0FBUzRELEVBQVMsRUFBTGxFLEVBMUhFLElBMkhyQmlGLEVBQU0zRSxTQUFTbUUsRUFBUyxFQUFMeEUsRUEzSEUsSUE2SHJCakIsS0FBS21FLFVBQVU1QixJQUFJMEQsR0FFaEIvRSxJQUNGK0UsRUFBTS9FLE1BQU1xRCxFQUFJckQsRUFDaEIrRSxFQUFNL0UsTUFBTWdFLEVBQUloRSxFQUNoQitFLEVBQU0vRSxNQUFNdUUsRUFBSXZFLEVBRWxCLENBRUFrRixjQUNvQixHQUFoQnBHLEtBQUtnRSxTQUFzQyxHQUF0QmhFLEtBQUtpRSxlQUM1QmpFLEtBQUtPLEdBQUdxRCxjQUFjNUQsS0FBTSxFQUFBcUcsVUFBVUMsU0FHeEMsQ0FFQUMsV0FBV0MsR0FHVixHQUZBeEcsS0FBS21FLFVBQVVHLFNBQVNZLEdBQUtzQixFQUUxQnhHLEtBQUtnRSxTQUFXaEUsS0FBS2lFLGNBQWMsQ0FDckMsSUFBSXdDLEVBQU9yQixLQUFLc0IsS0FBS0YsR0FBSXhHLEtBQUtpRSxjQUFnQixFQUFJLElBQ2xEakUsS0FBS2dFLFFBQVVoRSxLQUFLaUUsZUFBaUJqRSxLQUFLaUUsY0FBY2pFLEtBQUtnRSxTQUFXeUMsRUFDckVyQixLQUFLdUIsSUFBSTNHLEtBQUtnRSxRQUFVaEUsS0FBS2lFLGVBQWlCLE1BQ2hEakUsS0FBS2dFLFFBQVVoRSxLQUFLaUUsZUFHckIsSUFBSSxJQUFJMkMsS0FBSzVHLEtBQUtrRSxhQUNUbEUsS0FBS2tFLGFBQWEwQyxHQUN4QjVDLFFBQVVoRSxLQUFLZ0UsTyxDQUdwQixDQUVBTixVQUVDMUQsS0FBS3dFLE9BQU9xQyxVQUNaN0csS0FBSzBFLHNCQUFzQm1DLFNBRTVCLEdBaEtLaEQsRUFBVSxHQURmLEVBQUFpRCxXLDJCQUNLakQsR0FtS04sVUFBZUEsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dlYXIzZW5naW5lLXdlYnNpdGUvLi9zcmMvZ2FtZS9zY2VuZXMvYnVzaW5lc3MvYnVzaW5lc3MtbWFuYWdlci50cyIsIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4vc3JjL2dhbWUvc2NlbmVzL2J1c2luZXNzL2VudGl0aWVzL3NjYW4tdmlld2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFtYmllbnRMaWdodCwgQ2FudmFzM2RQbHVnaW4sIFRocmVlIH0gZnJvbSBcImczZS1jYW52YXMtM2RcIjtcclxuaW1wb3J0IHsgRGVhdGhUeXBlIH0gZnJvbSBcImdlYXIzZW5naW5lXCI7XHJcbmltcG9ydCBCcmFpbkRhdGFBeCBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2JyYWluL2F4L2JyYWluLWRhdGEtYXhcIjtcclxuaW1wb3J0IEJyYWluRGF0YVNhZyBmcm9tIFwiLi4vLi4vLi4vYXNzZXRzL2JyYWluL3NhZy9icmFpbi1kYXRhLXNhZ1wiO1xyXG5pbXBvcnQgR2FtZU1hbmFnZXIgZnJvbSBcIi4uLy4uL2dhbWUtbWFuYWdlclwiO1xyXG5pbXBvcnQgU2NlbmVNYW5hZ2VyIGZyb20gXCIuLi9zY2VuZS1tYW5hZ2VyXCI7XHJcbmltcG9ydCBTY2FuVmlld2VyIGZyb20gXCIuL2VudGl0aWVzL3NjYW4tdmlld2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCdXNpbmVzc01hbmFnZXIgZXh0ZW5kcyBTY2VuZU1hbmFnZXJ7XHJcblxyXG5cdHByaXZhdGUgdmlld2VyOiBTY2FuVmlld2VyO1xyXG5cdHByaXZhdGUgZnJvbnREaXJlY3Rpb25hbExpZ2h0U291cmNlOiBUaHJlZS5EaXJlY3Rpb25hbExpZ2h0O1xyXG5cdHByaXZhdGUgdG9wRGlyZWN0aW9uYWxMaWdodFNvdXJjZTogVGhyZWUuRGlyZWN0aW9uYWxMaWdodDtcclxuXHRwcml2YXRlIGFtYmllbnRMaWdodDogQW1iaWVudExpZ2h0O1xyXG5cdHByaXZhdGUgbGVmdERpcmVjdGlvbmFsTGlnaHRTb3VyY2U6IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQ7XHJcblx0cHJpdmF0ZSByaWdodERpcmVjdGlvbmFsTGlnaHRTb3VyY2U6IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQ7XHJcblx0cHJpdmF0ZSB0ZXh0dXJlQ2FjaGU6IFJlY29yZDxzdHJpbmcsIFRocmVlLlRleHR1cmU+ID0ge307XHJcblx0Z206IEdhbWVNYW5hZ2VyO1xyXG5cdHByaXZhdGUgbG9hZERlbGF5ZXIgPSAwO1xyXG5cclxuXHRwcml2YXRlIGFsbFNsaWNlczogQXJyYXk8e3RleHR1cmU6VGhyZWUuVGV4dHVyZSwgcGxhbmVOb3JtYWw6XCJ4XCJ8XCJ5XCJ8XCJ6XCIsIG94Om51bWJlciwgb3k6bnVtYmVyLCBvejpudW1iZXIsIHNjYWxlOm51bWJlcn0+ID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMuYWRkQWxsU2xpY2VzKCk7XHJcblx0fVxyXG5cclxuXHRlbnRlcigpIHtcclxuXHRcdGNvbnNvbGUubG9nKFwiVklFV0VSP1wiLCAhIXRoaXMudmlld2VyLCB0aGlzLnZpZXdlcj8uYWxpdmUpO1xyXG5cdFx0aWYoIXRoaXMudmlld2VyIHx8ICF0aGlzLnZpZXdlci5hbGl2ZSkge1xyXG5cdFx0XHR0aGlzLnZpZXdlciA9IHRoaXMuZ2kubWFrZShTY2FuVmlld2VyKTtcclxuXHRcdFx0XHJcblx0XHRcdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbFNsaWNlcy5sZW5ndGg7IGkrKyl7XHJcblx0XHRcdFx0bGV0IHMgPSB0aGlzLmFsbFNsaWNlc1tpXTtcclxuXHRcdFx0XHR0aGlzLnZpZXdlci5hZGRTbGljZShzLnRleHR1cmUsIHMucGxhbmVOb3JtYWwsIHMub3gsIHMub3ksIHMub3osIHMuc2NhbGUpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0aWYoIXRoaXMuZnJvbnREaXJlY3Rpb25hbExpZ2h0U291cmNlKXtcclxuXHRcdFx0dGhpcy5mcm9udERpcmVjdGlvbmFsTGlnaHRTb3VyY2UgPSBuZXcgVGhyZWUuRGlyZWN0aW9uYWxMaWdodChcclxuXHRcdFx0XHQweGZmZmZmZixcclxuXHRcdFx0XHQxMFxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZS5wb3NpdGlvbi5zZXQoMCwgMCwgMSk7IC8vZGVmYXVsdDsgbGlnaHQgc2hpbmluZyBmcm9tIHRvcFxyXG5cdFx0XHR0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZS5jYXN0U2hhZG93ID0gdHJ1ZTsgLy8gZGVmYXVsdCBmYWxzZVxyXG5cclxuXHRcdFx0Ly9TZXQgdXAgc2hhZG93IHByb3BlcnRpZXMgZm9yIHRoZSBsaWdodFxyXG5cdFx0XHR0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZS5zaGFkb3cubWFwU2l6ZS53aWR0aCA9IDIwNDg7XHJcblx0XHRcdHRoaXMuZnJvbnREaXJlY3Rpb25hbExpZ2h0U291cmNlLnNoYWRvdy5tYXBTaXplLmhlaWdodCA9IDIwNDg7XHJcblx0XHRcdHRoaXMuZnJvbnREaXJlY3Rpb25hbExpZ2h0U291cmNlLnNoYWRvdy5jYW1lcmEubmVhciA9IDAuNTsgLy8gZGVmYXVsdFxyXG5cdFx0XHR0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZS5zaGFkb3cuY2FtZXJhLmZhciA9IDUwMDsgLy8gZGVmYXVsdFxyXG5cclxuXHRcdFx0dGhpcy50b3BEaXJlY3Rpb25hbExpZ2h0U291cmNlID0gbmV3IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQoXHJcblx0XHRcdFx0MHhmZmZmZmYsXHJcblx0XHRcdFx0NVxyXG5cdFx0XHQpO1xyXG5cdFx0XHR0aGlzLnRvcERpcmVjdGlvbmFsTGlnaHRTb3VyY2UucG9zaXRpb24uc2V0KDAsIDEsIDApOyAvL2RlZmF1bHQ7IGxpZ2h0IHNoaW5pbmcgZnJvbSB0b3BcclxuXHRcdFx0dGhpcy50b3BEaXJlY3Rpb25hbExpZ2h0U291cmNlLmNhc3RTaGFkb3cgPSB0cnVlOyAvLyBkZWZhdWx0IGZhbHNlXHJcblxyXG5cdFx0XHR0aGlzLmxlZnREaXJlY3Rpb25hbExpZ2h0U291cmNlID0gbmV3IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQoXHJcblx0XHRcdFx0MHhmZmZmZmYsXHJcblx0XHRcdFx0Mi41XHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMudG9wRGlyZWN0aW9uYWxMaWdodFNvdXJjZS5wb3NpdGlvbi5zZXQoMSwgMCwgMCk7IC8vZGVmYXVsdDsgbGlnaHQgc2hpbmluZyBmcm9tIHRvcFxyXG5cdFx0XHR0aGlzLnRvcERpcmVjdGlvbmFsTGlnaHRTb3VyY2UuY2FzdFNoYWRvdyA9IHRydWU7IC8vIGRlZmF1bHQgZmFsc2VcclxuXHJcblx0XHRcdHRoaXMucmlnaHREaXJlY3Rpb25hbExpZ2h0U291cmNlID0gbmV3IFRocmVlLkRpcmVjdGlvbmFsTGlnaHQoXHJcblx0XHRcdFx0MHhmZmZmZmYsXHJcblx0XHRcdFx0Mi41XHJcblx0XHRcdCk7XHJcblx0XHRcdHRoaXMudG9wRGlyZWN0aW9uYWxMaWdodFNvdXJjZS5wb3NpdGlvbi5zZXQoLTEsIDAsIDApOyAvL2RlZmF1bHQ7IGxpZ2h0IHNoaW5pbmcgZnJvbSB0b3BcclxuXHRcdFx0dGhpcy50b3BEaXJlY3Rpb25hbExpZ2h0U291cmNlLmNhc3RTaGFkb3cgPSB0cnVlOyAvLyBkZWZhdWx0IGZhbHNlXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5naS5nZXRQbHVnaW4oQ2FudmFzM2RQbHVnaW4pLnRocmVlV29ybGQudGhyZWVTY2VuZS5hZGQodGhpcy5mcm9udERpcmVjdGlvbmFsTGlnaHRTb3VyY2UpO1xyXG5cdFx0dGhpcy5naS5nZXRQbHVnaW4oQ2FudmFzM2RQbHVnaW4pLnRocmVlV29ybGQudGhyZWVTY2VuZS5hZGQodGhpcy50b3BEaXJlY3Rpb25hbExpZ2h0U291cmNlKTtcclxuXHRcdHRoaXMuZ2kuZ2V0UGx1Z2luKENhbnZhczNkUGx1Z2luKS50aHJlZVdvcmxkLnRocmVlU2NlbmUuYWRkKHRoaXMucmlnaHREaXJlY3Rpb25hbExpZ2h0U291cmNlKTtcclxuXHRcdHRoaXMuZ2kuZ2V0UGx1Z2luKENhbnZhczNkUGx1Z2luKS50aHJlZVdvcmxkLnRocmVlU2NlbmUuYWRkKHRoaXMubGVmdERpcmVjdGlvbmFsTGlnaHRTb3VyY2UpO1xyXG5cclxuXHRcdHRoaXMudmlld2VyLnNob3coKTtcclxuXHJcblx0XHR0aGlzLmdtLnRhcmdldCA9IDA7XHJcblx0XHQvLyB0aGlzLmFtYmllbnRMaWdodC5pbnRlbnNpdHkgPSAwO1xyXG5cdFx0Ly8gdGhpcy5hbWJpZW50TGlnaHQudXBkYXRlTGlnaHRQcm9wcygpO1xyXG5cdH1cclxuXHJcblx0bGVhdmUoKSB7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLnRvcERpcmVjdGlvbmFsTGlnaHRTb3VyY2UpO1xyXG5cdFx0dGhpcy5naS5nZXRQbHVnaW4oQ2FudmFzM2RQbHVnaW4pLnRocmVlV29ybGQudGhyZWVTY2VuZS5yZW1vdmUodGhpcy5sZWZ0RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLnJpZ2h0RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLnZpZXdlci5oaWRlKCk7XHJcblxyXG5cdFx0dGhpcy5nbS50YXJnZXQgPSAxO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgYWRkQWxsU2xpY2VzKCl7XHJcblx0XHRhd2FpdCB0aGlzLmFkZFNsaWNlKHJlcXVpcmUoYC4uLy4uLy4uL2Fzc2V0cy9icmFpbi9jb3IvZGUxNWQ3NWMtMTYzZDc3OGQtZThkZDZjODktMDE4ZGYzMjctMjMxNGMyMmYucG5nYCkuZGVmYXVsdCwgXCJ4XCIsIDE2LDAsMCwgMC45NDkpO1xyXG5cclxuXHRcdGZvcihsZXQgaSA9IDA7IGkgPCBCcmFpbkRhdGFTYWcubGVuZ3RoLzI7IGkrPTEpe1xyXG5cdFx0XHRhd2FpdCB0aGlzLmFkZFNsaWNlKHJlcXVpcmUoYC4uLy4uLy4uL2Fzc2V0cy9icmFpbi9zYWcvJHtCcmFpbkRhdGFTYWdbaV0uSUR9LnBuZ2ApLmRlZmF1bHQsIFwielwiLCAwLDAsKEJyYWluRGF0YVNhZ1tpXS5JbmRleEluU2VyaWVzIC0gNjApICogMik7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yKGxldCBpID0gMDsgaSA8IEJyYWluRGF0YUF4Lmxlbmd0aDsgaSs9NSl7XHJcblx0XHRcdGF3YWl0IHRoaXMuYWRkU2xpY2UocmVxdWlyZShgLi4vLi4vLi4vYXNzZXRzL2JyYWluL2F4LyR7QnJhaW5EYXRhQXhbaV0uSUR9LnBuZ2ApLmRlZmF1bHQsIFwieVwiLCAwLChCcmFpbkRhdGFBeFtpXS5JbmRleEluU2VyaWVzIC0gMTUpICogNCArIDgsMCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRhc3luYyBhZGRTbGljZSh0ZXh0dXJlVXJsOiBzdHJpbmcsIHBsYW5lTm9ybWFsOiBcInhcInxcInlcInxcInpcIiwgb3g6IG51bWJlciwgb3k6IG51bWJlciwgb3o6IG51bWJlciwgc2NhbGU/OiBudW1iZXIpe1xyXG5cdFx0bGV0IHRleHR1cmU6IFRocmVlLlRleHR1cmUgPSB0aGlzLnRleHR1cmVDYWNoZVt0ZXh0dXJlVXJsXTtcclxuXHRcdGlmKCF0ZXh0dXJlKXtcclxuXHRcdFx0XHJcblx0XHRcdHRleHR1cmUgPSBhd2FpdCBuZXcgUHJvbWlzZTxhbnk+KHJlc29sdmUgPT4ge1xyXG5cdFx0XHRcdGNvbnN0IGxvYWRlZFRleHR1cmUgPSBuZXcgVGhyZWUuVGV4dHVyZUxvYWRlcihUaHJlZS5EZWZhdWx0TG9hZGluZ01hbmFnZXIpLmxvYWQoXHJcblx0XHRcdFx0dGV4dHVyZVVybCxcclxuXHRcdFx0XHQoKSA9PiB7XHJcblx0XHRcdFx0XHRyZXNvbHZlKGxvYWRlZFRleHR1cmUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0XHR0aGlzLnRleHR1cmVDYWNoZVt0ZXh0dXJlVXJsXSA9IHRleHR1cmU7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5hbGxTbGljZXMucHVzaCh7dGV4dHVyZTp0ZXh0dXJlLCBwbGFuZU5vcm1hbDpwbGFuZU5vcm1hbCwgb3g6b3gsIG95Om95LCBvejpveiwgc2NhbGU6c2NhbGV9KTtcclxuXHRcdGlmKHRoaXMudmlld2VyKSB0aGlzLnZpZXdlci5hZGRTbGljZSh0ZXh0dXJlLCBwbGFuZU5vcm1hbCwgb3gsIG95LCBveiwgc2NhbGUpO1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KHQ6IERlYXRoVHlwZSl7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLmZyb250RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLnRvcERpcmVjdGlvbmFsTGlnaHRTb3VyY2UpO1xyXG5cdFx0dGhpcy5naS5nZXRQbHVnaW4oQ2FudmFzM2RQbHVnaW4pLnRocmVlV29ybGQudGhyZWVTY2VuZS5yZW1vdmUodGhpcy5sZWZ0RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLmdpLmdldFBsdWdpbihDYW52YXMzZFBsdWdpbikudGhyZWVXb3JsZC50aHJlZVNjZW5lLnJlbW92ZSh0aGlzLnJpZ2h0RGlyZWN0aW9uYWxMaWdodFNvdXJjZSk7XHJcblx0XHR0aGlzLmdpLmRlc3Ryb3lPYmplY3QodGhpcy52aWV3ZXIsIHQpO1xyXG5cdH1cclxufSIsImltcG9ydCB7IERyYXdhYmxlM2QsIGRyYXdhYmxlM2QsIFRocmVlIH0gZnJvbSBcImczZS1jYW52YXMtM2RcIjtcclxuaW1wb3J0IHsgRGVhdGhUeXBlLCBHYW1lT2JqZWN0IH0gZnJvbSBcImdlYXIzZW5naW5lXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIFNjYW5WaWV3ZXIgZXh0ZW5kcyBEcmF3YWJsZTNke31cclxuXHJcbmNvbnN0IHRpbGVTaXplID0gMjU7XHJcbmNvbnN0IGZpbGVSZXNvbHV0aW9uID0gMTYyO1xyXG5cclxuQGRyYXdhYmxlM2RcclxuY2xhc3MgU2NhblZpZXdlciBleHRlbmRzIEdhbWVPYmplY3R7XHJcblx0c3F1YXJlOiBUaHJlZS5QbGFuZUdlb21ldHJ5O1xyXG5cdGRlY29yYXRpb25SZWRNYXRlcmlhbDogVGhyZWUuTWVzaEJhc2ljTWF0ZXJpYWw7XHJcblxyXG5cdGR5aW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0bWFpbkdyb3VwOiBUaHJlZS5Hcm91cDtcclxuXHRvcGFjaXR5ID0gMDtcclxuXHR0YXJnZXRPcGFjaXR5OiBudW1iZXIgPSAwO1xyXG5cdGFsbE1hdGVyaWFsczogQXJyYXk8VGhyZWUuTWF0ZXJpYWw+ID0gW107XHJcblxyXG5cdGNvbnN0cnVjdG9yKCl7XHJcblx0XHRzdXBlcigpO1xyXG5cclxuXHRcdHRoaXMubWFpbkdyb3VwID0gbmV3IFRocmVlLkdyb3VwKCk7XHJcblx0XHR0aGlzLmFkZERpc3BsYXlPYmplY3QodGhpcy5tYWluR3JvdXApO1xyXG5cclxuXHRcdHRoaXMubWFpbkdyb3VwLnJvdGF0aW9uLnggPSAwLjE7XHJcblxyXG5cdFx0dGhpcy5zcXVhcmUgPSBuZXcgVGhyZWUuUGxhbmVHZW9tZXRyeSgxLCAxKTtcclxuXHRcdC8vIHRoaXMuc3F1YXJlLnNjYWxlKDI1LDI1LDI1KTtcclxuXHJcblx0XHR0aGlzLmRlY29yYXRpb25SZWRNYXRlcmlhbCA9IG5ldyBUaHJlZS5NZXNoQmFzaWNNYXRlcmlhbCh7XHJcblx0XHRcdGNvbG9yOiAweGZmODA4MCxcclxuXHRcdFx0c2lkZTogVGhyZWUuRG91YmxlU2lkZSxcclxuXHRcdFx0dHJhbnNwYXJlbnQ6IHRydWVcclxuXHRcdH0pO1xyXG5cclxuXHRcdHRoaXMuYWxsTWF0ZXJpYWxzLnB1c2godGhpcy5kZWNvcmF0aW9uUmVkTWF0ZXJpYWwpO1xyXG5cclxuXHRcdGxldCBub3RjaGVzID0gMjA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5vdGNoZXM7IGkrKykge1xyXG5cdFx0XHRjb25zdCBub3RjaCA9IG5ldyBUaHJlZS5NZXNoKFxyXG5cdFx0XHQgIHRoaXMuc3F1YXJlLFxyXG5cdFx0XHQgIHRoaXMuZGVjb3JhdGlvblJlZE1hdGVyaWFsXHJcblx0XHRcdCk7XHJcblx0ICBcclxuXHRcdFx0aWYgKGkgJSA1KSB7XHJcblx0XHRcdCAgbm90Y2guc2NhbGUueCA9IDAuMDE7XHJcblx0XHRcdCAgbm90Y2guc2NhbGUueSA9IDAuMDI7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdCAgbm90Y2guc2NhbGUueCA9IDAuMDE7XHJcblx0XHRcdCAgbm90Y2guc2NhbGUueSA9IDAuMTtcclxuXHRcdFx0fVxyXG5cdCAgXHJcblx0XHRcdGNvbnN0IHIgPSAoaSAvIG5vdGNoZXMpICogMiAqIE1hdGguUEk7XHJcblx0XHRcdGNvbnN0IGMgPSBNYXRoLmNvcyhyKTtcclxuXHRcdFx0Y29uc3QgcyA9IE1hdGguc2luKHIpO1xyXG5cdCAgXHJcblx0XHRcdG5vdGNoLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcclxuXHRcdFx0bm90Y2gucm90YXRpb24ueiA9IHIgKyBNYXRoLlBJIC8gMjtcclxuXHQgIFxyXG5cdFx0XHRub3RjaC5wb3NpdGlvbi56ID0gcyAqIDEyLzI2O1xyXG5cdFx0XHRub3RjaC5wb3NpdGlvbi54ID0gYyAqIDEyLzI2O1xyXG5cdFx0XHRub3RjaC5wb3NpdGlvbi55ID0gLTA7XHJcblx0XHRcdC8vIG5vdGNoLnZpc2libGUgPSBmYWxzZTtcclxuXHRcdFx0dGhpcy5tYWluR3JvdXAhLmFkZChub3RjaCk7XHJcblx0XHQgIH1cclxuXHJcblx0XHQvLyB0aGlzLmFkZFNsaWNlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hc3NldHMvYnJhaW4vY29yL2EucG5nXCIpLmRlZmF1bHQsIFwielwiLCAtMjkuNCwgLTIxLjYsIDExMi4wKTtcclxuXHRcdC8vIHRoaXMuYWRkU2xpY2UocmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9icmFpbi9jb3IvYi5wbmdcIikuZGVmYXVsdCwgXCJ6XCIsIC0yOC43LCAtNTEuNSwgMTIwLjUpO1xyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL2Nvci9jLnBuZ1wiKS5kZWZhdWx0LCBcInpcIiwgLTMwLjMsIC04LjksIDk4LjMpO1xyXG5cclxuXHRcdC8vIHRoaXMuYWRkU2xpY2UocmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9icmFpbi9zYWcvYS5wbmdcIikuZGVmYXVsdCwgXCJ4XCIsIC02My4xLCAtNi4wLCAyLjkpO1xyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL3NhZy9iLnBuZ1wiKS5kZWZhdWx0LCBcInhcIiwgNi44LCAtMi4xLCA5LjEpO1xyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL3NhZy9jLnBuZ1wiKS5kZWZhdWx0LCBcInhcIiwgNTcuMiwgMC41LCA4LjIpO1xyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL3NhZy9kLnBuZ1wiKS5kZWZhdWx0LCBcInhcIiwgNzcuOSwgMC40LCAzLjQpO1xyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL3NhZy9lLnBuZ1wiKS5kZWZhdWx0LCBcInhcIiwgLTQyLjYsIC00LjYsIDcuMCk7XHJcblxyXG5cdFx0Ly8gdGhpcy5hZGRTbGljZShyZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2JyYWluL3RyYS9hLnBuZ1wiKS5kZWZhdWx0LCBcInlcIiwgLTIzLjIsIC0xMy44LCAyNi4xKTtcclxuXHRcdC8vIHRoaXMuYWRkU2xpY2UocmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9icmFpbi90cmEvYi5wbmdcIikuZGVmYXVsdCwgXCJ5XCIsIC0yMS40LCAtMjguOCwgNDguMCk7XHJcblx0XHQvLyB0aGlzLmFkZFNsaWNlKHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9hc3NldHMvYnJhaW4vdHJhL2MucG5nXCIpLmRlZmF1bHQsIFwieVwiLCAtMjEuNCwgLTExLjUsIDUzLjQpO1xyXG5cdH1cclxuXHJcblx0c2hvdygpe1xyXG5cdFx0dGhpcy50YXJnZXRPcGFjaXR5ID0gMTtcclxuXHR9XHJcblx0aGlkZSgpe1xyXG5cdFx0dGhpcy50YXJnZXRPcGFjaXR5ID0gMDtcclxuXHR9XHJcblxyXG5cdGFkZFNsaWNlKHRleHR1cmU6IFRocmVlLlRleHR1cmUsIHBsYW5lTm9ybWFsOiBcInhcInxcInlcInxcInpcIiwgb3g6IG51bWJlciwgb3k6IG51bWJlciwgb3o6IG51bWJlciwgc2NhbGU/OiBudW1iZXIpe1xyXG5cclxuXHRcdGxldCBtYXQgPSBuZXcgVGhyZWUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xyXG5cdFx0XHRjb2xvcjogMHhmZmZmZmYsXHJcblx0XHRcdHNpZGU6IFRocmVlLkRvdWJsZVNpZGUsXHJcblx0XHRcdHRyYW5zcGFyZW50OiB0cnVlLFxyXG5cdFx0XHRhbHBoYU1hcDogdGV4dHVyZSxcclxuXHRcdFx0bWFwOiB0ZXh0dXJlLFxyXG5cdFx0XHQvLyBtYXA6IG51bGxcclxuXHRcdFx0YWxwaGFUZXN0OiAwLjEsXHJcblx0XHRcdG9wYWNpdHk6IHRoaXMub3BhY2l0eVxyXG5cdFx0fSApO1xyXG5cclxuXHRcdHRoaXMuYWxsTWF0ZXJpYWxzLnB1c2gobWF0KTtcclxuXHJcblx0XHRtYXQuZGVwdGhXcml0ZSA9IGZhbHNlO1xyXG5cdFx0bWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuXHJcblx0XHRjb25zdCBwbGFuZSA9IG5ldyBUaHJlZS5NZXNoKHRoaXMuc3F1YXJlLCBtYXQpO1xyXG5cdFx0cGxhbmUuY2FzdFNoYWRvdyA9IHRydWU7XHJcblx0XHRwbGFuZS5yZWNlaXZlU2hhZG93ID0gdHJ1ZTtcclxuXHJcblx0XHRzd2l0Y2gocGxhbmVOb3JtYWwpe1xyXG5cdFx0XHRjYXNlIFwieFwiOiB7IFxyXG5cdFx0XHRcdHBsYW5lLnJvdGF0aW9uLnkgPSBNYXRoLlBJIC8gMjtcclxuXHRcdFx0XHRicmVhazsgXHJcblx0XHRcdH1cclxuXHRcdFx0Y2FzZSBcInlcIjogeyBcclxuXHRcdFx0XHRwbGFuZS5yb3RhdGlvbi5vcmRlciA9IFwiWVhaXCI7XHJcblx0XHRcdFx0cGxhbmUucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG5cdFx0XHRcdHBsYW5lLnJvdGF0aW9uLnkgPSAtTWF0aC5QSSAvIDI7XHJcblx0XHRcdFx0YnJlYWs7IFxyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2UgXCJ6XCI6IHsgXHJcblx0XHRcdFx0Ly8gcGxhbmUucm90YXRpb24ueCA9IE1hdGguUEkgLyAyO1xyXG5cdFx0XHRcdGJyZWFrOyBcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cGxhbmUucG9zaXRpb24ueCA9IG94ICogMSAvIGZpbGVSZXNvbHV0aW9uO1xyXG5cdFx0cGxhbmUucG9zaXRpb24ueSA9IG95ICogMSAvIGZpbGVSZXNvbHV0aW9uO1xyXG5cdFx0cGxhbmUucG9zaXRpb24ueiA9IG96ICogMSAvIGZpbGVSZXNvbHV0aW9uO1xyXG5cclxuXHRcdHRoaXMubWFpbkdyb3VwLmFkZChwbGFuZSk7XHJcblxyXG5cdFx0aWYoc2NhbGUpe1xyXG5cdFx0XHRwbGFuZS5zY2FsZS54ID0gc2NhbGU7XHJcblx0XHRcdHBsYW5lLnNjYWxlLnkgPSBzY2FsZTtcclxuXHRcdFx0cGxhbmUuc2NhbGUueiA9IHNjYWxlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Zml4ZWRVcGRhdGUoKXtcclxuXHRcdGlmKHRoaXMub3BhY2l0eSA9PSAwICYmIHRoaXMudGFyZ2V0T3BhY2l0eSA9PSAwKXtcclxuXHRcdFx0dGhpcy5naS5kZXN0cm95T2JqZWN0KHRoaXMsIERlYXRoVHlwZS5VbmxvYWRlZCk7XHJcblx0XHRcdC8vIHRoaXMuZGVzdHJveSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZHJhd1VwZGF0ZShkdDogbnVtYmVyKXtcclxuXHRcdHRoaXMubWFpbkdyb3VwLnJvdGF0aW9uLnkgKz0gZHQ7XHJcblxyXG5cdFx0aWYodGhpcy5vcGFjaXR5ICE9IHRoaXMudGFyZ2V0T3BhY2l0eSl7XHJcblx0XHRcdGxldCByYXRlID0gTWF0aC5leHAoLWR0Kih0aGlzLnRhcmdldE9wYWNpdHkgPyAyIDogNCkpO1xyXG5cdFx0XHR0aGlzLm9wYWNpdHkgPSB0aGlzLnRhcmdldE9wYWNpdHkgLSAodGhpcy50YXJnZXRPcGFjaXR5LXRoaXMub3BhY2l0eSkgKiByYXRlO1xyXG5cdFx0XHRpZihNYXRoLmFicyh0aGlzLm9wYWNpdHkgLSB0aGlzLnRhcmdldE9wYWNpdHkpIDwgMC4wMSl7XHJcblx0XHRcdFx0dGhpcy5vcGFjaXR5ID0gdGhpcy50YXJnZXRPcGFjaXR5O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRmb3IobGV0IG0gaW4gdGhpcy5hbGxNYXRlcmlhbHMpe1xyXG5cdFx0XHRcdGxldCBNID0gdGhpcy5hbGxNYXRlcmlhbHNbbV07XHJcblx0XHRcdFx0TS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCl7XHJcblx0XHQvLyBUT0RPIGRpc3Bvc2Ugb2YgdGV4dHVyZXMgYW5kIGdlb21ldHJ5LlxyXG5cdFx0dGhpcy5zcXVhcmUuZGlzcG9zZSgpO1xyXG5cdFx0dGhpcy5kZWNvcmF0aW9uUmVkTWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTY2FuVmlld2VyOyJdLCJuYW1lcyI6WyJCdXNpbmVzc01hbmFnZXIiLCJjb25zdHJ1Y3RvciIsInN1cGVyIiwidGV4dHVyZUNhY2hlIiwibG9hZERlbGF5ZXIiLCJhbGxTbGljZXMiLCJ0aGlzIiwiYWRkQWxsU2xpY2VzIiwiZW50ZXIiLCJjb25zb2xlIiwibG9nIiwidmlld2VyIiwiYWxpdmUiLCJnaSIsIm1ha2UiLCJpIiwibGVuZ3RoIiwicyIsImFkZFNsaWNlIiwidGV4dHVyZSIsInBsYW5lTm9ybWFsIiwib3giLCJveSIsIm96Iiwic2NhbGUiLCJmcm9udERpcmVjdGlvbmFsTGlnaHRTb3VyY2UiLCJUaHJlZSIsIkRpcmVjdGlvbmFsTGlnaHQiLCJwb3NpdGlvbiIsInNldCIsImNhc3RTaGFkb3ciLCJzaGFkb3ciLCJtYXBTaXplIiwid2lkdGgiLCJoZWlnaHQiLCJjYW1lcmEiLCJuZWFyIiwiZmFyIiwidG9wRGlyZWN0aW9uYWxMaWdodFNvdXJjZSIsImxlZnREaXJlY3Rpb25hbExpZ2h0U291cmNlIiwicmlnaHREaXJlY3Rpb25hbExpZ2h0U291cmNlIiwiZ2V0UGx1Z2luIiwiQ2FudmFzM2RQbHVnaW4iLCJ0aHJlZVdvcmxkIiwidGhyZWVTY2VuZSIsImFkZCIsInNob3ciLCJnbSIsInRhcmdldCIsImxlYXZlIiwicmVtb3ZlIiwiaGlkZSIsImFzeW5jIiwiSUQiLCJkZWZhdWx0IiwiSW5kZXhJblNlcmllcyIsInRleHR1cmVVcmwiLCJQcm9taXNlIiwicmVzb2x2ZSIsImxvYWRlZFRleHR1cmUiLCJUZXh0dXJlTG9hZGVyIiwiRGVmYXVsdExvYWRpbmdNYW5hZ2VyIiwibG9hZCIsInB1c2giLCJkZXN0cm95IiwidCIsImRlc3Ryb3lPYmplY3QiLCJTY2FuVmlld2VyIiwiR2FtZU9iamVjdCIsImR5aW5nIiwib3BhY2l0eSIsInRhcmdldE9wYWNpdHkiLCJhbGxNYXRlcmlhbHMiLCJtYWluR3JvdXAiLCJHcm91cCIsImFkZERpc3BsYXlPYmplY3QiLCJyb3RhdGlvbiIsIngiLCJzcXVhcmUiLCJQbGFuZUdlb21ldHJ5IiwiZGVjb3JhdGlvblJlZE1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsInNpZGUiLCJEb3VibGVTaWRlIiwidHJhbnNwYXJlbnQiLCJub3RjaCIsIk1lc2giLCJ5IiwiciIsIk1hdGgiLCJQSSIsImMiLCJjb3MiLCJzaW4iLCJ6IiwibWF0IiwiTWVzaFN0YW5kYXJkTWF0ZXJpYWwiLCJhbHBoYU1hcCIsIm1hcCIsImFscGhhVGVzdCIsImRlcHRoV3JpdGUiLCJuZWVkc1VwZGF0ZSIsInBsYW5lIiwicmVjZWl2ZVNoYWRvdyIsIm9yZGVyIiwiZml4ZWRVcGRhdGUiLCJEZWF0aFR5cGUiLCJVbmxvYWRlZCIsImRyYXdVcGRhdGUiLCJkdCIsInJhdGUiLCJleHAiLCJhYnMiLCJtIiwiZGlzcG9zZSIsImRyYXdhYmxlM2QiXSwic291cmNlUm9vdCI6IiJ9