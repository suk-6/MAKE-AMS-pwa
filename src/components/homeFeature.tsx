// QR 코드 생성 라이브러리를 가져옵니다.
import QRCode from "react-qr-code";

// QR 코드 인증 서비스 함수를 가져옵니다.
import { checkQR } from "../services/auth";

// 페이지 이동을 위한 useNavigate 훅을 가져옵니다.
import { useNavigate } from "react-router-dom";

// useEffect 훅을 가져옵니다.
import { useEffect } from "react";

// 문 상태를 나타내는 DoorStatus 열거형을 가져옵니다.
import { DoorStatus } from "../misc/doorStatus";

// lockStatusBoxProps 인터페이스를 정의합니다.
interface lockStatusBoxProps {
    status: DoorStatus | undefined; // 문 상태 (LOCKED, RESTRICTED, UNLOCKED 또는 undefined)
    isAdmin: boolean; // 사용자가 관리자인지 여부
}

// HomeFeature 컴포넌트를 정의합니다. 홈 화면에 표시되는 QR 코드 및 문 상태 정보를 담당합니다.
export const HomeFeature = ({ status, isAdmin }: lockStatusBoxProps) => {
    const navigate = useNavigate(); // useNavigate 훅을 사용하여 페이지 이동 함수를 가져옵니다.

    // 컴포넌트가 마운트될 때 실행되는 useEffect 훅입니다.
    useEffect(() => {
        try {
            // QR 코드 유효성 검사를 수행합니다.
            checkQR().then((res) => {
                if (!res) { // QR 코드가 유효하지 않으면
                    if (confirm("유효하지 않은 QR입니다. 다시 로그인해주세요.")) { // 확인 메시지를 표시하고 확인 버튼을 누르면
                        localStorage.removeItem("code"); // 로컬 스토리지에서 QR 코드 정보를 제거하고
                        navigate("/login"); // 로그인 페이지로 이동합니다.
                    }
                }
            });
        } catch (e) {
            // QR 코드 검증 중 오류 발생 시 알림 메시지를 표시하고 로그인 페이지로 이동합니다.
            return alert("오류가 발생했습니다. 다시 로그인해주세요.");
        }
        // 의존성 배열에 navigate 함수를 넣어 컴포넌트가 다시 렌더링될 때 useEffect 훅이 다시 실행되지 않도록 합니다.
    }, [navigate]); 

    // 문 상태에 따라 표시될 박스의 클래스와 텍스트를 설정합니다.
    let boxClass = "w-5 h-5 rounded-full"; // 기본 박스 스타일
    let boxText = "";

    switch (status) {
        case DoorStatus.LOCKED: // 문이 잠긴 상태
            boxClass = `${boxClass} bg-red1`; // 빨간색 배경
            boxText = "출입 제한 상태";
            break;

        case DoorStatus.RESTRICTED: // QR 코드 출입 상태
            boxClass = `${boxClass} bg-green1`; // 초록색 배경
            boxText = "QR 출입 상태";
            break;

        case DoorStatus.UNLOCKED: // 자유 출입 상태
            boxClass = `${boxClass} bg-blue1`; // 파란색 배경
            boxText = "자유 출입 상태";
            break;

        default: // 문 상태 정보가 없는 경우
            boxClass = `${boxClass} bg-gray-200`; // 회색 배경
            boxText = "로딩 중...";
            break;
    }

    return (
        // 전체 컨테이너 div
        <div className="w-full h-[60%] flex justify-center items-center">
            {/* QR 코드 및 상태 정보 컨테이너 */}
            <div className=" px-2 py-5 my-5 bg-gradient-24 from-gr1 to-gr2 shadow-2xl drop-shadow-2xl rounded-3xl flex flex-col items-center gap-6">
                <div className="w-full h-full flex items-center justify-center pt-4">
                    {/* QR 코드 컨테이너 */}
                    <div
                        className={` w-[70%] h-[70%] p-4 bg-white rounded-2xl flex items-center justify-center ${
                            status === DoorStatus.LOCKED && // 문이 잠겨있고
                            !isAdmin && // 사용자가 관리자가 아니면
                            "blur-md opacity-75" // QR 코드를 흐리게 표시합니다.
                        }`}
                    >
                        {/* QR 코드 생성 */}
                        <QRCode 
                            className={" w-full h-full "} 
                            value={`(${localStorage.getItem("code")})` || ""} // 로컬 스토리지에서 QR 코드 값을 가져옵니다.
                            size={256}
                            bgColor="#FFFFFF"
                        />
                    </div>
                </div>
                {/* 문 상태 정보 표시 */}
                <div className="w-48 h-14 bg-black1 mb-8 mt-auto rounded-xl shadow-2xl text-white flex flex-row justify-start items-center">
                    <div className="pl-3 w-fit">
                        <div className={boxClass} /> {/* 문 상태에 따라 배경색이 변경되는 박스 */}
                    </div>
                    <div className=" w-full text-center text-xl font-medium pr-3">
                        {boxText} {/* 문 상태 텍스트 */}
                    </div>
                </div>
            </div>
        </div>
    );
};
