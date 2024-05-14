import QRCode from "react-qr-code";
import { HomeButton } from "../components/homebutton";

const Home = () => {
	return (
		<div className="Page1 w-[430px] h-[932px] relative bg-white">
			<div className=" left-[10px] top-[40px] absolute text-center text-black text-[26px] font-bold font-['Pretendard']">
				메이커스페이스 출입관리
			</div>
			<div className="Line1 w-[406px] h-[0px] left-[10px] top-[82px] absolute border border-black"></div>
			<div className=" pt-24">
				<HomeButton text="열기" color="green" />
				<HomeButton text="초기화" color="red" />
			</div>
			<div className="Group1 w-[195px] h-[195px] left-[13px] top-[93px] absolute">
				<div className="Rectangle2 w-[195px] h-[195px] left-0 top-0 absolute" />
				{/* <img
					className="Rectangle3 w-[173px] h-[173px] left-[11px] top-[11px] absolute"
					src={getQRURL()}
				/> */}
				<QRCode
					className="Rectangle3 w-[173px] h-[173px] left-[11px] top-[11px] absolute"
					value={localStorage.getItem("code") || ""}
					size={150}
				/>
			</div>
		</div>
	);
};

export default Home;
