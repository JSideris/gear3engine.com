"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[7186],{6690:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(i(2136)),n=s(i(8823));t.default=class{constructor(e){this.nextObjectId=1,this.toDestroy=[],this.registrationStack=[],this.registrationStackSizeWarning=100,this._playing=!1,this.gi=e}register(e){if(!e)throw new Error("Cannot register a null object.");let t=this.registrationStack.pop();if(!t)throw new Error("Registration happened for a GameObject but there was nothing on the registration stack! Most likely cause is trying to instantiate the GameObject directly outside of GameObjectFactory.make.");e._constructor=t.t,e._typeId=t.t._typeId,e.id=e.masterId=this.getNextId(),t.setters&&t.setters(e),this.gi.allGameObjectsById[e.id]&&console.warn(`${n.default.typeName(e._constructor)} of ID ${e.id} is already loaded.`,this.gi.allGameObjectsById[e.id],e),this.gi.allGameObjectsById[e.id]=e}make(e,t){this._playing||console.warn(`An object (${e.name}) was created while the game was in an idle state, which is discouraged. Call GameInstance.play() before creating GameObjects.`),this.registrationStack.push({setters:t,t:e}),this.registrationStack.length>this.registrationStackSizeWarning&&(console.warn(`Registration stack size is ${this.registrationStack.length}. This may indicate a bug.`),this.registrationStackSizeWarning*=2),r.default.gi=this.gi;var i=new e;if(!i.alive)return i;for(let t in e.g3eExtensions)i.g3eExtensions[t]=this.make(e.g3eExtensions[t],(e=>{e.target=i,e.extensionName=t}));return i.initialize(),this.gi.trigger("addObject",i),i}destroy(e,t){this.gi.fixedUpdateInProgress?this.toDestroy.push({o:e,dt:t}):this._destroy(e,t)}flushDestructionQueue(){for(let e=0;e<this.toDestroy.length;e++)this._destroy(this.toDestroy[e].o,this.toDestroy[e].dt);this.toDestroy.length=0}_destroy(e,t){if(!e.alive)throw new Error("Cannot destroy object that isn't alive.");for(let i in e.g3eExtensions)this.destroy(e.g3eExtensions[i],t);e.g3eExtensions={},e.onDestroy&&e.onDestroy(t),e._alive=!1,r.default.removeAllReferences(e),e.masterId&&this.gi.remoteGameObjectsById[e.masterId]===e&&delete this.gi.remoteGameObjectsById[e.masterId],e.id&&this.gi.allGameObjectsById[e.id]===e?(delete this.gi.allGameObjectsById[e.id],e.masterId&&delete this.gi.remoteGameObjectsById[e.masterId]):console.warn(`The deleted object with ID ${e.id} did not match what was in gameInstance's allGameObjectsById. This is a bug.`),Object.keys(e.loadedByUsers).length>0&&console.warn(`An object ${e.id} that was deleted is still loaded by one or more controllers. This may be a bug.`),this.gi.trigger("removeObject",e)}getNextId(){let e=0;for(;;){if(this.nextObjectId=this.nextObjectId%4294967295+1,!this.gi.idIsTaken(this.nextObjectId))return this.nextObjectId;if(e++,e>=4294967296)throw new Error("Exceeded max ID allocation. This means 0xFFFFFFFF IDs are currently in use, which may indicate a memory leak.")}}}},2136:function(e,t,i){var s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=s(i(8862)),n=s(i(2170)),o=s(i(4051));class a{addDiscriminator(e){this._discriminators[e]=!0}is(e){return this._discriminators[e]??!1}isAll(e){for(let t of e)if(!this.is(t))return!1;return!0}isAny(e){for(let t of e)if(this.is(t))return!0;return!1}get alive(){return this._alive}constructor(){this._ownerWsId=null,this._discriminators={},this._alive=!0,this._setup2Called=!1,this._snapshot={},this._snapshotArchive={},this.loadedByUsers={},this._references={},this.g3eExtensions={},this.eventLog=[],this.gi=a.gi,this.gi.trigger("registerObject",this)}static getExtension(e,t){for(let i in e.g3eExtensions){let s=e.g3eExtensions[i];if(s instanceof t)return s}return null}static getExtensionByLabel(e,t){for(let i in e.g3eExtensions){let s=e.g3eExtensions[i];if(s.is(t))return s}return null}static getObjectGraph(e){let t={},i=[e.id];do{let s=e.gi.allGameObjectsById[i.pop()];for(let e in s._references){let r=Number(e);t[r]||(t[r]=s._references[r].o,i.push(r))}}while(i.length>0);return t}destroy(e){this.gi.destroyObject(this,e)}destroyOnMaster(e){this.gi.destroyObjectOnMaster(this,e)}initialize(){}static addReference(e,t){let i=e._references[t.id];i?i.c++:e._references[t.id]={o:t,c:1};let s=t._references[e.id];if(s?s.c++:t._references[e.id]={o:e,c:1},e._group||t._group){if(!e._group&&t._group)t._group.add(e);else if(e._group&&!t._group)e._group.add(t);else if(e._group&&t._group&&e._group!=t._group)throw"Merging groups not implemented yet."}else{let i=new n.default;i.add(e),i.add(t)}}static removeReference(e,t){let i=e._references[t.id];i.c--,i.c||delete e._references[t.id];let s=t._references[e.id];s.c--,s.c||delete t._references[e.id];let r=a.getObjectGraph(e);if(r[t.id]);else{let i=e._group,s=a.getObjectGraph(t);if(Object.keys(r).length>1){let e=new n.default;for(let t in r){let i=r[t];e.add(i)}for(let t in i.controllers){let s=i.controllers[t];e.watch(s)}}if(Object.keys(s).length>1){let e=new n.default;for(let t in s){let i=s[t];e.add(i)}for(let t in i.controllers){let s=i.controllers[t];e.watch(s)}}i.reset()}}static removeAllReferences(e){for(let t in e._references)delete e._references[t].o._references[e.id];e._references={},e._group&&(e._group.remove(e),e._group=null)}static generateSnapshot(e){let t=e._typeId,i=r.default[t];if(!i)throw new Error(`Type ${t} not registered!`);e._snapshot||(e._snapshot={});let s=i._syncedFields;for(let t in s){let i=s[t],r=e;for(let e=0;e<i.key.length&&r;e++)r=r[i.key[e]];let n=o.default.encode(o.default.getNamedTypeFromEnum(i.type),r);e._snapshot[i.fieldId]=n}}static triggerAction(e,t,...i){}}t.default=a}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi01NTYyMThlZi5jMWIyNWMwMmY3MDBhZGIwYTVlZi5qcyIsIm1hcHBpbmdzIjoiZ0lBQ0EsSUFBSUEsRUFBbUJDLE1BQVFBLEtBQUtELGlCQUFvQixTQUFVRSxHQUM5RCxPQUFRQSxHQUFPQSxFQUFJQyxXQUFjRCxFQUFNLENBQUUsUUFBV0EsRUFDeEQsRUFDQUUsT0FBT0MsZUFBZUMsRUFBUyxhQUFjLENBQUVDLE9BQU8sSUFDdEQsTUFBTUMsRUFBZ0JSLEVBQWdCLEVBQVEsT0FDeENTLEVBQVNULEVBQWdCLEVBQVEsT0FnSHZDTSxFQUFBLFFBN0dBLE1BQ0lJLFlBQVlDLEdBQ1JWLEtBQUtXLGFBQWUsRUFDcEJYLEtBQUtZLFVBQVksR0FDakJaLEtBQUthLGtCQUFvQixHQUN6QmIsS0FBS2MsNkJBQStCLElBQ3BDZCxLQUFLZSxVQUFXLEVBQ2hCZixLQUFLVSxHQUFLQSxDQUNkLENBQ0FNLFNBQVNDLEdBQ0wsSUFBS0EsRUFDRCxNQUFNLElBQUlDLE1BQU0sa0NBQ3BCLElBQUlDLEVBQU9uQixLQUFLYSxrQkFBa0JPLE1BQ2xDLElBQUtELEVBQ0QsTUFBTSxJQUFJRCxNQUFNLGlNQUNwQkQsRUFBT0ksYUFBZUYsRUFBS0csRUFDM0JMLEVBQU9NLFFBQVVKLEVBQUtHLEVBQUVDLFFBQ3hCTixFQUFPTyxHQUFLUCxFQUFPUSxTQUFXekIsS0FBSzBCLFlBQy9CUCxFQUFLUSxTQUNMUixFQUFLUSxRQUFRVixHQUNiakIsS0FBS1UsR0FBR2tCLG1CQUFtQlgsRUFBT08sS0FDbENLLFFBQVFDLEtBQUssR0FBR3RCLEVBQU91QixRQUFRQyxTQUFTZixFQUFPSSx1QkFBdUJKLEVBQU9PLHdCQUF5QnhCLEtBQUtVLEdBQUdrQixtQkFBbUJYLEVBQU9PLElBQUtQLEdBQ2pKakIsS0FBS1UsR0FBR2tCLG1CQUFtQlgsRUFBT08sSUFBTVAsQ0FDNUMsQ0FDQWdCLEtBQUtYLEVBQUdLLEdBQ0MzQixLQUFLZSxVQUNOYyxRQUFRQyxLQUFLLGNBQWNSLEVBQUVZLHNJQUVq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RTRCLG1CQUNINUIsRUFBRTRCLFlBQVlnQyxHQUFHNUQsRUFDaEI0QixZQUFZNUIsRUFBRXhCLElBRTVCd0IsRUFBRTRCLFlBQWMsQ0FBQyxFQUNiNUIsRUFBRWdELFNBQ0ZoRCxFQUFFZ0QsT0FBT2EsT0FBTzdELEdBQ2hCQSxFQUFFZ0QsT0FBUyxLQUVuQixDQUNBbEIsd0JBQXdCN0QsR0FDcEIsSUFBSTZGLEVBQVM3RixFQUFPTSxRQUNoQndGLEVBQU9sRCxFQUFnQjlCLFFBQVErRSxHQUNuQyxJQUFLQyxFQUNELE1BQU0sSUFBSTdGLE1BQU0sUUFBUTRGLHFCQUN2QjdGLEVBQU95RCxZQUNSekQsRUFBT3lELFVBQVksQ0FBQyxHQUN4QixJQUFJc0MsRUFBU0QsRUFBb0IsY0FDakMsSUFBSyxJQUFJRSxLQUFLRCxFQUFRLENBQ2xCLElBQUlFLEVBQVFGLEVBQU9DLEdBQ2ZFLEVBQVdsRyxFQUNmLElBQUssSUFBSW1DLEVBQUksRUFBR0EsRUFBSThELEVBQU1FLElBQUloRixRQUN0QitFLEVBRDhCL0QsSUFFOUIrRCxFQUFXQSxFQUFTRCxFQUFNRSxJQUFJaEUsSUFJdEMsSUFBSWlFLEVBQWlCdEQsRUFBUWhDLFFBQVF1RixPQUFPdkQsRUFBUWhDLFFBQVF3RixxQkFBcUJMLEVBQU1ILE1BQU9JLEdBQzlGbEcsRUFBT3lELFVBQVV3QyxFQUFNTSxTQUFXSCxDQUN0QyxDQUNKLENBQ0F2QyxxQkFBcUI3RCxFQUFRd0csS0FBV0MsR0FDeEMsRUFFSnJILEVBQUEsUUFBa0IyRCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VhcjNlbmdpbmUtd2Vic2l0ZS8uLi8uLi9HQU1FUy1TSU1VTEFUT1JTLUZVTi9nZWFyM2VuZ2luZS9wbHVnaW5zL2dlYXIzZW5naW5lL2J1aWxkL2NvcmUvZ2FtZS1vYmplY3QtZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4uLy4uL0dBTUVTLVNJTVVMQVRPUlMtRlVOL2dlYXIzZW5naW5lL3BsdWdpbnMvZ2VhcjNlbmdpbmUvYnVpbGQvY29yZS9nYW1lLW9iamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcclxufTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBnYW1lX29iamVjdF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuL2dhbWUtb2JqZWN0XCIpKTtcclxuY29uc3QgdXRpbF8xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL3V0aWxcIikpO1xyXG5jbGFzcyBQZW5kaW5nUmVnaXN0cmF0aW9uT2JqZWN0IHtcclxufVxyXG5jbGFzcyBHYW1lT2JqZWN0RmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcihnaSkge1xyXG4gICAgICAgIHRoaXMubmV4dE9iamVjdElkID0gMTtcclxuICAgICAgICB0aGlzLnRvRGVzdHJveSA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uU3RhY2sgPSBbXTtcclxuICAgICAgICB0aGlzLnJlZ2lzdHJhdGlvblN0YWNrU2l6ZVdhcm5pbmcgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5fcGxheWluZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZ2kgPSBnaTtcclxuICAgIH1cclxuICAgIHJlZ2lzdGVyKG9iamVjdCkge1xyXG4gICAgICAgIGlmICghb2JqZWN0KVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcmVnaXN0ZXIgYSBudWxsIG9iamVjdC5cIik7XHJcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnJlZ2lzdHJhdGlvblN0YWNrLnBvcCgpO1xyXG4gICAgICAgIGlmICghbmV4dClcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBSZWdpc3RyYXRpb24gaGFwcGVuZWQgZm9yIGEgJHtcIkdhbWVPYmplY3RcIn0gYnV0IHRoZXJlIHdhcyBub3RoaW5nIG9uIHRoZSByZWdpc3RyYXRpb24gc3RhY2shIE1vc3QgbGlrZWx5IGNhdXNlIGlzIHRyeWluZyB0byBpbnN0YW50aWF0ZSB0aGUgR2FtZU9iamVjdCBkaXJlY3RseSBvdXRzaWRlIG9mIEdhbWVPYmplY3RGYWN0b3J5Lm1ha2UuYCk7XHJcbiAgICAgICAgb2JqZWN0Ll9jb25zdHJ1Y3RvciA9IG5leHQudDtcclxuICAgICAgICBvYmplY3QuX3R5cGVJZCA9IG5leHQudC5fdHlwZUlkO1xyXG4gICAgICAgIG9iamVjdC5pZCA9IG9iamVjdC5tYXN0ZXJJZCA9IHRoaXMuZ2V0TmV4dElkKCk7XHJcbiAgICAgICAgaWYgKG5leHQuc2V0dGVycylcclxuICAgICAgICAgICAgbmV4dC5zZXR0ZXJzKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZ2kuYWxsR2FtZU9iamVjdHNCeUlkW29iamVjdC5pZF0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHt1dGlsXzEuZGVmYXVsdC50eXBlTmFtZShvYmplY3QuX2NvbnN0cnVjdG9yKX0gb2YgSUQgJHtvYmplY3QuaWR9IGlzIGFscmVhZHkgbG9hZGVkLmAsIHRoaXMuZ2kuYWxsR2FtZU9iamVjdHNCeUlkW29iamVjdC5pZF0sIG9iamVjdCk7XHJcbiAgICAgICAgdGhpcy5naS5hbGxHYW1lT2JqZWN0c0J5SWRbb2JqZWN0LmlkXSA9IG9iamVjdDtcclxuICAgIH1cclxuICAgIG1ha2UodCwgc2V0dGVycykge1xyXG4gICAgICAgIGlmICghdGhpcy5fcGxheWluZykge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYEFuIG9iamVjdCAoJHt0Lm5hbWV9KSB3YXMgY3JlYXRlZCB3aGlsZSB0aGUgZ2FtZSB3YXMgaW4gYW4gaWRsZSBzdGF0ZSwgd2hpY2ggaXMgZGlzY291cmFnZWQuIENhbGwgR2FtZUluc3RhbmNlLnBsYXkoKSBiZWZvcmUgY3JlYXRpbmcgR2FtZU9iamVjdHMuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVnaXN0cmF0aW9uU3RhY2sucHVzaCh7XHJcbiAgICAgICAgICAgIHNldHRlcnM6IHNldHRlcnMsXHJcbiAgICAgICAgICAgIHQ6IHRcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5yZWdpc3RyYXRpb25TdGFjay5sZW5ndGggPiB0aGlzLnJlZ2lzdHJhdGlvblN0YWNrU2l6ZVdhcm5pbmcpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGBSZWdpc3RyYXRpb24gc3RhY2sgc2l6ZSBpcyAke3RoaXMucmVnaXN0cmF0aW9uU3RhY2subGVuZ3RofS4gVGhpcyBtYXkgaW5kaWNhdGUgYSBidWcuYCk7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0cmF0aW9uU3RhY2tTaXplV2FybmluZyAqPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnYW1lX29iamVjdF8xLmRlZmF1bHQuZ2kgPSB0aGlzLmdpO1xyXG4gICAgICAgIHZhciBvYmplY3QgPSBuZXcgdCgpO1xyXG4gICAgICAgIGlmICghb2JqZWN0LmFsaXZlKVxyXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgICAgIGZvciAobGV0IGVOYW1lIGluIHRbXCJnM2VFeHRlbnNpb25zXCJdKSB7XHJcbiAgICAgICAgICAgIG9iamVjdC5nM2VFeHRlbnNpb25zW2VOYW1lXSA9IHRoaXMubWFrZSh0W1wiZzNlRXh0ZW5zaW9uc1wiXVtlTmFtZV0sIChleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZXgudGFyZ2V0ID0gb2JqZWN0O1xyXG4gICAgICAgICAgICAgICAgZXguZXh0ZW5zaW9uTmFtZSA9IGVOYW1lO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0LmluaXRpYWxpemUoKTtcclxuICAgICAgICB0aGlzLmdpLnRyaWdnZXIoXCJhZGRPYmplY3RcIiwgb2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gb2JqZWN0O1xyXG4gICAgfVxyXG4gICAgZGVzdHJveShvYmplY3QsIGRlYXRoVHlwZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5naS5maXhlZFVwZGF0ZUluUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveShvYmplY3QsIGRlYXRoVHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRvRGVzdHJveS5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG86IG9iamVjdCxcclxuICAgICAgICAgICAgICAgIGR0OiBkZWF0aFR5cGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZmx1c2hEZXN0cnVjdGlvblF1ZXVlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy50b0Rlc3Ryb3kubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVzdHJveSh0aGlzLnRvRGVzdHJveVtpXS5vLCB0aGlzLnRvRGVzdHJveVtpXS5kdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9EZXN0cm95Lmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbiAgICBfZGVzdHJveShvYmplY3QsIGRlYXRoVHlwZSkge1xyXG4gICAgICAgIGlmICghb2JqZWN0LmFsaXZlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVzdHJveSBvYmplY3QgdGhhdCBpc24ndCBhbGl2ZS5cIik7XHJcbiAgICAgICAgZm9yIChsZXQgZXggaW4gb2JqZWN0LmczZUV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXN0cm95KG9iamVjdC5nM2VFeHRlbnNpb25zW2V4XSwgZGVhdGhUeXBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb2JqZWN0LmczZUV4dGVuc2lvbnMgPSB7fTtcclxuICAgICAgICBvYmplY3Qub25EZXN0cm95ICYmIG9iamVjdC5vbkRlc3Ryb3koZGVhdGhUeXBlKTtcclxuICAgICAgICBvYmplY3QuX2FsaXZlID0gZmFsc2U7XHJcbiAgICAgICAgZ2FtZV9vYmplY3RfMS5kZWZhdWx0LnJlbW92ZUFsbFJlZmVyZW5jZXMob2JqZWN0KTtcclxuICAgICAgICBpZiAob2JqZWN0Lm1hc3RlcklkICYmIHRoaXMuZ2kucmVtb3RlR2FtZU9iamVjdHNCeUlkW29iamVjdC5tYXN0ZXJJZF0gPT09IG9iamVjdCkge1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5naS5yZW1vdGVHYW1lT2JqZWN0c0J5SWRbb2JqZWN0Lm1hc3RlcklkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9iamVjdC5pZCAmJiB0aGlzLmdpLmFsbEdhbWVPYmplY3RzQnlJZFtvYmplY3QuaWRdID09PSBvYmplY3QpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2kuYWxsR2FtZU9iamVjdHNCeUlkW29iamVjdC5pZF07XHJcbiAgICAgICAgICAgIGlmIChvYmplY3QubWFzdGVySWQpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdpLnJlbW90ZUdhbWVPYmplY3RzQnlJZFtvYmplY3QubWFzdGVySWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFRoZSBkZWxldGVkIG9iamVjdCB3aXRoIElEICR7b2JqZWN0LmlkfSBkaWQgbm90IG1hdGNoIHdoYXQgd2FzIGluIGdhbWVJbnN0YW5jZSdzIGFsbEdhbWVPYmplY3RzQnlJZC4gVGhpcyBpcyBhIGJ1Zy5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9iamVjdC5sb2FkZWRCeVVzZXJzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgQW4gb2JqZWN0ICR7b2JqZWN0LmlkfSB0aGF0IHdhcyBkZWxldGVkIGlzIHN0aWxsIGxvYWRlZCBieSBvbmUgb3IgbW9yZSBjb250cm9sbGVycy4gVGhpcyBtYXkgYmUgYSBidWcuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2kudHJpZ2dlcihcInJlbW92ZU9iamVjdFwiLCBvYmplY3QpO1xyXG4gICAgfVxyXG4gICAgZ2V0TmV4dElkKCkge1xyXG4gICAgICAgIGxldCBjb3VudGVyID0gMDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dE9iamVjdElkID0gKCh0aGlzLm5leHRPYmplY3RJZCkgJSAweEZGRkZGRkZGKSArIDE7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5naS5pZElzVGFrZW4odGhpcy5uZXh0T2JqZWN0SWQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5uZXh0T2JqZWN0SWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgY291bnRlcisrO1xyXG4gICAgICAgICAgICBpZiAoY291bnRlciA+PSAweDEwMDAwMDAwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRXhjZWVkZWQgbWF4IElEIGFsbG9jYXRpb24uIFRoaXMgbWVhbnMgMHhGRkZGRkZGRiBJRHMgYXJlIGN1cnJlbnRseSBpbiB1c2UsIHdoaWNoIG1heSBpbmRpY2F0ZSBhIG1lbW9yeSBsZWFrLlwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gd2hpbGUgKHRydWUpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuZGVmYXVsdCA9IEdhbWVPYmplY3RGYWN0b3J5O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1nYW1lLW9iamVjdC1mYWN0b3J5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xyXG59O1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmNvbnN0IHR5cGVfcmVnaXN0cnlfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tL3R5cGUtcmVnaXN0cnlcIikpO1xyXG5jb25zdCBvYmplY3RfZ3JvdXBfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiLi4vY29tL29iamVjdC1ncm91cFwiKSk7XHJcbmNvbnN0IGNvZGVjXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcIi4uL2NvbS9jb2RlY1wiKSk7XHJcbmNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICAgYWRkRGlzY3JpbWluYXRvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzY3JpbWluYXRvcnNbbmFtZV0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaXMobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNjcmltaW5hdG9yc1tuYW1lXSA/PyBmYWxzZTtcclxuICAgIH1cclxuICAgIGlzQWxsKG5hbWVzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgbiBvZiBuYW1lcykge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXMobikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaXNBbnkobmFtZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBuIG9mIG5hbWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzKG4pKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBhbGl2ZSgpIHsgcmV0dXJuIHRoaXMuX2FsaXZlOyB9XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9vd25lcldzSWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX2Rpc2NyaW1pbmF0b3JzID0ge307XHJcbiAgICAgICAgdGhpcy5fYWxpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3NldHVwMkNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3NuYXBzaG90ID0ge307XHJcbiAgICAgICAgdGhpcy5fc25hcHNob3RBcmNoaXZlID0ge307XHJcbiAgICAgICAgdGhpcy5sb2FkZWRCeVVzZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZzNlRXh0ZW5zaW9ucyA9IHt9O1xyXG4gICAgICAgIHRoaXMuZXZlbnRMb2cgPSBbXTtcclxuICAgICAgICB0aGlzLmdpID0gR2FtZU9iamVjdC5naTtcclxuICAgICAgICB0aGlzLmdpLnRyaWdnZXIoXCJyZWdpc3Rlck9iamVjdFwiLCB0aGlzKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRFeHRlbnNpb24ob2JqZWN0LCBleHRlbnNpb25UeXBlKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZUsgaW4gb2JqZWN0LmczZUV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBvYmplY3QuZzNlRXh0ZW5zaW9uc1tlS107XHJcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgZXh0ZW5zaW9uVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RXh0ZW5zaW9uQnlMYWJlbChvYmplY3QsIGRlY29yYXRvckxhYmVsKSB7XHJcbiAgICAgICAgZm9yIChsZXQgZUsgaW4gb2JqZWN0LmczZUV4dGVuc2lvbnMpIHtcclxuICAgICAgICAgICAgbGV0IGUgPSBvYmplY3QuZzNlRXh0ZW5zaW9uc1tlS107XHJcbiAgICAgICAgICAgIGlmIChlLmlzKGRlY29yYXRvckxhYmVsKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0T2JqZWN0R3JhcGgoc3RhcnQpIHtcclxuICAgICAgICBsZXQgZmxhdFRyZWUgPSB7fTtcclxuICAgICAgICBsZXQgbmV3SXRlbXMgPSBbc3RhcnQuaWRdO1xyXG4gICAgICAgIGRvIHtcclxuICAgICAgICAgICAgbGV0IG5leHQgPSBzdGFydC5naS5hbGxHYW1lT2JqZWN0c0J5SWRbbmV3SXRlbXMucG9wKCldO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpZCBpbiBuZXh0Ll9yZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaWRJbnQgPSBOdW1iZXIoaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmbGF0VHJlZVtpZEludF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGF0VHJlZVtpZEludF0gPSBuZXh0Ll9yZWZlcmVuY2VzW2lkSW50XS5vO1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zLnB1c2goaWRJbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSB3aGlsZSAobmV3SXRlbXMubGVuZ3RoID4gMCk7XHJcbiAgICAgICAgcmV0dXJuIGZsYXRUcmVlO1xyXG4gICAgfVxyXG4gICAgZGVzdHJveShkZWF0aFR5cGUpIHtcclxuICAgICAgICB0aGlzLmdpLmRlc3Ryb3lPYmplY3QodGhpcywgZGVhdGhUeXBlKTtcclxuICAgIH1cclxuICAgIGRlc3Ryb3lPbk1hc3RlcihkZWF0aFR5cGUpIHtcclxuICAgICAgICB0aGlzLmdpLmRlc3Ryb3lPYmplY3RPbk1hc3Rlcih0aGlzLCBkZWF0aFR5cGUpO1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZSgpIHsgfVxyXG4gICAgc3RhdGljIGFkZFJlZmVyZW5jZShvMSwgbzIpIHtcclxuICAgICAgICBsZXQgcjEgPSBvMS5fcmVmZXJlbmNlc1tvMi5pZF07XHJcbiAgICAgICAgaWYgKHIxKVxyXG4gICAgICAgICAgICByMS5jKys7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBvMS5fcmVmZXJlbmNlc1tvMi5pZF0gPSB7IG86IG8yLCBjOiAxIH07XHJcbiAgICAgICAgbGV0IHIyID0gbzIuX3JlZmVyZW5jZXNbbzEuaWRdO1xyXG4gICAgICAgIGlmIChyMilcclxuICAgICAgICAgICAgcjIuYysrO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgbzIuX3JlZmVyZW5jZXNbbzEuaWRdID0geyBvOiBvMSwgYzogMSB9O1xyXG4gICAgICAgIGlmICghbzEuX2dyb3VwICYmICFvMi5fZ3JvdXApIHtcclxuICAgICAgICAgICAgbGV0IG5ld0dyb3VwID0gbmV3IG9iamVjdF9ncm91cF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgbmV3R3JvdXAuYWRkKG8xKTtcclxuICAgICAgICAgICAgbmV3R3JvdXAuYWRkKG8yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIW8xLl9ncm91cCAmJiBvMi5fZ3JvdXApIHtcclxuICAgICAgICAgICAgbzIuX2dyb3VwLmFkZChvMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKG8xLl9ncm91cCAmJiAhbzIuX2dyb3VwKSB7XHJcbiAgICAgICAgICAgIG8xLl9ncm91cC5hZGQobzIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvMS5fZ3JvdXAgJiYgbzIuX2dyb3VwICYmIG8xLl9ncm91cCAhPSBvMi5fZ3JvdXApIHtcclxuICAgICAgICAgICAgdGhyb3cgXCJNZXJnaW5nIGdyb3VwcyBub3QgaW1wbGVtZW50ZWQgeWV0LlwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyByZW1vdmVSZWZlcmVuY2UobzEsIG8yKSB7XHJcbiAgICAgICAgbGV0IHIxID0gbzEuX3JlZmVyZW5jZXNbbzIuaWRdO1xyXG4gICAgICAgIHIxLmMtLTtcclxuICAgICAgICBpZiAoIXIxLmMpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG8xLl9yZWZlcmVuY2VzW28yLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHIyID0gbzIuX3JlZmVyZW5jZXNbbzEuaWRdO1xyXG4gICAgICAgIHIyLmMtLTtcclxuICAgICAgICBpZiAoIXIyLmMpIHtcclxuICAgICAgICAgICAgZGVsZXRlIG8yLl9yZWZlcmVuY2VzW28xLmlkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGdyYXBoMSA9IEdhbWVPYmplY3QuZ2V0T2JqZWN0R3JhcGgobzEpO1xyXG4gICAgICAgIGlmIChncmFwaDFbbzIuaWRdKSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgb2xkR3JvdXAgPSBvMS5fZ3JvdXA7XHJcbiAgICAgICAgICAgIGxldCBncmFwaDIgPSBHYW1lT2JqZWN0LmdldE9iamVjdEdyYXBoKG8yKTtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyYXBoMSkubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0dyb3VwID0gbmV3IG9iamVjdF9ncm91cF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG8gaW4gZ3JhcGgxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IE8gPSBncmFwaDFbb107XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3R3JvdXAuYWRkKE8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiBvbGRHcm91cC5jb250cm9sbGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBDID0gb2xkR3JvdXAuY29udHJvbGxlcnNbY107XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3R3JvdXAud2F0Y2goQyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGdyYXBoMikubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0dyb3VwID0gbmV3IG9iamVjdF9ncm91cF8xLmRlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG8gaW4gZ3JhcGgyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IE8gPSBncmFwaDJbb107XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3R3JvdXAuYWRkKE8pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiBvbGRHcm91cC5jb250cm9sbGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBDID0gb2xkR3JvdXAuY29udHJvbGxlcnNbY107XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3R3JvdXAud2F0Y2goQyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2xkR3JvdXAucmVzZXQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgcmVtb3ZlQWxsUmVmZXJlbmNlcyhvKSB7XHJcbiAgICAgICAgZm9yIChsZXQgayBpbiBvLl9yZWZlcmVuY2VzKSB7XHJcbiAgICAgICAgICAgIGxldCBvMiA9IG8uX3JlZmVyZW5jZXNba10ubztcclxuICAgICAgICAgICAgZGVsZXRlIG8yLl9yZWZlcmVuY2VzW28uaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBvLl9yZWZlcmVuY2VzID0ge307XHJcbiAgICAgICAgaWYgKG8uX2dyb3VwKSB7XHJcbiAgICAgICAgICAgIG8uX2dyb3VwLnJlbW92ZShvKTtcclxuICAgICAgICAgICAgby5fZ3JvdXAgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyBnZW5lcmF0ZVNuYXBzaG90KG9iamVjdCkge1xyXG4gICAgICAgIGxldCB0eXBlSWQgPSBvYmplY3QuX3R5cGVJZDtcclxuICAgICAgICBsZXQgdHlwZSA9IHR5cGVfcmVnaXN0cnlfMS5kZWZhdWx0W3R5cGVJZF07XHJcbiAgICAgICAgaWYgKCF0eXBlKVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFR5cGUgJHt0eXBlSWR9IG5vdCByZWdpc3RlcmVkIWApO1xyXG4gICAgICAgIGlmICghb2JqZWN0Ll9zbmFwc2hvdClcclxuICAgICAgICAgICAgb2JqZWN0Ll9zbmFwc2hvdCA9IHt9O1xyXG4gICAgICAgIGxldCBmaWVsZHMgPSB0eXBlW1wiX3N5bmNlZEZpZWxkc1wiXTtcclxuICAgICAgICBmb3IgKGxldCBmIGluIGZpZWxkcykge1xyXG4gICAgICAgICAgICBsZXQgZmllbGQgPSBmaWVsZHNbZl07XHJcbiAgICAgICAgICAgIGxldCByYXdWYWx1ZSA9IG9iamVjdDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWVsZC5rZXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChyYXdWYWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICByYXdWYWx1ZSA9IHJhd1ZhbHVlW2ZpZWxkLmtleVtpXV07XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNvbnZlcnRlZFZhbHVlID0gY29kZWNfMS5kZWZhdWx0LmVuY29kZShjb2RlY18xLmRlZmF1bHQuZ2V0TmFtZWRUeXBlRnJvbUVudW0oZmllbGQudHlwZSksIHJhd1ZhbHVlKTtcclxuICAgICAgICAgICAgb2JqZWN0Ll9zbmFwc2hvdFtmaWVsZC5maWVsZElkXSA9IGNvbnZlcnRlZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHN0YXRpYyB0cmlnZ2VyQWN0aW9uKG9iamVjdCwgYWN0aW9uLCAuLi5hcmdzKSB7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gR2FtZU9iamVjdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2FtZS1vYmplY3QuanMubWFwIl0sIm5hbWVzIjpbIl9faW1wb3J0RGVmYXVsdCIsInRoaXMiLCJtb2QiLCJfX2VzTW9kdWxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJnYW1lX29iamVjdF8xIiwidXRpbF8xIiwiY29uc3RydWN0b3IiLCJnaSIsIm5leHRPYmplY3RJZCIsInRvRGVzdHJveSIsInJlZ2lzdHJhdGlvblN0YWNrIiwicmVnaXN0cmF0aW9uU3RhY2tTaXplV2FybmluZyIsIl9wbGF5aW5nIiwicmVnaXN0ZXIiLCJvYmplY3QiLCJFcnJvciIsIm5leHQiLCJwb3AiLCJfY29uc3RydWN0b3IiLCJ0IiwiX3R5cGVJZCIsImlkIiwibWFzdGVySWQiLCJnZXROZXh0SWQiLCJzZXR0ZXJzIiwiYWxsR2FtZU9iamVjdHNCeUlkIiwiY29uc29sZSIsIndhcm4iLCJkZWZhdWx0IiwidHlwZU5hbWUiLCJtYWtlIiwibmFtZSIsInB1c2giLCJsZW5ndGgiLCJhbGl2ZSIsImVOYW1lIiwiZzNlRXh0ZW5zaW9ucyIsImV4IiwidGFyZ2V0IiwiZXh0ZW5zaW9uTmFtZSIsImluaXRpYWxpemUiLCJ0cmlnZ2VyIiwiZGVzdHJveSIsImRlYXRoVHlwZSIsImZpeGVkVXBkYXRlSW5Qcm9ncmVzcyIsIm8iLCJkdCIsIl9kZXN0cm95IiwiZmx1c2hEZXN0cnVjdGlvblF1ZXVlIiwiaSIsIm9uRGVzdHJveSIsIl9hbGl2ZSIsInJlbW92ZUFsbFJlZmVyZW5jZXMiLCJyZW1vdGVHYW1lT2JqZWN0c0J5SWQiLCJrZXlzIiwibG9hZGVkQnlVc2VycyIsImNvdW50ZXIiLCJpZElzVGFrZW4iLCJ0eXBlX3JlZ2lzdHJ5XzEiLCJvYmplY3RfZ3JvdXBfMSIsImNvZGVjXzEiLCJHYW1lT2JqZWN0IiwiYWRkRGlzY3JpbWluYXRvciIsIl9kaXNjcmltaW5hdG9ycyIsImlzIiwiaXNBbGwiLCJuYW1lcyIsIm4iLCJpc0FueSIsIl9vd25lcldzSWQiLCJfc2V0dXAyQ2FsbGVkIiwiX3NuYXBzaG90IiwiX3NuYXBzaG90QXJjaGl2ZSIsIl9yZWZlcmVuY2VzIiwiZXZlbnRMb2ciLCJzdGF0aWMiLCJleHRlbnNpb25UeXBlIiwiZUsiLCJlIiwiZGVjb3JhdG9yTGFiZWwiLCJzdGFydCIsImZsYXRUcmVlIiwibmV3SXRlbXMiLCJpZEludCIsIk51bWJlciIsImRlc3Ryb3lPYmplY3QiLCJkZXN0cm95T25NYXN0ZXIiLCJkZXN0cm95T2JqZWN0T25NYXN0ZXIiLCJvMSIsIm8yIiwicjEiLCJjIiwicjIiLCJfZ3JvdXAiLCJhZGQiLCJuZXdHcm91cCIsImdyYXBoMSIsImdldE9iamVjdEdyYXBoIiwib2xkR3JvdXAiLCJncmFwaDIiLCJPIiwiY29udHJvbGxlcnMiLCJDIiwid2F0Y2giLCJyZXNldCIsImsiLCJyZW1vdmUiLCJ0eXBlSWQiLCJ0eXBlIiwiZmllbGRzIiwiZiIsImZpZWxkIiwicmF3VmFsdWUiLCJrZXkiLCJjb252ZXJ0ZWRWYWx1ZSIsImVuY29kZSIsImdldE5hbWVkVHlwZUZyb21FbnVtIiwiZmllbGRJZCIsImFjdGlvbiIsImFyZ3MiXSwic291cmNlUm9vdCI6IiJ9