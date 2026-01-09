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


          <h4 className="mx-auto mt-6 text-muted font-medium md:text-xl leading-6 md:leading-8 w-full sm:max-w-2xl px-4 md:max-w-3xl">Hey, I'm Mohammad Akib, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.</h4>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-lg px-6 py-3 font-medium text-layer bg-primary">Let's Connect</button>
            <button className="rounded-lg border border-gray-700 px-6 py-3 font-medium text-pri">My Resume</button>
          </div>
        </div>

        <div className="w-screen max-w-7xl mx-auto">
          <img src="./hero_image.png" alt="hero" className="w-7xl mx-auto" />
        </div>
      </div>
    </section>
  );
}

export default Home;
