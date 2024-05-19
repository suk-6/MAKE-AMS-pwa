const timeFormat = new Intl.DateTimeFormat("ko", {
	dateStyle: "medium",
	timeStyle: "medium",
}).format;

export interface AccessViewProps {
	studentId: string;
	name: string;
	timestamp: number;
}

export const AccessView = ({ studentId, name, timestamp }: AccessViewProps) => (
	<div className="p-5 border-b border-gray-200">
		<div className="text-sm text-gray-600">학번: {studentId}</div>
		<div className="text-lg font-semibold">{name}</div>
		<div className="text-sm text-gray-500">
			{timeFormat(new Date(timestamp))}
		</div>
	</div>
);
