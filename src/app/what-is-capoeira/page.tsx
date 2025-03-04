import TitleBanner from "@/components/TitleBanner";
import Image from "next/image";

export default function WhatIsCapoeiraPage() {
  return (
    <>
      <TitleBanner imageTitle={"rugendasroda.png"}>
        <h1 className="text-4xl font-bold text-white text-center">
          What is Capoeira?
        </h1>
      </TitleBanner>
      <section className="mx-auto max-w-5xl p-12 flex gap-3 flex-col">
        <p>
          Developed by African slaves and their descendants in Brazil, Capoeira
          eludes an easy definition and instead pulls the elements of dance,
          game-play and martial art together. Practitioners are often
          well-versed in each of these and teachers will adapt workshops and
          training to cover some or all these aspects.
        </p>
        <p className={"font-bold text-xl"}>...a fight?</p>
        <p>
          Capoeira was born in the slaves’ living quarters, the poor
          neighbourhoods and run-away communities in the 1800’s by those seeking
          to fight for freedom and self-expression. When slavery ended, mass
          migration brought this art of deception, trickery and fighting to the
          cities where gangs clashed over limited resources and fought for
          access to power and influence.
        </p>
        <div className={"flex flex-col justify-center items-center py-3"}>
          <Image
            src={"/laughing-roda.jpeg"}
            alt={
              "A man and child play capoeira while a group of musicians play and watch, laughing."
            }
            width={400}
            height={400}
          />
        </div>
        <p>
          As a result, Capoeira was heavily restricted until the 1940’s. Finally
          the Brazilian government acted to lift cultural barriers. Academies
          teaching capoeira began to open. Like other martial arts students in
          Capoeira now belong to schools, or groups, and wear uniforms and belts
          showing their level of experience.
        </p>
        <p className={"font-bold text-xl"}>…a dance?</p>
        <p>
          Capoeira is an exchange of physical movements between two players –
          one kicks high and the other ducks under, one sweeps low and the other
          cartwheels over. Between these exchanges the dancers will move apart
          executing backflips, cartwheels or maybe a handspin. The exchange
          between the dancers is surrounded by a circle of clapping and singing
          as onlookers await their turn. A group of musicians lead the music
          which in turn dictates how fast the dance takes place.
        </p>
        <p className={"font-bold text-xl"}>…a game?</p>
        <p>
          In the exchange of kicks and movements there are feints and trips
          designed to catch the other out. There are no winners; each player
          seeks to test their own reactions and skill by nudging gently against
          the limits of the opposing player. Played fast or slow, with humour or
          cunning, all games begin and end in the same way; with a handshake.
        </p>
      </section>
    </>
  );
}
