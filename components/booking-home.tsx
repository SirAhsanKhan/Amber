"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ResponsiveHeader from "@/components/responsive-header"

export default function Booking() {
  const [step, setStep] = useState(1)
  const [error, setError] = useState("")

  const [formData, setFormData] = useState({
    firstName: "",
    phone: "",
    studyDestination: "",
    studyLevel: "",
    preferredDate: "",
    preferredTime: "",
  })

  const totalSteps = 3

  const validateStep = () => {
    setError("")

    if (step === 1) {
      if (!formData.firstName || !formData.phone) {
        setError("Please fill all fields")
        return false
      }

      const phoneRegex = /^03[0-9]{9}$/
      if (!phoneRegex.test(formData.phone)) {
        setError("Enter valid Pakistani number (03XXXXXXXXX)")
        return false
      }
    }

    if (step === 2) {
      if (!formData.studyDestination || !formData.studyLevel) {
        setError("Please select your preferences")
        return false
      }
    }

    if (step === 3) {
      if (!formData.preferredDate || !formData.preferredTime) {
        setError("Please select date & time")
        return false
      }
    }

    return true
  }

  const nextStep = () => {
    if (!validateStep()) return
    setStep((prev) => Math.min(prev + 1, totalSteps))
  }

  const prevStep = () => {
    setError("")
    setStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = () => {
    if (!validateStep()) return

    const message = `Hello, I want to book a consultation:%0A
Name: ${formData.firstName}%0A
Phone: ${formData.phone}%0A
Destination: ${formData.studyDestination}%0A
Study Level: ${formData.studyLevel}%0A
Date: ${formData.preferredDate}%0A
Time: ${formData.preferredTime}`

    window.open(`https://wa.me/923220303474?text=${message}`, "_blank")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveHeader />

      <section className="text-center bg-gradient-to-r from-green-200 via-purple-200 to-yellow-100 pt-32 pb-16 px-4">
        <h1  className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">Book Your Consultation</h1>
        <p className="text-gray-700">Simple 3-step process. Takes less than 30 seconds.</p>
      </section>

      <section className="flex justify-center items-center py-16 px-4">
        <Card className="w-full max-w-xl shadow-2xl rounded-2xl">
          <CardContent className="p-8">

            {/* Progress */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-gradient-to-r from-purple-600 to-green-500 h-2 rounded-full transition-all"
                style={{ width: `${(step / totalSteps) * 100}%` }}
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
            )}

            <AnimatePresence mode="wait">

              {/* STEP 1 */}
              {step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
                  <h2 className="text-xl font-bold">Basic Information</h2>

                  <div>
                    <Label>Name</Label>
                    <Input
                      placeholder="e.g. Ali Khan"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label>Phone</Label>
                    <Input
                      placeholder="03XXXXXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <Button onClick={nextStep} className="w-full">Continue</Button>
                </motion.div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <motion.div key="step2" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
                  <h2 className="text-xl font-bold">Study Preferences</h2>

                  <div>
                    <Label>Destination</Label>
                    <Select value={formData.studyDestination} onValueChange={(value) => setFormData({ ...formData, studyDestination: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="uk">UK</SelectItem>
                        <SelectItem value="canada">Canada</SelectItem>
                        <SelectItem value="australia">Australia</SelectItem>
                        <SelectItem value="netherlands">Netherlands</SelectItem>
                        <SelectItem value="new-zealand">New Zealand</SelectItem>
                        <SelectItem value="singapore">Singapore</SelectItem>
                        <SelectItem value="sweden">Sweden</SelectItem>
                        <SelectItem value="turkey">Turkey</SelectItem>
                        <SelectItem value="usa">USA</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Study Level</Label>
                    <Select value={formData.studyLevel} onValueChange={(value) => setFormData({ ...formData, studyLevel: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="undergraduate">Undergraduate</SelectItem>
                        <SelectItem value="postgraduate">Postgraduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                    <Button onClick={nextStep} className="w-full">Continue</Button>
                  </div>
                </motion.div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} className="space-y-4">
                  <h2 className="text-xl font-bold">Schedule</h2>

                  <div>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label>Time</Label>
                    <div className="grid grid-cols-2 gap-2">
                      {["10 AM", "11 AM", "2 PM", "3 PM"].map((time) => (
                        <button
                          key={time}
                          onClick={() => setFormData({ ...formData, preferredTime: time })}
                          className={`border p-2 rounded-lg transition ${formData.preferredTime === time ? "bg-purple-600 text-white border-purple-600" : "hover:bg-purple-100"}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button variant="outline" onClick={prevStep}>Back</Button>
                    <Button onClick={handleSubmit} className="w-full bg-green-600 hover:bg-green-700">
                      Confirm & Chat on WhatsApp
                    </Button>
                  </div>
                </motion.div>
              )}

            </AnimatePresence>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
