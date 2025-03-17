import StyledLink from "@/components/StyledLink";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-5xl p-12 flex gap-3 flex-col min-h-screen items-center">
      <h1 className="text-4xl font-bold text-center">Page Not Found</h1>
      <p className="text-2xl mt-3">
        The page you are looking for does not exist.
      </p>
      <StyledLink href={"/"}>Go Home</StyledLink>
    </section>
  );
}
