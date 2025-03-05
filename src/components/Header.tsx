"use client";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "@/components/MenuItem";
import React from "react";

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
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
        <div className={"hidden lg:flex flex-row justify-center font-bold"}>
          <MenuItem href={"/what-is-capoeira"} title={"What is Capoeira?"} />
          <MenuItem href={"/can-i-do-capoeira"} title={"Can I do Capoeira?"} />
          <MenuItem href={"/classes"} title={"Classes"} />
          <MenuItem href={"/our-group"} title={"Our Group"} />
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </header>
      <div
        className={`fixed z-30 top-0 right-0 w-64 h-full bg-white transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div
          className={"flex flex-col justify-center font-bold pt-15 px-5 gap-3"}
        >
          <MenuItem href={"/what-is-capoeira"} title={"What is Capoeira?"} />
          <MenuItem href={"/can-i-do-capoeira"} title={"Can I do Capoeira?"} />
          <MenuItem href={"/classes"} title={"Classes"} />
          <MenuItem href={"/our-group"} title={"Our Group"} />
        </div>
      </div>
    </>
  );
}
