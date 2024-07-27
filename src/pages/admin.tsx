// ../components/admin/adminFeature 모듈에서 AdminFeature 컴포넌트를 가져옵니다.
import { AdminFeature } from "../components/admin/adminFeature";

// AdminView 컴포넌트를 정의합니다. 관리자 페이지의 뷰를 나타냅니다.
export const AdminView = () => {
    return (
        // 전체 화면을 차지하는 컨테이너 div 요소입니다.
        <div className="w-full h-full fixed">
            {/* AdminFeature 컴포넌트를 렌더링합니다. */}
            <AdminFeature />
        </div>
    );
};
