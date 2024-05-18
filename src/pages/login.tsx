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
			<div className="grid grid-rows-3 h-2/6 gap-10">
				<div className="grid grid-rows-2 gap-6 h-full row-span-2">
					<Textbox
						inputBoxHint="아이디"
						inputBoxType="username"
						value={id}
						changeValue={setId}
					/>
					<Textbox
						inputBoxHint="비밀번호"
						inputBoxType="current-password"
						value={password}
						changeValue={setPassword}
					/>
				</div>
				<div className="grid grid-cols-2 h-full gap-10">
					<div
						className="flex items-center justify-end"
						onClick={() => login(id, password)}
					>
						<AuthButton text="로그인" />
					</div>
					<div
						className="flex items-center justify-start"
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
