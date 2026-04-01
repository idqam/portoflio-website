function SectionLabel({
  children,
  accent = "water",
}: {
  children: React.ReactNode;
  accent?: "water" | "lavender";
}) {
  const color =
    accent === "lavender" ? "var(--accent-lavender)" : "var(--accent-water)";
  return (
    <h3
      className="font-mono text-sm tracking-widest uppercase mb-3"
      style={{ color }}
    >
      {children}
    </h3>
  );
}

export default function Hero() {
  return (
    <div className="flex-1 flex flex-col justify-center w-full max-w-6xl mx-auto px-6 md:px-16 py-12">
      <section className="flex flex-col lg:flex-row justify-between items-start w-full gap-12 lg:gap-16">
        <div className="flex flex-col w-full lg:max-w-xl">
          <p className="font-mono text-sm md:text-base tracking-widest text-[var(--accent-water)] mb-4">
            Software Engineer & Creator
          </p>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--foreground)] md:whitespace-nowrap">
            Owen Villareal
          </h1>

          <p className="font-sans mt-6 md:mt-8 text-[var(--text-muted)] text-base md:text-lg leading-relaxed">
            Backend-focused software engineer who enjoys building systems that
            scale, exploring programmatic tools, functional languages, and
            working in interesting problem domains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 md:mt-8">
            <a
              href="#contact"
              className="font-mono text-sm text-amber hover:text-foreground transition-colors duration-200 underline underline-offset-4 decoration-pencil hover:decoration-amber"
            >
              Get in touch
            </a>
            <a
              href="#projects"
              className="font-mono text-sm text-[var(--text-muted)] hover:text-[var(--foreground)] transition-colors duration-200"
            >
              View work →
            </a>
          </div>
        </div>

        <aside className="flex gap-6 lg:gap-10 w-full lg:w-auto">
          <div className="flex flex-col gap-6 md:gap-8 lg:pl-8 lg:border-l lg:border-[var(--border-pencil)]">
            <div>
              <SectionLabel>Current Role</SectionLabel>
              <p className="font-serif text-lg text-[var(--foreground)]">
                Software Engineer @ Baton
              </p>
              <p className="font-sans text-sm text-[var(--text-muted)] mt-1">
                Platform & Production Team
              </p>
            </div>

            <div>
              <SectionLabel>Primary Stack</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {["Java", "Go", "TypeScript", "Python"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm px-3 py-1 bg-[var(--secondary-bg)] text-[var(--foreground)] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Frameworks</SectionLabel>
              <div className="flex flex-wrap gap-2">
                {["Spring Boot", "Next.JS", "React", "FastAPI"].map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-sm px-3 py-1 bg-[var(--secondary-bg)] text-[var(--foreground)] rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <SectionLabel>Currently Exploring</SectionLabel>
              <div className="flex flex-col ml-4">
                <ul className="font-sans text-sm list-disc">
                  <li> Distributed systems technologies and theory</li>
                  <li>Observability tools and methodology</li>
                  <li>Event-driven architecture</li>
                  <li>DDD via simulations</li>
                </ul>
              </div>
            </div>

            <div>
              <SectionLabel accent="lavender">Learning for Joy</SectionLabel>
              <p className="font-sans text-[var(--text-muted)] text-sm">
                Rust · Golang{" "}
              </p>
            </div>
          </div>
        </aside>
      </section>
    </div>
  );
}
