import QRCode from "react-qr-code";
import { HomeButton } from "../components/homebutton";
import { openDoor } from "../services/auth";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";

	return (
		<div className="Page1 w-full h-full bg-white">
			<div className=" ml-2 mt-9 text-black text-[26px] font-bold font-['Pretendard']">
				메이커스페이스 출입관리
			</div>
			<div className="w-[95%] my-[1%] border-[1px] border-black ml-2"></div>
			<div className=" pt-3 grid grid-cols-2 gap-2 w-full">
				<div className="Group1 w-[195px] h-[195px] ml-2 flex items-center justify-center">
					<QRCode
						value={localStorage.getItem("code") || ""}
						size={173}
					/>
				</div>
				<div className="Group1 w-[195px] h-[195px] mr-2">
					<HomeButton text="열기" color="green" func={openDoor} />
					<HomeButton text="로그아웃" color="red" func={() => {}} />
				</div>
			</div>
		</div>
	);
};

export default Home;
