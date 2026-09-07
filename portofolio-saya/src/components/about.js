const orbitInner = ["React", "Next.js", "TypeScript", "Tailwind", "Node.js"]
const orbitOuter = ["Figma", "Postgres", "Supabase", "Vercel", "Git", "Framer"]

const stats = [
  { value: "3+", label: "Tahun ngoding" },
  { value: "25+", label: "Proyek selesai" },
  { value: "15+", label: "Klien senang" },
]

function OrbitRing({ items, radius, duration, reverse }) {
  return (
    <div
      className="absolute inset-0"
      style={{ animation: `spin-slow ${duration} linear infinite ${reverse ? "reverse" : ""}` }}
    >
      <div
        className="absolute left-1/2 top-1/2 rounded-full border border-border/60"
        style={{ width: radius * 2, height: radius * 2, transform: "translate(-50%, -50%)" }}
        aria-hidden="true"
      />
      {items.map((item, i) => {
        const angle = (i / items.length) * Math.PI * 2
        const x = Math.cos(angle) * radius
        const y = Math.sin(angle) * radius
        return (
          <div
            key={item}
            className="absolute left-1/2 top-1/2"
            style={{ transform: `translate(-50%, -50%) translate(${x}px, ${y}px)` }}
          >
            <span
              className="inline-block whitespace-nowrap rounded-full border border-violet/30 bg-card/90 px-3 py-1.5 text-xs font-medium text-foreground shadow-lg backdrop-blur"
              style={{ animation: `spin-slow ${duration} linear infinite ${reverse ? "" : "reverse"}` }}
            >
              {item}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export function About() {
  return (
    <section id="tentang" className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
            Tentang Saya
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-balance md:text-5xl">
            Saya bantu bisnis lokal <span className="text-violet">tampil beda</span> di dunia digital
          </h2>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
            Developer otodidak yang sudah 3 tahun berkecimpung di industri. Saya suka membuat
            produk yang bermakna dan menyenangkan &mdash; menyeimbangkan kebutuhan pengguna
            dengan tujuan bisnis, dari UMKM sampai startup.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="min-w-[9rem] rounded-2xl border border-border bg-card px-6 py-5 text-center"
            >
              <p className="font-display text-3xl font-extrabold text-violet">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Orbit */}
        <div className="mt-20 flex flex-col items-center">
          <p className="mb-2 text-center font-display text-xl font-semibold md:text-2xl">
            Teknologi yang saya <span className="text-violet">pakai sehari-hari</span>
          </p>
          <p className="mb-10 text-center text-sm text-muted-foreground">
            Stack modern untuk web yang cepat dan mudah dirawat
          </p>

          <div className="relative h-[340px] w-[340px] md:h-[440px] md:w-[440px]">
            <div className="glow-orb absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 opacity-60" aria-hidden="true" />
            <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-violet/40 bg-card font-script text-4xl text-violet shadow-2xl">
              Ady
            </div>
            <OrbitRing items={orbitInner} radius={110} duration="34s" />
            <OrbitRing items={orbitOuter} radius={165} duration="48s" reverse />
          </div>
        </div>
      </div>
    </section>
  )
}
