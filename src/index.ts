import dot from "dothtml";
import { Canvas2dPlugin } from "g3e-canvas-2d";
import { Canvas3dPlugin } from "g3e-canvas-3d";
import GameContainer from "./components/game-container";
import Slider from "./components/slider/slider-2";
import FullscreenPageSection from "./components/fullscreen-page-section";
import GameManager from "./game/game-manager";
import "./global-style";
import overviewPane from "./components/panes/overview-pane";
import logoPane from "./components/panes/logo-pane";
import WebsiteGameInstance from "./game/website-game-instance";
import { GameModes } from "./game/game-modes";
import pluginsPane from "./components/panes/plugins-pane";
import aiPane from "./components/panes/ai-pane";
import controlPane from "./components/panes/control-pane";
import medicalPane from "./components/panes/medical-pane";
import { PANE_HEIGHT } from "./util/constants";
import moreInfoPane from "./components/panes/moreInfoPane";

dot("body").h(new GameContainer());

const gi = new WebsiteGameInstance();
gi.play();

let canvas2dPlugin = gi.getPlugin(Canvas2dPlugin); 
// canvas2dPlugin.pixiWorld.setBackgroundColor(0);
//dot.css("#container-2d").position("absolute").widthP(100);
let canvas3dPlugin = gi.getPlugin(Canvas3dPlugin); 
// This positions the 3d canvas so that it sits in the middle of the container.
dot.css(canvas3dPlugin.threeWorld.canvas).position("absolute");//.transform(t=>t.translateXP(-50));
dot.css("#container-3d").widthP(100);

const panes = [logoPane, overviewPane, pluginsPane, aiPane, controlPane, medicalPane, moreInfoPane];
let mouseP = 0;
// let scrollH = 0;

dot(window.document.body).h(panes);

window.addEventListener("scroll", e=>{
	handleScrolls();
	updatePaneOrientations();
});

window.addEventListener("mousemove", e=>{
	mouseP = (e.x / window.innerWidth) * 2 - 1;
	updatePaneOrientations();
});

function updatePaneOrientations(){
	for(let i = 0; i < panes.length; i++){
		let pane = panes[i];
		let relativeScroll = window.scrollY - i * PANE_HEIGHT;
		let scrollP = relativeScroll / PANE_HEIGHT + 0.5;
		pane.setOrientation(mouseP, Math.min(1, Math.max(-1, scrollP)));
	}
}

// const sections = {
// 	logo: 0,
// 	// mmo: 1,
// 	planes: 1,
// 	ai: 2, 
// 	controller: 3,
// 	g3eForBusiness: 4,
// 	info: 5
// }

enum sections {
	logo,
	overview,
	plugins,
	ai, 
	controller,
	medical,
	info
};

function handleScrolls(){
	if(scrollInRangeOfSection(sections.logo))
		gi.setMode(GameModes.Logo);
	// if(scrollInRangeOfSection(sections.mmo))
	// 	gi.setMode(GameModes.MmoExplorer);
	if(scrollInRangeOfSection(sections.overview))
		gi.setMode(GameModes.Overview);
	if(scrollInRangeOfSection(sections.plugins))
		gi.setMode(GameModes.Plugins);
	if(scrollInRangeOfSection(sections.ai))
		gi.setMode(GameModes.Ai);
	if(scrollInRangeOfSection(sections.controller))
		gi.setMode(GameModes.Controller);
	if(scrollInRangeOfSection(sections.medical))
		gi.setMode(GameModes.Medical);
	if(scrollInRangeOfSection(sections.info))
		gi.setMode(GameModes.Information);
}

const bias = 0.3;

const scrollInRangeOfSection = (section: number) => window.scrollY > (section-1 + bias)*PANE_HEIGHT && window.scrollY <= (section-0 + bias)*PANE_HEIGHT;

// dot(window.document.body).h([intro, webTech]);
// dot(window.document.body).h(webTech);