import { AmbientLight, Canvas3dPlugin, Three } from "g3e-canvas-3d";
import { DeathType } from "gear3engine";
import BrainDataAx from "../../../assets/brain/ax/brain-data-ax";
import BrainDataSag from "../../../assets/brain/sag/brain-data-sag";
import GameManager from "../../game-manager";
import SceneManager from "../scene-manager";
import ScanViewer from "./entities/scan-viewer";

export default class BusinessManager extends SceneManager{

	private viewer: ScanViewer;
	private frontDirectionalLightSource: Three.DirectionalLight;
	private topDirectionalLightSource: Three.DirectionalLight;
	private ambientLight: AmbientLight;
	private leftDirectionalLightSource: Three.DirectionalLight;
	private rightDirectionalLightSource: Three.DirectionalLight;
	private textureCache: Record<string, Three.Texture> = {};
	gm: GameManager;
	private loadDelayer = 0;

	constructor(){
		super();

		this.addSlice(require(`../../../assets/brain/cor/de15d75c-163d778d-e8dd6c89-018df327-2314c22f.png`).default, "x", 16,0,0, 0.949);

		for(let i = 0; i < BrainDataSag.length/2; i+=1){
			this.addSlice(require(`../../../assets/brain/sag/${BrainDataSag[i].ID}.png`).default, "z", 0,0,(BrainDataSag[i].IndexInSeries - 60) * 2);
		}

		for(let i = 0; i < BrainDataAx.length; i+=5){
			this.addSlice(require(`../../../assets/brain/ax/${BrainDataAx[i].ID}.png`).default, "y", 0,(BrainDataAx[i].IndexInSeries - 15) * 4 + 8,0);
		}
	}

	enter() {
		if(!this.viewer || !this.viewer.alive) {
			this.viewer = this.gi.make(ScanViewer);
		}

		if(!this.frontDirectionalLightSource){
			this.frontDirectionalLightSource = new Three.DirectionalLight(
				0xffffff,
				10
			);
			this.frontDirectionalLightSource.position.set(0, 0, 1); //default; light shining from top
			this.frontDirectionalLightSource.castShadow = true; // default false

			//Set up shadow properties for the light
			this.frontDirectionalLightSource.shadow.mapSize.width = 2048;
			this.frontDirectionalLightSource.shadow.mapSize.height = 2048;
			this.frontDirectionalLightSource.shadow.camera.near = 0.5; // default
			this.frontDirectionalLightSource.shadow.camera.far = 500; // default

			this.topDirectionalLightSource = new Three.DirectionalLight(
				0xffffff,
				5
			);
			this.topDirectionalLightSource.position.set(0, 1, 0); //default; light shining from top
			this.topDirectionalLightSource.castShadow = true; // default false

			this.leftDirectionalLightSource = new Three.DirectionalLight(
				0xffffff,
				2.5
			);
			this.topDirectionalLightSource.position.set(1, 0, 0); //default; light shining from top
			this.topDirectionalLightSource.castShadow = true; // default false

			this.rightDirectionalLightSource = new Three.DirectionalLight(
				0xffffff,
				2.5
			);
			this.topDirectionalLightSource.position.set(-1, 0, 0); //default; light shining from top
			this.topDirectionalLightSource.castShadow = true; // default false
		}

		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.add(this.frontDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.add(this.topDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.add(this.rightDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.add(this.leftDirectionalLightSource);

		this.viewer.show();

		this.gm.target = 0;
		// this.ambientLight.intensity = 0;
		// this.ambientLight.updateLightProps();
	}

	leave() {
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.frontDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.topDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.leftDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.rightDirectionalLightSource);
		this.viewer.hide();

		this.gm.target = 1;
	}

	async addSlice(textureUrl: string, planeNormal: "x"|"y"|"z", ox: number, oy: number, oz: number, scale?: number){
		let texture: Three.Texture = this.textureCache[textureUrl];
		if(!texture){
			
			texture = await new Promise<any>(resolve => {
				const loadedTexture = new Three.TextureLoader(Three.DefaultLoadingManager).load(
				textureUrl,
				() => {
					resolve(loadedTexture);
				}
				);
			});
		
			this.textureCache[textureUrl] = texture;
		}

		this.viewer.addSlice(texture, planeNormal, ox, oy, oz, scale);
		
	}

	destroy(t: DeathType){
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.frontDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.topDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.leftDirectionalLightSource);
		this.gi.getPlugin(Canvas3dPlugin).threeWorld.threeScene.remove(this.rightDirectionalLightSource);
		this.gi.destroyObject(this.viewer, t);
	}
}