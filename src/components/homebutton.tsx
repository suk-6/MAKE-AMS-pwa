export interface ButtonProps {
	text: string;
	color: string;
}

export const HomeButton = ({ text, color }: ButtonProps) => {
	let buttonClass = "";
	if (color === "green") {
		buttonClass =
			"Rectangle1 w-[195px] h-[93px] bg-green-400 rounded-[20px] text-center text-black text-[22px] font-semibold font-['Pretendard'] flex items-center justify-center";
	} else if (color === "red") {
		buttonClass =
			"Rectangle1 w-[195px] h-[93px] bg-red-400 rounded-[20px] text-center text-black text-[22px] font-semibold font-['Pretendard'] flex items-center justify-center";
	}
	return (
		<div className=" w-[195px] h-[93px] mb-1 relative flex justify-center items-center">
			<div className={buttonClass}>{text}</div>
		</div>
	);
};
