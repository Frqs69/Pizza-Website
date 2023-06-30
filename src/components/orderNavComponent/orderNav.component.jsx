import { useState } from "react";

import OrderNavList from "../orderNavListComponent/orderNavList.component";

import "./orderNav.styles.scss";

export default function OrderNav() {
	const [openOrderNavList, setOpenOrderNavList] = useState(false);

	const openNavList = () => setOpenOrderNavList(!openOrderNavList);

	return (
		<nav className='pizzaListNav' onClick={openNavList}>
			<img src='/logo.svg' alt='logo' />
			<h2 className='pizzaList-title'>
				Delicious pizza is already almost at your door.
			</h2>
			<div className='imgBox'>
				<img className='shoppingCart' src='/cart.svg' alt='shopping cart' />
				<p className='shoppingCartCount'>0</p>
				{openOrderNavList ? <OrderNavList /> : ""}
			</div>
		</nav>
	);
}
