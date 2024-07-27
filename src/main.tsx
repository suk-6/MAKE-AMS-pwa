// React 라이브러리를 가져옵니다.
import React from "react";

// ReactDOM을 가져와 React 컴포넌트를 DOM에 렌더링하는데 사용합니다.
import ReactDOM from "react-dom/client";

// App 컴포넌트를 가져옵니다. 이 컴포넌트는 애플리케이션의 최상위 컴포넌트입니다.
import App from "./App.tsx";

// index.css 파일을 가져와 전역 스타일을 적용합니다.
import "./index.css";

// BrowserRouter 컴포넌트를 react-router-dom에서 가져옵니다. 이 컴포넌트는 클라이언트 사이드 라우팅을 제공합니다.
import { BrowserRouter } from "react-router-dom";

// ReactDOM.createRoot를 사용하여 root DOM 노드를 생성합니다.
ReactDOM.createRoot(document.getElementById("root")!).render(
    // StrictMode는 개발 모드에서 추가적인 검사를 수행하여 잠재적인 문제를 발견하는 데 도움을 줍니다.
    <React.StrictMode>
        {/* BrowserRouter는 애플리케이션에 라우팅 기능을 제공합니다. */}
        <BrowserRouter>
            {/* App 컴포넌트를 렌더링합니다. */}
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
