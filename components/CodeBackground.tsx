export default function CodeBackground() {
  const snippets = [
    "import torch",
    "from langchain import LLMChain",
    "def train(model, data):",
    "  return model.fit(data)",
    "async def inference(prompt: str):",
    "  embedding = encoder.encode(prompt)",
    "pipeline.run(batch_size=32)",
    "SELECT * FROM vectors",
    "model = AutoModel.from_pretrained()",
    "loss.backward(); optimizer.step()",
    "await agent.execute(task)",
    "docker compose up --build",
  ];

  return (
    <div className="code-bg pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="code-bg-grid absolute inset-0" />
      {snippets.map((line, i) => (
        <span
          key={line}
          className="code-bg-snippet absolute font-mono text-xs opacity-[0.04] select-none"
          style={{
            top: `${8 + (i * 7.5) % 85}%`,
            left: `${(i * 13) % 75}%`,
            animationDelay: `${i * 0.7}s`,
          }}
        >
          {line}
        </span>
      ))}
    </div>
  );
}
