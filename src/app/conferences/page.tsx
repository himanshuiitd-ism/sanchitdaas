"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type ConferenceKey = "indore2023" | "mams2024" | "icmams2024" | "iccs2026";

interface ConferencePhoto {
  src: string;
  caption: string;
  tag?: string;
}

interface ConferenceData {
  id: ConferenceKey;
  number: string;
  badge: string;
  title: string;
  shortVenue: string;
  venueFull: string;
  date: string;
  award?: string;
  paperTitle?: string;
  openingText: string;
  presentedText: string;
  extendedText: string;
  impactText?: string;
  keyHighlights: string[];
  photos: {
    heroSide: ConferencePhoto;
    midFeature?: ConferencePhoto;
    reflectionSide: ConferencePhoto;
    additional?: ConferencePhoto[];
  };
}

const conferences: Record<ConferenceKey, ConferenceData> = {
  indore2023: {
    id: "indore2023",
    number: "Conference 01",
    badge: "Earliest Milestone • Award Winner",
    title: "International Conference on Applied Mathematics and Mechanics",
    shortVenue: "IIT Indore",
    venueFull: "Indian Institute of Technology (IIT) Indore",
    date: "October 2023",
    award: "Best Research Paper Award",
    openingText:
      "My participation in the International Conference on Applied Mathematics and Mechanics at IIT Indore marked one of the earliest important milestones in my research journey. At the time, I was pursuing my Master’s degree in Mathematics and Computing at IIT (ISM) Dhanbad and was still at an early stage of developing my research interests in applied mathematics and mechanics.",
    presentedText:
      "I presented my research, which gave me the opportunity to discuss my work with researchers and academicians from different areas of applied mathematics and mechanics. The experience became particularly memorable when my work was recognised with the Best Research Paper Award.",
    extendedText:
      "Beyond the award, the conference was an important learning experience. It gave me my first significant exposure to presenting research before a wider academic audience and strengthened my motivation to pursue research in mathematical modelling, continuum mechanics, and wave propagation.",
    keyHighlights: [
      "Awarded Best Research Paper in Poster Category",
      "First major conference presentation during Master's degree",
      "Constructive interaction with scholars in applied math and mechanics",
      "Foundation for subsequent doctoral research in continuum wave mechanics",
    ],
    photos: {
      heroSide: {
        src: "/conference1a.jpeg",
        caption: "Delivering the research presentation at IIT Indore",
        tag: "Presentation Session",
      },
      midFeature: {
        src: "/conference1b.jpeg",
        caption: "Receiving the Best Research Paper Award from distinguished dignitaries",
        tag: "Award Ceremony",
      },
      reflectionSide: {
        src: "/conference1c.jpeg",
        caption: "Academic exchanges and discussions with researchers across India",
        tag: "Academic Exchange",
      },
    },
  },
  mams2024: {
    id: "mams2024",
    number: "Conference 02",
    badge: "National Conference • Home Institution",
    title: "National Conference on Mathematical Modelling and Simulations (MAMS 2024)",
    shortVenue: "IIT (ISM) Dhanbad",
    venueFull: "Indian Institute of Technology (ISM) Dhanbad",
    date: "June 2024",
    paperTitle:
      "Propagation Characteristics of Love Wave in a Functionally Graded Piezo-electro-magnetic Layered Composite Structure: Power Series Technique",
    openingText:
      "Participating in MAMS 2024 at IIT (ISM) Dhanbad was especially meaningful to me, as it provided an opportunity to present my research within my own academic institution while interacting with researchers working across different areas of mathematical modelling, computation, and applied mathematics.",
    presentedText:
      "At the conference, I presented my work entitled “Propagation Characteristics of Love Wave in a Functionally Graded Piezo-electro-magnetic Layered Composite Structure: Power Series Technique.” The study focused on the propagation of Love waves in a multifunctional layered medium and employed a power-series-based analytical approach to investigate the influence of material gradation and coupled electro-magnetic-mechanical behaviour on the wave characteristics.",
    extendedText:
      "This presentation represented an important stage in the development of my research on guided waves in smart and functionally graded materials. Presenting the work at IIT (ISM) Dhanbad also gave me the opportunity to discuss my ideas with faculty members, researchers, and fellow scholars in a familiar academic environment while gaining valuable feedback on the direction of my work.",
    impactText:
      "MAMS 2024 was therefore more than a conference presentation for me; it was also part of my growing involvement in the research and academic community at IIT (ISM) Dhanbad.",
    keyHighlights: [
      "Power-series analytical formulation for functionally graded piezo-electro-magnetic layers",
      "In-depth investigation of coupled electro-magnetic-mechanical wave phenomena",
      "Peer feedback from senior faculty at IIT (ISM) Dhanbad",
      "Strengthened local research synergy in mathematical modelling",
    ],
    photos: {
      heroSide: {
        src: "/conference3b.jpeg",
        caption: "Presenting analytical power series formulations of Love wave dynamics",
        tag: "Technical Session",
      },
      midFeature: {
        src: "/conference3e.jpeg",
        caption: "Certificate of research presentation and participation at MAMS 2024",
        tag: "Recognition",
      },
      reflectionSide: {
        src: "/conference3c.jpeg",
        caption: "Engaged in interactive Q&A discussion with session chair and researchers",
        tag: "Discussion & Q&A",
      },
      additional: [
        {
          src: "/conference3a.jpeg",
          caption: "Inaugural ceremony and plenary opening session at IIT (ISM) Dhanbad",
          tag: "Inaugural Session",
        },
        {
          src: "/conference3d.jpeg",
          caption: "Conference delegates, faculty convenors, and participants",
          tag: "Delegates",
        },
        {
          src: "/conference3f.jpeg",
          caption: "Group photograph of researchers and department scholars",
          tag: "Academic Community",
        },
      ],
    },
  },
  icmams2024: {
    id: "icmams2024",
    number: "Conference 03",
    badge: "International Conference • Advanced Materials",
    title: "4th International Conference on Mechanics of Advanced Materials and Structures (ICMAMS 2024)",
    shortVenue: "RIT Bengaluru",
    venueFull: "Ramaiah Institute of Technology, Bengaluru",
    date: "11–13 December 2024",
    paperTitle:
      "Analysis of Bleustein–Gulyaev and Love Waves in a Composite Structure composed of Magneto-electro-mechanical Transversely Isotropic Materials with a Sandwiched Buffer Layer",
    openingText:
      "My participation in ICMAMS 2024 at Ramaiah Institute of Technology, Bengaluru, marked another important stage in my research journey. By this time, my work had become increasingly focused on elastic wave propagation in multifunctional smart-material structures and on understanding the influence of material coupling, interfaces, and layered configurations on guided-wave behaviour.",
    presentedText:
      "At the conference, I presented my work entitled “Analysis of Bleustein–Gulyaev and Love Waves in a Composite Structure composed of Magneto-electro-mechanical Transversely Isotropic Materials with a Sandwiched Buffer Layer.” The study explored two important classes of surface and guided waves within a coupled magneto-electro-mechanical composite system and represented an important development in my work on smart layered structures.",
    extendedText:
      "The conference brought together more than 200 researchers, scientists, and professionals working in advanced materials, structural mechanics, analytical and computational methods, and related areas. It also featured distinguished researchers from institutions including Texas A&M University, Politecnico di Torino, Johns Hopkins University, IISc, Zhejiang University, and INSA Toulouse, making it a valuable opportunity to experience a genuinely international research environment.",
    impactText:
      "For me, ICMAMS 2024 was particularly valuable because it allowed me to present work closely aligned with my developing doctoral research, interact with researchers working in advanced materials and mechanics, and gain a broader perspective on how analytical modelling of smart-material waveguides fits within the larger field of mechanics of advanced materials and structures.",
    keyHighlights: [
      "Rigorous dual analysis of Bleustein–Gulyaev & Love waves with sandwiched buffer layer",
      "Networked with researchers from Texas A&M, Politecnico di Torino, Johns Hopkins, & IISc",
      "Over 200 global participants in advanced materials and structural mechanics",
      "Direct alignment with ongoing doctoral research in smart waveguides",
    ],
    photos: {
      heroSide: {
        src: "/conference2a.jpeg",
        caption: "Delivering the oral presentation at ICMAMS 2024 Bengaluru",
        tag: "Technical Session",
      },
      midFeature: {
        src: "/conference2b.jpeg",
        caption: "Detailed slide breakdown of wave modes in coupled composite media",
        tag: "Research Slide",
      },
      reflectionSide: {
        src: "/conference2c.jpeg",
        caption: "Panel interactions with international delegates and session chairs",
        tag: "International Panel",
      },
      additional: [
        {
          src: "/conference2d.jpeg",
          caption: "Technical exchange session at Ramaiah Institute of Technology",
          tag: "Exchange",
        },
        {
          src: "/conference2e.jpeg",
          caption: "Group photo with conference organizers and distinguished delegates",
          tag: "Delegates Gathering",
        },
      ],
    },
  },
  iccs2026: {
    id: "iccs2026",
    number: "Conference 04",
    badge: "Global Milestone • Cagliari, Italy",
    title: "29th International Conference on Composite Structures (ICCS29)",
    shortVenue: "University of Cagliari, Italy",
    venueFull: "Faculty of Architecture, University of Cagliari, Italy",
    date: "22–26 June 2026",
    paperTitle:
      "Liouville–Green Analysis of Love Wave Dynamics at Spring–Membrane Interfaces in Generalised Linearly Graded Piezo-Viscoelastic Structures with Flexoelectric and Semiconductor Coupling",
    openingText:
      "Participating in the 29th International Conference on Composite Structures (ICCS29) at the University of Cagliari, Italy, was an important international milestone in my research journey. By this stage of my doctoral work, my research had evolved toward increasingly complex multiphysics models involving material gradation, imperfect interfaces, viscoelasticity, flexoelectricity, and semiconductor coupling within guided-wave systems.",
    presentedText:
      "At the conference, I presented my work entitled “Liouville–Green Analysis of Love Wave Dynamics at Spring–Membrane Interfaces in Generalised Linearly Graded Piezo-Viscoelastic Structures with Flexoelectric and Semiconductor Coupling.” The study employed the Liouville–Green approach to analyse Love-wave propagation in a sophisticated smart-material configuration, bringing together several physical mechanisms that had progressively become central to my research.",
    extendedText:
      "ICCS29 provided an opportunity to present this work within a broad international community working on composite structures, advanced materials, structural mechanics, and computational modelling. Interacting with researchers from different institutions and research backgrounds gave me valuable exposure to wider developments in composite-material mechanics and helped place my own work on guided-wave elastodynamics within a broader international research context.",
    impactText:
      "Beyond the technical presentation, attending a major international conference in Cagliari, Italy, was also a memorable personal and academic experience. It represented an important step in taking my research beyond my home institution and presenting it before a wider international scientific community.",
    keyHighlights: [
      "Liouville–Green asymptotic analysis of Love wave dynamics",
      "Multiphysics model coupling viscoelasticity, flexoelectricity & semiconductors",
      "International symposium at University of Cagliari, Italy",
      "Exchange with leading authorities in composite structures & mechanics",
    ],
    photos: {
      heroSide: {
        src: "/conference4b.jpeg",
        caption: "Delivering technical research presentation on Love wave dynamics at ICCS29",
        tag: "Technical Presentation",
      },
      midFeature: {
        src: "/conference4a.jpeg",
        caption: "ICCS29 conference venue banner and welcoming hall in Cagliari, Italy",
        tag: "Conference Venue",
      },
      reflectionSide: {
        src: "/conference4c.jpeg",
        caption: "Historic campus and academic conference environment at University of Cagliari",
        tag: "Cagliari, Italy",
      },
    },
  },
};

export default function ConferencesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [activeKey, setActiveKey] = useState<ConferenceKey>("indore2023");
  const [lightboxImage, setLightboxImage] = useState<ConferencePhoto | null>(null);

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

  const current = conferences[activeKey];
  const keys: ConferenceKey[] = ["indore2023", "mams2024", "icmams2024", "iccs2026"];
  const currentIndex = keys.indexOf(activeKey);

  const goToNextConference = () => {
    const nextIndex = (currentIndex + 1) % keys.length;
    setActiveKey(keys[nextIndex]);
    const el = document.getElementById("conference-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goToPrevConference = () => {
    const prevIndex = (currentIndex - 1 + keys.length) % keys.length;
    setActiveKey(keys[prevIndex]);
    const el = document.getElementById("conference-details");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          <span className="text-white border-b border-white/60 pb-0.5">
            Conferences
          </span>
          <Link href="/beyond-research" className="transition-colors hover:text-white">
            Beyond Research
          </Link>
          <Link href="/#contact" className="transition-colors hover:text-white">
            Contact
          </Link>
        </nav>
      </header>

      {/* Hero Cover Section - Full Screen with 3D peel/lift-off scroll effect and continuous video loop */}
      <div className="relative h-screen w-full overflow-hidden bg-black [perspective:1200px]">
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale}) rotateX(${heroRotateX}deg)`,
            transformOrigin: "bottom center",
          }}
        >
          {/* Continuous Infinite Looping Video */}
          <video
            src="/conference4vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover object-center"
          />

          {/* Elegant Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 pointer-events-none" />

          {/* Peel Shadow underneath bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black via-black/50 to-transparent pointer-events-none"
            style={{
              opacity: peelProgress,
            }}
          />

          {/* Centered Bold Title Over the Video */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/75 mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
              International & National Presentations
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
              Conferences
            </h1>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/80 font-light tracking-wide drop-shadow-md">
              Four Major Venues • Best Research Paper Award • Global Academic Exchange
            </p>
            <div className="mt-8 flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.3em]">
              <span>Scroll down to explore</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* White Page Content Section */}
      <main id="conference-details" className="relative z-30 bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-5xl">
          {/* Introductory Overview */}
          <div className="border-b border-neutral-200 pb-12 mb-14">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
                  Four Major Venues • Academic Journey
                </span>
                <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
                  Conference Chronicle
                </h2>
              </div>
              <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                A detailed chronicle of paper presentations, invited interactions, and international exchanges across leading institutes including IIT Indore, IIT (ISM) Dhanbad, Ramaiah Institute of Technology Bengaluru, and the University of Cagliari, Italy.
              </p>
            </div>
          </div>

          {/* Conference Switcher Tabs */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                Select Venue / Presentation
              </span>
              <span className="text-xs text-neutral-500 font-mono">
                {currentIndex + 1} of {keys.length}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {keys.map((key, idx) => {
                const conf = conferences[key];
                const isSelected = activeKey === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveKey(key)}
                    className={`flex flex-col justify-between p-4.5 rounded-2xl border text-left transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-neutral-950 text-white border-neutral-950 shadow-xl scale-[1.02]"
                        : "bg-neutral-50/70 text-neutral-700 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-100/90"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? "text-neutral-400" : "text-neutral-500"}`}>
                          0{idx + 1}
                        </span>
                        <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${isSelected ? "bg-white/15 text-white" : "bg-neutral-200/80 text-neutral-700"}`}>
                          {conf.date.includes("2023") ? "2023" : conf.date.includes("2024") ? "2024" : "2026"}
                        </span>
                      </div>
                      <p className={`font-display text-lg font-bold leading-snug line-clamp-1 ${isSelected ? "text-white" : "text-neutral-900"}`}>
                        {conf.shortVenue}
                      </p>
                    </div>
                    <p className={`mt-3 text-xs line-clamp-1 ${isSelected ? "text-neutral-300" : "text-neutral-500"}`}>
                      {conf.title}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Conference Editorial Display */}
          <article className="space-y-12 animate-in fade-in duration-300">
            {/* Conference Top Hero Meta */}
            <div className="border-b border-neutral-200 pb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="rounded-full bg-neutral-950 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                  {current.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-neutral-500 font-medium">
                  {current.badge}
                </span>
                {current.award && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-200 px-3.5 py-1 text-xs font-semibold text-amber-800">
                    <span>★</span>
                    <span>{current.award}</span>
                  </span>
                )}
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-neutral-950 leading-tight">
                {current.title}
              </h1>

              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-600">
                <div className="flex items-center gap-2">
                  <span className="text-neutral-400">Venue:</span>
                  <span className="font-semibold text-neutral-900">{current.venueFull}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-neutral-400">Timeline:</span>
                  <span className="font-semibold text-neutral-900">{current.date}</span>
                </div>
              </div>
            </div>

            {/* SECTION 1: SIDE-BY-SIDE (Narrative Text + Photo) */}
            <section className="grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7 space-y-5 text-neutral-700 leading-relaxed text-sm sm:text-base">
                <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                  Context & Background
                </div>
                <p className="leading-7 font-normal text-justify">
                  {current.openingText}
                </p>
                <p className="leading-7 font-normal text-justify">
                  {current.presentedText}
                </p>
              </div>

              <div className="lg:col-span-5">
                <div
                  onClick={() => setLightboxImage(current.photos.heroSide)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={current.photos.heroSide.src}
                      alt={current.photos.heroSide.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    {current.photos.heroSide.tag && (
                      <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                        {current.photos.heroSide.tag}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand 🔍
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border-t border-neutral-100">
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {current.photos.heroSide.caption}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION 2: MIDDLE OF THE TEXT - PAPER SPOTLIGHT & MID-FEATURE PHOTO */}
            {current.paperTitle ? (
              <section className="my-8 rounded-3xl bg-neutral-900 text-white p-6 sm:p-10 shadow-lg">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                  <div className="lg:max-w-xl">
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.25em] font-semibold text-neutral-300 mb-3">
                      Presented Paper Title
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-snug text-white">
                      “{current.paperTitle}”
                    </h3>
                    <p className="mt-3 text-xs text-neutral-400 leading-relaxed">
                      Rigorous analytical and semi-analytical mathematical formulation addressing coupled electro-magnetic-mechanical wave dynamics and interface effects in advanced multifunctional structures.
                    </p>
                  </div>

                  {current.photos.midFeature && (
                    <div
                      onClick={() => setLightboxImage(current.photos.midFeature!)}
                      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-neutral-800 shrink-0 lg:w-72 shadow-md hover:border-white/30 transition-all"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden">
                        <Image
                          src={current.photos.midFeature.src}
                          alt={current.photos.midFeature.caption}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="300px"
                        />
                        {current.photos.midFeature.tag && (
                          <span className="absolute top-2.5 left-2.5 rounded-full bg-black/70 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white">
                            {current.photos.midFeature.tag}
                          </span>
                        )}
                      </div>
                      <div className="p-3 bg-neutral-950">
                        <p className="text-[11px] text-neutral-400 line-clamp-2">
                          {current.photos.midFeature.caption}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            ) : (
              /* If no paper title (Indore 2023), render Mid Feature Photo in the middle of text with Award spotlight */
              current.photos.midFeature && (
                <section className="my-8 rounded-3xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8">
                  <div className="grid gap-6 lg:grid-cols-12 items-center">
                    <div className="lg:col-span-7 space-y-3">
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-300 px-3 py-1 text-xs font-semibold text-amber-900">
                        <span>🏆</span>
                        <span>Award Recognition</span>
                      </div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold text-neutral-950">
                        Best Research Paper Award
                      </h3>
                      <p className="text-sm text-neutral-700 leading-relaxed text-justify">
                        {current.presentedText}
                      </p>
                    </div>

                    <div className="lg:col-span-5">
                      <div
                        onClick={() => setLightboxImage(current.photos.midFeature!)}
                        className="group relative cursor-pointer overflow-hidden rounded-2xl border border-amber-200 bg-white shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
                          <Image
                            src={current.photos.midFeature.src}
                            alt={current.photos.midFeature.caption}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="400px"
                          />
                          <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                            {current.photos.midFeature.tag}
                          </span>
                        </div>
                        <div className="p-3 bg-white border-t border-amber-100">
                          <p className="text-xs text-neutral-600 line-clamp-2">
                            {current.photos.midFeature.caption}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              )
            )}

            {/* SECTION 3: SIDE-BY-SIDE (Reflection & Highlights + Photo) */}
            <section className="grid gap-10 lg:grid-cols-12 items-start">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-4 text-neutral-700 text-sm sm:text-base leading-relaxed text-justify">
                  <div className="inline-block rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-neutral-700 mb-1">
                    Significance & Learnings
                  </div>
                  <p className="leading-7 font-normal">
                    {current.extendedText}
                  </p>
                  {current.impactText && (
                    <p className="leading-7 font-normal">
                      {current.impactText}
                    </p>
                  )}
                </div>

                {/* Key Highlights Card */}
                <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Key Highlights
                  </span>
                  <h4 className="mt-1 font-display text-xl font-bold text-neutral-900">
                    Conference Takeaways
                  </h4>
                  <ul className="mt-4 space-y-2.5 text-sm text-neutral-600">
                    {current.keyHighlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-neutral-950 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <div
                  onClick={() => setLightboxImage(current.photos.reflectionSide)}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-200/90 bg-neutral-50 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                    <Image
                      src={current.photos.reflectionSide.src}
                      alt={current.photos.reflectionSide.caption}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 42vw"
                    />
                    {current.photos.reflectionSide.tag && (
                      <span className="absolute top-3 left-3 rounded-full bg-black/60 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
                        {current.photos.reflectionSide.tag}
                      </span>
                    )}
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-medium text-neutral-800 opacity-0 group-hover:opacity-100 transition-opacity">
                      Click to expand 🔍
                    </span>
                  </div>
                  <div className="p-3.5 bg-white border-t border-neutral-100">
                    <p className="text-xs text-neutral-600 line-clamp-2">
                      {current.photos.reflectionSide.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600">
                  <p className="font-semibold text-neutral-900 mb-1">Interactive Gallery</p>
                  <p>All conference photographs are presented in high resolution. Click on any image to view in detail.</p>
                </div>
              </div>
            </section>

            {/* SECTION 4: ADDITIONAL PHOTOGRAPHS (If Available) */}
            {current.photos.additional && current.photos.additional.length > 0 && (
              <section className="border-t border-neutral-200 pt-10">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-neutral-400">
                      Additional Moments
                    </span>
                    <h3 className="font-display text-2xl font-bold text-neutral-900 mt-1">
                      Conference Gallery Strip
                    </h3>
                  </div>
                  <span className="text-xs text-neutral-500">
                    {current.photos.additional.length} more photographs
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {current.photos.additional.map((photo, idx) => (
                    <div
                      key={idx}
                      onClick={() => setLightboxImage(photo)}
                      className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shadow-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                    >
                      <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-100">
                        <Image
                          src={photo.src}
                          alt={photo.caption}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {photo.tag && (
                          <span className="absolute top-2.5 left-2.5 rounded-full bg-black/60 backdrop-blur-md px-2 py-0.5 text-[9px] font-medium uppercase tracking-wider text-white">
                            {photo.tag}
                          </span>
                        )}
                      </div>
                      <div className="p-3 bg-white border-t border-neutral-100">
                        <p className="text-xs text-neutral-600 line-clamp-2">
                          {photo.caption}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Bottom Conference Switcher Footer */}
            <div className="mt-14 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
              <button
                type="button"
                onClick={goToPrevConference}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50 hover:shadow cursor-pointer"
              >
                <span>← Previous Conference</span>
              </button>

              <div className="flex items-center gap-2">
                {keys.map((k, i) => (
                  <button
                    key={k}
                    type="button"
                    onClick={() => {
                      setActiveKey(k);
                      const el = document.getElementById("conference-details");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      activeKey === k ? "w-8 bg-neutral-900" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                    }`}
                    aria-label={`Jump to conference ${i + 1}`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={goToNextConference}
                className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 py-2.5 text-xs font-semibold text-neutral-800 shadow-sm transition hover:bg-neutral-50 hover:shadow cursor-pointer"
              >
                <span>Next Conference →</span>
              </button>
            </div>
          </article>

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
                href="/beyond-research"
                className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50"
              >
                <span>Beyond Research →</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Lightbox Modal for Full Resolution Photo Inspection */}
      {lightboxImage && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setLightboxImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] bg-neutral-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-neutral-950">
              <p className="text-xs uppercase tracking-widest text-neutral-400 font-mono">
                {lightboxImage.tag || "Conference Photograph"}
              </p>
              <button
                type="button"
                onClick={() => setLightboxImage(null)}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                aria-label="Close photo preview"
              >
                ✕
              </button>
            </div>

            <div className="relative flex-1 min-h-[350px] sm:min-h-[500px] w-full bg-black">
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.caption}
                fill
                className="object-contain p-2"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>

            <div className="p-4 bg-neutral-950 border-t border-white/10 text-center">
              <p className="text-sm text-neutral-300">{lightboxImage.caption}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
