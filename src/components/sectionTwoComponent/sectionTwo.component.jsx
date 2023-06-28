import { Link } from "react-router-dom";

import "./sectionTwo.styles.scss";

export default function SectionTwo() {
	return (
		<section className='secondSection' id='Promo'>
			<div className='secondSection-rightBox'>
				<h2 className='secondSection-title'>Free Delivery</h2>
				<p className='secondSection-description'>
					Delight in the taste of convenience with our lightning-fast and
					complimentary delivery service. Order your favorite pizza and
					experience the joy of prompt doorstep indulgence.
				</p>
				<Link to={`/order`}>
					<button className='secondSection-button'>ORDER NOW</button>
				</Link>
			</div>
		</section>
	);
}
