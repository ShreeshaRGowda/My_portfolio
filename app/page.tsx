"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Download, Github, Linkedin, Code, Database, Globe } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-teal-500 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                  <img
                    src="/placeholder.svg?height=128&width=128&text=SN"
                    alt="Shreesha N R"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white">Shreesha N R</h1>
            <p className="text-xl sm:text-2xl text-teal-400 font-medium mb-6">Full-Stack Developer & Data Analyst</p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Computer Science student passionate about creating innovative web solutions and extracting meaningful
              insights from data
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-gray-600 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-all duration-300 transform hover:scale-105 bg-transparent"
              >
                <Link href="/resume">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-teal-400 hover:bg-teal-500/10 transition-all duration-300 hover:scale-110"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-6 w-6" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Development",
                description: "Full-stack web development with modern technologies",
                color: "teal",
              },
              {
                icon: Database,
                title: "Data Analysis",
                description: "Extracting insights using Python, SQL, and visualization tools",
                color: "blue",
              },
              {
                icon: Globe,
                title: "Problem Solving",
                description: "Creating innovative solutions for real-world challenges",
                color: "indigo",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 group ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 bg-${item.color}-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-${item.color}-500/20 transition-colors duration-300`}
                  >
                    <item.icon className={`h-8 w-8 text-${item.color}-400`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
