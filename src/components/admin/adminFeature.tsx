// "../../services/admin" 모듈에서 lockDoor, restrictDoor, unlockDoor 함수를 가져옵니다. 이 함수들은 각각 문을 잠그고, QR 코드로 출입을 제한하고, 문을 여는 기능을 수행할 것으로 예상됩니다.
import { lockDoor, restrictDoor, unlockDoor } from "../../services/admin";

// "../homeButton" 모듈에서 HomeButton 컴포넌트를 가져옵니다. 이 컴포넌트는 버튼 UI를 담당할 것으로 예상됩니다.
import { HomeButton } from "../homeButton";

// "../titleBar" 모듈에서 TitleBar 컴포넌트를 가져옵니다. 이 컴포넌트는 페이지 상단의 제목 표시줄 UI를 담당할 것으로 예상됩니다.
import { TitleBar } from "../titleBar";

// AdminFeature 컴포넌트를 정의합니다. 이 컴포넌트는 관리자 기능을 제공하는 UI를 나타냅니다.
export const AdminFeature = () => {
    return (
        // 높이가 52(h-52)인 div 컨테이너를 생성합니다.
        <div className="h-52">
            {/* TitleBar 컴포넌트를 렌더링하고 제목을 "관리자"로 설정합니다. */}
            <TitleBar title="관리자" />

            {/* 세로로 2개의 행(grid-rows-2)을 가지고 각 행 사이에 간격(gap-y-3)을 둔 grid 컨테이너를 생성합니다. 또한, 위쪽에 패딩(pt-5)을 추가합니다. */}
            <div className="grid grid-rows-2 h-full gap-y-3 pt-5">

                {/* 첫 번째 행에 3개의 열(grid-cols-3)을 가지는 grid 컨테이너를 생성합니다. */}
                <div className="grid grid-cols-3">

                    {/* HomeButton 컴포넌트를 렌더링합니다. */}
                    <HomeButton
                        // 버튼 텍스트를 "출입 제한"으로 설정합니다.
                        text="출입 제한"
                        // 버튼 배경색을 빨간색으로 설정합니다.
                        color="bg-red1"
                        // 버튼 클릭 시 실행될 함수를 정의합니다.
                        func={() => {
                            // lockDoor 함수를 호출하여 문을 잠급니다.
                            lockDoor().then((res) => {
                                // lockDoor 함수 호출 결과가 성공이면(res가 true이면) 알림 메시지를 표시하고 메인 페이지("/")로 이동합니다.
                                if (res)
                                    alert("출입 제한 상태로 변경되었습니다.");
                                location.href = "/";
                            });
                        }}
                    />

                    {/* HomeButton 컴포넌트를 렌더링합니다. (QR 출입 버튼) */}
                    <HomeButton
                        text="QR 출입"
                        color="bg-green1"
                        func={() => {
                            restrictDoor().then((res) => {
                                if (res)
                                    alert("QR 출입 상태로 변경되었습니다.");
                                location.href = "/";
                            });
                        }}
                    />

                    {/* HomeButton 컴포넌트를 렌더링합니다. (자유 출입 버튼) */}
                    <HomeButton
                        text="자유 출입"
                        color="bg-blue1"
                        func={() => {
                            unlockDoor().then((res) => {
                                if (res)
                                    alert("자유 출입 상태로 변경되었습니다.");
                                location.href = "/";
                            });
                        }}
                    />
                </div>

                {/* 두 번째 행에 2개의 열(grid-cols-2)을 가지는 grid 컨테이너를 생성합니다. */}
                <div className="grid grid-cols-2">

                    {/* HomeButton 컴포넌트를 렌더링합니다. (가입 승인 버튼) */}
                    <HomeButton
                        text="가입 승인"
                        color="bg-gray-300"
                        func={() => {
                            location.href = "/access-request";
                        }}
                    />

                    {/* HomeButton 컴포넌트를 렌더링합니다. (출입 기록 버튼) */}
                    <HomeButton
                        text="출입 기록"
                        color="bg-gray-300"
                        func={() => {
                            location.href = "/access-log";
                        }}
                    />
                </div>
            </div>
        </div>
    );
};
