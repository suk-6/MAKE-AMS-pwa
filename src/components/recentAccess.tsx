import { useEffect, useState } from "react";
import { getRecentAccess } from "../services/auth";

export const RecentAccess = () => {
	const [recentAccess, setRecentAccess] = useState(undefined);

	const timeFormat = new Intl.DateTimeFormat("ko", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format;

	useEffect(() => {
		getRecentAccess().then((data) => {
			setRecentAccess(data);
		});
	}, [recentAccess]);

	return (
		<div className="w-full flex justify-center items-start">
			<div className=" flex flex-col gap-y-2 pt-10 w-[90%]">
				<div className="flex flex-row text-gray-300">
					<span>
						{recentAccess === undefined
							? "최근 출입 기록이 없습니다."
							: `최근 출입: ${timeFormat(
									new Date(recentAccess)
							  )}`}
					</span>
				</div>
				<div className="w-full h-1 bg-gray-200" />
			</div>
		</div>
	);
};
