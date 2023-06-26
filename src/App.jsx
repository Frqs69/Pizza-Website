import HeaderComponent from "./components/headerComponent/header.component";
import SectionOne from "./components/sectionOneComponent/sectionOne.component";
import SectionTwo from "./components/sectionTwoComponent/sectionTwo.component";
import SectionThree from "./components/sectionThreeComponent/sectionThree.component";
import SvgBackground from "./components/SvgBackgroundComponent/svgBackground.component";
import "./App.scss";

function App() {
	return (
		<>
			<HeaderComponent />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
		</>
	);
}

export default App;
