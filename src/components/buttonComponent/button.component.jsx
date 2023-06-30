import "./button.styles.scss";

export default function Button({ children, onClick, ...otherProps }) {
	let classNames;
	if (otherProps.className) classNames = otherProps.className;
	return (
		<button onClick={onClick} className={`buttonComponent ${classNames}`}>
			{children}
		</button>
	);
}
