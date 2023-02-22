import dot, { DotComponent, IDotCss, IDotElement } from "dothtml";
import { MIN_TEXT_BLOCK_HEIGHT, PANE_HEIGHT } from "../util/constants";

export type SectionInfo = {
	caption?: string;
	content?: IDotElement;
	alignment?: "left"|"right"|"center";
	bgColor?: number;
}

export default class FullscreenPageSection extends DotComponent{
	sectionProps: SectionInfo;
	props = {
		closed: false
	}

	constructor(sectionInfo: SectionInfo){
		super(sectionInfo);
		this.sectionProps = sectionInfo;
	}
	builder(sectionInfo: SectionInfo): IDotElement {
		return dot.div(
			dot.when(!!sectionInfo.caption || !!sectionInfo.content, ()=>
				dot.div(
					dot.div(()=>this.props.closed ? (this.sectionProps?.alignment == "left" ? ">" : "<") : (this.sectionProps?.alignment == "left" ? "<" : ">")).class("minimize-button")
						.onClick(()=>{
							this.props.closed = !this.props.closed;
							dot.css(this.$refs["popout"]).widthP(this.props.closed ? 0 : 50)

							if(this.props.closed){
								dot.css(this.$refs["header"]).opacity(0)
								dot.css(this.$refs["content"]).opacity(0)
								setTimeout(()=>{
	
									dot.css(this.$refs["header"]).visibility("hidden");
									dot.css(this.$refs["content"]).visibility("hidden");
								}, 500);
							}
							else{
								setTimeout(()=>{

									dot.css(this.$refs["header"]).visibility("visible").opacity(1);
									dot.css(this.$refs["content"]).visibility("visible").opacity(1);
								}, 500);
							}
						})
					.when(!!sectionInfo.caption, ()=>dot.div(sectionInfo.caption).class("header").ref("header"))
					.when(!!sectionInfo.content, ()=>dot.div(sectionInfo.content).class("content").ref("content"))
				).class("stylized-inner-container").ref("popout")
			)
				
		).class("section-container");
	}

	ready(): void {
		this.setOrientation(Math.random()*2-1,Math.random()*2-1);
	}

	style(css: IDotCss): void {

		let r,g,b;
		r = g = b = 0;
		if((this.sectionProps?.bgColor)){
			r = this.sectionProps.bgColor >> 16;
			g = (this.sectionProps.bgColor >> 8) & 0xFF;
			b = (this.sectionProps.bgColor) & 0xFF;
		}

		
		css(".section-container")
			.overflow("hidden")
			.height(this.sectionProps.alignment == "center" ? PANE_HEIGHT / 2 : PANE_HEIGHT)
			.paddingTop(50)
			.fontSize(20);//.paddingTop(PANE_HEIGHT / 2 - MIN_TEXT_BLOCK_HEIGHT / 2); // .backgroundColor(0,0,100,0.25)
		

		css(".stylized-inner-container")
			.float(this.sectionProps?.alignment ?? "left")
			.position("relative")
			.color(0xEEEEFF)
			.backgroundColor(r,g,b,0.75)
			.widthP(this.sectionProps?.alignment == "center" ? 80 : 50)
			.minHeight(MIN_TEXT_BLOCK_HEIGHT)
			.maxHeight(MIN_TEXT_BLOCK_HEIGHT * 1.5)
			.borderRadius(10)
			.paddingTop(60)
			.paddingBottom(60)
			.transition("width 1s")
			.backdropFilter(f => f.blur(10));	

		css(".header, .content")
			.marginLeft(this.sectionProps?.alignment == "center" ? 200 : 60)
			.marginRight(this.sectionProps?.alignment == "center" ? 200 : 60)

		if(this.sectionProps?.alignment != "center"){
			css(".stylized-inner-container")
			.float(this.sectionProps?.alignment ?? "left");
		}
		else{
			css(".stylized-inner-container")
				.transform(t=>t.translateP(10))
		}
		
		css(".minimize-button")
			.position("absolute")
			.height(50).width(50)
			.borderRadius(10)
			.backgroundColor(r,g,b,0.75)
			.lineHeight(50)
			.textAlign("center")
			.fontSize(40)
			.cursor("pointer");

		if(this.sectionProps.alignment == "left") css(".minimize-button").right(-20)
		else if(this.sectionProps.alignment == "right") css(".minimize-button").left(-20)
		else css(".minimize-button").visibility("hidden")
		
		//.backgroundColor(Math.random() * 256*256*256);
		css(".header").fontSize(64).transition("opacity 0.5s");
		css(".content").transition("opacity 0.5s");

		// css(".stylized-inner-container").transform(t=>t.perspectivePx(1000).rotateYDeg(this.props.x * 10 + (this.sectionProps.alignment == "left" ? -5 : 5)).rotateXDeg(-this.props.y * 100));
	}

	setOrientation(xP, yP){
		let popout = this.$refs["popout"];
		if(popout && this.sectionProps.alignment != "center"){
			// console.log(yP);
			let rawYRot = xP * 10 + ({left:5,right:-5,center:0}[this.sectionProps?.alignment]);
			let absYp = Math.abs(yP);
			dot.css(popout).transform(t=>t.translateX({left:50,right:-50,center:0}[this.sectionProps?.alignment]).perspectivePx(1000).rotateYDeg(rawYRot * (1-absYp) + 10 * absYp).rotateXDeg(- yP * 20));
			// this.css(".stylized-inner-container").transform(t=>t.perspectivePx(1000).rotateYDeg(xP * 10 + (this.sectionProps.alignment == "left" ? -5 : 5)).rotateXDeg(yP * 100));
		}
	}
}