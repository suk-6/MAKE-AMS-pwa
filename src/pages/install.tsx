import { useEffect, useState } from "react";
import { TitleBar } from "../components/titleBar";

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
		<div className=" installApp w-full h-full bg-white">
			<TitleBar title="앱 설치 안내" />
			<div className="mb-10">
				<span className="flex items-center justify-center mb-3">
					안드로이드는 아래 버튼을 터치하여 앱을 설치해주세요.
				</span>
				<div className="flex items-center justify-center">
					<div
						onClick={installApp}
						className="border-[0.05rem] border-black px-14 py-4 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
					>
						앱 설치하기
					</div>
				</div>
			</div>
			<div>
				<span className="flex items-center justify-center">
					아이폰 사용자는 아래 지시를 따라주세요.
				</span>
			</div>
		</div>
	);
};
