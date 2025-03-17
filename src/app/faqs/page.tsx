import TitleBanner from "@/components/TitleBanner";
import StyledLink from "@/components/StyledLink";

export default function CanIDoCapoeiraPage() {
  return (
    <>
      <TitleBanner imageTitle={"lots-of-games.jpeg"}>
        <h1 className="text-4xl font-bold text-white text-center">FAQs</h1>
      </TitleBanner>
      <section className="mx-auto max-w-5xl p-12 flex gap-3 flex-col">
        <p className={"font-bold text-2xl"}>
          Some Common Questions and concerns...
        </p>
        <p className={"font-bold text-xl italic"}>
          I&#39;m not flexible enough!
        </p>
        <p>
          None of us were when we started! We do capoeira to become flexible, to
          control our bodies, to avoid leaving bum-prints in the sofa and to
          have fun at the same time.
        </p>
        <p className={"font-bold text-xl italic"}>I’m too old</p>
        <p>
          The Grande Mestre (grand master) of the group our style descends from
          is over 80 years old and still playing. Adam, the teacher of this
          group is 42 and started in his mid-twenties. We have several members
          who started (or re-started) in the their 30’s and 40’s. People start
          yoga, tai chi and other activities at all ages, and Capoeira is no
          different.
        </p>
        <p className={"font-bold text-xl italic"}>I don’t like martial arts</p>
        <p>
          Capoeira is not like other martial arts. It incorporates aspects of
          game play and dance that take the art form beyond that of learning to
          strike. While we do teach striking techniques, we also teach you how
          to not strike other people – and how not to get struck. A beautiful
          game of Capoeira can involve zero contact between participants.
        </p>
        <p className={"font-bold text-xl italic"}>
          Capoeira is not a proper martial art
        </p>
        <p>
          Capoeira was developed to not look like a martial art. Every single
          move you see in capoeira has a martial aspect that can be applied. Or
          not. And this is just the start of the game.
        </p>
        <p className={"font-bold text-xl italic"}>
          Do I need to be fit/flexible/active/experienced?
        </p>
        <p>
          No. You will naturally become fitter/more flexible/more active and
          experienced through coming to our classes. Movements such as
          handstands, cartwheels, kicks and dodges will be delivered and adapted
          to your level of experience and fitness. Capoeira is suitable for all
          ages and levels of ability, and we encourage students to find a
          personal expression that works for them.
        </p>
        <p className={"font-bold text-xl italic"}>
          Will I be graded or expected to pass tests?
        </p>
        <p>
          No. Capoeira is unique in how students are graded and belted. We have
          an annual grading ceremony where you will have the chance to play
          against masters and senior teachers but there are no formal tests or
          expectations put on students and development is always at your own
          pace.
        </p>
        <p className={"font-bold text-xl italic"}>So I just turn up?</p>
        <p>
          Yes. Bring/wear clothes suitable for exercise and some water. Bare
          feet are best, but if you want to wear trainers the best are low
          profile close fitting shoes.
        </p>
        <p className={"font-bold text-xl italic"}>And children?</p>
        <p>
          Children develop at vastly different rates so the age range for our
          classes is only a guide. Please see our{" "}
          <StyledLink href={"/classes"}>classes page</StyledLink> for more
          information.
        </p>
        <p className={"font-bold text-xl italic"}>Are you qualified?</p>
        <p>
          Yes. Dan (the main instructor) has a first aid qualification, a basic
          DBS certificate and has been teaching Capoeira for 3 years, and
          practising Capoeira for 8 years before that!
        </p>
      </section>
    </>
  );
}
