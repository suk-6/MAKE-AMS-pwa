// React 훅인 useState를 가져옵니다.
import { useState } from "react";

// Textbox 컴포넌트를 가져옵니다.
import { Textbox } from "../components/textBox";

// 로그인 함수를 가져옵니다.
import { login } from "../services/auth";

// TitleBar 컴포넌트를 가져옵니다.
import { TitleBar } from "../components/titleBar";

// AuthButton 컴포넌트를 가져옵니다.
import { AuthButton } from "../components/authButton";

// Login 컴포넌트를 정의합니다. 로그인 페이지를 나타냅니다.
const Login = () => {
    // 만약 로컬 스토리지에 code 값이 있다면, 메인 페이지로 이동합니다. (이미 로그인 된 상태)
    if (localStorage.getItem("code")) document.location.href = "/";

    // id 상태 변수를 선언하고 초기값을 빈 문자열로 설정합니다. 사용자 입력 아이디를 저장합니다.
    const [id, setId] = useState("");

    // password 상태 변수를 선언하고 초기값을 빈 문자열로 설정합니다. 사용자 입력 비밀번호를 저장합니다.
    const [password, setPassword] = useState("");

    return (
        // 전체 화면을 차지하는 컨테이너 div 요소입니다.
        <div className="fixed w-full h-full bg-white">
            {/* 타이틀 바 */}
            <TitleBar title="로그인" />
            {/* 로그인 폼 컨테이너 */}
            <div className="flex flex-col h-full pt-5">
                {/* 아이디, 비밀번호 입력 폼 영역 */}
                <div className="flex flex-col gap-y-8 h-fit">
                    {/* 아이디 입력 폼 */}
                    <Textbox
                        inputBoxHint="아이디"
                        inputBoxType="text"
                        autoComplete="username" // 브라우저 자동 완성 기능 활성화 (username 유형)
                        placeholder="아이디를 입력해주세요."
                        value={id}
                        changeValue={setId} // 입력 값이 변경될 때마다 setId 함수를 호출하여 id 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            login(id, password); // Enter 키 입력 시 login 함수를 호출하여 로그인을 시도합니다.
                        }}
                    />
                    {/* 비밀번호 입력 폼 */}
                    <Textbox
                        inputBoxHint="비밀번호"
                        inputBoxType="password"
                        autoComplete="current-password" // 브라우저 자동 완성 기능 활성화 (current-password 유형)
                        placeholder="비밀번호를 입력해주세요."
                        value={password}
                        changeValue={setPassword} // 입력 값이 변경될 때마다 setPassword 함수를 호출하여 password 상태를 업데이트합니다.
                        enterEventHandler={() => {
                            login(id, password); // Enter 키 입력 시 login 함수를 호출하여 로그인을 시도합니다.
                        }}
                    />
                </div>

                {/* 로그인, 회원가입 버튼 영역 */}
                <div className="flex flex-row items-center justify-center w-full h-32 mb-[25%] mt-auto gap-x-8">
                    {/* 로그인 버튼 */}
                    <div
                        className="flex items-center justify-end w-full h-3/6"
                        onClick={() => login(id, password)} // 클릭 시 login 함수를 호출하여 로그인을 시도합니다.
                    >
                        <AuthButton text="로그인" />
                    </div>
                    {/* 회원가입 버튼 */}
                    <div
                        className="flex items-center justify-start w-full h-3/6"
                        onClick={() => (document.location.href = "/register")} // 클릭 시 회원가입 페이지로 이동합니다.
                    >
                        <AuthButton text="회원가입" />
                    </div>
                </div>
            </div>
        </div>
    );
};

// Login 컴포넌트를 내보냅니다.
export default Login;
