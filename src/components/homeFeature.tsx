import QRCode from "react-qr-code";
import { HomeButton } from "./homeButton";
import { checkQR } from "../services/auth";

export const HomeFeature = () => {
	return (
		<div className=" grid grid-cols-2 grid-rows-2 gap-1 w-full h-[25%]">
			<div className="w-full h-full flex items-center justify-center row-span-2">
				<QRCode
					className=" w-[90%] h-[90%]"
					value={localStorage.getItem("code") || ""}
					size={256}
				/>
			</div>
			<HomeButton
				text="확인"
				color="bg-green1"
				func={() => {
					checkQR();
					location.reload();
				}}
			/>
			<HomeButton
				text="로그아웃"
				color="bg-red1"
				func={() => {
					localStorage.removeItem("code");
					location.reload();
				}}
			/>
		</div>
	);
};
