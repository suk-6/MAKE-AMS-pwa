export interface ButtonProps {
	text: string;
	color: string;
}

export const HomeButton = ({ text, color }: ButtonProps) => {
	let buttonClass =
		"w-full h-full bg-green-400 text-center text-black text-[22px] font-semibold font-['Pretendard'] flex items-center justify-center";
	if (color === "green") {
		buttonClass += " bg-green-400";
	} else if (color === "red") {
		buttonClass += " bg-red-400";
	}
	return (
		<div className=" w-[195px] h-[93px] mb-1 relative flex justify-center items-center rounded-[20px] overflow-hidden">
			<div className={buttonClass}>{text}</div>
		</div>
	);
};
