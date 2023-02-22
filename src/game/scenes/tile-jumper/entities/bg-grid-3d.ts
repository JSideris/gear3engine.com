import { drawable3d, Drawable3d, Three } from "g3e-canvas-3d";
import { GameObject, Vector3 } from "gear3engine";


interface BgGrid3d extends Drawable3d{}

@drawable3d
class BgGrid3d extends GameObject{
	mat: Three.Material;

	private hidden = false;
	torus: Three.Mesh<Three.TorusGeometry, Three.Material>;

	constructor(){
		super();

		const geometry = new Three.TorusGeometry( 24, 16, 16, 16 );
		this.mat = new Three.MeshPhysicalMaterial( { wireframe: true, color: 0x334488, transparent: true } );
		const torus = new Three.Mesh( geometry, this.mat );
		this.torus = torus;
		this.addDisplayObject(this.torus);

		this.mat.opacity = 0;
		torus.rotation.y = Math.PI / 2;

		this.torus.position.set(0,-24,-10);
	}

	drawUpdate(dt: number){
		this.torus.rotation.x += dt * 0.1;
		let rate = Math.pow(2, -dt*2);
		if(this.hidden){
			this.mat.opacity *= rate;
		}
		else{
			this.mat.opacity = 1 - (1 - this.mat.opacity) * rate;
		}
	}

	hide(){
		this.hidden = true;
	}
	show(){
		this.hidden = false;
	}
}

export default BgGrid3d;