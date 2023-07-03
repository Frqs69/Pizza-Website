import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import "./carousel.styles.scss";
export const EmblaCarousel = ({ children }) => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
	useEffect(() => {
		if (emblaApi) {
			console.log(emblaApi.slideNodes());
		}
	}, [emblaApi]);

	return (
		<div className='embla' ref={emblaRef}>
			<div className='embla__container'>{children}</div>
		</div>
	);
};
