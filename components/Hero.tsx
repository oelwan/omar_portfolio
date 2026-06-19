"use client";

import { useState } from "react";
import Image from "next/image";
import TerminalWindow from "./TerminalWindow";
import TerminalTyping from "./TerminalTyping";
import TypeWriter from "./TypeWriter";
import Robot from "./Robot";
import AnimatedButton from "./AnimatedButton";

const terminalLines = [
  { cmd: "whoami", output: "Omar Ibrahim" },
  { cmd: "role --describe", output: "AI Engineer specialized in Data Engineering and LLM Systems." },
  {
    cmd: "cat mission.txt",
    output:
      "Building intelligent data-driven systems, AI applications, and scalable pipelines that solve real-world problems.",
  },
];

export default function Hero() {
  const [nameDone, setNameDone] = useState(false);
  const [showButtons, setShowButtons] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-24 pb-16 overflow-hidden">
      {/* Mobile / tablet background robot */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 md:w-80 opacity-[0.12] lg:hidden pointer-events-none">
        <Robot />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 lg:gap-4 items-center">
          {/* Left content */}
          <div className="max-w-2xl lg:max-w-none">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-10">
              <div className="relative shrink-0 animate-fade-in-up">
                <div className="glow-ring rounded-full p-1 border border-border">
                  <Image
                    src="/images/myphoto.jpeg"
                    alt="Omar Ibrahim"
                    width={160}
                    height={160}
                    className="rounded-full object-cover"
                    priority
                  />
                </div>
                <span className="absolute -bottom-2 -right-2 font-mono text-xs bg-syntax-accent/20 text-syntax-accent border border-syntax-accent/40 px-2 py-1 rounded-md animate-pulse-soft">
                  online
                </span>
              </div>

              <div className="text-center sm:text-left">
                <p className="font-mono text-syntax-comment text-sm mb-3 min-h-[1.25rem]">
                  <TypeWriter
                    text="// initializing portfolio..."
                    speed={35}
                    delay={400}
                  />
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold font-mono leading-tight">
                  <span className="text-syntax-keyword">const </span>
                  <span className="text-syntax-function">engineer</span>
                  <span className="text-syntax-punctuation"> = &quot;</span>
                  <span className="text-syntax-string">
                    <TypeWriter
                      text="Omar"
                      speed={120}
                      delay={1800}
                      onComplete={() => setNameDone(true)}
                    />
                  </span>
                  {nameDone && (
                    <span className="text-syntax-punctuation">&quot;;</span>
                  )}
                </h1>

                <p className="mt-4 text-muted text-base md:text-lg max-w-md min-h-[3rem]">
                  {nameDone && (
                    <TypeWriter
                      text="Compiling ideas into production-ready AI systems."
                      speed={32}
                      onComplete={() => setShowButtons(true)}
                    />
                  )}
                </p>
              </div>
            </div>

            <TerminalWindow title="omar@portfolio ~ bash" className="animate-fade-in-up animation-delay-300">
              <TerminalTyping lines={terminalLines} />
            </TerminalWindow>

            <div
              className={`flex justify-center sm:justify-start gap-3 mt-8 flex-wrap transition-all duration-700 ${
                showButtons
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <AnimatedButton
                href="#projects"
                variant="accent"
                className="btn-stagger-1"
              >
                <ProjectsIcon />
                <span className="text-syntax-keyword">view</span>
                <span className="text-syntax-function">Projects</span>
                <span className="text-syntax-punctuation">()</span>
              </AnimatedButton>

              <AnimatedButton
                href="#contact"
                variant="primary"
                className="btn-stagger-2"
              >
                <MailIcon />
                <span className="text-syntax-keyword">contact</span>
                <span className="text-syntax-function">Me</span>
                <span className="text-syntax-punctuation">()</span>
              </AnimatedButton>

              <AnimatedButton
                href="https://github.com/oelwan"
                external
                className="btn-stagger-3"
              >
                <GitHubIcon />
                GitHub
              </AnimatedButton>

              <AnimatedButton
                href="https://linkedin.com/in/omar-ibrahim-060824212"
                external
                className="btn-stagger-4"
              >
                <LinkedInIcon />
                LinkedIn
              </AnimatedButton>

              <AnimatedButton
                href="/cv.pdf"
                external
                className="btn-stagger-5"
              >
                <span className="text-syntax-keyword">export</span>
                <span className="text-syntax-punctuation"> </span>
                <span className="text-syntax-function">CV</span>
                <span className="text-syntax-punctuation">()</span>
              </AnimatedButton>
            </div>
          </div>

          {/* Desktop robot */}
          <div className="hidden lg:flex justify-center items-end h-full pt-8">
            <Robot className="w-[380px] xl:w-[420px] h-[480px] xl:h-[520px]" />
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}
