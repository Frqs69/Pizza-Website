import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrderDispatchContext } from "../../assets/checkoutContext";
import Button from "../buttonComponent/button.component";
import "./orderNavList.styles.scss";

export default function OrderNavList({ orders }) {
	const dispatch = useContext(OrderDispatchContext);

	const handleDelete = (el) => {
		dispatch({
			type: "removeOrder",
			name: el.name,
		});
	};

	return (
		<div className='orderList'>
			{console.log("orders", orders.length)}
			<p className='orderListTitle'>Your Order</p>
			<ul>
				{orders.length !== 0 ? (
					orders.map((order) => (
						<li className='orderListItem' key={order.id}>
							<p className='count'>{order.quantity}x</p>
							<p className='product'>{order.name}</p>
							<p
								className='deleteButtonNavList'
								onClick={() => handleDelete(order)}>
								X
							</p>
						</li>
					))
				) : (
					<p className='placeholderList'>Cart is empty</p>
				)}
			</ul>
			<Link to='/checkout'>
				<Button className='orderListButton'>Checkout</Button>
			</Link>
		</div>
	);
}
