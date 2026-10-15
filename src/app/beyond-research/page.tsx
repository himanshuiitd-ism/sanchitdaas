"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type BookKey = "constantia" | "emotions";

interface BookData {
  id: BookKey;
  number: string;
  badge: string;
  title: string;
  subtitle: string;
  author: string;
  summary: string[];
  links: {
    platform: "Amazon" | "Flipkart" | "Notion Press";
    url: string;
    description: string;
    color: string;
  }[];
}

const books: Record<BookKey, BookData> = {
  constantia: {
    id: "constantia",
    number: "Book 01",
    badge: "Historical Fiction • Lucknow, 1857",
    title: "The Shadow of Constantia",
    subtitle: "A Boy's War in 1857",
    author: "Sanchit Dass",
    summary: [
      "Lucknow, 1857. As rebellion engulfs the city, fifteen year old Jordan Nathanael is forced from the familiar halls of La Martinière College into the besieged Residency. But a mysterious brass key, a blood-stained fragment of Persian writing and a stranger hidden behind borrowed identities draw him into a secret buried beneath Constantia and the old city.",
      "Guided by logic, mechanics and an almost dangerous curiosity, Jordan begins to uncover a mystery of hidden chambers, divided loyalties and forgotten truths—only to learn that people cannot be understood like machines, and that some answers come at a price.",
      "As war closes in around him, the line between friend and enemy becomes increasingly difficult to see. What begins as a search for answers slowly becomes a struggle to understand truth, trust, faith and the limits of certainty.",
    ],
    links: [
      {
        platform: "Flipkart",
        url: "https://www.flipkart.com/shadow-constantia-boy-s-war-1857/p/itmeb1013d48062c?pid=9798908002035&lid=LSTBOK9798908002035VVWJJL&marketplace=FLIPKART&q=the+shadow+of+constantia+by+sanchit+dass&store=bks&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=3b916637-7ec5-4e17-8ed5-b2f8014412e2.9798908002035.SEARCH&ppt=sp&ppn=sp&ssid=w0o57dpjl9favb401792062529472&qH=bea218d887c9dcef&ov_redirect=true&ov_redirect=true",
        description: "Official store listing with fast delivery",
        color: "hover:border-blue-500 hover:bg-blue-50/50 text-blue-600",
      },
      {
        platform: "Amazon",
        url: "https://www.amazon.in/Shadow-Constantia-Boys-War-1857/dp/B0HMC1Q6PT/ref=tmm_pap_swatch_0?_encoding=UTF8&dib_tag=se&dib=eyJ2IjoiMSJ9.osmn9wrD4IrqCXjl8Z0vfA.0GT03HL4cN2Z_bnhTFxxto80BP0jy4WaKBQhLFVS3nM&qid=1792063005&sr=8-1",
        description: "Paperback & digital editions available",
        color: "hover:border-amber-500 hover:bg-amber-50/50 text-amber-600",
      },
      {
        platform: "Notion Press",
        url: "https://direct.notionpress.com/in/read/the-shadow-of-constantia",
        description: "Direct publisher bookstore edition",
        color: "hover:border-emerald-500 hover:bg-emerald-50/50 text-emerald-600",
      },
    ],
  },
  emotions: {
    id: "emotions",
    number: "Book 02",
    badge: "Poetry Collection • Reflections",
    title: "The Strings of Emotions",
    subtitle: "An Anthology of Love",
    author: "Sanchit Dass",
    summary: [
      "\"The Strings of Emotions\" is a captivating collection of ten heartfelt poems that takes readers on an enchanting journey through the depths of human emotions. In this beautifully crafted book, each poem weaves a delicate tapestry of words, pulling at the strings of the reader's heart and evoking a wide range of feelings.",
      "With poetic mastery, the author explores themes such as love, joy, sadness, longing, and introspection, unraveling the intricate nuances of human experience. Through lyrical verses and vivid imagery, \"The Strings of Emotions\" delves into the depths of the human soul, painting vivid portraits of raw emotions and capturing the essence of the human spirit.",
      "\"The Strings of Emotions\" is a book that resonates with readers, immersing them in a world of poetic beauty and heartfelt expressions. It serves as a testament to the power of language and the ability of poetry to touch the very core of our being. Whether it's the gentle cadence of love's whispers or the haunting echoes of melancholy, these poems offer solace, inspiration, and a profound understanding of the human experience.",
      "This collection is a true gem for poetry lovers and those seeking solace in the written word. It captures the essence of emotions, bringing them to life on the page and leaving an indelible mark on the reader's soul. \"The Strings of Emotions\" is a testament to the power of poetry and a testament to the author's pursuit for capturing the beauty and complexity of our innermost feelings.",
    ],
    links: [
      {
        platform: "Amazon",
        url: "https://www.amazon.in/Strings-Emotions-Anthology-Love-ebook/dp/B0C9GS5W7Y/ref=sr_1_7?crid=19B0RPHAC21L6&dib=eyJ2IjoiMSJ9.9oh-HN5Vi8YgP25cMnoBPMot_mLVPK1AuHbdgZmv7IgE-lTHShZAqAewLUlNaJn6eobsKkoPiuPUSrBQRpJllUTd38nDBmD-qLcNMyegj_-xpzBEzNBJv6IToaMdBaGwcNMNKqwM72xfB8xFzwECke5fyik5yDaJ8jQ6GAHZYVDCT5WVhuDdocKaGyA5jC8NOmUlbhhxnmZeLPUbJxyq7zarQBusdhB5m5fJgjF5Ymc.jmLB6_awoigQ4ZWfkOO90TwWIORG4RVQCkF1OxuenBU&dib_tag=se&keywords=The+strings+of+emotions&qid=1792063213&sprefix=the+strings+of+emot%2Caps%2C1048&sr=8-7",
        description: "Paperback & Kindle editions on Amazon",
        color: "hover:border-amber-500 hover:bg-amber-50/50 text-amber-600",
      },
      {
        platform: "Notion Press",
        url: "https://notionpress.com/in/read/the-strings-of-emotions?srsltid=AU7gw4VyrkkqWOGvTwdzaO-tVx1A2POeEKazgw2_3p14SVdA7cAfP2gj",
        description: "Author bookstore & publisher direct",
        color: "hover:border-emerald-500 hover:bg-emerald-50/50 text-emerald-600",
      },
    ],
  },
};

export default function BeyondResearch() {
  const [scrollY, setScrollY] = useState(0);
  const [activeBookKey, setActiveBookKey] = useState<BookKey>("constantia");

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const peelProgress = Math.min(Math.max(scrollY / 600, 0), 1);
  // const heroOpacity = Math.max(1 - scrollY / 700, 0);
  const heroOpacity =1;
  const heroScale = Math.max(1 - peelProgress * 0.08, 0.92);
  const heroRotateX = peelProgress * 15;
  const heroTranslateY = scrollY * 0.35;

  const currentBook = books[activeBookKey];

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
          {/* <Link href="/#research" className="transition-colors hover:text-white">
            Research
          </Link> */}
          <span className="text-white border-b border-white/60 pb-0.5">
            Beyond Research
          </span>
        </nav>
      </header>

      {/* Hero Cover Section - Full Screen with 3D peel/lift-off ground scroll effect */}
      <div className="relative h-screen w-full overflow-hidden bg-black [perspective:1200px]">
        <div
          className="absolute inset-0 w-full h-full will-change-transform"
          style={{
            transform: `translate3d(0, ${heroTranslateY}px, 0) scale(${heroScale}) rotateX(${heroRotateX}deg)`,
            transformOrigin: "bottom center",
            opacity: heroOpacity,
          }}
        >
          {/* Background Image */}
          <Image
            src="/beyond_research.jpeg"
            alt="Beyond Research cover"
            fill
            priority
            className="object-cover object-center "
            sizes="100vw"
          />

          {/* Elegant Gradient Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/60 pointer-events-none" />

          {/* Peel Shadow underneath bottom */}
          <div
            className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none"
            style={{
              opacity: peelProgress,
            }}
          />

          {/* Centered Bold Title Over the Image */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <p className="text-xs uppercase tracking-[0.5em] text-white/70 mb-4 animate-in fade-in slide-in-from-bottom-3 duration-700">
              Creative Pursuits & Writings
            </p>
            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[-0.04em] text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)]">
              Beyond Research
            </h1>
            <div className="mt-8 flex items-center gap-2 text-white/70 text-xs uppercase tracking-[0.3em]">
              <span>Scroll to explore books</span>
              <span className="animate-bounce">↓</span>
            </div>
          </div>
        </div>
      </div>

      {/* White Page Content Section */}
      <main className="relative z-30 bg-white px-6 py-16 sm:px-12 md:py-24 lg:px-20">
        <div className="mx-auto max-w-4xl">
          {/* Introductory Statement */}
          <div className="border-b border-neutral-200 pb-12 mb-14">
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
              Personal Reflection
            </span>
            <p className="mt-5 font-display text-xl sm:text-2xl leading-relaxed text-neutral-800 text-justify font-normal first-letter:float-left first-letter:text-6xl first-letter:font-bold first-letter:mr-3 first-letter:font-display first-letter:leading-none first-letter:text-neutral-950">
              Welcome to Beyond Research, a space that reflects the other side of my journey. While much of my academic life is spent exploring equations, waves, and the mechanics of complex materials, writing has always offered me a different way of understanding the world. Through poetry, stories, and fiction, I explore emotions, relationships, memories, imagination, and those quieter aspects of human experience that cannot always be expressed mathematically. Over the years, this passion has grown from poems and short pieces into published books, including The Shadow of Constantia and The Strings of Emotions. This space brings together the creative pursuits that continue alongside my academic and research journey.
            </p>
          </div>

          {/* Book Switcher Header & Interactive Toggle Buttons */}
          <div id="books" className="scroll-mt-24">
            <div className="text-center sm:text-left mb-6">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-neutral-400">
                Select Published Book
              </span>
              <h2 className="mt-1 font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-neutral-900">
                Explore the Books
              </h2>
            </div>

            {/* Buttons below the image / intro for switching book content */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2 bg-neutral-100 rounded-2xl border border-neutral-200 shadow-inner mb-12">
              <button
                type="button"
                onClick={() => setActiveBookKey("constantia")}
                className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeBookKey === "constantia"
                    ? "bg-white text-neutral-950 shadow-md border border-neutral-300/80 font-medium scale-[1.01]"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase font-mono tracking-wider ${activeBookKey === "constantia" ? "text-neutral-900 font-bold" : "text-neutral-400"}`}>
                    Book 01
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold leading-snug">
                    The Shadow of Constantia
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">A Boy&apos;s War in 1857</p>
                </div>
                <span className={`text-xl transition-transform ${activeBookKey === "constantia" ? "translate-x-0 text-neutral-900 font-bold" : "-translate-x-1 opacity-0"}`}>
                  →
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveBookKey("emotions")}
                className={`relative flex items-center justify-between p-4 rounded-xl text-left transition-all cursor-pointer ${
                  activeBookKey === "emotions"
                    ? "bg-white text-neutral-950 shadow-md border border-neutral-300/80 font-medium scale-[1.01]"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
                }`}
              >
                <div>
                  <span className={`text-[10px] uppercase font-mono tracking-wider ${activeBookKey === "emotions" ? "text-neutral-900 font-bold" : "text-neutral-400"}`}>
                    Book 02
                  </span>
                  <p className="font-display text-lg sm:text-xl font-bold leading-snug">
                    The Strings of Emotions
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">An Anthology of Love</p>
                </div>
                <span className={`text-xl transition-transform ${activeBookKey === "emotions" ? "translate-x-0 text-neutral-900 font-bold" : "-translate-x-1 opacity-0"}`}>
                  →
                </span>
              </button>
            </div>

            {/* Dynamic Content Panel that switches according to selected book */}
            <article className="rounded-3xl border border-neutral-200 bg-white p-6 sm:p-10 shadow-sm transition-all animate-in fade-in duration-300">
              {/* Header badge & title */}
              <div className="border-b border-neutral-100 pb-6 mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    {currentBook.number}
                  </span>
                  <span className="text-xs uppercase tracking-widest text-neutral-400 font-medium">
                    {currentBook.badge}
                  </span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] text-neutral-950">
                  {currentBook.title}
                </h3>
                <p className="mt-1 font-display text-xl sm:text-2xl italic text-neutral-600">
                  {currentBook.subtitle}
                </p>
                <p className="mt-2 text-xs uppercase tracking-[0.25em] text-neutral-400">
                  By {currentBook.author}
                </p>
              </div>

              {/* Synopsis / About Content */}
              <div className="space-y-4 text-neutral-700 leading-relaxed text-sm sm:text-base text-justify">
                {currentBook.summary.map((paragraph, index) => (
                  <p key={index} className="leading-7">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Purchase & Distribution Store Links for this Book */}
              <div className="mt-12 pt-8 border-t border-neutral-200">
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-neutral-400">
                    Order Copies Online
                  </p>
                  <h4 className="font-display text-2xl font-bold text-neutral-900 mt-1">
                    Available on Leading Platforms
                  </h4>
                  <p className="text-xs text-neutral-500 mt-1">
                    Click any store below to read sample chapters or order your edition:
                  </p>
                </div>

                <div className={`grid gap-4 ${currentBook.links.length === 3 ? "sm:grid-cols-3" : "sm:grid-cols-2"}`}>
                  {currentBook.links.map((link) => (
                    <a
                      key={link.platform}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex flex-col justify-between rounded-2xl border border-neutral-200 p-5 transition-all hover:shadow-md hover:-translate-y-1 bg-neutral-50/60 ${link.color}`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-display text-xl font-bold text-neutral-900 group-hover:text-inherit transition-colors">
                            {link.platform}
                          </span>
                          <span className="text-xs text-neutral-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                            ↗
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 mt-1">
                          {link.description}
                        </p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-neutral-200/60 flex items-center gap-1.5 text-xs font-semibold">
                        <span>Buy on {link.platform}</span>
                        <span>→</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </article>
          </div>

          {/* Footer Back Link */}
          <div className="mt-20 pt-8 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© 2026 Sanchit Das • Beyond Research</p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white px-4 py-2 font-medium text-neutral-900 shadow-sm transition hover:bg-neutral-50 hover:shadow"
            >
              <span>← Back to Academic Portfolio</span>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
