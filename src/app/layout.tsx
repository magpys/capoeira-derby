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
      <header className={`bg-white flex items-center justify-between p-12 gap-6 h-20`}>
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
      <main className={"text-gray-900"}>
        {children}
      </main>
      </body>
    </html>
  );
}
