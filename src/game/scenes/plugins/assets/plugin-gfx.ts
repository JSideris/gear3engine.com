import { Drawable2d, drawable2d, Pixi } from "g3e-canvas-2d";
import { GameObject } from "gear3engine";

declare type SegmentDefinition = 	{
	caption: string,
	x: number, 
	y: number,
	radius: number,
	bgColor: number,
	textColor: number
};

const coreBorderColor = 0xffffff;
const coreBgColor = 0xffffff;
const coreTextColor = 0x000000;

const primaryRadius = 75;
const secondaryRadius = 60;
const tirtiaryRadius = 50;

const segmentDefinitions: Array<SegmentDefinition> = [
	{
		caption: "gear3engine",
		x: 0, y: 0,
		radius: primaryRadius,
		bgColor: 0xffffff,
		textColor: 0x000000
	},
	{
		caption: "client",
		x: 0, y: 150,
		radius: secondaryRadius,
		bgColor: 0xff55ff,
		textColor: 0x000000
	},
	{
		caption: "sfx",
		x: 0 + 150 * Math.cos(0 * Math.PI / 4), y: 150 + 150 * Math.sin(0 * Math.PI / 4),
		radius: tirtiaryRadius,
		bgColor: 0xAA55AA,
		textColor: 0x000000
	},
	{
		caption: "gui",
		x: 0 + 150 * Math.cos(1 * Math.PI / 4), y: 150 + 150 * Math.sin(1 * Math.PI / 4),
		radius: tirtiaryRadius,
		bgColor: 0xAA55AA,
		textColor: 0x000000
	},
	{
		caption: "input",
		x: 0 + 150 * Math.cos(2 * Math.PI / 4), y: 150 + 150 * Math.sin(2 * Math.PI / 4),
		radius: tirtiaryRadius,
		bgColor: 0xAA55AA,
		textColor: 0x000000
	},
	{
		caption: "canvas2d",
		x: 0 + 150 * Math.cos(3 * Math.PI / 4), y: 150 + 150 * Math.sin(3 * Math.PI / 4),
		radius: tirtiaryRadius,
		bgColor: 0xAA55AA,
		textColor: 0x000000
	},
	{
		caption: "canvas3d",
		x: 0 + 150 * Math.cos(4 * Math.PI / 4), y: 150 + 150 * Math.sin(4 * Math.PI / 4),
		radius: tirtiaryRadius,
		bgColor: 0xAA55AA,
		textColor: 0x000000
	},
	{
		caption: "server",
		x: 0, y: -150,
		radius: secondaryRadius,
		bgColor: 0x55ffff,
		textColor: 0x000000
	},
	{
		caption: "data",
		x: 0, y: -300,
		radius: tirtiaryRadius,
		bgColor: 0x55AAAA,
		textColor: 0x000000
	},
	{
		caption: "physics2d",
		x: -250, y: -75,
		radius: secondaryRadius,
		bgColor: 0xffff55,
		textColor: 0x000000
	},
	{
		caption: "physics3d",
		x: -250, y: 75,
		radius: secondaryRadius,
		bgColor: 0xffff55,
		textColor: 0x000000
	},
	{
		caption: "ai",
		x: 150, y: 0,
		radius: secondaryRadius,
		bgColor: 0x77ff77,
		textColor: 0x000000
	},
];

interface PluginGfx extends Drawable2d{}

@drawable2d
class PluginGfx extends GameObject{
	disposeMode: boolean;
	allSegments: Array<{definition: SegmentDefinition, gfx: Pixi.Graphics, targetX: number, targetY: number, targetScale: number}> = [];

	constructor(){
		super();

		let container = new Pixi.Container();
		this.displayObject = container;
		this.displayObject.alpha = 0;

		for(let i = 0; i < segmentDefinitions.length; i++){
			let def = segmentDefinitions[i];


			let gfx = new Pixi.Graphics();

			gfx.beginFill(def.bgColor);
			gfx.drawCircle(0,0,def.radius);
			let txt = new Pixi.Text(def.caption, {
				//align: "center",
				fill: def.textColor,
				fontSize: 16
			});
			txt.anchor.set(0.5,0.5);
			gfx.addChild(txt);
			gfx.position.set(def.x, def.y);
			container.addChild(gfx);

			this.allSegments.push({
				definition: def,
				gfx: gfx,
				targetX: def.x,
				targetY: def.y,
				targetScale: 1
			});
		}
		

	}

	drawUpdate(dt: number){
		if(this.disposeMode){
			this.displayObject.alpha -= dt;
			if(this.displayObject.alpha <= 0){
				this.destroy();
			}
		}
		else{
			this.displayObject.alpha = Math.min(1, this.displayObject.alpha + dt);
		}


		// Move all the nodes.
		for(let i = 0; i < this.allSegments.length; i++){
			let seg = this.allSegments[i];

			// p/s = 0.3
			// p/dt = 1 - (1 - 0.3) ^ dt
			let pScaleChange = 1 - Math.pow(1-0.1, dt);
			let pPosChange = 1 - Math.pow(1-0.1, dt);

			if(Math.random() < pScaleChange){
				seg.targetScale = 0.75 + Math.random() * 0.4;
			}
			if(Math.random() < pPosChange){
				seg.targetX = seg.definition.x + 30 * (Math.random() - 0.5);
				seg.targetY = seg.definition.y + 30 * (Math.random() - 0.5);
			}

			let currentScale = seg.gfx.scale.x;
			let scaleDiff = seg.targetScale - currentScale;
			seg.gfx.scale.set(currentScale + scaleDiff * dt);

			let x = seg.gfx.position.x;
			let y = seg.gfx.position.y;
			let xd = seg.targetX - x;
			let yd = seg.targetY - y;
			seg.gfx.position.set(x + xd * dt, y + yd * dt);
		}
	}
}


export default PluginGfx;