"use client"

import { motion } from "framer-motion"
import { Code, Database, Shield, Monitor, Cloud } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      name: "Programming",
      icon: <Code className="h-6 w-6" />,
      skills: ["HTML/CSS", "JavaScript", "C#", "PHP", "Python", "SQL", "Shell", "Perl"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["MySQL", "MariaDB", "SQL Server", "Access"],
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Operating Systems",
      icon: <Monitor className="h-6 w-6" />,
      skills: ["Windows", "Windows Server", "Linux (Debian, Ubuntu)"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Networks & Security",
      icon: <Shield className="h-6 w-6" />,
      skills: ["DHCP", "DNS", "VPN SSL/IPSEC", "Proxy", "Active Directory", "Cisco (routeurs/switchs)", "Nmap"],
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Virtualization & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      skills: ["VirtualBox", "VMware Workstation", "Docker", "Kubernetes"],
      color: "from-blue-500 to-indigo-500",
    },
    {
      name: "Security",
      icon: <Shield className="h-6 w-6" />,
      skills: ["Pentest", "Forensic", "Defense measures", "SI activity analysis"],
      color: "from-yellow-500 to-amber-500",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-black to-gray-900">
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
              Technical Skills
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-gray-700 transition-colors"
            >
              <div className={`p-6 bg-gradient-to-r ${category.color} bg-opacity-10`}>
                <div className="flex items-center mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white mr-3`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.name}</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 mr-2"></div>
                      <span className="text-gray-300 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          
          
        </motion.div>
      </div>
    </section>
  )
}
