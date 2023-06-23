import heroImage from "/HeroImage.png";
import logo from "/logo.svg";
import "./App.scss";

function App() {
	return (
		<>
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
					<p>
						Welcome to Pizzaku, where every slice tells a story of passion,
						flavor, and authentic Italian craftsmanship. 🍕
					</p>
					<button>ORDER NOW</button>
				</div>
			</header>
		</>
	);
}

export default App;
