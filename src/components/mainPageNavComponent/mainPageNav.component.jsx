import { useRef, useState } from "react";
import "./mainPageNav.styles.scss";

export default function MainPageNav() {
	const [openNav, setOpenNav] = useState(false);
	const windowSize = useRef(window.innerWidth);

	const handleOpen = () => {
		setOpenNav(!openNav);
	};

	return (
		<>
			{windowSize.current > 768 ? (
				<nav className='navDesktop'>
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
			) : (
				<nav className='navMobile'>
					<img src='/logo.svg' alt='logo' />
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='50'
						height='50'
						viewBox='0 0 24 24'
						onClick={handleOpen}>
						<path
							fill='none'
							stroke='currentColor'
							stroke-linecap='round'
							stroke-linejoin='round'
							stroke-width='2'
							d='M3 6h18M3 12h18M3 18h18'
						/>
					</svg>

					<ul className={`nav-links--mobile ${openNav ? "active" : ""}`}>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							width='50'
							height='50'
							viewBox='0 0 24 24'
							className='closeMenuBtn'
							onClick={handleOpen}>
							<path
								fill='white'
								d='M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z'
							/>
						</svg>
						<li onClick={handleOpen}>
							<a href='#'>Home</a>
						</li>
						<li onClick={handleOpen}>
							<a href='#Product'>Product</a>
						</li>
						<li onClick={handleOpen}>
							<a href='#Promo'>Promo</a>
						</li>
						<li onClick={handleOpen}>
							<a href='#About'>About</a>
						</li>
						<li onClick={handleOpen}>
							<a href='#Contact'>Contact</a>
						</li>
					</ul>
				</nav>
			)}
		</>
	);
}
