// React 훅인 useEffect와 useState를 가져옵니다.
import { useEffect, useState } from "react";

// ListView 컴포넌트를 가져옵니다.
import { ListView } from "../components/listView";

// TitleBar 컴포넌트를 가져옵니다.
import { TitleBar } from "../components/titleBar";

// 가입 승인 대기 중인 사용자 목록을 가져오는 함수를 가져옵니다.
import { getUsersPendingSignup } from "../services/admin";

// AccessRequestView 컴포넌트와 AccessRequestViewProps 인터페이스를 가져옵니다.
import { AccessRequestView, AccessRequestViewProps } from "../components/accessRequestView";

// AccessRequestPage 컴포넌트를 정의합니다. 가입 승인 요청 목록을 보여주는 페이지입니다.
export const AccessRequestPage = () => {
    // accessRequests 상태 변수를 선언하고 초기값을 빈 배열로 설정합니다. AccessRequestViewProps 타입의 배열을 저장합니다.
    const [accessRequests, setRequests] = useState<AccessRequestViewProps[]>([]);

    // useEffect 훅을 사용하여 컴포넌트가 처음 마운트될 때 가입 승인 대기 중인 사용자 목록을 가져옵니다.
    useEffect(() => {
        // getUsersPendingSignup 함수를 호출하여 가입 승인 대기 중인 사용자 목록을 비동기적으로 가져옵니다.
        getUsersPendingSignup().then(setRequests); // 가져온 데이터를 accessRequests 상태 변수에 설정합니다.
    }, []); // 빈 배열을 두 번째 인자로 전달하여 useEffect 훅이 컴포넌트가 처음 마운트될 때만 실행되도록 합니다.

    return (
        <div>
            {/* TitleBar 컴포넌트를 화면 상단에 고정하여 표시하고 제목을 "가입 승인"으로 설정합니다. */}
            <div className="fixed bg-white w-full">
                <TitleBar title="가입 승인" />
            </div>
            {/* ListView 컴포넌트를 사용하여 가입 승인 요청 목록을 표시합니다. */}
            <ListView
                // accessRequests 배열의 각 요소를 AccessRequestView 컴포넌트로 변환하여 items 속성에 전달합니다.
                items={accessRequests.map((log) => (
                    <AccessRequestView
                        studentId={log.studentId} // AccessRequestView 컴포넌트에 학번 정보를 전달합니다.
                        name={log.name}             // AccessRequestView 컴포넌트에 이름 정보를 전달합니다.
                        id={log.id}                 // AccessRequestView 컴포넌트에 ID 정보를 전달합니다.
                    />
                ))}
            />
        </div>
    );
};
