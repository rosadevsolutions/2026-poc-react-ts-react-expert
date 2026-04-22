import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "@/components/ui/root-layout";
import NotFound from "@/pages/not-found";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{ path: "/", element: <h1>Home</h1> },
			{ path: "/receitas", element: <h1>Receitas</h1> },
			{ path: "/novas-receitas", element: <h1>Novas Receitas</h1> },
			{ path: "/receitas-favoritas", element: <h1>Receitas Favoritas</h1> },
		],
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

export function Routes() {
	return <RouterProvider router={router} />;
}
