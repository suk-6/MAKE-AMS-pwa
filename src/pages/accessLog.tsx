// React 훅인 useEffect와 useState를 가져옵니다.
import { useEffect, useState } from "react";

// ListView 컴포넌트를 가져옵니다.
import { ListView } from "../components/listView";

// TitleBar 컴포넌트를 가져옵니다.
import { TitleBar } from "../components/titleBar";

// 출입 기록을 가져오는 함수를 가져옵니다.
import { getAccessLogs } from "../services/admin";

// AccessView 컴포넌트와 AccessViewProps 인터페이스를 가져옵니다.
import { AccessView, AccessViewProps } from "../components/accessView";

// AccessLogPage 컴포넌트를 정의합니다. 출입 기록 페이지를 표시하는 컴포넌트입니다.
export const AccessLogPage = () => {
    // accessLogs 상태 변수를 선언하고 초기값을 빈 배열로 설정합니다. AccessViewProps 타입의 배열을 저장합니다.
    const [accessLogs, setAccessLogs] = useState<AccessViewProps[]>([]);

    // useEffect 훅을 사용하여 컴포넌트가 처음 마운트될 때 출입 기록을 가져옵니다.
    useEffect(() => {
        // getAccessLogs 함수를 호출하여 출입 기록을 비동기적으로 가져옵니다.
        getAccessLogs().then(setAccessLogs); // 가져온 데이터를 accessLogs 상태 변수에 설정합니다.
    }, []); // 빈 배열을 두 번째 인자로 전달하여 useEffect 훅이 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

    return (
        <div>
            {/* TitleBar 컴포넌트를 화면 상단에 고정하여 표시하고 제목을 "출입 기록"으로 설정합니다. */}
            <div className="fixed bg-white w-full">
                <TitleBar title="출입 기록" />
            </div>
            {/* ListView 컴포넌트를 사용하여 출입 기록 목록을 표시합니다. */}
            <ListView
                // accessLogs 배열의 각 요소를 AccessView 컴포넌트로 변환하여 items 속성에 전달합니다.
                items={accessLogs.map((log) => (
                    <AccessView
                        studentId={log.studentId} // AccessView 컴포넌트에 학번 정보를 전달합니다.
                        name={log.name}             // AccessView 컴포넌트에 이름 정보를 전달합니다.
                        timestamp={log.timestamp}   // AccessView 컴포넌트에 타임스탬프 정보를 전달합니다.
                    />
                ))}
            />
        </div>
    );
};
