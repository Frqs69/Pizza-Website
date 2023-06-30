export default function checkoutReducer(orders, action) {
	switch (action.type) {
		case "addOrder":
			const existingOrderItem = orders.find(
				(order) => order.name === action.name
			);
			console.log("action", action);
			console.log("existingObject", existingOrderItem);
			console.log("orders", orders);

			if (existingOrderItem) {
				return orders.map((order) =>
					order.name === action.name
						? { ...order, quantity: order.quantity + 1 }
						: order
				);
			}
			{
				return [
					...orders,
					{
						id: action.id,
						name: action.name,
						price: action.price,
						img: action.img,
						quantity: 1,
					},
				];
			}
		case "removeOrder": {
			return orders.filter((order) => order.name !== action.name);
		}
		default: {
			throw new Error("Unknown action type" + action.type);
		}
	}
}
