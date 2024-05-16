import { DoorStatus } from "../misc/doorStatus";

interface lockStatusBoxProps {
	status: DoorStatus | undefined;
}

export const LockStatusBox = ({ status }: lockStatusBoxProps) => {
	const boxClass =
		"flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center";

	switch (status) {
		case DoorStatus.LOCKED:
			return (
				<div className={`${boxClass} bg-red1`}>
					출입 제한 상태입니다.
				</div>
			);

		case DoorStatus.RESTRICTED:
			return (
				<div className={`${boxClass} bg-green1`}>
					QR 출입 상태입니다.
				</div>
			);

		case DoorStatus.UNLOCKED:
			return (
				<div className={`${boxClass} bg-blue1`}>
					자유 출입 상태입니다.
				</div>
			);

		default:
			return <div className={`${boxClass} bg-gray-300`}>로딩 중...</div>;
	}
};
