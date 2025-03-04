"use client";
import { useState } from "react";
import Link from "next/link";

export default function MenuItem({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const [hover, setHover] = useState(false);

  return (
    <Link
      href={href}
      className="relative px-4 py-2 transition-transform duration-300"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="relative z-10">{title}</span>
      <div
        className={`absolute inset-0 -z-10 transition-all duration-300 rounded-lg ${
          hover ? "bg-yellow-400 scale-105 shadow-lg" : "bg-transparent"
        }`}
      ></div>
    </Link>
  );
}
