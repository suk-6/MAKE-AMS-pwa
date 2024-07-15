import { AccessViewProps } from "../components/accessView";
import { API_BASE_URL } from "../config";

export const getUsersPendingSignup = async () => {
	return await fetch(
		`${API_BASE_URL}/admin/pendings?code=${localStorage.getItem("code")}`
	)
		.then((res) => {
			if (res.status !== 200) return [];
			return res.json();
		})
		.catch((e) => {
			alert(e);
		});
};

export const getAccessLogs = async (): Promise<AccessViewProps[]> => {
	return await fetch(
		`${API_BASE_URL}/admin/access-logs?code=${localStorage.getItem("code")}`
	)
		.then((res) => {
			if (res.status !== 200) return [];
			return res.json();
		})
		.catch((e) => {
			alert(e);
		});
};

export const approveAdmin = async (id: string) => {
	return await fetch(
		`${API_BASE_URL}/auth/setadmin?code=${localStorage.getItem(
			"code"
		)}&id=${id}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};

export const approveUser = async (id: string) => {
	return await fetch(
		`${API_BASE_URL}/admin/approve?code=${localStorage.getItem(
			"code"
		)}&id=${id}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};

export const rejectUser = async (id: string) => {
	return await fetch(
		`${API_BASE_URL}/admin/reject?code=${localStorage.getItem(
			"code"
		)}&id=${id}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};

export const getLockStatus = async () => {
	return await fetch(`${API_BASE_URL}/admin/door-status`)
		.then((res) => {
			if (res.status !== 200) return "error";
			return res.json();
		})
		.catch((e) => {
			alert(e);
		});
};

export const lockDoor = async () => {
	return await fetch(
		`${API_BASE_URL}/admin/lock?code=${localStorage.getItem("code")}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};

export const unlockDoor = async () => {
	return await fetch(
		`${API_BASE_URL}/admin/unlock?code=${localStorage.getItem("code")}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};

export const restrictDoor = async () => {
	return await fetch(
		`${API_BASE_URL}/admin/restrict?code=${localStorage.getItem("code")}`
	)
		.then((res) => {
			if (res.status !== 200) return false;
			return true;
		})
		.catch((e) => {
			alert(e);
		});
};
