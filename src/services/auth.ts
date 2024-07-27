// API 기본 URL을 가져옵니다.
import { API_BASE_URL } from "../config";

// 사용자 로그인을 처리하는 비동기 함수입니다.
export const login = async (id: string, password: string) => {
    // 아이디 또는 비밀번호가 입력되지 않았을 경우 경고 메시지를 표시하고 함수를 종료합니다.
    if (id === "" || password === "") return alert("아이디와 비밀번호를 입력해주세요");

    // 테스트 아이디 및 비밀번호인 경우 로컬 스토리지에 "test" 코드를 저장하고 메인 페이지로 이동합니다. (테스트 환경)
    if (id === "test" && password === "test") {
        localStorage.setItem("code", "test");
        return (document.location.href = "/");
    }

    // 입력된 아이디와 비밀번호에서 앞뒤 공백을 제거합니다.
    const trimedId = id.trim();
    const trimedPassword = password.trim();

    // 로그인 API 엔드포인트에 POST 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        body: JSON.stringify({ id: trimedId, password: trimedPassword }), // 아이디와 비밀번호를 JSON 형태로 전송합니다.
        headers: { "Content-Type": "application/json" }, // 요청 헤더를 설정합니다.
    }).then((res) => res.json()); // 응답을 JSON 형태로 파싱합니다.

    // 로그인 실패 시 오류 메시지를 표시합니다.
    if (result.status !== true) return alert(result.message);
    
    // 로그인 성공 시
    localStorage.setItem("code", result.code); // 로컬 스토리지에 인증 코드를 저장합니다.
    localStorage.setItem("renewalDate", new Date().getTime().toString()); // 로컬 스토리지에 QR 코드 갱신 날짜를 저장합니다.
    return (document.location.href = "/"); // 메인 페이지로 이동합니다.
};

// 사용자 회원가입을 처리하는 비동기 함수입니다.
export const register = async (id: string, password: string, studentId: string, name: string) => {
    // 아이디 또는 비밀번호가 입력되지 않았을 경우 경고 메시지를 표시하고 함수를 종료합니다.
    if (id === "" || password === "") return alert("아이디와 비밀번호를 입력해주세요");

    // 입력된 정보에서 앞뒤 공백을 제거합니다.
    const trimedId = id.trim();
    const trimedPassword = password.trim();
    const trimedStudentId = studentId.trim();
    const trimedName = name.trim();

    // 입력된 정보에 공백이 포함되어 있는지 확인합니다.
    if (trimedId.includes(" ") || trimedPassword.includes(" ") || trimedStudentId.includes(" ") || trimedName.includes(" "))
        return alert("아이디, 비밀번호, 학번, 이름에 공백이 포함될 수 없습니다.");

    // 회원가입 API 엔드포인트에 POST 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
            id: trimedId,
            password: trimedPassword,
            studentId: trimedStudentId,
            name: trimedName, 
        }), // 회원가입 정보를 JSON 형태로 전송합니다.
        headers: { "Content-Type": "application/json" },
    }).then((res) => res.json()); // 응답을 JSON 형태로 파싱합니다.

    // 회원가입 실패 시 오류 메시지를 표시합니다.
    if (result.status !== true) return alert(result.message);

    // 회원가입 성공 시 로그인 페이지로 이동합니다.
    return (document.location.href = "/login");
};

// 사용자가 관리자인지 확인하는 비동기 함수입니다.
export const checkAdmin = async () => {
    const code = localStorage.getItem("code");
    if (code === "test") return true; // 테스트 코드인 경우 관리자로 간주합니다. (테스트 환경)

    // 관리자 확인 API 엔드포인트에 GET 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/admin?code=${code}`).then((res) => res.json());

    // 관리자가 아닌 경우 false를 반환하고, 관리자인 경우 true를 반환합니다.
    if (result.status !== true) return false;
    return true;
};

// QR 코드를 재생성하는 비동기 함수입니다.
const regenerateQR = async () => {
    const code = localStorage.getItem("code"); // 로컬 스토리지에서 인증 코드를 가져옵니다.

    // QR 코드 재생성 API 엔드포인트에 GET 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/regenerate?code=${code}`).then((res) => res.json());

    // QR 코드 재생성 실패 시 오류 메시지를 표시하고 false를 반환합니다.
    if (result.status !== true) {
        alert("QR 코드 갱신에 오류가 발생했습니다.");
        return false;
    }

    // QR 코드 재생성 성공 시 로컬 스토리지에 새로운 QR 코드와 갱신 날짜를 저장하고 true를 반환합니다.
    localStorage.setItem("code", result.code); 
    localStorage.setItem("renewalDate", new Date().getTime().toString());
    return true;
};

// QR 코드 유효성을 검사하는 비동기 함수입니다.
export const checkQR = async () => {
    const code = localStorage.getItem("code"); // 로컬 스토리지에서 인증 코드를 가져옵니다.

    // QR 코드 유효성 검사 API 엔드포인트에 GET 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/check?code=${code}`).then((res) => res.json());

    // QR 코드가 유효한 경우
    if (result.status === true) {
        const now = new Date().getTime(); // 현재 시간을 가져옵니다.
        const renewalDate = localStorage.getItem("renewalDate"); // 로컬 스토리지에서 QR 코드 갱신 날짜를 가져옵니다.

        // QR 코드가 만료되었는지 확인합니다. (만료 기간: 24시간)
        if (renewalDate === null || now - Number(renewalDate) > 1000 * 60 * 60 * 24) 
            return regenerateQR(); // 만료되었으면 QR 코드를 재생성합니다.

        return true; // QR 코드가 유효하고 만료되지 않았으면 true를 반환합니다.
    }
    return false; // QR 코드가 유효하지 않으면 false를 반환합니다.
};

// 최근 접속 기록을 가져오는 비동기 함수입니다.
export const getRecentAccess = async () => {
    const code = localStorage.getItem("code"); // 로컬 스토리지에서 인증 코드를 가져옵니다.

    // 최근 접속 기록 API 엔드포인트에 GET 요청을 보냅니다.
    const result = await fetch(`${API_BASE_URL}/auth/recent?code=${code}`).then((res) => res.json());

    // 최근 접속 기록이 없는 경우 undefined를 반환하고, 있는 경우 해당 데이터를 반환합니다.
    if (result.status !== true) return undefined; 
    return result.data; 
};
