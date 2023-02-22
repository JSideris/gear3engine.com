/*! For license information please see 7054.edb15b8b7fcdd3d56ad1.js.LICENSE.txt */
"use strict";(self.webpackChunkgear3engine_website=self.webpackChunkgear3engine_website||[]).push([[7054],{7054:(E,_,T)=>{var N,A,R,O,L,I,P,S,U,C,D,M,G,H,n,B,i;T.d(_,{A7:()=>B,G5:()=>i,I2:()=>I,N3:()=>A,Nt:()=>C,T$:()=>O,UN:()=>H,V0:()=>R,Vi:()=>N,WB:()=>D,aH:()=>U,cB:()=>n,iw:()=>M,lg:()=>L,sp:()=>P,vK:()=>S,yl:()=>G}),function(E){E[E.WEBGL_LEGACY=0]="WEBGL_LEGACY",E[E.WEBGL=1]="WEBGL",E[E.WEBGL2=2]="WEBGL2"}(N||(N={})),function(E){E[E.UNKNOWN=0]="UNKNOWN",E[E.WEBGL=1]="WEBGL",E[E.CANVAS=2]="CANVAS"}(A||(A={})),function(E){E[E.COLOR=16384]="COLOR",E[E.DEPTH=256]="DEPTH",E[E.STENCIL=1024]="STENCIL"}(R||(R={})),function(E){E[E.NORMAL=0]="NORMAL",E[E.ADD=1]="ADD",E[E.MULTIPLY=2]="MULTIPLY",E[E.SCREEN=3]="SCREEN",E[E.OVERLAY=4]="OVERLAY",E[E.DARKEN=5]="DARKEN",E[E.LIGHTEN=6]="LIGHTEN",E[E.COLOR_DODGE=7]="COLOR_DODGE",E[E.COLOR_BURN=8]="COLOR_BURN",E[E.HARD_LIGHT=9]="HARD_LIGHT",E[E.SOFT_LIGHT=10]="SOFT_LIGHT",E[E.DIFFERENCE=11]="DIFFERENCE",E[E.EXCLUSION=12]="EXCLUSION",E[E.HUE=13]="HUE",E[E.SATURATION=14]="SATURATION",E[E.COLOR=15]="COLOR",E[E.LUMINOSITY=16]="LUMINOSITY",E[E.NORMAL_NPM=17]="NORMAL_NPM",E[E.ADD_NPM=18]="ADD_NPM",E[E.SCREEN_NPM=19]="SCREEN_NPM",E[E.NONE=20]="NONE",E[E.SRC_OVER=0]="SRC_OVER",E[E.SRC_IN=21]="SRC_IN",E[E.SRC_OUT=22]="SRC_OUT",E[E.SRC_ATOP=23]="SRC_ATOP",E[E.DST_OVER=24]="DST_OVER",E[E.DST_IN=25]="DST_IN",E[E.DST_OUT=26]="DST_OUT",E[E.DST_ATOP=27]="DST_ATOP",E[E.ERASE=26]="ERASE",E[E.SUBTRACT=28]="SUBTRACT",E[E.XOR=29]="XOR"}(O||(O={})),function(E){E[E.POINTS=0]="POINTS",E[E.LINES=1]="LINES",E[E.LINE_LOOP=2]="LINE_LOOP",E[E.LINE_STRIP=3]="LINE_STRIP",E[E.TRIANGLES=4]="TRIANGLES",E[E.TRIANGLE_STRIP=5]="TRIANGLE_STRIP",E[E.TRIANGLE_FAN=6]="TRIANGLE_FAN"}(L||(L={})),function(E){E[E.RGBA=6408]="RGBA",E[E.RGB=6407]="RGB",E[E.ALPHA=6406]="ALPHA",E[E.LUMINANCE=6409]="LUMINANCE",E[E.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",E[E.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",E[E.DEPTH_STENCIL=34041]="DEPTH_STENCIL"}(I||(I={})),function(E){E[E.TEXTURE_2D=3553]="TEXTURE_2D",E[E.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",E[E.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",E[E.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",E[E.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",E[E.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",E[E.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",E[E.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z"}(P||(P={})),function(E){E[E.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",E[E.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",E[E.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",E[E.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",E[E.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",E[E.FLOAT=5126]="FLOAT",E[E.HALF_FLOAT=36193]="HALF_FLOAT"}(S||(S={})),function(E){E[E.NEAREST=0]="NEAREST",E[E.LINEAR=1]="LINEAR"}(U||(U={})),function(E){E[E.CLAMP=33071]="CLAMP",E[E.REPEAT=10497]="REPEAT",E[E.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT"}(C||(C={})),function(E){E[E.OFF=0]="OFF",E[E.POW2=1]="POW2",E[E.ON=2]="ON"}(D||(D={})),function(E){E[E.NPM=0]="NPM",E[E.UNPACK=1]="UNPACK",E[E.PMA=2]="PMA",E[E.NO_PREMULTIPLIED_ALPHA=0]="NO_PREMULTIPLIED_ALPHA",E[E.PREMULTIPLY_ON_UPLOAD=1]="PREMULTIPLY_ON_UPLOAD",E[E.PREMULTIPLY_ALPHA=2]="PREMULTIPLY_ALPHA"}(M||(M={})),function(E){E[E.NO=0]="NO",E[E.YES=1]="YES",E[E.AUTO=2]="AUTO",E[E.BLEND=0]="BLEND",E[E.CLEAR=1]="CLEAR",E[E.BLIT=2]="BLIT"}(G||(G={})),function(E){E[E.AUTO=0]="AUTO",E[E.MANUAL=1]="MANUAL"}(H||(H={})),function(E){E.LOW="lowp",E.MEDIUM="mediump",E.HIGH="highp"}(n||(n={})),function(E){E[E.NONE=0]="NONE",E[E.SCISSOR=1]="SCISSOR",E[E.STENCIL=2]="STENCIL",E[E.SPRITE=3]="SPRITE"}(B||(B={})),function(E){E[E.NONE=0]="NONE",E[E.LOW=2]="LOW",E[E.MEDIUM=4]="MEDIUM",E[E.HIGH=8]="HIGH"}(i||(i={}))}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDdEJBLEVBQWdCLEtBQUksT0FDdkIsQ0FKRCxDQUlHQSxJQUFjQSxFQUFZLENBQUMsSUFlOUIsU0FBV0MsR0FDUEEsRUFBV0EsRUFBaUIsS0FBSSxHQUFLLE9BQ3JDQSxFQUFXQSxFQUFvQixRQUFJLEdBQUssVUFDeENBLEVBQVdBLEVBQW9CLFFBQUksR0FBSyxVQUN4Q0EsRUFBV0EsRUFBbUIsT0FBSSxHQUFLLFFBQzFDLENBTEQsQ0FLR0EsSUFBZUEsRUFBYSxDQUFDLElBZ0JoQyxTQUFXQyxHQUNQQSxFQUFhQSxFQUFtQixLQUFJLEdBQUssT0FDekNBLEVBQWFBLEVBQWtCLElBQUksR0FBSyxNQUN4Q0EsRUFBYUEsRUFBcUIsT0FBSSxHQUFLLFNBQzNDQSxFQUFhQSxFQUFtQixLQUFJLEdBQUssTUFDNUMsQ0FMRCxDQUtHQSxJQUFpQkEsRUFBZSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2VhcjNlbmdpbmUtd2Vic2l0ZS8uL25vZGVfbW9kdWxlcy9AcGl4aS9jb25zdGFudHMvbGliL2NvbnN0YW50cy5lcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIEBwaXhpL2NvbnN0YW50cyAtIHY1LjMuMTJcbiAqIENvbXBpbGVkIFdlZCwgMjMgTWFyIDIwMjIgMTg6MzQ6MjggVVRDXG4gKlxuICogQHBpeGkvY29uc3RhbnRzIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiAqIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2VcbiAqL1xuLyoqXG4gKiBEaWZmZXJlbnQgdHlwZXMgb2YgZW52aXJvbm1lbnRzIGZvciBXZWJHTC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQG5hbWUgRU5WXG4gKiBAZW51bSB7bnVtYmVyfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFdFQkdMX0xFR0FDWSAtIFVzZWQgZm9yIG9sZGVyIHYxIFdlYkdMIGRldmljZXMuIFBpeGlKUyB3aWxsIGFpbSB0byBlbnN1cmUgY29tcGF0aWJpbGl0eVxuICogIHdpdGggb2xkZXIgLyBsZXNzIGFkdmFuY2VkIGRldmljZXMuIElmIHlvdSBleHBlcmllbmNlIHVuZXhwbGFpbmVkIGZsaWNrZXJpbmcgcHJlZmVyIHRoaXMgZW52aXJvbm1lbnQuXG4gKiBAcHJvcGVydHkge251bWJlcn0gV0VCR0wgLSBWZXJzaW9uIDEgb2YgV2ViR0xcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBXRUJHTDIgLSBWZXJzaW9uIDIgb2YgV2ViR0xcbiAqL1xudmFyIEVOVjtcbihmdW5jdGlvbiAoRU5WKSB7XG4gICAgRU5WW0VOVltcIldFQkdMX0xFR0FDWVwiXSA9IDBdID0gXCJXRUJHTF9MRUdBQ1lcIjtcbiAgICBFTlZbRU5WW1wiV0VCR0xcIl0gPSAxXSA9IFwiV0VCR0xcIjtcbiAgICBFTlZbRU5WW1wiV0VCR0wyXCJdID0gMl0gPSBcIldFQkdMMlwiO1xufSkoRU5WIHx8IChFTlYgPSB7fSkpO1xuLyoqXG4gKiBDb25zdGFudCB0byBpZGVudGlmeSB0aGUgUmVuZGVyZXIgVHlwZS5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQG5hbWUgUkVOREVSRVJfVFlQRVxuICogQGVudW0ge251bWJlcn1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBVTktOT1dOIC0gVW5rbm93biByZW5kZXIgdHlwZS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBXRUJHTCAtIFdlYkdMIHJlbmRlciB0eXBlLlxuICogQHByb3BlcnR5IHtudW1iZXJ9IENBTlZBUyAtIENhbnZhcyByZW5kZXIgdHlwZS5cbiAqL1xudmFyIFJFTkRFUkVSX1RZUEU7XG4oZnVuY3Rpb24gKFJFTkRFUkVSX1RZUEUpIHtcbiAgICBSRU5ERVJFUl9UWVBFW1JFTkRFUkVSX1RZUEVbXCJVTktOT1dOXCJdID0gMF0gPSBcIlVOS05PV05cIjtcbiAgICBSRU5ERVJFUl9UWVBFW1JFTkRFUkVSX1RZUEVbXCJXRUJHTFwiXSA9IDFdID0gXCJXRUJHTFwiO1xuICAgIFJFTkRFUkVSX1RZUEVbUkVOREVSRVJfVFlQRVtcIkNBTlZBU1wiXSA9IDJdID0gXCJDQU5WQVNcIjtcbn0pKFJFTkRFUkVSX1RZUEUgfHwgKFJFTkRFUkVSX1RZUEUgPSB7fSkpO1xuLyoqXG4gKiBCaXR3aXNlIE9SIG9mIG1hc2tzIHRoYXQgaW5kaWNhdGUgdGhlIGJ1ZmZlcnMgdG8gYmUgY2xlYXJlZC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQG5hbWUgQlVGRkVSX0JJVFNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gQ09MT1IgLSBJbmRpY2F0ZXMgdGhlIGJ1ZmZlcnMgY3VycmVudGx5IGVuYWJsZWQgZm9yIGNvbG9yIHdyaXRpbmcuXG4gKiBAcHJvcGVydHkge251bWJlcn0gREVQVEggLSBJbmRpY2F0ZXMgdGhlIGRlcHRoIGJ1ZmZlci5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTVEVOQ0lMIC0gSW5kaWNhdGVzIHRoZSBzdGVuY2lsIGJ1ZmZlci5cbiAqL1xudmFyIEJVRkZFUl9CSVRTO1xuKGZ1bmN0aW9uIChCVUZGRVJfQklUUykge1xuICAgIEJVRkZFUl9CSVRTW0JVRkZFUl9CSVRTW1wiQ09MT1JcIl0gPSAxNjM4NF0gPSBcIkNPTE9SXCI7XG4gICAgQlVGRkVSX0JJVFNbQlVGRkVSX0JJVFNbXCJERVBUSFwiXSA9IDI1Nl0gPSBcIkRFUFRIXCI7XG4gICAgQlVGRkVSX0JJVFNbQlVGRkVSX0JJVFNbXCJTVEVOQ0lMXCJdID0gMTAyNF0gPSBcIlNURU5DSUxcIjtcbn0pKEJVRkZFUl9CSVRTIHx8IChCVUZGRVJfQklUUyA9IHt9KSk7XG4vKipcbiAqIFZhcmlvdXMgYmxlbmQgbW9kZXMgc3VwcG9ydGVkIGJ5IFBJWEkuXG4gKlxuICogSU1QT1JUQU5UIC0gVGhlIFdlYkdMIHJlbmRlcmVyIG9ubHkgc3VwcG9ydHMgdGhlIE5PUk1BTCwgQURELCBNVUxUSVBMWSBhbmQgU0NSRUVOIGJsZW5kIG1vZGVzLlxuICogQW55dGhpbmcgZWxzZSB3aWxsIHNpbGVudGx5IGFjdCBsaWtlIE5PUk1BTC5cbiAqXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQG5hbWUgQkxFTkRfTU9ERVNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTk9STUFMXG4gKiBAcHJvcGVydHkge251bWJlcn0gQUREXG4gKiBAcHJvcGVydHkge251bWJlcn0gTVVMVElQTFlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTQ1JFRU5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPVkVSTEFZXG4gKiBAcHJvcGVydHkge251bWJlcn0gREFSS0VOXG4gKiBAcHJvcGVydHkge251bWJlcn0gTElHSFRFTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IENPTE9SX0RPREdFXG4gKiBAcHJvcGVydHkge251bWJlcn0gQ09MT1JfQlVSTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEhBUkRfTElHSFRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTT0ZUX0xJR0hUXG4gKiBAcHJvcGVydHkge251bWJlcn0gRElGRkVSRU5DRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEVYQ0xVU0lPTlxuICogQHByb3BlcnR5IHtudW1iZXJ9IEhVRVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNBVFVSQVRJT05cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDT0xPUlxuICogQHByb3BlcnR5IHtudW1iZXJ9IExVTUlOT1NJVFlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT1JNQUxfTlBNXG4gKiBAcHJvcGVydHkge251bWJlcn0gQUREX05QTVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNDUkVFTl9OUE1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT05FXG4gKiBAcHJvcGVydHkge251bWJlcn0gU1JDX0lOXG4gKiBAcHJvcGVydHkge251bWJlcn0gU1JDX09VVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNSQ19BVE9QXG4gKiBAcHJvcGVydHkge251bWJlcn0gRFNUX09WRVJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBEU1RfSU5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBEU1RfT1VUXG4gKiBAcHJvcGVydHkge251bWJlcn0gRFNUX0FUT1BcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTVUJUUkFDVFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFNSQ19PVkVSXG4gKiBAcHJvcGVydHkge251bWJlcn0gRVJBU0VcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBYT1JcbiAqL1xudmFyIEJMRU5EX01PREVTO1xuKGZ1bmN0aW9uIChCTEVORF9NT0RFUykge1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiTk9STUFMXCJdID0gMF0gPSBcIk5PUk1BTFwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiQUREXCJdID0gMV0gPSBcIkFERFwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiTVVMVElQTFlcIl0gPSAyXSA9IFwiTVVMVElQTFlcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIlNDUkVFTlwiXSA9IDNdID0gXCJTQ1JFRU5cIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIk9WRVJMQVlcIl0gPSA0XSA9IFwiT1ZFUkxBWVwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiREFSS0VOXCJdID0gNV0gPSBcIkRBUktFTlwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiTElHSFRFTlwiXSA9IDZdID0gXCJMSUdIVEVOXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJDT0xPUl9ET0RHRVwiXSA9IDddID0gXCJDT0xPUl9ET0RHRVwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiQ09MT1JfQlVSTlwiXSA9IDhdID0gXCJDT0xPUl9CVVJOXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJIQVJEX0xJR0hUXCJdID0gOV0gPSBcIkhBUkRfTElHSFRcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIlNPRlRfTElHSFRcIl0gPSAxMF0gPSBcIlNPRlRfTElHSFRcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIkRJRkZFUkVOQ0VcIl0gPSAxMV0gPSBcIkRJRkZFUkVOQ0VcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIkVYQ0xVU0lPTlwiXSA9IDEyXSA9IFwiRVhDTFVTSU9OXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJIVUVcIl0gPSAxM10gPSBcIkhVRVwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiU0FUVVJBVElPTlwiXSA9IDE0XSA9IFwiU0FUVVJBVElPTlwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiQ09MT1JcIl0gPSAxNV0gPSBcIkNPTE9SXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJMVU1JTk9TSVRZXCJdID0gMTZdID0gXCJMVU1JTk9TSVRZXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJOT1JNQUxfTlBNXCJdID0gMTddID0gXCJOT1JNQUxfTlBNXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJBRERfTlBNXCJdID0gMThdID0gXCJBRERfTlBNXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJTQ1JFRU5fTlBNXCJdID0gMTldID0gXCJTQ1JFRU5fTlBNXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJOT05FXCJdID0gMjBdID0gXCJOT05FXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJTUkNfT1ZFUlwiXSA9IDBdID0gXCJTUkNfT1ZFUlwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiU1JDX0lOXCJdID0gMjFdID0gXCJTUkNfSU5cIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIlNSQ19PVVRcIl0gPSAyMl0gPSBcIlNSQ19PVVRcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIlNSQ19BVE9QXCJdID0gMjNdID0gXCJTUkNfQVRPUFwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiRFNUX09WRVJcIl0gPSAyNF0gPSBcIkRTVF9PVkVSXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJEU1RfSU5cIl0gPSAyNV0gPSBcIkRTVF9JTlwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiRFNUX09VVFwiXSA9IDI2XSA9IFwiRFNUX09VVFwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiRFNUX0FUT1BcIl0gPSAyN10gPSBcIkRTVF9BVE9QXCI7XG4gICAgQkxFTkRfTU9ERVNbQkxFTkRfTU9ERVNbXCJFUkFTRVwiXSA9IDI2XSA9IFwiRVJBU0VcIjtcbiAgICBCTEVORF9NT0RFU1tCTEVORF9NT0RFU1tcIlNVQlRSQUNUXCJdID0gMjhdID0gXCJTVUJUUkFDVFwiO1xuICAgIEJMRU5EX01PREVTW0JMRU5EX01PREVTW1wiWE9SXCJdID0gMjldID0gXCJYT1JcIjtcbn0pKEJMRU5EX01PREVTIHx8IChCTEVORF9NT0RFUyA9IHt9KSk7XG4vKipcbiAqIFZhcmlvdXMgd2ViZ2wgZHJhdyBtb2Rlcy4gVGhlc2UgY2FuIGJlIHVzZWQgdG8gc3BlY2lmeSB3aGljaCBHTCBkcmF3TW9kZSB0byB1c2VcbiAqIHVuZGVyIGNlcnRhaW4gc2l0dWF0aW9ucyBhbmQgcmVuZGVyZXJzLlxuICpcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAc3RhdGljXG4gKiBAbmFtZSBEUkFXX01PREVTXG4gKiBAZW51bSB7bnVtYmVyfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFBPSU5UU1xuICogQHByb3BlcnR5IHtudW1iZXJ9IExJTkVTXG4gKiBAcHJvcGVydHkge251bWJlcn0gTElORV9MT09QXG4gKiBAcHJvcGVydHkge251bWJlcn0gTElORV9TVFJJUFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRSSUFOR0xFU1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFRSSUFOR0xFX1NUUklQXG4gKiBAcHJvcGVydHkge251bWJlcn0gVFJJQU5HTEVfRkFOXG4gKi9cbnZhciBEUkFXX01PREVTO1xuKGZ1bmN0aW9uIChEUkFXX01PREVTKSB7XG4gICAgRFJBV19NT0RFU1tEUkFXX01PREVTW1wiUE9JTlRTXCJdID0gMF0gPSBcIlBPSU5UU1wiO1xuICAgIERSQVdfTU9ERVNbRFJBV19NT0RFU1tcIkxJTkVTXCJdID0gMV0gPSBcIkxJTkVTXCI7XG4gICAgRFJBV19NT0RFU1tEUkFXX01PREVTW1wiTElORV9MT09QXCJdID0gMl0gPSBcIkxJTkVfTE9PUFwiO1xuICAgIERSQVdfTU9ERVNbRFJBV19NT0RFU1tcIkxJTkVfU1RSSVBcIl0gPSAzXSA9IFwiTElORV9TVFJJUFwiO1xuICAgIERSQVdfTU9ERVNbRFJBV19NT0RFU1tcIlRSSUFOR0xFU1wiXSA9IDRdID0gXCJUUklBTkdMRVNcIjtcbiAgICBEUkFXX01PREVTW0RSQVdfTU9ERVNbXCJUUklBTkdMRV9TVFJJUFwiXSA9IDVdID0gXCJUUklBTkdMRV9TVFJJUFwiO1xuICAgIERSQVdfTU9ERVNbRFJBV19NT0RFU1tcIlRSSUFOR0xFX0ZBTlwiXSA9IDZdID0gXCJUUklBTkdMRV9GQU5cIjtcbn0pKERSQVdfTU9ERVMgfHwgKERSQVdfTU9ERVMgPSB7fSkpO1xuLyoqXG4gKiBWYXJpb3VzIEdMIHRleHR1cmUvcmVzb3VyY2VzIGZvcm1hdHMuXG4gKlxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBzdGF0aWNcbiAqIEBuYW1lIEZPUk1BVFNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gUkdCQT02NDA4XG4gKiBAcHJvcGVydHkge251bWJlcn0gUkdCPTY0MDdcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBBTFBIQT02NDA2XG4gKiBAcHJvcGVydHkge251bWJlcn0gTFVNSU5BTkNFPTY0MDlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBMVU1JTkFOQ0VfQUxQSEE9NjQxMFxuICogQHByb3BlcnR5IHtudW1iZXJ9IERFUFRIX0NPTVBPTkVOVD02NDAyXG4gKiBAcHJvcGVydHkge251bWJlcn0gREVQVEhfU1RFTkNJTD0zNDA0MVxuICovXG52YXIgRk9STUFUUztcbihmdW5jdGlvbiAoRk9STUFUUykge1xuICAgIEZPUk1BVFNbRk9STUFUU1tcIlJHQkFcIl0gPSA2NDA4XSA9IFwiUkdCQVwiO1xuICAgIEZPUk1BVFNbRk9STUFUU1tcIlJHQlwiXSA9IDY0MDddID0gXCJSR0JcIjtcbiAgICBGT1JNQVRTW0ZPUk1BVFNbXCJBTFBIQVwiXSA9IDY0MDZdID0gXCJBTFBIQVwiO1xuICAgIEZPUk1BVFNbRk9STUFUU1tcIkxVTUlOQU5DRVwiXSA9IDY0MDldID0gXCJMVU1JTkFOQ0VcIjtcbiAgICBGT1JNQVRTW0ZPUk1BVFNbXCJMVU1JTkFOQ0VfQUxQSEFcIl0gPSA2NDEwXSA9IFwiTFVNSU5BTkNFX0FMUEhBXCI7XG4gICAgRk9STUFUU1tGT1JNQVRTW1wiREVQVEhfQ09NUE9ORU5UXCJdID0gNjQwMl0gPSBcIkRFUFRIX0NPTVBPTkVOVFwiO1xuICAgIEZPUk1BVFNbRk9STUFUU1tcIkRFUFRIX1NURU5DSUxcIl0gPSAzNDA0MV0gPSBcIkRFUFRIX1NURU5DSUxcIjtcbn0pKEZPUk1BVFMgfHwgKEZPUk1BVFMgPSB7fSkpO1xuLyoqXG4gKiBWYXJpb3VzIEdMIHRhcmdldCB0eXBlcy5cbiAqXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQG5hbWUgVEFSR0VUU1xuICogQGVudW0ge251bWJlcn1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBURVhUVVJFXzJEPTM1NTNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBURVhUVVJFX0NVQkVfTUFQPTM0MDY3XG4gKiBAcHJvcGVydHkge251bWJlcn0gVEVYVFVSRV8yRF9BUlJBWT0zNTg2NlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWD0zNDA2OVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWD0zNDA3MFxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWT0zNDA3MVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWT0zNDA3MlxuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWj0zNDA3M1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWj0zNDA3NFxuICovXG52YXIgVEFSR0VUUztcbihmdW5jdGlvbiAoVEFSR0VUUykge1xuICAgIFRBUkdFVFNbVEFSR0VUU1tcIlRFWFRVUkVfMkRcIl0gPSAzNTUzXSA9IFwiVEVYVFVSRV8yRFwiO1xuICAgIFRBUkdFVFNbVEFSR0VUU1tcIlRFWFRVUkVfQ1VCRV9NQVBcIl0gPSAzNDA2N10gPSBcIlRFWFRVUkVfQ1VCRV9NQVBcIjtcbiAgICBUQVJHRVRTW1RBUkdFVFNbXCJURVhUVVJFXzJEX0FSUkFZXCJdID0gMzU4NjZdID0gXCJURVhUVVJFXzJEX0FSUkFZXCI7XG4gICAgVEFSR0VUU1tUQVJHRVRTW1wiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9YXCJdID0gMzQwNjldID0gXCJURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1hcIjtcbiAgICBUQVJHRVRTW1RBUkdFVFNbXCJURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1hcIl0gPSAzNDA3MF0gPSBcIlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWFwiO1xuICAgIFRBUkdFVFNbVEFSR0VUU1tcIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWVwiXSA9IDM0MDcxXSA9IFwiVEVYVFVSRV9DVUJFX01BUF9QT1NJVElWRV9ZXCI7XG4gICAgVEFSR0VUU1tUQVJHRVRTW1wiVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9ZXCJdID0gMzQwNzJdID0gXCJURVhUVVJFX0NVQkVfTUFQX05FR0FUSVZFX1lcIjtcbiAgICBUQVJHRVRTW1RBUkdFVFNbXCJURVhUVVJFX0NVQkVfTUFQX1BPU0lUSVZFX1pcIl0gPSAzNDA3M10gPSBcIlRFWFRVUkVfQ1VCRV9NQVBfUE9TSVRJVkVfWlwiO1xuICAgIFRBUkdFVFNbVEFSR0VUU1tcIlRFWFRVUkVfQ1VCRV9NQVBfTkVHQVRJVkVfWlwiXSA9IDM0MDc0XSA9IFwiVEVYVFVSRV9DVUJFX01BUF9ORUdBVElWRV9aXCI7XG59KShUQVJHRVRTIHx8IChUQVJHRVRTID0ge30pKTtcbi8qKlxuICogVmFyaW91cyBHTCBkYXRhIGZvcm1hdCB0eXBlcy5cbiAqXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQG5hbWUgVFlQRVNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gVU5TSUdORURfQllURT01MTIxXG4gKiBAcHJvcGVydHkge251bWJlcn0gVU5TSUdORURfU0hPUlQ9NTEyM1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFVOU0lHTkVEX1NIT1JUXzVfNl81PTMzNjM1XG4gKiBAcHJvcGVydHkge251bWJlcn0gVU5TSUdORURfU0hPUlRfNF80XzRfND0zMjgxOVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFVOU0lHTkVEX1NIT1JUXzVfNV81XzE9MzI4MjBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBGTE9BVD01MTI2XG4gKiBAcHJvcGVydHkge251bWJlcn0gSEFMRl9GTE9BVD0zNjE5M1xuICovXG52YXIgVFlQRVM7XG4oZnVuY3Rpb24gKFRZUEVTKSB7XG4gICAgVFlQRVNbVFlQRVNbXCJVTlNJR05FRF9CWVRFXCJdID0gNTEyMV0gPSBcIlVOU0lHTkVEX0JZVEVcIjtcbiAgICBUWVBFU1tUWVBFU1tcIlVOU0lHTkVEX1NIT1JUXCJdID0gNTEyM10gPSBcIlVOU0lHTkVEX1NIT1JUXCI7XG4gICAgVFlQRVNbVFlQRVNbXCJVTlNJR05FRF9TSE9SVF81XzZfNVwiXSA9IDMzNjM1XSA9IFwiVU5TSUdORURfU0hPUlRfNV82XzVcIjtcbiAgICBUWVBFU1tUWVBFU1tcIlVOU0lHTkVEX1NIT1JUXzRfNF80XzRcIl0gPSAzMjgxOV0gPSBcIlVOU0lHTkVEX1NIT1JUXzRfNF80XzRcIjtcbiAgICBUWVBFU1tUWVBFU1tcIlVOU0lHTkVEX1NIT1JUXzVfNV81XzFcIl0gPSAzMjgyMF0gPSBcIlVOU0lHTkVEX1NIT1JUXzVfNV81XzFcIjtcbiAgICBUWVBFU1tUWVBFU1tcIkZMT0FUXCJdID0gNTEyNl0gPSBcIkZMT0FUXCI7XG4gICAgVFlQRVNbVFlQRVNbXCJIQUxGX0ZMT0FUXCJdID0gMzYxOTNdID0gXCJIQUxGX0ZMT0FUXCI7XG59KShUWVBFUyB8fCAoVFlQRVMgPSB7fSkpO1xuLyoqXG4gKiBUaGUgc2NhbGUgbW9kZXMgdGhhdCBhcmUgc3VwcG9ydGVkIGJ5IHBpeGkuXG4gKlxuICogVGhlIHtAbGluayBQSVhJLnNldHRpbmdzLlNDQUxFX01PREV9IHNjYWxlIG1vZGUgYWZmZWN0cyB0aGUgZGVmYXVsdCBzY2FsaW5nIG1vZGUgb2YgZnV0dXJlIG9wZXJhdGlvbnMuXG4gKiBJdCBjYW4gYmUgcmUtYXNzaWduZWQgdG8gZWl0aGVyIExJTkVBUiBvciBORUFSRVNULCBkZXBlbmRpbmcgdXBvbiBzdWl0YWJpbGl0eS5cbiAqXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQG5hbWUgU0NBTEVfTU9ERVNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTElORUFSIFNtb290aCBzY2FsaW5nXG4gKiBAcHJvcGVydHkge251bWJlcn0gTkVBUkVTVCBQaXhlbGF0aW5nIHNjYWxpbmdcbiAqL1xudmFyIFNDQUxFX01PREVTO1xuKGZ1bmN0aW9uIChTQ0FMRV9NT0RFUykge1xuICAgIFNDQUxFX01PREVTW1NDQUxFX01PREVTW1wiTkVBUkVTVFwiXSA9IDBdID0gXCJORUFSRVNUXCI7XG4gICAgU0NBTEVfTU9ERVNbU0NBTEVfTU9ERVNbXCJMSU5FQVJcIl0gPSAxXSA9IFwiTElORUFSXCI7XG59KShTQ0FMRV9NT0RFUyB8fCAoU0NBTEVfTU9ERVMgPSB7fSkpO1xuLyoqXG4gKiBUaGUgd3JhcCBtb2RlcyB0aGF0IGFyZSBzdXBwb3J0ZWQgYnkgcGl4aS5cbiAqXG4gKiBUaGUge0BsaW5rIFBJWEkuc2V0dGluZ3MuV1JBUF9NT0RFfSB3cmFwIG1vZGUgYWZmZWN0cyB0aGUgZGVmYXVsdCB3cmFwcGluZyBtb2RlIG9mIGZ1dHVyZSBvcGVyYXRpb25zLlxuICogSXQgY2FuIGJlIHJlLWFzc2lnbmVkIHRvIGVpdGhlciBDTEFNUCBvciBSRVBFQVQsIGRlcGVuZGluZyB1cG9uIHN1aXRhYmlsaXR5LlxuICogSWYgdGhlIHRleHR1cmUgaXMgbm9uIHBvd2VyIG9mIHR3byB0aGVuIGNsYW1wIHdpbGwgYmUgdXNlZCByZWdhcmRsZXNzIGFzIFdlYkdMIGNhblxuICogb25seSB1c2UgUkVQRUFUIGlmIHRoZSB0ZXh0dXJlIGlzIHBvMi5cbiAqXG4gKiBUaGlzIHByb3BlcnR5IG9ubHkgYWZmZWN0cyBXZWJHTC5cbiAqXG4gKiBAbmFtZSBXUkFQX01PREVTXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQGVudW0ge251bWJlcn1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTEFNUCAtIFRoZSB0ZXh0dXJlcyB1dnMgYXJlIGNsYW1wZWRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBSRVBFQVQgLSBUaGUgdGV4dHVyZSB1dnMgdGlsZSBhbmQgcmVwZWF0XG4gKiBAcHJvcGVydHkge251bWJlcn0gTUlSUk9SRURfUkVQRUFUIC0gVGhlIHRleHR1cmUgdXZzIHRpbGUgYW5kIHJlcGVhdCB3aXRoIG1pcnJvcmluZ1xuICovXG52YXIgV1JBUF9NT0RFUztcbihmdW5jdGlvbiAoV1JBUF9NT0RFUykge1xuICAgIFdSQVBfTU9ERVNbV1JBUF9NT0RFU1tcIkNMQU1QXCJdID0gMzMwNzFdID0gXCJDTEFNUFwiO1xuICAgIFdSQVBfTU9ERVNbV1JBUF9NT0RFU1tcIlJFUEVBVFwiXSA9IDEwNDk3XSA9IFwiUkVQRUFUXCI7XG4gICAgV1JBUF9NT0RFU1tXUkFQX01PREVTW1wiTUlSUk9SRURfUkVQRUFUXCJdID0gMzM2NDhdID0gXCJNSVJST1JFRF9SRVBFQVRcIjtcbn0pKFdSQVBfTU9ERVMgfHwgKFdSQVBfTU9ERVMgPSB7fSkpO1xuLyoqXG4gKiBNaXBtYXAgZmlsdGVyaW5nIG1vZGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSBwaXhpLlxuICpcbiAqIFRoZSB7QGxpbmsgUElYSS5zZXR0aW5ncy5NSVBNQVBfVEVYVFVSRVN9IGFmZmVjdHMgZGVmYXVsdCB0ZXh0dXJlIGZpbHRlcmluZy5cbiAqIE1pcG1hcHMgYXJlIGdlbmVyYXRlZCBmb3IgYSBiYXNlVGV4dHVyZSBpZiBpdHMgYG1pcG1hcGAgZmllbGQgaXMgYE9OYCxcbiAqIG9yIGl0cyBgUE9XMmAgYW5kIHRleHR1cmUgZGltZW5zaW9ucyBhcmUgcG93ZXJzIG9mIDIuXG4gKiBEdWUgdG8gcGxhdGZvcm0gcmVzdHJpY3Rpb24sIGBPTmAgb3B0aW9uIHdpbGwgd29yayBsaWtlIGBQT1cyYCBmb3Igd2ViZ2wtMS5cbiAqXG4gKiBUaGlzIHByb3BlcnR5IG9ubHkgYWZmZWN0cyBXZWJHTC5cbiAqXG4gKiBAbmFtZSBNSVBNQVBfTU9ERVNcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAc3RhdGljXG4gKiBAZW51bSB7bnVtYmVyfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE9GRiAtIE5vIG1pcG1hcHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQT1cyIC0gR2VuZXJhdGUgbWlwbWFwcyBpZiB0ZXh0dXJlIGRpbWVuc2lvbnMgYXJlIHBvdzJcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBPTiAtIEFsd2F5cyBnZW5lcmF0ZSBtaXBtYXBzXG4gKi9cbnZhciBNSVBNQVBfTU9ERVM7XG4oZnVuY3Rpb24gKE1JUE1BUF9NT0RFUykge1xuICAgIE1JUE1BUF9NT0RFU1tNSVBNQVBfTU9ERVNbXCJPRkZcIl0gPSAwXSA9IFwiT0ZGXCI7XG4gICAgTUlQTUFQX01PREVTW01JUE1BUF9NT0RFU1tcIlBPVzJcIl0gPSAxXSA9IFwiUE9XMlwiO1xuICAgIE1JUE1BUF9NT0RFU1tNSVBNQVBfTU9ERVNbXCJPTlwiXSA9IDJdID0gXCJPTlwiO1xufSkoTUlQTUFQX01PREVTIHx8IChNSVBNQVBfTU9ERVMgPSB7fSkpO1xuLyoqXG4gKiBIb3cgdG8gdHJlYXQgdGV4dHVyZXMgd2l0aCBwcmVtdWx0aXBsaWVkIGFscGhhXG4gKlxuICogQG5hbWUgQUxQSEFfTU9ERVNcbiAqIEBtZW1iZXJvZiBQSVhJXG4gKiBAc3RhdGljXG4gKiBAZW51bSB7bnVtYmVyfVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE5PX1BSRU1VTFRJUExJRURfQUxQSEEgLSBTb3VyY2UgaXMgbm90IHByZW11bHRpcGxpZWQsIGxlYXZlIGl0IGxpa2UgdGhhdC5cbiAqICBPcHRpb24gZm9yIGNvbXByZXNzZWQgYW5kIGRhdGEgdGV4dHVyZXMgdGhhdCBhcmUgY3JlYXRlZCBmcm9tIHR5cGVkIGFycmF5cy5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQUkVNVUxUSVBMWV9PTl9VUExPQUQgLSBTb3VyY2UgaXMgbm90IHByZW11bHRpcGxpZWQsIHByZW11bHRpcGx5IG9uIHVwbG9hZC5cbiAqICBEZWZhdWx0IG9wdGlvbiwgdXNlZCBmb3IgYWxsIGxvYWRlZCBpbWFnZXMuXG4gKiBAcHJvcGVydHkge251bWJlcn0gUFJFTVVMVElQTElFRF9BTFBIQSAtIFNvdXJjZSBpcyBhbHJlYWR5IHByZW11bHRpcGxpZWRcbiAqICBFeGFtcGxlOiBzcGluZSBhdGxhc2VzIHdpdGggYF9wbWFgIHN1ZmZpeC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOUE0gLSBBbGlhcyBmb3IgTk9fUFJFTVVMVElQTElFRF9BTFBIQS5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBVTlBBQ0sgLSBEZWZhdWx0IG9wdGlvbiwgYWxpYXMgZm9yIFBSRU1VTFRJUExZX09OX1VQTE9BRC5cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBQTUEgLSBBbGlhcyBmb3IgUFJFTVVMVElQTElFRF9BTFBIQS5cbiAqL1xudmFyIEFMUEhBX01PREVTO1xuKGZ1bmN0aW9uIChBTFBIQV9NT0RFUykge1xuICAgIEFMUEhBX01PREVTW0FMUEhBX01PREVTW1wiTlBNXCJdID0gMF0gPSBcIk5QTVwiO1xuICAgIEFMUEhBX01PREVTW0FMUEhBX01PREVTW1wiVU5QQUNLXCJdID0gMV0gPSBcIlVOUEFDS1wiO1xuICAgIEFMUEhBX01PREVTW0FMUEhBX01PREVTW1wiUE1BXCJdID0gMl0gPSBcIlBNQVwiO1xuICAgIEFMUEhBX01PREVTW0FMUEhBX01PREVTW1wiTk9fUFJFTVVMVElQTElFRF9BTFBIQVwiXSA9IDBdID0gXCJOT19QUkVNVUxUSVBMSUVEX0FMUEhBXCI7XG4gICAgQUxQSEFfTU9ERVNbQUxQSEFfTU9ERVNbXCJQUkVNVUxUSVBMWV9PTl9VUExPQURcIl0gPSAxXSA9IFwiUFJFTVVMVElQTFlfT05fVVBMT0FEXCI7XG4gICAgQUxQSEFfTU9ERVNbQUxQSEFfTU9ERVNbXCJQUkVNVUxUSVBMWV9BTFBIQVwiXSA9IDJdID0gXCJQUkVNVUxUSVBMWV9BTFBIQVwiO1xufSkoQUxQSEFfTU9ERVMgfHwgKEFMUEhBX01PREVTID0ge30pKTtcbi8qKlxuICogSG93IHRvIGNsZWFyIHJlbmRlclRleHR1cmVzIGluIGZpbHRlclxuICpcbiAqIEBuYW1lIENMRUFSX01PREVTXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQGVudW0ge251bWJlcn1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBCTEVORCAtIFByZXNlcnZlIHRoZSBpbmZvcm1hdGlvbiBpbiB0aGUgdGV4dHVyZSwgYmxlbmQgYWJvdmVcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBDTEVBUiAtIE11c3QgdXNlIGBnbC5jbGVhcmAgb3BlcmF0aW9uXG4gKiBAcHJvcGVydHkge251bWJlcn0gQkxJVCAtIENsZWFyIG9yIGJsaXQgaXQsIGRlcGVuZHMgb24gZGV2aWNlIGFuZCBsZXZlbCBvZiBwYXJhbm9pYVxuICogQHByb3BlcnR5IHtudW1iZXJ9IE5PIC0gQWxpYXMgZm9yIEJMRU5ELCBzYW1lIGFzIGBmYWxzZWAgaW4gZWFybGllciB2ZXJzaW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IFlFUyAtIEFsaWFzIGZvciBDTEVBUiwgc2FtZSBhcyBgdHJ1ZWAgaW4gZWFybGllciB2ZXJzaW9uc1xuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVVE8gLSBBbGlhcyBmb3IgQkxJVFxuICovXG52YXIgQ0xFQVJfTU9ERVM7XG4oZnVuY3Rpb24gKENMRUFSX01PREVTKSB7XG4gICAgQ0xFQVJfTU9ERVNbQ0xFQVJfTU9ERVNbXCJOT1wiXSA9IDBdID0gXCJOT1wiO1xuICAgIENMRUFSX01PREVTW0NMRUFSX01PREVTW1wiWUVTXCJdID0gMV0gPSBcIllFU1wiO1xuICAgIENMRUFSX01PREVTW0NMRUFSX01PREVTW1wiQVVUT1wiXSA9IDJdID0gXCJBVVRPXCI7XG4gICAgQ0xFQVJfTU9ERVNbQ0xFQVJfTU9ERVNbXCJCTEVORFwiXSA9IDBdID0gXCJCTEVORFwiO1xuICAgIENMRUFSX01PREVTW0NMRUFSX01PREVTW1wiQ0xFQVJcIl0gPSAxXSA9IFwiQ0xFQVJcIjtcbiAgICBDTEVBUl9NT0RFU1tDTEVBUl9NT0RFU1tcIkJMSVRcIl0gPSAyXSA9IFwiQkxJVFwiO1xufSkoQ0xFQVJfTU9ERVMgfHwgKENMRUFSX01PREVTID0ge30pKTtcbi8qKlxuICogVGhlIGdjIG1vZGVzIHRoYXQgYXJlIHN1cHBvcnRlZCBieSBwaXhpLlxuICpcbiAqIFRoZSB7QGxpbmsgUElYSS5zZXR0aW5ncy5HQ19NT0RFfSBHYXJiYWdlIENvbGxlY3Rpb24gbW9kZSBmb3IgUGl4aUpTIHRleHR1cmVzIGlzIEFVVE9cbiAqIElmIHNldCB0byBHQ19NT0RFLCB0aGUgcmVuZGVyZXIgd2lsbCBvY2Nhc2lvbmFsbHkgY2hlY2sgdGV4dHVyZXMgdXNhZ2UuIElmIHRoZXkgYXJlIG5vdFxuICogdXNlZCBmb3IgYSBzcGVjaWZpZWQgcGVyaW9kIG9mIHRpbWUgdGhleSB3aWxsIGJlIHJlbW92ZWQgZnJvbSB0aGUgR1BVLiBUaGV5IHdpbGwgb2YgY291cnNlXG4gKiBiZSB1cGxvYWRlZCBhZ2FpbiB3aGVuIHRoZXkgYXJlIHJlcXVpcmVkLiBUaGlzIGlzIGEgc2lsZW50IGJlaGluZCB0aGUgc2NlbmVzIHByb2Nlc3MgdGhhdFxuICogc2hvdWxkIGVuc3VyZSB0aGF0IHRoZSBHUFUgZG9lcyBub3QgIGdldCBmaWxsZWQgdXAuXG4gKlxuICogSGFuZHkgZm9yIG1vYmlsZSBkZXZpY2VzIVxuICogVGhpcyBwcm9wZXJ0eSBvbmx5IGFmZmVjdHMgV2ViR0wuXG4gKlxuICogQG5hbWUgR0NfTU9ERVNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHByb3BlcnR5IHtudW1iZXJ9IEFVVE8gLSBHYXJiYWdlIGNvbGxlY3Rpb24gd2lsbCBoYXBwZW4gcGVyaW9kaWNhbGx5IGF1dG9tYXRpY2FsbHlcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNQU5VQUwgLSBHYXJiYWdlIGNvbGxlY3Rpb24gd2lsbCBuZWVkIHRvIGJlIGNhbGxlZCBtYW51YWxseVxuICovXG52YXIgR0NfTU9ERVM7XG4oZnVuY3Rpb24gKEdDX01PREVTKSB7XG4gICAgR0NfTU9ERVNbR0NfTU9ERVNbXCJBVVRPXCJdID0gMF0gPSBcIkFVVE9cIjtcbiAgICBHQ19NT0RFU1tHQ19NT0RFU1tcIk1BTlVBTFwiXSA9IDFdID0gXCJNQU5VQUxcIjtcbn0pKEdDX01PREVTIHx8IChHQ19NT0RFUyA9IHt9KSk7XG4vKipcbiAqIENvbnN0YW50cyB0aGF0IHNwZWNpZnkgZmxvYXQgcHJlY2lzaW9uIGluIHNoYWRlcnMuXG4gKlxuICogQG5hbWUgUFJFQ0lTSU9OXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQGNvbnN0YW50XG4gKiBAc3RhdGljXG4gKiBAZW51bSB7c3RyaW5nfVxuICogQHByb3BlcnR5IHtzdHJpbmd9IExPVz0nbG93cCdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBNRURJVU09J21lZGl1bXAnXG4gKiBAcHJvcGVydHkge3N0cmluZ30gSElHSD0naGlnaHAnXG4gKi9cbnZhciBQUkVDSVNJT047XG4oZnVuY3Rpb24gKFBSRUNJU0lPTikge1xuICAgIFBSRUNJU0lPTltcIkxPV1wiXSA9IFwibG93cFwiO1xuICAgIFBSRUNJU0lPTltcIk1FRElVTVwiXSA9IFwibWVkaXVtcFwiO1xuICAgIFBSRUNJU0lPTltcIkhJR0hcIl0gPSBcImhpZ2hwXCI7XG59KShQUkVDSVNJT04gfHwgKFBSRUNJU0lPTiA9IHt9KSk7XG4vKipcbiAqIENvbnN0YW50cyBmb3IgbWFzayBpbXBsZW1lbnRhdGlvbnMuXG4gKiBXZSB1c2UgYHR5cGVgIHN1ZmZpeCBiZWNhdXNlIGl0IGxlYWRzIHRvIHZlcnkgZGlmZmVyZW50IGJlaGF2aW91cnNcbiAqXG4gKiBAbmFtZSBNQVNLX1RZUEVTXG4gKiBAbWVtYmVyb2YgUElYSVxuICogQHN0YXRpY1xuICogQGVudW0ge251bWJlcn1cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBOT05FIC0gTWFzayBpcyBpZ25vcmVkXG4gKiBAcHJvcGVydHkge251bWJlcn0gU0NJU1NPUiAtIFNjaXNzb3IgbWFzaywgcmVjdGFuZ2xlIG9uIHNjcmVlbiwgY2hlYXBcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTVEVOQ0lMIC0gU3RlbmNpbCBtYXNrLCAxLWJpdCwgbWVkaXVtLCB3b3JrcyBvbmx5IGlmIHJlbmRlcmVyIHN1cHBvcnRzIHN0ZW5jaWxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBTUFJJVEUgLSBNYXNrIHRoYXQgdXNlcyBTcHJpdGVNYXNrRmlsdGVyLCB1c2VzIHRlbXBvcmFyeSBSZW5kZXJUZXh0dXJlXG4gKi9cbnZhciBNQVNLX1RZUEVTO1xuKGZ1bmN0aW9uIChNQVNLX1RZUEVTKSB7XG4gICAgTUFTS19UWVBFU1tNQVNLX1RZUEVTW1wiTk9ORVwiXSA9IDBdID0gXCJOT05FXCI7XG4gICAgTUFTS19UWVBFU1tNQVNLX1RZUEVTW1wiU0NJU1NPUlwiXSA9IDFdID0gXCJTQ0lTU09SXCI7XG4gICAgTUFTS19UWVBFU1tNQVNLX1RZUEVTW1wiU1RFTkNJTFwiXSA9IDJdID0gXCJTVEVOQ0lMXCI7XG4gICAgTUFTS19UWVBFU1tNQVNLX1RZUEVTW1wiU1BSSVRFXCJdID0gM10gPSBcIlNQUklURVwiO1xufSkoTUFTS19UWVBFUyB8fCAoTUFTS19UWVBFUyA9IHt9KSk7XG4vKipcbiAqIENvbnN0YW50cyBmb3IgbXVsdGktc2FtcGxpbmcgYW50aWFsaWFzaW5nLlxuICpcbiAqIEBzZWUgUElYSS5GcmFtZWJ1ZmZlciNtdWx0aXNhbXBsZVxuICpcbiAqIEBuYW1lIE1TQUFfUVVBTElUWVxuICogQG1lbWJlcm9mIFBJWElcbiAqIEBzdGF0aWNcbiAqIEBlbnVtIHtudW1iZXJ9XG4gKiBAcHJvcGVydHkge251bWJlcn0gTk9ORSAtIE5vIG11bHRpc2FtcGxpbmcgZm9yIHRoaXMgcmVuZGVyVGV4dHVyZVxuICogQHByb3BlcnR5IHtudW1iZXJ9IExPVyAtIFRyeSAyIHNhbXBsZXNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBNRURJVU0gLSBUcnkgNCBzYW1wbGVzXG4gKiBAcHJvcGVydHkge251bWJlcn0gSElHSCAtIFRyeSA4IHNhbXBsZXNcbiAqL1xudmFyIE1TQUFfUVVBTElUWTtcbihmdW5jdGlvbiAoTVNBQV9RVUFMSVRZKSB7XG4gICAgTVNBQV9RVUFMSVRZW01TQUFfUVVBTElUWVtcIk5PTkVcIl0gPSAwXSA9IFwiTk9ORVwiO1xuICAgIE1TQUFfUVVBTElUWVtNU0FBX1FVQUxJVFlbXCJMT1dcIl0gPSAyXSA9IFwiTE9XXCI7XG4gICAgTVNBQV9RVUFMSVRZW01TQUFfUVVBTElUWVtcIk1FRElVTVwiXSA9IDRdID0gXCJNRURJVU1cIjtcbiAgICBNU0FBX1FVQUxJVFlbTVNBQV9RVUFMSVRZW1wiSElHSFwiXSA9IDhdID0gXCJISUdIXCI7XG59KShNU0FBX1FVQUxJVFkgfHwgKE1TQUFfUVVBTElUWSA9IHt9KSk7XG5cbmV4cG9ydCB7IEFMUEhBX01PREVTLCBCTEVORF9NT0RFUywgQlVGRkVSX0JJVFMsIENMRUFSX01PREVTLCBEUkFXX01PREVTLCBFTlYsIEZPUk1BVFMsIEdDX01PREVTLCBNQVNLX1RZUEVTLCBNSVBNQVBfTU9ERVMsIE1TQUFfUVVBTElUWSwgUFJFQ0lTSU9OLCBSRU5ERVJFUl9UWVBFLCBTQ0FMRV9NT0RFUywgVEFSR0VUUywgVFlQRVMsIFdSQVBfTU9ERVMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5lcy5qcy5tYXBcbiJdLCJuYW1lcyI6WyJFTlYiLCJSRU5ERVJFUl9UWVBFIiwiQlVGRkVSX0JJVFMiLCJCTEVORF9NT0RFUyIsIkRSQVdfTU9ERVMiLCJGT1JNQVRTIiwiVEFSR0VUUyIsIlRZUEVTIiwiU0NBTEVfTU9ERVMiLCJXUkFQX01PREVTIiwiTUlQTUFQX01PREVTIiwiQUxQSEFfTU9ERVMiLCJDTEVBUl9NT0RFUyIsIkdDX01PREVTIiwiUFJFQ0lTSU9OIiwiTUFTS19UWVBFUyIsIk1TQUFfUVVBTElUWSJdLCJzb3VyY2VSb290IjoiIn0=