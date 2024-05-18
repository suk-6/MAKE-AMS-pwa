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
		<div className=" flex flex-col items-start w-auto h-min">
			<span className="h-min flex justify-start items-center text-black text-base font-normal font-['Pretendard']">
				{inputBoxHint}
			</span>
			<div className="h-10 w-72 flex flex-col">
				<input
					type={inputBoxType}
					value={value}
					autoComplete={autoComplete}
					onChange={(e) => changeValue(e.target.value)}
					className=" border-0 border-b-2 w-full h-full text-black text-base font-normal font-['Pretendard'] focus:outline-none"
				/>
			</div>
		</div>
	</div>
);
