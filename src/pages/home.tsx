import { HomeFeature } from "../components/homeFeature";
import { checkAdmin } from "../services/auth";
import { useEffect, useState } from "react";
import { getLockStatus } from "../services/admin";
import { useNavigate } from "react-router-dom";
import { MdAdminPanelSettings, MdRefresh } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import homeLogo from "../assets/homeLogo.svg";
import { MoreInfo } from "../components/moreInfo";

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
					<img src={homeLogo} alt="site logo" className="w-7 h-7" />
					<span className=" text-2xl font-bold">MAKE@AMS</span>
				</div>
				<div className="flex flex-row ml-auto mr-4 gap-x-3">
					{isAdmin && (
						<MdAdminPanelSettings
							className="w-7 h-7 "
							onClick={() => navigator("/admin")}
						/>
					)}
					<MdRefresh
						className="w-7 h-7"
						onClick={() => window.location.reload()}
					/>
					<BiLogOut
						className="w-7 h-7"
						onClick={() => {
							if (confirm("로그아웃 하시겠습니까?")) {
								localStorage.removeItem("code");
								localStorage.removeItem("skip");
								return navigator("/login");
							}
						}}
					/>
				</div>
			</div>
			<div className="h-[3%]" />
			<HomeFeature status={lockStatus} isAdmin={isAdmin} />
			<MoreInfo />
		</div>
	);
};

export default Home;
