import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";

const projects = [
  {
    name: "AI-EXAME-GENERATOR",
    file: "BAU_EVAL.py",
    description:
      "BAU-EVAL is an AI-powered educational platform designed to automate and personalize student assessments in programming, artificial intelligence, and machine learning courses.",
    stack: ["Llama 3", "LangChain", "FastAPI", "PostgreSQL"],
    github: "https://github.com/oelwan/AI-EXAME-GENERATOR",
    demo: "https://ai-exame-generator-9bngyjajgyqwuzuywqcd93.streamlit.app/",
    status: "production",
  },
  {
    name: "Movie-Recommendation-System",
    file: "Movie-Recommendation-System.py",
    description:
      "This project is a content-based movie recommendation system using the TMDb 5000 Movie Dataset from Kaggle.",
    stack: ["---"],
    github: "https://github.com/oelwan/Movie-Recommendation-System",
    demo: null,
    status: "active",
  },
  {
    name: "object_detection_webcam",
    file: "object_detection_webcam",
    description:
      "This project demonstrates real-time object detection using a webcam and a pretrained YOLOv8 model from the ultralytics library.",
    stack: ["---"],
    github: "https://github.com/oelwan/object_detection_webcam",
    demo: null,
    status: "active",
  },
  {
    name: "CompanyGPT",
    file: "CompanyGPT.py",
    description:
      "CompanyGPT is a chatbot that answers employee questions using your company's internal documents (PDFs, FAQs, guides, etc.). It uses OpenAI's GPT models and a local vector database for fast, accurate answers.",
    stack: ["---"],
    github: "https://github.com/oelwan/CompanyGPT",
    demo: null,
    status: "active",
  },
  {
    name: "Diabetic Retinopathy Detection",
    file: "Diabetic Retinopathy Detection.py",
    description:
      "This repository contains a deep learning project for the automated classification of Diabetic Retinopathy (DR) stages using high-resolution retinal fundus images. The project evaluates multiple convolutional neural network (CNN) architectures and uses transfer learning for improved accuracy and clinical relevance.",
    stack: ["---"],
    github: "https://github.com/oelwan/Deep-Learning-for-Automated-Detection-of-Diabetic-Retinopathy-in-Fundus-Images-",
    demo: null,
    status: "active",
  },
  {
    name: "Hypersparse-Neural-Networks-Reproduction",
    file: "Hypersparse-Neural-Networks-Reproduction.py",
    description:
      "Reproduction study of the paper 'Hypersparse Neural Networks: Shifting Exploration to Exploitation through Adaptive Regularization' by Glandorf et al. everything is clarified in (reprodused paper.pdf) take a look ;).",
    stack: ["---"],
    github: "https://github.com/oelwan/Hypersparse-Neural-Networks-Reproduction",
    demo: null,
    status: "active",
  },
  {
    name: "koru-impact-site",
    file: "koru-impact-site .py",
    description:
      "client project",
    stack: ["---"],
    github: "https://github.com/oelwan/koru-impact-site",
    demo: null,
    status: "active",
  },
  {
    name: "N8N-Expert",
    file: "N8N-Expert.py",
    description:
      "This project implements an automated lead qualification system using n8n workflow automation. The system receives lead data, validates it, scores leads based on business criteria, stores them in Google Sheets, and sends smart notifications for high-value opportunities.",
    stack: ["---"],
    github: "https://github.com/oelwan/N8N-Expert",
    demo: null,
    status: "active",
  },
  {
    name: "school-website",
    file: "school-website.py",
    description:
      "client project",
    stack: ["---"],
    github: "https://github.com/oelwan/school-website",
    demo: null,
    status: "active",
  },
  {
    name: "ai-assessment-system",
    file: "ai-assessment-system.py",
    description:
      "An intelligent, AI-driven assessment system that evaluates student written exam responses based on provided answer keys. The system provides detailed grading, explainable feedback, and supports follow-up questions about the assessment results.",
    stack: ["---"],
    github: "https://github.com/oelwan/ai-assessment-system",
    demo: null,
    status: "active",
  },
  {
    name: "AI-Support-Bot-CIT",
    file: "AI-Support-Bot-CIT.py",
    description:
      "previous company task",
    stack: ["---"],
    github: "https://github.com/oelwan/AI-Support-Bot-CIT",
    demo: null,
    status: "active",
  },
  {
    name: "InjuryAnalyzer-AI",
    file: "InjuryAnalyzer-AI.py",
    description:
      "previous company task, under improvement",
    stack: ["---"],
    github: "https://github.com/oelwan/InjuryAnalyzer-AI",
    demo: null,
    status: "active",
  },
  {
    name: "AI-Based-Toxicology-Decision-Support-System",
    file: "AI-Based-Toxicology-Decision-Support-System.py",
    description:
      "previous company task, under improvement",
    stack: ["---"],
    github: "https://github.com/oelwan/AI-Based-Toxicology-Decision-Support-System",
    demo: null,
    status: "active",
  },
  {
    name: "AI-Based-Automated-LC-MS-Data-Analysis-and-Report-Generation-System",
    file: "AI-Based-Automated-LC-MS-Data-Analysis-and-Report-Generation-System.py",
    description:
      "previous company task, under improvement",
    stack: ["---"],
    github: "https://github.com/oelwan/AI-Based-Automated-LC-MS-Data-Analysis-and-Report-Generation-System",
    demo: null,
    status: "active",
  },
  {
    name: "AI-Based-Downhole-Pressure-Prediction-System-for-Oil-Wells-Using-Machine-Learning",
    file: "AI-Based-Downhole-Pressure-Prediction-System-for-Oil-Wells-Using-Machine-Learning.py",
    description:
      "previous company task, under improvement",
    stack: ["---"],
    github: "https://github.com/oelwan/AI-Based-Downhole-Pressure-Prediction-System-for-Oil-Wells-Using-Machine-Learning",
    demo: null,
    status: "active",
  },
  {
    name: "QFC-QA-Chatbot",
    file: "QFC-QA-Chatbot.py",
    description:
      "A simple question-answering chatbot for QFC using Google Gemini API.",
    stack: ["---"],
    github: "https://github.com/oelwan/QFC-QA-Chatbot",
    demo: null,
    status: "active",
  },
  {
    name: "Voice-Assisted-Navigation-Search",
    file: "Voice-Assisted-Navigation-Search.py",
    description:
      "A lightweight FastAPI service for voice/text intent classification and entity extraction. Strict MVP: NO persistence, NO CRUD, NO business logic.",
    stack: ["---"],
    github: "https://github.com/oelwan/Voice-Assisted-Navigation-Search",
    demo: null,
    status: "active",
  },
  {
    name: "Smart-Job-Posting-Wizard",
    file: "Smart-Job-Posting-Wizard.py",
    description:
      "A feature module for intelligent job posting creation and management, built with FastAPI.",
    stack: ["---"],
    github: "https://github.com/oelwan/Smart-Job-Posting-Wizard",
    demo: null,
    status: "active",
  },
  {
    name: "nannymasr_app_final",
    file: "nannymasr_app_final.py",
    description:
      "personal business idea",
    stack: ["---"],
    github: "https://github.com/oelwan/nannymasr_app_final",
    demo: null,
    status: "active",
  },
  {
    name: "omar_portfolio",
    file: "omar_portfolio.py",
    description:
      "My portfolio web full code, you are free to use my code, if you like the desgine of my portfolio.",
    stack: ["---"],
    github: "https://github.com/oelwan/omar_portfolio",
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
                    demo
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
