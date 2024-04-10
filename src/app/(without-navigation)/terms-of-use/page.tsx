import { Title } from "@/components/atoms/Title";
import { ListOfTerms } from "@/components/atoms/ListOfTerms";
import { type Term } from "@/types/Terms";

const termsOfUse: Term[] = [
	{
		title: "Acceptance of Terms",
		content:
			"By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.",
	},
	{
		title: "Use of the Website",
		content:
			"You agree to use this website only for lawful purposes, and in a way that does not infringe the rights of, restrict or inhibit anyone else's use and enjoyment of the website.",
	},
	{
		title: "Privacy",
		content:
			"Your privacy is important to us. Please read our Privacy Policy for information about how we collect, use, and disclose your personal information.",
	},
	{
		title: "Changes to the Terms",
		content:
			"We may revise these terms of use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made.",
	},
	{
		title: "Governing Law",
		content:
			"These terms of use and any dispute or claim arising out of or in connection with them or their subject matter or formation shall be governed by and construed in accordance with the law of Night City.",
	},
];

export default function TermsOfUse() {
	return (
		<>
			<Title>Terms of use</Title>
			<ListOfTerms list={termsOfUse} />
		</>
	);
}
