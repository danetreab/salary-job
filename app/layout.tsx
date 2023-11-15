import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import localFont from 'next/font/local'
import Image from "next/image";



const sharp_grotesk = localFont({
	src: [
		{
			path: '../public/font/SharpGrotesk-Thin20.otf',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../public/font/SharpGrotesk-Medium15.otf',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../public/font/SharpGrotesk-Book20.otf',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../public/font/SharpGrotesk-SemiBold20.otf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../public/font/SharpGrotesk-Bold10.otf',
			weight: '700',
			style: 'normal',
		}
	],
})


export const metadata: Metadata = {
	title: {
		default: siteConfig.name,
		template: `%s - ${siteConfig.name}`,
	},
	description: siteConfig.description,
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
	icons: {
		icon: "/dogeball.png",
		shortcut: "/dogeball.png",
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background antialiased",
					// fontSans.variable
					sharp_grotesk.className
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 z-0">
						<Image src="/gradients/docs-left.png" width={1000} height={1000} className=" relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large" alt="docs left background" data-loaded="true" />
					</div>
					<div aria-hidden="true" className="fixed hidden dark:md:block dark:opacity-70 z-0 rotate-12 top-[-20%] right-[-20%]">
						<Image src="/gradients/docs-right.png" width={1000} height={1000} className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-100 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large" alt="docs right background" data-loaded="true" />
					</div>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							{children}
						</main>
					</div>
				</Providers>
			</body>
		</html>
	);
}
