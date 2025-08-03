"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, TrendingUp, Check, Zap, Mail, MessageCircle } from "lucide-react"

export default function TradePage() {
  const [email, setEmail] = useState("")
  const [isRegistering, setIsRegistering] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)

  const handleRegister = () => {
    if (!email) {
      alert("Please enter your email address")
      return
    }

    setIsRegistering(true)
    setTimeout(() => {
      alert(
        "Registration successful! Please check your email for the Exness referral link and verification instructions.",
      )
      setIsRegistering(false)
    }, 2000)
  }

  const handleVerification = () => {
    if (!email) {
      alert("Please enter your email address first")
      return
    }

    setIsVerifying(true)
    setTimeout(() => {
      alert(
        "Verification email sent! Please check your inbox and follow the instructions to get instant access to signals.",
      )
      setIsVerifying(false)
    }, 2000)
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
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-8">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mr-4">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Trade with Amiin via <span className="text-red-400">EXNESS</span>
                </h1>
                <p className="text-gray-400 mt-2">
                  Open a real Exness account with Amiin's referral link and get lifetime access to free signals.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Free Signals Access */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-green-400 mb-4">Free Signals Access</h2>
                <p className="text-gray-300 mb-6">
                  Open a real Exness account with our referral link and get lifetime access to free signals.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Fast execution & withdrawals</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Verify via email → access Telegram group</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-3" />
                    <span className="text-gray-300">Lifetime free signals</span>
                  </div>
                </div>

                {/* Feature Cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <Zap className="h-6 w-6 text-red-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white text-sm">Fast Execution</h4>
                    <p className="text-gray-400 text-xs">Lightning-fast trades</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <Mail className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white text-sm">Email Verification</h4>
                    <p className="text-gray-400 text-xs">Simple process</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg text-center">
                    <MessageCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white text-sm">Telegram Access</h4>
                    <p className="text-gray-400 text-xs">Exclusive signals</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div>
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold text-green-400 mb-2">FREE</div>
                  <p className="text-gray-400">Lifetime Access</p>
                </div>

                <div className="mb-6">
                  <p className="text-center text-white font-medium mb-4">Don't have an account?</p>
                  <Button
                    onClick={handleRegister}
                    disabled={isRegistering}
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 text-lg mb-4"
                  >
                    {isRegistering ? "REGISTERING..." : "REGISTER ON EXNESS"}
                  </Button>
                  <p className="text-center text-gray-400 text-sm">Start with Amiin's referral link</p>
                </div>

                <div className="text-center text-gray-400 mb-6">OR</div>

                <div className="mb-6">
                  <p className="text-center text-white font-medium mb-4">
                    Already have an account with Amiin FX's link?
                  </p>

                  <div className="mb-4">
                    <Label htmlFor="email" className="text-white">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                      placeholder="Enter your email"
                    />
                  </div>

                  <Button
                    onClick={handleVerification}
                    disabled={isVerifying}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-3"
                  >
                    {isVerifying ? "SENDING..." : "SUBMIT EMAIL FOR VERIFICATION"}
                  </Button>
                  <p className="text-center text-gray-400 text-sm mt-2">Get instant access to signals</p>
                </div>

                <div className="text-center text-gray-400 text-sm">
                  Join thousands of traders getting free signals through Exness partnership
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
