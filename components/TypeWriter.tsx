"use client";

import { useEffect, useRef, useState } from "react";

export function useTypeWriter(
  text: string,
  speed = 45,
  enabled = true,
  delay = 0
) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const [started, setStarted] = useState(delay === 0);

  useEffect(() => {
    if (delay <= 0) return;
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!enabled || !started) return;

    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }

    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, text, speed, enabled, started]);

  return { displayed, done, started };
}

type TypeWriterProps = {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursor?: boolean;
  onComplete?: () => void;
};

export default function TypeWriter({
  text,
  speed = 45,
  delay = 0,
  className = "",
  cursor = true,
  onComplete,
}: TypeWriterProps) {
  const { displayed, done } = useTypeWriter(text, speed, true, delay);
  const completedRef = useRef(false);

  useEffect(() => {
    if (done && onComplete && !completedRef.current) {
      completedRef.current = true;
      onComplete();
    }
  }, [done, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {cursor && !done && <span className="cursor-blink">▊</span>}
    </span>
  );
}
