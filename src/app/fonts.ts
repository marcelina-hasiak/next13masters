import {
	Orbitron,
	Sarpanch,
	Share_Tech_Mono,
} from "next/font/google";

export const shareTechMono = Share_Tech_Mono({
	weight: ["400"],
	subsets: ["latin"],
	display: "swap",
	variable: "--share-tech-mono",
});

export const orbitron = Orbitron({
	weight: ["500"],
	subsets: ["latin"],
	display: "swap",
	variable: "--orbitron",
});

export const sarpanch = Sarpanch({
	weight: ["700"],
	subsets: ["latin"],
	display: "swap",
	variable: "--sarpanch",
});
