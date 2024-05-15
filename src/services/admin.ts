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

export const getAccessLogs = async () => {
	return [
		{
			studentId: "test",
			name: "test",
			time: "2021-10-10 10:10:10",
		},
		{
			studentId: "test2",
			name: "test2",
			time: "2021-10-10 10:10:10",
		},
	];
};

// export const approveUser = async () => {};
// export const lockDoor = async () => {};
// export const unlockDoor = async () => {};
