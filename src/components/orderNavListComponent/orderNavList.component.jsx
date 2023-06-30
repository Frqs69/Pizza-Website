import { Link } from "react-router-dom";
import Button from "../buttonComponent/button.component";
import "./orderNavList.styles.scss";

export default function OrderNavList({ orders }) {
	return (
		<div className='orderList'>
			<p className='orderListTitle'>Your Order</p>
			<ul>
				{orders.map((order) => (
					<li className='orderListItem'>
						<p className='count'>{order.quantity}x</p>
						<p className='product'>{order.name}</p>
						<p className='deleteButton'>X</p>
					</li>
				))}
			</ul>
			<Link to='/checkout'>
				<Button className='orderListButton'>Checkout</Button>
			</Link>
		</div>
	);
}
