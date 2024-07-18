// React 훅인 useEffect와 useState를 가져옵니다.
import { useEffect, useState } from "react";

// 최근 접근 기록을 가져오는 함수를 가져옵니다.
import { getRecentAccess } from "../services/auth";

// MoreInfo 컴포넌트를 정의합니다. 사용자의 최근 접근 기록을 표시하는 컴포넌트입니다.
export const MoreInfo = () => {
    // recentAccess 상태 변수를 선언하고 초기값을 undefined로 설정합니다.
    // { username: string; time: number } 타입 또는 undefined 값을 가질 수 있습니다.
    const [recentAccess, setRecentAccess] = useState<
        { username: string; time: number } | undefined
    >(undefined);

    // 날짜 및 시간을 한국어 형식으로 표시하기 위한 포맷 함수를 생성합니다.
    const timeFormat = new Intl.DateTimeFormat("ko", {
        dateStyle: "medium", // 날짜 스타일을 "2024. 7. 18." 형식으로 설정합니다.
        timeStyle: "medium", // 시간 스타일을 "오후 3:51:00" 형식으로 설정합니다.
    }).format;

    // useEffect 훅을 사용하여 컴포넌트가 처음 렌더링될 때 최근 접근 기록을 가져옵니다.
    useEffect(() => {
        // getRecentAccess 함수를 호출하여 최근 접근 기록을 비동기적으로 가져옵니다.
        getRecentAccess().then((data) => {
            // 가져온 데이터를 recentAccess 상태 변수에 설정합니다.
            setRecentAccess(data);
        });
        // 빈 배열([])을 두 번째 인자로 전달하여 useEffect 훅이 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.
    }, []);

    return (
        // 화면 중앙에 표시되는 컨테이너 div 요소입니다.
        <div className="w-full flex justify-center items-start">
            {/* 최근 접근 기록 내용을 표시하는 div 요소입니다. */}
            <div className=" flex flex-col gap-y-2 pt-10 w-[90%]">
                <div className="flex flex-col justify-end text-gray-600">
                    {/* 사용자 이름과 함께 "최근 출입" 텍스트를 표시합니다. */}
                    <div className=" font-semibold text-lg">
                        {recentAccess && `${recentAccess.username}님 최근 출입`}
                    </div>
                    {/* 최근 접근 시간 또는 "최근 출입 기록이 없습니다." 메시지를 표시합니다. */}
                    <div>
                        {recentAccess === undefined
                            ? "최근 출입 기록이 없습니다."
                            : timeFormat(new Date(recentAccess.time))}
                    </div>
                </div>
                {/* 구분선 div 요소입니다. */}
                <div className="w-full h-[0.1rem] bg-gray-300" />
            </div>
        </div>
    );
};
