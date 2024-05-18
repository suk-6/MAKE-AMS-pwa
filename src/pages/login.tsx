import { useState } from "react";
import { Textbox } from "../components/textBox";
import { login } from "../services/auth";
import { TitleBar } from "../components/titleBar";
import { AuthButton } from "../components/authButton";

const Login = () => {
	if (localStorage.getItem("code")) document.location.href = "/";

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="fixed w-full h-full bg-white">
			<TitleBar title="로그인" />
			<div className="flex flex-col h-full pt-5">
				<div className="flex flex-col gap-y-8 h-fit">
					<Textbox
						inputBoxHint="아이디"
						inputBoxType="text"
						autoComplete="username"
						placeholder="아이디를 입력해주세요."
						value={id}
						changeValue={setId}
					/>
					<Textbox
						inputBoxHint="비밀번호"
						inputBoxType="password"
						autoComplete="current-password"
						placeholder="비밀번호를 입력해주세요."
						value={password}
						changeValue={setPassword}
					/>
				</div>
				<div className="flex flex-row items-center justify-center w-full h-32 mb-[25%] mt-auto gap-x-8">
					<div
						className="flex items-center justify-end w-full h-3/6"
						onClick={() => login(id, password)}
					>
						<AuthButton text="로그인" />
					</div>
					<div
						className="flex items-center justify-start w-full h-3/6"
						onClick={() => (document.location.href = "/register")}
					>
						<AuthButton text="회원가입" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
