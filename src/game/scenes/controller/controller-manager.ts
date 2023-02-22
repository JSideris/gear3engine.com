import { DeathType, GameObject } from "gear3engine";
import SceneManager from "../scene-manager";
import ControllerModel from "./assets/controller-model";


class ControllerManager extends SceneManager{
	model: ControllerModel;

	enter() {
		if(!this.model || !this.model.alive){
			this.model = this.gi.make(ControllerModel);
		}
		else{
			this.model.targetVisibility = 1;
		}
	}
	leave() {
		if(this.model) this.model.targetVisibility = 0;
	}

}

export default ControllerManager;