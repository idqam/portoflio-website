"use client";

import { useState } from "react";
import { PolarLayout } from "./PolarLayout";

interface MiscItem {
  title: string;
  description?: string;
  link: string;
  date?: string;
}

interface MiscCategory {
  id: string;
  label: string;
  accent: "water" | "amber" | "lavender" | "mint";
  items: MiscItem[];
}

const categories: MiscCategory[] = [
  {
    id: "writing",
    label: "Writing",
    accent: "water",
    items: [
      {
        title: "On Distributed Systems & Philosophy",
        description:
          "Exploring parallels between system design and epistemology",
        link: "/writing/distributed-philosophy",
        date: "Dec 2025",
      },
      {
        title: "The Art of Debugging",
        description: "A meditation on patience and systematic thinking",
        link: "/writing/debugging-meditation",
        date: "Nov 2025",
      },
      {
        title: "Learning in Public",
        description: "Why I document my journey",
        link: "/writing/learning-public",
        date: "Oct 2025",
      },
      {
        title: "Winter & Productivity",
        description: "Finding focus in the cold months",
        link: "/writing/winter-productivity",
        date: "Sep 2025",
      },
    ],
  },
  {
    id: "content",
    label: "Content",
    accent: "amber",
    items: [
      {
        title: "YouTube",
        description: "Technical tutorials & learning vlogs",
        link: "https://youtube.com/@owenvillareal",
        date: "Ongoing",
      },
      {
        title: "TikTok",
        description: "Short-form coding tips",
        link: "https://tiktok.com/@owenvillareal",
        date: "Ongoing",
      },
      {
        title: "Twitter/X",
        description: "Thoughts & threads",
        link: "https://x.com/owenvillareal",
        date: "Ongoing",
      },
    ],
  },
  {
    id: "reading",
    label: "Reading",
    accent: "lavender",
    items: [
      {
        title: "Designing Data-Intensive Applications",
        description: "Kleppmann — Currently re-reading",
        link: "#",
        date: "Current",
      },
      {
        title: "The Art of Doing Science and Engineering",
        description: "Hamming — On taste and judgment",
        link: "#",
        date: "2025",
      },
      {
        title: "Introduction to Algorithms",
        description: "The canonical reference",
        link: "#",
        date: "2024",
      },
      {
        title: "The Phenomenology of Spirit",
        description: "Hegel — Slowly, carefully",
        link: "#",
        date: "Ongoing",
      },
    ],
  },
  {
    id: "learning",
    label: "Learning",
    accent: "mint",
    items: [
      {
        title: "Mandarin Chinese",
        description: "HSK 3 level, focusing on reading",
        link: "#",
        date: "2024—",
      },
      {
        title: "Oil Painting",
        description: "Still life & color theory",
        link: "#",
        date: "2025—",
      },
      {
        title: "Piano",
        description: "Classical pieces, Chopin nocturnes",
        link: "#",
        date: "Paused",
      },
    ],
  },
];

const accentColors = {
  water: "var(--accent-water)",
  amber: "var(--accent-amber)",
  lavender: "var(--accent-lavender)",
  mint: "#B8D4C8",
};

const rainbowColors = [
  "#FFB3BA",
  "#FFDFBA",
  "#FFFFBA",
  "#BAFFC9",
  "#BAE1FF",
  "#E0BBE4",
];

export default function Misc() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lockedId, setLockedId] = useState<string | null>(null);

  const activeCategory = categories.find(
    (c) => c.id === (lockedId || activeId),
  );

  const getSide = (id: string) => {
    if (["writing", "content"].includes(id)) return "right";
    return "left";
  };

  const activeSide = activeCategory ? getSide(activeCategory.id) : null;

  return (
    <section
      id="misc"
      className="w-full relative py-24 overflow-hidden min-h-screen flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-6 mb-12 pt-12 relative z-20">
        <div className="flex items-center gap-4 text-foreground opacity-80">
          <div className="flex-1 w-12 h-px bg-pencil" />
          <h2 className="font-serif text-3xl">Misc</h2>
          <div className="flex-1 w-12 h-px bg-pencil" />
        </div>

        <div className="flex flex-col items-center gap-3 opacity-50">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-water)] animate-pulse" />
            <div
              className="w-2 h-2 rounded-full bg-[var(--accent-amber)] animate-pulse m-0"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="w-2 h-2 rounded-full bg-[var(--accent-lavender)] animate-pulse m-0"
              style={{ animationDelay: "0.6s" }}
            />
          </div>
          <p className="font-mono text-xs text-[var(--text-muted)] uppercase tracking-[0.3em] mb-5">
            {lockedId ? "Click again to unlock" : "Click to lock selection"}
          </p>
        </div>
      </div>

      <div className="relative w-full flex items-center justify-center px-4">
        <div
          className={`hidden md:flex absolute left-8 top-1/2 -translate-y-1/2 max-w-sm w-full transition-all duration-700 justify-end z-10 ${
            activeSide === "left"
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-8 pointer-events-none"
          }`}
        >
          {activeCategory && activeSide === "left" && (
            <CategoryContent category={activeCategory} />
          )}
        </div>

        <div className="relative z-20 shrink-0">
          <PolarLayout
            items={categories}
            radius={200}
            width={650}
            height={650}
            offsetAngle={-Math.PI / 2}
            className="pointer-events-none"
            renderItem={(category, { x, y, angle }) => {
              const isActive = (lockedId || activeId) === category.id;
              const accentColor = accentColors[category.accent];
              const rotationInRadians = angle + Math.PI / 2;
              const isBottom = Math.sin(angle) > 0.01;
              const textRotation = isBottom ? 180 : 0;

              const complementColor = {
                water: accentColors.amber,
                amber: accentColors.water,
                lavender: accentColors.mint,
                mint: accentColors.lavender,
              }[category.accent];

              return (
                <div
                  key={category.id}
                  className="absolute cursor-pointer transition-all duration-500 pointer-events-auto"
                  style={{
                    left: x,
                    top: y,
                    transform: `translate(-50%, -50%) rotate(${rotationInRadians}rad) ${isActive ? "scale(1.1)" : "scale(1)"}`,
                    zIndex: isActive ? 20 : 10,
                    filter: isActive
                      ? `drop-shadow(0 8px 24px ${accentColor}60)`
                      : "none",
                  }}
                  onMouseEnter={() => !lockedId && setActiveId(category.id)}
                  onMouseLeave={() => !lockedId && setActiveId(null)}
                  onClick={() =>
                    setLockedId(lockedId === category.id ? null : category.id)
                  }
                >
                  <svg
                    width="180"
                    height="220"
                    viewBox="0 0 180 220"
                    fill="none"
                    className="transition-all duration-500"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${category.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor={accentColor}
                          stopOpacity="0.6"
                        />
                        <stop
                          offset="100%"
                          stopColor={accentColor}
                          stopOpacity="0.3"
                        />
                      </linearGradient>

                      <linearGradient
                        id={`rainbow-${category.id}`}
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        {rainbowColors.map((color, i) => (
                          <stop
                            key={i}
                            offset={`${(i / (rainbowColors.length - 1)) * 100}%`}
                            stopColor={color}
                          />
                        ))}
                      </linearGradient>

                      <filter id={`glow-${category.id}`}>
                        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    <path
                      d="M 90 10 Q 140 60, 150 110 Q 155 160, 120 190 Q 90 210, 90 210 Q 90 210, 60 190 Q 25 160, 30 110 Q 40 60, 90 10 Z"
                      fill={`url(#gradient-${category.id})`}
                      stroke={
                        isActive ? `url(#rainbow-${category.id})` : accentColor
                      }
                      strokeWidth={isActive ? "3" : "2"}
                      className="transition-all duration-500"
                      style={{
                        filter: isActive ? `url(#glow-${category.id})` : "none",
                      }}
                    />

                    <path
                      d="M 90 10 Q 92 110, 90 210"
                      stroke={accentColor}
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.4"
                      className="transition-opacity duration-500"
                      style={{
                        opacity: isActive ? 0.7 : 0.4,
                      }}
                    />

                    <path
                      d="M 90 60 Q 60 70, 45 85"
                      stroke={accentColor}
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M 90 60 Q 120 70, 135 85"
                      stroke={accentColor}
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M 90 110 Q 60 115, 50 130"
                      stroke={accentColor}
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />
                    <path
                      d="M 90 110 Q 120 115, 130 130"
                      stroke={accentColor}
                      strokeWidth="1"
                      fill="none"
                      opacity="0.3"
                    />

                    <ellipse
                      cx="75"
                      cy="70"
                      rx="20"
                      ry="30"
                      fill="white"
                      opacity={isActive ? "0.3" : "0.15"}
                      className="transition-opacity duration-500"
                    />
                  </svg>

                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
                    <span
                      className="font-serif text-lg tracking-wider uppercase transition-all duration-500"
                      style={{
                        fontSize: "18px",
                        color: isActive ? complementColor : "var(--text-muted)",
                        textShadow: isActive
                          ? "0 2px 10px rgba(0,0,0,0.1)"
                          : "none",
                        transform: `rotate(${textRotation}deg)`,
                      }}
                    >
                      {category.label}
                    </span>
                  </div>
                </div>
              );
            }}
          />
        </div>

        {/* Right Content Area */}
        <div
          className={`hidden md:flex absolute right-8 top-1/2 -translate-y-1/2 max-w-sm w-full transition-all duration-700 justify-start z-10 ${
            activeSide === "right"
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-8 pointer-events-none"
          }`}
        >
          {activeCategory && activeSide === "right" && (
            <CategoryContent category={activeCategory} />
          )}
        </div>
      </div>

      {/* Mobile Content Fallback */}
      <div className="md:hidden w-full px-6 min-h-[300px] flex items-center justify-center mt-8">
        {activeCategory && <CategoryContent category={activeCategory} />}
      </div>
    </section>
  );
}

function CategoryContent({ category }: { category: MiscCategory }) {
  const accentColorsLocal = {
    water: "var(--accent-water)",
    amber: "var(--accent-amber)",
    lavender: "var(--accent-lavender)",
    mint: "#B8D4C8",
  };

  return (
    <div
      className="bg-[var(--background)] border-2 border-[var(--border-pencil)] p-8 rounded-sm shadow-xl w-full relative overflow-hidden"
      style={{ borderColor: "var(--border-pencil)" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-1 transition-colors duration-500"
        style={{ backgroundColor: accentColorsLocal[category.accent] }}
      />
      <div
        className="absolute top-0 left-0 w-1 h-full transition-colors duration-500"
        style={{ backgroundColor: accentColorsLocal[category.accent] }}
      />
      <div className="relative z-10">
        <h3 className="font-serif text-3xl text-[var(--foreground)] mb-6 flex items-center gap-3">
          <span
            className="w-3 h-3 rounded-full"
            style={{ backgroundColor: accentColorsLocal[category.accent] }}
          />
          {category.label}
        </h3>
        <div className="space-y-4">
          {category.items.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="block group/item relative pl-4 border-l-2 border-transparent hover:border-[var(--accent-water)] transition-all duration-300"
            >
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-base font-sans text-[var(--foreground)] group-hover/item:text-[var(--accent-water)] transition-colors duration-300">
                  {item.title}
                </span>
                {item.date && (
                  <span className="text-[10px] font-mono text-[var(--text-muted)] shrink-0 tracking-wide">
                    {item.date}
                  </span>
                )}
              </div>
              {item.description && (
                <p className="text-sm text-[var(--text-muted)] mt-1 leading-relaxed">
                  {item.description}
                </p>
              )}
            </a>
          ))}
        </div>
      </div>
      <div
        className="absolute bottom-0 right-0 w-12 h-12 border-r-2 border-b-2 opacity-20"
        style={{ borderColor: accentColorsLocal[category.accent] }}
      />
    </div>
  );
}
