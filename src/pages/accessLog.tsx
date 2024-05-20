import { useEffect, useState } from "react";
import { ListView } from "../components/listView";
import { TitleBar } from "../components/titleBar";
import { getAccessLogs } from "../services/admin";
import { AccessView, AccessViewProps } from "../components/accessView";

export const AccessLogPage = () => {
	const [accessLogs, setAccessLogs] = useState<AccessViewProps[]>([]);
	useEffect(() => {
		getAccessLogs().then(setAccessLogs);
	}, []);

	return (
		<div className=" overflow-scroll">
			<TitleBar title="출입 기록" />
			<ListView
				items={accessLogs.map((log) => (
					<AccessView
						studentId={log.studentId}
						name={log.name}
						timestamp={log.timestamp}
					/>
				))}
			/>
		</div>
	);
};
