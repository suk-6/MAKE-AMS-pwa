interface TextboxProps {
	inputBoxType: string;
	inputBoxHint: string;
	value: string;
	autoComplete?: string;
	changeValue: (value: string) => void;
}

export const Textbox = ({
	inputBoxType,
	inputBoxHint,
	value,
	autoComplete,
	changeValue,
}: TextboxProps) => (
	<div className="flex justify-center items-center w-full h-fit">
		<div className=" grid grid-rows-2 w-auto h-min">
			<span className="h-min flex justify-start items-center text-black text-base font-normal font-['Pretendard']">
				{inputBoxHint}
			</span>
			<input
				type={inputBoxType}
				value={value}
				autoComplete={autoComplete}
				onChange={(e) => changeValue(e.target.value)}
				className="border border-black h-8"
			/>
		</div>
	</div>
);
