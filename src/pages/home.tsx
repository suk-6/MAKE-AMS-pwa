import { HomeFeature } from "../components/homeFeature";
import { TitleBar } from "../components/titleBar";
import { AdminFeature } from "../components/admin/adminFeature";
import { checkAdmin } from "../services/auth";
import { useEffect, useState } from "react";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		checkAdmin().then((result) => {
			setIsAdmin(result);
		});
	});

	return (
		<div className="fixed w-full h-full bg-white">
			<TitleBar title="메이커스페이스 출입관리" />
			<HomeFeature />
			{isAdmin && <AdminFeature />}
		</div>
	);
};

export default Home;
