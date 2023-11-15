import CardContent from "@/components/card";

export default function AboutPage() {
	return (
		<div className="py-10 flex flex-wrap md:flex-shrink gap-6">
			<CardContent imageUrl="/dogeball.png" radioName="Something" subtitle="@CADT" title="Danet" />
			<CardContent imageUrl="/dogeball.png" radioName="Hello" subtitle="Hello" title="Hello" />
			<CardContent imageUrl="/dogeball.png" radioName="Hello" subtitle="Hello" title="Hello" />
		</div>
	);
}
