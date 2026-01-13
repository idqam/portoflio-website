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
    link: string;
}

const projects: Project[] = [
    {
        id: "organism-sim",
        title: "Organism Simulation",
        subtitle: "Emergent Systems & Cellular Automata",
        description: "A comprehensive ecosystem simulation exploring emergent behavior through agent-based modeling. Built to master event-driven architecture patterns and real-time state management across distributed components.",
        year: "2025",
        skills: ["Java", "Spring Boot", "React", "TypeScript", "AWS", "WebSocket"],
        status: "ongoing",
        accent: "water",
        link: "/projects/organism-sim",
    },
    {
        id: "radius-v3",
        title: "Radius V3 Platform",
        subtitle: "Logistics & Real-time Tracking",
        description: "Production logistics system at Baton handling real-time GPS tracking, automated stop sequencing, and TMW integration. Critical infrastructure serving the trucking industry.",
        year: "2025",
        skills: ["Go", "PostgreSQL", "Redis", "gRPC", "Docker"],
        status: "ongoing",
        accent: "amber",
        link: "/projects/radius-v3",
    },
    {
        id: "study-system",
        title: "Algorithm Study System",
        subtitle: "Spaced Repetition & Pattern Recognition",
        description: "Personal learning platform implementing spaced repetition algorithms for systematic problem-solving practice. Tracks 600+ problems across pattern categories with detailed progress analytics.",
        year: "2024",
        skills: ["TypeScript", "Next.js", "Notion API", "Tailwind"],
        status: "completed",
        accent: "lavender",
        link: "/projects/study-system",
    },
    {
        id: "webhook-engine",
        title: "Webhook Sync Engine",
        subtitle: "Distributed Transactions",
        description: "Reliable message delivery system ensuring data consistency across microservices. Handles complex transaction patterns with automatic retry logic and dead letter queues.",
        year: "2024",
        skills: ["Java", "Kafka", "Spring Boot", "Docker"],
        status: "completed",
        accent: "water",
        link: "/projects/webhook-engine",
    },
    {
        id: "portfolio",
        title: "Portfolio & Writing",
        subtitle: "Design System & Personal Site",
        description: "This site. A Winter Study aesthetic emphasizing readability, quiet sophistication, and scholarly warmth. Built as an expression of design philosophy as much as technical capability.",
        year: "2025",
        skills: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
        status: "ongoing",
        accent: "amber",
        link: "/projects/portfolio",
    },
    {
        id: "audible-platform",
        title: "Audible Platform Features",
        subtitle: "Enterprise Scale Backend",
        description: "Core platform contributions at Audible including scalable backend services, distributed caching strategies, and API design patterns serving millions of users.",
        year: "2023",
        skills: ["Java", "AWS", "DynamoDB", "Lambda", "CloudFormation"],
        status: "completed",
        accent: "lavender",
        link: "/projects/audible-platform",
    },
    {
        id: "mandarin-app",
        title: "Mandarin Learning App",
        subtitle: "Language Acquisition Tools",
        description: "Personal tool for tracking character recognition and tonal pronunciation practice. Uses spaced repetition and audio recording for self-assessment.",
        year: "2024",
        skills: ["React Native", "SQLite", "Expo"],
        status: "paused",
        accent: "water",
        link: "/projects/mandarin-app",
    },
    {
        id: "paint-journal",
        title: "Painting Process Journal",
        subtitle: "Creative Documentation",
        description: "Digital journal documenting my journey learning oil painting. Includes color mixing notes, technique experiments, and progress photography.",
        year: "2025",
        skills: ["Next.js", "MDX", "Cloudinary"],
        status: "ongoing",
        accent: "lavender",
        link: "/projects/paint-journal",
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
    const visibleProjects = projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);

    const goToPrev = () => {
        setCurrentPage((prev) => Math.max(0, prev - 1));
        setHoveredId(null);
    };

    const goToNext = () => {
        setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
        setHoveredId(null);
    };

    return (
        <section id="projects" className="min-h-screen w-full py-16 md:py-24 bg-[var(--background)] flex flex-col justify-center">
            <div className="max-w-5xl mx-auto px-8 md:px-12 mb-10">
                <div className="flex items-center gap-4">
                    <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase shrink-0">
                        Index
                    </span>
                    <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
                    <h2 className="font-serif text-2xl text-[var(--foreground)] px-4">Project Archive</h2>
                    <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
                    <div className="flex items-center gap-1.5 shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-water)]" />
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-amber)]" />
                        <div className="w-2 h-2 rounded-full bg-[var(--accent-lavender)]" />
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-8 md:px-12">
                <div className="relative border-2 border-[var(--border-pencil)] bg-[var(--secondary-bg)] p-6 md:p-8">
                    <div className="mb-8 flex items-center gap-3">
                        <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase">
                            {String(startIndex + 1).padStart(2, "0")}—{String(Math.min(startIndex + PROJECTS_PER_PAGE, projects.length)).padStart(2, "0")} of {String(projects.length).padStart(2, "0")}
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

                    <div className="flex flex-col gap-3">
                        {visibleProjects.map((project, index) => {
                            const isHovered = hoveredId === project.id;
                            const accent = accentColors[project.accent];
                            const globalIndex = startIndex + index;
                            const indexNum = String(globalIndex + 1).padStart(2, "0");

                            return (
                                <a
                                    key={project.id}
                                    href={project.link}
                                    className="group relative bg-[var(--background)] border transition-all duration-300 block"
                                    style={{
                                        borderColor: isHovered ? accent : "var(--border-pencil)",
                                        transform: isHovered ? "translateX(8px) scale(1.01)" : "translateX(0) scale(1)",
                                        boxShadow: isHovered ? `0 4px 24px -4px ${accent}30, -4px 0 0 0 ${accent}` : "none",
                                        zIndex: isHovered ? 10 : 1,
                                    }}
                                    onMouseEnter={() => setHoveredId(project.id)}
                                    onMouseLeave={() => setHoveredId(null)}
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
                                                style={{ color: isHovered ? accent : "var(--border-pencil)" }}
                                            >
                                                {indexNum}
                                            </span>
                                            <div
                                                className="w-[1px] h-3 mt-1.5 transition-colors duration-300"
                                                style={{ backgroundColor: isHovered ? accent : "var(--border-pencil)" }}
                                            />
                                            <span
                                                className="font-mono text-[9px] tracking-wide mt-1 transition-colors duration-300"
                                                style={{ color: isHovered ? accent : "var(--text-muted)" }}
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
                                                        style={{ color: isHovered ? accent : "var(--text-muted)" }}
                                                    >
                                                        {project.subtitle}
                                                    </p>
                                                </div>

                                                <div className="flex items-center gap-2 shrink-0">
                                                    <span
                                                        className="hidden sm:inline-block font-mono text-[9px] tracking-wide px-2 py-0.5 border transition-colors duration-300"
                                                        style={{
                                                            borderColor: accent,
                                                            color: project.status === "ongoing" ? accent : "var(--text-muted)",
                                                            backgroundColor: project.status === "ongoing" ? `${accent}10` : "transparent",
                                                        }}
                                                    >
                                                        {statusLabels[project.status]}
                                                    </span>

                                                    <div
                                                        className="w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300"
                                                        style={{
                                                            backgroundColor: isHovered ? accent : "transparent",
                                                            border: `1px solid ${isHovered ? accent : "var(--border-pencil)"}`,
                                                        }}
                                                    >
                                                        <svg
                                                            className="w-2.5 h-2.5 transition-all duration-300"
                                                            style={{
                                                                color: isHovered ? "var(--background)" : "var(--text-muted)",
                                                                transform: isHovered ? "translateX(1px)" : "translateX(0)",
                                                            }}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>

                                            <div
                                                className="overflow-hidden transition-all duration-300"
                                                style={{
                                                    maxHeight: isHovered ? "120px" : "0px",
                                                    opacity: isHovered ? 1 : 0,
                                                    marginTop: isHovered ? "8px" : "0px",
                                                }}
                                            >
                                                <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-3">
                                                    {project.description}
                                                </p>

                                                <div className="flex flex-wrap gap-1">
                                                    {project.skills.map((skill) => (
                                                        <span
                                                            key={skill}
                                                            className="font-mono text-[9px] px-1.5 py-0.5 border transition-colors duration-300"
                                                            style={{
                                                                borderColor: accent,
                                                                color: accent,
                                                                backgroundColor: `${accent}08`,
                                                            }}
                                                        >
                                                            {skill}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            <div
                                                className="flex flex-wrap gap-1.5 transition-all duration-300"
                                                style={{
                                                    opacity: isHovered ? 0 : 1,
                                                    height: isHovered ? "0px" : "auto",
                                                    marginTop: isHovered ? "0px" : "8px",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {project.skills.slice(0, 4).map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="font-mono text-[9px] px-1.5 py-0.5 bg-[var(--secondary-bg)] text-[var(--text-muted)]"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                                {project.skills.length > 4 && (
                                                    <span className="font-mono text-[9px] text-[var(--text-muted)]">
                                                        +{project.skills.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div
                                            className="hidden md:flex shrink-0 w-16 h-16 border overflow-hidden items-center justify-center transition-all duration-300"
                                            style={{
                                                borderColor: isHovered ? accent : "var(--border-pencil)",
                                                backgroundColor: isHovered ? `${accent}08` : "var(--secondary-bg)",
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
                                                    style={{ color: isHovered ? "var(--background)" : accent }}
                                                >
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        </div>
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
                            <div
                                className="w-8 h-8 rounded-full border border-[var(--border-pencil)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent-water)] group-hover:bg-[var(--accent-water)] group-disabled:hover:border-[var(--border-pencil)] group-disabled:hover:bg-transparent"
                            >
                                <svg
                                    className="w-3 h-3 text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--background)] group-hover:-translate-x-0.5 group-disabled:hover:text-[var(--text-muted)] group-disabled:hover:translate-x-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                                            backgroundColor: idx === currentPage ? "var(--accent-amber)" : "var(--border-pencil)",
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
                            <div
                                className="w-8 h-8 rounded-full border border-[var(--border-pencil)] flex items-center justify-center transition-all duration-200 group-hover:border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] group-disabled:hover:border-[var(--border-pencil)] group-disabled:hover:bg-transparent"
                            >
                                <svg
                                    className="w-3 h-3 text-[var(--text-muted)] transition-all duration-200 group-hover:text-[var(--background)] group-hover:translate-x-0.5 group-disabled:hover:text-[var(--text-muted)] group-disabled:hover:translate-x-0"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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