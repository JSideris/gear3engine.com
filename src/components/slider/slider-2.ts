import dot, { DotComponent, IDotCss, IDotElement } from "dothtml";

export default class Slider extends DotComponent{

	dragMode: boolean = false;

	builder(...args: any[]): IDotElement {
		return dot.div(
			dot.div().class("knob").onMouseDown(e=>{
				this.mouseDown();
			}).onMouseUp(e=>{
				this.mouseUp();
			}).ref("knob")
		).class("slider-bar")
	}
	style(css: IDotCss): void {
		css(".slider-bar")
			.position("relative")
			.widthP(100)
			.height(10)
			.borderRadius(5)
			.opacity(0.5)
			.backgroundColor("white")
			.border("1px solid gray");
		
		css(".knob")
			.position("absolute")
			.width(30)
			.height(30)
			.top(-10)
			.borderRadius(10)
			.backgroundColor(0x4488FF)
			.cursor("pointer")
	}

	mouseMoveEvent = (e:MouseEvent) => {
		dot.css(this.$refs.knob)
			.left(e.offsetX);
	};

	mouseDown(){
		if(!this.dragMode){
			this.dragMode = true;
			window.addEventListener("mousemove", this.mouseMoveEvent);
		}
	}
	mouseUp(){
		if(!this.dragMode){
			this.dragMode = true;
			window.removeEventListener("mousemove", this.mouseMoveEvent);
		}
	}
}