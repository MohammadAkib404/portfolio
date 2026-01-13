import React from "react";

function Home() {
  return (
    <section id="home" className="pb-10 bg-bg">
      <div className="">
        <div className="relative mx-auto max-w-6xl px-3 sm:px-6 pt-52 pb-5 text-center">
          <strong className="text-xs uppercase tracking-wide text-muted border-border border px-4 py-2 rounded-md">Learning, Building, Improving. </strong>

          <h2 className="mx-auto mt-7 px-4 w-full sm:max-w-2xl md:max-w-[55rem] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Crafting Beautiful & Functional Web Experiences
          </h2>

          <h4 className="mx-auto mt-6 text-muted font-medium md:text-xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 md:max-w-3xl">
            Hey, I'm Mohammad Akib, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.
          </h4>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg px-6 py-3 font-medium text-layer bg-primary">Let's Connect</button>
            <button className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-pri">My Resume</button>
          </div>
        </div>

        <section className="w-screen px-4 sm:px-8 py-12">
          <div className="mx-auto w-screen max-w-6xl bg px-4 sm:px-8 py-12 rounded-2xl shadow-real">
            <h3 className="text-xl font-semibold mb-10">What I Offer</h3>

            <div className="grid lg:grid-cols-3 gap-10 mb-15">
              <div>
                <h3 className="text-2xl font-semibold">Clear Product UI</h3>
                <p className="text-muted">Interfaces users understand instantly and trust us.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Build to Change</h3>
                <p className="text-muted">A stable foundation that supports fast iteration and growth.</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">Fast Shipping</h3>
                <p className="text-muted">Production-ready delivery without compromise.</p>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-muted text-center">Powered by industry-leading tools</h4>
              <div className="w-full flex justify-center gap-15">
                <img src="./icons/nextjs.svg" alt="nextjs" className="size-12 opacity-70" />
                <img src="./icons/openrouter.svg" alt="openrouter" className="size-12 opacity-70" />
                <img src="./icons/express.svg" alt="express" className="size-12 opacity-70" />
                <img src="./icons/react.svg" alt="react" className="size-12 opacity-70" />
                <img src="./icons/tailwindcss.svg" alt="tailwind" className="size-12 opacity-70" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Home;
