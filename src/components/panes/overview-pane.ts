import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const overviewPane = new FullscreenPageSection({
	alignment: "left",
	bgColor: 0x882222,
	caption: "Built for web first.",
	content: dot.div(
		dot.p("Gear3Engine uses the latest cutting-edge technology available in modern web browsers. It is is designed for creating real-time MMOs, physics simulations, first-person shooters, top-down games, and more.")
		.p("Turn single-player games into multiplayer games with minimal effort and zero code duplication. Games are fully simulated (including physics), frame by frame, on the server and all clients. The engine intelligently takes care of all game object concurrency. Selecting objects and fields to sync is done with a single line of code, and all data transmission is highly optimized.")

	)
});

export default overviewPane;