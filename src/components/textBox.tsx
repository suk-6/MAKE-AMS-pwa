interface TextboxProps {
	inputBoxType: string;
	inputBoxHint: string;
	value: string;
	autoComplete?: string;
	placeholder?: string;
	changeValue: (value: string) => void;
}

export const Textbox = ({
	inputBoxType,
	inputBoxHint,
	value,
	autoComplete,
	placeholder,
	changeValue,
}: TextboxProps) => (
	<div className="flex justify-center items-center w-full h-fit">
		<div className=" flex flex-col items-start w-[70%] h-min">
			<span className="w-max h-min flex justify-start items-center text-black text-base font-normal font-['Pretendard']">
				{inputBoxHint}
			</span>
			<div className="h-10 w-full flex flex-col">
				<input
					type={inputBoxType}
					value={value}
					placeholder={placeholder}
					autoComplete={autoComplete}
					onChange={(e) => changeValue(e.target.value)}
					className=" border-0 border-b-2 w-full h-full text-black text-base font-normal font-['Pretendard'] focus:outline-none rounded-none"
				/>
			</div>
		</div>
	</div>
);
