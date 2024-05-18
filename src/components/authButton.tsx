interface AuthButtonProps {
	text: string;
}

export const AuthButton = ({ text }: AuthButtonProps) => {
	return (
		<div className=" hover:bg-gray-100 w-4/6 h-full bg-white border border-black text-black text-xl font-semibold font-['Pretendard'] flex justify-center items-center">
			{text}
		</div>
	);
};
