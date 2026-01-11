import React from "react";

const frontendTech = [
  { name: "HTML", icon: "./stack/html.svg" },
  { name: "CSS", icon: "./stack/css.svg" },
  { name: "Tailwind", icon: "./stack/tailwind.svg" },
  { name: "JS", icon: "./stack/js.svg" },
  { name: "React", icon: "./stack/react.svg" },
  { name: "Next.js", icon: "./stack/nextjs.svg" },
  { name: "Figma", icon: "./stack/figma.svg" },
];

const backendTech = [
  { name: "Node.js", icon: "./stack/nodejs.svg" },
  { name: "Express", icon: "./stack/express.svg" },
  { name: "MongoDB", icon: "./stack/mongodb.svg" },
  { name: "Vercel", icon: "./stack/vercel.svg" },
];

const toolsTech = [
  { name: "Git", icon: "./stack/git.svg" },
  { name: "GitHub", icon: "./stack/github.svg" },
  { name: "Postman", icon: "./stack/postman.svg" },
  { name: "Open Router", icon: "./stack/openrouter.svg" },
];

const offerings = [
  {
    label: "Performance",
    value: "High-performance applications",
  },
  {
    label: "Scalability",
    value: "Scalable application architecture",
  },
  {
    label: "Integration",
    value: "API-driven systems",
  },
  {
    label: "Design",
    value: "Structured design systems",
  },
  {
    label: "Product",
    value: "Conversion-aware interfaces",
    span: true, // for sm:col-span-2
  },
];

function About() {
  return (
    <section id="about" className="bg-bg py-12">
      {/* <h2 className='text-3xl font-bold tracking-wide'>About Me</h2> */}
      <div className="w-screen px-3 sm:px-6 max-w-6xl mx-auto space-y-10 mt-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-row-2 gap-5">
        <div className="bg-layer p-5 sm:p-8 rounded-md shadow-msm space-y-5 lg:col-span-2">
          <h4 className="text-xl sm:text-2xl font-semibold">About Me?</h4>
          <p className="leading-relaxed sm:text-lg sm:tracking-wide">
            I am a full-stack web developer who builds clean, reliable web applications using React, Tailwind CSS, JavaScript, and Node.js. I focus on writing
            clear, structured code that is easy to understand and maintain. My work balances frontend quality with solid backend logic. I enjoy turning ideas
            into practical, working products.
          </p>
        </div>
        <div className="bg-layer p-5 sm:p-8 rounded-md shadow-msm space-y-6 h-full">
          <h4 className="text-xl sm:text-2xl font-semibold">How I Build</h4>

          <p className="text-sm sm:text-base text-muted-foreground max-w-prose">
            I use a modern, production-ready stack to build fast, maintainable web applications.
          </p>

          <div className="space-y-6">
            {/* Frontend */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-5">Frontend / Design</h4>
              <ul className="flex flex-wrap gap-6 items-center">
                {frontendTech.map((tech) => (
                  <li key={tech.name} className="size-8 bg-layer flex flex-col items-center justify-center text-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    <span className="text-xs mt-1">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Backend */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-5">Backend / Infrastructure</h4>
              <ul className="flex flex-wrap gap-6 items-center">
                {backendTech.map((tech) => (
                  <li key={tech.name} className="size-8 bg-layer flex flex-col items-center justify-center text-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    <span className="text-xs mt-1">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-sm sm:text-base font-semibold mb-5">Tools / Utilities</h4>
              <ul className="flex flex-wrap gap-6 items-center">
                {toolsTech.map((tech) => (
                  <li key={tech.name} className="size-8 bg-layer flex flex-col items-center justify-center text-center">
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                    <span className="text-xs mt-1">{tech.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-layer p-5 sm:p-8 rounded-md shadow-msm space-y-6 h-full">
          <h4 className="text-xl sm:text-2xl font-semibold">What I Offer</h4>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm sm:text-base">
            {offerings.map((item) => (
              <li key={item.label} className={`rounded-md bg-bg/50 px-3 py-3 shadow-msm  ${item.span ? "sm:col-span-2" : ""}`}>
                <span className="text-[11px] tracking-wide uppercase text-muted-foreground">{item.label}</span>
                <p className="font-medium">{item.value}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
