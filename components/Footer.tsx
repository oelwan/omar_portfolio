export default function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center">
      <p className="font-mono text-sm text-muted">
        <span className="text-syntax-comment">{"// "}</span>
        © 2026{" "}
        <span className="text-syntax-function">Omar Ibrahim</span>
        <span className="text-syntax-punctuation">.</span>
        <span className="text-syntax-function">builtWith</span>
        <span className="text-syntax-punctuation">(</span>
        <span className="text-syntax-string">&quot;Next.js&quot;</span>
        <span className="text-syntax-punctuation">, </span>
        <span className="text-syntax-string">&quot;Tailwind&quot;</span>
        <span className="text-syntax-punctuation">)</span>
        <span className="text-syntax-punctuation">;</span>
      </p>
      <p className="font-mono text-xs text-syntax-comment mt-2">
        process.exit(0);
      </p>
    </footer>
  );
}
