import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Link href={"/"} className={"flex gap-6 items-center"}>
        <Image
          src={`/Capoeira-derby-header.png`}
          alt="Capoeira Derby"
          fill
        />
        <div
          className={`text-4xl text-orange-400 font-bold hidden sm:block`}
        >
          Magpys
        </div>
      </Link>
      <h1>Welcome to Capoeira Derby!</h1>
    </div>
  );
}
