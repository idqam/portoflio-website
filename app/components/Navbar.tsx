"use client";

import { useState } from "react";

const navItems = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Misc", href: "#misc" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <nav className="w-full bg-[var(--background)] relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-water)] via-[var(--accent-amber)] to-[var(--accent-lavender)] opacity-40 z-0" />

            <div className="max-w-6xl mx-auto px-8 md:px-16 relative z-10">
                <div className="flex items-center justify-center py-8 relative">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center z-0">
                        <div className="w-3 h-3 rounded-full border-2 border-[var(--accent-water)] bg-[var(--background)]" />
                        <div className="w-24 h-[2px] bg-gradient-to-r from-[var(--accent-water)] to-[var(--border-pencil)]" />
                    </div>

                    <div className="flex items-center">
                        <div className="hidden md:block w-12 h-[2px] bg-[var(--border-pencil)]" />

                        {navItems.map((item, index) => (
                            <div key={item.label} className="flex items-center">
                                <a
                                    href={item.href}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="group relative px-6 md:px-8 py-4 bg-[var(--background)] z-10"
                                >
                                    <div className="relative">
                                        <span
                                            className={`font-serif text-xl md:text-2xl transition-all duration-300 ${hoveredIndex === index
                                                ? "text-[var(--accent-amber)]"
                                                : "text-[var(--foreground)]"
                                                }`}
                                        >
                                            {item.label}
                                        </span>

                                        <div
                                            className={`absolute -bottom-2 left-0 right-0 flex items-center justify-center gap-1 transition-all duration-300 ${hoveredIndex === index ? "opacity-100" : "opacity-0"
                                                }`}
                                        >
                                            <div className="w-2 h-[2px] bg-[var(--accent-amber)]" />
                                            <div className="w-1.5 h-1.5 rounded-full bg-[var(--accent-amber)]" />
                                            <div className="w-2 h-[2px] bg-[var(--accent-amber)]" />
                                        </div>
                                    </div>
                                </a>

                                {index < navItems.length - 1 && (
                                    <div className="flex items-center">
                                        <div className="w-8 md:w-12 h-[2px] bg-[var(--border-pencil)]" />
                                        <div className="w-2 h-2 rotate-45 border-r-2 border-t-2 border-[var(--border-pencil)]" />
                                        <div className="w-8 md:w-12 h-[2px] bg-[var(--border-pencil)]" />
                                    </div>
                                )}
                            </div>
                        ))}

                        <div className="hidden md:block w-12 h-[2px] bg-[var(--border-pencil)]" />
                    </div>

                    <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:flex items-center z-0">
                        <div className="w-24 h-[2px] bg-gradient-to-l from-[var(--accent-lavender)] to-[var(--border-pencil)]" />
                        <div className="w-3 h-3 rounded-full border-2 border-[var(--accent-lavender)] bg-[var(--background)]" />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[var(--accent-water)] via-[var(--accent-amber)] to-[var(--accent-lavender)] opacity-40 z-0" />
        </nav>
    );
}
