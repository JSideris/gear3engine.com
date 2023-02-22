import dot from "dothtml";
import FullscreenPageSection from "../fullscreen-page-section";

const medicalPane = new FullscreenPageSection({
	alignment: "center",
	bgColor: 0x444455,
	caption: "Learn more. Get involved.",
	content: dot.div(
		dot
			.p("Gear3Engine is a closed-source game engine written in TypeScript, and is currently pre-alpha. The goal is to provide a light-weight framework leveraging the latest-available web technology to build powerful web and mobile games, simulations, and interconnected applications.")
			.p("Check back occasionally for new information, udpdates, demos, and samples.")
			.p("To learn more, make requests and suggestions, or to contribute, email the devolper at josh.sideris@gmail.com.")

	)
});

export default medicalPane;