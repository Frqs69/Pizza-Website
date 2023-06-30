import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageRoot from "./homePageRoot";
import ErrorPage from "./errorPage";
import OrderPage from "./orderPage";
import CheckoutPage from "./checkoutPage";
import "./App.scss";

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
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
