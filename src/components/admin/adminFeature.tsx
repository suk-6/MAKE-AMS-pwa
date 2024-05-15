import { lockDoor, restrictDoor, unlockDoor } from "../../services/admin";
import { HomeButton } from "../homeButton";
import { TitleBar } from "../titleBar";

export const AdminFeature = () => {
	return (
		<div className="h-[25%]">
			<TitleBar title="관리자" />
			<div className="grid grid-rows-2 h-5/6 gap-y-3">
				<div className="grid grid-cols-3">
					<HomeButton
						text="출입 제한"
						color="bg-red1"
						func={() => {
							lockDoor().then((res) => {
								if (res)
									alert("출입 제한 상태로 변경되었습니다.");
								location.reload();
							});
						}}
					/>
					<HomeButton
						text="QR 출입"
						color="bg-green1"
						func={() => {
							restrictDoor().then((res) => {
								if (res)
									alert("QR 출입 상태로 변경되었습니다.");
								location.reload();
							});
						}}
					/>
					<HomeButton
						text="해제"
						color="bg-blue1"
						func={() => {
							unlockDoor().then((res) => {
								if (res)
									alert("자유 출입 상태로 변경되었습니다.");
								location.reload();
							});
						}}
					/>
				</div>
				<div className="grid grid-cols-2">
					<HomeButton
						text="가입 승인"
						color="bg-gray-300"
						func={() => {
							location.href = "/access-request";
						}}
					/>
					<HomeButton
						text="출입 기록"
						color="bg-gray-300"
						func={() => {
							location.href = "/access-log";
						}}
					/>
				</div>
			</div>
		</div>
	);
};
