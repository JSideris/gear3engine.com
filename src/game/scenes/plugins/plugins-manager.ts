import { DeathType, GameObject } from "gear3engine";
import SceneManager from "../scene-manager";
import PluginGfx from "./assets/plugin-gfx";


class PluginsManager extends SceneManager{
	graph: PluginGfx;

	enter() {
		if(!this.graph || !this.graph.alive) this.graph = this.gi.make(PluginGfx);
		else{
			this.graph.disposeMode = false;
		}
	}
	leave() {
		this.graph.disposeMode = true;
	}

}

export default PluginsManager;