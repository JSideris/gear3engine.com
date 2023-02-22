import SceneManager from "../scene-manager";
import BgGrid3d from "./entities/bg-grid-3d";
import Platform3D from "./entities/platform-3d";
import TileGrid3d from "./entities/tile-grid-3d";

export default class TileJumperManager extends SceneManager{

	// allPlatforms: Record<number, Platform3D> = {};
	tileGrid: TileGrid3d;
	torus: BgGrid3d;

	enter() {
		if(!this.tileGrid) {
			this.tileGrid = this.gi.make(TileGrid3d);
			this.torus = this.gi.make(BgGrid3d);
		}
		else{
			this.tileGrid.resume();
			this.torus.show();
		}
	}
	leave() {
		this.tileGrid.vanquishAll();
		this.tileGrid.stop();
		this.torus.hide();
	}
}