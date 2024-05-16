import QRCode from "react-qr-code";
import { TitleBar } from "../components/titleBar";

export const QRView = () => {
	return (
		<div className="w-full h-full">
			<TitleBar title="QR 코드" />
			<div className="flex justify-center items-center">
				<QRCode
					className=" w-[90%] h-[90%]"
					value={localStorage.getItem("code") || ""}
					size={512}
				/>
			</div>
		</div>
	);
};
