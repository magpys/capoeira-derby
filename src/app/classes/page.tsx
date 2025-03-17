import TitleBanner from "@/components/TitleBanner";

export default function ClassesPage() {
  return (
    <>
      <TitleBanner imageTitle={"batteria-teaching.jpeg"}>
        <h1 className="text-4xl font-bold text-white text-center">Classes</h1>
      </TitleBanner>
      <section className="mx-auto max-w-5xl p-12 flex gap-3 flex-col">
        <p className="text-2xl font-bold mb-6">
          Capoeira is a full body and mind workout and no two classes are ever
          the same. Beginners are welcome to join us at any time.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">Kids Class</h3>
            <div className={"flex flex-col gap-1 mt-2"}>
              <p className="text-gray-700 mt-2">
                <strong>🗓 Day:</strong> Thursday
              </p>
              <p className="text-gray-700">
                <strong>⏰ Time:</strong> 7:00pm - 8:00pm
              </p>
              <div className="text-gray-700">
                <strong>📍 Location:</strong>
                <p className="text-gray-700 pl-3">
                  The Lonny Wilsoncroft Community Centre,
                  <br />
                  Stepping Lane,
                  <br />
                  Derby, <br />
                  DE1 1GL
                </p>
              </div>
              <p className="text-gray-700">
                <strong>👶 Ages:</strong> 5 - 10
              </p>
            </div>
            <p className="text-gray-700 mt-5">
              An hour long session for 5 to 10 year olds that uses capoeira to
              develop physical and social skills. Exercises are based on fun,
              interaction and letting off steam!
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200">
            <h3 className="text-xl font-semibold text-blue-600">
              Adults Class
            </h3>
            <div className={"flex flex-col gap-1 mt-2"}>
              <p className="text-gray-700 mt-2">
                <strong>🗓 Day:</strong> Thursday
              </p>
              <p className="text-gray-700">
                <strong>⏰ Time:</strong> 7:30 - 9:00pm
              </p>
              <p className="text-gray-700">
                <strong>📍 Location:</strong>
                <p className="text-gray-700 pl-3">
                  The Lonny Wilsoncroft Community Centre,
                  <br />
                  Stepping Lane,
                  <br />
                  Derby, <br />
                  DE1 1GL
                </p>
              </p>
              <p className="text-gray-700">
                <strong>💪 All Levels Welcome!</strong>
              </p>
            </div>
            <p className="text-gray-700 mt-5">
              The main class is a mix of warm-up, stretching, conditioning,
              capoeira techniques and rodas (games). Capoeira has a wide variety
              of techniques and disciplines, so classes are varied week to week.
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-bold mt-6">Pricing</h2>
        <p>
          Beginners can join us for a session{" "}
          <span className={"italic"}>for free</span> to see how it goes. After
          that you can pay per session or pay monthly (for a discounted rate).
        </p>
        <ul className="mt-2 pl-3 list-disc list-inside">
          <li>
            <strong>Kids Class:</strong> £8 per session or £15 per month.
          </li>
          <li>
            <strong>Adults Class:</strong> £12 per session or £26 per month.
          </li>
        </ul>
        <h2 className="text-2xl font-bold mt-6">What to bring</h2>
        <p>
          Wear comfortable clothing that you can move around in. You can either
          train in trainers or barefoot, whichever is most comfortable for you.
          Bring a water bottle for hydration too!
        </p>
        <p className="p-4 mt-8 text-center text-lg font-semibold text-gray-900 bg-yellow-200 rounded-lg">
          Ready to join? Contact Dan on 07970 446920 or drop in at one of the
          classes listed above!
        </p>
      </section>
    </>
  );
}
