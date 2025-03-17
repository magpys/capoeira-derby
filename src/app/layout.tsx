import type { Metadata } from "next";
import "./globals.css";
import FacebookIcon from "@/components/FacebookIcon";
import StyledLink from "@/components/StyledLink";
import React from "react";
import Header from "@/components/Header";
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
      <body className={`antialiased min-h-screen`}>
        <Header />
        <main className={"text-gray-900 pt-22 bg-green-100 pb-10 text-lg"}>
          {children}
        </main>
        <footer
          className={
            "flex w-screen bg-amber-50 justify-center p-6 gap-6 items-center flex-col md:flex-row md:justify-between md:items-start"
          }
        >
          <div
            className={
              "flex flex-col justify-center items-center md:items-start"
            }
          >
            <p className={"font-bold text-lg"}>Quick Links</p>
            <StyledLink href={"/about"}>About</StyledLink>
            <StyledLink href={"/classes"}>Classes</StyledLink>
            <StyledLink href={"/faqs"}>FAQs</StyledLink>
          </div>
          <div className={"flex flex-col justify-center items-center"}>
            <p className={"font-bold text-lg"}>Contact</p>
            <p>Daniel Griffiths</p>
            <p>07970 446920</p>
          </div>
          <div className={"flex flex-col justify-center items-center gap-3"}>
            <p className={"font-bold text-lg"}>Find us on social media</p>
            <div className={"flex gap-3"}>
              <Link
                href="https://www.facebook.com/cdoderby"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
