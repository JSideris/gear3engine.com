import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const aiPane = new FullscreenPageSection({
	alignment: "left",
	bgColor: 0x228822,
	caption: "Powerful AI out of the box.",
	content: dot.div(
		dot
			.p("Gear3Engine comes loaded with useful AI algorithms, including pathfinding, collision avoidance, and active learning.")
			.p("The AI plugin works with the physics plugin to automatically build A* graphs for most simulations.")
			.p("Custom behavior can be built using the included behavior tree API.")

	)
});

export default aiPane;