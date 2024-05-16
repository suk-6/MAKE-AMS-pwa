import QRCode from "react-qr-code";
import { HomeButton } from "./homeButton";
import { checkQR } from "../services/auth";
import { useNavigate } from "react-router-dom";

export const HomeFeature = () => {
	const navigate = useNavigate();
	return (
		<div className=" grid grid-cols-2 grid-rows-2 gap-1 w-full h-[25%]">
			<div className="w-full h-full flex items-center justify-center row-span-2">
				<QRCode
					className=" w-[90%] h-[90%]"
					value={localStorage.getItem("code") || ""}
					size={256}
					onClick={() => navigate("/qr")}
				/>
			</div>
			<HomeButton
				text="확인"
				color="bg-green1"
				func={() => {
					try {
						checkQR().then((res) => {
							if (res) return location.reload();
							return alert(
								"유효하지 않은 QR입니다. 다시 로그인해주세요."
							);
						});
					} catch (e) {
						alert("오류가 발생했습니다. 다시 로그인해주세요.");
					}
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
