import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";
import ScrollReveal from "./ScrollReveal";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <SectionHeading comment="// who am I?" title="aboutMe" />
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className="grid md:grid-cols-2 gap-8">
        <TerminalWindow title="profile.ts">
          <pre className="whitespace-pre-wrap text-sm leading-7">
            <span className="text-syntax-keyword">interface </span>
            <span className="text-syntax-type">Engineer</span>
            <span className="text-syntax-punctuation">{" {\n"}</span>
            <span className="text-syntax-variable">  name</span>
            <span className="text-syntax-punctuation">: </span>
            <span className="text-syntax-string">&quot;Omar Ibrahim&quot;</span>
            <span className="text-syntax-punctuation">;</span>
            {"\n"}
            <span className="text-syntax-variable">  role</span>
            <span className="text-syntax-punctuation">: </span>
            <span className="text-syntax-string">&quot;AI Engineer&quot;</span>
            <span className="text-syntax-punctuation">;</span>
            {"\n"}
            <span className="text-syntax-variable">  focus</span>
            <span className="text-syntax-punctuation">: [</span>
            <span className="text-syntax-string">&quot;LLM Systems&quot;</span>
            <span className="text-syntax-punctuation">, </span>
            <span className="text-syntax-string">&quot;Data Pipelines&quot;</span>
            <span className="text-syntax-punctuation">, </span>
            <span className="text-syntax-string">&quot;MLOps&quot;</span>
            <span className="text-syntax-punctuation">];</span>
            {"\n"}
            <span className="text-syntax-variable">  status</span>
            <span className="text-syntax-punctuation">: </span>
            <span className="text-syntax-string">&quot;Open to opportunities&quot;</span>
            <span className="text-syntax-punctuation">;</span>
            {"\n"}
            <span className="text-syntax-punctuation">{"}"}</span>
          </pre>
        </TerminalWindow>

        <div className="space-y-4 text-muted leading-relaxed">
          <p>
            I&apos;m an AI Engineer passionate about designing and deploying
            intelligent systems — from LLM-powered applications to robust data
            engineering pipelines that feed them.
          </p>
          <p>
            I enjoy working at the intersection of machine learning, software
            engineering, and product thinking. Whether it&apos;s fine-tuning models,
            building RAG pipelines, or architecting scalable APIs, I focus on
            shipping solutions that actually work in production.
          </p>
          <p>
            <span className="text-syntax-comment font-mono text-sm">
              {"// Currently exploring: agentic workflows, eval frameworks, vector search"}
            </span>
          </p>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
