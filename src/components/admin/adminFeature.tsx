import { HomeButton } from "../homeButton";
import { TitleBar } from "../titleBar";

export const AdminFeature = () => {
	return (
		<div className="h-[25%]">
			<TitleBar title="관리자" />
			<div className="grid grid-rows-2 grid-cols-2 h-5/6 gap-y-3">
				<HomeButton text="강제 잠금" color="bg-red1" func={() => {}} />
				<HomeButton text="해제" color="bg-green1" func={() => {}} />
				<HomeButton text="가입 승인" color="bg-cyan1" func={() => {}} />
				<HomeButton
					text="출입 로그"
					color="bg-yellow1"
					func={() => {}}
				/>
			</div>
		</div>
	);
};
