import { ReactNode } from "react";

type TitleBannerProps = {
  children: ReactNode;
  imageTitle: string;
};

export default function TitleBanner({
  children,
  imageTitle,
}: TitleBannerProps) {
  const isProd = process.env.NODE_ENV === "production";
  const basePath = isProd ? "/capoeira-derby" : "";

  return (
    <section
      className={`relative w-full h-96  bg-cover bg-center bg-no-repeat`}
      style={{ backgroundImage: `url('${basePath}/${imageTitle}')` }}
    >
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center p-6">
        {children}
      </div>
    </section>
  );
}
