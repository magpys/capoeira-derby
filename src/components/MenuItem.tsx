import Link from "next/link";

export default function MenuItem({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="px-4 py-2 hover:bg-yellow-400 hover:scale-105 hover:shadow-lg rounded-lg inline-block"
    >
      {title}
    </Link>
  );
}
