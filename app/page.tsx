export default function Home() {
  return (
    <div className="container px-6 md:px-12 min-h-[80vh] flex flex-col justify-center w-full max-w-[90rem] mx-auto">
      <section className="flex flex-col md:flex-row justify-between items-start w-full gap-12">
        <div className="flex flex-col">
          <h1 className="font-[var(--font-display)] text-6xl md:text-8xl leading-tight tracking-tighter whitespace-nowrap">
            Owen Villareal
          </h1>
          <p className="font-sans mt-6 text-gray-500 text-3xl md:text-4xl whitespace-nowrap">
            Software Engineer * Creator
          </p>
        </div>
        <aside className="flex gap-8 md:gap-12 pl-0 md:pl-12">
          <div className="w-2 bg-black shrink-0" />
          <div id="quick-sum" className="flex flex-col gap-10">
            <div>
              <h3 className="font-[var(--font-display)] uppercase tracking-widest text-2xl mb-1 underline">
                Current Role:
              </h3>
              <p className="font-sans uppercase text-xl font-medium">
                SWE @Baton Platform & Production Team
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] uppercase tracking-widest text-2xl mb-3 underline">
                Main Stack:
              </h3>
              <p className="font-sans uppercase text-xl font-medium">
                Java / Go / TypeScript
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] uppercase tracking-widest text-2xl mb-3 underline">
                Main Frameworks:
              </h3>
              <p className="font-sans uppercase text-xl font-medium">
                Spring Boot / NextJS
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] uppercase tracking-widest text-2xl mb-3 underline">
                Currently Exploring:
              </h3>
              <p className="font-sans uppercase text-xl font-medium">
                Site Reliability Engineering Tools, Distributed Systems, Python at work
              </p>
            </div>
            <div>
              <h3 className="font-[var(--font-display)] uppercase tracking-widest text-2xl mb-3 underline">
                Learning for fun:
              </h3>
              <p className="font-sans uppercase text-xl font-medium">
                Mandarin and Algorithms (Theory and Application)
              </p>
            </div>
          </div>
        </aside>
      </section>
      <div className="mt-24 border-b-2 border-gray-900 w-full" />
    </div>
  );
}