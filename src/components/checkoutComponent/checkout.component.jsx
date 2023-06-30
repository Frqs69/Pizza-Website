import { Link } from "react-router-dom";
import { useContext } from "react";
import {
	OrderContext,
	OrderDispatchContext,
} from "../../assets/checkoutContext";

import OrderNav from "../orderNavComponent/orderNav.component";
import Button from "../buttonComponent/button.component";

import "./checkout.styles.scss";

export default function Checkout() {
	const orders = useContext(OrderContext);
	const dispatch = useContext(OrderDispatchContext);

	let summaryPrice = 0;

	orders.map((order) => (summaryPrice += order.price * order.quantity));

	return (
		<>
			<div className='checkoutComponent'></div>
			<div className='checkoutBox'>
				<OrderNav />
				<div className='checkoutList'>
					<h2>Your Order</h2>
					<ul>
						{orders.map((order) => (
							<li className='checkoutListItem'>
								<img src={order.img} className='pizzaImgCheckout' alt='' />
								<p className='count'>{order.quantity}x</p>
								<p className='product'>{order.name}</p>
								<p className='deleteButton'>X</p>
							</li>
						))}
					</ul>
					<div className='summaryBox'>
						<p className='summaryBox-title'>Summary:</p>
						<span className='summaryBox-value'>{summaryPrice}€</span>
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
