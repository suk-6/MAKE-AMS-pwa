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
	}, [navigate]);

	return (
		<div className="w-full h-3/6 flex justify-center items-center">
			<div className=" w-[20rem] h-[20rem]  bg-blue2 rounded-3xl flex flex-col shadow-2xl">
				<div className="w-full h-full flex items-center justify-center">
					<QRCode
						className=" w-48 absolute"
						value={localStorage.getItem("code") || ""}
						size={256}
						bgColor="#6CB2FF"
						onClick={() => navigate("/qr")}
					/>
					<div className="">
						<div className="grid grid-cols-2 grid-rows-2 gap-52">
							<div className="w-[1.5rem] h-[1.5rem] border-t-[4px] border-l-[4px] border-white" />
							<div className="w-[1.5rem] h-[1.5rem] border-t-[4px] border-r-[4px] border-white" />
							<div className="w-[1.5rem] h-[1.5rem] border-b-[4px] border-l-[4px] border-white" />
							<div className="w-[1.5rem] h-[1.5rem] border-b-[4px] border-r-[4px] border-white" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
