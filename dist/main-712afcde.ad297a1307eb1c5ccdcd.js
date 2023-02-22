"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[1912],{7010:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});const s=new TextEncoder;e.default=class{constructor(t=64){this.segments=[],this.payloadLengthSegments=0,this.cursor=0,this.lastInstructionLength=0,this.instructionInProgress=!1,this.currentInstructionCode=0,this.bufferSize=t,this.appendByteArray()}appendByteArray(){this.segments.push(new Uint8Array(this.bufferSize))}startCreate(t,e){this.startInstruction(1,t);let s=(65280&e)>>8,i=255&e;return this.writeByte(s),this.writeByte(i),this}startUpdate(t){return this.startInstruction(2,t),this}startDelete(t){return this.startInstruction(3,t),this}startAction(t,e){this.startInstruction(4,t??0),this.writeByte(255&e)}startInstruction(t,e){if(this.instructionInProgress)throw"Instruction in progress.";this.lastInstructionLength=0;let s=255&t;this.currentInstructionCode=s;let i=(65280&e)>>8,r=255&e;this.writeByte(s),this.writeByte(i),this.writeByte(r),this.instructionInProgress=!0}completeInstruction(){if(!this.instructionInProgress)throw"Instruction not in progress (completing instruction).";this.writeByte(0),this.instructionInProgress=!1}writeValue(t,e,s=!1){if(!this.instructionInProgress)throw"Instruction not in progress (writing value).";if(this.lastInstructionLength++,this.lastInstructionLength>=4096)throw"Update is too long.";switch(this.writeByte(e),typeof t){case"number":this.writeInt(t,s);break;case"boolean":this.writeBoolean(t);break;case"string":this.writeString(t);break;default:throw new Error(`${t} does not have a supported data type.`)}}writeArray(t,e){if(!this.instructionInProgress)throw"Instruction not in progress (writting array).";if(this.lastInstructionLength++,this.lastInstructionLength>=4096)throw"Update is too long.";if(this.writeByte(t),this.writeByte(e.length>>8),this.writeByte(255&e.length),e.length>0)switch(typeof e[0]){case"number":for(let t of e)this.writeInt(t,!1);break;case"string":for(let t of e)this.writeString(t);break;case"boolean":for(let t of e)this.writeBoolean(t)}}writeInt(t,e){let s=0;if(isNaN(t)&&(t=0),t<0&&(s|=64),t==1/0||t==-1/0)return s|=143,void this.writeByte(s);e&&(s|=128),(t=Math.abs(t))<16?(s|=t,this.writeByte(s)):t<4096?(s|=16|t>>8&15,this.writeByte(s),this.writeByte(255&t)):t<268435456?(s|=32|t>>24&15,this.writeByte(s),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t)):(s|=48|t>>56&15,this.writeByte(s),this.writeByte(t>>48&255),this.writeByte(t>>40&255),this.writeByte(t>>32&255),this.writeByte(t>>24&255),this.writeByte(t>>16&255),this.writeByte(t>>8&255),this.writeByte(255&t))}writeString(t){let e=s.encode(t);this.writeByte(e.length>>8&&255),this.writeByte(e.length>>0&&255);for(let t=0;t<e.length;t++)this.writeByte(e[t])}writeBoolean(t){this.writeInt(t?1:0,!1)}writeByte(t,e){if(e)return e.s[e.c]=t,e.v=t,e;{(this.cursor>=this.bufferSize||0==this.payloadLengthSegments)&&(this.payloadLengthSegments++,this.cursor=0),this.payloadLengthSegments>this.segments.length&&this.segments.push(new Uint8Array(this.bufferSize));let e=this.segments[this.payloadLengthSegments-1];return e[this.cursor]=t,this.cursor++,{c:this.cursor-1,s:e,v:t}}}prepare(){if(this.sending)throw"Can't send a message that's already being sent.";if(this.instructionInProgress)throw"Instruction in progress.";this.sending=!0;let t=[];if(this.payloadLengthSegments){this.writeByte(0),t=this.segments.slice(0,this.payloadLengthSegments);let e=this.segments.slice(this.payloadLengthSegments,this.segments.length);this.segments=[...e,...t]}return this.reset(),t}reset(){this.sending=!1,this.payloadLengthSegments=0,this.cursor=0,this.lastInstructionLength=0,this.currentInstructionCode=0}}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E2UWxCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZWFyM2VuZ2luZS13ZWJzaXRlLy4uLy4uL0dBTUVTLVNJTVVMQVRPUlMtRlVOL2dlYXIzZW5naW5lL3BsdWdpbnMvZ2VhcjNlbmdpbmUvYnVpbGQvY29tL21lc3NhZ2UtYnVpbGRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBIRUFERVJfU0laRSA9IDA7XHJcbmNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuY29uc3QgREVCVUcgPSAwO1xyXG5jb25zdCBJTlNUUlVDVElPTl9OQU1FU19ERUJVRyA9IFtcIk5PLU9QXCIsIFwiQ1JFQVRFXCIsIFwiVVBEQVRFXCIsIFwiREVMRVRFXCIsIFwiQUNUSU9OXCJdO1xyXG5jb25zdCBJTlNUQ09ERV9OT09QID0gMDtcclxuY29uc3QgSU5TVENPREVfQ1JFQVRFID0gMTtcclxuY29uc3QgSU5TVENPREVfVVBEQVRFID0gMjtcclxuY29uc3QgSU5TVENPREVfREVMRVRFID0gMztcclxuY29uc3QgSU5TVENPREVfQUNUSU9OID0gNDtcclxuY2xhc3MgTWVzc2FnZUJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoYnVmZmVyU2l6ZSA9IDY0KSB7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGF5bG9hZExlbmd0aFNlZ21lbnRzID0gMDtcclxuICAgICAgICB0aGlzLmN1cnNvciA9IEhFQURFUl9TSVpFO1xyXG4gICAgICAgIHRoaXMubGFzdEluc3RydWN0aW9uTGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmluc3RydWN0aW9uSW5Qcm9ncmVzcyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uQ29kZSA9IElOU1RDT0RFX05PT1A7XHJcbiAgICAgICAgdGhpcy5idWZmZXJTaXplID0gYnVmZmVyU2l6ZTtcclxuICAgICAgICB0aGlzLmFwcGVuZEJ5dGVBcnJheSgpO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kQnl0ZUFycmF5KCkge1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChuZXcgVWludDhBcnJheSh0aGlzLmJ1ZmZlclNpemUpKTtcclxuICAgIH1cclxuICAgIHN0YXJ0Q3JlYXRlKG9iamVjdElkLCBvYmplY3RUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEluc3RydWN0aW9uKElOU1RDT0RFX0NSRUFURSwgb2JqZWN0SWQpO1xyXG4gICAgICAgIGxldCB1dFUgPSAob2JqZWN0VHlwZSAmIDB4RkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgdXRMID0gb2JqZWN0VHlwZSAmIDB4RkY7XHJcbiAgICAgICAgaWYgKERFQlVHKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJXcml0aW5nIHR5cGUgTVNCXCIsIHV0VSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJXcml0aW5nIHR5cGUgTFNCXCIsIHV0TCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKHV0VSk7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUodXRMKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIHN0YXJ0VXBkYXRlKG9iamVjdElkKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydEluc3RydWN0aW9uKElOU1RDT0RFX1VQREFURSwgb2JqZWN0SWQpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc3RhcnREZWxldGUob2JqZWN0SWQpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0SW5zdHJ1Y3Rpb24oSU5TVENPREVfREVMRVRFLCBvYmplY3RJZCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzdGFydEFjdGlvbihvYmplY3RJZCwgYWN0aW9uSWQpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0SW5zdHJ1Y3Rpb24oSU5TVENPREVfQUNUSU9OLCBvYmplY3RJZCA/PyAweDAwMDApO1xyXG4gICAgICAgIGlmIChERUJVRylcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIldyaXRpbmcgYWN0aW9uXCIsIGFjdGlvbklkICYgMHhGRik7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoYWN0aW9uSWQgJiAweEZGKTtcclxuICAgIH1cclxuICAgIHN0YXJ0SW5zdHJ1Y3Rpb24oaW5zdHJ1Y3Rpb25UeXBlLCByZXNvdXJjZUlkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25JblByb2dyZXNzKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkluc3RydWN0aW9uIGluIHByb2dyZXNzLlwiO1xyXG4gICAgICAgIHRoaXMubGFzdEluc3RydWN0aW9uTGVuZ3RoID0gMDtcclxuICAgICAgICBsZXQgaW5zdENvZGUgPSBpbnN0cnVjdGlvblR5cGUgJiAweEZGO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uQ29kZSA9IGluc3RDb2RlO1xyXG4gICAgICAgIGxldCByZXNNc2IgPSAocmVzb3VyY2VJZCAmIDB4RkYwMCkgPj4gODtcclxuICAgICAgICBsZXQgcmVzTHNiID0gKHJlc291cmNlSWQgJiAweDAwRkYpO1xyXG4gICAgICAgIGlmIChERUJVRykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBXcml0aW5nIGluc3RydWN0aW9uICR7SU5TVFJVQ1RJT05fTkFNRVNfREVCVUdbaW5zdENvZGVdfS5gLCBpbnN0Q29kZSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJXcml0aW5nIHJlcyBNU0IuXCIsIHJlc01zYik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoXCJXcml0aW5nIHJlcyBMU0IuXCIsIHJlc0xzYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKGluc3RDb2RlKTtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZShyZXNNc2IpO1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKHJlc0xzYik7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbkluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29tcGxldGVJbnN0cnVjdGlvbigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdHJ1Y3Rpb25JblByb2dyZXNzKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkluc3RydWN0aW9uIG5vdCBpbiBwcm9ncmVzcyAoY29tcGxldGluZyBpbnN0cnVjdGlvbikuXCI7XHJcbiAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKFwiV3JpdGluZyBpbnN0cnVjdGlvbiBjb21wbGV0ZS5cIiwgMCk7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoMCk7XHJcbiAgICAgICAgdGhpcy5pbnN0cnVjdGlvbkluUHJvZ3Jlc3MgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHdyaXRlVmFsdWUodmFsdWUsIGZpZWxkSWQsIGlzRGlmZmVyZW50aWFsID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdHJ1Y3Rpb25JblByb2dyZXNzKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkluc3RydWN0aW9uIG5vdCBpbiBwcm9ncmVzcyAod3JpdGluZyB2YWx1ZSkuXCI7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5zdHJ1Y3Rpb25MZW5ndGgrKztcclxuICAgICAgICBpZiAodGhpcy5sYXN0SW5zdHJ1Y3Rpb25MZW5ndGggPj0gMHgxMDAwKVxyXG4gICAgICAgICAgICB0aHJvdyBcIlVwZGF0ZSBpcyB0b28gbG9uZy5cIjtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZShmaWVsZElkKTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwibnVtYmVyXCI6IHtcclxuICAgICAgICAgICAgICAgIGlmIChERUJVRylcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBXcml0aW5nIGludCB2YWx1ZS5gLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndyaXRlSW50KHZhbHVlLCBpc0RpZmZlcmVudGlhbCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoREVCVUcpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgV3JpdGluZyBib29sZWFuIHZhbHVlLmAsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCb29sZWFuKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdHJpbmdcIjoge1xyXG4gICAgICAgICAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYFdyaXRpbmcgc3RyaW5nIHZhbHVlLmAsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud3JpdGVTdHJpbmcodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3ZhbHVlfSBkb2VzIG5vdCBoYXZlIGEgc3VwcG9ydGVkIGRhdGEgdHlwZS5gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHdyaXRlQXJyYXkoZmllbGRJZCwgdmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdHJ1Y3Rpb25JblByb2dyZXNzKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkluc3RydWN0aW9uIG5vdCBpbiBwcm9ncmVzcyAod3JpdHRpbmcgYXJyYXkpLlwiO1xyXG4gICAgICAgIHRoaXMubGFzdEluc3RydWN0aW9uTGVuZ3RoKys7XHJcbiAgICAgICAgaWYgKHRoaXMubGFzdEluc3RydWN0aW9uTGVuZ3RoID49IDB4MTAwMClcclxuICAgICAgICAgICAgdGhyb3cgXCJVcGRhdGUgaXMgdG9vIGxvbmcuXCI7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoZmllbGRJZCk7XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUodmFsdWUubGVuZ3RoID4+IDgpO1xyXG4gICAgICAgIHRoaXMud3JpdGVCeXRlKHZhbHVlLmxlbmd0aCAmIDB4RkYpO1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCB2MSA9IHZhbHVlWzBdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGVvZiB2MSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgdiBvZiB2YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53cml0ZUludCh2LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3RyaW5nXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCB2IG9mIHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndyaXRlU3RyaW5nKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2FzZSBcImJvb2xlYW5cIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHYgb2YgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud3JpdGVCb29sZWFuKHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVJbnQodmFsdWUsIGlzRGlpZmVyZW50aWFsKSB7XHJcbiAgICAgICAgbGV0IGJ5dGUxID0gMHgwMDtcclxuICAgICAgICBpZiAoaXNOYU4odmFsdWUpKVxyXG4gICAgICAgICAgICB2YWx1ZSA9IDA7XHJcbiAgICAgICAgaWYgKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBieXRlMSB8PSAwYjAxMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPT0gSW5maW5pdHkgfHwgdmFsdWUgPT0gLUluZmluaXR5KSB7XHJcbiAgICAgICAgICAgIGJ5dGUxIHw9IDBiMTAwMDExMTE7XHJcbiAgICAgICAgICAgIGlmIChERUJVRylcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIGluZmluaXRlIHZhbHVlLmAsIGJ5dGUxLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoYnl0ZTEpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhbHVlID0gTWF0aC5hYnModmFsdWUpO1xyXG4gICAgICAgIGlmIChpc0RpaWZlcmVudGlhbCkge1xyXG4gICAgICAgICAgICBieXRlMSB8PSAwYjEwMDAwMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPCAxNikge1xyXG4gICAgICAgICAgICBieXRlMSB8PSB2YWx1ZTtcclxuICAgICAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDEgYnl0ZSBpbnQuYCwgYnl0ZTEudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShieXRlMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgNDA5Nikge1xyXG4gICAgICAgICAgICBieXRlMSB8PSAwYjAwMDEwMDAwIHwgKCh2YWx1ZSA+PiA4KSAmIDB4MDAwRik7XHJcbiAgICAgICAgICAgIGlmIChERUJVRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDIgYnl0ZSBpbnQgYnl0ZSAxLmAsIChieXRlMSkudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDIgYnl0ZSBpbnQgYnl0ZSAyLmAsICh2YWx1ZSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZShieXRlMSk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKHZhbHVlICYgMHhGRik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhbHVlIDwgMjY4NDM1NDU2KSB7XHJcbiAgICAgICAgICAgIGJ5dGUxIHw9IDBiMDAxMDAwMDAgfCAoKHZhbHVlID4+IDI0KSAmIDB4MDAwRik7XHJcbiAgICAgICAgICAgIGlmIChERUJVRykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDQgYnl0ZSBpbnQgYnl0ZSAxLmAsIChieXRlMSkudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDQgYnl0ZSBpbnQgYnl0ZSAyLmAsICgodmFsdWUgPj4gMTYpICYgMHhGRikudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDQgYnl0ZSBpbnQgYnl0ZSAzLmAsICgodmFsdWUgPj4gOCkgJiAweEZGKS50b1N0cmluZygyKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGAgICAgV3JpdGluZyBzaWduZWQgNCBieXRlIGludCBieXRlIDQuYCwgKCh2YWx1ZSkgJiAweEZGKS50b1N0cmluZygyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoYnl0ZTEpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUgPj4gMTYpICYgMHhGRik7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKCh2YWx1ZSA+PiA4KSAmIDB4RkYpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUpICYgMHhGRik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBieXRlMSB8PSAwYjAwMTEwMDAwIHwgKCh2YWx1ZSA+PiA1NikgJiAweDAwMEYpO1xyXG4gICAgICAgICAgICBpZiAoREVCVUcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgMS5gLCAoYnl0ZTEpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgMi5gLCAoKHZhbHVlID4+IDQ4KSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgMy5gLCAoKHZhbHVlID4+IDQwKSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgNC5gLCAoKHZhbHVlID4+IDMyKSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgNS5gLCAoKHZhbHVlID4+IDI0KSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgNi5gLCAoKHZhbHVlID4+IDE2KSAmIDB4RkYpLnRvU3RyaW5nKDIpKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIHNpZ25lZCA4IGJ5dGUgaW50IGJ5dGUgNy5gLCAoKHZhbHVlID4+IDgpICYgMHhGRikudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgc2lnbmVkIDggYnl0ZSBpbnQgYnl0ZSA4LmAsICgodmFsdWUpICYgMHhGRikudG9TdHJpbmcoMikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKGJ5dGUxKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoKHZhbHVlID4+IDQ4KSAmIDB4RkYpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUgPj4gNDApICYgMHhGRik7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKCh2YWx1ZSA+PiAzMikgJiAweEZGKTtcclxuICAgICAgICAgICAgdGhpcy53cml0ZUJ5dGUoKHZhbHVlID4+IDI0KSAmIDB4RkYpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUgPj4gMTYpICYgMHhGRik7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKCh2YWx1ZSA+PiA4KSAmIDB4RkYpO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgodmFsdWUpICYgMHhGRik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICBsZXQgYXJyYXkgPSBlbmNvZGVyLmVuY29kZSh2YWx1ZSk7XHJcbiAgICAgICAgbGV0IGxlbiA9IDA7XHJcbiAgICAgICAgaWYgKERFQlVHKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYCAgICBXcml0aW5nIGxlbmd0aCAoJHthcnJheS5sZW5ndGh9KSBNU0IuYCwgKChhcnJheS5sZW5ndGggPj4gOCkgJiYgMHhGRikudG9TdHJpbmcoMTYpKTtcclxuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgbGVuZ3RoICgke2FycmF5Lmxlbmd0aH0pIExTQi5gLCAoKGFycmF5Lmxlbmd0aCkgJiYgMHhGRikudG9TdHJpbmcoMTYpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53cml0ZUJ5dGUoKGFycmF5Lmxlbmd0aCA+PiA4KSAmJiAweEZGKTtcclxuICAgICAgICB0aGlzLndyaXRlQnl0ZSgoYXJyYXkubGVuZ3RoID4+IDApICYmIDB4RkYpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgICAgIFdyaXRpbmcgVVRGLTggY2hhci5gLCAoYXJyYXlbaV0pLnRvU3RyaW5nKDE2KSk7XHJcbiAgICAgICAgICAgIHRoaXMud3JpdGVCeXRlKGFycmF5W2ldKTtcclxuICAgICAgICAgICAgbGVuKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgd3JpdGVCb29sZWFuKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICBjb25zb2xlLmRlYnVnKGAgICAgV3JpdGluZyBib29sLmAsIHZhbHVlID8gMSA6IDApO1xyXG4gICAgICAgIHRoaXMud3JpdGVJbnQodmFsdWUgPyAxIDogMCwgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgd3JpdGVCeXRlKGJ5dGUsIGxvY2F0aW9uKSB7XHJcbiAgICAgICAgaWYgKGxvY2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGxvY2F0aW9uLnNbbG9jYXRpb24uY10gPSBieXRlO1xyXG4gICAgICAgICAgICBsb2NhdGlvbi52ID0gYnl0ZTtcclxuICAgICAgICAgICAgcmV0dXJuIGxvY2F0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3Vyc29yID49IHRoaXMuYnVmZmVyU2l6ZSB8fCB0aGlzLnBheWxvYWRMZW5ndGhTZWdtZW50cyA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBheWxvYWRMZW5ndGhTZWdtZW50cysrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJzb3IgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBheWxvYWRMZW5ndGhTZWdtZW50cyA+IHRoaXMuc2VnbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2gobmV3IFVpbnQ4QXJyYXkodGhpcy5idWZmZXJTaXplKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNlZ21lbnQgPSB0aGlzLnNlZ21lbnRzW3RoaXMucGF5bG9hZExlbmd0aFNlZ21lbnRzIC0gMV07XHJcbiAgICAgICAgICAgIHNlZ21lbnRbdGhpcy5jdXJzb3JdID0gYnl0ZTtcclxuICAgICAgICAgICAgdGhpcy5jdXJzb3IrKztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGM6IHRoaXMuY3Vyc29yIC0gMSxcclxuICAgICAgICAgICAgICAgIHM6IHNlZ21lbnQsXHJcbiAgICAgICAgICAgICAgICB2OiBieXRlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJlcGFyZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZW5kaW5nKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkNhbid0IHNlbmQgYSBtZXNzYWdlIHRoYXQncyBhbHJlYWR5IGJlaW5nIHNlbnQuXCI7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5zdHJ1Y3Rpb25JblByb2dyZXNzKVxyXG4gICAgICAgICAgICB0aHJvdyBcIkluc3RydWN0aW9uIGluIHByb2dyZXNzLlwiO1xyXG4gICAgICAgIHRoaXMuc2VuZGluZyA9IHRydWU7XHJcbiAgICAgICAgbGV0IHBheWxvYWQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5wYXlsb2FkTGVuZ3RoU2VnbWVudHMpIHtcclxuICAgICAgICAgICAgaWYgKERFQlVHKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhcIldyaXRpbmcgTk9PUCBieXRlIHRvIGNvbXBsZXRlIHBheWxvYWQuXCIsIDApO1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlQnl0ZSgwKTtcclxuICAgICAgICAgICAgcGF5bG9hZCA9IHRoaXMuc2VnbWVudHMuc2xpY2UoMCwgdGhpcy5wYXlsb2FkTGVuZ3RoU2VnbWVudHMpO1xyXG4gICAgICAgICAgICBsZXQgdW51c2VkTG9hZCA9IHRoaXMuc2VnbWVudHMuc2xpY2UodGhpcy5wYXlsb2FkTGVuZ3RoU2VnbWVudHMsIHRoaXMuc2VnbWVudHMubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5zZWdtZW50cyA9IFsuLi51bnVzZWRMb2FkLCAuLi5wYXlsb2FkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgICAgIHJldHVybiBwYXlsb2FkO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5zZW5kaW5nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5wYXlsb2FkTGVuZ3RoU2VnbWVudHMgPSAwO1xyXG4gICAgICAgIHRoaXMuY3Vyc29yID0gSEVBREVSX1NJWkU7XHJcbiAgICAgICAgdGhpcy5sYXN0SW5zdHJ1Y3Rpb25MZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEluc3RydWN0aW9uQ29kZSA9IElOU1RDT0RFX05PT1A7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5kZWZhdWx0ID0gTWVzc2FnZUJ1aWxkZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lc3NhZ2UtYnVpbGRlci5qcy5tYXAiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJlbmNvZGVyIiwiVGV4dEVuY29kZXIiLCJjb25zdHJ1Y3RvciIsImJ1ZmZlclNpemUiLCJ0aGlzIiwic2VnbWVudHMiLCJwYXlsb2FkTGVuZ3RoU2VnbWVudHMiLCJjdXJzb3IiLCJsYXN0SW5zdHJ1Y3Rpb25MZW5ndGgiLCJpbnN0cnVjdGlvbkluUHJvZ3Jlc3MiLCJjdXJyZW50SW5zdHJ1Y3Rpb25Db2RlIiwiYXBwZW5kQnl0ZUFycmF5IiwicHVzaCIsIlVpbnQ4QXJyYXkiLCJzdGFydENyZWF0ZSIsIm9iamVjdElkIiwib2JqZWN0VHlwZSIsInN0YXJ0SW5zdHJ1Y3Rpb24iLCJ1dFUiLCJ1dEwiLCJ3cml0ZUJ5dGUiLCJzdGFydFVwZGF0ZSIsInN0YXJ0RGVsZXRlIiwic3RhcnRBY3Rpb24iLCJhY3Rpb25JZCIsImluc3RydWN0aW9uVHlwZSIsInJlc291cmNlSWQiLCJpbnN0Q29kZSIsInJlc01zYiIsInJlc0xzYiIsImNvbXBsZXRlSW5zdHJ1Y3Rpb24iLCJ3cml0ZVZhbHVlIiwiZmllbGRJZCIsImlzRGlmZmVyZW50aWFsIiwid3JpdGVJbnQiLCJ3cml0ZUJvb2xlYW4iLCJ3cml0ZVN0cmluZyIsIkVycm9yIiwid3JpdGVBcnJheSIsImxlbmd0aCIsInYiLCJpc0RpaWZlcmVudGlhbCIsImJ5dGUxIiwiaXNOYU4iLCJJbmZpbml0eSIsIk1hdGgiLCJhYnMiLCJhcnJheSIsImVuY29kZSIsImkiLCJieXRlIiwibG9jYXRpb24iLCJzIiwiYyIsInNlZ21lbnQiLCJwcmVwYXJlIiwic2VuZGluZyIsInBheWxvYWQiLCJzbGljZSIsInVudXNlZExvYWQiLCJyZXNldCJdLCJzb3VyY2VSb290IjoiIn0=