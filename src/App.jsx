import HeaderComponent from "./components/headerComponent/header.component";
import SectionOne from "./components/sectionOneComponent/sectionOne.component";
import SectionTwo from "./components/sectionTwoComponent/sectionTwo.component";
import SectionThree from "./components/sectionThreeComponent/sectionThree.component";
import SectionFour from "./components/sectionFourComponent/sectionFour.component";
import SectionFive from "./components/sectionFiveComponent/sectionFive.component";
import SectionSix from "./components/sectionSixComponent/sectionSix.component";
import Footer from "./components/footerComponent/footer.component";
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
			<SectionSix />
			<Footer />
		</>
	);
}

export default App;
