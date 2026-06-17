"use client";

import { useEffect, useState } from "react";

type TerminalLine = {
  cmd: string;
  output: string;
};

type TerminalTypingProps = {
  lines: TerminalLine[];
  onComplete?: () => void;
};

export default function TerminalTyping({ lines, onComplete }: TerminalTypingProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [phase, setPhase] = useState<"cmd" | "output" | "pause">("cmd");
  const [displayed, setDisplayed] = useState("");
  const [completedLines, setCompletedLines] = useState<TerminalLine[]>([]);

  const current = lines[lineIndex];
  const target = phase === "cmd" ? current?.cmd : current?.output;
  const cmdSpeed = 55;
  const outputSpeed = 28;

  useEffect(() => {
    if (!current || !target) {
      onComplete?.();
      return;
    }

    if (phase === "pause") {
      const timer = setTimeout(() => {
        setPhase("cmd");
        setDisplayed("");
        setLineIndex((i) => i + 1);
      }, 350);
      return () => clearTimeout(timer);
    }

    if (displayed.length >= target.length) {
      if (phase === "cmd") {
        const timer = setTimeout(() => {
          setPhase("output");
          setDisplayed("");
        }, 280);
        return () => clearTimeout(timer);
      }

      setCompletedLines((prev) => [...prev, current]);
      setDisplayed("");
      if (lineIndex >= lines.length - 1) {
        onComplete?.();
        setLineIndex(lines.length);
      } else {
        setPhase("pause");
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(target.slice(0, displayed.length + 1));
    }, phase === "cmd" ? cmdSpeed : outputSpeed);

    return () => clearTimeout(timer);
  }, [current, target, displayed, phase, lineIndex, lines.length, onComplete]);

  const allDone = lineIndex >= lines.length;

  return (
    <div>
      {completedLines.map((line) => (
        <div key={line.cmd} className="mb-4">
          <p>
            <span className="text-syntax-accent">$ </span>
            <span className="text-syntax-string">{line.cmd}</span>
          </p>
          <p className="text-foreground/90 mt-1 pl-4 border-l-2 border-syntax-type/30 ml-1">
            {line.output}
          </p>
        </div>
      ))}

      {!allDone && current && (
        <div className="mb-4">
          {phase === "cmd" && (
            <p>
              <span className="text-syntax-accent">$ </span>
              <span className="text-syntax-string">{displayed}</span>
              <span className="cursor-blink text-syntax-string">▊</span>
            </p>
          )}
          {phase === "output" && (
            <>
              <p>
                <span className="text-syntax-accent">$ </span>
                <span className="text-syntax-string">{current.cmd}</span>
              </p>
              <p className="text-foreground/90 mt-1 pl-4 border-l-2 border-syntax-type/30 ml-1">
                {displayed}
                <span className="cursor-blink">▊</span>
              </p>
            </>
          )}
          {phase === "pause" && null}
        </div>
      )}

      {allDone && (
        <p className="mt-2">
          <span className="text-syntax-accent">$ </span>
          <span className="cursor-blink text-syntax-string">▊</span>
        </p>
      )}
    </div>
  );
}
