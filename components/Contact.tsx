import SectionHeading from "./SectionHeading";
import TerminalWindow from "./TerminalWindow";
import ScrollReveal from "./ScrollReveal";
import AnimatedButton from "./AnimatedButton";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <ScrollReveal>
        <SectionHeading comment="// let's connect" title="sendMessage" />
      </ScrollReveal>

      <ScrollReveal delay={120}>
        <div className="max-w-2xl mx-auto">
          <TerminalWindow title="contact.sh">
            <div className="space-y-4">
              <p>
                <span className="text-syntax-accent">$ </span>
                <span className="text-syntax-string">echo $OPEN_TO</span>
              </p>
              <p className="pl-4 text-muted">
                full-time, part-time, hyprid and online opportunities.
              </p>

              <p className="pt-2">
                <span className="text-syntax-accent">$ </span>
                <span className="text-syntax-string">mail --to oelwan@gmail.com</span>
              </p>
              <p className="pl-4">
                <a
                  href="mailto:oelwan@gmail.com"
                  className="text-syntax-type hover:underline transition-colors"
                >
                  oelwan@gmail.com
                </a>
              </p>

              <p className="pt-2">
                <span className="text-syntax-accent">$ </span>
                <span className="cursor-blink text-syntax-string">▊</span>
              </p>
            </div>
          </TerminalWindow>

          <div className="flex justify-center gap-4 mt-8 flex-wrap">
            <AnimatedButton href="mailto:oelwan@gmail.com" variant="primary">
              <span className="text-syntax-keyword">await</span>
              <span className="text-syntax-punctuation"> </span>
              <span className="text-syntax-function">sendEmail</span>
              <span className="text-syntax-punctuation">()</span>
            </AnimatedButton>
            <AnimatedButton
              href="https://linkedin.com/in/omar-ibrahim-060824212"
              external
            >
              LinkedIn
            </AnimatedButton>
            <AnimatedButton href="https://github.com/oelwan" external variant="accent">
              GitHub
            </AnimatedButton>
            <AnimatedButton
              href="https://wa.me/201025924078"
              external
              variant="primary"
            >
              WhatsApp
            </AnimatedButton>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
