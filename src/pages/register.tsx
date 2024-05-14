import { useState } from "react";
import { Textbox } from "../components/textbox";
import { register } from "../services/auth";

const Register = () => {
	const [id, setId] = useState("");
	const [password, setPassword] = useState("");
	const [studentId, setStudentId] = useState("");

	return (
		<div className="Page2 w-auto h-[932px] relative bg-white">
			<div className=" w-[254px] h-[31px] left-[13px] top-[40px] absolute text-black text-[26px] font-bold font-['Pretendard']">
				회원가입
			</div>
			<div className="Line1 w-[406px] h-[0px] left-[10px] top-[82px] absolute border border-black"></div>
			<div className="">
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
				<Textbox
					inputBoxHint="학번"
					inputBoxType="text"
					value={studentId}
					changeValue={setStudentId}
				/>
			</div>
			<div
				className=" w-[230px] h-[50px] left-[100px] top-[500px] absolute flex justify-center items-center"
				onClick={() => register(id, password, studentId)}
			>
				<div className="Rectangle6 w-[230px] h-[50px] left-0 top-0 absolute bg-gray-200 rounded-[20px] border border-black" />
				<div className=" relative text-center text-black text-[22px] font-semibold font-['Pretendard']">
					회원가입
				</div>
			</div>
		</div>
	);
};

export default Register;
