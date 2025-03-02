import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Capoeira Derby",
  description: "Capoeira Derby",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
      >
      <header className={`bg-white flex items-center justify-between p-12 gap-6 h-20 fixed z-10 w-screen`}>
        <Link href={"/"}>
          <Image
            src={`/Capoeira-derby-text-only.png`}
            alt="Capoeira Derby"
            width={200}
            height={200}
            className="object-contain"
          />
        </Link>
        <div className={"flex flex-row justify-center gap-6"}>
          <Link href={"/what-is-capoeira"}>What is Capoeira?</Link>
          <Link href={"/can-i-do-capoeira"}>Can I do Capoeira?</Link>
          <Link href={"/classes"}>Classes</Link>
          <Link href={"/our-group"}>Our Group</Link>
        </div>
      </header>
      <main className={"text-gray-900 pt-22 bg-green-100 pb-10"}>
        {children}
      </main>
      <footer className={"flex w-screen bg-amber-50 justify-between p-6 gap-6"}>
        <div className={"flex flex-col"}>
          <p>Contact</p>
          <p>Daniel Griffiths</p>
          <p>07970 446920</p>
        </div>
        <div className={"flex flex-col"}>
          <Link href={"/what-is-capoeira"}>What is Capoeira?</Link>
          <Link href={"/can-i-do-capoeira"}>Can I do Capoeira?</Link>
          <Link href={"/classes"}>Classes</Link>
          <Link href={"/our-group"}>Our Group</Link>
        </div>
        <div>
          Social media shit!
        </div>
      </footer>
      </body>
    </html>
  );
}
