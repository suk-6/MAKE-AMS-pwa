export interface ButtonProps {
	text: string;
	color: string;
}

export const HomeButton = ({ text, color }: ButtonProps) => {
	let buttonClass = "";
	if (color === "green") {
		buttonClass =
			"Rectangle1 w-[195px] h-[93px] left-0 top-0 absolute bg-green-400 rounded-[20px]";
	} else if (color === "red") {
		buttonClass =
			"Rectangle1 w-[195px] h-[93px] left-0 top-0 absolute bg-red-400 rounded-[20px]";
	}
	return (
		<div className=" w-[195px] h-[93px] left-[218px] mb-1 relative flex justify-center items-center">
			<div className={buttonClass} />
			<div className=" top-[33px] absolute text-center text-black text-[22px] font-semibold font-['Pretendard']">
				{text}
			</div>
		</div>
	);
};
