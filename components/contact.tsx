"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
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
              Get In Touch
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                      <p className="text-gray-400">ilyesseeladaoui2@gmail.com</p>
                    </div>
                  </div>

                

                  <div className="flex items-start">
                    <div className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 mr-4">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                      <p className="text-gray-400">France</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.linkedin.com/in/ilyesse-eladaoui"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                    </a>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 transition-colors"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-6">Send Me a Message</h3>

                {formSubmitted ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/20 text-green-500 mb-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-8 w-8"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="text-xl font-medium text-white mb-2">Message Sent!</h4>
                    <p className="text-gray-400">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <Button
                      className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          required
                          className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Subject of your message"
                        required
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500"
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Your message"
                        rows={5}
                        required
                        className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-500 resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-white"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
