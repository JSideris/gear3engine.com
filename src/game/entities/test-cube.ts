import { Drawable3d, drawable3d, Three } from "g3e-canvas-3d";
import { GameObject } from "gear3engine";

interface TestCube extends Drawable3d{}

@drawable3d
class TestCube extends GameObject{
	cube: Three.Mesh<Three.BoxGeometry, Three.MeshBasicMaterial>;
	constructor(){
		super();
		const geometry = new Three.BoxGeometry( 1, 1, 1 );
		const material = new Three.MeshBasicMaterial( { color: 0x00ff00 } );
		const cube = new Three.Mesh( geometry, material );
		this.cube = cube;
		this.addDisplayObject(this.cube);
	}

	drawUpdate(dt: number, time: number, frames: number): void{
		this.cube.rotation.x += 0.01;
		this.cube.rotation.y += 0.01;
	}

}

export default TestCube;