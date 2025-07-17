"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import {
    Code2,
    Database,
    ExternalLink,
    Github,
    Globe,
    Lock,
    Server,
    Shield,
    Smartphone,
    Terminal,
    Zap,
} from "lucide-react"
import Link from "next/link"

export default function ProjetsTechStack() {
  const techStacks = [
    {
      category: "JavaScript/TypeScript Fullstack",
      icon: <Code2 className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      

      projects: [
        {
          title: "Secure Headers Analyzer",
          description:
            "Application web pour analyser les en-têtes HTTP d'un site web et fournir une explication de leur utilité. Design moderne, animations fluides et interface intuitive.",
          image: "/secureheaders.png",
          tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
          type: "Frontend",
          complexity: "Intermédiaire",
          demoLink: "/DocumentationTechnique/🔐 Secure Headers Analyzer.pdf",
          codeLink: "https://github.com/Ilyesse-soc/secure-headers-analyzer",
        },
        {
          title: "Système d'authentification sécurisé",
          description:
            "Système d'authentification complet avec JWT, gestion des rôles, refresh tokens, et récupération de mot de passe.",
          image: "/SystemeAuthentification.png",
          tags: ["Node.js", "Express", "MongoDB", "JWT", "Bcrypt"],
          type: "Backend",
          complexity: "Expert",
          demoLink: "/DocumentationTechnique/Systemedauthentificationsecurise.pdf",
          codeLink: "https://github.com/Ilyesse-soc/auth-secure-system",
        },
        {
          title: "Site vitrine avec formulaire chiffré",
          description:
            "Site entreprise avec formulaire de contact sécurisé par chiffrement AES/RSA et système anti-spam honeypot.",
          image: "/sitevitrine.png",
          tags: ["React", "Node.js", "CryptoJS", "MongoDB"],
          type: "Fullstack",
          //complexity: "Intermédiaire",
          demoLink: "/DocumentationTechnique/SiteVitrineavecFormulaireChiffré.pdf",
          codeLink: "https://github.com/Ilyesse-soc/site-vitrine-formulaire-chiffre/blob/main/README.md",
        },
      ],
    },
    {
      category: "Python Backend & Data",
      icon: <Server className="h-6 w-6" />,
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      projects: [
        {
  title: "Nmap Security Dashboard",
  description:
    "Application web pour scanner des adresses IP, détecter les ports ouverts et services actifs. Interface avec historique des scans, détails utilisateur, et analyse des services via Nmap.",
  image: "/nmap-dashboard.png",
  tags: ["Python", "Flask", "MongoDB", "Nmap", "React", "Tailwind"],
  type: "Sécurité",
  complexity: "Expert",
  demoLink: "/DocumentationTechnique/NmapSecurityDashboard.pdf",
  codeLink: "https://github.com/Ilyesse-soc/nmap-security-dashboard", 
},
        {
          title: "SIEM Simplifié",
          description:
            "Mini système SIEM pour collecter, stocker et visualiser les logs de sécurité avec dashboard interactif.",
          image: "/siem.png",
          tags: ["Python", "MongoDB","Elasticsearch"],
          type: "Sécurité",
          complexity: "Expert",
          demoLink: "/DocumentationTechnique/_SIEM Simplifié.pdf",
          codeLink: "https://github.com/Ilyesse-soc/siem-simplifie",
        },
      ],
    },
    {
      category: "Mobile Development",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      projects: [
              {
        title: "Sudoku Maître - Jeu Mobile",
        description:
          "Jeu mobile de Sudoku avec niveaux de difficulté progressifs, sauvegarde automatique, grille interactive, design responsive et fonctionnalités avancées comme les notes, indices et minuterie.",
        image: "/sudoku.png",
        tags: ["Flutter", "Dart", "Mobile Game", "UI/UX"],
        type: "Mobile",
        complexity: "Avancé",
        demoLink: "/DocumentationTechnique/SudokuMaîtrejeuMobile.pdf",
        codeLink: "https://github.com/Ilyesse-soc/sudoku-maitre",
      }
      ],
    },
    
    {
      category: "Cybersécurité & Réseau",
      icon: <Shield className="h-6 w-6" />,
      color: "from-red-400 to-rose-500",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      projects: [
        {
          title: "Réseau Wi-Fi Honeypot",
          description:
            "Création d'un faux point d'accès Wi-Fi pour détecter et analyser les tentatives de connexion. Utilisation éthique et éducative.",
          image: "/placeholder.svg?height=200&width=400",
          tags: ["Kali Linux", "Hostapd", "Wireshark", "tcpdump"],
          type: "Pentest",
          complexity: "Expert",
          demoLink: "#",
          codeLink: "#",
        },
      ],
      
    },
  ]

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case "Débutant":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Intermédiaire":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Avancé":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Expert":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Fullstack":
        return <Globe className="h-4 w-4" />
      case "Backend":
        return <Database className="h-4 w-4" />
      case "Mobile":
        return <Smartphone className="h-4 w-4" />
      case "Sécurité":
        return <Lock className="h-4 w-4" />
      case "Pentest":
        return <Terminal className="h-4 w-4" />
      default:
        return <Code2 className="h-4 w-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      <section className="py-20 bg-black/50 min-h-screen">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                Stack Technologique
              </span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-lg">
              Mes projets organisés par technologies et domaines d'expertise. Du déhiloppement fullstack à la
              cybersécurité, en passant par le mobile.
            </p>
          </motion.div>

          {techStacks.map((stack, sIndex) => (
            <motion.div
              key={sIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sIndex * 0.1 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              {/* Header de la stack */}
              <div
                className={`flex items-center gap-4 mb-8 p-6 rounded-2xl ${stack.bgColor} border ${stack.borderColor} backdrop-blur-sm`}
              >
                <div className={`p-3 rounded-xl bg-gradient-to-r ${stack.color}`}>{stack.icon}</div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{stack.category}</h3>
                  <p className="text-gray-400">
                    {stack.projects.length} projet{stack.projects.length > 1 ? "s" : ""} • Technologies modernes et
                    sécurisées
                  </p>
                </div>
              </div>

              {/* Grille des projets */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {stack.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="h-full border-gray-800 bg-gray-900/50 backdrop-blur-sm overflow-hidden hover:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                      {/* Image du projet */}
                      <div className="relative overflow-hidden h-48">
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                        <img
                          src={project.image || "/placeholder.svg?height=200&width=400"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        {/* Badges flottants */}
                        <div className="absolute top-4 left-4 z-20 flex gap-2">
                          <Badge className={`${getComplexityColor(project.complexity)} border`}>
                            <Zap className="h-3 w-3 mr-1" />
                            {project.complexity}
                          </Badge>
                          <Badge className="bg-black/50 text-white border-gray-600">
                            {getTypeIcon(project.type)}
                            <span className="ml-1">{project.type}</span>
                          </Badge>
                        </div>
                      </div>

                      <CardHeader className="pb-4">
                        <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="pb-6">
                        <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>

                        {/* Tags technologiques */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, i) => (
                            <Badge
                              key={i}
                              variant="secondary"
                              className={`${stack.bgColor} text-white border ${stack.borderColor} hover:scale-105 transition-transform`}
                            >
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>

                      <CardFooter className="flex justify-between pt-0">
                        <Link href={project.codeLink} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-400 hover:text-white hover:bg-gray-800 transition-all"
                          >
                            <Github className="h-4 w-4 mr-2" />
                            Code Source
                          </Button>
                        </Link>
                        <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <Button
                            variant="ghost"
                            size="sm"
                            className={`bg-gradient-to-r ${stack.color} text-white hover:opacity-90 transition-all`}
                          >
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Démo Live
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Section statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-cyan-400 mb-2">7</div>
              <div className="text-gray-400">Projets Réalisés</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-blue-400 mb-2">4</div>
              <div className="text-gray-400">Stacks Maîtrisées</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
              <div className="text-gray-400">Technologies</div>
            </div>
            <div className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800">
              <div className="text-3xl font-bold text-red-400 mb-2">3</div>
              <div className="text-gray-400">Projets Sécurité</div>
            </div>
          </motion.div>

          {/* Bouton retour */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 hover:scale-105 transition-all"
              >
                ← Retour à l'accueil
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
