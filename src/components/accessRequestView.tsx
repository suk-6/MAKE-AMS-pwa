import { approveUser, rejectUser } from "../services/admin";

export interface AccessRequestViewProps {
	studentId: string;
	name: string;
	id: string;
}

Intl.DateTimeFormat("kr", {
	dateStyle: "medium",
});

export const AccessRequestView = ({
	studentId,
	name,
	id,
}: AccessRequestViewProps) => (
	<div className="p-5 border-b border-gray-200 flex flex-row">
		<div className="info">
			<div className="text-sm text-gray-600">학번: {studentId}</div>
			<div className="text-lg font-semibold">{name}</div>
			<div className="text-sm text-gray-500">아이디: {id}</div>
		</div>
		<div className="buttons ml-auto mr-0 flex justify-center gap-2 text-xs">
			<button
				onClick={() => {
					if (confirm(`${name}님을 승인하시겠습니까?`))
						approveUser(id).then((res) => {
							if (res) alert("승인되었습니다.");
							location.reload();
						});
				}}
			>
				<span className="px-4 py-[0.6rem] border rounded-sm transition ease-in-out duration-100 hover:bg-gray-100">
					승인
				</span>
			</button>
			<button
				onClick={() => {
					if (confirm(`${name}님을 거절하시겠습니까?`))
						rejectUser(id).then((res) => {
							if (res) alert("거절되었습니다.");
							location.reload();
						});
				}}
			>
				<span className="px-4 py-[0.6rem] border rounded-sm transition ease-in-out duration-100 hover:bg-gray-100">
					거절
				</span>
			</button>
		</div>
	</div>
);
