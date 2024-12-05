import { Metadata } from "next";


// Next.js metadata
// NEXT WILL LOOK FOR THIS VARIABLE IF EXISTS WILL USE IT
// IF NOT EXISTS IT WILL USE THE DEFAULT ON PAGE.TSX
export const metadata: Metadata = {
    title: "About page",
    description: "ABOUT PAGE METADATA",
    keywords: ["about", "page", "Simón", "products"],
};

export default function AboutPage() {
    return (
        <main className="flex min-h-screen justify-center items-center">
            <h1 className="text-5xl">About</h1>
        </main>
    );
}