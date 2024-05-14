export const login = async (id: string, password: string) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");
	console.log("login: ", id, password);
};

export const register = async (
	id: string,
	password: string,
	studentId: string
) => {
	if (id === "" || password === "")
		return alert("아이디와 비밀번호를 입력해주세요");
	console.log("register: ", id, password, studentId);
};
