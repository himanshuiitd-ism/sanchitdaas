"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface FellowPhoto {
  src: string;
  caption: string;
  tag: string;
}

const photos: FellowPhoto[] = [
  {
    src: "/researchfellow1a.jpeg",
    caption: "At the high-performance computing facility, C-DAC Knowledge Park, Bengaluru",
    tag: "C-DAC Bengaluru Facility",
  },
  {
    src: "/researchfellow1b.jpeg",
    caption: "Research workstation setup with mathematical formulations and eigenvalue computational code",
    tag: "Workstation & Computational Research",
  },
  {
    src: "/researchfellow1c.jpeg",
    caption: "Main entrance gate and campus of Centre for Development of Advanced Computing (C-DAC), Bengaluru",
    tag: "C-DAC Campus",
  },
];

export default function ResearchFellowPage() {
  const [scrollY, setScrollY] = useState(0);
  const [lightboxPhoto, setLightboxPhoto] = useState<FellowPhoto | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const peelProgress = Math.min(Math.max(scrollY / 600, 0), 1);
  const heroScale = Math.max(1 - peelProgress * 0.08, 0.92);
  const heroRotateX = peelProgress * 15;
  const heroTranslateY = scrollY * 0.35;

  return (
    <div className="min-h-screen bg-white text-[#1a1a1a] selection:bg-[#222] selection:text-white">
      {/* Fixed Navigation Bar */}
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 sm:px-10 backdrop-blur-md bg-black/40 border-b border-white/10 transition-colors">
        <Link
          href="/"
          className="group flex items-center gap-2 text-white font-medium text-sm tracking-wide"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-transform group-hover:-translate-x-1">
            ←
          </span>
          <span className="font-display text-lg tracking-[-0.02em]">Sanchit Das</span>
        </Link>

        <nav className="flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-white/80">
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <Link href="/conferences" className="transition-colors hover:text-white">
            Conferences
          </Link>
          <span className="text-white border-b border-white/60 pb-0.5">
            Research Fellow
          </span>
          <Link href="/hydrodynamic-stability" className="transition-colors hover:text-white">
            Hydrodynamic Stability
          </Link>
          <Link href="/beyond-research" className="transition-colors hover:text-white">
            Beyond Research
          </Link>
        </nav>
      </header>

      {/* Hero Cover Section - Full Screen with 3D peel/lift-off scroll effect */}
      <div className="relative h-screen w-full overflow-hidden bg-black [perspective:1200px]">
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale}) rotateX(${heroRotateX}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          {/* Background Image: C-DAC Bengaluru Campus */}
          <Image
            src="/researchfellow1c.jpeg"
            alt="C-DAC Bengaluru Campus"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />

          {/* Elegant Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 pointer-events-none" />

          {/* Peel Shadow underneath bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"
            style={{
              opacity: peelProgress,
            }}
          />

          {/* Centered Bold Title Over the Cover */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 text-xs uppercase tracking-[0.35em] text-white/90 mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
              <span>National Fellowship</span>
              <span>•</span>
              <span>IASc – INSA – NASI</span>
            </div>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] max-w-5xl">
              Science Academies’ Summer Research Fellowship
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80 font-light tracking-wide drop-shadow-md">
              Centre for Development of Advanced Computing (C-DAC), Bengaluru • June–July 2023
            </p>
            <div className="mt-8 flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.3em]">
              <span>Scroll to read fellow chronicle</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* White Page Content Section */}
      <main id="fellowship-details" className="relative z-30 bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-5xl">
          {/* Header Metadata */}
          <div className="border-b border-neutral-200 pb-12 mb-14">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full bg-neutral-950 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                Fellowship Milestone
              </span>
              <span className="rounded-full bg-neutral-100 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700">
                IASc – INSA – NASI
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3.5 py-1 text-xs font-semibold text-emerald-800">
                <span>✦</span>
                <span>Summer 2023</span>
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-neutral-950 leading-tight">
              Science Academies’ Summer Research Fellowship Programme
            </h2>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-2xl bg-neutral-50 border border-neutral-200/80 p-5 text-sm">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Awarding Academies</p>
                <p className="font-semibold text-neutral-900 mt-1">IASc – INSA – NASI</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Host Institute</p>
                <p className="font-semibold text-neutral-900 mt-1">C-DAC, Bengaluru</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-neutral-400 font-mono">Research Mentor</p>
                <p className="font-semibold text-neutral-900 mt-1">Dr. S. Janakiraman</p>
              </div>
            </div>
          </div>

          {/* Section 1: Side-by-Side Narrative + Photo */}
          <section className="grid gap-10 lg:grid-cols-12 items-center mb-16">
            <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base">
              <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                Origins & Context
              </div>
              <p className="leading-7 font-normal text-justify">
                In the summer of 2023, I was selected for the <strong>Science Academies’ Summer Research Fellowship Programme</strong>, jointly supported by the <strong>Indian Academy of Sciences (IASc)</strong>, <strong>Indian National Science Academy (INSA)</strong>, and <strong>The National Academy of Sciences, India (NASI)</strong>.
              </p>
              <p className="leading-7 font-normal text-justify">
                This was one of my earliest opportunities to experience research beyond regular postgraduate coursework and played an important role in shaping my approach towards mathematical research.
              </p>
              <p className="leading-7 font-normal text-justify">
                During the two-month fellowship, I worked under the guidance of <strong>Dr. S. Janakiraman, Centre for Development of Advanced Computing (C-DAC), Bengaluru</strong>, on the project entitled <em>“Development of Laplacian Eigenfunctions through Integral Operator Method.”</em>
              </p>
            </div>

            <div className="lg:col-span-5">
              <div
                onClick={() => setLightboxPhoto(photos[0])}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={photos[0].src}
                    alt={photos[0].caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    {photos[0].tag}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to zoom 🔍
                  </span>
                </div>
                <div className="p-3.5 bg-white border-t border-neutral-100">
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {photos[0].caption}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: In-the-Middle Project Spotlight + Workstation Photo */}
          <section className="my-14 rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-300">
                  Fellowship Research Project
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug text-white">
                  “Development of Laplacian Eigenfunctions through Integral Operator Method”
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed text-justify">
                  The project introduced me to a different branch of applied and computational mathematics, centred on eigenvalue problems, Laplacian operators, and integral-operator techniques.
                </p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-neutral-300">
                    Integral Operator Method
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-neutral-300">
                    Laplacian Eigenfunctions
                  </span>
                  <span className="rounded-full bg-white/5 border border-white/10 px-3 py-1 text-neutral-300">
                    Applied Eigenvalue Problems
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() => setLightboxPhoto(photos[1])}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/15 bg-neutral-800 shadow-md hover:border-white/30 transition-all"
                >
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={photos[1].src}
                      alt={photos[1].caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="400px"
                    />
                    <span className="absolute top-2.5 left-2.5 rounded-full bg-black/70 backdrop-blur-md px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                      {photos[1].tag}
                    </span>
                  </div>
                  <div className="p-3 bg-neutral-950">
                    <p className="text-[11px] text-neutral-400">
                      {photos[1].caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Side-by-Side Learnings + Campus Photo */}
          <section className="grid gap-10 lg:grid-cols-12 items-start mb-16">
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed text-justify">
                <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                  Transition to Research Mindset
                </div>
                <p className="leading-7 font-normal">
                  More importantly, the fellowship gave me first-hand experience of approaching an open mathematical problem, studying research literature independently, discussing ideas with an experienced scientist, and developing a problem systematically rather than simply solving prescribed exercises.
                </p>
                <p className="leading-7 font-normal">
                  The fellowship became an important early milestone in my transition from a student of mathematics to a researcher and contributed significantly to the research mindset that I later carried into my work in continuum mechanics and elastic-wave propagation.
                </p>
              </div>

              {/* Key Takeaways Card */}
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                  Key Takeaways
                </span>
                <h4 className="mt-1 font-display text-xl font-bold text-neutral-900">
                  Impact & Reflections
                </h4>
                <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
                    <span>Selected under prestigious national fellowship sponsored by IASc–INSA–NASI</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
                    <span>Direct mentorship under Dr. S. Janakiraman at C-DAC Bengaluru</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
                    <span>Independent literature analysis and mathematical problem formulation</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
                    <span>Established analytical rigour and mindset for doctoral wave propagation research</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div
                onClick={() => setLightboxPhoto(photos[2])}
                className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={photos[2].src}
                    alt={photos[2].caption}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 42vw"
                  />
                  <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                    {photos[2].tag}
                  </span>
                  <span className="absolute bottom-3 right-3 rounded-full bg-white/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                    Click to zoom 🔍
                  </span>
                </div>
                <div className="p-3.5 bg-white border-t border-neutral-100">
                  <p className="text-xs text-neutral-600 line-clamp-2">
                    {photos[2].caption}
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                <p className="font-semibold text-neutral-900 mb-1">Host Organization</p>
                <p>Centre for Development of Advanced Computing (C-DAC), Ministry of Electronics & IT, Knowledge Park, Bengaluru.</p>
              </div>
            </div>
          </section>

          {/* Page Footer Navigation */}
          <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 Sanchit Das • Academic Portfolio</p>
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                <span>← Back to Home</span>
              </Link>
              <Link
                href="/conferences"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                <span>Conferences →</span>
              </Link>
              <Link
                href="/hydrodynamic-stability"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                <span>Hydrodynamic Stability →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-950">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                {lightboxPhoto.tag}
              </p>
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>

            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full bg-black">
              <Image
                src={lightboxPhoto.src}
                alt={lightboxPhoto.caption}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-4 bg-neutral-950 border-t border-white/10 text-center">
              <p className="text-sm text-neutral-300">{lightboxPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
