export interface ButtonProps {
	text: string;
	color: string;
	func: () => void;
}

export const HomeButton = ({ text, color, func }: ButtonProps) => {
	let buttonClass =
		"w-full h-full bg-green-400 text-center text-black text-xl font-semibold font-['Pretendard'] flex items-center justify-center";
	if (color === "green") {
		buttonClass += " bg-green-400";
	} else if (color === "red") {
		buttonClass += " bg-red-400";
	}
	return (
		<div
			className=" w-[90%] h-[50%] mb-1 relative flex justify-center items-center rounded-[20px] overflow-hidden"
			onClick={() => func()}
		>
			<div className={buttonClass}>{text}</div>
		</div>
	);
};
