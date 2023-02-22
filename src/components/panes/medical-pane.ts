import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const medicalPane = new FullscreenPageSection({
	alignment: "left",
	bgColor: 0x226666,
	caption: "Build more than games.",
	content: dot.div(
		dot.p("Gear3Engine \"gamifies\" the development of advanced interactive web applications. It's approach to rendering, object lifecycle management, interconnectivity, and data syncronization allows you to easily develop next-generation websites.")

	)
});

export default medicalPane;