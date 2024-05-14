/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {
		document.body.style.cssText = `position: fixed; width: 100%; height: 100%; overflow: hidden;`;
	});

	return (
		<>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
			</Routes>
			<Analytics />
		</>
	);
};

export default App;
