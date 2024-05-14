/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";

const App = () => {
	return (
		<>
			<Home />
			<Login />
			<Analytics />
		</>
	);
};

export default App;
