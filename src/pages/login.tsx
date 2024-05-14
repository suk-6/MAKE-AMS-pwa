import { useState } from "react";
import { Textbox } from "../components/textBox";
import { login } from "../services/auth";

const Login = () => {
	if (localStorage.getItem("code")) document.location.href = "/";

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="Page2 w-auto h-[932px] relative bg-white">
			<div className=" w-[254px] h-[31px] left-[13px] top-[40px] absolute text-black text-[26px] font-bold font-['Pretendard']">
				로그인
			</div>
			<div className="Line1 w-[406px] h-[0px] left-[10px] top-[82px] absolute border border-black"></div>
			<div>
				<Textbox
					inputBoxHint="아이디"
					inputBoxType="text"
					value={id}
					changeValue={setId}
				/>
				<Textbox
					inputBoxHint="비밀번호"
					inputBoxType="password"
					value={password}
					changeValue={setPassword}
				/>
			</div>
			<div
				className=" w-[230px] h-[50px] left-[100px] top-[420px] absolute"
				onClick={() => login(id, password)}
			>
				<div className="Rectangle6 w-[230px] h-[50px] left-0 top-0 absolute bg-gray-200 rounded-[20px] border border-black" />
				<div className=" left-[85px] top-[11px] absolute text-center text-black text-[22px] font-semibold font-['Pretendard']">
					로그인
				</div>
			</div>
			<div
				className=" w-[230px] h-[50px] left-[100px] top-[480px] absolute"
				onClick={() => (document.location.href = "/register")}
			>
				<div className="Rectangle6 w-[230px] h-[50px] left-0 top-0 absolute bg-gray-200 rounded-[20px] border border-black" />
				<div className=" left-[78px] top-[11px] absolute text-center text-black text-[22px] font-semibold font-['Pretendard']">
					회원가입
				</div>
			</div>
		</div>
	);
};

export default Login;
