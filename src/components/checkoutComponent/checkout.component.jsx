import { Link } from "react-router-dom";
import { useContext, useState } from "react";
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
	const [checkEmptyCart, setCheckEmptyCart] = useState(false);

	let summaryPrice = 0;

	orders.map((order) => (summaryPrice += order.price * order.quantity));

	const handleDelete = (el) => {
		dispatch({
			type: "removeOrder",
			name: el.name,
		});
	};

	const handleProceed = () => {
		if (orders.length === 0) {
			setCheckEmptyCart(true);
			return;
		}
	};

	return (
		<>
			<div className='checkoutComponent'></div>
			<div className='checkoutBox'>
				<OrderNav />
				<div className='checkoutList'>
					<h2>Your Order</h2>
					<ul>
						{orders.length !== 0 ? (
							orders.map((order) => (
								<li className='checkoutListItem'>
									<img src={order.img} className='pizzaImgCheckout' alt='' />
									<p className='count'>{order.quantity}x</p>
									<p className='product'>{order.name}</p>
									<p
										className='deleteButton'
										onClick={() => handleDelete(order)}>
										X
									</p>
								</li>
							))
						) : (
							<p className='placeholderCheckout'>Your cart is empty</p>
						)}
					</ul>
					<div className='summaryBox'>
						<p className='summaryBox-title'>Summary:</p>
						<span className='summaryBox-value'>{summaryPrice}€</span>
					</div>
					<div className='paymentButtonBox'>
						<Link to={"/order"}>
							<Button className='backButton'>Back</Button>
						</Link>
						<Button className='paymentButton' onClick={handleProceed}>
							Proceed Checkout
						</Button>
					</div>
					{checkEmptyCart && (
						<p className='emptyCartInfo'>
							*No pizza in your cart, please order some before payment
						</p>
					)}
				</div>
			</div>
		</>
	);
}
