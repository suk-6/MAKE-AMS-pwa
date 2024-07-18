// ReactNode 타입을 가져옵니다.
import { ReactNode } from "react";

// ListView 컴포넌트의 속성(props) 타입을 정의하는 인터페이스입니다.
interface ListViewProps {
    items: ReactNode[]; // 리스트에 표시될 항목들의 배열입니다. ReactNode 타입은 React에서 렌더링 가능한 모든 것을 나타냅니다.
}

// ListView 컴포넌트를 정의합니다. 주어진 항목들을 순서가 있는 목록(ordered list)으로 표시합니다.
export const ListView = ({ items }: ListViewProps) => (
    // 순서가 있는 목록(ol)을 생성합니다. 높이는 부모 요소를 가득 채우고, 세로 스크롤이 가능하며, 위쪽에 14만큼의 패딩을 줍니다.
    <ol className="h-full overflow-y-scroll pt-14">
        {
            // items 배열의 각 항목에 대해 다음과 같은 작업을 수행합니다.
            items.map((item, index) => (
                // 각 항목을 li 요소로 감싸고 고유한 key 값으로 index를 부여합니다.
                <li key={index}>{item}</li> 
            ))
        }
    </ol>
);
