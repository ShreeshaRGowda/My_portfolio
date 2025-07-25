"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

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
            Get In <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            I'm always interested in discussing new opportunities, collaborations, or just connecting with fellow
            developers and tech enthusiasts. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card
            className={`bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <MessageCircle className="mr-3 h-6 w-6 text-teal-400" />
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project, opportunity, or just say hello..."
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    rows={6}
                    className="bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 transition-all duration-200 hover:scale-105"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {/* Contact Details */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-teal-500/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Email</h3>
                    <p className="text-gray-400">shreeshagiri04@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Phone</h3>
                    <p className="text-gray-400">+91-7975480395</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-indigo-500/10 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">Location</h3>
                    <p className="text-gray-400">Koppa, Chikmagalur District, 577416</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  <Button
                    variant="ghost"
                    asChild
                    className="h-auto p-4 justify-start bg-gray-700/30 hover:bg-teal-500/10 hover:text-teal-400 transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                      <Github className="h-6 w-6 mr-4" />
                      <div className="text-left">
                        <div className="font-semibold">GitHub</div>
                        <div className="text-sm opacity-75">Check out my code and projects</div>
                      </div>
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    asChild
                    className="h-auto p-4 justify-start bg-gray-700/30 hover:bg-blue-500/10 hover:text-blue-400 transition-all duration-300 hover:scale-105"
                  >
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-6 w-6 mr-4" />
                      <div className="text-left">
                        <div className="font-semibold">LinkedIn</div>
                        <div className="text-sm opacity-75">Connect with me professionally</div>
                      </div>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="bg-gradient-to-r from-teal-500/10 to-blue-500/10 border-teal-500/20">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between p-4 bg-teal-500/10 rounded-lg mb-4">
                  <div>
                    <h3 className="font-semibold text-teal-400">Available for Opportunities</h3>
                    <p className="text-teal-300 text-sm">Open to internships and projects</p>
                  </div>
                  <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
                <div className="text-gray-400 text-sm space-y-2">
                  <p>🎓 Currently pursuing B.E. in Computer Science at MITE</p>
                  <p>💼 Seeking opportunities in Full-Stack Development or Data Analysis</p>
                  <p>📧 I typically respond to messages within 24 hours</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">© 2024 Shreesha N R. All rights reserved.</p>
            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-teal-400 hover:bg-teal-500/10"
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-gray-400 hover:text-blue-400 hover:bg-blue-500/10"
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
