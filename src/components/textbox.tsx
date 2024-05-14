export interface TextboxProps {
	inputBoxType: string;
	inputBoxHint: string;
	value: string;
	changeValue: (value: string) => void;
}

export const Textbox = ({
	inputBoxType,
	inputBoxHint,
	value,
	changeValue,
}: TextboxProps) => (
	<div className="flex justify-center items-center w-full h-auto">
		<div className=" grid grid-rows-2 w-auto h-min">
			<span className="h-min flex justify-start items-center text-black text-base font-normal font-['Pretendard']">
				{inputBoxHint}
			</span>
			<input
				type={inputBoxType}
				value={value}
				onChange={(e) => changeValue(e.target.value)}
				className="border border-black h-8"
			/>
		</div>
	</div>
);
