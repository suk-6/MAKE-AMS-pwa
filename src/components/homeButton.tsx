interface ButtonProps {
	text: string;
	color: string;
	func: () => void;
}

export const HomeButton = ({ text, color, func }: ButtonProps) => {
	let buttonClass =
		"w-full h-full bg-green-400 text-black text-xl font-semibold font-['Pretendard'] flex items-center justify-center";
	if (color === "green") {
		buttonClass += " bg-green-400";
	} else if (color === "red") {
		buttonClass += " bg-red-400";
	}
	return (
		<div className="w-full h-full flex justify-center items-center">
			<div
				className=" w-11/12 h-full rounded-2xl overflow-hidden"
				onClick={() => func()}
			>
				<div className={buttonClass}>{text}</div>
			</div>
		</div>
	);
};
