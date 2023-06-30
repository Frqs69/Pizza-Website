import { Link } from "react-router-dom";

import Button from "../buttonComponent/button.component";

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
					<Button className='secondSection-button'>ORDER NOW</Button>
				</Link>
			</div>
		</section>
	);
}
