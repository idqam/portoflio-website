"use client";

import { useState } from "react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  year: string;
  skills: string[];
  status: "completed" | "ongoing" | "paused";
  accent: "water" | "amber" | "lavender";
  webLink?: string;
  githubLink?: string;
}

const projects: Project[] = [
  {
    id: "linkforge",
    title: "LinkForge",
    subtitle: "URL Shortener & Infrastructure Showcase",
    description:
      "URL shortener built in Go with Redis caching, rate limiting, and structured observability — containerized with Docker builds, deployed to Kubernetes with HPA, and monitored end-to-end with Prometheus, Grafana, and distributed tracing.",
    year: "2026",
    skills: [
      "Go",
      "Docker",
      "Kubernetes",
      "Redis",
      "PostgreSQL",
      "Prometheus",
      "Grafana",
    ],
    status: "completed",
    accent: "water",
    webLink: "https://linkpulse-chi.vercel.app/",
    githubLink: "https://github.com/idqam/url-shortener",
  },
  {
    id: "ecosystem-simulation",
    title: "EcoSim",
    subtitle: "Event-Driven Polyglot Distributed Monolith",
    description:
      "Event-driven distributed monolith powering a real-time agent simulation across 11 services in Go, Rust, Python, and TypeScript. Go handles the core tick loop with goroutine-per-organism concurrency, RabbitMQ event sourcing, and a WebSocket hub for live streaming. Rust services own performance-critical paths — genetic crossover, quadtree spatial indexing, and A* pathfinding. CQRS separates write-side domain events from materialized read models in PostgreSQL, with Prometheus/Grafana observability across the stack.",
    year: "2026",
    skills: [
      "Go",
      "Rust",
      "Python",
      "TypeScript",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Prometheus",
      "Terraform",
    ],
    status: "ongoing",
    accent: "amber",
    webLink: "/projects/ecosystem-simulation",
    githubLink: "https://github.com/idqam/EcoSim",
  },
  {
    id: "queueflow",
    title: "QueueFlow",
    subtitle: "Distributed Task Queue & Autoscaling",
    description:
      "Distributed task queue built from scratch in Go with Kafka-backed priority lanes, exponential retry, dead letter queue, and a custom Kubernetes autoscaler that scales worker pods based on consumer lag rather than CPU.",
    year: "2026",
    skills: [
      "Go",
      "Kafka",
      "Kubernetes",
      "PostgreSQL",
      "Redis",
      "Prometheus",
      "React",
    ],
    status: "ongoing",
    accent: "water",
    webLink: "/projects/queueflow",
    githubLink: "https://github.com/idqam/queueflow",
  },
  {
    id: "portfolio",
    title: "Portfolio & Writing",
    subtitle: "Design System & Personal Site",
    description:
      "This site. A Winter Study aesthetic emphasizing readability, quiet sophistication, and scholarly warmth. Built as an expression of design philosophy as much as technical capability.",
    year: "2025",
    skills: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
    status: "ongoing",
    accent: "amber",
    webLink: "/projects/portfolio",
    githubLink: "",
  },
];

const accentColors = {
  water: "var(--accent-water)",
  amber: "var(--accent-amber)",
  lavender: "var(--accent-lavender)",
};

const statusLabels = {
  completed: "Completed",
  ongoing: "In Progress",
  paused: "Paused",
};

const PROJECTS_PER_PAGE = 4;

export default function ProjectsEditorial() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const startIndex = currentPage * PROJECTS_PER_PAGE;
  const visibleProjects = projects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE,
  );

  const goToPrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
    setHoveredId(null);
  };

  const goToNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
    setHoveredId(null);
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-16 md:py-24 bg-[var(--background)] flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12 mb-10">
        <div className="flex items-center gap-4">
          <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase shrink-0">
            Index
          </span>
          <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
          <h2 className="font-serif text-2xl text-[var(--foreground)] px-4">
            Project Archive
          </h2>
          <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-water)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--accent-amber)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--accent-lavender)]" />
          </div>
        </div>
      </div>

      <div className="w-5xl mx-auto px-8 md:px-12">
        <div className="relative border-2 border-[var(--border-pencil)] bg-[var(--secondary-bg)] p-6 md:p-8">
          <div className="mb-8 flex items-center gap-3">
            <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase">
              {String(startIndex + 1).padStart(2, "0")}—
              {String(
                Math.min(startIndex + PROJECTS_PER_PAGE, projects.length),
              ).padStart(2, "0")}{" "}
              of {String(projects.length).padStart(2, "0")}
            </span>
            <div className="h-[1px] flex-1 bg-[var(--border-pencil)] opacity-50" />
          </div>

          <div className="absolute -top-[2px] left-0 w-16 h-[2px] bg-[var(--accent-water)]" />
          <div className="absolute -top-[2px] right-0 w-16 h-[2px] bg-[var(--accent-lavender)]" />
          <div className="absolute -bottom-[2px] left-0 w-16 h-[2px] bg-[var(--accent-amber)]" />
          <div className="absolute -bottom-[2px] right-0 w-16 h-[2px] bg-[var(--accent-water)]" />

          <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-[var(--accent-water)] -translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-[var(--accent-lavender)] translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-[var(--accent-amber)] -translate-x-[2px] translate-y-[2px]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-[var(--accent-water)] translate-x-[2px] translate-y-[2px]" />

          <div className="flex flex-col gap-2" style={{ height: "420px" }}>
            {visibleProjects.map((project, index) => {
              const isHovered = hoveredId === project.id;
              const isCompressed = hoveredId !== null && !isHovered;
              const accent = accentColors[project.accent];
              const globalIndex = startIndex + index;
              const indexNum = String(globalIndex + 1).padStart(2, "0");

              return (
                <a
                  key={project.id}
                  href={project.webLink}
                  className="group relative bg-[var(--background)] border transition-all duration-300 block overflow-hidden"
                  style={{
                    flex: isHovered
                      ? "2.5 1 0"
                      : isCompressed
                        ? "0.5 1 0"
                        : "1 1 0",
                    minHeight: 0,
                    borderColor: isHovered ? accent : "var(--border-pencil)",
                    transform: isHovered
                      ? "translateX(8px) scale(1.01)"
                      : "translateX(0) scale(1)",
                    boxShadow: isHovered
                      ? `0 4px 24px -4px ${accent}30, -4px 0 0 0 ${accent}`
                      : "none",
                    zIndex: isHovered ? 10 : 1,
                  }}
                  onMouseEnter={() => setHoveredId(project.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <div
                    className="absolute inset-0 transition-opacity duration-200"
                    style={{ opacity: isCompressed ? 0 : 1 }}
                  >
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] transition-all duration-300"
                      style={{
                        backgroundColor: accent,
                        opacity: isHovered ? 1 : 0,
                      }}
                    />

                    <div className="flex items-start gap-5 p-4 md:p-5">
                      <div className="flex flex-col items-center shrink-0 w-10">
                        <span
                          className="font-serif text-xl md:text-2xl transition-colors duration-300"
                          style={{
                            color: isHovered ? accent : "var(--border-pencil)",
                          }}
                        >
                          {indexNum}
                        </span>
                        <div
                          className="w-[1px] h-3 mt-1.5 transition-colors duration-300"
                          style={{
                            backgroundColor: isHovered
                              ? accent
                              : "var(--border-pencil)",
                          }}
                        />
                        <span
                          className="font-mono text-[9px] tracking-wide mt-1 transition-colors duration-300"
                          style={{
                            color: isHovered ? accent : "var(--text-muted)",
                          }}
                        >
                          {project.year}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div>
                            <h3 className="font-serif text-sm md:text-base text-[var(--foreground)] leading-tight">
                              {project.title}
                            </h3>
                            <p
                              className="font-mono text-[10px] tracking-wide mt-0.5 transition-colors duration-300"
                              style={{
                                color: isHovered ? accent : "var(--text-muted)",
                              }}
                            >
                              {project.subtitle}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 shrink-0">
                            <span
                              className="hidden sm:inline-block font-mono text-[9px] tracking-wide px-2 py-0.5 border transition-colors duration-300"
                              style={{
                                borderColor: accent,
                                color:
                                  project.status === "ongoing"
                                    ? accent
                                    : "var(--text-muted)",
                                backgroundColor:
                                  project.status === "ongoing"
                                    ? `${accent}10`
                                    : "transparent",
                              }}
                            >
                              {statusLabels[project.status]}
                            </span>

                            {project.githubLink && (
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  window.open(project.githubLink, "_blank", "noopener,noreferrer");
                                }}
                                className="w-5 h-5 flex items-center justify-center transition-colors duration-300"
                                style={{
                                  color: isHovered ? accent : "var(--text-muted)",
                                }}
                                title="GitHub repository"
                              >
                                <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                                </svg>
                              </button>
                            )}

                            <div
                              className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                              style={{
                                backgroundColor: isHovered
                                  ? accent
                                  : "transparent",
                                border: `1px solid ${isHovered ? accent : "var(--border-pencil)"}`,
                              }}
                            >
                              <svg
                                className="w-2.5 h-2.5 transition-all duration-300"
                                style={{
                                  color: isHovered
                                    ? "var(--background)"
                                    : "var(--text-muted)",
                                  transform: isHovered
                                    ? "translateX(1px)"
                                    : "translateX(0)",
                                }}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {(isHovered
                            ? project.skills
                            : project.skills.slice(0, 4)
                          ).map((skill) => (
                            <span
                              key={skill}
                              className="font-mono text-[10px] tracking-wide px-2 py-0.5 border transition-all duration-200"
                              style={{
                                borderColor: isHovered
                                  ? accent
                                  : "var(--border-pencil)",
                                color: isHovered ? accent : "var(--text-muted)",
                                backgroundColor: isHovered
                                  ? `${accent}12`
                                  : "transparent",
                              }}
                            >
                              {skill}
                            </span>
                          ))}
                          {!isHovered && project.skills.length > 4 && (
                            <span
                              className="font-mono text-[10px] tracking-wide px-2 py-0.5 border"
                              style={{
                                borderColor: "var(--border-pencil)",
                                color: "var(--text-muted)",
                              }}
                            >
                              +{project.skills.length - 4}
                            </span>
                          )}
                        </div>
                      </div>

                      <div
                        className="hidden md:flex shrink-0 w-16 h-16 border overflow-hidden items-center justify-center transition-all duration-300"
                        style={{
                          borderColor: isHovered
                            ? accent
                            : "var(--border-pencil)",
                          backgroundColor: isHovered
                            ? `${accent}08`
                            : "var(--secondary-bg)",
                        }}
                      >
                        <div
                          className="w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300"
                          style={{
                            borderColor: accent,
                            backgroundColor: isHovered ? accent : "transparent",
                          }}
                        >
                          <span
                            className="font-serif text-xs transition-colors duration-300"
                            style={{
                              color: isHovered ? "var(--background)" : accent,
                            }}
                          >
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div
                      className="transition-opacity duration-300"
                      style={{ opacity: isHovered ? 1 : 0 }}
                    >
                      <div
                        className="mx-4 mb-4 pt-3 border-t"
                        style={{ borderColor: `${accent}40` }}
                      >
                        <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div
                    className="absolute inset-0 flex items-center gap-4 px-5 transition-opacity duration-200"
                    style={{ opacity: isCompressed ? 1 : 0 }}
                  >
                    <span
                      className="font-serif text-lg shrink-0 w-8 text-center"
                      style={{ color: "var(--border-pencil)" }}
                    >
                      {indexNum}
                    </span>
                    <div
                      className="w-[1px] h-4 shrink-0"
                      style={{ backgroundColor: "var(--border-pencil)" }}
                    />
                    <h3 className="font-serif text-sm text-[var(--foreground)] truncate">
                      {project.title}
                    </h3>
                    <span
                      className="font-mono text-[10px] tracking-wide ml-auto shrink-0"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.year}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="flex items-center justify-between mt-6 pt-4 border-t border-[var(--border-pencil)]">
            <button
              onClick={goToPrev}
              disabled={currentPage === 0}
              className="group flex items-center gap-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <div className="w-8 h-8 rounded-full border border-[var(--border-pencil)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent-water)] group-hover:bg-[var(--accent-water)] group-disabled:hover:border-[var(--border-pencil)] group-disabled:hover:bg-transparent">
                <svg
                  className="w-3 h-3 text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--background)] group-hover:-translate-x-0.5 group-disabled:hover:text-[var(--text-muted)] group-disabled:hover:translate-x-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </div>
              <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wide group-hover:text-[var(--foreground)] transition-colors duration-200">
                Prev
              </span>
            </button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentPage(idx);
                    setHoveredId(null);
                  }}
                  className="relative w-8 h-1 transition-all duration-200"
                >
                  <div
                    className="absolute inset-0 bg-[var(--border-pencil)] transition-all duration-200"
                    style={{
                      backgroundColor:
                        idx === currentPage
                          ? "var(--accent-amber)"
                          : "var(--border-pencil)",
                    }}
                  />
                  {idx === currentPage && (
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-amber)]" />
                  )}
                </button>
              ))}
            </div>

            <button
              onClick={goToNext}
              disabled={currentPage === totalPages - 1}
              className="group flex items-center gap-2 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-wide group-hover:text-[var(--foreground)] transition-colors duration-200">
                Next
              </span>
              <div className="w-8 h-8 rounded-full border border-[var(--border-pencil)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] group-disabled:hover:border-[var(--border-pencil)] group-disabled:hover:bg-transparent">
                <svg
                  className="w-3 h-3 text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--background)] group-hover:translate-x-0.5 group-disabled:hover:text-[var(--text-muted)] group-disabled:hover:translate-x-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 md:px-12 mt-6">
        <div className="flex items-center justify-center gap-6 text-[10px] font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-water)]" />
            <span>Hover to preview</span>
          </div>
          <div className="w-[1px] h-3 bg-[var(--border-pencil)]" />
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
            <span>Click to visit</span>
          </div>
        </div>
      </div>
    </section>
  );
}
