// `Intl.DateTimeFormat` 객체를 생성하고 한국어(ko)로 날짜 및 시간을 표시하는 포맷터를 만듭니다.
// `dateStyle: "medium"`는 날짜를 "2024. 7. 18." 형식으로 표시하고, 
// `timeStyle: "medium"`는 시간을 "오후 3:51:00" 형식으로 표시합니다.
const timeFormat = new Intl.DateTimeFormat("ko", {
    dateStyle: "medium",
    timeStyle: "medium",
}).format;

// `AccessView` 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
export interface AccessViewProps {
    studentId: string; // 학번 정보를 나타내는 문자열
    name: string; // 이름 정보를 나타내는 문자열
    timestamp: number; // 접근 시간을 나타내는 타임스탬프(밀리초 단위)
}

// `AccessView` 컴포넌트를 정의합니다. 이 컴포넌트는 접근 기록을 표시하는 역할을 합니다.
export const AccessView = ({ studentId, name, timestamp }: AccessViewProps) => (
    // 접근 기록을 표시하는 컨테이너 div 요소입니다.
    <div className="p-5 border-b border-gray-200"> 
        <div className="text-sm text-gray-600">학번: {studentId}</div> // 학번 정보를 회색 글씨로 표시
        <div className="text-lg font-semibold">{name}</div> // 이름 정보를 크고 굵은 글씨로 표시
        
        {/* 접근 시간 정보를 표시하는 부분 */}
        <div className="text-sm text-gray-500">
            {timeFormat(new Date(timestamp))} // 타임스탬프를 Date 객체로 변환하고 timeFormat 함수를 사용하여 한국어 형식으로 변환하여 표시
        </div>
    </div>
);
