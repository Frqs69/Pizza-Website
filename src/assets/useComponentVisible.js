import { useState, useEffect, useRef } from "react";

// function which hide element after click outside it on our page
// useful on dropdown list to hide it after click somewhere else

export default function useComponentVisible(initialIsVisible) {
	const [isComponentVisible, setIsComponentVisible] =
		useState(initialIsVisible);
	const ref = useRef(null);

	// console.log(ref.current);

	const handleClickOutside = (event) => {
		if (ref.current && !ref.current.contains(event.target)) {
			setIsComponentVisible(false);
		}
	};

	// adding listener on document when function is called
	// and remove it after component hides
	useEffect(() => {
		document.addEventListener("click", handleClickOutside, true);
		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, []);

	return { ref, isComponentVisible, setIsComponentVisible };
}

// USAGE
// in file where we want to use this function need to import
// !import useComponentVisible
// then in component we need to destructure it
// !const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(true);
// and we can use it like this
//  !      <div ref={ref}>
//	!		    {isComponentVisible ? <OrderNavList orders={orders} /> : ""}
//	!	    </div>
