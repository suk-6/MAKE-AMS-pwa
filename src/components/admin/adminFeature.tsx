import { HomeButton } from "../homeButton";
import { TitleBar } from "../titleBar";

export const AdminFeature = () => {
	return (
		<div className="h-[25%]">
			<TitleBar title="관리자" />
			<div className="grid grid-rows-2 grid-cols-2 h-5/6 gap-y-3">
				<HomeButton
					text="강제 잠금"
					color="bg-red1"
					func={() => {
						alert("강제 잠금");
					}}
				/>
				<HomeButton
					text="해제"
					color="bg-green1"
					func={() => {
						alert("해제");
					}}
				/>
				<HomeButton
					text="가입 승인"
					color="bg-cyan1"
					func={() => {
						alert("가입 승인");
					}}
				/>
				<HomeButton
					text="출입 로그"
					color="bg-yellow1"
					func={() => {
						alert("출입 로그");
					}}
				/>
			</div>
		</div>
	);
};