import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const controlPane = new FullscreenPageSection({
	alignment: "right",
	bgColor: 0x662266,
	caption: "Full gamepad support in your browser (try it!).",
	content: dot.div(
		dot.p("The control plugin allows developers to specify configurable key and button bindings, with full gamepad support via the W3C Gamepad API.")
		.p("Bindings are set with minimal hassle, and controls (from any source) are fed into any controllabe game object. Controllable objects can be controlled by mouse and keyboard, gamepads, a mobile device, AI, or over the network through the same interface.")

	)
});

export default controlPane;