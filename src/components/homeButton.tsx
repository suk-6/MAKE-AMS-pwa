// HomeButton 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
interface ButtonProps {
	text: string;     // 버튼에 표시될 텍스트
	color: string;    // 버튼의 배경 색상
	func: () => void; // 버튼 클릭 시 실행될 함수
}

// HomeButton 컴포넌트를 정의합니다. 홈 화면에서 사용될 버튼을 생성합니다.
export const HomeButton = ({ text, color, func }: ButtonProps) => {
	// 버튼에 적용될 클래스 이름을 동적으로 생성합니다.
	const buttonClass = 
        "w-full h-full text-black text-xl font-semibold font-['Pretendard'] flex items-center justify-center" + // 기본 스타일
        ` ${color}`; // props로 전달된 색상을 추가하여 버튼 배경색을 설정합니다.

	return (
        // 버튼을 감싸는 컨테이너 div 요소입니다. 전체 너비와 높이를 차지하며, 내용을 가운데 정렬합니다.
		<div className="w-full h-full flex justify-center items-center ">
            {/* 실제 버튼 역할을 하는 div 요소입니다. */}
			<div
				className=" w-11/12 h-full rounded-2xl overflow-hidden " // 너비는 부모의 11/12, 모서리는 둥글게, 내용이 넘칠 경우 숨깁니다.
				onClick={() => func()} // 클릭 시 props로 전달된 함수를 실행합니다.
			>
                {/* 버튼 내용을 표시하는 div 요소입니다. */}
				<div className={buttonClass}>{text}</div> // buttonClass에 정의된 스타일과 props로 전달된 텍스트를 표시합니다.
			</div>
		</div>
	);
};
