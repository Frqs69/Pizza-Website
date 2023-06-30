import { Link } from "react-router-dom";

import Button from "../buttonComponent/button.component";

import "./header.styles.scss";

export default function HeaderComponent() {
	return (
		<header className='headerSection'>
			<nav>
				<img src='/logo.svg' alt='logo' />
				<ul className='nav-links--desktop'>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#Product'>Product</a>
					</li>
					<li>
						<a href='#Promo'>Promo</a>
					</li>
					<li>
						<a href='#About'>About</a>
					</li>
					<li>
						<a href='#Contact'>Contact</a>
					</li>
				</ul>
			</nav>
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
