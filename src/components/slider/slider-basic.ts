import dot, { DotComponent, IDotElement } from "dothtml";


export default class SliderBasic extends DotComponent{
	builder(...args: any[]): IDotElement {
		return dot.div(
			dot.input().type("range").min(0).max(1000).value(500).style(
				dot.css.widthP(100)
				.backgroundColor(0xffffff)
				.outline("none" as any)
			)
			.onInput(e=>{
				let v = Number((e.target as HTMLInputElement).value);
				dot.css("#container-3d").widthP(100 - v / 10);
				// canvas3dPlugin.mainCamera.resize();
			})
		).id("slider-container").style(
			dot.css.position("fixed")
				.left(30)
				.right(30)
				.bottom(60)
				.zIndex(2)
		);
	}
}