import { Link } from "react-router-dom";

import OrderNav from "../orderNavComponent/orderNav.component";
import Button from "../buttonComponent/button.component";

import "./checkout.styles.scss";

export default function Checkout() {
	return (
		<>
			<div className='checkoutComponent'></div>
			<div className='checkoutBox'>
				<OrderNav />
				<div className='checkoutList'>
					<h2>Your Order</h2>
					<ul>
						<li className='checkoutListItem'>
							<img src='/HeroImage.png' className='pizzaImgCheckout' alt='' />
							<p className='count'>1x</p>
							<p className='product'>Margerita</p>
							<p className='deleteButton'>X</p>
						</li>
						<li className='checkoutListItem'>
							<img src='/HeroImage.png' className='pizzaImgCheckout' alt='' />
							<p className='count'>1x</p>
							<p className='product'>Veggie supreme chicken</p>
							<p className='deleteButton'>X</p>
						</li>
						<li className='checkoutListItem'>
							<img src='/HeroImage.png' className='pizzaImgCheckout' alt='' />
							<p className='count'>1x</p>
							<p className='product'>Veggie supreme chicken</p>
							<p className='deleteButton'>X</p>
						</li>
						<li className='checkoutListItem'>
							<img src='/HeroImage.png' className='pizzaImgCheckout' alt='' />
							<p className='count'>1x</p>
							<p className='product'>Veggie supreme chicken</p>
							<p className='deleteButton'>X</p>
						</li>
					</ul>
					<div className='summaryBox'>
						<p className='summaryBox-title'>Summary:</p>
						<span className='summaryBox-value'>20$</span>
					</div>
					<div className='paymentButtonBox'>
						<Link to={"/order"}>
							<Button className='backButton'>Back</Button>
						</Link>
						<Button className='paymentButton'>Proceed Checkout</Button>
					</div>
				</div>
			</div>
		</>
	);
}
