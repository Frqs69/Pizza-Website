import { useState, useContext } from "react";
import { OrderContext } from "../../assets/checkoutContext";

import OrderNavList from "../orderNavListComponent/orderNavList.component";

import "./orderNav.styles.scss";

export default function OrderNav() {
	const orders = useContext(OrderContext);
	const [openOrderNavList, setOpenOrderNavList] = useState(false);

	const orderLength = orders.length;

	const openNavList = () => setOpenOrderNavList(!openOrderNavList);

	return (
		<nav className='pizzaListNav' onClick={openNavList}>
			<img src='/logo.svg' alt='logo' />
			<h2 className='pizzaList-title'>
				Delicious pizza is already almost at your door.
			</h2>
			<div className='imgBox'>
				<img className='shoppingCart' src='/cart.svg' alt='shopping cart' />
				<p className='shoppingCartCount'>{orderLength}</p>
				{openOrderNavList ? <OrderNavList orders={orders} /> : ""}
			</div>
		</nav>
	);
}
