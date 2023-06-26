import SvgBackground from "../SvgBackgroundComponent/svgBackground.component";
import "./sectionThree.styles.scss";

export default function SectionThree() {
	return (
		<section className='firstSection wrapper'>
			<SvgBackground />
			<h2>Statistics</h2>
			<p className='section-description'>
				Join thousands of satisfied pizza lovers who have experienced our
				top-quality pies and keep coming back for more!
			</p>
			<div className='thirdSection-Box'>
				<div className='box'>
					<p className='thirdSection-Box--title'>123</p>
					<p className='thirdSection-Box--text'>STORE</p>
				</div>
				<div className='box'>
					<p className='thirdSection-Box--title'>100</p>
					<p className='thirdSection-Box--text'>MENU</p>
				</div>
				<div className='box'>
					<p className='thirdSection-Box--title'>200</p>
					<p className='thirdSection-Box--text'>CHEF</p>
				</div>
			</div>
		</section>
	);
}
