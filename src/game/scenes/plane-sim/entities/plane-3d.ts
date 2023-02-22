import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject, Util, Vector3 } from "gear3engine";
import GameManager from "../../../game-manager";
import PlaneSimManager from "../plane-sim-manager";

interface Plane3d extends Drawable3d{}

const boundsR = 20;
const scale = 0.8;

@drawable3d
class Plane3d extends GameObject{

	mode: "play"|"flee" = "play";
	targetX = 0;
	targetY = 0;
	targetZ = 0;
	xs = 0;
	ys = 0;
	zs = 0;
	r = 0;
	sm: PlaneSimManager;
	opacity: number = 0;
	xGroup: Three.Group;
	yGroup: Three.Group;
	mainGroup: Three.Group;
	circleScale = 0.7 + Math.random() * 0.6;
	material: Three.MeshPhongMaterial;
	private decayRate = (0.5 + Math.random());
	// cone: Three.Mesh;

	constructor(){
		super();
		
		let rc = (1 << Math.floor(Math.random() * 2));
		if(rc == 2) rc = 1;
		let r = Math.round(Math.max(Math.floor(Math.random() * 256), (rc & 0b001) * 255) * 0.9);
		let g = Math.round(Math.max(Math.floor(Math.random() * 256), ((rc & 0b010)>>1) * 255) * 0.9);
		let b = Math.round(Math.max(Math.floor(Math.random() * 256), ((rc & 0b100)>>2) * 255) * 0.9);

		let geometry = new Three.ConeGeometry( 1*scale, 2*scale, 3 );
		// let material = new Three.MeshBasicMaterial( {
		this.material = new Three.MeshPhongMaterial( {
			color: r*256*256+g*256+b,
			wireframe: Math.random() < 0.05,
			wireframeLinewidth: 20,
			transparent: true
		} );

		// const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
		let cone = new Three.Mesh( geometry, this.material );
		// cone.rotation.order = "XZY";
		
		this.xGroup = new Three.Group();
		this.yGroup = new Three.Group();
		this.mainGroup = new Three.Group();

		this.yGroup.add(cone);
		this.xGroup.add(this.yGroup);
		this.mainGroup.add(this.xGroup);

		this.addDisplayObject(this.mainGroup);

		// { // DEBUGGING
		// 	let xPlaneG = new Three.PlaneGeometry( 2*scale,2*scale );
		// 	let yPlaneG = new Three.PlaneGeometry( 2*scale,2*scale );
		// 	let zPlaneG = new Three.PlaneGeometry( 2*scale,2*scale );
		// 	let redWireframeMaterial = new Three.MeshBasicMaterial( { color: 0xFF0000, wireframe: true, wireframeLinewidth: 20 } );
		// 	let greenWireframeMaterial = new Three.MeshBasicMaterial( { color: 0x00FF00, wireframe: true, wireframeLinewidth: 20 } );
		// 	let blueWireframeMaterial = new Three.MeshBasicMaterial( { color: 0x0000FF, wireframe: true, wireframeLinewidth: 20 } );
		// 	let xPlane = new Three.Mesh( xPlaneG, redWireframeMaterial );
		// 	let yPlane = new Three.Mesh( yPlaneG, greenWireframeMaterial );
		// 	let zPlane = new Three.Mesh( zPlaneG, blueWireframeMaterial );
		// 	xPlane.rotation.z = xPlane.rotation.y = Math.PI/2;
		// 	yPlane.rotation.x = yPlane.rotation.z = Math.PI/2;
		// 	zPlane.rotation.z = -Math.PI/2;
		// 	this.yGroup.add(xPlane);
		// 	this.yGroup.add(yPlane);
		// 	this.yGroup.add(zPlane);
		// }

		//cone.position.set(-30,0,0);
		this.yGroup.rotation.y = Math.random() * 2 * Math.PI;

		let startR = Math.random() * Math.PI * 2;

		// this.drawPosition = new Vector3(boundsR * Math.cos(startR), boundsR * Math.sin(startR), 0);

		this.setNewTarget();
	}

	setNewTarget(circleMode = false){
		if(circleMode){
			const cycleD = 2;

			// let orbit = Math.max(1, Math.round((d / cycleD)));
			// let cw = !!(orbit & 1);
			// console.log(cw);
			
			if(this.targetY < - boundsR){
				let dC = Math.sqrt(this.targetX * this.targetX + this.targetZ * this.targetZ);
				if(dC > boundsR / 3){
					this.targetX = -0.5 + Math.random();
					this.targetZ = -0.5 + Math.random();
				}
				else{
					this.targetY = boundsR
				}
			}
			else{
				let r = Math.atan2(this.targetZ, this.targetX);// - Math.PI / 2;
				let r2 = r + Math.PI / 12;
				this.targetX = this.circleScale * boundsR * Math.cos(r2) / 2;
				this.targetZ = this.circleScale * boundsR * Math.sin(r2) / 2;
				this.targetY = this.targetY - 0.25;
			}
		}
		else{
			this.targetX = (Math.random() * 2 - 1) * boundsR * 0.7;
			this.targetY = (Math.random() * 2 - 1) * boundsR;
			this.targetZ = (Math.random() * 2 - 1) * boundsR * 0.7;
		}
		//console.log(this.targetX, this.targetY);
	}

	drawUpdate(dt: number, time: number, frames: number): void{
		if(this.mode == "play"){
			let dx = this.mainGroup.position.x - this.targetX;
			let dy = this.mainGroup.position.y - this.targetY;
			let dz = this.mainGroup.position.z - this.targetZ;
			// console.log(Math.sqrt(dx*dx+dy*dy));
			if(dx*dx+dy*dy+dz*dz < 1       ){
				// || Math.random() < Util.probPerDt(0.3, dt)){
				// console.log("Switch!");
				// this.setNewTarget(Math.random() < .999);
				this.setNewTarget(true);
			}
			this.opacity = Math.min(1, this.opacity + dt);
			// this.cone.alpha = this.opacity;
		}

		// accelerate towards target.
		let uax = this.targetX - this.mainGroup.position.x;
		let uay = this.targetY - this.mainGroup.position.y;
		let uaz = this.targetZ - this.mainGroup.position.z;
		let mA = Math.sqrt(uax * uax + uay * uay + uaz * uaz);
		uax /= mA;
		uay /= mA;
		uaz /= mA;

		this.xs += 0.2 * uax * dt;
		this.ys += 0.2 * uay * dt;
		this.zs += 0.2 * uaz * dt;
		let aRate = Util.ratePerDt(0.05, dt);
		this.xs *= aRate;
		this.ys *= aRate;
		this.zs *= aRate;
		let speed = Math.sqrt(this.xs * this.xs + this.ys * this.ys + this.zs * this.zs);

		// this.displayObject.lookAt(this.displayObject.position.x + this.xs, this.displayObject.position.y + this.ys, this.displayObject.position.z + this.zs);
		// this.displayObject.lookAt(0, 0, 0);
		// this.displayObject.rotation.z = Math.PI + Math.atan2(this.ys, this.xs) + Math.PI / 2;
		// this.displayObject.rotation.x = Math.PI + Math.atan2(this.zs, this.ys) + Math.PI / 2;
		// this.displayObject.rotation.setFromVector3(new Three.Vector3(this.xs, this.ys, this.zs));
		// this.displayObject.rotation.set(new Three.Vector3(this.xs, this.ys, this.zs));
		//this.displayObject.lookAt(this.xs, this.ys, this.zs);
		// console.log(dt);
		this.mainGroup.rotation.z = Math.PI + Math.atan2(this.ys, this.xs) + Math.PI / 2;
		this.xGroup.rotation.x = Math.asin(this.zs / speed);
		// this.xGroup.rotation.x = Math.asin(1);
		this.yGroup.rotation.y += dt * 2;
		
		this.mainGroup.position.add(new Three.Vector3(this.xs, this.ys, this.zs));

		// console.log(dt);
		if(this.mode == "flee"){
			this.material.opacity = Math.max(0, this.material.opacity - (dt * this.decayRate));
		}
	}

	fixedUpdate(dt: number, time: number) {
		if(this.mainGroup.position.lengthSq() > boundsR * boundsR * 8 || this.material.opacity == 0){
			this.gi.destroyObject(this, DeathType.Expired);
			delete this.sm.all3DPlanes[this.id];
		}
	}
}


export default Plane3d;