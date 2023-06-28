import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePageRoot from "./homePageRoot";
import ErrorPage from "./errorPage";
import OrderPage from "./orderPage";
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
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
