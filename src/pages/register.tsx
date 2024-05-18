import { useState } from "react";
import { Textbox } from "../components/textBox";
import { register } from "../services/auth";
import { TitleBar } from "../components/titleBar";
import { AuthButton } from "../components/authButton";

const Register = () => {
	if (localStorage.getItem("code")) document.location.href = "/";

	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [studentId, setStudentId] = useState("");
	const [name, setName] = useState("");

	return (
		<div className="fixed w-full h-full bg-white">
			<TitleBar title="회원가입" />
			<div className="flex flex-col h-full pt-5">
				<div className="flex flex-col gap-y-8 h-fit">
					<Textbox
						inputBoxHint="아이디"
						inputBoxType="text"
						autoComplete="username"
						placeholder="아이디를 입력해주세요."
						value={id}
						changeValue={setId}
						enterEventHandler={() => {
							register(id, password, studentId, name);
						}}
					/>
					<Textbox
						inputBoxHint="비밀번호"
						inputBoxType="password"
						autoComplete="new-password"
						placeholder="비밀번호를 입력해주세요."
						value={password}
						changeValue={setPassword}
						enterEventHandler={() => {
							register(id, password, studentId, name);
						}}
					/>
					<Textbox
						inputBoxHint="학번"
						inputBoxType="text"
						placeholder="학번을 입력해주세요. (ex. 31008)"
						value={studentId}
						changeValue={setStudentId}
						enterEventHandler={() => {
							register(id, password, studentId, name);
						}}
					/>
					<Textbox
						inputBoxHint="이름"
						inputBoxType="text"
						autoComplete="name"
						placeholder="이름을 입력해주세요."
						value={name}
						changeValue={setName}
						enterEventHandler={() => {
							register(id, password, studentId, name);
						}}
					/>
				</div>
				<div
					className="flex items-center justify-center mb-[25%] mt-auto w-full h-32"
					onClick={() => register(id, password, studentId, name)}
				>
					<div className="flex items-center justify-center w-full h-3/6">
						<AuthButton text="회원가입" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
