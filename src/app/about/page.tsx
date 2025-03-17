"use client";
import TitleBanner from "@/components/TitleBanner";
import Image from "next/image";
import { useEffect } from "react";

export default function About() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  }, []);

  return (
    <>
      <TitleBanner imageTitle={"group-sitting.jpeg"}>
        <h1 className="text-4xl font-bold text-white text-center">About</h1>
      </TitleBanner>
      <section className="mx-auto max-w-5xl p-12 pb-0 flex gap-6 flex-col">
        <h2 className="text-2xl font-bold text-center mb-3">
          What Is Capoeira?
        </h2>
        <div className="flex flex-col md:flex-row gap-3">
          <div>
            <p>
              Developed by African slaves and their descendants in Brazil,
              Capoeira eludes an easy definition and instead pulls the elements
              of dance, game-play and martial art together. Practitioners are
              often well-versed in each of these and teachers will adapt
              workshops and training to cover some or all these aspects.
            </p>
            <p className={"italic text-xl my-2"}>...a fight?</p>
            <p>
              Capoeira was born in the slaves’ living quarters, the poor
              neighbourhoods and run-away communities in the 1800’s by those
              seeking to fight for freedom and self-expression. When slavery
              ended, mass migration brought this art of deception, trickery and
              fighting to the cities where gangs clashed over limited resources
              and fought for access to power and influence.
            </p>
          </div>
          <div className="min-w-fit flex flex-col justify-center items-center">
            <Image
              src={"laughing-roda.jpeg"}
              alt={
                "A man and child play capoeira while a group of musicians play and watch, laughing."
              }
              width={400}
              height={400}
            />
          </div>
        </div>
        <p>
          As a result, Capoeira was heavily restricted until the 1940’s. Finally
          the Brazilian government acted to lift cultural barriers. Academies
          teaching capoeira began to open. Like other martial arts students in
          Capoeira now belong to schools, or groups, and wear uniforms and belts
          showing their level of experience.
        </p>
        <p className={"italic text-xl my-2"}>…a dance?</p>
        <p>
          Capoeira is an exchange of physical movements between two players –
          one kicks high and the other ducks under, one sweeps low and the other
          cartwheels over. Between these exchanges the dancers will move apart
          executing backflips, cartwheels or maybe a handspin. The exchange
          between the dancers is surrounded by a circle of clapping and singing
          as onlookers await their turn. A group of musicians lead the music
          which in turn dictates how fast the dance takes place.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mt-3">
          <div className="min-w-fit flex flex-col justify-center items-center">
            <Image
              src={"rugendasroda.png"}
              alt={
                "A painting of a group of people participating in a Capoeira roda."
              }
              width={400}
              height={400}
            />
          </div>
          <div>
            <p className={"italic text-xl my-2"}>…a game?</p>
            <p>
              In the exchange of kicks and movements there are feints and trips
              designed to catch the other out. There are no winners; each player
              seeks to test their own reactions and skill by nudging gently
              against the limits of the opposing player. Played fast or slow,
              with humour or cunning, all games begin and end in the same way;
              with a handshake.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-5xl p-12 pt-0 flex gap-3 flex-col">
        <h2
          className="text-2xl font-bold text-center mb-3 pt-20"
          id="our-group"
        >
          Our Group
        </h2>
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
              Between them, the three have over 35 years of Capoeira experience.
              See a video of Dan below doing a short sequence!
            </p>
          </div>
          <Image
            src={"instructors.png"}
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
