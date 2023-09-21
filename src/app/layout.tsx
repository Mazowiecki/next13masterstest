import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@ui/organisms/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			lang="en"
			className="sm:py-18 mx-auto flex w-full max-w-2xl flex-grow flex-col px-8 py-12 sm:px-6 lg:max-w-7xl"
		>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
