import HeaderComponent from "./components/headerComponent/header.component";
import SectionOne from "./components/sectionOneComponent/sectionOne.component";
import SectionTwo from "./components/sectionTwoComponent/sectionTwo.component";
import SectionThree from "./components/sectionThreeComponent/sectionThree.component";
import SectionFour from "./components/sectionFourComponent/sectionFour.component";
import SectionFive from "./components/sectionFiveComponent/sectionFive.component";
import SvgBackground from "./components/SvgBackgroundComponent/svgBackground.component";
import "./App.scss";

function App() {
	return (
		<>
			<HeaderComponent />
			<SectionOne />
			<SectionTwo />
			<SectionThree />
			<SectionFour />
			<SectionFive />
		</>
	);
}

export default App;
