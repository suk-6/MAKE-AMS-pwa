import { AccessViewProps } from "../components/accessView";

export const getUsersPendingSignup = async () => {
	return [
		{
			id: "test",
			name: "test",
			studentId: "test",
		},
		{
			id: "test2",
			name: "test2",
			studentId: "test2",
		},
	];
};

export const getAccessLogs = async (): Promise<AccessViewProps[]> => {
	return [
		{
			studentId: "test",
			name: "test",
			timestamp: Date.now(),
		},
		{
			studentId: "test2",
			name: "test2",
			timestamp: Date.now(),
		},
	];
};

// export const approveUser = async () => {};
// export const lockDoor = async () => {};
// export const unlockDoor = async () => {};
