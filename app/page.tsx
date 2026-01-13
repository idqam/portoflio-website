import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Misc from "./components/Misc";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";

export default function Page() {
  return (
    <main className="min-h-screen bg-[var(--background)] flex flex-col">
      <div className="min-h-screen flex flex-col">
        <Hero />
        <Navbar />
      </div>
      <Timeline />
      <Projects />
      <Contact />
      <Misc />
    </main>
  );
}