/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { AccessLogPage } from "./pages/accessLog";
import { AccessRequestPage } from "./pages/accessRequest";
import { QRView } from "./pages/qr";
import { useEffect } from "react";

const App = () => {
	useEffect(() => {}, []);

	return (
		<div className=" fixed w-full h-full overflow-hidden">
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/qr" Component={QRView} />
				<Route path="/login" Component={Login} />
				<Route path="/register" Component={Register} />
				<Route path="/access-log" Component={AccessLogPage} />
				<Route path="/access-request" Component={AccessRequestPage} />
			</Routes>
			<Analytics />
		</div>
	);
};

export default App;
