import HeaderComponent from "./components/headerComponent/header.component";
import SectionOne from "./components/sectionOneComponent/sectionOne.component";
import SectionTwo from "./components/sectionTwoComponent/sectionTwo.component";
import SectionThree from "./components/sectionThreeComponent/sectionThree.component";
import SectionFour from "./components/sectionFourComponent/sectionFour.component";
import SectionFive from "./components/sectionFiveComponent/sectionFive.component";
import SectionSix from "./components/sectionSixComponent/sectionSix.component";
import Footer from "./components/footerComponent/footer.component";

export default function HomePageRoot() {
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
