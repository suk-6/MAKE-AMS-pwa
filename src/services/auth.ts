import { API_BASE_URL } from "../config";

export const login = async (id: string, password: string) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");

	if (id === "test" && password === "test") {
		localStorage.setItem("code", "test");
		return (document.location.href = "/");
	}

	const trimedId = id.trim();
	const trimedPassword = password.trim();

	const result = await fetch(`${API_BASE_URL}/auth/login`, {
		method: "POST",
		body: JSON.stringify({ id: trimedId, password: trimedPassword }),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());

	if (result.status !== true) return alert(result.message);
	localStorage.setItem("code", result.code);
	localStorage.setItem("renewalDate", new Date().getTime().toString());

	return (document.location.href = "/");
};

export const register = async (
	id: string,
	password: string,
	studentId: string,
	name: string,
) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");

	const trimedId = id.trim();
	const trimedPassword = password.trim();
	const trimedStudentId = studentId.trim();
	const trimedName = name.trim();

	// 공백 확인
	if (
		trimedId.includes(" ") ||
		trimedPassword.includes(" ") ||
		trimedStudentId.includes(" ") ||
		trimedName.includes(" ")
	)
		return alert("아이디, 비밀번호, 학번, 이름에 공백이 포함될 수 없습니다.");

	const result = await fetch(`${API_BASE_URL}/auth/register`, {
		method: "POST",
		body: JSON.stringify({
			id: trimedId,
			password: trimedPassword,
			studentId: trimedStudentId,
			name: trimedName,
		}),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
	console.log("🚀 ~ result:", result);

	if (result.status !== true) return alert(result.message);
	return (document.location.href = "/login");
};

export const checkAdmin = async () => {
	const code = localStorage.getItem("code");
	if (code === "test") return true;

	const result = await fetch(`${API_BASE_URL}/auth/admin?code=${code}`).then(
		(res) => res.json(),
	);

	if (result.status !== true) return false;
	return true;
};

const regenerateQR = async () => {
	const code = localStorage.getItem("code");
	const result = await fetch(
		`${API_BASE_URL}/auth/regenerate?code=${code}`,
	).then((res) => res.json());

	if (result.status !== true) {
		alert("QR 코드 갱신에 오류가 발생했습니다.");
		return false;
	}

	localStorage.setItem("code", result.code);
	localStorage.setItem("renewalDate", new Date().getTime().toString());
	return true;
};

export const checkQR = async () => {
	const code = localStorage.getItem("code");
	const result = await fetch(`${API_BASE_URL}/auth/check?code=${code}`).then(
		(res) => res.json(),
	);

	return result.status;

	// if (result.status === true) {
	// 	const now = new Date().getTime();
	// 	const renewalDate = localStorage.getItem("renewalDate");

	// 	if (
	// 		renewalDate === null ||
	// 		now - Number(renewalDate) > 1000 * 60 * 60 * 24
	// 	)
	// 		return regenerateQR();

	// 	return true;
	// }
	// return false;
};

export const getRecentAccess = async () => {
	const code = localStorage.getItem("code");
	const result = await fetch(`${API_BASE_URL}/auth/recent?code=${code}`).then(
		(res) => res.json(),
	);

	if (result.status !== true) return undefined;
	return result.data;
};
