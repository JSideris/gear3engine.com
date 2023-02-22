import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { DeathType, GameObject } from "gear3engine";
import Platform3D from "./platform-3d";


interface Pawn extends Drawable3d{}

@drawable3d
class Pawn extends GameObject{
	color: "black"|"white";
	startTile: Platform3D;

	constructor(){
		super();

		let sphereGeometry = new Three.SphereGeometry(0.5, 12, 12);
		let conicGeometry = new Three.CylinderGeometry(0.25, 0.5, 1, 12, 1);

		let material = new Three.MeshToonMaterial({ color: this.color == "white" ? 0xDDDDDD : 0x221515 });
		
		let pawnHead = new Three.Mesh(sphereGeometry, material);
		let pawnBody = new Three.Mesh(conicGeometry, material);
		let pawnBase = new Three.Mesh(conicGeometry, material);

		pawnHead.position.y = 0.75;
		pawnHead.scale.x = pawnHead.scale.y = pawnHead.scale.z = 0.5;
		pawnBody.scale.x = pawnBody.scale.z = 0.5;
		pawnBase.scale.y = 0.25;
		pawnBase.scale.x = pawnBase.scale.z = 0.75;
		pawnBase.position.y = -0.25;
		//pawnHead.scale.set(0.);

		let pawnGroup = new Three.Group();
		pawnGroup.add(pawnHead);
		pawnGroup.add(pawnBody);
		pawnGroup.add(pawnBase);

		// this.addDisplayObject(pawnGroup);

		this.startTile.box.add(pawnGroup);
		pawnGroup.position.y = 0.5;
	}

	fixedUpdate(){
		if(!this.startTile.alive){
			this.gi.destroyObject(this, DeathType.Unloaded);
		}
	}
}

export default Pawn;