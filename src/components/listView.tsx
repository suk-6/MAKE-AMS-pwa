import { ReactNode } from "react";

interface ListViewProps {
    items: ReactNode[];
}

export const ListView = ({
    items
}: ListViewProps) => (
    <ol className="h-full overflow-y-scroll">
        {items.map((item, index) => <li key={index}>{item}</li>)}
    </ol>
)