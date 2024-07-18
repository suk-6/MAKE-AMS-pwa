// AccessViewProps 인터페이스를 가져옵니다.
import { AccessViewProps } from "../components/accessView";

// API 기본 URL을 가져옵니다.
import { API_BASE_URL } from "../config";

// 가입 승인 대기 중인 사용자 목록을 가져오는 비동기 함수입니다.
export const getUsersPendingSignup = async () => {
    // API 엔드포인트에 요청을 보내고 응답을 JSON 형태로 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/pendings?code=${localStorage.getItem("code")}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return []; // 응답 상태 코드가 200이 아니면 빈 배열을 반환합니다.
        return res.json(); // 응답을 JSON 형태로 파싱하여 반환합니다.
    });
};

// 출입 기록 목록을 가져오는 비동기 함수입니다.
export const getAccessLogs = async (): Promise<AccessViewProps[]> => {
    // API 엔드포인트에 요청을 보내고 응답을 AccessViewProps 배열 형태로 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/access-logs?code=${localStorage.getItem("code")}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return []; // 응답 상태 코드가 200이 아니면 빈 배열을 반환합니다.
        return res.json(); // 응답을 JSON 형태로 파싱하여 AccessViewProps 배열로 반환합니다.
    });
};

// 특정 사용자를 관리자로 승인하는 비동기 함수입니다.
export const approveAdmin = async (id: string) => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/auth/setadmin?code=${localStorage.getItem(
            "code"
        )}&id=${id}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달하고, id 쿼리 매개변수를 추가하여 사용자 ID를 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};

// 특정 사용자의 가입을 승인하는 비동기 함수입니다.
export const approveUser = async (id: string) => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/approve?code=${localStorage.getItem("code")}&id=${id}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달하고, id 쿼리 매개변수를 추가하여 사용자 ID를 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};

// 특정 사용자의 가입을 거절하는 비동기 함수입니다.
export const rejectUser = async (id: string) => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/reject?code=${localStorage.getItem("code")}&id=${id}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달하고, id 쿼리 매개변수를 추가하여 사용자 ID를 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};

// 현재 문 상태를 가져오는 비동기 함수입니다.
export const getLockStatus = async () => {
    // API 엔드포인트에 요청을 보내고 응답을 JSON 형태로 반환합니다.
    return await fetch(`${API_BASE_URL}/admin/door-status`).then((res) => {
        if (res.status !== 200) return "error"; // 응답 상태 코드가 200이 아니면 "error" 문자열을 반환합니다.
        return res.json(); // 응답을 JSON 형태로 파싱하여 반환합니다.
    });
};

// 문을 잠그는 비동기 함수입니다.
export const lockDoor = async () => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/lock?code=${localStorage.getItem("code")}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};

// 문을 여는 비동기 함수입니다.
export const unlockDoor = async () => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/unlock?code=${localStorage.getItem("code")}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};

// 문을 QR 코드로 제한하는 비동기 함수입니다.
export const restrictDoor = async () => {
    // API 엔드포인트에 요청을 보내고 성공 여부를 반환합니다.
    return await fetch(
        `${API_BASE_URL}/admin/restrict?code=${localStorage.getItem("code")}` // 요청 URL에 code 쿼리 매개변수를 추가하여 인증 토큰을 전달합니다.
    ).then((res) => {
        if (res.status !== 200) return false; // 응답 상태 코드가 200이 아니면 실패(false)를 반환합니다.
        return true; // 응답 상태 코드가 200이면 성공(true)을 반환합니다.
    });
};
