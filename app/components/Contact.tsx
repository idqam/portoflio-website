"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full py-16 md:py-24 bg-[var(--background)] flex flex-col justify-center"
    >
      <div className="max-w-5xl mx-auto px-8 md:px-12 mb-10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 shrink-0">
            <div className="w-2 h-2 rounded-full bg-[var(--accent-lavender)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--accent-water)]" />
            <div className="w-2 h-2 rounded-full bg-[var(--accent-amber)]" />
          </div>
          <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
          <div className="flex items-center gap-4 px-6 py-3 border border-[var(--border-pencil)] bg-[var(--secondary-bg)]">
            <a
              href="https://github.com/idqam"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 transition-all duration-300 hover:scale-110"
              aria-label="GitHub Profile"
            >
              <svg
                className="w-6 h-6 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-water)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <div className="absolute inset-0 border-2 border-[var(--accent-water)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>

            <div className="w-[1px] h-6 bg-[var(--border-pencil)]" />

            <a
              href="https://www.linkedin.com/in/owen-ariza-villareal/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <svg
                className="w-6 h-6 text-[var(--foreground)] transition-colors duration-300 group-hover:text-[var(--accent-lavender)]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              <div className="absolute inset-0 border-2 border-[var(--accent-lavender)] rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </div>
          <div className="flex-1 h-[1px] bg-[var(--border-pencil)]" />
          <span className="font-mono text-[10px] text-[var(--text-muted)] tracking-[0.15em] uppercase shrink-0">
            Contact
          </span>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-8 md:px-12 w-full">
        <div className="relative border-2 border-[var(--border-pencil)] bg-[var(--secondary-bg)] p-8 md:p-12">
          <div className="absolute -top-[2px] left-0 w-20 h-[2px] bg-[var(--accent-lavender)]" />
          <div className="absolute -top-[2px] right-0 w-20 h-[2px] bg-[var(--accent-water)]" />
          <div className="absolute -bottom-[2px] left-0 w-20 h-[2px] bg-[var(--accent-amber)]" />
          <div className="absolute -bottom-[2px] right-0 w-20 h-[2px] bg-[var(--accent-lavender)]" />

          <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[var(--accent-lavender)] -translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[var(--accent-water)] translate-x-[2px] -translate-y-[2px]" />
          <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[var(--accent-amber)] -translate-x-[2px] translate-y-[2px]" />
          <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[var(--accent-lavender)] translate-x-[2px] translate-y-[2px]" />

          <div className="mb-8">
            <p className="font-sans text-base text-[var(--foreground)] leading-relaxed mb-2">
              I&apos;m always open to discussing new opportunities, collaborations,
              or just having a thoughtful conversation about technology and
              design.
            </p>
            <p className="font-mono text-red text-xs text-[var(--text-muted)] tracking-wide">
              FORM NOT YET WORKING - PLEASE REACH OUT VIA EMAIL INSTEAD
              <a
                href="mailto:villarealowen1@gmail.com"
                className="text-[var(--accent-water)] hover:text-[var(--accent-lavender)] transition-colors duration-300"
              >
                villarealowen1@gmail.com
              </a>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label
                htmlFor="name"
                className="block font-mono text-xs text-[var(--text-muted)] tracking-wide mb-2 uppercase"
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3 bg-[var(--background)] border transition-all duration-300 font-sans text-sm text-[var(--foreground)] focus:outline-none"
                  style={{
                    borderColor:
                      focusedField === "name"
                        ? "var(--accent-lavender)"
                        : "var(--border-pencil)",
                    boxShadow:
                      focusedField === "name"
                        ? "0 0 0 3px var(--accent-lavender)20"
                        : "none",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: focusedField === "name" ? "100%" : "0%",
                    backgroundColor: "var(--accent-lavender)",
                  }}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="email"
                className="block font-mono text-xs text-[var(--text-muted)] tracking-wide mb-2 uppercase"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="w-full px-4 py-3 bg-[var(--background)] border transition-all duration-300 font-sans text-sm text-[var(--foreground)] focus:outline-none"
                  style={{
                    borderColor:
                      focusedField === "email"
                        ? "var(--accent-water)"
                        : "var(--border-pencil)",
                    boxShadow:
                      focusedField === "email"
                        ? "0 0 0 3px var(--accent-water)20"
                        : "none",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: focusedField === "email" ? "100%" : "0%",
                    backgroundColor: "var(--accent-water)",
                  }}
                />
              </div>
            </div>

            <div className="relative">
              <label
                htmlFor="message"
                className="block font-mono text-xs text-[var(--text-muted)] tracking-wide mb-2 uppercase"
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--background)] border transition-all duration-300 font-sans text-sm text-[var(--foreground)] focus:outline-none resize-none"
                  style={{
                    borderColor:
                      focusedField === "message"
                        ? "var(--accent-amber)"
                        : "var(--border-pencil)",
                    boxShadow:
                      focusedField === "message"
                        ? "0 0 0 3px var(--accent-amber)20"
                        : "none",
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: focusedField === "message" ? "100%" : "0%",
                    backgroundColor: "var(--accent-amber)",
                  }}
                />
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                className="group relative px-8 py-3 border-2 border-[var(--border-pencil)] bg-[var(--background)] font-mono text-sm tracking-wide text-[var(--foreground)] transition-all duration-300 hover:border-[var(--accent-water)] hover:bg-[var(--accent-water)] hover:text-[var(--background)] overflow-hidden"
              >
                <span className="relative z-10">Send Message</span>
                <div className="absolute inset-0 bg-[var(--accent-water)] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </button>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[var(--accent-lavender)] opacity-60" />
                <div className="w-1 h-1 rounded-full bg-[var(--accent-water)] opacity-60" />
                <div className="w-1 h-1 rounded-full bg-[var(--accent-amber)] opacity-60" />
              </div>
            </div>
          </form>

          <div className="absolute -bottom-4 right-8 flex items-center gap-1">
            <div className="w-12 h-[1px] bg-[var(--border-pencil)]" />
            <div className="w-2 h-2 border border-[var(--border-pencil)] rotate-45" />
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 font-mono text-xs text-[var(--text-muted)]">
          <a
            href="#"
            className="hover:text-[var(--accent-water)] transition-colors duration-300 tracking-wide"
          >
            GitHub
          </a>
          <div className="w-[1px] h-4 bg-[var(--border-pencil)]" />
          <a
            href="#"
            className="hover:text-[var(--accent-lavender)] transition-colors duration-300 tracking-wide"
          >
            LinkedIn
          </a>
          <div className="w-[1px] h-4 bg-[var(--border-pencil)]" />
          <a
            href="#"
            className="hover:text-[var(--accent-amber)] transition-colors duration-300 tracking-wide"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
