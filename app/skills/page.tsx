"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Database, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: ["C", "Java", "Python", "JavaScript", "React"],
    color: "teal",
  },
  {
    title: "Web Technologies",
    icon: Palette,
    skills: ["HTML", "CSS", "React", "Node.js", "Express"],
    color: "blue",
  },
  {
    title: "Database & Analytics",
    icon: Database,
    skills: ["SQL", "MongoDB", "MySQL", "Tableau", "Power BI"],
    color: "indigo",
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: ["VS Code", "Git", "Excel", "Figma", "Adobe Photoshop"],
    color: "purple",
  },
]

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            Skills & <span className="text-teal-400">Technologies</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to build innovative solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-105 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold text-white">
                  <div
                    className={`w-10 h-10 bg-${category.color}-500/10 rounded-lg flex items-center justify-center mr-3`}
                  >
                    <category.icon className={`h-6 w-6 text-${category.color}-400`} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className={`bg-gray-700/50 hover:bg-${category.color}-500/10 border border-gray-600 hover:border-${category.color}-500/30 rounded-lg p-3 text-center transition-all duration-300 hover:scale-105 group`}
                    >
                      <span
                        className={`text-gray-300 group-hover:text-${category.color}-400 font-medium transition-colors duration-300`}
                      >
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Competencies */}
        <Card
          className={`bg-gradient-to-r from-teal-500/5 to-blue-500/5 border-teal-500/20 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-white">Core Competencies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-teal-400 mb-4">Web Development</h3>
                <div className="space-y-2">
                  {[
                    "Frontend Development",
                    "Backend APIs",
                    "Database Design",
                    "Responsive Design",
                    "Version Control",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-blue-400 mb-4">Data Analysis</h3>
                <div className="space-y-2">
                  {[
                    "Data Visualization",
                    "Statistical Analysis",
                    "Business Intelligence",
                    "Report Generation",
                    "Dashboard Creation",
                  ].map((skill) => (
                    <div key={skill} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
