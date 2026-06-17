type SectionHeadingProps = {
  comment: string;
  title: string;
  id?: string;
};

export default function SectionHeading({ comment, title, id }: SectionHeadingProps) {
  return (
    <div id={id} className="mb-12 scroll-mt-28">
      <p className="font-mono text-sm text-syntax-comment mb-2">{comment}</p>
      <h2 className="text-3xl md:text-4xl font-bold font-mono">
        <span className="text-syntax-keyword">function </span>
        <span className="text-syntax-function">{title}</span>
        <span className="text-syntax-punctuation">()</span>
        <span className="text-syntax-punctuation"> {"{"}</span>
      </h2>
    </div>
  );
}
