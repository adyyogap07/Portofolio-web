"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const roles = ["Web Developer", "Frontend Engineer", "UI Enthusiast", "Freelancer"]

function useTypewriter(words) {
  const [text, setText] = useState("")
  const iRef = useRef(0)
  const cRef = useRef(0)
  const delRef = useRef(false)

  useEffect(() => {
    let timeout
    const tick = () => {
      const word = words[iRef.current % words.length]
      if (!delRef.current) {
        cRef.current++
        setText(word.slice(0, cRef.current))
        if (cRef.current === word.length) {
          delRef.current = true
          timeout = setTimeout(tick, 1400)
          return
        }
        timeout = setTimeout(tick, 90)
      } else {
        cRef.current--
        setText(word.slice(0, cRef.current))
        if (cRef.current === 0) {
          delRef.current = false
          iRef.current++
          timeout = setTimeout(tick, 260)
          return
        }
        timeout = setTimeout(tick, 45)
      }
    }
    timeout = setTimeout(tick, 400)
    return () => clearTimeout(timeout)
  }, [words])

  return text
}

export function Hero() {
  const typed = useTypewriter(roles)

  return (
    <section id="beranda" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      {/* ambient glows */}
      <div className="pointer-events-none absolute -left-32 top-24 h-96 w-96 rounded-full bg-violet/20 blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-48 h-80 w-80 rounded-full bg-violet-soft/15 blur-[120px]" />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[minmax(0,1fr)_1.3fr] md:gap-14">
        {/* Avatar */}
        <div className="animate-rise order-1 flex justify-center md:order-none">
          <div className="relative">
            <div className="glow-orb absolute inset-0 -z-10 scale-110 opacity-70" aria-hidden="true" />
            <div className="animate-float-slow relative h-64 w-64 overflow-hidden rounded-full ring-1 ring-violet/40 md:h-80 md:w-80">
              <Image
                src="/profile.png"
                alt="Foto Raka Pratama"
                fill
                priority
                sizes="(max-width: 768px) 16rem, 20rem"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="animate-rise" style={{ animationDelay: "120ms" }}>
           <p className="mb-3 text-base text-muted-foreground md:text-lg">
             Halo, saya <span className="font-semibold text-violet">Raka Pratama</span>
           </p>
           <p className="mb-1 font-display text-xl font-medium text-muted-foreground md:text-2xl">
             Saya <span className="font-semibold text-violet">seorang</span>
           </p>
           <h1 className="font-display text-5xl font-extrabold leading-[1.05] text-balance md:text-7xl">
             Web{" "}
             <span className="relative inline-block text-violet">
               Developer
               <svg
                className="absolute -inset-x-3 -inset-y-1 h-[calc(100%+0.75rem)] w-[calc(100%+1.5rem)] text-violet/70"
                viewBox="0 0 300 90"
                fill="none"
                aria-hidden="true"
                preserveAspectRatio="none"
              >
                <path
                  d="M40 60 C 90 20, 220 15, 275 40 C 300 55, 250 82, 150 82 C 60 82, 15 60, 55 35"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            .
          </h1>
          <p className="mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
             Cepat diakses, gampang dipakai, nyaman semua orang.
          </p>

          <div className="mt-8 flex items-center gap-2 font-display text-2xl font-bold md:text-3xl">
            <span className="text-muted-foreground">Saya seorang</span>
            <span className="text-violet">
              {typed}
              <span className="animate-blink ml-0.5 font-normal text-violet">|</span>
            </span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#proyek"
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Lihat Proyek
            </a>
            <a
              href="#kontak"
              className="rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Hubungi Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
