import { Suspense } from "react"
import Hero from "@/components/hero"
import Experience from "@/components/experience"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Loading from "@/components/loading"



export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <Suspense fallback={<Loading />}>
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
