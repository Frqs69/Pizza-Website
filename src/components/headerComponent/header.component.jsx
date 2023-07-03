import { Link } from "react-router-dom";

import Button from "../buttonComponent/button.component";
import MainPageNav from "../mainPageNavComponent/mainPageNav.component";

import "./header.styles.scss";

export default function HeaderComponent() {
	return (
		<header className='headerSection'>
			<MainPageNav />

			<div className='headerBox'>
				<h1>Best Pizza</h1>
				<p className='headerBox-text'>
					Welcome to Pizzaku, where every slice tells a story of passion,
					flavor, and authentic Italian craftsmanship. 🍕
				</p>
				<Link to={`/order`}>
					<Button>ORDER NOW</Button>
				</Link>
			</div>
		</header>
	);
}
