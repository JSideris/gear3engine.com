import { GameInstance } from "gear3engine";
import { GameClientPlugin } from "g3e-client";
import { Canvas2dPlugin } from "g3e-canvas-2d";
import { Canvas3dPlugin } from "g3e-canvas-3d";
import GameManager from "./game-manager";
import { GameModes } from "./game-modes";
import { ClientDebuggerPlugin } from "g3e-client-debugger";

export default class WebsiteGameInstance extends GameInstance{
	pluginClient: GameClientPlugin;
	plugin2d: Canvas2dPlugin;
	plugin3d: Canvas3dPlugin;
	pluginDebugger: ClientDebuggerPlugin;
	gameManager: GameManager;

	constructor(){
		super();
		this.pluginClient = new GameClientPlugin();
		this.pluginDebugger = new ClientDebuggerPlugin();
		this.usePlugin(this.pluginClient);

		this.usePlugin(this.pluginDebugger);

		this.usePlugin(new Canvas2dPlugin({
			disableScroll: false,
			target: document.getElementById("container-2d")
		}));

		this.plugin3d = new Canvas3dPlugin({
			disableScroll: false,
			target: document.getElementById("container-3d"),
			alphaBg: true,
			clearColor: 0
		});

		// this.plugin3d.threeWorld.renderer.setClearColor(0);

		this.usePlugin(this.plugin3d);

		this.on("gameStart", ()=>{
			this.gameManager = this.make(GameManager, gm=>{
				gm.gi = this;
			});
		});
	}

	setMode(mode: GameModes){
		this.gameManager.setMode(mode);
	}
}