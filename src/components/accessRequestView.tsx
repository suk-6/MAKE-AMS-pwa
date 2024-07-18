// ../services/admin 모듈에서 사용자 승인 관련 함수들을 가져옵니다.
import { approveAdmin, approveUser, rejectUser } from "../services/admin";

// AccessRequestView 컴포넌트의 속성(props) 타입을 정의합니다.
export interface AccessRequestViewProps {
    studentId: string; // 학번
    name: string; // 이름
    id: string; // 아이디
}

// AccessRequestView 컴포넌트를 정의합니다. 이 컴포넌트는 접근 요청을 보낸 사용자 정보와 승인/거절 버튼을 표시합니다.
export const AccessRequestView = ({ studentId, name, id }: AccessRequestViewProps) => (
    <div className="p-5 border-b border-gray-200 flex flex-row">

        {/* 사용자 정보 영역 */}
        <div className="info">
            <div className="text-sm text-gray-600">학번: {studentId}</div> // 학번 정보를 회색 글씨로 표시
            <div className="text-lg font-semibold">{name}</div> // 이름 정보를 크고 굵은 글씨로 표시
            <div className="text-sm text-gray-500">아이디: {id}</div> // 아이디 정보를 회색 글씨로 표시
        </div>

        {/* 버튼 영역 */}
        <div className="buttons ml-auto mr-0 flex justify-center gap-2 text-xs">
            <button
                onClick={() => {
                    if (confirm(`${name}님을 관리자로 승인하시겠습니까?`)) // 사용자에게 확인 메시지를 표시
                        approveAdmin(id).then(() => { // 관리자 승인 함수 호출
                            approveUser(id).then((res) => { // 사용자 승인 함수 호출
                                if (res) alert("승인되었습니다."); // 성공 시 알림 메시지 표시
                                location.reload(); // 페이지 새로고침
                            });
                        });
                }}
            >
                {/* 관리자 버튼 */}
                <span className="px-4 py-[0.6rem] border rounded-sm transition ease-in-out duration-100 hover:bg-gray-100">
                    관리자
                </span>
            </button>
            <button
                onClick={() => {
                    if (confirm(`${name}님을 승인하시겠습니까?`)) // 사용자에게 확인 메시지를 표시
                        approveUser(id).then((res) => { // 사용자 승인 함수 호출
                            if (res) alert("승인되었습니다."); // 성공 시 알림 메시지 표시
                            location.reload(); // 페이지 새로고침
                        });
                }}
            >
                {/* 승인 버튼 */}
                <span className="px-4 py-[0.6rem] border rounded-sm transition ease-in-out duration-100 hover:bg-gray-100">
                    승인
                </span>
            </button>
            <button
                onClick={() => {
                    if (confirm(`${name}님을 거절하시겠습니까?`)) // 사용자에게 확인 메시지를 표시
                        rejectUser(id).then((res) => { // 사용자 거절 함수 호출
                            if (res) alert("거절되었습니다."); // 성공 시 알림 메시지 표시
                            location.reload(); // 페이지 새로고침
                        });
                }}
            >
                {/* 거절 버튼 */}
                <span className="px-4 py-[0.6rem] border rounded-sm transition ease-in-out duration-100 hover:bg-gray-100">
                    거절
                </span>
            </button>
        </div>
    </div>
);
