"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

type SectionItem = {
  label: string;
  title: string;
  text: string;
};

type PublicationItem = {
  label: string;
  title: string;
  doi: string;
  statOneLabel: string;
  statOneValue: string;
  statTwoLabel: string;
  statTwoValue: string;
};

const foundation: SectionItem[] = [
  {
    label: "2022–present",
    title: "Integrated PG-Ph.D",
    text: "Pursuing an Integrated PG-Ph.D at IIT Dhanbad with M.Sc in Mathematics and Computing and Ph.D. in Applied Mathematics. Research focuses on wave propagation in advanced materials.",
  },
  {
    label: "2018–2021",
    title: "B.Sc in Mathematics",
    text: "Bachelors of Science from Lucknow Christian Degree College with coursework in Mathematics, Computer Science and Statistics.",
  },
  // {
  //   label: "Research Scholar",
  //   title: "Department of Mathematics and Computing",
  //   text: "Senior Research Scholar at IIT Dhanbad specializing in nonlocal effects, piezoelectric-poroelastic materials, and applied wave mechanics.",
  // },
];

const publications: PublicationItem[] = [
  {
    label: "Peer reviewed - April 2026",
    title: "Nonlocal Love Wave Propagation in Piezoelectric-Poroelastic Layered Media with Spring-Membrane Interfaces and Diverse Surface Exposures",
    doi: "https://doi.org/10.1108/HFF-12-2025-0971",
    statOneLabel: "Journal",
    statOneValue: "Int. Journal of Numerical Methods for Heat & Fluid Flow",
    statTwoLabel: "Impact Factor",
    statTwoValue: "5.3 (Q1)",
  },
  {
    label: "Published - May 2026",
    title: "Impact of buffer layer on piezo-magneto-electric fibre-reinforced composite structure on Electro-magneto-mechanical coupling and mass-loading sensitivity analysing Love wave",
    doi: "https://doi.org/10.12989/sss.2026.37.5.451",
    statOneLabel: "Journal",
    statOneValue: "Smart Structures and Systems",
    statTwoLabel: "Impact Factor",
    statTwoValue: "2.2 (Q2)",
  },
  {
    label: "Accepted - August 2026",
    title: "A unified analysis of Love and Bleustein–Gulyaev waves in piezo-viscoelastic layered structures with graded buffer layer and imperfect interfaces",
    doi: "https://doi.org/10.1140/epjp/s13360-026-08224-0",
    statOneLabel: "Journal",
    statOneValue: "The European Physical Journal Plus",
    statTwoLabel: "Impact Factor",
    statTwoValue: "2.9 (Q2)",
  },
  {
    label: "Published - April 2026",
    title: "Non-locality effects on the propagation of Bleustein–Gulyaev wave in a piezo-poroelastic layered structure analyzing spring and membrane models",
    doi: "https://doi.org/10.1088/1402-4896/ae5aee",
    statOneLabel: "Journal",
    statOneValue: "Physica Scripta",
    statTwoLabel: "Impact Factor",
    statTwoValue: "2.6 (Q2)",
  },
];


export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [publicationIndex, setPublicationIndex] = useState(0);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setPublicationIndex((prev) => (prev + 1) % publications.length);
    }, 5000);

    return () => {
      clearInterval(slideTimer);
    };
  }, [publicationIndex]);

  const selectPublication = (index: number) => {
    setPublicationIndex(index);
  };

  const showPreviousPublication = () => {
    setPublicationIndex((prev) => (prev - 1 + publications.length) % publications.length);
  };

  const showNextPublication = () => {
    setPublicationIndex((prev) => (prev + 1) % publications.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus(null);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessageStatus({ type: "success", text: "Email sent successfully! I'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setMessageStatus({ type: "error", text: result.message || "Failed to send email. Please try again." });
      }
    } catch {
      setMessageStatus({ type: "error", text: "An error occurred. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  const activePublication = publications[publicationIndex];

  return (
    <main className="min-h-screen bg-[#070907] px-3 py-3 text-[#ece7df] sm:px-4 sm:py-4 lg:px-5 lg:py-5">
      <div className="mx-auto min-h-[calc(100vh-1.5rem)] w-full max-w-295 overflow-hidden rounded-[22px] border border-white/8 bg-[#0a0d0b] shadow-[0_30px_120px_rgba(0,0,0,0.42)]">
        <header className="flex items-center justify-between border-b border-white/6 px-6 py-5 sm:px-8 lg:px-10">
          <div>
            <p className="font-display text-2xl leading-none tracking-[-0.03em] sm:text-[2rem]">
              Sanchit Das
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.42em] text-[#8f8c86]">
              Portfolio 2026
            </p>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#b9b3aa] md:flex">
            <a href="#about" className="transition-colors hover:text-[#ece7df]">
              About
            </a>
            
            <Link href="/conferences" className="transition-colors hover:text-[#ece7df]">
              Conferences
            </Link>
            <a href="#research" className="transition-colors hover:text-[#ece7df]">
              Publications
            </a>
            <a href="/beyond-research" className="transition-colors hover:text-[#ece7df]">
              Beyond Research
            </a>
            <a href="#contact" className="transition-colors hover:text-[#ece7df]">
              Contact
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setIsCvOpen(true)}
            className="rounded-full border border-[#c5d8c5]/20 bg-[#d6e4d2] px-4 py-2 text-xs font-medium text-[#0a0d0b] transition-all hover:-translate-y-0.5 hover:bg-[#e2ede0] active:translate-y-0 cursor-pointer shadow-sm"
          >
            Curriculum Vitae
          </button>
        </header>

        <section className="grid gap-8 px-6 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
  <div className="flex flex-col justify-between gap-4 lg:min-h-105 lg:py-4">
    <div className="max-w-xl space-y-5">
      <p className="text-[10px] uppercase tracking-[0.46em] text-[#9e998f]">
        Personal portfolio
      </p>
      <h1 className="max-w-xl font-display text-6xl leading-[0.9] tracking-[-0.06em] text-[#f4efe6] sm:text-7xl lg:text-[5.7rem]">
        Sanchit <span className="italic">Das</span>
      </h1>
      <p className="max-w-lg text-sm leading-7 text-[#bdb6ad] sm:text-[0.95rem] text-justify">
 Hi, I am a Senior Research Scholar in the Department of Mathematics and Computing at the Indian Institute of Technology (IIT) Dhanbad. My research lies in applied mathematics, elastodynamics, and computational wave mechanics, with a focus on guided and surface acoustic wave propagation in smart, functionally graded, and multiphysics materials. I work on analytical, semi-analytical, spectral collocation, and finite element approaches to study dispersion, attenuation, coupling behaviour, interface effects, and sensing characteristics relevant to surface acoustic wave devices and non-destructive evaluation.
</p>
    </div>

    <div className="max-w-md space-y-3 text-sm leading-6 text-[#d1cbc1]">
      <p className="uppercase tracking-[0.34em] text-[#88857e]">Research Interests</p>
      <ul>
        <li>1. Elastodynamics of smart and functionally graded materials.</li>
        <li>2. Guided and surface acoustic wave propagation in multiphysics media.</li>
        <li>3. Analytical and semi-analytical methods in continuum mechanics.</li>
        <li>4. Spectral collocation and finite element methods for wave propagation.</li>
        <li>5. Applications of wave propagation to surface acoustic wave sensing and device design.</li>
      </ul>
    </div>
  </div>

  <div className="relative self-center lg:self-start">
    <ImageReveal />
  </div>
</section>

        <section id="about" className="border-t border-white/6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 rounded-[26px] bg-[#141815] px-6 py-7 sm:px-7 lg:grid-cols-[0.34fr_0.66fr] lg:px-8 lg:py-8">
            <div>
              <p className="font-display text-4xl leading-none tracking-[-0.05em] text-[#f4efe6] sm:text-5xl">
                Academic
              </p>
              <p className="mt-1 font-display text-3xl italic leading-none text-[#d7d1c7] sm:text-[2.3rem]">
                Foundation
              </p>
            </div>

            <div className="space-y-5">
              {foundation.map((item) => (
                <article key={item.title} className="border-b border-white/6 pb-5 last:border-b-0 last:pb-0">
                  <p className="text-[10px] uppercase tracking-[0.38em] text-[#8f8a82]">
                    {item.label}
                  </p>
                  <h2 className="mt-2 font-display text-3xl leading-tight tracking-[-0.04em] text-[#f1ebdf] sm:text-[2.05rem]">
                    {item.title}
                  </h2>
                  <p className="mt-2 max-w-3xl text-sm leading-7 text-[#c5beb4]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="research" className="border-t border-white/6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-4xl leading-none tracking-[-0.05em] text-[#f4efe6] sm:text-5xl">
                Journal
              </p>
              <p className="font-display text-3xl italic leading-none text-[#d7d1c7] sm:text-[2.3rem]">
                Publications
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="text-[10px] uppercase tracking-[0.34em] text-[#a7a194] transition-colors hover:text-[#ece7df] cursor-pointer"
            >
              View full biography & CV
            </button>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={showPreviousPublication}
                      aria-label="Show previous publication"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-[#ece7df] transition-colors hover:bg-white/10 cursor-pointer"
                    >
                      ←
                    </button>
                    <button
                      type="button"
                      onClick={showNextPublication}
                      aria-label="Show next publication"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-sm text-[#ece7df] transition-colors hover:bg-white/10 cursor-pointer"
                    >
                      →
                    </button>
                  </div>
                  <div className="flex items-center gap-2 text-right">
                    <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">{activePublication.label}</p>
                    <span className="text-[10px] text-[#8f8a82]">({publicationIndex + 1}/{publications.length})</span>
                  </div>
                </div>

                <h3 className="mt-4 max-w-2xl font-display text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.1] tracking-[-0.04em] text-[#f4efe6]">
                  {activePublication.title}
                </h3>

                {/* Direct DOI Link Button & Badge */}
                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <a
                    href={activePublication.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#c5d8c5]/30 bg-[#d6e4d2] px-4 py-2 text-xs font-semibold text-[#0a0d0b] transition hover:bg-[#e4efe1] hover:shadow-[0_0_15px_rgba(214,228,210,0.3)] active:scale-95"
                  >
                    <span>Access Publication (DOI)</span>
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <span className="font-mono text-xs text-[#8f8a82]">
                    {activePublication.doi.replace(/^https?:\/\/(dx\.)?doi\.org\//, "")}
                  </span>
                </div>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <Stat label={activePublication.statOneLabel} value={activePublication.statOneValue} />
                <Stat label={activePublication.statTwoLabel} value={activePublication.statTwoValue} />
              </div>
            </article>

            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">
                    Journal Index ({publications.length})
                  </p>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#d6e4d2]/80">Select paper</span>
                </div>

                <div className="mt-4 space-y-2.5">
                  {publications.map((pub, idx) => {
                    const isSelected = publicationIndex === idx;
                    return (
                      <div
                        key={pub.doi}
                        onClick={() => setPublicationIndex(idx)}
                        className={`group flex flex-col gap-1 rounded-[14px] border p-3.5 transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#c5d8c5]/40 bg-white/6 shadow-[0_4px_20px_rgba(0,0,0,0.35)]"
                            : "border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/4"
                        }`}
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? "text-[#d6e4d2] font-semibold" : "text-[#7f7a72]"}`}>
                            Paper 0{idx + 1} • {pub.label.split(" - ")[0]}
                          </span>
                          <a
                            href={pub.doi}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-[#8f8a82] hover:text-[#ece7df] transition-colors"
                            title="Open DOI directly"
                          >
                            <span>DOI</span>
                            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                        <p className={`line-clamp-2 text-xs leading-5 ${isSelected ? "text-[#f4efe6] font-medium" : "text-[#b8b2a8]"}`}>
                          {pub.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8f8a82]">
                <span>Showing {publicationIndex + 1} of {publications.length}</span>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    href="/conferences"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#d6e4d2] transition hover:bg-white/10 hover:text-white"
                  >
                    <span>Conferences (4)</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/research-fellow"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#d6e4d2] transition hover:bg-white/10 hover:text-white"
                  >
                    <span>Research Fellow</span>
                    <span>→</span>
                  </Link>
                  <Link
                    href="/hydrodynamic-stability"
                    className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#d6e4d2] transition hover:bg-white/10 hover:text-white"
                  >
                    <span>GIAN Course</span>
                    <span>→</span>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsCvOpen(true)}
                    className="text-xs text-[#d6e4d2] hover:underline cursor-pointer ml-1"
                  >
                    View full CV →
                  </button>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4" style={{
            display:"flex", justifyContent:"space-between"
          }}>
            <Link href="/conferences" className="block group transition-transform hover:-translate-y-1">
              {/* <MiniCard label="Award • Best Paper" title="IIT Indore 2023 →" text="Best Research Paper Award in Poster Category at IIT Indore Conference." accent="neutral" /> */}
            </Link>
            <Link href="/conferences" className="block group transition-transform hover:-translate-y-1">
              <MiniCard
                label="Conferences • Click to Explore"
                title="Four Major Venues →"
                text="Presented at IIT Indore, IIT Dhanbad, RIT Bangalore, and University of Cagliari, Italy with international collaborators."
                accent="dark"
              />
            </Link>
            <Link href="/hydrodynamic-stability" className="block group transition-transform hover:-translate-y-1">
              <MiniCard
                label="Workshop • Click to Explore"
                title="Hydrodynamic Stability →"
                text="Completed GIAN Course on Introduction to Hydrodynamic Stability with Prof. Sergey Suslov (2025)."
                accent="green"
              />
            </Link>
            <Link href="/research-fellow" className="block group transition-transform hover:-translate-y-1">
              <MiniCard
                label="Fellowship • Click to Explore"
                title="IASc–INSA–NASI →"
                text="Summer Research Fellow at Indian Academy of Sciences & C-DAC Bengaluru (2023)."
                accent="neutral"
              />
            </Link>
          </div>
        </section>

        <section id="contact" className="border-t border-white/6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="grid gap-8 rounded-[26px] bg-[#141815] px-6 py-7 sm:px-7 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-8">
            <div>
              <p className="font-display text-5xl leading-none tracking-[-0.05em] text-[#f4efe6] sm:text-6xl">
                Get in
              </p>
              <p className="font-display text-4xl italic leading-none text-[#d7d1c7] sm:text-[3.1rem]">
                Touch
              </p>
              <p className="mt-5 max-w-md text-sm leading-7 text-[#c4bdb3]">
                I&apos;m always interested in discussing research, collaborations, or opportunities. Feel free to reach out.
              </p>
              <div className="mt-6 space-y-3 text-sm text-[#ddd7cc]">
                <p>sanchitdass.maths@gmail.com</p>
                <p>Based in India</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="grid gap-3 rounded-[18px] border border-white/6 bg-[#101312] p-5 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-12 rounded-md border border-white/8 bg-white/4 px-4 text-sm text-[#ece7df] outline-none placeholder:text-[#7f7a72] focus:border-white/20"
                  placeholder="Your name"
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-12 rounded-md border border-white/8 bg-white/4 px-4 text-sm text-[#ece7df] outline-none placeholder:text-[#7f7a72] focus:border-white/20"
                  placeholder="Your email"
                />
              </div>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="min-h-32 rounded-md border border-white/8 bg-white/4 px-4 py-3 text-sm text-[#ece7df] outline-none placeholder:text-[#7f7a72] focus:border-white/20"
                placeholder="Write your message"
              />
              {messageStatus && (
                <div className={`rounded-md px-4 py-3 text-sm ${messageStatus.type === "success" ? "bg-[#2f5a3c] text-[#c5f0d6]" : "bg-[#5a3c3c] text-[#f0c5c5]"}`}>
                  {messageStatus.text}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="h-12 rounded-md bg-[#d6e4d2] text-sm font-medium text-[#0a0d0b] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
              >
                {loading ? "Sending..." : "Send correspondence"}
              </button>
            </form>
          </div>
        </section>
      </div>

      <CVModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[14px] border border-white/6 bg-black/18 px-4 py-3">
      <p className="text-[10px] uppercase tracking-[0.34em] text-[#8f8a82]">{label}</p>
      <p className="mt-2 font-display text-2xl tracking-[-0.04em] text-[#f4efe6]">{value}</p>
    </div>
  );
}

function MiniCard({
  label,
  title,
  text,
  accent,
}: {
  label: string;
  title: string;
  text: string;
  accent: "neutral" | "dark" | "green";
}) {
  const styles = {
    neutral: "bg-[#3f433d]",
    dark: "bg-[#1a1d19]",
    green: "bg-[#2f5a3c]",
  } as const;

  return (
    <article className={`rounded-[18px] border border-white/6 p-5 ${styles[accent]}`}>
      <p className="text-[10px] uppercase tracking-[0.34em] text-[#d2cdc3]/70">{label}</p>
      <h4 className="mt-4 font-display text-3xl leading-[0.95] tracking-[-0.04em] text-[#f4efe6]">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-7 text-[#ddd7cc]">{text}</p>
    </article>
  );
}

function ImageReveal() {
  const images = ["/main.jpeg", "/image2.jpeg", "/substitute.jpeg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;

    const scheduleNextToggle = () => {
      const nextDelayMs = 3000 + Math.floor(Math.random() * 3001);

      timeoutId = setTimeout(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
        scheduleNextToggle();
      }, nextDelayMs);
    };

    scheduleNextToggle();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full max-w-105 lg:max-w-110">
      <div className="relative aspect-[0.86] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d100e] shadow-[0_22px_60px_rgba(0,0,0,0.45)]">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`Portrait ${index + 1}`}
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-1200 ${
              currentImageIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            sizes="(max-width: 1024px) 90vw, 440px"
          />
        ))}
      </div>

      {/* Social Links */}
      <div className="mt-4 flex items-center justify-center gap-3">
        <a
          href="https://scholar.google.com/citations?user=imZYLccDkGIC&hl=en&oi=ao"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-[#ece7df] shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#4285F4]/40 hover:bg-[#4285F4]/10 hover:text-white active:translate-y-0"
          title="Google Scholar Profile"
        >
          <svg className="h-4 w-4 fill-current text-[#4285F4]" viewBox="0 0 24 24">
            <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
          </svg>
          <span>Google Scholar</span>
        </a>

        <a
          href="https://www.linkedin.com/in/sanchit-dass-853561248"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-[#ece7df] shadow-sm backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-white active:translate-y-0"
          title="LinkedIn Profile"
        >
          <svg className="h-4 w-4 fill-current text-[#0A66C2]" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

function CVModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-2 sm:p-4 md:p-6 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cv-modal-title"
    >
      <div
        className="relative flex h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-[20px] border border-white/12 bg-[#0d100e] shadow-[0_25px_80px_rgba(0,0,0,0.85)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between border-b border-white/8 bg-[#121613] px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#d6e4d2]">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <div>
              <h2
                id="cv-modal-title"
                className="font-display text-base font-medium tracking-[-0.02em] text-[#f4efe6] sm:text-lg"
              >
                Curriculum Vitae
              </h2>
              <p className="text-[10px] uppercase tracking-[0.25em] text-[#8f8a82]">
                Sanchit Das • IIT (ISM) Dhanbad
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Download Button */}
            <a
              href="/Curriculum_Vitae_Sanchit_Das.pdf"
              download="Curriculum_Vitae_Sanchit_Das.pdf"
              className="inline-flex items-center gap-1.5 rounded-full border border-[#c5d8c5]/30 bg-[#d6e4d2] px-3.5 py-1.5 text-xs font-semibold text-[#0a0d0b] transition hover:bg-[#e4efe1] hover:shadow-[0_0_15px_rgba(214,228,210,0.3)] active:scale-95"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              <span>Download CV</span>
            </a>

            {/* Open in new tab button */}
            <a
              href="/Curriculum_Vitae_Sanchit_Das.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-[#ece7df] transition hover:bg-white/10 hover:text-white"
              title="Open PDF in a new browser tab"
            >
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>New Tab</span>
            </a>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ece7df] transition hover:bg-white/15 hover:text-white cursor-pointer"
              aria-label="Close CV viewer"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Embedded Viewer Body */}
        <div className="relative flex-1 w-full bg-[#151916] overflow-hidden">
          <object
            data="/Curriculum_Vitae_Sanchit_Das.pdf#toolbar=1"
            type="application/pdf"
            className="w-full h-full"
          >
            <iframe
              src="/Curriculum_Vitae_Sanchit_Das.pdf#toolbar=1"
              className="w-full h-full border-0"
              title="Curriculum Vitae of Sanchit Das"
            >
              <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center text-[#d1cbc1]">
                <p className="text-base">Unable to render PDF directly in your browser.</p>
                <a
                  href="/Curriculum_Vitae_Sanchit_Das.pdf"
                  download="Curriculum_Vitae_Sanchit_Das.pdf"
                  className="rounded-full bg-[#d6e4d2] px-5 py-2.5 text-xs font-semibold text-[#0a0d0b]"
                >
                  Download Curriculum Vitae
                </a>
              </div>
            </iframe>
          </object>
        </div>
      </div>
    </div>
  );
}
