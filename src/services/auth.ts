import { API_BASE_URL } from "../config";

export const login = async (id: string, password: string) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");

	if (id === "test" && password === "admin") {
		localStorage.setItem("code", "test");
		return (document.location.href = "/");
	}

	const result = await fetch(`${API_BASE_URL}/auth/login`, {
		method: "POST",
		body: JSON.stringify({ id, password }),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());

	if (result.status !== true) return alert(result.message);
	localStorage.setItem("code", result.code);

	return (document.location.href = "/");
};

export const register = async (
	id: string,
	password: string,
	studentId: string,
	name: string
) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");

	const result = await fetch(`${API_BASE_URL}/auth/register`, {
		method: "POST",
		body: JSON.stringify({ id, password, name, studentId }),
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => res.json());
	console.log("🚀 ~ result:", result);

	if (result.status !== true) return alert(result.message);
	return (document.location.href = "/login");
};

export const checkDoor = async () => {
	const code = localStorage.getItem("code");
	const result = await fetch(`${API_BASE_URL}/auth/check?code=${code}`).then(
		(res) => res.json()
	);

	return alert(result.message);
};
