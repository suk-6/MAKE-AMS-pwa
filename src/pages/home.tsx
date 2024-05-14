import { HomeFeature } from "../components/homeFeature";
import { TitleBar } from "../components/titleBar";

const Home = () => {
	if (!localStorage.getItem("code")) document.location.href = "/login";

	return (
		<div className="fixed w-full h-full bg-white">
			<TitleBar title="메이커스페이스 출입관리" />
			<HomeFeature />
		</div>
	);
};

export default Home;
