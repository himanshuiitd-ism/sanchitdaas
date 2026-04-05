"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type SectionItem = {
  label: string;
  title: string;
  text: string;
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
    text: "Bachelors of Science from Lucknow Christian Degree College with coursework in Mathematics, Computer Science, and Statistics.",
  },
  {
    label: "Research Scholar",
    title: "Department of Mathematics and Computing",
    text: "Senior Research Scholar at IIT Dhanbad specializing in nonlocal effects, piezoelectric-poroelastic materials, and applied wave mechanics.",
  },
];


export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

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
            <a href="#research" className="transition-colors hover:text-[#ece7df]">
              Research
            </a>
            <a href="#publications" className="transition-colors hover:text-[#ece7df]">
              Publications
            </a>
            <a href="#contact" className="transition-colors hover:text-[#ece7df]">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-full border border-[#c5d8c5]/20 bg-[#d6e4d2] px-4 py-2 text-xs font-medium text-[#0a0d0b] transition-transform hover:-translate-y-0.5"
          >
            Curriculum Vitae
          </a>
        </header>

        <section className="grid gap-8 px-6 py-7 sm:px-8 sm:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:px-10 lg:py-12">
          <div className="flex flex-col justify-between gap-8 lg:min-h-105 lg:py-4">
            <div className="max-w-xl space-y-5">
              <p className="text-[10px] uppercase tracking-[0.46em] text-[#9e998f]">
                Personal portfolio
              </p>
              <h1 className="max-w-xl font-display text-6xl leading-[0.9] tracking-[-0.06em] text-[#f4efe6] sm:text-7xl lg:text-[5.7rem]">
                Sanchit <span className="italic">Das</span>
              </h1>
              <p className="max-w-md text-sm leading-7 text-[#bdb6ad] sm:text-[0.95rem]">
                Senior Research Scholar at the Department of Mathematics and Computing, Indian Institute of Technology (IIT) Dhanbad. Focused on advanced mathematical modeling and wave propagation analysis in complex material structures.
              </p>
            </div>

            <div className="max-w-sm space-y-3 text-sm leading-6 text-[#d1cbc1]">
              <p className="uppercase tracking-[0.34em] text-[#88857e]">Overview</p>
              <p>
                Senior Research Scholar at IIT Dhanbad with expertise in wave propagation, nonlocal effects, and advanced material mechanics. Published research in Q1 and Q2 journals with focus on piezoelectric-poroelastic systems.
              </p>
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
                Selected
              </p>
              <p className="font-display text-3xl italic leading-none text-[#d7d1c7] sm:text-[2.3rem]">
                Research
              </p>
            </div>
            <a href="#contact" className="text-[10px] uppercase tracking-[0.34em] text-[#a7a194] transition-colors hover:text-[#ece7df]">
              View full biography
            </a>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">Peer reviewed - 2026</p>
              <h3 className="mt-3 max-w-2xl font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[#f4efe6] sm:text-[3rem]">
                Nonlocal Love Wave Propagation in Piezoelectric–Poroelastic Layered Media
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c4bdb3]">
                Accepted in International Journal of Numerical Methods for Heat & Fluid Flow. Investigates spring and membrane interface models with diverse surface exposures using power series technique methodology.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <Stat label="Impact Factor" value="5.1 (Q1)" />
                <Stat label="Status" value="Accepted" />
              </div>
            </article>

            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">Featured visual</p>
              <div className="mt-4 overflow-hidden rounded-[14px] border border-white/6 bg-black/30">
                <Image src="/substitute.jpeg" alt="Substitute image" width={700} height={500} className="h-56 w-full object-cover" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[#c4bdb3]">
                The secondary image stays visible in the lower panel so users can see both assets in the composition.
              </p>
            </article>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <MiniCard label="Award" title="Best Research Paper" text="Best Research Paper Award in Poster Category at IIT Indore (2023)." accent="neutral" />
            <MiniCard label="Conferences" title="Three Major Venues" text="Presented at IIT Indore, IIT Dhanbad, RIT Bangalore with international collaborators." accent="dark" />
            <MiniCard label="Workshop" title="Hydrodynamic Stability" text="Completed GIAN Course on Introduction to Hydrodynamic Stability (2025)." accent="green" />
            <MiniCard label="Research Fellow" title="IAS-INSA-NASI" text="Summer Research Fellow at Indian Academy of Sciences (2023)." accent="neutral" />
          </div>
        </section>

        <section id="publications" className="border-t border-white/6 px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="font-display text-4xl leading-none tracking-[-0.05em] text-[#f4efe6] sm:text-5xl">
                Selected
              </p>
              <p className="font-display text-3xl italic leading-none text-[#d7d1c7] sm:text-[2.3rem]">
                Publications
              </p>
            </div>
            <span className="hidden text-[10px] uppercase tracking-[0.34em] text-[#8f8a82] sm:block">Curate from PDF</span>
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">Highlighted work</p>
              <h3 className="mt-3 font-display text-4xl leading-[0.95] tracking-[-0.05em] text-[#f4efe6] sm:text-[3rem]">
                Non-locality Effects on Bluestein-Gulyaev Wave Propagation
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#c4bdb3]">
                Accepted in Physica Scripta (Q2). Analyzes spring and membrane models in piezo-poroelastic layered structures using advanced mathematical techniques.
              </p>
            </article>

            <article className="rounded-[18px] border border-white/6 bg-[#181b18] p-5 sm:p-6">
              <p className="text-[10px] uppercase tracking-[0.34em] text-[#928d84]">Preview tile</p>
              <div className="mt-4 overflow-hidden rounded-[14px] border border-white/6 bg-black/30">
                <Image src="/main.jpeg" alt="Main image" width={700} height={500} className="h-56 w-full object-cover" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[#c4bdb3]">
                The main image is used prominently on the screen and remains tied to the interactive reveal at the top.
              </p>
            </article>
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
                <p>+91 7985654596</p>
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
  const [reveal, setReveal] = useState(68);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const clamp = useMemo(() => (value: number) => Math.min(100, Math.max(0, value)), []);

  const updateRevealFromPointer = useCallback(
    (clientX: number) => {
      if (!trackRef.current) {
        return;
      }

      const bounds = trackRef.current.getBoundingClientRect();
      const position = ((clientX - bounds.left) / bounds.width) * 100;
      setReveal(clamp(position));
    },
    [clamp],
  );

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (!isDragging) {
        return;
      }

      updateRevealFromPointer(event.clientX);
    };

    const stopDragging = () => {
      setIsDragging(false);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", stopDragging);
    window.addEventListener("pointercancel", stopDragging);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", stopDragging);
      window.removeEventListener("pointercancel", stopDragging);
    };
  }, [clamp, isDragging, updateRevealFromPointer]);

  return (
    <div className="relative mx-auto w-full max-w-105 lg:max-w-110">
      <div
        ref={trackRef}
        className="relative aspect-[0.86] overflow-hidden rounded-[22px] border border-white/10 bg-[#0d100e] shadow-[0_22px_60px_rgba(0,0,0,0.45)] touch-none"
        onPointerDown={(event) => {
          setIsDragging(true);
          updateRevealFromPointer(event.clientX);
        }}
      >
        <Image
          src="/substitute.jpeg"
          alt="Secondary portrait"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 90vw, 440px"
        />
        <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${reveal}%` }}>
          <Image
            src="/main.jpeg"
            alt="Primary portrait"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 90vw, 440px"
          />
        </div>

        <div className="absolute inset-y-0" style={{ left: `${reveal}%`, width: 1 }}>
          <div className="absolute inset-y-0 left-0 w-px bg-[#d7e4d6]/90 shadow-[0_0_18px_rgba(214,228,214,0.8)]" />
          <button
            type="button"
            aria-label="Drag to reveal the secondary image"
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7e4d6]/30 bg-[#0d100e]/90 px-3 py-3 text-[10px] uppercase tracking-[0.34em] text-[#d7e4d6] shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
          >
            Drag
          </button>
        </div>

        <div className="absolute inset-x-4 bottom-4 rounded-full border border-white/10 bg-black/55 px-4 py-2 text-[10px] uppercase tracking-[0.36em] text-[#cdc6bb] backdrop-blur-md">
          Main image on the screen - slide to view the secondary image
        </div>
      </div>
    </div>
  );
}
