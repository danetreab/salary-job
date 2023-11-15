import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Card, CardHeader, CardBody, CardFooter, Divider, Image, Snippet, Code } from "@nextui-org/react";
import { Link as LinkStyles } from "@nextui-org/react";

export default function Home() {

	const predictNavItem = siteConfig.navItems.find((navItem) => navItem.label === 'Predict');

	const predictHref = predictNavItem ? predictNavItem.href : '';


	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-lg text-center justify-center">
				<h1 className={title()}>Make&nbsp;</h1>
				<h1 className={title({ color: "violet" })}>accurate&nbsp;</h1>
				<br />
				<h1 className={title()}>
					prediction with Machine Learning
				</h1>
			</div>

			<div className="py-5">
				<Card className="max-w-[400px]">
					<CardHeader className="flex gap-3">
						<Image
							alt="nextui logo"
							height={40}
							radius="sm"
							src="/dogeball.png"
							width={40}
						/>
						<div className="flex flex-col">
							<p className="text-md">Dataset</p>
							<Link href="https://www.kaggle.com/datasets/ravindrasinghrana/job-description-dataset">
								<p className="text-small text-default-500">https://kaggle.com/</p>
							</Link>
						</div>
					</CardHeader>
					<Divider />
					<CardBody>
						<p>Create beautiful world with AI. This is the random {" "}
							<LinkStyles underline="hover" href="https://github.com/freddyt18/Job-Salary-Prediction-Project">
								dataset
							</LinkStyles>
							{" "} found on the internet that we use.
						</p>
					</CardBody>
					<Divider />
					<CardFooter>
						<Link
							isExternal
							showAnchorIcon
							href="https://github.com/freddyt18/Job-Salary-Prediction-Project"
						>
							Visit source code on GitHub.
						</Link>
					</CardFooter>
				</Card>
			</div>

			<div className="mt-8">
				<Snippet hideSymbol hideCopyButton variant="flat">
					<span>
						Predict your salary
					</span>
				</Snippet>
			</div>

			<div className="flex gap-3">
				<Link
					// isExternal
					href={predictHref}
					className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
				>
					Get started
				</Link>
			</div>
		</section>
	);
}
