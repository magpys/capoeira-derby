import Image from "next/image";
import TitleBanner from "@/components/TitleBanner";
import StyledLink from "@/components/StyledLink";

export default function Home() {
  return (
    <>
      <TitleBanner imageTitle={"group-smiling.jpeg"}>
        <h1 className="text-4xl font-bold text-white text-center">
          Capoeira:
          <span className={"text-amber-200"}> Movement, </span>
          <span className={"text-green-200"}>Music, </span>
          <span className={"text-blue-200"}>Community</span>
        </h1>
      </TitleBanner>
      <section className="relative mx-auto max-w-5xl p-12 flex items-center justify-center">
        <p className={"text-xl font-bold"}>
          Come and learn the Brazilian martial art of Capoeira, in Derby city.
        </p>
      </section>
      <section className={"mx-auto max-w-5xl p-6 flex items-center gap-6"}>
        <div className="flex flex-col w-full gap-3 p-6 text-lg">
          <p>
            Capoeira is more than just a martial art—it’s a blend of movement,
            music, and community. Whether you want to improve your fitness,
            learn acrobatics, or connect with Brazilian culture, our group
            welcomes all levels, kids and adults. Come train, play, and grow
            with us!
          </p>
          <p>
            <StyledLink href={"/classes"}>Join a class today!</StyledLink>
          </p>
        </div>
        <Image
          src={"/adam-kicking.jpeg"}
          alt={
            "A man on the ground kicking over the head of a small girl. A group of people watch, playing instruments."
          }
          width={"300"}
          height={"300"}
        />
      </section>
      <section className="mx-auto max-w-5xl p-6 flex items-center gap-6">
        <Image
          src={"/batteria.jpeg"}
          alt={
            "A group of musicians playing traditional Capoeira instruments with intent looks of concentration."
          }
          width={"300"}
          height={"300"}
        />
        <div className="flex flex-col w-full gap-3 p-6 text-lg">
          <p>
            Developed by African slaves in Brazil, the practice of Capoeira was
            disguised with ritual and dance so that the slave-owners would
            remain unaware of it’s{" "}
            <StyledLink href={"/what-is-capoeira"}>true nature</StyledLink>. The
            ideals of cunning, misdirection and subterfuge run through the art
            like a lifeblood.
          </p>
          <p>
            <StyledLink href={"/what-is-capoeira"}>Learn more</StyledLink>
          </p>
          <p>
            We have been teaching Capoeira in Derby city since the group was
            founded by Mestre Papa-Leguas in 2003, initially under Mestre Adam,
            and currently under his senior students, Dan, Dave and Andy.
          </p>
          <p>
            <StyledLink href={"/our-group"}>
              Learn more about our group
            </StyledLink>
          </p>
        </div>
      </section>
    </>
  );
}
