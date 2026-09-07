import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <SiteNav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}
