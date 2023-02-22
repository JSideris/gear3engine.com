import { Drawable3d, drawable3d, Three } from "g3e-canvas-3d";
import { GameObject } from "gear3engine";
import Pawn from "./pawn";
import Platform3D from "./platform-3d";

interface TileGrid3d extends Drawable3d{}

@drawable3d
class TileGrid3d extends GameObject{
	lCursor = 0;
	allTiles: Record<number, Platform3D> = {};
	tileRowQueue: Array<Array<Platform3D>> = [];

	active: boolean = false;

	rowTimer: number = 0;
	private stopped: boolean;
	mainGroup: Three.Group;

	constructor(){
		super();

		this.mainGroup = new Three.Group();
		this.mainGroup.name = "Tile Grid";
		this.addDisplayObject(this.mainGroup);

		this.createRow();
	}
	
	// fixedUpdate(dt: number){
	// 	if(this.active){
	// 		this.rowTimer += dt;
	// 		this.createRow();

	// 	}
	// }

	drawUpdate(dt: number, time: number, frames: number): void{
		if(this.stopped) return;
		this.mainGroup.position.z += dt;
		if(this.mainGroup.position.z > this.lCursor * 1.8){
			this.createRow();
		}
	}
	
	createRow(){
		let nextRow = [];

		for(let i = 0; i < 20; i++){
			let newTile = this.gi.make(Platform3D, t=>{
				// TODO: set position!!
				t.x = (i - 10) * 1.1;
				t.z = -(this.lCursor) * 1.8 - 35;
				t.color = (i + this.lCursor)%2 ? "white" : "black";
			});

			if(Math.random() < 0.1){
				let pawn = this.gi.make(Pawn, p=>{
					p.color = (Math.random() < 0.5) ? "white" : "black";
					p.startTile = newTile;
				});
			}

			nextRow.push(newTile);

			this.mainGroup.add(newTile.box);
		}

		this.tileRowQueue.unshift(nextRow);

		if(this.tileRowQueue.length > 10){
			let rowToDelete = this.tileRowQueue.pop();
			for(let i = 0; i < rowToDelete.length; i++){
				let tile = rowToDelete[i];
				tile.vanquish();
			}
		}

		this.lCursor++;
	}

	vanquishAll(){
		while(this.tileRowQueue.length > 0){
			let rowToDelete = this.tileRowQueue.pop();
			for(let i = 0; i < rowToDelete.length; i++){
				let tile = rowToDelete[i];
				tile.vanquish(true);
			}
		}
	}

	stop(){ this.stopped = true; }

	resume(){ this.stopped = false; }
}

export default TileGrid3d;