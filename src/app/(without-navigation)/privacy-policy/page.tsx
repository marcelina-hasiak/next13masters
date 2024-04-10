import { Title } from "@/components/atoms/Title";
import { ListOfTerms } from "@/components/atoms/ListOfTerms";
import { type Term } from "@/types";

const privacyPolicy: Term[] = [
	{
		title: "Personal Information Collection",
		content:
			"We collect various types of personal information when you use our services, such as your name, email address, and payment information. We use this information to provide, improve, and personalize our services.",
	},
	{
		title: "Use of Personal Information",
		content:
			"We use your personal information to process your transactions, send you notifications, and offer customer support. We may also use your personal information to improve and personalize our services.",
	},
	{
		title: "Sharing of Personal Information",
		content:
			"We do not sell or share your personal information with third parties for their marketing purposes without your explicit consent. We may share your personal information with service providers who perform services on our behalf.",
	},
	{
		title: "Cookies and Tracking Technologies",
		content:
			"We use cookies and similar tracking technologies to provide and improve our services, and to display relevant content, products, services, and advertising.",
	},
	{
		title: "Data Security",
		content:
			"We use reasonable measures to help protect your personal information and ensure its security.",
	},
	{
		title: "Changes to This Privacy Policy",
		content:
			"We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
	},
	{
		title: "Contact Us",
		content:
			"If you have any questions about this Privacy Policy, please contact us.",
	},
];

export default function PrivacyPolicy() {
	return (
		<>
			<Title>Privacy policy</Title>
			<ListOfTerms list={privacyPolicy} />
		</>
	);
}
