import { lockDoor, unlockDoor } from "../../services/admin";
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
						lockDoor().then((res) => {
							if (res) alert("문이 잠겼습니다.");
							location.reload();
						});
					}}
				/>
				<HomeButton
					text="해제"
					color="bg-green1"
					func={() => {
						unlockDoor().then((res) => {
							if (res) alert("잠금이 해제되었습니다.");
							location.reload();
						});
					}}
				/>
				<HomeButton
					text="가입 승인"
					color="bg-cyan1"
					func={() => {
						location.href = "/access-request";
					}}
				/>
				<HomeButton
					text="출입 로그"
					color="bg-yellow1"
					func={() => {
						location.href = "/access-log";
					}}
				/>
			</div>
		</div>
	);
};
