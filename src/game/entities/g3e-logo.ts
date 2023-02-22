import { Drawable2d, drawable2d, Pixi } from "g3e-canvas-2d";
import { GameObject } from "gear3engine";
import MultiStyleText from "pixi-multistyle-text";
import Colors from "../../util/colors";

// Gear constants
const rootR = 200;
const dedendum = 12;
const addendum = 7;
const rootP = 0.3;
const nTeeth = 12;
const clearance = 1;
const driveRatio = 4;

// Char constants
const charClearance = 20;
const textLineWidth = 60;

interface G3eLogo extends Drawable2d{};

@drawable2d
class G3eLogo extends GameObject{
	gearG: Pixi.Graphics;
	gear3: Pixi.Graphics;
	gearE: Pixi.Graphics;
	driveGear: Pixi.Graphics;
	planetary: Pixi.Graphics;
	text: MultiStyleText;

	smallMode = false;
	targetScale = 0.5;
	currentScale = 0.5;

	targetX = 0;
	currentX = 0;
	targetY = 0;
	currentY = 0;

	constructor(){
		super();
		let di = new Pixi.Container();
		this.displayObject = di;

		this.gearG = new Pixi.Graphics();
		this.gear3 = new Pixi.Graphics();
		this.gearE = new Pixi.Graphics();
		this.driveGear = new Pixi.Graphics();
		di.addChild(this.gearG);
		di.addChild(this.gear3);
		di.addChild(this.gearE);
		di.addChild(this.driveGear);

		this.makeGear(this.gearG, Colors.gearSteel, rootR, rootP, nTeeth, dedendum, addendum);
		this.makeGear(this.gear3, Colors.gearSteel, rootR, rootP, nTeeth, dedendum, addendum);
		this.makeGear(this.gearE, Colors.gearSteel, rootR, rootP, nTeeth, dedendum, addendum);
		this.makeGear(this.driveGear, Colors.gearDarkSteel, rootR/driveRatio, rootP, nTeeth/driveRatio, dedendum, addendum);

		let upperGYP = -Math.sin(Math.PI / 6) * ((rootR) + (rootR / driveRatio) + (dedendum + addendum + clearance));
		let lowerGYP = ((rootR) + (rootR / driveRatio) + (dedendum + addendum + clearance));
		let upperGXP = Math.cos(Math.PI / 6) * ((rootR) + (rootR / driveRatio) + (dedendum + addendum + clearance));
		this.gearG.position.x = -upperGXP;
		this.gearG.position.y = upperGYP;
		this.gear3.position.x = upperGXP;
		this.gear3.position.y = upperGYP;
		this.gearE.position.y = lowerGYP;

		{ // G
			// this.gearG.lineStyle({width: 3, color: 0});
			this.gearG.beginFill(Colors.gearCharacter);
			this.gearG.moveTo(0, -rootR + charClearance); // Correct.
			this.gearG.arc(0,0, rootR - charClearance, -Math.PI / 2, -0.165, true); // 0.165 hardcoded should be computed...
			this.gearG.lineTo(0, -textLineWidth / 2); // Correct.
			this.gearG.arc(0,0, textLineWidth/2, -Math.PI / 2, Math.PI / 2, true); // Correct
			//this.gearG.lineTo(rootR - charClearance - textLineWidth - 10, textLineWidth / 2); // Slight adjustment required.
			// this.gearG.lineStyle({width: 3, color: 255*256*256});
			this.gearG.arc(0,0, rootR - charClearance - textLineWidth, 0.26, -Math.PI / 2, false); // Hardcoded number :(
			this.gearG.arc(0, -rootR + charClearance + textLineWidth/2, textLineWidth/2, Math.PI / 2, -Math.PI / 2, true); // Correct
			this.gearG.endFill();
			this.gearG.beginFill(Colors.gearPin);
			this.gearG.drawCircle(0,0,textLineWidth / 3);
			this.gearG.endFill();
		}
		
		{ // 3
			this.gear3.beginFill(Colors.gearCharacter);
			this.gear3.moveTo(0, -rootR + charClearance); // Correct.
			this.gear3.arc(0,0,rootR - charClearance, -Math.PI / 2, Math.PI / 2);
			this.gear3.arc(0, rootR - charClearance - textLineWidth/2, textLineWidth/2, Math.PI / 2, -Math.PI / 2);
			// this.gear3.lineStyle({width: 3, color: 255*256*256});
			this.gear3.arc(0, rootR - charClearance - textLineWidth*1.75, (rootR - charClearance) - 2.25 * textLineWidth, Math.PI / 2, -Math.PI / 2, true);
			this.gear3.arc(0, 0, textLineWidth/2, Math.PI / 2, -Math.PI / 2);
			this.gear3.arc(0, -rootR + charClearance + textLineWidth*1.75, (rootR - charClearance) - 2.25 * textLineWidth, Math.PI / 2, -Math.PI / 2, true);
			this.gear3.arc(0, -rootR + charClearance + textLineWidth/2, textLineWidth/2, Math.PI / 2, -Math.PI / 2);
			// this.gear3.arcTo(0, rootR - charClearance - textLineWidth, 0, textLineWidth / 2, (rootR - charClearance) - 2 * textLineWidth);
			this.gear3.endFill();
			this.gear3.beginFill(Colors.gearPin);
			this.gear3.drawCircle(0,0,textLineWidth / 3);
			this.gear3.endFill();
		}

		{ // E
			this.gearE.beginFill(Colors.gearCharacter);
			this.gearE.moveTo(0, -rootR + charClearance); // Correct.
			this.gearE.arc(0,0,rootR - charClearance, -Math.PI / 2, Math.PI / 2, true);
			this.gearE.arc(0, rootR - charClearance - textLineWidth/2, textLineWidth/2, Math.PI / 2, -Math.PI / 2, true);
			// // this.gearE.lineStyle({width: 3, color: 255*256*256});
			this.gearE.arc(0, rootR - charClearance - textLineWidth*1.75, (rootR - charClearance) - 2.25 * textLineWidth, Math.PI / 2, -Math.PI / 2);
			this.gearE.arc(0, 0, textLineWidth/2, Math.PI / 2, -Math.PI / 2, true);
			this.gearE.arc(0, -rootR + charClearance + textLineWidth*1.75, (rootR - charClearance) - 2.25 * textLineWidth, Math.PI / 2, -Math.PI / 2);
			this.gearE.arc(0, -rootR + charClearance + textLineWidth/2, textLineWidth/2, Math.PI / 2, -Math.PI / 2, true);
			this.gearE.endFill();
			this.gearE.beginFill(Colors.gearPin);
			this.gearE.drawCircle(0,0,textLineWidth / 3);
			this.gear3.endFill();
		}

		{ // Text
			this.text = new MultiStyleText("<g>Gear</g><3>3</3><e>Engine</e>",
			{
				"default": {
					fontFamily: "Arial",
					fontSize: "128px",
					fill: "#cccccc",
					align: "center"
				},
				"g": {
					//fill: "#ff8888"
				},
				"3": {
					fontSize: "180px",
					fill: "#4488ff"
				},
				"e": {
					//fill: "#efefef"
				}
			});
			this.text.position.y = -60;
			this.text.position.x = -this.text.width / 2;
			di.addChild(this.text);
		}

		this.displayObject.scale.x = 0.5;
		this.displayObject.scale.y = 0.5;
	}

	makeGear(gfx: Pixi.Graphics, color, rootR, rootP, nTeeth, dedendum, addendum){
		gfx.beginFill(color);
		//gearG.drawCircle(0,0,rootR);
		gfx.moveTo(rootR,0);
		let slantC = (1-rootP * 2) / 2
		for(let i = 0; i < nTeeth; i++){
			let x0 = Math.cos(Math.PI * 2 * i / nTeeth);
			let y0 = Math.sin(Math.PI * 2 * i / nTeeth);
			let x1 = Math.cos(Math.PI * 2 * ((i+rootP) / nTeeth));
			let y1 = Math.sin(Math.PI * 2 * ((i+rootP) / nTeeth));
			let x2 = Math.cos(Math.PI * 2 * ((i+rootP+slantC/2) / nTeeth));
			let y2 = Math.sin(Math.PI * 2 * ((i+rootP+slantC/2) / nTeeth));
			let x3 = Math.cos(Math.PI * 2 * ((i+rootP+slantC) / nTeeth));
			let y3 = Math.sin(Math.PI * 2 * ((i+rootP+slantC) / nTeeth));
			let x4 = Math.cos(Math.PI * 2 * ((i+rootP*2+slantC) / nTeeth));
			let y4 = Math.sin(Math.PI * 2 * ((i+rootP*2+slantC) / nTeeth));
			let x5 = Math.cos(Math.PI * 2 * ((i+rootP*2+slantC*1.5) / nTeeth));
			let y5 = Math.sin(Math.PI * 2 * ((i+rootP*2+slantC*1.5) / nTeeth));
			gfx.lineTo(x0 * rootR, y0 * rootR);
			gfx.lineTo(x1 * rootR, y1 * rootR);
			gfx.lineTo(x2 * (rootR + dedendum), y2 * (rootR + dedendum));
			gfx.lineTo(x3 * (rootR + dedendum + addendum), y3 * (rootR + dedendum + addendum));
			gfx.lineTo(x4 * (rootR + dedendum + addendum), y4 * (rootR + dedendum + addendum));
			gfx.lineTo(x5 * (rootR + dedendum), y5 * (rootR + dedendum));
		}
		gfx.endFill();
	}

	makePlanetary(gfx: Pixi.Graphics, color, rootR, rootP, nTeeth, dedendum, addendum){

	}

	drawUpdate(dt: number, time: number, frames: number): void{
		if(!this.smallMode){
			// Only rotate when not in small mode.
			let dr = dt;
			this.gearG.rotation -= dr;
			this.gear3.rotation -= dr;
			this.gearE.rotation -= dr;
			// this.planetary.rotation -= dt / 1000;
			this.driveGear.rotation += driveRatio * dr;
		}

		// TODO: add transition.
		if(this.smallMode){
			this.displayObject.position.set(-750, -400);
			this.targetScale = 0.1;
			this.targetX = -750;
			this.targetY = -400;
		}
		else{
			this.displayObject.position.set(0,0);
			this.targetScale = 0.5;
			this.targetX = 0;
			this.targetY = 0;
		}

		this.currentX += (this.targetX - this.currentX) * 0.1;
		this.currentY += (this.targetY - this.currentY) * 0.1;
		this.currentScale += (this.targetScale - this.currentScale) * 0.1;
		this.displayObject.scale.set(this.currentScale,this.currentScale);
		this.displayObject.position.set(this.currentX,this.currentY);
	}
}

export default G3eLogo;