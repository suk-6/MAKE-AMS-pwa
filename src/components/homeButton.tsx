interface ButtonProps {
	text: string;
	color: string;
	func: () => void;
}

export const HomeButton = ({ text, color, func }: ButtonProps) => {
	const buttonClass =
		"w-full h-full text-black text-xl font-semibold font-['Pretendard'] flex items-center justify-center" +
		` ${color}`;
	return (
		<div className="w-full h-full flex justify-center items-center ">
			<div
				className=" w-11/12 h-full rounded-2xl overflow-hidden "
				onClick={() => func()}
			>
				<div className={buttonClass}>{text}</div>
			</div>
		</div>
	);
};
