import { Metadata } from "next";

export const metadata: Metadata = {
    title: "PRICING page",
    description: "PRICING PAGE METADATA",
    keywords: ["about", "page", "Simón", "products"],
};

export default function PricingPage() {
    return (
        <main className="flex min-h-screen justify-center items-center">
            <h1 className="text-5xl">Pricing</h1>
        </main>
    );
}