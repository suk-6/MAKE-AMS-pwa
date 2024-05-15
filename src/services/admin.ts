import { AccessViewProps } from "../components/accessView";
import { API_BASE_URL } from "../config";

export const getUsersPendingSignup = async () => {
	return await fetch(
		`${API_BASE_URL}/admin/pendings?code=${localStorage.getItem("code")}`
	).then((res) => {
		if (res.status !== 200) return [];
		return res.json();
	});
};

export const getAccessLogs = async (): Promise<AccessViewProps[]> => {
	return await fetch(
		`${API_BASE_URL}/admin/access-logs?code=${localStorage.getItem("code")}`
	).then((res) => {
		if (res.status !== 200) return [];
		return res.json();
	});
};

// export const approveUser = async () => {};
// export const lockDoor = async () => {};
// export const unlockDoor = async () => {};
