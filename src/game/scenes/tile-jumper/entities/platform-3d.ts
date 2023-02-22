import { Three, drawable3d, Drawable3d } from "g3e-canvas-3d";
import { DeathType, GameObject, Util, Vector3 } from "gear3engine";


interface Platform3D extends Drawable3d{}

@drawable3d
class Platform3D extends GameObject{

	/** Indicates the x position of the tile. */
	x: number;
	/** Indicates the z position of the tile. */
	z: number;

	private xStartVariance = Util.normal() * 10;
	private yStartVariance = -10 + Util.normal() * 5;
	private zStartVariance = -30 + Util.normal() * 10;
	private vanquishMode: boolean = false;
	private dropSpeed: number = 0.03 + Math.random() * 0.04;
	private mat: Three.MeshToonMaterial;
	private rateBase = 1.5 + Math.random();
	private fastMode: boolean;
	box: Three.Mesh;

	red = 0x33;
	green = 0x22;
	blue = 0x88;

	targetRed = 0x33;
	targetGreen = 0x22;
	targetBlue = 0x88 + Math.round(Math.random() * 100);

	color: "white"|"black";

	constructor(){
		super();

		this.targetRed = this.red = this.color == "white" ? 255 : 15;
		this.targetGreen = this.green = this.color == "white" ? 255 : 10;
		this.targetBlue = this.blue = this.color == "white" ? 255 : 10;

		const geometry = new Three.BoxGeometry( 1, 0.5, 1 );
		const material = new Three.MeshToonMaterial( { color: this.red*256*256 + this.green*256 + this.blue, transparent: true } );
		this.mat = material;
		this.mat.opacity = 0;
		const box = new Three.Mesh( geometry, material );
		this.box = box;
		this.addDisplayObject(this.box);

		// this.displayObject.position.x = this.z??0;
		// this.displayObject.position.z = this.z??0;
		this.box.position.set(this.xStartVariance + this.x, -6 + this.yStartVariance, this.zStartVariance + this.z);
	}

	drawUpdate(dt: number){
		this.box.position.x -= this.xStartVariance;
		this.box.position.y -= this.yStartVariance;
		this.box.position.z -= this.zStartVariance;

		if(this.vanquishMode) {
			this.box.position.y -= dt * this.dropSpeed - (this.box.position.y + 6) * 0.01;
		}
		let rate = Math.pow(this.rateBase, -dt);
		this.mat.opacity = 1 - (1-this.mat.opacity) * rate;
		this.xStartVariance *= rate;
		this.yStartVariance *= rate;
		this.zStartVariance *= rate;
		this.box.position.x += this.xStartVariance;
		this.box.position.y += this.yStartVariance;
		this.box.position.z += this.zStartVariance;

		// Color:

		if(this.red < this.targetRed) this.red+=Math.min(dt*100, 1);
		if(this.red > this.targetRed) this.red-=Math.min(dt*100, 1);
		if(this.green < this.targetGreen) this.green+=Math.min(dt*100, 1);
		if(this.green > this.targetGreen) this.green-=Math.min(dt*100, 1);
		if(this.blue < this.targetBlue) this.blue+=Math.min(dt*100, 1);
		if(this.blue > this.targetBlue) this.blue-=Math.min(dt*100, 1);

		if(Math.random() < 0.001*dt/0.016){
			let newShade = this.color == "white" 
				? Math.round(0xAA + Math.random() * 0x55) 
				: Math.round(Math.random() * 0x22);
			this.targetRed = this.targetGreen = this.targetBlue = newShade;
		}

		this.mat.color.setHex(Math.floor(this.red)*256*256 + Math.floor(this.green)*256 + Math.floor(this.blue));
	}

	fixedUpdate(){
		if(this.vanquishMode && this.box.position.y < -50){
			this.gi.destroyObject(this, DeathType.Expired);
		}
	}

	vanquish(fastMode: boolean = false){
		this.vanquishMode = true;
		if(fastMode) this.dropSpeed = this.dropSpeed * 5 + 0.1;
	}
}

export default Platform3D;