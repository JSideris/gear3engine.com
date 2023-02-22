import SceneManager from "../scene-manager";
import Globe from "./entities/globe";
import Moon from "./entities/moon";
import Plane2d from "./entities/plane-2d";
import Plane3d from "./entities/plane-3d";

export default class PlaneSimManager extends SceneManager{
	all2DPlanes: {[key: number]: Plane2d} = {};
	all3DPlanes: {[key: number]: Plane3d} = {};
	globe: Globe;
	moon: Moon;
	
	enter() {
		let planeCount = Object.keys(this.all2DPlanes).length;
		for(let i = planeCount; i < 12; i++){
			let plane = this.gi.make(Plane2d, p=>{
				p.sm = this;
				p.type = ["sputnik","rocket","plane","ufo"][i % 4] as "sputnik"|"ufo"|"rocket"|"plane";
			});
			this.all2DPlanes[plane.id] = plane;
		}

		// 3D
		// planeCount = Object.keys(this.all3DPlanes).length;
		// for(let i = planeCount; i < 3; i++){
		// 	let plane = this.gi.make(Plane3d, p =>{
		// 		p.sm = this
		// 	});
		// 	this.all3DPlanes[plane.id] = plane;
		// }

		if(!this.globe || !this.globe.alive){
			this.globe = this.gi.make(Globe);
			this.moon = this.gi.make(Moon);
		}
		else{
			this.globe.show();
			this.moon.show();
		}
	}
	leave() {
		for(let p in this.all2DPlanes){
			let P = this.all2DPlanes[p];
			P.mode = "flee";
			let uD = P.drawPosition.mag;
			P.targetX = (P.drawPosition.x / uD) * 10000;
			P.targetY = (P.drawPosition.y / uD) * 10000;
		}
		for(let p in this.all3DPlanes){
			let P = this.all3DPlanes[p];
			P.mode = "flee";
			let uD = P.mainGroup.position.lengthSq();
			P.targetX = (P.mainGroup.position.x / uD) * 10000;
			P.targetY = (P.mainGroup.position.y / uD) * 10000;
			P.targetZ = (P.mainGroup.position.z / uD) * 10000;
		}
		this.globe.hide();
		this.moon.hide();
		this.all2DPlanes = {};
		this.all3DPlanes = {};
	}
}