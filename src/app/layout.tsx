import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/components/FacebookIcon";
import InstagramIcon from "@/components/InstagramIcon";
import MenuItem from "@/components/MenuItem";
import StyledLink from "@/components/StyledLink";

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
      <body className={`antialiased min-h-screen`}>
        <header
          className={`bg-white flex items-center justify-between p-12 gap-6 h-20 fixed z-10 w-screen`}
        >
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
            <MenuItem href={"/what-is-capoeira"} title={"What is Capoeira?"} />
            <MenuItem
              href={"/can-i-do-capoeira"}
              title={"Can I do Capoeira?"}
            />
            <MenuItem href={"/classes"} title={"Classes"} />
            <MenuItem href={"/our-group"} title={"Our Group"} />
          </div>
        </header>
        <main className={"text-gray-900 pt-22 bg-green-100 pb-10"}>
          {children}
        </main>
        <footer
          className={
            "flex w-screen bg-amber-50 justify-between p-6 gap-6 items-start"
          }
        >
          <div className={"flex flex-col justify-center"}>
            <p className={"font-bold text-lg"}>Quick Links</p>
            <StyledLink href={"/what-is-capoeira"}>
              What is Capoeira?
            </StyledLink>
            <StyledLink href={"/can-i-do-capoeira"}>
              Can I do Capoeira?
            </StyledLink>
            <StyledLink href={"/classes"}>Classes</StyledLink>
            <StyledLink href={"/our-group"}>Our Group</StyledLink>
          </div>
          <div className={"flex flex-col justify-center items-center"}>
            <p className={"font-bold text-lg"}>Contact</p>
            <p>Daniel Griffiths</p>
            <p>07970 446920</p>
          </div>
          <div className={"flex flex-col justify-center items-center gap-3"}>
            <p className={"font-bold text-lg"}>Find us on social media</p>
            <div className={"flex gap-3"}>
              <FacebookIcon />
              <InstagramIcon />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
