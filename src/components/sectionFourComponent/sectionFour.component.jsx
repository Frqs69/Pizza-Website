import { Link } from "react-router-dom";

import Button from "../buttonComponent/button.component";

import "./sectionFour.styles.scss";

export default function SectionFour() {
	return (
		<section className='fourthSection'>
			<div className='fourthSection-rightBox'>
				<h2 className='fourthSection-title'>Discount 20%</h2>
				<p className='fourthSection-description'>
					Sit back, relax, and let us bring the flavors of our delectable pizzas
					right to your doorstep at an unbeatable value. Order now and savor the
					convenience and savings that await you!
				</p>
				<Link to={`/order`}>
					<Button className='fourthSection-button'>ORDER NOW</Button>
				</Link>
			</div>
		</section>
	);
}
