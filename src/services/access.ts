import { API_BASE_URL } from "../config";

export const openDoor = async () => {
	const code = localStorage.getItem("code");
	const result = await fetch(`${API_BASE_URL}/open`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ code }),
	}).then((res) => res.json());

	console.log(result);
};
