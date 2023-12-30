import CardContent from "@/components/card";

export default function AboutPage() {
	return (
		<div className="py-10 flex flex-wrap md:flex-shrink gap-6">
			<CardContent imageUrl="/about/danet.jpg" radioName="Working on KNN, Data Processing, and frontend" subtitle="@CADT" title="Danet" />
			<CardContent imageUrl="/about/pitou.jpg" radioName="Building ML backend API, using QDA as a model" subtitle="@CADT" title="Pitou" />
			<CardContent imageUrl="/about/sreymouch.jpg" radioName="Traning using Decision Tree" subtitle="@CADT" title="Sreymouch" />
			<CardContent imageUrl="/about/vortey.jpg" radioName="Using MLP" subtitle="@CADT" title="Votey" />
			<CardContent imageUrl="/about/star.png" radioName="Train model using Naive Bayes " subtitle="@CADT" title="Chichhorng" />

		</div>
	);
}
