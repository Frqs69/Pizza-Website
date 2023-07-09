import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { OrderContext } from "../../assets/checkoutContext";

import OrderNavList from "../orderNavListComponent/orderNavList.component";

import useComponentVisible from "../../assets/useComponentVisible";

import "./orderNav.styles.scss";

export default function OrderNav() {
	const orders = useContext(OrderContext);
	const windowSize = useRef(window.innerWidth);

	const { ref, isComponentVisible, setIsComponentVisible } =
		useComponentVisible(false);

	let orderLength = 0;

	orders.map((order) => (orderLength += order.quantity));

	return (
		<nav className='pizzaListNav'>
			{windowSize.current > 768 ? (
				<>
					<Link to='/'>
						<img src='/logo.png' alt='logo' />
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
				</>
			) : (
				<>
					<div className='mobilePosition'>
						<Link to='/'>
							<img src='/logo.png' alt='logo' />
						</Link>
						<div className='imgBox' onClick={() => setIsComponentVisible(true)}>
							<img
								className='shoppingCart'
								src='/cart.svg'
								alt='shopping cart'
							/>
							<p className='shoppingCartCount'>{orderLength}</p>
							<div ref={ref}>
								{isComponentVisible ? <OrderNavList orders={orders} /> : ""}
							</div>
						</div>
					</div>
					<h2 className='pizzaList-title'>
						Delicious pizza is already almost at your door.
					</h2>
				</>
			)}
		</nav>
	);
}
