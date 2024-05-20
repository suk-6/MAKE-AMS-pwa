import QRCode from "react-qr-code";
import { useNavigate } from "react-router-dom";

export const QRView = () => {
	const navigator = useNavigate();

	return (
		<div
			className="w-full h-full flex justify-center items-center"
			onClick={() => navigator("/")}
		>
			<QRCode
				className=" w-[90%] h-[90%]"
				value={`${localStorage.getItem("code")}\u000A` || ""}
				size={512}
			/>
		</div>
	);
};
