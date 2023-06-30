import { useState, useContext } from "react";
import { OrderContext } from "../../assets/checkoutContext";

import OrderNavList from "../orderNavListComponent/orderNavList.component";

import "./orderNav.styles.scss";

export default function OrderNav() {
	const orders = useContext(OrderContext);
	const [openOrderNavList, setOpenOrderNavList] = useState(false);

	let orderLength = 0;

	orders.map((order) => (orderLength += order.quantity));

	const openNavList = () => setOpenOrderNavList(!openOrderNavList);

	return (
		<nav className='pizzaListNav'>
			<img src='/logo.svg' alt='logo' />
			<h2 className='pizzaList-title'>
				Delicious pizza is already almost at your door.
			</h2>
			<div className='imgBox' onClick={openNavList}>
				<img className='shoppingCart' src='/cart.svg' alt='shopping cart' />
				<p className='shoppingCartCount'>{orderLength}</p>
				{openOrderNavList ? <OrderNavList orders={orders} /> : ""}
			</div>
		</nav>
	);
}
