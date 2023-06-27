import "./footer.styles.scss";

export default function Footer() {
	return (
		<footer className='footer'>
			<div className='footerBox'>
				<div className='leftColumn'>
					<img src='/logo.svg' alt='' />
					<p className='leftColumn-description'>
						Unleashing Pizza's Irresistible Magic: Where Flavor, Craftsmanship,
						and Quality Converge for an Unforgettable Dining Experience.
					</p>
					<div className='mediaLinksBox'>
						<a className='mediaLink' href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 20 20'>
								<path
									fill='white'
									d='M13 10a3 3 0 1 1-6 0c0-.171.018-.338.049-.5H6v3.997c0 .278.225.503.503.503h6.995a.503.503 0 0 0 .502-.503V9.5h-1.049c.031.162.049.329.049.5zm-3 2a2 2 0 1 0-.001-4.001A2 2 0 0 0 10 12zm2.4-4.1h1.199a.301.301 0 0 0 .301-.3V6.401a.301.301 0 0 0-.301-.301H12.4a.301.301 0 0 0-.301.301V7.6c.001.165.136.3.301.3zM10 .4A9.6 9.6 0 0 0 .4 10a9.6 9.6 0 0 0 9.6 9.6a9.6 9.6 0 0 0 9.6-9.6A9.6 9.6 0 0 0 10 .4zm5 13.489C15 14.5 14.5 15 13.889 15H6.111C5.5 15 5 14.5 5 13.889V6.111C5 5.5 5.5 5 6.111 5h7.778C14.5 5 15 5.5 15 6.111v7.778z'
								/>
							</svg>
						</a>
						<a className='mediaLink' href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 24 24'>
								<g fill='none'>
									<g clip-path='url(#akarIconsFacebookFill0)'>
										<path
											fill='white'
											fill-rule='evenodd'
											d='M0 12.067C0 18.033 4.333 22.994 10 24v-8.667H7V12h3V9.333c0-3 1.933-4.666 4.667-4.666c.866 0 1.8.133 2.666.266V8H15.8c-1.467 0-1.8.733-1.8 1.667V12h3.2l-.533 3.333H14V24c5.667-1.006 10-5.966 10-11.933C24 5.43 18.6 0 12 0S0 5.43 0 12.067Z'
											clip-rule='evenodd'
										/>
									</g>
									<defs>
										<clipPath id='akarIconsFacebookFill0'>
											<path fill='#fff' d='M0 0h24v24H0z' />
										</clipPath>
									</defs>
								</g>
							</svg>
						</a>
						<a className='mediaLink' href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 14 14'>
								<path
									fill='white'
									d='M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76'
									class='cls-1'
								/>
							</svg>
						</a>
						<a className='mediaLink' href=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								width='40'
								height='40'
								viewBox='0 0 24 24'>
								<path
									fill='white'
									d='M12.001 2c5.523 0 10 4.477 10 10s-4.477 10-10 10a9.954 9.954 0 0 1-5.03-1.355L2.005 22l1.352-4.968A9.953 9.953 0 0 1 2.001 12c0-5.523 4.477-10 10-10ZM8.593 7.3l-.2.008a.961.961 0 0 0-.372.1a1.293 1.293 0 0 0-.294.228c-.12.113-.188.211-.261.306A2.73 2.73 0 0 0 6.9 9.62c.002.49.13.967.33 1.413c.409.902 1.082 1.857 1.97 2.742c.214.213.424.427.65.626a9.448 9.448 0 0 0 3.84 2.046l.568.087c.185.01.37-.004.556-.013a1.99 1.99 0 0 0 .833-.231a4.83 4.83 0 0 0 .383-.22s.043-.028.125-.09c.135-.1.218-.171.33-.288c.083-.086.155-.187.21-.302c.078-.163.156-.474.188-.733c.024-.198.017-.306.014-.373c-.004-.107-.093-.218-.19-.265l-.582-.261s-.87-.379-1.402-.621a.497.497 0 0 0-.176-.041a.482.482 0 0 0-.378.127c-.005-.002-.072.055-.795.931a.35.35 0 0 1-.368.13a1.43 1.43 0 0 1-.191-.066c-.124-.052-.167-.072-.252-.108a6.025 6.025 0 0 1-1.575-1.003c-.126-.11-.243-.23-.363-.346a6.297 6.297 0 0 1-1.02-1.268l-.059-.095a.923.923 0 0 1-.102-.205c-.038-.147.061-.265.061-.265s.243-.266.356-.41c.11-.14.203-.276.263-.373c.118-.19.155-.385.093-.536c-.28-.684-.57-1.365-.868-2.041c-.059-.134-.234-.23-.393-.249c-.054-.006-.108-.012-.162-.016a3.385 3.385 0 0 0-.403.004l.201-.008Z'
								/>
							</svg>
						</a>
					</div>
				</div>
				<div className='rightColumns'>
					<div className='column'>
						<p className='column-title'>About</p>
						<ul className='column-ul'>
							<li>
								<a href='#'>History</a>
							</li>
							<li>
								<a href='#'>Our Team</a>
							</li>
							<li>
								<a href='#'>Brand Guidelines</a>
							</li>
							<li>
								<a href='#'>Term & Condition</a>
							</li>
							<li>
								<a href='#'>Privacy Policy</a>
							</li>
						</ul>
					</div>
					<div className='column'>
						<p className='column-title'>Services</p>
						<ul className='column-ul'>
							<li>
								<a href='#'>How to Order</a>
							</li>
							<li>
								<a href='#'>Our Products</a>
							</li>
							<li>
								<a href='#'>Order Status</a>
							</li>
							<li>
								<a href='#'>Promo</a>
							</li>
							<li>
								<a href='#'>Payment Method</a>
							</li>
						</ul>
					</div>
					<div className='column'>
						<p className='column-title'>Other</p>
						<ul className='column-ul'>
							<li>
								<a href='#'>Contact Us</a>
							</li>
							<li>
								<a href='#'>Help</a>
							</li>
							<li>
								<a href='#'>Privacy</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	);
}
