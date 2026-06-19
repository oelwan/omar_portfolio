import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";

const skillGroups = [
  {
    category: "Programming_languages",
    color: "text-syntax-keyword",
    skills: ["Python", "TypeScript", "SQL", "C++"],
  },
  {
    category: "ai_ml",
    color: "text-syntax-function",
    skills: ["PyTorch", "LangChain", "Llama 3", "RAG", "Hugging Face", "OpenAI API"],
  },
  {
    category: "data_engineering",
    color: "text-syntax-type",
    skills: ["PostgreSQL", "Pandas", "Apache Spark", "ETL Pipelines", "Vector DBs"],
  },
  {
    category: "Cloud & MLOps",
    color: "text-syntax-variable",
    skills: ["Docker", "Git", "MLOps", "Azure", "AWS", "google cloud"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <SectionHeading comment="// tech stack" title="getSkills" />
      </ScrollReveal>

      <div className="space-y-8">
        {skillGroups.map((group, i) => (
          <ScrollReveal key={group.category} delay={i * 80}>
            <div className="card-code p-6">
            <h3 className="font-mono text-sm mb-4">
              <span className="text-syntax-comment">import {"{ "}</span>
              <span className={group.color}>{group.category}</span>
              <span className="text-syntax-comment"> {" }"} from </span>
              <span className="text-syntax-string">&quot;@stack&quot;</span>
              <span className="text-syntax-comment">;</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <ScrollReveal delay={400}>
        <p className="font-mono text-syntax-comment text-sm mt-8">
          {"// ...and always learning new ones"}
        </p>
      </ScrollReveal>
    </section>
  );
}
