"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { ArrowLeft, UserCheck, Check, Shield, BarChart3 } from "lucide-react"

export default function AccountManagementPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    accountSize: "",
    riskTolerance: "moderate",
    tradingExperience: "",
    goals: "",
  })

  const handleApply = (planType: string) => {
    setSelectedPlan(planType)
    setTimeout(() => {
      alert(
        `Application submitted for ${planType}! Our team will contact you within 24 hours to discuss your account management setup.`,
      )
      setSelectedPlan(null)
    }, 2000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const managementPlans = [
    {
      name: "Manual Management",
      price: "15% of profits",
      description: "Amiin FX manually trades your account with full transparency",
      features: [
        "Manual trading by Amiin FX",
        "Full account transparency",
        "Monthly performance reports",
        "Risk management protocols",
        "Direct communication access",
      ],
      icon: UserCheck,
      color: "bg-blue-600",
    },
    {
      name: "Automated Management",
      price: "20% of profits",
      description: "Advanced algorithms execute trades based on Amiin's strategies",
      features: [
        "Automated trading systems",
        "24/7 market monitoring",
        "Real-time performance tracking",
        "Advanced risk controls",
        "Monthly strategy updates",
      ],
      icon: BarChart3,
      color: "bg-purple-600",
    },
  ]

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
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mr-4">
                <UserCheck className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">
                  Let <span className="text-cyan-400">Amiin FX</span> Manage Your Trades
                </h1>
                <p className="text-gray-400 mt-2">
                  Gain passive income while Amiin FX handles your trading using advanced strategies and risk management.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Benefits */}
          <div className="space-y-6">
            {/* Key Benefits */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Why Choose Account Management?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Monthly Performance Updates</h4>
                      <p className="text-gray-400 text-sm">Detailed reports on your account's performance and growth</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Manual & Automated Options</h4>
                      <p className="text-gray-400 text-sm">
                        Choose between hands-on manual trading or automated systems
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Professional Risk Management</h4>
                      <p className="text-gray-400 text-sm">Advanced risk controls to protect your capital</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-4 mt-1">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Transparent Operations</h4>
                      <p className="text-gray-400 text-sm">Full visibility into all trades and strategies used</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Performance Stats */}
            <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">Track Record</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">85%</div>
                    <div className="text-gray-400 text-sm">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">2.5:1</div>
                    <div className="text-gray-400 text-sm">Risk/Reward</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">15%</div>
                    <div className="text-gray-400 text-sm">Monthly ROI</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Management Plans */}
          <div className="space-y-6">
            {managementPlans.map((plan) => (
              <Card key={plan.name} className="bg-gray-800 border-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 ${plan.color} rounded-lg flex items-center justify-center mr-4`}>
                      <plan.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-2xl font-bold text-cyan-400">{plan.price}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{plan.description}</p>

                  <div className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <Check className="h-4 w-4 text-green-400 mr-3" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    onClick={() => handleApply(plan.name)}
                    disabled={selectedPlan === plan.name}
                    className={`w-full ${plan.color} hover:opacity-90 text-white font-bold py-3`}
                  >
                    {selectedPlan === plan.name ? "APPLYING..." : `APPLY FOR ${plan.name.toUpperCase()}`}
                  </Button>
                </CardContent>
              </Card>
            ))}

            {/* Application Form */}
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-6">Account Information</h3>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="accountSize" className="text-white">
                      Account Size (USD)
                    </Label>
                    <Input
                      id="accountSize"
                      name="accountSize"
                      type="number"
                      value={formData.accountSize}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                      placeholder="e.g., 10000"
                    />
                  </div>

                  <div>
                    <Label htmlFor="riskTolerance" className="text-white">
                      Risk Tolerance
                    </Label>
                    <select
                      id="riskTolerance"
                      name="riskTolerance"
                      value={formData.riskTolerance}
                      onChange={handleInputChange}
                      className="mt-1 w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white"
                    >
                      <option value="conservative">Conservative (1-2% risk)</option>
                      <option value="moderate">Moderate (2-3% risk)</option>
                      <option value="aggressive">Aggressive (3-5% risk)</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="tradingExperience" className="text-white">
                      Trading Experience (Years)
                    </Label>
                    <Input
                      id="tradingExperience"
                      name="tradingExperience"
                      type="number"
                      value={formData.tradingExperience}
                      onChange={handleInputChange}
                      className="mt-1 bg-gray-700 border-gray-600 text-white"
                      placeholder="e.g., 2"
                    />
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Shield className="h-5 w-5 text-blue-400 mr-2" />
                    <span className="text-blue-400 font-semibold">Minimum Requirements</span>
                  </div>
                  <ul className="text-gray-300 text-sm space-y-1">
                    <li>• Minimum account size: $5,000</li>
                    <li>• Account must be with approved brokers</li>
                    <li>• Full account access required</li>
                    <li>• Performance fee only charged on profits</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
