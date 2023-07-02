import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../assets/checkoutContext";

import OrderNavList from "../orderNavListComponent/orderNavList.component";

import useComponentVisible from "../../assets/useComponentVisible";

import "./orderNav.styles.scss";

export default function OrderNav() {
	const orders = useContext(OrderContext);

	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	let orderLength = 0;

	orders.map((order) => (orderLength += order.quantity));

	return (
		<nav className='pizzaListNav'>
			<Link to='/'>
				<img src='/logo.svg' alt='logo' />
			</Link>

			<h2 className='pizzaList-title'>
				Delicious pizza is already almost at your door.
			</h2>
			<div className='imgBox' onClick={() => setIsComponentVisible(true)}>
				<img className='shoppingCart' src='/cart.svg' alt='shopping cart' />
				<p className='shoppingCartCount'>{orderLength}</p>
				<div ref={ref}>
					{isComponentVisible ? <OrderNavList orders={orders} /> : ""}
				</div>
			</div>
		</nav>
	);
}
