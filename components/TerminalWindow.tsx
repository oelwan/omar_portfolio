type TerminalWindowProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function TerminalWindow({
  title,
  children,
  className = "",
}: TerminalWindowProps) {
  return (
    <div
      className={`terminal-window overflow-hidden rounded-xl border border-border bg-surface/80 backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-surface-elevated">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">{title}</span>
      </div>
      <div className="p-5 md:p-6 font-mono text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </div>
  );
}
