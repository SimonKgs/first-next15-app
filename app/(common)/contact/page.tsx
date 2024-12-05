import { Metadata } from "next";

export const metadata: Metadata = {
    title: "CONTACT page",
    description: "ABOUT PAGE METADATA",
    keywords: ["about", "page", "Simón", "products"],
};

export default function ContactPage() {
    return (
        <main className="flex min-h-screen justify-center items-center">
            <h1 className="text-5xl">Contact</h1>
        </main>
    );
}