import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageRoot from "./homePageRoot";
import ErrorPage from "./errorPage";
import OrderPage from "./orderPage";
import CheckoutPage from "./checkoutPage";
import "./App.scss";

import checkoutReducer from "./assets/checkoutReducer";
import { OrderContext, OrderDispatchContext } from "./assets/checkoutContext";
import { useReducer } from "react";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomePageRoot />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/order",
		element: <OrderPage />,
	},
	{
		path: "/checkout",
		element: <CheckoutPage />,
	},
]);

function App() {
	const [orders, dispatch] = useReducer(checkoutReducer, []);
	return (
		<OrderContext.Provider value={orders}>
			<OrderDispatchContext.Provider value={dispatch}>
				<RouterProvider router={router} />
			</OrderDispatchContext.Provider>
		</OrderContext.Provider>
	);
}

export default App;
