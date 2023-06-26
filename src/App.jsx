import HeaderComponent from "./components/headerComponent/header.component";
import SectionOne from "./components/sectionOneComponent/sectionOne.component";
import SectionTwo from "./components/sectionTwoComponent/sectionTwo.component";
import SvgBackground from "./components/SvgBackgroundComponent/svgBackground.component";
import "./App.scss";

function App() {
	return (
		<>
			<HeaderComponent />
			<SectionOne />
			<SectionTwo />
			<section className='sectionThree'>
				<SvgBackground />
				<h2>Statistics</h2>
				<p>
					Join thousands of satisfied pizza lovers who have experienced our
					top-quality pies and keep coming back for more!
				</p>
				<div>
					<div className='box'>
						<p>123</p>
						<p>STORE</p>
					</div>
					<div className='box'>
						<p>100</p>
						<p>MENU</p>
					</div>
					<div className='box'>
						<p>200</p>
						<p>CHEF</p>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
