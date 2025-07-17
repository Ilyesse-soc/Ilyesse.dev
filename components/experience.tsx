"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Alternant Développeur Web",
      company: "Waldenergie",
      period: "Juin 2023",
      description: [
        "Conception et développement d'un site web complet en HTML, CSS, Java et PHP.",
        "Implémentation de fonctionnalités dynamiques avec Java et logique serveur avec PHP.",
        "Optimisation de l'expérience utilisateur pour un site interactif et engageant.",
      ],
      skills: ["HTML", "CSS", "Java", "PHP", "UX Design"],
    },
    {
      title: "Stagiaire en Administration Réseau",
      company: "Mairie de Poissy",
      period: "Avril-Mai 2023",
      description: [
        "Installation de la double authentification via YubiKey.",
        "Administration et surveillance du réseau informatique.",
        "Sécurisation et supervision du Système d'Information (SI).",
      ],
      skills: ["Network Admin", "Security", "YubiKey", "2FA"],
    },
    {
      title: "Stagiaire en Développement Web",
      company: "NextFormation",
      period: "Février 2019",
      description: [
        "Création et gestion de bases de données avec PhpMyAdmin.",
        "Sécurisation des données et du parc informatique.",
        "Supervision des équipements et câblages réseau.",
        "Développement et optimisation de logiciels internes.",
      ],
      skills: ["Database", "PhpMyAdmin", "Network", "Software Dev"],
    },
    {
      title: "Stagiaire en Ingénierie Industrielle",
      company: "TechnipFMC",
      period: "Février 2018",
      description: [
        "Analyse et automatisation des processus industriels.",
        "Études et optimisation des infrastructures techniques.",
      ],
      skills: ["Process Automation", "Technical Infrastructure"],
    },
    {
      title: "Stagiaire en Développement des Systèmes Informatiques",
      company: "Société Générale",
      period: "2018",
      description: ["Découverte des études de risques en marketing.", "Assistance et support aux utilisateurs."],
      skills: ["Risk Analysis", "User Support", "IT Systems"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-black/50">
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
              Professional Experience
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My journey through various roles in web development, network administration, and IT systems.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full z-10 hidden md:block"></div>

                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/50 transition-colors">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-xl font-bold text-white">{exp.title}</CardTitle>
                          <Badge variant="outline" className="bg-cyan-500/10 text-cyan-400 border-cyan-500/30">
                            <Calendar className="h-3 w-3 mr-1" />
                            {exp.period}
                          </Badge>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Building className="h-4 w-4 mr-1" />
                          <span>{exp.company}</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-gray-300 mb-4">
                          {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-cyan-400 mr-2">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {exp.skills.map((skill, i) => (
                            <Badge key={i} variant="secondary" className="bg-gray-800 text-gray-300">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Empty space for the other side */}
                  <div className="md:w-1/2 hidden md:block"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
