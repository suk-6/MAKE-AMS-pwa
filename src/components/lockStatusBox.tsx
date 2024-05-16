import { DoorStatus } from "../misc/doorStatus";

interface lockStatusBoxProps {
	status: DoorStatus | undefined;
}

export const LockStatusBox = ({ status }: lockStatusBoxProps) => {
	if (status === DoorStatus.LOCKED) {
		return (
			<div className="bg-red1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
				출입 제한 상태입니다.
			</div>
		);
	}

	if (status === DoorStatus.RESTRICTED) {
		return (
			<div className="bg-green1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
				QR 출입 상태입니다.
			</div>
		);
	}

	if (status === DoorStatus.UNLOCKED) {
		return (
			<div className="bg-blue1 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
				자유 출입 상태입니다.
			</div>
		);
	}

	if (status === undefined) {
		return (
			<div className="bg-gray-300 flex border-spacing-2 p-5 m-2 text-3xl font-bold font-['Pretendard'] justify-center items-center">
				로딩 중...
			</div>
		);
	}
};
