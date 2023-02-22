import { GameInstance, GameObject } from "gear3engine";


export default abstract class SceneManager extends GameObject{
	abstract enter();
	abstract leave();

	constructor(){
		super();
	}
}