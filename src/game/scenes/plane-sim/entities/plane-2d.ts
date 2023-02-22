import { drawable2d, Drawable2d, Pixi } from "g3e-canvas-2d";
import { DeathType, GameObject, Util, Vector3 } from "gear3engine";
import PlaneSimManager from "../plane-sim-manager";

interface Plane2d extends Drawable2d{}

const size = 20;
const boundsR = 700;

@drawable2d
class Plane2d extends GameObject{

	mode: "play"|"flee" = "play";
	targetX = 0;
	targetY = 0;
	xs = 0;
	ys = 0;
	r = 0;
	sm: PlaneSimManager;
	opacity: number = 0;

	type: "sputnik"|"ufo"|"rocket"|"plane";

	constructor(){
		super();

		let gfx = new Pixi.Graphics();
		this.displayObject = gfx;

		let rc = (1 << Math.floor(Math.random() * 2));
		if(rc == 2) rc = 1;
		let r = Math.round(Math.max(Math.floor(Math.random() * 256), (rc & 0b001) * 255) * 0.75);
		let g = Math.round(Math.max(Math.floor(Math.random() * 256), ((rc & 0b010)>>1) * 255) * 0.75);
		let b = Math.round(Math.max(Math.floor(Math.random() * 256), ((rc & 0b100)>>2) * 255) * 0.75);

		let c = r*256*256+g*256+b;

		if(!this.type) this.type = "plane";

		switch(this.type){
			case "sputnik":{ 
				gfx.lineStyle(1, 0x999999);
				gfx.moveTo(0*size,0*size,);
				gfx.lineTo(-0.05*size, 1.4*size);

				gfx.lineStyle(0);
				gfx.beginFill(0xAAAAAA);
				gfx.drawCircle(0,0,0.5*size);
				gfx.endFill();
				
				gfx.lineStyle(1, 0xBBBBBB);

				gfx.moveTo(0*size,0*size);
				gfx.lineTo(0.05*size, 1.6*size);

				gfx.moveTo(0.5*size,0*size);
				gfx.lineTo(0.7*size, 1.3*size);

				gfx.moveTo(-0.5*size,0*size);
				gfx.lineTo(-0.7*size, 1.3*size);
				gfx.lineStyle(0);
				break; 
			}
			case "ufo":{ 
				gfx.beginFill(0x4444FF);
				gfx.arc(0,0,size*0.75,Math.PI / 2,3*Math.PI/2);
				gfx.endFill();

				gfx.lineStyle(0);
				gfx.beginFill(c)
				gfx.drawEllipse(0,0,size/3, size);

				break; 
			}
			case "rocket":{ 
				// Tail fins.
				gfx.beginFill(c);
				gfx.moveTo(0, size/2);
				gfx.arc(0, size/2, size/3, 0, Math.PI, true);
				gfx.endFill();

				// Fuselage.
				gfx.beginFill(0xEEEEEE);
				gfx.drawRect(-size/6,-size/2,size/3, size);
				gfx.endFill();
				
				// Nossle.
				gfx.beginFill(c);
				gfx.moveTo(0, -size/2);
				gfx.lineTo(size/6, -size/2);
				gfx.lineTo(0, -size/2 - size/3);
				gfx.lineTo(-size/6, -size/2);
				gfx.endFill();

				break; 
			}
			case "plane":{ 
				gfx.beginFill(c);
				gfx.moveTo(0, -size/2);
				gfx.lineTo(0.866*size/2, 0.5*size/2);
				gfx.lineTo(-0.866*size/2, 0.5*size/2);
				gfx.endFill();
				break; 
			}
		}


		let startR = Math.random() * Math.PI * 2;

		this.drawPosition = new Vector3(boundsR * Math.cos(startR), boundsR * Math.sin(startR), 0);

		this.setNewTarget();
	}

	setNewTarget(circleMode = false){
		if(circleMode){
			const cycleD = 100;

			let d = Math.sqrt(this.targetX * this.targetX + this.targetY * this.targetY);
			let orbit = Math.max(1, Math.round((d / cycleD)));
			let cw = !!(orbit & 1);
			// console.log(cw);
			let r = Math.atan2(this.targetY, this.targetX);// - Math.PI / 2;
			let r2 = r + (cw ? 1 : -1) * Math.PI / 12;
			
			this.targetX = orbit * cycleD * Math.cos(r2);
			this.targetY = orbit * cycleD * Math.sin(r2);
		}
		else{
			this.targetX = (Math.random() * 2 - 1) * boundsR;
			this.targetY = (Math.random() * 2 - 1) * boundsR;
		}
		//console.log(this.targetX, this.targetY);
	}

	drawUpdate(dt: number, time: number, frames: number): void{
		if(this.mode == "play"){
			let dx = this.drawPosition.x - this.targetX;
			let dy = this.drawPosition.y - this.targetY;
			// console.log(Math.sqrt(dx*dx+dy*dy));
			if(dx*dx+dy*dy < 1000 || Math.random() < Util.probPerDt(0.3, dt)){
				// console.log("Switch!");
				this.setNewTarget(Math.random() < .99);
			}
			this.opacity = Math.min(1, this.opacity + dt);
			this.displayObject.alpha = this.opacity;
		}

		// accelerate towards target.
		let uax = this.targetX - this.drawPosition.x;
		let uay = this.targetY - this.drawPosition.y;
		let mA = Math.sqrt(uax * uax + uay * uay);
		uax /= mA;
		uay /= mA;

		this.xs += 10 * uax * dt;
		this.ys += 10 * uay * dt;
		let aRate = Util.ratePerDt(0.05, dt);
		this.xs *= aRate;
		this.ys *= aRate;

		this.displayObject.rotation = Math.atan2(this.ys, this.xs) + Math.PI / 2;
		// console.log(dt);
		
		this.drawPosition.addWithScalars(this.xs, this.ys, 0);

		// console.log(dt);
	}

	fixedUpdate(dt: number, time: number) {
		if(this.drawPosition.mag2 > boundsR * boundsR * 4){
			this.gi.destroyObject(this, DeathType.Expired);
			delete this.sm.all2DPlanes[this.id];
		}
	}
}


export default Plane2d;