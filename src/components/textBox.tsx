// Textbox 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
interface TextboxProps {
    inputBoxType: string;       // input 요소의 타입 (text, password, email 등)
    inputBoxHint: string;       // input 요소 위에 표시될 힌트 텍스트
    value: string;              // input 요소의 현재 값
    autoComplete?: string;      // 자동 완성 기능 활성화 여부 및 자동 완성 유형 (on, off, username, password 등) (선택 사항)
    placeholder?: string;       // input 요소에 표시될 placeholder 텍스트 (선택 사항)
    changeValue: (value: string) => void; // input 값 변경 시 호출될 함수
    enterEventHandler?: () => void;       // Enter 키 입력 시 호출될 함수 (선택 사항)
}

// Textbox 컴포넌트를 정의합니다. 사용자로부터 입력을 받는 텍스트 상자를 생성합니다.
export const Textbox = ({
    inputBoxType, inputBoxHint, value, autoComplete, placeholder, changeValue, enterEventHandler
}: TextboxProps) => (
    // 텍스트 상자를 감싸는 컨테이너 div 요소입니다. 전체 너비를 사용하고 내용을 가운데 정렬합니다.
    <div className="flex justify-center items-center w-full h-fit">
        // 텍스트 상자와 힌트 텍스트를 감싸는 컨테이너 div 요소입니다.
        <div className=" flex flex-col items-start w-[70%] h-min">
            {/* 힌트 텍스트를 표시하는 span 요소입니다. */}
            <span className="w-max h-min flex justify-start items-center text-black text-base font-normal font-['Pretendard']">
                {inputBoxHint} 
            </span>
            <div className="h-10 w-full flex flex-col">
                {/* 실제 텍스트 입력을 받는 input 요소입니다. */}
                <input
                    type={inputBoxType}          // input 요소의 타입을 props로 받은 값으로 설정합니다.
                    value={value}                // input 요소의 값을 props로 받은 값으로 설정합니다.
                    placeholder={placeholder}    // input 요소의 placeholder를 props로 받은 값으로 설정합니다.
                    autoComplete={autoComplete}  // input 요소의 자동 완성 기능을 props로 받은 값으로 설정합니다.
                    // Enter 키 입력 이벤트 처리
                    onKeyUp={(e: React.KeyboardEvent) => { 
                        if (e.key === "Enter" && enterEventHandler !== undefined) {
                            enterEventHandler(); // Enter 키가 입력되고 enterEventHandler가 정의되어 있으면 해당 함수를 실행합니다.
                        }
                    }}
                    // input 값 변경 이벤트 처리
                    onChange={(e) => changeValue(e.target.value)} // input 값이 변경될 때마다 changeValue 함수를 호출합니다.
                    className=" border-0 border-b-2 w-full h-full text-black text-base font-normal font-['Pretendard'] focus:outline-none rounded-none" // input 요소의 스타일을 지정합니다.
                    style={{ WebkitUserSelect: "none" }} // input 요소의 텍스트 선택을 비활성화합니다.
                />
            </div>
        </div>
    </div>
);
