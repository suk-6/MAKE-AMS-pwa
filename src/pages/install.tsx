// React 훅인 useEffect와 useState를 가져옵니다.
import { useEffect, useState } from "react";

// TitleBar 컴포넌트를 가져옵니다.
import { TitleBar } from "../components/titleBar";

// iOS 설치 가이드 이미지를 가져옵니다.
import iosInstallGuide from "../assets/ios.webp";

// BeforeInstallPromptEvent 인터페이스를 정의합니다.
interface BeforeInstallPromptEvent extends Event {
    // 설치 가능한 플랫폼 목록을 나타내는 문자열 배열입니다.
    readonly platforms: Array<string>; 
    // 사용자의 선택 결과를 나타내는 Promise 객체입니다. outcome은 "accepted" 또는 "dismissed" 값을 가집니다.
    readonly userChoice: Promise<{
        outcome: "accepted" | "dismissed"; 
        platform: string; 
    }>;
    // 앱 설치 프롬프트를 표시하는 함수입니다.
    prompt(): Promise<void>; 
}

// InstallPage 컴포넌트를 정의합니다. 앱 설치를 안내하는 페이지입니다.
export const InstallPage = () => {
    // beforeinstallprompt 이벤트가 발생했을 때 받은 이벤트 객체를 저장하는 상태 변수입니다.
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent>();

    // 사용자가 앱 설치를 건너뛰었는지 여부를 저장하는 상태 변수입니다.
    const [skiped, setSkiped] = useState<boolean>(false); 

    // 사용자 에이전트 정보를 소문자로 변환하여 저장합니다.
    const userAgent = navigator.userAgent.toLowerCase();

    // useEffect 훅을 사용하여 컴포넌트가 마운트될 때 특정 작업을 수행하고, 언마운트될 때 정리 작업을 수행합니다.
    useEffect(() => {
        // beforeinstallprompt 이벤트 리스너를 등록합니다.
        window.addEventListener("beforeinstallprompt", (event) => {
            // 기본 동작을 막고 이벤트 객체를 deferredPrompt 상태 변수에 저장합니다.
            event.preventDefault(); 
            setDeferredPrompt(event as BeforeInstallPromptEvent); 
        });

        // 로컬 스토리지에 skip 항목이 있으면 skiped 상태를 true로 설정합니다.
        if (localStorage.getItem("skip")) setSkiped(true); 

        // 사용자 에이전트가 카카오톡인 경우 카카오톡 외부 브라우저 열기 기능을 사용하여 현재 페이지를 엽니다.
        if (userAgent.includes("kakaotalk")) {
            location.href = "kakaotalk://web/openExternal?url=" + encodeURIComponent(window.location.toString());
        }

        // 컴포넌트가 언마운트될 때 beforeinstallprompt 이벤트 리스너를 제거합니다.
        return () => {
            window.removeEventListener("beforeinstallprompt", () => {}); 
        };
    }, [userAgent]); // userAgent 값이 변경될 때마다 useEffect 훅이 다시 실행됩니다.

    // 앱 설치 함수입니다.
    const installApp = () => {
        // deferredPrompt가 없으면 (beforeinstallprompt 이벤트가 발생하지 않았거나 이미 처리된 경우)
        if (!deferredPrompt) {
            // iOS 기기인 경우 iOS 설치 안내 메시지를 표시합니다.
            if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
                alert("iOS에서는 아래 지침을 따라 설치해주세요.");
                return;
            }
            // 그 외에는 이미 설치되었거나 설치할 수 없는 환경이라는 메시지를 표시합니다.
            alert("이미 앱이 설치되어 있거나 앱을 설치할 수 없는 환경입니다.");
            return;
        }

        // 앱 설치 프롬프트를 표시합니다.
        deferredPrompt.prompt(); 
    };

    // 앱 설치를 건너뛰는 함수입니다.
    const skip = () => {
        // 사용자에게 3번 확인 메시지를 표시하고 모두 확인하면 skiped 상태를 true로 설정하고 로컬 스토리지에 skip 항목을 추가합니다.
        if (confirm("정말 웹 버전을 이용하시겠습니까?")) {
            if (confirm("웬만하면 앱 설치가 좋을텐데요?")) {
                if (confirm("정말 웹으로..?")) {
                    setSkiped(true);
                    localStorage.setItem("skip", "true");
                }
            }
        }
    };

    return (
        // 앱 설치 안내 페이지 컨테이너 div 요소입니다. skiped 상태가 true이면 숨겨집니다.
        <div
            className={
                skiped === true
                    ? "hidden" // 숨김 처리
                    : " installApp w-full h-full bg-white fixed top-0 left-0 z-50 overflow-y-auto overflow-x-hidden" // 표시
            }
        >
            {/* 제목 표시줄 */}
            <TitleBar title="앱 설치 안내" />

            {/* 안드로이드 설치 안내 */}
            <div className="pt-4">
                <span className="flex items-center justify-center mb-3">
                    안드로이드는 아래 버튼을 터치하여 앱을 설치해주세요.
                </span>
                <div className="flex items-center justify-center">
                    <div
                        onClick={installApp} // 앱 설치 버튼
                        className="border-[0.05rem] border-black px-14 py-4 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                        앱 설치하기
                    </div>
                </div>
            </div>

            {/* 구분선 */}
            <div className=" w-full flex justify-center items-center py-5">
                <div className="w-[95%] border-[1px] border-black" />
            </div>

            {/* iOS 설치 안내 */}
            <div>
                <span className="flex items-center justify-center mb-3">
                    아이폰 사용자는 아래 지시를 따라주세요.
                </span>
                <img src={iosInstallGuide} alt="" /> {/* iOS 설치 가이드 이미지 */}
            </div>

            {/* 구분선 */}
            <div className=" w-full flex justify-center items-center py-5">
                <div className="w-[95%] border-[1px] border-black" />
            </div>

            {/* 웹 버전 이용 안내 */}
            <div>
                <span className="flex items-center justify-center mb-3">
                    웹 버전을 이용하시려면 아래 버튼을 터치해주세요.
                </span>
                <div className="flex items-center justify-center">
                    <div
                        onClick={skip} // 웹 버전 이용 버튼
                        className="border-[0.05rem] border-black px-14 py-4 rounded-lg bg-gray-200 hover:bg-gray-300 cursor-pointer"
                    >
                        웹 버전 이용
                    </div>
                </div>
            </div>
        </div>
    );
};
