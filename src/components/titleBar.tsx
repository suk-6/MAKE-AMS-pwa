// TitleBar 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
interface TitleBarProps {
    title: string;        // 제목 표시줄에 표시될 텍스트
    className?: string;   // 컴포넌트에 추가될 클래스 이름 (선택 사항)
}

// TitleBar 컴포넌트를 정의합니다. 페이지 상단에 제목과 구분선을 표시하는 역할을 합니다.
export const TitleBar = ({ title, className }: TitleBarProps) => {
    return (
        // 제목 표시줄 컨테이너 div 요소입니다.
        <div className={"w-full mt-5 ml-3 " + className}> 
            {/* 제목 텍스트를 표시하는 div 요소입니다. */}
            <div className="w-[95%] text-black text-2xl font-bold font-['Pretendard']">
                {title} // props로 전달된 제목 텍스트를 표시합니다.
            </div>
            {/* 구분선 div 요소입니다. */}
            <div className="w-[95%] mt-[1%] border-[1px] border-black"></div> 
        </div>
    );
};
