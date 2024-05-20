import { ReactNode } from "react";

interface ListViewProps {
	items: ReactNode[];
}

export const ListView = ({ items }: ListViewProps) => (
	<ol className="h-full overflow-y-scroll pt-14">
		{items.map((item, index) => (
			<li key={index}>{item}</li>
		))}
	</ol>
);
