import { useEffect, useState } from "react";
import { ListView } from "../components/listView";
import { TitleBar } from "../components/titleBar";
import { getUsersPendingSignup } from "../services/admin";
import {
	AccessRequestView,
	AccessRequestViewProps,
} from "../components/accessRequestView";

export const AccessRequestPage = () => {
	const [accessRequests, setRequests] = useState<AccessRequestViewProps[]>(
		[]
	);
	useEffect(() => {
		getUsersPendingSignup().then(setRequests);
	}, []);

	return (
		<div>
			<div className="fixed bg-white w-full">
				<TitleBar title="가입 승인" />
			</div>
			<ListView
				items={accessRequests.map((log) => (
					<AccessRequestView
						studentId={log.studentId}
						name={log.name}
						id={log.id}
					/>
				))}
			/>
		</div>
	);
};
