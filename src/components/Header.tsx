"use client";
import Link from "next/link";
import Image from "next/image";
import MenuItem from "@/components/MenuItem";
import React from "react";
import { useRouter } from "next/navigation";
import MenuItemButton from "@/components/MenuItemButton";

const menuItems: Record<string, string> = {
  "What is Capoeira?": "/what-is-capoeira",
  "Can I do Capoeira?": "/can-i-do-capoeira",
  Classes: "/classes",
  "Our Group": "/our-group",
};

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();

  function handleMobileMenuClick(href: string) {
    setIsOpen(false);
    router.push(href);
  }

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
          {Object.entries(menuItems).map(([key, value]) => (
            <MenuItem title={key} href={value} key={value} />
          ))}
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="lg:hidden cursor-pointer"
          aria-label="Open side menu"
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
        {isOpen && (
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 cursor-pointer"
            aria-label="Close side menu"
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
        )}
        <div
          className={"flex flex-col justify-center font-bold pt-15 px-5 gap-3"}
        >
          {isOpen && (
            <>
              <MenuItemButton
                title={"Home"}
                onClick={() => handleMobileMenuClick("/")}
              />
              {Object.entries(menuItems).map(([key, value]) => (
                <MenuItemButton
                  title={key}
                  onClick={() => handleMobileMenuClick(value)}
                  key={value}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
}
