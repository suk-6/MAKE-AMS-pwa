import { useEffect, useState } from "react";
import { getRecentAccess } from "../services/auth";

export const MoreInfo = () => {
	const [recentAccess, setRecentAccess] = useState<
		{ username: string; time: number } | undefined
	>(undefined);

	const timeFormat = new Intl.DateTimeFormat("ko", {
		dateStyle: "medium",
		timeStyle: "medium",
	}).format;

	useEffect(() => {
		getRecentAccess().then((data) => {
			setRecentAccess(data);
		});
	}, []);

	return (
		<div className="w-full flex justify-center items-start">
			<div className=" flex flex-col gap-y-2 pt-10 w-[90%]">
				<div className="flex flex-col justify-end text-gray-600">
					<div className=" font-semibold text-lg">
						{recentAccess && `${recentAccess.username}님 최근 출입`}
					</div>
					<div>
						{recentAccess === undefined
							? "최근 출입 기록이 없습니다."
							: timeFormat(new Date(recentAccess.time))}
					</div>
				</div>
				<div className="w-full h-[0.1rem] bg-gray-300" />
			</div>
		</div>
	);
};
