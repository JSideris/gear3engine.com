import { Drawable3d, drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject } from "gear3engine";


interface ScanViewer extends Drawable3d{}

const tileSize = 25;
const fileResolution = 162;

@drawable3d
class ScanViewer extends GameObject{
	square: Three.PlaneGeometry;
	decorationRedMaterial: Three.MeshBasicMaterial;

	dying: boolean = false;
	mainGroup: Three.Group;
	opacity = 0;
	targetOpacity: number = 0;
	allMaterials: Array<Three.Material> = [];

	constructor(){
		super();

		this.mainGroup = new Three.Group();
		this.addDisplayObject(this.mainGroup);

		this.mainGroup.rotation.x = 0.1;

		this.square = new Three.PlaneGeometry(1, 1);
		// this.square.scale(25,25,25);

		this.decorationRedMaterial = new Three.MeshBasicMaterial({
			color: 0xff8080,
			side: Three.DoubleSide,
			transparent: true
		});

		this.allMaterials.push(this.decorationRedMaterial);

		let notches = 20;
		for (let i = 0; i < notches; i++) {
			const notch = new Three.Mesh(
			  this.square,
			  this.decorationRedMaterial
			);
	  
			if (i % 5) {
			  notch.scale.x = 0.01;
			  notch.scale.y = 0.02;
			} else {
			  notch.scale.x = 0.01;
			  notch.scale.y = 0.1;
			}
	  
			const r = (i / notches) * 2 * Math.PI;
			const c = Math.cos(r);
			const s = Math.sin(r);
	  
			notch.rotation.x = Math.PI / 2;
			notch.rotation.z = r + Math.PI / 2;
	  
			notch.position.z = s * 12/26;
			notch.position.x = c * 12/26;
			notch.position.y = -0;
			// notch.visible = false;
			this.mainGroup!.add(notch);
		  }

		// this.addSlice(require("../../../../assets/brain/cor/a.png").default, "z", -29.4, -21.6, 112.0);
		// this.addSlice(require("../../../../assets/brain/cor/b.png").default, "z", -28.7, -51.5, 120.5);
		// this.addSlice(require("../../../../assets/brain/cor/c.png").default, "z", -30.3, -8.9, 98.3);

		// this.addSlice(require("../../../../assets/brain/sag/a.png").default, "x", -63.1, -6.0, 2.9);
		// this.addSlice(require("../../../../assets/brain/sag/b.png").default, "x", 6.8, -2.1, 9.1);
		// this.addSlice(require("../../../../assets/brain/sag/c.png").default, "x", 57.2, 0.5, 8.2);
		// this.addSlice(require("../../../../assets/brain/sag/d.png").default, "x", 77.9, 0.4, 3.4);
		// this.addSlice(require("../../../../assets/brain/sag/e.png").default, "x", -42.6, -4.6, 7.0);

		// this.addSlice(require("../../../../assets/brain/tra/a.png").default, "y", -23.2, -13.8, 26.1);
		// this.addSlice(require("../../../../assets/brain/tra/b.png").default, "y", -21.4, -28.8, 48.0);
		// this.addSlice(require("../../../../assets/brain/tra/c.png").default, "y", -21.4, -11.5, 53.4);
	}

	show(){
		this.targetOpacity = 1;
	}
	hide(){
		this.targetOpacity = 0;
	}

	addSlice(texture: Three.Texture, planeNormal: "x"|"y"|"z", ox: number, oy: number, oz: number, scale?: number){

		let mat = new Three.MeshStandardMaterial({
			color: 0xffffff,
			side: Three.DoubleSide,
			transparent: true,
			alphaMap: texture,
			map: texture,
			// map: null
			alphaTest: 0.1,
			opacity: this.opacity
		} );

		this.allMaterials.push(mat);

		mat.depthWrite = false;
		mat.needsUpdate = true;

		const plane = new Three.Mesh(this.square, mat);
		plane.castShadow = true;
		plane.receiveShadow = true;

		switch(planeNormal){
			case "x": { 
				plane.rotation.y = Math.PI / 2;
				break; 
			}
			case "y": { 
				plane.rotation.order = "YXZ";
				plane.rotation.x = Math.PI / 2;
				plane.rotation.y = -Math.PI / 2;
				break; 
			}
			case "z": { 
				// plane.rotation.x = Math.PI / 2;
				break; 
			}
		}
		plane.position.x = ox * 1 / fileResolution;
		plane.position.y = oy * 1 / fileResolution;
		plane.position.z = oz * 1 / fileResolution;

		this.mainGroup.add(plane);

		if(scale){
			plane.scale.x = scale;
			plane.scale.y = scale;
			plane.scale.z = scale;
		}
	}

	fixedUpdate(){
		if(this.opacity == 0 && this.targetOpacity == 0){
			this.gi.destroyObject(this, DeathType.Unloaded);
		}
	}

	drawUpdate(dt: number){
		this.mainGroup.rotation.y += dt;

		if(this.opacity != this.targetOpacity){
			let rate = Math.exp(-dt*(this.targetOpacity ? 2 : 4));
			this.opacity = this.targetOpacity - (this.targetOpacity-this.opacity) * rate;
			if(Math.abs(this.opacity - this.targetOpacity) < 0.01){
				this.opacity = this.targetOpacity;
			}

			for(let m in this.allMaterials){
				let M = this.allMaterials[m];
				M.opacity = this.opacity;
			}
		}
	}

	destroy(){
		// TODO dispose of textures and geometry.
		this.square.dispose();
		this.decorationRedMaterial.dispose();
		
	}
}

export default ScanViewer;