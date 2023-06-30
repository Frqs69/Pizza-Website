import { useContext, useReducer } from "react";

import { pizzaData } from "./../../assets/pizzaData";
import OrderNav from "../orderNavComponent/orderNav.component";
import Button from "../buttonComponent/button.component";
import {
	OrderContext,
	OrderDispatchContext,
} from "../../assets/checkoutContext";

import "./pizzaList.styles.scss";
let nextId = 0;

export default function PizzaList() {
	const orders = useContext(OrderContext);
	const dispatch = useContext(OrderDispatchContext);
	console.log(orders);

	const handleAddOrder = (el) => {
		console.log(el);
		dispatch({
			type: "addOrder",
			id: nextId++,
			name: el.name,
			price: el.price,
			img: el.img
		});
	};

	return (
		<>
			<div className='pizzaListDesktop'></div>
			<div className='pizzaList'>
				<OrderNav />
				<div className='desktopGrid'>
					{pizzaData.map((el) => (
						<div className='pizzaBox' key={el.id}>
							<img className='pizzaImg' src={el.img} alt={el.name} />
							<h3 className='pizzaName'>{el.name}</h3>
							<p className='pizzaDescription'>{el.description}</p>
							<div className=''>
								<p className='pizzaPrice'>Price {el.price}€</p>
								<Button
									onClick={() => handleAddOrder(el)}
									className='pizzaAddToCartBtn'>
									Add to cart
								</Button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
