"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ArrowLeft, Search, Filter, BookOpen, Clock } from "lucide-react"

export default function CoursePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLevel, setSelectedLevel] = useState("All Levels")
  const [isPurchasing, setIsPurchasing] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const router = useRouter()

  const handlePurchase = () => {
    setIsPurchasing(true)
    setTimeout(() => {
      setIsPurchasing(false)
      setShowSuccess(true)
    }, 2000)
  }

  const handleViewDetails = () => {
    alert(
      "Course Details:\n\nMaster Sniper Entries is a high-level, confluence-driven trading approach designed for traders who prioritize accuracy over frequency. This comprehensive course covers advanced market structure analysis, entry/exit strategies, and risk management techniques used by professional traders.\n\nWhat's Included:\n• 20+ video lessons\n• Strategy breakdowns\n• Community access\n• Lifetime updates\n• Direct support from Amiin FX team",
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section for Master Sniper Entries */}
      <section className="relative w-full bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pb-12 pt-8 md:pt-16 mb-10 flex items-center justify-center">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center kojoforex-bg" />
        <div className="relative z-10 w-full max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
          {/* Amiin FX Logo (optional) */}
          <img src="/placeholder-logo.png" alt="Amiin FX Logo" className="w-16 h-16 mb-4 rounded-lg shadow-lg" />
          <span className="inline-block bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-4">58-page PDF Course</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-3 tracking-tight flex items-center justify-center gap-2">
            <span role="img" aria-label="sniper">🔰</span> Master Sniper Entries
          </h1>
          <h2 className="text-xl md:text-2xl text-cyan-300 font-semibold mb-2">The Ultimate Price Action + Smart Money Concepts Course</h2>
          <p className="text-gray-300 text-base md:text-lg mb-6">By Amiin FX</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-6">
            <a href="#" className="w-full sm:w-auto">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg">
                Download Free PDF
              </Button>
            </a>
            <a href="#" className="w-full sm:w-auto">
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 text-lg rounded-lg shadow-lg">
                Get the Course
              </Button>
            </a>
          </div>
          <blockquote className="text-cyan-400 italic text-base md:text-lg mt-2">“Master the markets, one sniper entry at a time.”</blockquote>
        </div>
      </section>

      {/* Success Section after Purchase */}
      {showSuccess && (
        <section className="w-full flex items-center justify-center px-4 py-8">
          <div className="max-w-xl w-full bg-gradient-to-br from-green-900 via-black to-blue-900 rounded-xl shadow-lg p-8 text-center border-2 border-green-500">
            <img src="/placeholder-logo.png" alt="Amiin FX Logo" className="w-14 h-14 mx-auto mb-4 rounded-lg" />
            <h2 className="text-3xl font-bold text-green-400 mb-2">Congratulations!</h2>
            <p className="text-lg text-white mb-4">You now have instant access to <span className="font-bold text-cyan-400">Master Sniper Entries</span>.</p>
            <p className="text-gray-300 mb-6">Check your dashboard for course materials, video lessons, and your exclusive PDF download.</p>
            <Button
              className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 text-lg rounded-lg shadow-lg mb-2"
              onClick={() => router.push("/course/dashboard")}
            >
              Go to Course Dashboard
            </Button>
            <blockquote className="text-cyan-400 italic text-base md:text-lg mt-2">“Master the markets, one sniper entry at a time.”</blockquote>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ...existing code... */}

        {/* Course Card */}
        <div className="max-w-2xl">
          <Card className="bg-gray-800 border-gray-700">
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-black/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-16 w-16 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Master Sniper Entries</h2>
                </div>
              </div>
              <Badge className="absolute top-4 right-4 bg-purple-600 text-white">Premium</Badge>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs">20+ lessons</span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">Master Sniper Entries</h3>
              <p className="text-gray-400 mb-4">By Amiin FX</p>

              <p className="text-gray-300 mb-4">
                Master Sniper Entries is a high-level, confluence-driven trading approach designed for traders who
                prioritize accuracy over frequency. Learn the exact systems used by Amiin FX.
              </p>

              <div className="flex space-x-2 mb-4">
                <Badge className="bg-orange-600 text-white">Advanced</Badge>
                <Badge className="bg-blue-600 text-white">Strategy</Badge>
              </div>

              <div className="flex items-center mb-6">
                <BookOpen className="h-4 w-4 text-gray-400 mr-2" />
                <span className="text-gray-400">20+ Video Lessons</span>
              </div>

              <div className="flex space-x-3">
                <Button
                  onClick={handlePurchase}
                  disabled={isPurchasing}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  {isPurchasing ? "Processing..." : "$199 - Purchase Course"}
                </Button>
                <Button
                  onClick={handleViewDetails}
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
                >
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
