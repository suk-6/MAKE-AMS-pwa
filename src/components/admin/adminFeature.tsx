import { HomeButton } from "../homeButton";
import { TitleBar } from "../titleBar";

export const AdminFeature = () => {
	return (
		<div className="h-[25%]">
			<TitleBar title="관리자" />
			<div className="grid grid-cols-2 h-[50%]">
				<HomeButton text="잠금" color="green" func={() => {}} />
				<HomeButton text="잠금" color="green" func={() => {}} />
			</div>
		</div>
	);
};
