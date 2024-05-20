interface TitleBarProps {
	title: string;
	className?: string;
}

export const TitleBar = ({ title, className }: TitleBarProps) => {
	return (
		<div className={"w-full mt-5 ml-3 " + className}>
			<div className="w-[95%] text-black text-2xl font-bold font-['Pretendard']">
				{title}
			</div>
			<div className="w-[95%] mt-[1%] border-[1px] border-black"></div>
		</div>
	);
};
