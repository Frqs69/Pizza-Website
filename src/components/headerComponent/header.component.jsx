import "./header.styles.scss";

export default function HeaderComponent() {
	return (
		<header className='headerSection'>
			<nav>
				<img src='/logo.svg' alt='logo' />
				<ul className='nav-links'>
					<li>Home</li>
					<li>Product</li>
					<li>Promo</li>
					<li>About</li>
					<li>Contact</li>
				</ul>
			</nav>
			<div className='headerBox'>
				<h1>Best Pizza</h1>
				<p className='headerBox-text'>
					Welcome to Pizzaku, where every slice tells a story of passion,
					flavor, and authentic Italian craftsmanship. 🍕
				</p>
				<button>ORDER NOW</button>
			</div>
		</header>
	);
}
