import SvgBackground from "../SvgBackgroundComponent/svgBackground.component";
import "./sectionOne.styles.scss";

export default function SectionOne() {
	return (
		<section className='firstSection wrapper' id='Product'>
			<SvgBackground />
			<h2 className='firstSection-title'>Popular Menu</h2>
			<p className='firstSection-description'>
				Step into a world of culinary delight as we transport your taste buds to
				the vibrant streets of Naples, Italy.
			</p>
			<div className='firstSection-Box'>
				<div className='firstSection-Box--element'>
					<img
						className='firstSection-Box--img'
						src='/firstSectionOne.png'
						alt='slice of pizza'
					/>
					<h3 className='firstSection-Box--title'>From Farm to Table</h3>
					<p className='firstSection-Box--text'>
						Crafted with passion, our pizzas are a symphony of flavors, using
						only the freshest ingredients for an extraordinary taste sensation.
					</p>
				</div>
				<div className='firstSection-Box--element'>
					<img
						className='firstSection-Box--img'
						src='/firstSectionTwo.png'
						alt='slice of pizza'
					/>
					<h3 className='firstSection-Box--title'>Crafted to Perfection</h3>
					<p className='firstSection-Box--text'>
						Experience pizza perfection with our artisanal pies, meticulously
						made using top-tier ingredients, delivering an authentic Italian
						feast.
					</p>
				</div>
				<div className='firstSection-Box--element'>
					<img
						className='firstSection-Box--img'
						src='/firstSectionThree.png'
						alt='slice of pizza'
					/>
					<h3 className='firstSection-Box--title'>
						Tradition Meets Excellence
					</h3>
					<p className='firstSection-Box--text'>
						Indulge in pizza perfection, where each bite showcases the artistry
						of our culinary craftsmen, combining the finest ingredients for an
						unmatched dining delight.
					</p>
				</div>
			</div>
		</section>
	);
}
