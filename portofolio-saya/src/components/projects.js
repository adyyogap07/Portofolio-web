import Image from "next/image"
import { client } from "@/sanity/client"
import { urlFor } from "@/sanity/image"

async function getProjects() {
  const query = `*[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    slug,
    description,
    image,
    techStack,
    projectUrl
  }`
  return client.fetch(query)
}

export async function Projects() {
  const projects = await getProjects()

  // Fallback jika belum ada data di Sanity
  if (!projects || projects.length === 0) {
    return (
      <section id="proyek" className="relative py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-16 max-w-2xl">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
              Proyek
            </p>
            <h2 className="font-display text-3xl font-extrabold leading-tight text-balance md:text-5xl">
              Beberapa karya yang saya banggakan
            </h2>
          </div>
          <p className="text-muted-foreground">
            Belum ada proyek. Tambahkan proyek melalui{" "}
            <a href="https://portofolio-studio.sanity.studio" className="text-violet underline" target="_blank" rel="noopener noreferrer">
              Sanity Studio
            </a>.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="proyek" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-display text-sm font-semibold uppercase tracking-[0.2em] text-violet">
            Proyek
          </p>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-balance md:text-5xl">
            Beberapa karya yang saya banggakan
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {projects.map((p, i) => (
            <article
              key={p._id}
              className="grid items-center gap-8 md:grid-cols-2 md:gap-12"
            >
              <div className={`relative ${i % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="glow-orb absolute -inset-6 -z-10 opacity-30" aria-hidden="true" />
                <div className="group relative aspect-[16/11] overflow-hidden rounded-2xl border border-border">
                  {p.image ? (
                    <Image
                      src={urlFor(p.image).width(800).height(550).url()}
                      alt={`Tampilan proyek ${p.title}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-card text-muted-foreground">
                      No Image
                    </div>
                  )}
                </div>
              </div>

              <div className={i % 2 === 1 ? "md:order-1" : ""}>
                <p className="mb-2 font-display text-sm font-semibold uppercase tracking-[0.15em] text-violet">
                  Proyek Unggulan
                </p>
                <h3 className="font-display text-2xl font-bold md:text-3xl">{p.title}</h3>
                <p className="mt-4 rounded-2xl border border-border bg-card p-5 leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                {p.techStack && p.techStack.length > 0 && (
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {p.techStack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-violet/30 bg-secondary px-3 py-1 text-xs font-medium text-foreground"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                )}
                {p.projectUrl && (
                  <a
                    href={p.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-violet/30 px-5 py-2 text-sm font-semibold text-violet transition-colors hover:bg-violet/10"
                  >
                    Lihat Proyek →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
