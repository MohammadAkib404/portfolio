import { ChevronRight } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Daily Dish",
    description:
      "Citation-grounded legal assistant for Indian law using retrieval-augmented generation. Designed for correctness, traceability, and strict domain constraints.",
    techStack: ["Next.js", "FastAPI", "RAG", "LLMs"],
    systemFocus: "Retrieval correctness under legal constraints",
    image: "./images/project1.png",
    github: "#",
  },
  {
    id: 2,
    title: "Daily Dish v2",
    description: "An enhanced iteration focusing on faster retrieval pipelines and improved document grounding for legal workflows.",
    techStack: ["React", "Node.js", "Vector DB", "LLMs"],
    systemFocus: "Latency reduction and grounding accuracy",
    image: "./images/project2.png",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="">
      <div className="bg-layer sm:bg-bg w-screen max-w-6xl mx-auto space-y-12 px-4 sm:px-0">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>
          <p className="text-muted sm:text-lg leadign-relaxed tracking-wide">
            I'd love to hear from you!, I am always open to new opportunities. If you have any questions or feedback please use the form below. Feel free to
            contact me.
          </p>
        </div>

        {projects.map((project) => (
          <div key={project.id} className="bg-layer shadow-msm px-3 sm:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Content */}
            <div className="space-y-5">
              <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">{project.title}</h3>

              <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-prose">{project.description}</p>

              <ul className="flex flex-wrap gap-2 text-sm">
                {project.techStack.map((tech) => (
                  <li key={tech} className="rounded-full border px-3 py-1 text-muted-foreground">
                    {tech}
                  </li>
                ))}
              </ul>

              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">System focus:</span> {project.systemFocus}
              </p>

              <a href={project.github} className="inline-flex items-center gap-1 text-sm font-medium hover:underline underline-offset-4">
                View on GitHub
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl border">
              <img src={project.image} alt={`${project.title} project preview`} className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
