import QRCode from "react-qr-code";
import { HomeButton } from "../components/homebutton";
import { openDoor } from "../services/auth";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";

	return (
		<div className="Page1 w-full h-full bg-white">
			<div className="w-full my-5 ml-3">
				<div className="w-[95%] text-black text-2xl font-bold font-['Pretendard']">
					메이커스페이스 출입관리
				</div>
				<div className="w-[95%] my-[1%] border-[1px] border-black"></div>
			</div>
			<div className=" pt-3 pl-1 grid grid-cols-2 gap-1 w-full">
				<div className="w-[100%] h-[100%] flex items-center justify-center">
					<QRCode
						className="w-[90%] h-[90%]"
						value={localStorage.getItem("code") || ""}
						size={256}
					/>
				</div>
				<div className="w-[100%] h-[100%]">
					<HomeButton text="열기" color="green" func={openDoor} />
					<HomeButton
						text="로그아웃"
						color="red"
						func={() => {
							localStorage.removeItem("code");
							location.reload();
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
