import "./globals.css";
import type { Metadata } from "next";
import { shareTechMono, sarpanch, orbitron } from "@/app/fonts";

export const metadata: Metadata = {
	title: "Cyberware, your one-stop shop for cybernetic enhancements",
	description:
		"Cyberware is the leading provider of cybernetic enhancements. We offer a wide range of products to enhance your body and mind. Shop now!",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${shareTechMono.variable} ${sarpanch.variable} ${orbitron.variable}`}
		>
			<body>{children}</body>
		</html>
	);
}
