import { Title } from "@/components/Title";
import { ListOfTerms } from "@/components/ListOfTerms";
import { type Term } from "@/types";

const returnPolicy: Term[] = [
	{
		title: "Returns",
		content:
			"You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.",
	},
	{
		title: "Refunds",
		content:
			"Once we receive your item, we will inspect it and notify you that we have received your returned item. If your return is approved, we will initiate a refund to your credit card (or original method of payment).",
	},
	{
		title: "Shipping",
		content:
			"You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non-refundable. If you have any questions on how to return your item to us, contact us.",
	},
];

export default function ReturnPolicy() {
	return (
		<>
			<Title>Return policy</Title>
			<ListOfTerms list={returnPolicy} />
		</>
	);
}
