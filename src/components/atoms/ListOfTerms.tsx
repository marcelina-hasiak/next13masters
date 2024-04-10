import { vstack } from "@/styled-system/patterns";
import { css } from "@/styled-system/css";
import { type Term } from "@/types";

const listStyles = vstack({
	alignItems: "flex-start",
	gap: "1.5rem",
	maxWidth: "40rem",
	margin: "0 auto",
});

const termStyles = css({ fontSize: "0.85rem" });

export const ListOfTerms = ({ list }: { list: Term[] }) => {
	return (
		<ul className={listStyles}>
			{list.map(({ title, content }) => (
				<li key={title}>
					<h3>{title}</h3>
					<p className={termStyles}>{content}</p>
				</li>
			))}
		</ul>
	);
};
