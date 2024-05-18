import { HomeFeature } from "../components/homeFeature";
import { TitleBar } from "../components/titleBar";
import { checkAdmin } from "../services/auth";
import { useEffect, useState } from "react";
import { LockStatusBox } from "../components/lockStatusBox";
import { getLockStatus } from "../services/admin";
import { HomeButton } from "../components/homeButton";
import { useNavigate } from "react-router-dom";

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
			<TitleBar title="메이커스페이스 출입관리" />
			<LockStatusBox status={lockStatus} />
			<div className="h-[3%]" />
			<HomeFeature />
			<div className="h-[5%]" />
			<div className="h-[10%] ">
				{isAdmin ? (
					<div className="flex flex-row h-full">
						<HomeButton
							text="관리자 메뉴"
							color="bg-gray-300"
							func={() => {
								localStorage.removeItem("code");
								localStorage.removeItem("skip");
								return navigator("/login");
							}}
						/>
						<HomeButton
							text="로그아웃"
							color="bg-gray-300"
							func={() => {
								localStorage.removeItem("code");
								localStorage.removeItem("skip");
								return navigator("/login");
							}}
						/>
					</div>
				) : (
					<HomeButton
						text="로그아웃"
						color="bg-gray-300"
						func={() => {
							localStorage.removeItem("code");
							localStorage.removeItem("skip");
							return navigator("/login");
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
