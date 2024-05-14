/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

const App = () => {
	return (
		<>
			<Home />
			<Login />
			<Register />
			<Analytics />
		</>
	);
};

export default App;
