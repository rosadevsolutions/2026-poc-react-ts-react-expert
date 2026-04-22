import RootLayout from "@/components/ui/root-layout";
import { createBrowserRouter, RouterProvider } from "react-router";

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
]);

export function Routes() {
	return <RouterProvider router={router} />;
}
