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
	const [skiped, setSkiped] = useState<boolean>(false);
	const userAgent = navigator.userAgent.toLowerCase();

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (event) => {
			event.preventDefault();
			setDeferredPrompt(event as BeforeInstallPromptEvent);
		});

		if (localStorage.getItem("skip")) setSkiped(true);

		if (userAgent.includes("kakaotalk")) {
			location.href =
				"kakaotalk://web/openExternal?url=" +
				encodeURIComponent(window.location.toString());
		}
	}, [userAgent]);

	const installApp = () => {
		if (!deferredPrompt) {
			if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
				alert("iOS에서는 아래 지침을 따라 설치해주세요.");
				return;
			}

			alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다.");
			return;
		}

		deferredPrompt.prompt();
	};

	const skip = () => {
		setSkiped(true);
		localStorage.setItem("skip", "true");
	};

	return (
		<div
			className={
				skiped === true
					? "hidden"
					: " installApp w-full h-full bg-white"
			}
		>
			<TitleBar title="앱 설치 안내" />
			<div>
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
			<div className=" w-full flex justify-center items-center py-5">
				<div className="w-[95%] border-[1px] border-black" />
			</div>
			<div>
				<span className="flex items-center justify-center mb-3">
					아이폰 사용자는 아래 지시를 따라주세요.
				</span>
				<img src="ios.png" alt="" />
			</div>
			<div className=" w-full flex justify-center items-center py-5">
				<div className="w-[95%] border-[1px] border-black" />
			</div>
			<div>
				<span className="flex items-center justify-center mb-3">
					웹 버전을 이용하시려면 아래 버튼을 터치해주세요.
				</span>
				<div className="flex items-center justify-center">
					<div
						onClick={skip}
						className="border-[0.05rem] border-black px-14 py-4 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
					>
						스킵하기
					</div>
				</div>
			</div>
		</div>
	);
};
