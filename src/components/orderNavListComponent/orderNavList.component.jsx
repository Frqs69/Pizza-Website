import { Link } from "react-router-dom";
import Button from "../buttonComponent/button.component";
import "./orderNavList.styles.scss";

export default function OrderNavList() {
	return (
		<div className='orderList'>
			<p className='orderListTitle'>Your Order</p>
			<ul>
				<li className='orderListItem'>
					<p className='count'>1x</p>
					<p className='product'>Margerita</p>
					<p className='deleteButton'>X</p>
				</li>
				<li className='orderListItem'>
					<p className='count'>1x</p>
					<p className='product'>Veggie supreme chicken</p>
					<p className='deleteButton'>X</p>
				</li>
				<li className='orderListItem'>
					<p className='count'>1x</p>
					<p className='product'>Veggie supreme chicken</p>
					<p className='deleteButton'>X</p>
				</li>
				<li className='orderListItem'>
					<p className='count'>1x</p>
					<p className='product'>Veggie supreme chicken</p>
					<p className='deleteButton'>X</p>
				</li>
			</ul>
			<Link to='/checkout'>
				<Button className='orderListButton'>Checkout</Button>
			</Link>
		</div>
	);
}
