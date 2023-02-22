import {AmbientLight, DirectionalLight, drawable3d, Drawable3d, PointLight, Three} from "g3e-canvas-3d";
import { GameObject, Vector3 } from "gear3engine";
import G3eLogo from "./entities/g3e-logo";
import TestCube from "./entities/test-cube";
import { GameModes } from "./game-modes";
import BusinessManager from "./scenes/business/business-manager";
import ControllerManager from "./scenes/controller/controller-manager";
import PlaneSimManager from "./scenes/plane-sim/plane-sim-manager";
import PluginsManager from "./scenes/plugins/plugins-manager";
import SceneManager from "./scenes/scene-manager";
import TileJumperManager from "./scenes/tile-jumper/tile-jumper-manager";
import WebsiteGameInstance from "./website-game-instance";


interface GameManager extends Drawable3d{}

@drawable3d
class GameManager extends GameObject{
	mode: number = 0;

	logo: G3eLogo;

	activeScene: SceneManager;
	planeScene: PlaneSimManager;
	tileJumperScene: TileJumperManager;
	businessScene: BusinessManager;
	ambientLight: Three.AmbientLight;
	target: number = 1;
	progress: number = 0;

	gi: WebsiteGameInstance;
	directionalLights: Three.PointLight[];
	controllerScene: ControllerManager;

	ambientLightMax = 0.25;
	pointLightMax = 1;
	pluginsScene: PluginsManager;

	constructor(){
		super();
		// this.ambientLight = this.gi.make(AmbientLight, a=>{
		// 	//a.intensity = 0.1
		// 	a.intensity = 0.0
		// });

		this.ambientLight = new Three.AmbientLight(0xffffff, 0);
		this.addDisplayObject(this.ambientLight);
		
		// TODO: perhaps we could move some of these lights.
		{
			let light1 = new Three.PointLight(0xffffff, 0, 100);
			light1.position.set(25,-25,10);
			let light2 = new Three.PointLight(0xffffff, 0, 100);
			light2.position.set(-25,25,10);
			let light3 = new Three.PointLight(0xffffff, 0, 100);
			light3.position.set(25,25,0);
			let light4 = new Three.PointLight(0xffffff, 0, 100);
			light4.position.set(-25,-25,10);

			this.directionalLights = [light1, light2, light3, light4];

			this.addDisplayObject(light1);
			this.addDisplayObject(light2);
			this.addDisplayObject(light3);
			this.addDisplayObject(light4);

		}

		this.gi.plugin3d.mainCamera.threeCam.position.set(0,0,2);
		(this.gi.plugin3d.mainCamera.threeCam as THREE.PerspectiveCamera).fov = 45;
		(this.gi.plugin3d.mainCamera.threeCam as THREE.PerspectiveCamera).updateProjectionMatrix();

		this.planeScene = this.gi.make(PlaneSimManager);
		this.pluginsScene = this.gi.make(PluginsManager);
		this.tileJumperScene = this.gi.make(TileJumperManager);
		this.controllerScene = this.gi.make(ControllerManager);
		this.businessScene = this.gi.make(BusinessManager, b=>{
			b.gm = this;
		});

		this.logo = this.gi.make(G3eLogo);
	
	}

	setMode(mode: GameModes){
		if(this.mode != mode){
			if(this.activeScene) this.activeScene.leave();
			this.activeScene = null;

			switch(mode){
				case GameModes.Logo: { this.activeScene = null; break; }
				case GameModes.Overview: { this.activeScene = this.planeScene; break; }
				case GameModes.Plugins: { this.activeScene = this.pluginsScene; break; }
				case GameModes.Ai: { this.activeScene = this.tileJumperScene; break; }
				case GameModes.Controller: { this.activeScene = this.controllerScene; break; }
				case GameModes.Medical: { this.activeScene = this.businessScene; break; }
				case GameModes.Information: { this.activeScene = null; break; }
			}

			console.log(mode);

			if(this.activeScene) this.activeScene.enter();
		}

		this.mode = mode;
		this.logo.smallMode = mode != GameModes.Logo;
	}

	drawUpdate(dt: number){
		if(this.progress != this.target){
			let rate = Math.exp(-dt);
			this.progress = this.target - (this.target-this.progress) * rate;
			this.ambientLight.intensity = this.progress * this.ambientLightMax;
			this.directionalLights[0].intensity = this.progress * this.pointLightMax;
			this.directionalLights[1].intensity = this.progress * this.pointLightMax;
			this.directionalLights[2].intensity = this.progress * this.pointLightMax;
			this.directionalLights[3].intensity = this.progress * this.pointLightMax;
			if(Math.abs(this.progress - this.target) < 0.01){
				this.progress = this.target;
				this.ambientLight.intensity = this.target * this.ambientLightMax;
				this.directionalLights[0].intensity = this.target * this.pointLightMax;
				this.directionalLights[1].intensity = this.target * this.pointLightMax;
				this.directionalLights[2].intensity = this.target * this.pointLightMax;
				this.directionalLights[3].intensity = this.target * this.pointLightMax;
			}
		}
	}
}

export default GameManager;