/* eslint-disable @typescript-eslint/no-unused-vars */ // 사용하지 않는 변수에 대한 경고를 비활성화합니다.

// 페이지 컴포넌트들을 가져옵니다.
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

// react-router-dom에서 필요한 컴포넌트들을 가져옵니다.
import { Route, Routes } from "react-router-dom";

// 페이지 컴포넌트들을 가져옵니다.
import { AccessLogPage } from "./pages/accessLog";
import { AccessRequestPage } from "./pages/accessRequest";
import { AdminView } from "./pages/admin";
import { InstallPage } from "./pages/install";

// Vercel Analytics를 가져옵니다.
import { Analytics } from "@vercel/analytics/react";

// App 컴포넌트를 정의합니다. 애플리케이션의 최상위 컴포넌트입니다.
const App = () => {
    return (
        // 전체 화면을 차지하는 컨테이너 div 요소입니다.
        <div className="w-full h-full">
            {/* InstallPage 컴포넌트를 렌더링합니다. (앱 설치 안내 페이지) */}
            <InstallPage /> 
            
            {/* react-router-dom의 Routes 컴포넌트를 사용하여 라우팅을 설정합니다. */}
            <Routes>
                {/* 각 경로에 해당하는 컴포넌트를 렌더링합니다. */}
                <Route path="/" Component={Home} />                // 메인 페이지
                <Route path="/admin" Component={AdminView} />       // 관리자 페이지
                <Route path="/login" Component={Login} />          // 로그인 페이지
                <Route path="/register" Component={Register} />     // 회원가입 페이지
                <Route path="/access-log" Component={AccessLogPage} />   // 출입 기록 페이지
                <Route path="/access-request" Component={AccessRequestPage} /> // 가입 요청 페이지
            </Routes>

            {/* Vercel Analytics 컴포넌트를 렌더링하여 웹 분석 기능을 활성화합니다. */}
            <Analytics />
        </div>
    );
};

// App 컴포넌트를 내보냅니다.
export default App;
