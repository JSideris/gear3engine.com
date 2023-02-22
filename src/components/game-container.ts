import dot, { DotComponent, IDotElement } from "dothtml";
import SliderBasic from "./slider/slider-basic";


export default class GameContainer extends DotComponent{
	builder(): IDotElement {
		return dot.div(
			dot.div(
				dot.div().id("container-2d").style(
					dot.css.position("absolute")
						.heightP(100)
						.widthP(100)
						.left(0)
				)
				.div().id("container-3d").style(
					dot.css.heightP(100)
						.overflow("hidden")
						.position("absolute")
						.right(0)
						.widthP(100) // Needs to have 100% starting width.
						// .marginP(50)
				)
			).id("canvases").style(
				dot.css
					.position("fixed")
					.widthP(100)
					.heightP(100)
					.zIndex(-1)
			)
			// .h(new SliderBasic())
		)
	}
}