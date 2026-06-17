import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";

const projects = [
  {
    name: "BAU-EVAL",
    file: "bau_eval.py",
    description:
      "LLM-based personalized assignment evaluator for university students. Uses fine-tuned models to provide detailed, rubric-aligned feedback at scale.",
    stack: ["Llama 3", "LangChain", "FastAPI", "PostgreSQL"],
    github: "https://github.com/oelwan",
    demo: null,
    status: "production",
  },
  {
    name: "RAG Pipeline",
    file: "rag_system.py",
    description:
      "End-to-end retrieval-augmented generation system with document ingestion, chunking, embedding, and semantic search over a vector database.",
    stack: ["Python", "OpenAI", "Pinecone", "FastAPI"],
    github: "https://github.com/oelwan",
    demo: null,
    status: "active",
  },
  {
    name: "Data Pipeline",
    file: "etl_pipeline.py",
    description:
      "Automated ETL pipeline for processing and transforming large datasets, with monitoring, error handling, and scheduled batch jobs.",
    stack: ["Python", "PostgreSQL", "Docker", "Apache Airflow"],
    github: "https://github.com/oelwan",
    demo: null,
    status: "active",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <SectionHeading comment="// things I've built" title="getProjects" />
      </ScrollReveal>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.name} delay={i * 100}>
            <article className="card-code flex flex-col h-full">
            <div className="flex items-center gap-2 border-b border-border px-5 py-3 bg-surface-elevated/50">
              <span className="h-2.5 w-2.5 rounded-full bg-syntax-type/60" />
              <span className="font-mono text-xs text-muted">{project.file}</span>
              <span className="ml-auto font-mono text-xs text-syntax-accent">
                {project.status}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 className="font-mono text-xl font-semibold text-syntax-function">
                {project.name}
              </h3>

              <p className="text-muted text-sm mt-3 leading-relaxed flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-4">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs text-syntax-comment bg-background/60 px-2 py-0.5 rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex gap-3">
                <AnimatedButton
                  href={project.github}
                  external
                  className="text-xs py-2 px-3"
                >
                  git clone
                </AnimatedButton>
                {project.demo && (
                  <AnimatedButton
                    href={project.demo}
                    external
                    variant="primary"
                    className="text-xs py-2 px-3"
                  >
                    run()
                  </AnimatedButton>
                )}
              </div>
            </div>
          </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
