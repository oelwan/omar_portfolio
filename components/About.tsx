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
            <span className="text-syntax-string">&quot;Data Engineering&quot;</span>
            <span className="text-syntax-punctuation">, </span>
            <span className="text-syntax-string">&quot;Generative AI&quot;</span>
            <span className="text-syntax-punctuation">, </span>
            <span className="text-syntax-string">&quot;RAG Systems&quot;</span>
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
            I&apos;m an AI Engineer specializing in Data Engineering and LLM Systems,
            passionate about building intelligent applications and scalable
            data-driven solutions that solve real-world problems.

          </p>
          <p>
          I enjoy working at the intersection of artificial intelligence,
          data engineering, and software development. From designing data pipelines 
          and developing AI-powered applications to building RAG systems and scalable APIs,
          I focus on turning ideas into practical and impactful solutions.
          </p>
          <p>
          As a lifelong learner in the rapidly evolving world of AI, I continuously explore new technologies, 
          build projects, and expand my expertise to grow into a world-class engineer.
          </p>
          <p>
            <span className="text-syntax-comment font-mono text-sm">
              {"// Currently exploring: Apache Spark, ETL pipelines, LLMs, RAG systems, MLOps, and cloud technologies"}
            </span>
          </p>
        </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
