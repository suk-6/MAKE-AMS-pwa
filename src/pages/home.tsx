// 필요한 컴포넌트, 서비스, 아이콘, 로고 이미지 및 훅을 가져옵니다.
import { HomeFeature } from "../components/homeFeature"; 
import { checkAdmin } from "../services/auth"; 
import { useEffect, useState } from "react";
import { getLockStatus } from "../services/admin";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings, MdRefresh } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import homeLogo from "../assets/homeLogo.svg";
import { MoreInfo } from "../components/moreInfo";

// Home 컴포넌트를 정의합니다. 메인 화면을 나타내며 QR 코드와 문 상태 정보를 보여주고 관리자 기능으로 이동할 수 있는 버튼 등을 제공합니다.
const Home = () => {
    // 만약 로컬 스토리지에 code 값이 없다면, 로그인 페이지로 이동합니다.
    if (!localStorage.getItem("code")) document.location.href = "/login";

    // isAdmin 상태 변수를 선언하고 초기값을 false로 설정합니다.
    // 사용자가 관리자인지 여부를 나타냅니다.
    const [isAdmin, setIsAdmin] = useState(false);

    // lockStatus 상태 변수를 선언하고 초기값을 undefined로 설정합니다.
    // 현재 문의 상태를 나타냅니다.
    const [lockStatus, setLockStatus] = useState(undefined);

    // useNavigate 훅을 사용하여 페이지 이동 함수를 가져옵니다.
    const navigator = useNavigate();

    // 컴포넌트가 마운트될 때 실행되는 useEffect 훅입니다.
    useEffect(() => {
        // checkAdmin 함수를 호출하여 사용자가 관리자인지 비동기적으로 확인합니다.
        checkAdmin().then((result) => {
            setIsAdmin(result); // 확인 결과를 isAdmin 상태에 업데이트합니다.
        });

        // getLockStatus 함수를 호출하여 현재 문의 상태를 비동기적으로 가져옵니다.
        getLockStatus().then((status) => {
            setLockStatus(status.status); // 가져온 문 상태를 lockStatus 상태에 업데이트합니다.
        });

        // 의존성 배열을 비워두어 컴포넌트가 처음 마운트될 때만 useEffect 훅이 실행되도록 합니다.
    }, []);

    return (
        // 전체 화면을 차지하는 컨테이너 div 요소입니다.
        <div className="fixed w-full h-full bg-white">
            {/* 상단 여백을 위한 빈 div 요소입니다. */}
            <div className="h-[3%]" />

            {/* 로고와 메뉴 버튼이 있는 상단 바 */}
            <div className="w-full flex flex-row">
                {/* 로고 영역 */}
                <div className="flex flex-row pl-4 items-center gap-x-2">
                    <img src={homeLogo} alt="site logo" className="w-7 h-7" />
                    <span className=" text-2xl font-bold">MAKE@AMS</span>
                </div>

                {/* 메뉴 버튼 영역 */}
                <div className="flex flex-row ml-auto mr-4 gap-x-3">
                    {isAdmin && ( // 사용자가 관리자일 때만 관리자 버튼을 표시합니다.
                        <MdAdminPanelSettings // 관리자 설정 아이콘
                            className="w-7 h-7 " 
                            onClick={() => navigator("/admin")} // 클릭 시 관리자 페이지로 이동합니다.
                        />
                    )}
                    <MdRefresh // 새로고침 아이콘
                        className="w-7 h-7"
                        onClick={() => window.location.reload()} // 클릭 시 페이지를 새로고침합니다.
                    />
                    <BiLogOut // 로그아웃 아이콘
                        className="w-7 h-7"
                        onClick={() => {
                            // 로그아웃 확인 메시지를 표시하고 확인 버튼을 누르면 로컬 스토리지에서 정보를 삭제하고 로그인 페이지로 이동합니다.
                            if (confirm("로그아웃 하시겠습니까?")) {
                                localStorage.removeItem("code");
                                localStorage.removeItem("skip");
                                return navigator("/login");
                            }
                        }}
                    />
                </div>
            </div>
            <div className="h-[3%]" />

            {/* QR 코드 및 문 상태 정보 컴포넌트 */}
            <HomeFeature status={lockStatus} isAdmin={isAdmin} /> 

            {/* 추가 정보 컴포넌트 */}
            <MoreInfo /> 
        </div>
    );
};

export default Home; // Home 컴포넌트를 내보냅니다.
