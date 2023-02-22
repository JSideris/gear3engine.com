import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject } from "gear3engine";


interface Globe extends Drawable3d{}

@drawable3d
class Globe extends GameObject{
	mainGroup: Three.Group;
	// hex: Three.CylinderGeometry;
	hex: Three.CapsuleGeometry;
	snowMaterial: Three.MeshToonMaterial;
	hideMode: boolean;
	constructor(){
		super();

		let waterMaterial = new Three.MeshToonMaterial({color: 0x7777FF})
		this.snowMaterial = new Three.MeshToonMaterial({color: 0xDDDDFF})
		
		this.hex = new Three.CapsuleGeometry(1/12,0.52, 6, 24);
		//this.hex = new Three.CylinderGeometry(1/12,1/12+0.05,0.52, 6);
		let sphere = new Three.SphereGeometry(0.5, 24, 24);
		
		this.mainGroup = new Three.Group();
		this.mainGroup.scale.set(0.0001,0.0001,0.0001);
		this.mainGroup.rotation.z = 0.05;
		this.addDisplayObject(this.mainGroup);
		
		let globe = new Three.Mesh(sphere, waterMaterial);
		globe.rotation.z = 0.05;
		this.mainGroup.add(globe);
		
		let capN = new Three.Mesh(this.hex, this.snowMaterial);
		capN.position.y = 0.25;
		this.mainGroup.add(capN);
		let capS = new Three.Mesh(this.hex, this.snowMaterial);
		capS.rotation.z = Math.PI;
		capS.position.y = -0.25;
		this.mainGroup.add(capS);
		
		// this.createLand(1, 0);
		// this.createLand(1, 1);

		// this.createLand(2, 0.5);

		// this.createLand(3, 0);
		// this.createLand(3, 1);

		// this.createLand(4, 0.5);

		// this.createLand(1, 3);
		// this.createLand(1, 4);
		// this.createLand(1, 5);
		
		for(let i = 0; i < 25; i++){
			this.createLand(0.5 + Math.random() * 5, Math.random() * 12);
		}
	}

	createLand(long: number, lat: number){
		let material = (long < 1.25 || long > 4.75) ? this.snowMaterial : Math.random() < 0.1 ? new Three.MeshToonMaterial({color: 0x888833}) : new Three.MeshToonMaterial({color: 0x55*256*256 + Math.round(0x88 + 0x77 * Math.random())*256 + 0x55});
		let plot = new Three.Mesh(this.hex, material);

		let scale = 1 + Math.random() * 0.5;
		plot.scale.x = scale;
		plot.scale.z = scale;

		plot.position.y = 0.21 + Math.random() * 0.15;
		let latRotGroup = new Three.Group();
		let longRotGroup = new Three.Group();
		latRotGroup.add(longRotGroup);
		longRotGroup.add(plot);

		plot.rotation.y = Math.random() * 2 * Math.PI;//-lat * Math.PI / 6;
		longRotGroup.rotation.x = long * Math.PI / 6;
		latRotGroup.rotation.y = lat * Math.PI / 6;

		this.mainGroup.add(latRotGroup);
	}

	drawUpdate(dt: number){
		this.mainGroup.rotation.y += dt*0.7;
		let newScale = this.mainGroup.scale.x;
		if(this.hideMode){
			newScale -= dt;
			if(newScale < 0) newScale = 0.0001;
		}
		else{
			newScale += dt;
			if(newScale > 1){
				newScale = 1;
			}
		}
		this.mainGroup.scale.x = newScale;
		this.mainGroup.scale.y = newScale;
		this.mainGroup.scale.z = newScale;
	}

	fixedUpdate(){
		if(this.hideMode && this.mainGroup.scale.x == 0.0001){
			this.gi.destroyObject(this, DeathType.Expired);
		}
	}

	show() {
		this.hideMode = false;	
	}
	hide() {
		this.hideMode = true;	
	}
}

export default Globe;