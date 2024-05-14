export interface TextboxProps {
	inputBoxType: string;
	inputBoxHint: string;
}

export const Textbox = ({ inputBoxType, inputBoxHint }: TextboxProps) => (
	<div className=" h-[80px] left-[65px] top-[228px] w-[300px] relative">
		<input
			type={inputBoxType}
			className="Rectangle4 w-[300px] h-[50px] left-0 top-[21px] absolute border border-black"
		/>
		<div className=" w-[57px] h-[19px] left-0 top-0 absolute text-left text-black text-base font-normal font-['Pretendard']">
			{inputBoxHint}
		</div>
	</div>
);
