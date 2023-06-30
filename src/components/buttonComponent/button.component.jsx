import "./button.styles.scss";

export default function Button({ children, ...otherProps }) {
	let classNames;
	if (otherProps.className) classNames = otherProps.className;
	return (
		<button className={`buttonComponent ${classNames}`}>{children}</button>
	);
}
