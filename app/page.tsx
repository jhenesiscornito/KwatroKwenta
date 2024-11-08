import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-8xl font-bold bg-gradient-to-tl from-zinc-900 to-green-600 bg-clip-text text-transparent text-shadow-lg">Kwenta</h1>
      <h5 className="mb-16">Start Your Financial Journey With Us</h5>
      <Link href="/login" className="w-[200px] bg-gradient-to-tl from-zinc-900 to-green-700 rounded-xl py-2 lg:py-3 px-2 text-white shadow-lg font-medium border border-white text-center hover:text-green-400 transition duration-300">Get Started Now</Link>
    </div>
  );
}