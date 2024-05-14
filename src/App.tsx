/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";

const App = () => {
	return (
		<div className=" fixed w-full h-full overflow-hidden">
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
			</Routes>
			<Analytics />
		</div>
	);
};

export default App;
