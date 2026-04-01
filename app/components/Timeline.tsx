"use client";

import { useState, useRef } from "react";

interface Experience {
  id: string;
  yearStart: string;
  yearEnd: string;
  title: string;
  company: string;
  description: string;
  highlights: string[];
  type: "internship" | "fulltime" | "education" | "personal";
}

const experiences: Experience[] = [
  {
    id: "coursework",
    yearStart: "2019",
    yearEnd: "2023 LOA, 2025 Grad",
    title: "CS Coursework",
    company: "Universtiy of Rochester",
    description:
      "Foundation in Algorithms, Data Structures, ML & DL, NLP, Logic Theory. Math minor, Philosophy electives in aesthetics and political theory.",
    highlights: ["Algorithms", "AI", "Math"],
    type: "education",
  },

  {
    id: "audible-intern",
    yearStart: "Summer 2022",
    yearEnd: "",
    title: "SWE Intern",
    company: "Audible",
    description:
      "Built a collaborative web app with the city of Newark, NJ. Implemented backend logic and frontend interface using AWS systems.",
    highlights: ["Backend dev", "Enterprise systems", "AWS"],
    type: "internship",
  },
  {
    id: "audible-swe",
    yearStart: "2023",
    yearEnd: "2024",
    title: "SWE - Analytics Team",
    company: "Audible",
    description:
      "Implemented backend services in java spring boot powering data-driven features and UI",
    highlights: ["React", "Data Analytics", "Spring Boot"],
    type: "fulltime",
  },
  {
    id: "leave",
    yearStart: "2024",
    yearEnd: "Mid 2025",
    title: "Leave of Absence",
    company: "Personal",
    description:
      "Dedicated time to personal development before going back to finish my degree at university.",
    highlights: ["Degree completion", "Self-directed"],
    type: "personal",
  },
  {
    id: "baton",
    yearStart: "Oct 2025",
    yearEnd: "Present",
    title: "Software Engineer",
    company: "Baton",
    description:
      "Intersection of SRE, product engineering, and implementing features in a distrubuted system for product and system stability",
    highlights: ["Distributed Systems", "Microservices", "SRE"],
    type: "fulltime",
  },
  {
    id: "graduation",
    yearStart: "Dec",
    yearEnd: "2025",
    title: "B.A. Computer Science",
    company: "University of Rochester",
    description:
      "Graduated with BA in Computer Science, Minor in Mathematics. Coursework in philosophy of art, political philosophy, and international relations.",
    highlights: ["Philosophy of art", "Math minor", "Int'l relations"],
    type: "education",
  },
];

export default function Timeline() {
  const [activeExperience, setActiveExperience] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getTypeColor = (type: Experience["type"]) => {
    switch (type) {
      case "internship":
        return "var(--accent-water)";
      case "fulltime":
        return "var(--accent-amber)";
      case "education":
        return "var(--accent-lavender)";
      case "personal":
        return "var(--text-muted)";
    }
  };

  const cardWidth = 200;
  const cardGap = 40;
  const totalWidth = (experiences.length + 1) * (cardWidth + cardGap) + 100;

  return (
    <section
      id="experience"
      className="min-h-screen w-full pt-16 md:pt-24 pb-20 md:pb-24 bg-background flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-8 md:mb-10">
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-water" />
            <div className="w-2 h-2 rounded-full bg-amber" />
            <div className="w-2 h-2 rounded-full bg-lavender" />
          </div>
          <div className="flex-1 h-px bg-pencil" />
          <h2 className="font-serif text-2xl md:text-3xl text-foreground px-4 md:px-6 py-2 border border-pencil bg-secondary text-center whitespace-nowrap">
            Experience
          </h2>
          <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-water" />
            <div className="w-2 h-2 rounded-full bg-amber" />
            <div className="w-2 h-2 rounded-full bg-lavender" />
          </div>
        </div>
      </div>

      <div className="flex justify-center overflow-hidden">
        <div
          ref={scrollRef}
          className="relative overflow-x-auto pb-6 max-w-full"
          style={{ cursor: "grab" }}
        >
          <div
            className="relative px-8 md:px-16 lg:px-24"
            style={{ width: `${totalWidth}px`, minWidth: "100%" }}
          >
            <svg
              className="absolute top-[28px] left-0 right-0 h-8 w-full pointer-events-none"
              preserveAspectRatio="none"
              style={{ width: `${totalWidth}px` }}
            >
              <defs>
                <linearGradient
                  id="timelineGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="var(--accent-water)" />
                  <stop offset="50%" stopColor="var(--accent-amber)" />
                  <stop offset="100%" stopColor="var(--accent-lavender)" />
                </linearGradient>
              </defs>
              <line
                x1="24"
                y1="16"
                x2={totalWidth - 24}
                y2="16"
                stroke="var(--secondary-bg)"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <line
                x1="24"
                y1="16"
                x2={totalWidth - 24}
                y2="16"
                stroke="url(#timelineGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.6"
              />
              <circle
                cx="24"
                cy="16"
                r="4"
                fill="var(--accent-water)"
                opacity="0.8"
              />
              <circle
                cx={totalWidth - 24}
                cy="16"
                r="4"
                fill="var(--accent-lavender)"
                opacity="0.5"
                strokeDasharray="2 2"
                stroke="var(--accent-lavender)"
              />
            </svg>

            <div
              className="flex items-start pt-0"
              style={{ gap: `${cardGap}px` }}
            >
              {experiences.map((exp) => {
                const isActive = activeExperience === exp.id;
                const typeColor = getTypeColor(exp.type);

                return (
                  <div
                    key={exp.id}
                    className="relative flex flex-col items-center shrink-0"
                    style={{ width: `${cardWidth}px` }}
                    onMouseEnter={() => setActiveExperience(exp.id)}
                    onMouseLeave={() => setActiveExperience(null)}
                  >
                    <div className="font-mono text-xs font-medium text-muted tracking-wide text-center h-5 flex items-center justify-center gap-1">
                      <span style={{ color: typeColor }}>{exp.yearStart}</span>
                      {exp.yearEnd && (
                        <>
                          <span className="opacity-50">—</span>
                          <span>{exp.yearEnd}</span>
                        </>
                      )}
                    </div>

                    <div className="relative z-10 mt-2">
                      <div
                        className="w-4 h-4 rounded-full border-2 transition-all duration-300 cursor-pointer"
                        style={{
                          backgroundColor: isActive
                            ? typeColor
                            : "var(--background)",
                          borderColor: typeColor,
                          transform: isActive ? "scale(1.4)" : "scale(1)",
                        }}
                      />
                      <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border transition-all duration-300 pointer-events-none"
                        style={{
                          borderColor: typeColor,
                          opacity: isActive ? 0.25 : 0,
                          transform: isActive ? "scale(1)" : "scale(0.7)",
                        }}
                      />
                    </div>

                    <div
                      className="w-px transition-all duration-300"
                      style={{
                        height: isActive ? "28px" : "16px",
                        background: `linear-gradient(to bottom, ${typeColor}, transparent)`,
                        opacity: isActive ? 0.8 : 0.4,
                      }}
                    />

                    <div
                      className="w-full transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : 0.8,
                      }}
                    >
                      <div
                        className="relative bg-secondary transition-all duration-300"
                        style={{
                          borderWidth: "1px",
                          borderStyle: "solid",
                          borderColor: isActive
                            ? typeColor
                            : "var(--border-pencil)",
                          boxShadow: isActive
                            ? `0 4px 20px -4px ${typeColor}30`
                            : "none",
                        }}
                      >
                        <div
                          className="absolute -top-[1px] left-0 right-0 h-[2px] transition-opacity duration-300"
                          style={{
                            backgroundColor: typeColor,
                            opacity: isActive ? 1 : 0,
                          }}
                        />

                        <div
                          className="absolute -top-[6px] left-1/2 -translate-x-1/2 transition-opacity duration-300"
                          style={{
                            width: 0,
                            height: 0,
                            borderLeft: "5px solid transparent",
                            borderRight: "5px solid transparent",
                            borderBottom: `5px solid ${
                              isActive ? typeColor : "var(--border-pencil)"
                            }`,
                            opacity: isActive ? 1 : 0.4,
                          }}
                        />

                        <div className="p-4">
                          <div className="mb-2">
                            <p
                              className="font-mono text-xs font-bold tracking-wide mb-1"
                              style={{ color: typeColor }}
                            >
                              {exp.company}
                            </p>
                            <h3 className="font-serif text-lg font-bold text-[var(--foreground)] leading-tight">
                              {exp.title}
                            </h3>
                          </div>

                          <div
                            className="overflow-hidden transition-all duration-300"
                            style={{
                              maxHeight: isActive ? "200px" : "0px",
                              opacity: isActive ? 1 : 0,
                              marginTop: isActive ? "8px" : "0px",
                            }}
                          >
                            <div className="pt-2 border-t border-[var(--border-pencil)]">
                              <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-3">
                                {exp.description}
                              </p>

                              <div className="flex flex-wrap gap-1">
                                {exp.highlights.map((highlight) => (
                                  <span
                                    key={highlight}
                                    className="font-mono text-[10px] px-1.5 py-0.5 bg-[var(--background)] text-[var(--text-muted)] border border-[var(--border-pencil)]"
                                  >
                                    {highlight}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>

                          <div
                            className="flex items-center justify-center gap-1.5 transition-all duration-300"
                            style={{
                              opacity: isActive ? 0 : 0.4,
                              height: isActive ? "0px" : "20px",
                              marginTop: isActive ? "0px" : "8px",
                              overflow: "hidden",
                            }}
                          >
                            <div
                              className="w-2 h-[1px]"
                              style={{ backgroundColor: typeColor }}
                            />
                            <div
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: typeColor }}
                            />
                            <div
                              className="w-2 h-[1px]"
                              style={{ backgroundColor: typeColor }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              <div
                className="relative flex flex-col items-center shrink-0"
                style={{ width: `${cardWidth * 0.7}px` }}
              >
                <div className="font-mono text-[10px] text-[var(--text-muted)] tracking-wide h-5 flex items-center">
                  Future
                </div>

                <div className="relative z-10 mt-2">
                  <div className="w-4 h-4 rounded-full border-2 border-dashed border-[var(--border-pencil)] bg-[var(--background)]" />
                </div>

                <div
                  className="w-[1px] h-4"
                  style={{
                    background:
                      "linear-gradient(to bottom, var(--border-pencil), transparent)",
                    opacity: 0.3,
                  }}
                />

                <div className="w-full text-center p-3 border border-dashed border-[var(--border-pencil)] bg-[var(--secondary-bg)]">
                  <p className="font-mono text-[10px] text-[var(--text-muted)] italic leading-relaxed">
                    Building what
                    <br />
                    comes next...
                  </p>
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <div className="w-1 h-1 rounded-full bg-[var(--accent-water)] animate-pulse" />
                    <div
                      className="w-1 h-1 rounded-full bg-[var(--accent-amber)] animate-pulse"
                      style={{ animationDelay: "0.3s" }}
                    />
                    <div
                      className="w-1 h-1 rounded-full bg-[var(--accent-lavender)] animate-pulse"
                      style={{ animationDelay: "0.6s" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 md:px-12 mt-8">
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent-water)" }}
            />
            <span>Internship</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent-amber)" }}
            />
            <span>Full-time</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--accent-lavender)" }}
            />
            <span>Education</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full border border-[var(--text-muted)]" />
            <span>Personal</span>
          </div>
          <div className="flex-1" />
          <div className="flex items-center gap-2 text-[var(--accent-water)]">
            <span>←</span>
            <span>Scroll to explore</span>
            <span>→</span>
          </div>
        </div>
      </div>
    </section>
  );
}
