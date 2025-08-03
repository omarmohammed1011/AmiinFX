"use client"

import { useState } from "react"
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

  const handlePurchase = () => {
    setIsPurchasing(true)
    setTimeout(() => {
      alert("Course purchased successfully! You now have access to THE GOAT STRATEGY.")
      setIsPurchasing(false)
    }, 2000)
  }

  const handleViewDetails = () => {
    alert(
      "Course Details:\n\nTHE GOAT STRATEGY is a high-level, confluence-driven trading approach designed for traders who prioritize accuracy over frequency. This comprehensive course covers advanced market structure analysis, entry/exit strategies, and risk management techniques used by professional traders.\n\nWhat's Included:\n• 20+ video lessons\n• Strategy breakdowns\n• Community access\n• Lifetime updates\n• Direct support from Amiin FX team",
    )
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="mr-4">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
        </div>

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Courses</h1>
          <p className="text-gray-400">1 course available</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <Button className="bg-white text-black hover:bg-gray-200">All Courses</Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-800">
            My Courses
          </Button>
        </div>

        {/* Search and Filters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-gray-800 border-gray-700 text-white"
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white appearance-none"
            >
              <option>All Categories</option>
              <option>Trading Strategies</option>
              <option>Risk Management</option>
              <option>Technical Analysis</option>
            </select>
          </div>

          <div className="relative">
            <select
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white appearance-none"
            >
              <option>All Levels</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        {/* Course Card */}
        <div className="max-w-2xl">
          <Card className="bg-gray-800 border-gray-700">
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-blue-900 to-purple-900 rounded-t-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-black/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BookOpen className="h-16 w-16 text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">THE GOAT STRATEGY</h2>
                </div>
              </div>
              <Badge className="absolute top-4 right-4 bg-purple-600 text-white">Premium</Badge>
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-2 py-1 rounded flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                <span className="text-xs">20+ lessons</span>
              </div>
            </div>

            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-white mb-2">THE GOAT STRATEGY</h3>
              <p className="text-gray-400 mb-4">By Amiin FX</p>

              <p className="text-gray-300 mb-4">
                The GOAT Strategy is a high-level, confluence-driven trading approach designed for traders who
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
