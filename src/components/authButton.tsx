interface AuthButtonProps {
	text: string;
}

export const AuthButton = ({ text }: AuthButtonProps) => {
	return (
		<div className=" hover:bg-gray-300 w-4/6 h-full bg-gray-100 rounded-[20px] border-[0.05rem] border-black text-black text-xl font-semibold font-['Pretendard'] flex justify-center items-center">
			{text}
		</div>
	);
};
