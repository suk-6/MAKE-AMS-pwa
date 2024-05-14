interface AuthButtonProps {
	text: string;
}

export const AuthButton = ({ text }: AuthButtonProps) => {
	return (
		<div className=" w-4/6 h-full bg-gray-200 rounded-[20px] border border-black text-black text-xl font-semibold font-['Pretendard'] flex justify-center items-center">
			{text}
		</div>
	);
};
