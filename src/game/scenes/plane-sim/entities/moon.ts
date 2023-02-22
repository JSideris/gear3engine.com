import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject } from "gear3engine";


interface Moon extends Drawable3d{}

@drawable3d
class Moon extends GameObject{
	mainGroup: Three.Group;
	moonAxisGroup: Three.Group;
	// hex: Three.CylinderGeometry;
	hex: Three.CapsuleGeometry;
	hideMode: boolean;
	revolutionGroup: Three.Group;
	constructor(){
		super();

		let moonMaterial = new Three.MeshToonMaterial({color: 0x555555})

		this.hex = new Three.CapsuleGeometry(1/12,0.52, 6, 24);
		//this.hex = new Three.CylinderGeometry(1/12,1/12+0.05,0.52, 6);
		let sphere = new Three.SphereGeometry(0.2, 24, 24);
		
		this.mainGroup = new Three.Group();
		this.mainGroup.scale.set(0.0001,0.0001,0.0001);
		this.mainGroup.rotation.z = 0.5;
		this.addDisplayObject(this.mainGroup);

		this.revolutionGroup = new Three.Group();
		this.mainGroup.add(this.revolutionGroup);
		
		this.moonAxisGroup = new Three.Group();
		this.moonAxisGroup.position.x=1;
		this.revolutionGroup.add(this.moonAxisGroup);
		
		let moon = new Three.Mesh(sphere, moonMaterial);
		moon.rotation.z = 0.05;
		this.moonAxisGroup.add(moon);
		
		let ringMaterial = new Three.MeshToonMaterial({color: 0xDDAA55})
		let torus = new Three.TorusGeometry(0.3, 0.05, 12, 12);
		let ringMesh = new Three.Mesh(torus, ringMaterial);
		ringMesh.rotation.x = Math.PI / 2;
		ringMesh.rotation.y = Math.PI / 8;
		ringMesh.scale.z = 0.1;


		this.moonAxisGroup.add(ringMesh);
		
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
			// TODO: make craters
			//this.createLand(0.5 + Math.random() * 5, Math.random() * 12);
		}
	}

	createCraters(long: number, lat: number){
		
	}

	drawUpdate(dt: number){
		// this.mainGroup.rotation.y += dt*0.7;
		this.revolutionGroup.rotation.y += dt*0.4;
		this.moonAxisGroup.rotation.y += dt*0.7;
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

export default Moon;