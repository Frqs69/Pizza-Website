import "./orderNav.styles.scss";

export default function OrderNav() {
	return (
		<nav className='pizzaListNav'>
			<img src='/logo.svg' alt='logo' />
			<h2 className='pizzaList-title'>
				Delicious pizza is already almost at your door.
			</h2>
			<div className='imgBox'>
				<img className='shoppingCart' src='/cart.svg' alt='shopping cart' />
			</div>
		</nav>
	);
}
