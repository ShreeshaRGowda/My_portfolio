"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Download,
  GraduationCap,
  Award,
  Briefcase,
  Calendar,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
} from "lucide-react"

export default function Resume() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const education = [
    {
      degree: "Bachelor of Engineering - Computer Science & Engineering",
      institution: "Mangalore Institute of Technology and Engineering (MITE)",
      period: "2022 - Present",
      grade: "CGPA: 7.85",
      location: "Mangalore, Karnataka",
    },
    {
      degree: "12th Grade (Science)",
      institution: "Pre-University College",
      period: "2020 - 2022",
      grade: "Percentage: 85%",
      location: "Karnataka",
    },
    {
      degree: "10th Grade (SSLC)",
      institution: "High School",
      period: "2019 - 2020",
      grade: "Percentage: 88%",
      location: "Karnataka",
    },
  ]

  const certifications = [
    "Tableau Desktop Specialist Certification",
    "UX Design Fundamentals",
    "IoT (Internet of Things) Workshop",
    "Power BI Data Analytics",
    "Python Programming Bootcamp",
    "Web Development with React",
  ]

  const achievements = [
    {
      title: "CODE CREST Participation",
      description: "Participated in competitive programming contest",
      year: "2024",
    },
    {
      title: "AI in Agriculture Research Paper",
      description: "Published research paper on AI applications in agriculture",
      year: "2023",
    },
    {
      title: "Best Project Award",
      description: "Received recognition for innovative project development",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            <span className="text-teal-400">Resume</span>
          </h1>
          <p className="text-lg text-gray-400 mb-6">Download my resume or view my professional background below.</p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
          >
            <Download className="mr-2 h-5 w-5" />
            Download PDF Resume
          </Button>
        </div>

        {/* Contact Info */}
        <Card
          className={`mb-8 bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardContent className="p-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-2">Shreesha N R</h2>
              <p className="text-xl text-teal-400 font-medium mb-4">Full-Stack Developer & Data Analyst</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="h-4 w-4 mr-2 text-teal-400" />
                <span className="text-gray-300">shreeshagiri04@gmail.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-gray-300">+91-7975480395</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="h-4 w-4 mr-2 text-indigo-400" />
                <span className="text-gray-300">Koppa, Chikmagalur, 577416</span>
              </div>
            </div>
            <div className="flex justify-center space-x-4 mt-6">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Education Timeline */}
        <Card
          className={`mb-8 bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-white">
              <GraduationCap className="mr-3 h-6 w-6 text-teal-400" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-teal-500/30 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-teal-500 rounded-full"></div>
                  <div className="pb-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <span className="text-sm text-teal-400 bg-teal-500/10 px-3 py-1 rounded-full">{edu.period}</span>
                    </div>
                    <p className="text-teal-400 font-medium mb-1">{edu.institution}</p>
                    <p className="text-gray-400 text-sm mb-1">{edu.location}</p>
                    <p className="text-gray-300 font-medium">{edu.grade}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Internship Experience */}
        <Card
          className={`mb-8 bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-white">
              <Briefcase className="mr-3 h-6 w-6 text-blue-400" />
              Professional Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-semibold text-white">Python Intern</h3>
                <span className="text-sm text-gray-400 flex items-center">
                  <Calendar className="h-3 w-3 mr-1" />
                  November - December 2024
                </span>
              </div>
              <p className="text-blue-400 font-medium mb-2">InternPe</p>
              <p className="text-gray-400 mb-3">
                Gained hands-on experience in Python development, working on real-world projects and enhancing
                programming skills through practical application of data structures, algorithms, and software
                development practices.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Python", "Data Structures", "Algorithms", "Software Development"].map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-gray-700 text-gray-300">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certifications & Workshops */}
        <Card
          className={`mb-8 bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-white">
              <Award className="mr-3 h-6 w-6 text-indigo-400" />
              Certifications & Workshops
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg">
                  <div className="w-8 h-8 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <Award className="h-4 w-4 text-indigo-400" />
                  </div>
                  <span className="text-gray-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card
          className={`bg-gray-800/50 border-gray-700 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle className="flex items-center text-2xl font-bold text-white">
              <Award className="mr-3 h-6 w-6 text-yellow-400" />
              Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700/30 rounded-lg">
                  <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center">
                    <Award className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-white">{achievement.title}</h3>
                      <span className="text-sm text-gray-400">{achievement.year}</span>
                    </div>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
