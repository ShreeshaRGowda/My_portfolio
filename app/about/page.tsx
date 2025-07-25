"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, User, Target, CheckCircle } from "lucide-react"

export default function About() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const softSkills = [
    "Quick Learner",
    "Adaptable",
    "Team Player",
    "Problem Solver",
    "Detail-Oriented",
    "Communication Skills",
  ]

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
            About <span className="text-teal-400">Me</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background, education, and what drives my passion for technology.
          </p>
        </div>

        {/* Professional Bio */}
        <Card
          className={`mb-12 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <User className="h-8 w-8 text-teal-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Professional Summary</h2>
            </div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Computer Science & Engineering student at <strong className="text-teal-400">MITE</strong> with a CGPA of{" "}
              <strong className="text-teal-400">7.85</strong>, passionate about full-stack development and data
              analysis. I have hands-on experience with modern web technologies and data visualization tools, constantly
              seeking to bridge the gap between technical innovation and practical solutions.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across{" "}
              <strong className="text-blue-400">HTML, CSS, React, SQL, MongoDB, Python, Tableau, Power BI</strong>, and
              more. I enjoy tackling complex problems and transforming ideas into functional, user-friendly applications
              that make a real impact.
            </p>
          </CardContent>
        </Card>

        {/* Education Highlight */}
        <Card
          className={`mb-12 bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-teal-500/20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-teal-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-teal-400 mb-2">
                  Bachelor of Engineering - Computer Science & Engineering
                </h3>
                <p className="text-gray-300 mb-1">Mangalore Institute of Technology and Engineering (MITE)</p>
                <p className="text-gray-400 text-sm mb-2">2022 - Present | CGPA: 7.85</p>
                <p className="text-gray-300">
                  Focused on software development, data structures, algorithms, and modern web technologies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Soft Skills */}
        <Card
          className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-blue-400 mr-3" />
              <h2 className="text-2xl font-bold text-white">Core Strengths</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill}
                  className={`flex items-center p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  <CheckCircle className="h-5 w-5 text-teal-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
