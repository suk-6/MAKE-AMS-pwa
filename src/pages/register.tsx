// React 훅인 useState를 가져옵니다.
import { useState } from "react";

// Textbox 컴포넌트를 가져옵니다.
import { Textbox } from "../components/textBox";

// 회원가입 함수를 가져옵니다.
import { register } from "../services/auth";

// TitleBar 컴포넌트를 가져옵니다.
import { TitleBar } from "../components/titleBar";

// AuthButton 컴포넌트를 가져옵니다.
import { AuthButton } from "../components/authButton";

// Register 컴포넌트를 정의합니다. 회원가입 페이지를 나타냅니다.
const Register = () => {
    // 만약 로컬 스토리지에 code 값이 있다면, 메인 페이지로 이동합니다. (이미 로그인 된 상태)
    if (localStorage.getItem("code")) document.location.href = "/";

    // 사용자 입력 정보를 저장하는 상태 변수들을 선언합니다.
    const [id, setId] = useState("");           // 아이디
    const [password, setPassword] = useState("");  // 비밀번호
    const [studentId, setStudentId] = useState(""); // 학번
    const [name, setName] = useState("");        // 이름

    return (
        // 전체 화면을 차지하는 컨테이너 div 요소입니다.
        <div className="fixed w-full h-full bg-white">
            {/* 페이지 제목 */}
            <TitleBar title="회원가입" />
            {/* 회원가입 폼 컨테이너 */}
            <div className="flex flex-col h-full pt-5">
                {/* 입력 폼 영역 */}
                <div className="flex flex-col gap-y-8 h-fit">
                    {/* 아이디 입력 폼 */}
                    <Textbox
                        inputBoxHint="아이디"
                        inputBoxType="text"
                        autoComplete="username" // 브라우저 자동 완성 기능 활성화 (username 유형)
                        placeholder="아이디를 입력해주세요."
                        value={id}
                        changeValue={setId}  // 입력 값 변경 시 setId 함수를 호출하여 id 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            register(id, password, studentId, name); // Enter 키 입력 시 회원가입 함수를 호출합니다.
                        }}
                    />
                    {/* 비밀번호 입력 폼 */}
                    <Textbox
                        inputBoxHint="비밀번호"
                        inputBoxType="password"
                        autoComplete="new-password" // 브라우저 자동 완성 기능 활성화 (new-password 유형)
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        changeValue={setPassword} // 입력 값 변경 시 setPassword 함수를 호출하여 password 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            register(id, password, studentId, name); // Enter 키 입력 시 회원가입 함수를 호출합니다.
                        }}
                    />
                    {/* 학번 입력 폼 */}
                    <Textbox
                        inputBoxHint="학번"
                        inputBoxType="text"
                        placeholder="학번을 입력해주세요. (ex. 31008)"
                        value={studentId}
                        changeValue={setStudentId} // 입력 값 변경 시 setStudentId 함수를 호출하여 studentId 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            register(id, password, studentId, name); // Enter 키 입력 시 회원가입 함수를 호출합니다.
                        }}
                    />
                    {/* 이름 입력 폼 */}
                    <Textbox
                        inputBoxHint="이름"
                        inputBoxType="text"
                        autoComplete="name" // 브라우저 자동 완성 기능 활성화 (name 유형)
                        placeholder="이름을 입력해주세요."
                        value={name}
                        changeValue={setName} // 입력 값 변경 시 setName 함수를 호출하여 name 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            register(id, password, studentId, name); // Enter 키 입력 시 회원가입 함수를 호출합니다.
                        }}
                    />
                </div>

                {/* 회원가입 버튼 영역 */}
                <div
                    className="flex items-center justify-center mb-[25%] mt-auto w-full h-32"
                    onClick={() => register(id, password, studentId, name)} // 클릭 시 회원가입 함수를 호출합니다.
                >
                    <div className="flex items-center justify-center w-full h-3/6">
                        <AuthButton text="회원가입" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Register 컴포넌트를 내보냅니다.
export default Register;
