"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, User, Calendar } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Printing in the Air – AI Gesture Art Tool",
    description:
      "An innovative application that allows users to draw and create art using hand gestures captured via webcam. Utilizes computer vision and machine learning to interpret hand movements and translate them into digital artwork.",
    image: "/placeholder.svg?height=200&width=300&text=AI+Gesture+Art",
    tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision", "NumPy"],
    role: "Full-Stack Developer & ML Engineer",
    duration: "3 months",
    github: "https://github.com",
    demo: null,
    highlights: ["Real-time gesture recognition", "Interactive drawing interface", "ML-powered hand tracking"],
  },
  {
    id: 2,
    title: "AI-Powered Document Redaction Tool",
    description:
      "Automated document processing system that identifies and blurs sensitive content in documents. Uses advanced AI models for face detection, text recognition, and privacy protection to ensure secure document handling.",
    image: "/placeholder.svg?height=200&width=300&text=Document+Redaction",
    tech: ["Python", "YOLOv5/v8", "DeepFace", "OCR", "Flask", "AI/ML"],
    role: "AI Developer & Backend Engineer",
    duration: "4 months",
    github: "https://github.com",
    demo: "https://example.com",
    highlights: ["Automated content detection", "Privacy-first approach", "Scalable processing pipeline"],
  },
  {
    id: 3,
    title: "Hotel Revenue Analysis / Ecommerce App",
    description:
      "Comprehensive full-stack application for hotel revenue management and analysis. Features backend API development, data visualization, and business intelligence dashboards deployed on cloud infrastructure.",
    image: "/placeholder.svg?height=200&width=300&text=Hotel+Revenue",
    tech: ["Node.js", "Express", "MongoDB", "Angular", "Tableau", "Heroku"],
    role: "Full-Stack Developer & Data Analyst",
    duration: "5 months",
    github: "https://github.com",
    demo: "https://example.com",
    highlights: ["RESTful API design", "Real-time analytics", "Cloud deployment"],
  },
]

export default function Projects() {
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
            My <span className="text-teal-400">Projects</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my work in full-stack development, AI/ML, and data analysis. Each project represents a unique
            challenge and learning experience.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="aspect-video lg:aspect-square bg-gray-700 rounded-lg overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Project Details */}
                <div className="p-6 lg:p-8">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    <p className="text-gray-400 leading-relaxed">{project.description}</p>

                    {/* Project Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-teal-400 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-sm text-gray-400 flex items-center">
                            <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-3 w-3 mr-1" />
                        <span>{project.role}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{project.duration}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-700 text-gray-300 hover:bg-teal-500/20 hover:text-teal-400 transition-colors duration-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-3 pt-4">
                      {project.github && (
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-200 hover:scale-105 bg-transparent"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4 mr-2" />
                            View Code
                          </a>
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          asChild
                          size="sm"
                          className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
