import QRCode from "react-qr-code";
import { HomeButton } from "../components/homeButton";
import { openDoor } from "../services/auth";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";

	return (
		<div className="fixed w-full h-full bg-white">
			<div className="w-full my-5 ml-3">
				<div className="w-[95%] text-black text-2xl font-bold font-['Pretendard']">
					메이커스페이스 출입관리
				</div>
				<div className="w-[95%] my-[1%] border-[1px] border-black"></div>
			</div>
			<div className=" grid grid-cols-2 grid-rows-2 gap-1 w-full h-[25%]">
				<div className="w-full h-full flex items-center justify-center row-span-2">
					<QRCode
						className=" w-[90%] h-[90%]"
						value={localStorage.getItem("code") || ""}
						size={256}
					/>
				</div>
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
	);
};

export default Home;
