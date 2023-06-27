import SvgBackground from "../SvgBackgroundComponent/svgBackground.component";
import "./sectionSix.styles.scss";

export default function SectionSix() {
	return (
		<section className='sixthSection wrapperSixthSection' id='Contact'>
			<h2 className='sixthSection-title'>Subscribe</h2>
			<p className='sixthSection-description'>
				Be in the know! Subscribe to our newsletter for exclusive pizza updates,
				special offers, and more. Join now and never miss a slice of the action!
			</p>
			<form className='subscribeForm'>
				<input
					className='subscribeInput'
					type='text'
					placeholder='Your Email'
				/>
			</form>
			<SvgBackground />
		</section>
	);
}
