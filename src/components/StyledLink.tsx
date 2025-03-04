import Link from "next/link";

export default function StyledLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="relative text-blue-600 underline decoration-2 hover:text-yellow-400"
    >
      {children}
    </Link>
  );
}
