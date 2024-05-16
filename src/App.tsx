/* eslint-disable @typescript-eslint/no-unused-vars */

import { Analytics } from "@vercel/analytics/react";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
import { Route, Routes } from "react-router-dom";
import { AccessLogPage } from "./pages/accessLog";
import { AccessRequestPage } from "./pages/accessRequest";
import { QRView } from "./pages/qr";
import { useEffect, useState } from "react";
import { AdminView } from "./pages/admin";

interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>;
	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed";
		platform: string;
	}>;
	prompt(): Promise<void>;
}

const App = () => {
	const [deferredPrompt, setDeferredPrompt] =
		useState<BeforeInstallPromptEvent>();
	const userAgent = navigator.userAgent.toLowerCase();

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			event.preventDefault();
			setDeferredPrompt(event as BeforeInstallPromptEvent);
		});

		if (userAgent.includes("kakaotalk")) {
			location.href =
				"kakaotalk://web/openExternal?url=" +
				encodeURIComponent(window.location.toString());
		}
	}, [userAgent]);

	const installApp = () => {
		if (!deferredPrompt) {
			if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
				alert("iOS에서는 앱 설치가 지원되지 않습니다");
				return;
			}
			alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다");
			return;
		}

		deferredPrompt.prompt();
	};

	return (
		<div className=" fixed w-full h-full overflow-hidden">
			{!deferredPrompt ? (
				<Routes>
					<Route path="/" Component={Home} />
					<Route path="/qr" Component={QRView} />
					<Route path="/admin" Component={AdminView} />
					<Route path="/login" Component={Login} />
					<Route path="/register" Component={Register} />
					<Route path="/access-log" Component={AccessLogPage} />
					<Route
						path="/access-request"
						Component={AccessRequestPage}
					/>
				</Routes>
			) : (
				<div className=" w-full h-full flex items-center justify-center">
					<div className="border border-black px-10 py-5 rounded-lg bg-gray-200">
						<button onClick={installApp}>앱 설치하기</button>
					</div>
				</div>
			)}
			<Analytics />
		</div>
	);
};

export default App;
