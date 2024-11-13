/* eslint-disable react/no-unescaped-entities */
'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {  Moon, Sun, Code, ArrowRight, Zap, Github, Linkedin } from 'lucide-react'
import Link from 'next/link'
import './globals.css'

export default function LangSwitchZLanding() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10 dark:from-background dark:via-background dark:to-primary/5 transition-colors duration-500">
      <div className="container px-4 py-8 mx-auto max-w-7xl">
        <header className="flex justify-between items-center mb-12">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">LangSwitchZ</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </header>

        <main className="space-y-16">
          <section className="text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">
              Welcome to LangSwitchZ
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Effortlessly translate code between programming languages. Whether you're learning or working on a cross-platform project, LangSwitchZ simplifies your coding experience.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">About the Creator</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Anirban Ghosh is a passionate web developer skilled in Next.js and Three.js. He loves exploring new technologies and building dynamic web applications.
                </p>
                <div className="flex gap-4">
                  <Button variant="outline" asChild>
                    <Link href="https://github.com">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="https://linkedin.com">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">Features</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {[
                    "Seamless code translation between languages",
                    "Ideal for learning new programming languages",
                    "Supports cross-platform development",
                    "User-friendly and efficient interface"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="group relative overflow-hidden rounded-full px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 ease-in-out">
              <span className="relative flex items-center gap-2">
              <Link href="/convert">Start Coding</Link>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-primary/10 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-primary">How to Use LangSwitchZ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p>1. Click the "Start Converting" button above.</p>
              <p>2. Enter your code in the input editor.</p>
              <p>3. Select your source and target programming languages.</p>
              <p>4. Click convert and get your translated code instantly!</p>
            </CardContent>
          </Card>
        </main>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>&copy; 2023 LangSwitchZ. All rights reserved.</p>
        </footer>
      </div>
    </div>
  )
}