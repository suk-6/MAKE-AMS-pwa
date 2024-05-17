import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
	readonly platforms: Array<string>;
	readonly userChoice: Promise<{
		outcome: "accepted" | "dismissed";
		platform: string;
	}>;
	prompt(): Promise<void>;
}

export const InstallPage = () => {
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
		<div className=" installApp w-full h-full flex items-center justify-center">
			<div
				onClick={installApp}
				className="border border-black px-10 py-5 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
			>
				앱 설치하기
			</div>
		</div>
	);
};
