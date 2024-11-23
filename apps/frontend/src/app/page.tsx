import Logo from "@/components/template/Logo";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="h-screen flex flex-col justify-center items-center gap-10 bg-[url('/background-inicio.svg')] bg-cover">
      
      <div>
        <Logo />
        <p className="text-zinc-500 font-light w-96 leading-6">
        Create and manage your event invitation quickly and easily!
        </p>
      </div>
      <Link href="/event">Create your event</Link>
    </div>
  )
};