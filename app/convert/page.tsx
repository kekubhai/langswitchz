'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Moon, Sun, Copy, Wand2, Code2, ArrowRight, Zap } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function LangSwitchZ() {
  const [isDark, setIsDark] = useState(false)
  const [sourceCode, setSourceCode] = useState('')
  const [convertedCode, setConvertedCode] = useState('')
  const [sourceLanguage, setSourceLanguage] = useState('javascript')
  const [targetLanguage, setTargetLanguage] = useState('python')
  const [explanation, setExplanation] = useState('')
  const { toast } = useToast()

  const handleThemeToggle = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle('dark')
  }

  const handleConvert = async () => {
    // Simulate conversion
    setConvertedCode(`# Converted from ${sourceLanguage} to ${targetLanguage}\n${sourceCode}`)
    toast({
      title: "Code Converted",
      description: "Your code has been successfully converted!",
    })
  }

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text)
    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    })
  }

  const handleExplain = async () => {
    // Simulate AI explanation
    setExplanation(`Here's an explanation of your ${sourceLanguage} code:\n\n1. First, the code...\n2. Then it...\n3. Finally...`)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-background via-background to-primary/10 p-4 md:p-8`}>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-8 w-8 text-primary animate-pulse" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent">LangSwitchZ</h1>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleThemeToggle}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Select defaultValue={sourceLanguage} onValueChange={setSourceLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Source Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
            
            <Card className="relative overflow-hidden">
              <CardContent className="p-0">
                <Textarea
                  placeholder="Enter your code here"
                  className="min-h-[400px] font-mono border-0 resize-none p-4 bg-muted/50"
                  value={sourceCode}
                  onChange={(e) => setSourceCode(e.target.value)}
                />
                <div className="absolute bottom-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleCopy(sourceCode)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleExplain}
                      >
                        <Wand2 className="h-4 w-4 mr-2" />
                        Explain
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Code Explanation</DialogTitle>
                      </DialogHeader>
                      <div className="mt-4 font-mono whitespace-pre-wrap">
                        {explanation}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <Select defaultValue={targetLanguage} onValueChange={setTargetLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Target Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="javascript">JavaScript</SelectItem>
                <SelectItem value="python">Python</SelectItem>
                <SelectItem value="java">Java</SelectItem>
                <SelectItem value="cpp">C++</SelectItem>
              </SelectContent>
            </Select>
            
            <Card className="relative overflow-hidden">
              <CardContent className="p-0">
                <Textarea
                  placeholder="Converted code will appear here"
                  className="min-h-[400px] font-mono border-0 resize-none p-4 bg-muted/50"
                  value={convertedCode}
                  readOnly
                />
                <div className="absolute bottom-4 right-4">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={() => handleCopy(convertedCode)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            onClick={handleConvert}
            className="px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            Convert Code
          </Button>
        </div>
      </div>
    </div>
  )
}