// AuthButton 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
interface AuthButtonProps {
    text: string; // 버튼에 표시될 텍스트를 나타내는 문자열입니다.
}

// AuthButton 컴포넌트를 정의합니다. 이 컴포넌트는 인증 관련 버튼을 생성하는 역할을 합니다.
export const AuthButton = ({ text }: AuthButtonProps) => {
    return (
        // 버튼 컨테이너 div 요소입니다.
        <div 
            className="
                hover:bg-gray-100 // 마우스를 올렸을 때 회색 배경을 적용합니다.
                w-4/6 // 너비를 부모 요소의 4/6로 설정합니다.
                h-full // 높이를 부모 요소의 전체 높이로 설정합니다.
                bg-white // 배경색을 흰색으로 설정합니다.
                border border-black // 검은색 테두리를 적용합니다.
                text-black // 텍스트 색상을 검은색으로 설정합니다.
                text-xl // 텍스트 크기를 xl로 설정합니다.
                font-semibold // 텍스트를 굵게 표시합니다.
                font-['Pretendard'] // Pretendard 폰트를 사용합니다.
                flex // flexbox 레이아웃을 적용합니다.
                justify-center // 내용을 가로 중앙에 정렬합니다.
                items-center // 내용을 세로 중앙에 정렬합니다.
            "
        >
            {text} // props로 전달된 텍스트를 버튼 내부에 표시합니다.
        </div>
    );
};
