import TitleBanner from "@/components/TitleBanner";
import Image from "next/image";

export default function OurGroupPage() {
  return (
    <>
      <TitleBanner imageTitle={"group-sitting.jpeg"}>
        <h1 className="text-4xl font-bold text-white text-center">Our Group</h1>
      </TitleBanner>
      <section className="mx-auto max-w-5xl p-12 flex gap-3 flex-col">
        <p>
          Capoeira Derby is a part of Capoeira Tucum, which has UK groups in
          Manchester, Sheffield, and Edinburgh, as well as groups across Europe
          and S.E. Asia. The word “Tucum” refers to the heartwood of the palm
          tree used to make the striker for the Berimbau, the lead instrument of
          Capoeira. It is a wood imbued with power and mystic potency in the
          folklore of Brazil, and within Capoeira particularly.
        </p>
        <p>
          Capoeira Tucum was founded in 2021 by our Mestre Papa-Leguas. It
          sprouted from its parent group Cordao de Ouro and upholds the
          signature style of contemporary Capoeira technique and training that
          that group spearheaded.
        </p>
        <div
          className={
            "flex flex-col-reverse gap-6 items-center mt-3 md:flex-row"
          }
        >
          <div className={"flex flex-col gap-3"}>
            <p>
              Capoeira Derby has existed since 2003, first under Cordao de Ouro,
              and now under Capoeira Tucum. Mestre Adam is the founder of our
              group and it is currently run by his senior students - Dan, Dave
              and Andy.
            </p>
            <p>
              Between them, the three have over X years of Capoeira experience.
              See a video of Dan below doing a short sequence!
            </p>
          </div>
          <Image
            src={"/instructors.png"}
            alt={
              "The head and shoulders of three men, smiling into the camera with arms around each others' shoulders."
            }
            width={"500"}
            height={"500"}
          />
        </div>
        <div className={"flex flex-col justify-center items-center mt-10"}>
          <video controls width="600">
            <source src="/dan-sequence.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </section>
    </>
  );
}
