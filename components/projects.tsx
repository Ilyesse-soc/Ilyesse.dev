"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Code2 } from "lucide-react"
import Link from "next/link"

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([])

  // Sample projects (fallback if no projects are added via admin)
  const sampleProjects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, and secure checkout.",
      image: "/ecom.png",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      
      
    },
    {
      title: "WALDENREGIE WEBSITE",
      description:
        "A modern, responsive company website highlighting services, expertise, and completed projects with interactive elements.",
      image: "/wwe.png",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
     
      
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/GT.png",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      demoLink: "/DocumentationTechnique/DocumentationTechnique.pdf",
      
    },
  ]

  useEffect(() => {
    // Load projects from localStorage if available
    const storedProjects = localStorage.getItem("portfolio_projects")
    if (storedProjects && JSON.parse(storedProjects).length > 0) {
      setProjects(JSON.parse(storedProjects))
    } else {
      setProjects(sampleProjects)
    }
  }, [])

  return (
    <section id="projects" className="py-20 bg-black/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
              Featured Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">A selection of my recent work and personal projects.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-gray-700 transition-all hover:shadow-lg hover:shadow-cyan-500/10">
                <div className="relative overflow-hidden h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
                  <img
                    src={project.image || "/placeholder.svg?height=400&width=600"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string, i: number) => (
                      <Badge key={i} variant="secondary" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    
                  </a>
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 space-y-4"
        >
          <a
            href="https://github.com/Ilyesse-soc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10"
            >
              <Github className="h-4 w-4 mr-2" />
              View More on GitHub
            </Button>
          </a>

          <div>
            <Link href="/projets-techniques">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-400 hover:bg-purple-500/10 hover:scale-105 transition-all"
              >
                <Code2 className="h-4 w-4 mr-2" />
                Autres Projets Techniques
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}