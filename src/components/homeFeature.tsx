import QRCode from "react-qr-code";
import { checkQR } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const HomeFeature = () => {
	const navigate = useNavigate();
	useEffect(() => {
		try {
			checkQR().then((res) => {
				if (!res) {
					if (
						confirm("유효하지 않은 QR입니다. 다시 로그인해주세요.")
					) {
						localStorage.removeItem("code");
						navigate("/login");
					}
				}
			});
		} catch (e) {
			return alert("오류가 발생했습니다. 다시 로그인해주세요.");
		}
	}, []);

	return (
		<div className="w-full h-3/6 flex justify-center items-center">
			<div className="w-5/6 h-full bg-blue2 rounded-3xl flex flex-col shadow-2xl">
				<div className="text-center font-semibold text-3xl mt-auto mb-[-20%] flex justify-center w-full">
					<span>QR코드 스캔</span>
				</div>
				<div className="w-full h-full flex items-center justify-center pt-10">
					<div className="w-72 h-72 flex justify-center items-center">
						<QRCode
							className=" w-[68%] h-[68%]"
							value={localStorage.getItem("code") || ""}
							size={256}
							bgColor="#6CB2FF"
							onClick={() => navigate("/qr")}
						/>
						<div className="grid grid-cols-2 grid-rows-2 gap-60 absolute">
							<div className="w-6 h-6 border-t-[0.4rem] border-l-[0.4rem] border-white" />
							<div className="w-6 h-6 border-t-[0.4rem] border-r-[0.4rem] border-white" />
							<div className="w-6 h-6 border-b-[0.4rem] border-l-[0.4rem] border-white" />
							<div className="w-6 h-6 border-b-[0.4rem] border-r-[0.4rem] border-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
