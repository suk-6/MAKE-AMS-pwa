import { HomeFeature } from "../components/homeFeature";
import { TitleBar } from "../components/titleBar";
import { AdminFeature } from "../components/admin/adminFeature";
import { checkAdmin } from "../services/auth";
import { useEffect, useState } from "react";
import { LockStatusBox } from "../components/lockStatusBox";
import { DoorStatus } from "../misc/doorStatus";
import { getLockStatus } from "../services/admin";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";
	const [isAdmin, setIsAdmin] = useState(false);
	const [lockStatus, setLockStatus] = useState(DoorStatus.LOCKED);

	useEffect(() => {
		checkAdmin().then((result) => {
			setIsAdmin(result);
		});

		getLockStatus().then((status) => {
			setLockStatus(status.status);
		});
	});

	return (
		<div className="fixed w-full h-full bg-white">
			<TitleBar title="메이커스페이스 출입관리" />
			<LockStatusBox status={lockStatus} />
			<div className="h-4"></div>
			<HomeFeature />
			{isAdmin && <AdminFeature />}
		</div>
	);
};

export default Home;
