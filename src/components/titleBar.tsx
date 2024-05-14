interface TitleBarProps {
	title: string;
}

export const TitleBar = ({ title }: TitleBarProps) => {
	return (
		<div className="w-full my-5 ml-3">
			<div className="w-[95%] text-black text-2xl font-bold font-['Pretendard']">
				{title}
			</div>
			<div className="w-[95%] my-[1%] border-[1px] border-black"></div>
		</div>
	);
};
