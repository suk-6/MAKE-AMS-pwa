import { HomeFeature } from "../components/homeFeature";
import { checkAdmin } from "../services/auth";
import { useEffect, useState } from "react";
import { getLockStatus } from "../services/admin";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import homeLogo from "../assets/homeLogo.svg";
import { RecentAccess } from "../components/recentAccess";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";
	const [isAdmin, setIsAdmin] = useState(false);
	const [lockStatus, setLockStatus] = useState(undefined);
	const navigator = useNavigate();

	useEffect(() => {
		checkAdmin().then((result) => {
			setIsAdmin(result);
		});

		getLockStatus().then((status) => {
			setLockStatus(status.status);
		});
	}, []);

	return (
		<div className="fixed w-full h-full bg-white">
			<div className="h-[3%]" />
			<div className="w-full flex flex-row">
				<div className="flex flex-row pl-4 items-center gap-x-2">
					<img src={homeLogo} className="w-7 h-7" />
					<span className=" text-2xl font-bold">MAKE Gate</span>
				</div>
				<div className="flex flex-row ml-auto mr-4 gap-x-3">
					{isAdmin && (
						<MdAdminPanelSettings
							className="w-8 h-8 "
							onClick={() => navigator("/admin")}
						/>
					)}
					<BiLogOut
						className="w-8 h-8"
						onClick={() => {
							localStorage.removeItem("code");
							localStorage.removeItem("skip");
							return navigator("/login");
						}}
					/>
				</div>
			</div>
			<div className="h-[3%]" />
			<HomeFeature status={lockStatus} />
			<RecentAccess />
		</div>
	);
};

export default Home;
