import { pizzaData } from "./../../assets/pizzaData";
import OrderNav from "../orderNavComponent/orderNav.component";

import "./pizzaList.styles.scss";

export default function PizzaList() {
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
								<button className='pizzaAddToCartBtn'>Add to cart</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
}
