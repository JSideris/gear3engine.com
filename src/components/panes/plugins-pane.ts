import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const pluginsPane = new FullscreenPageSection({
	alignment: "right",
	bgColor: 0x222288,
	caption: "Modular architecture.",
	content: dot.div(
		dot.p("Gear3Engine offers full support for building 2D and 3D visuals and physics, as well as non-WebGL apps (such as trivia).")
		.p("Isolated plugins make games light-weight by only packaging libraries needed for the game.")
		.p("Plugins work together intelligently and communicate with each other using events. The plugin interface makes development a breeze!")

	)
});

export default pluginsPane;