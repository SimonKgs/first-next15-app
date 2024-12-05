import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col min-h-screen justify-center items-center">
        <h1 className="text-5xl">Hola mundo 👋</h1>
        <Link href="/about">About Page</Link>
      </main>
  );
}
