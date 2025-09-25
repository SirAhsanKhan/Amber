"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import ResponsiveHeader from "@/components/responsive-header"
import emailjs from "@emailjs/browser"

export default function Booking() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    studyDestination: "",
    studyLevel: "",
    preferredDate: "",
    preferredTime: "",
    consultationType: "",
    message: "",
    agreeToTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isSubmitting) return
    setIsSubmitting(true)

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        alert("Your consultation booking has been sent successfully ✅")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          country: "",
          studyDestination: "",
          studyLevel: "",
          preferredDate: "",
          preferredTime: "",
          consultationType: "",
          message: "",
          agreeToTerms: false,
        })
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        alert("Oops! Something went wrong. Please try again ❌")
      })
      .finally(() => {
        setIsSubmitting(false)
      })
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <ResponsiveHeader />

      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-200 via-purple-200 to-yellow-100 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Book Your Consultation
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-3xl mb-8"
        >
          Take the first step towards your international education journey. Schedule a personalized consultation with
          our expert advisors.
        </motion.p>
      </section>

      {/* Booking Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="shadow-xl rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-t-2xl">
                <CardTitle className="text-2xl text-center">Schedule Your Consultation</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  {/* Country & Destination */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Current Country *</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({ ...formData, country: value })}>
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="india">India</SelectItem>
                          <SelectItem value="pakistan">Pakistan</SelectItem>
                          <SelectItem value="bangladesh">Bangladesh</SelectItem>
                          <SelectItem value="nepal">Nepal</SelectItem>
                          <SelectItem value="sri-lanka">Sri Lanka</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Study Destination *</Label>
                      <Select
                        value={formData.studyDestination}
                        onValueChange={(value) => setFormData({ ...formData, studyDestination: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select destination" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="usa">United States</SelectItem>
                          <SelectItem value="canada">Canada</SelectItem>
                          <SelectItem value="uk">United Kingdom</SelectItem>
                          <SelectItem value="australia">Australia</SelectItem>
                          <SelectItem value="germany">Germany</SelectItem>
                          <SelectItem value="france">France</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Study Level & Type */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Study Level *</Label>
                      <Select
                        value={formData.studyLevel}
                        onValueChange={(value) => setFormData({ ...formData, studyLevel: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select study level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="undergraduate">Undergraduate</SelectItem>
                          <SelectItem value="postgraduate">Postgraduate</SelectItem>
                          <SelectItem value="phd">PhD</SelectItem>
                          <SelectItem value="diploma">Diploma</SelectItem>
                          <SelectItem value="language">Language Course</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Consultation Type *</Label>
                      <Select
                        value={formData.consultationType}
                        onValueChange={(value) => setFormData({ ...formData, consultationType: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select consultation type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="visa">Visa Consultation</SelectItem>
                          <SelectItem value="study-abroad">Study Abroad Planning</SelectItem>
                          <SelectItem value="scholarship">Scholarship Guidance</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Preferred Date *</Label>
                      <Input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Time *</Label>
                      <Select
                        value={formData.preferredTime}
                        onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="9am">9:00 AM - 10:00 AM</SelectItem>
                          <SelectItem value="10am">10:00 AM - 11:00 AM</SelectItem>
                          <SelectItem value="11am">11:00 AM - 12:00 PM</SelectItem>
                          <SelectItem value="2pm">2:00 PM - 3:00 PM</SelectItem>
                          <SelectItem value="3pm">3:00 PM - 4:00 PM</SelectItem>
                          <SelectItem value="4pm">4:00 PM - 5:00 PM</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your goals, concerns, or any specific questions you have..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="rounded-xl min-h-[100px]"
                    />
                  </div>

                  {/* Terms */}
                  <div className="flex items-center space-x-2 ">
                    <Checkbox
                      id="terms"
                      className="bg-black"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms of Service and Privacy Policy *
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={!formData.agreeToTerms || isSubmitting}
                    className={`w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 
                      text-white py-3 rounded-xl text-lg font-semibold 
                      ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                  >
                    {isSubmitting ? "Submitting..." : "Book My Consultation"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
