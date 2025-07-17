"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { init } from "@/lib/three-dots"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (canvasRef.current) {
      init(canvasRef.current, {
        color: "#22d3ee",
        dotSize: 1.5,
        dotCount: 100,
        maxDistance: 150,
        mouseInteraction: true,
      })
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="container mx-auto px-4 z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium mb-4">
              Full Stack Developer
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400"
            >
              Ilyesse El Adaoui
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Building modern web experiences with a focus on clean code, performance, and user experience.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">View Projects</Button>
              <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10">
                Contact Me
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-6 mt-8"
            >
              <Link href="https://www.linkedin.com/in/ilyesse-eladaoui" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Link>
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Link>
              <Link href="mailto:ilyesseeladaoui2@gmail.com">
                <Mail className="h-6 w-6 text-gray-400 hover:text-cyan-400 transition-colors" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="relative w-full h-[500px]">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg blur-3xl opacity-30"></div>
              <div className="relative h-full w-full rounded-lg border border-gray-800 bg-black/50 backdrop-blur-sm p-6 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center mb-6">
                    <span className="text-4xl font-bold">IE</span>
                  </div>
                  <div className="space-y-4">
                    <div className="h-4 w-3/4 mx-auto bg-gray-800 rounded animate-pulse"></div>
                    <div className="h-4 w-1/2 mx-auto bg-gray-800 rounded animate-pulse"></div>
                    <div className="h-4 w-2/3 mx-auto bg-gray-800 rounded animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <div className="flex flex-col items-center">
            <span className="text-gray-400 text-sm mb-2">Scroll Down</span>
            <ArrowDown className="h-5 w-5 text-cyan-400 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
