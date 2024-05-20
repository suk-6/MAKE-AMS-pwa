import QRCode from "react-qr-code";

export const QRView = () => {
	return (
		<div className="w-full h-full flex justify-center items-center">
			<QRCode
				className=" w-[90%] h-[90%]"
				value={localStorage.getItem("code") || ""}
				size={512}
			/>
		</div>
	);
};
