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

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(() => {
      alert("Your consultation booking has been sent successfully ✅")
    })
    .catch((error) => {
      console.error("EmailJS Error:", error)
      alert("Oops! Something went wrong. Please try again ❌")
    })
}

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <ResponsiveHeader/>
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

      {/* Consultation Types */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Choose Your Consultation Type</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Visa Consultation",
              desc: "Expert guidance on visa requirements and application process",
              duration: "60 minutes",
              price: "Free",
              color: "purple",
            },
            {
              title: "Study Abroad Planning",
              desc: "Comprehensive planning for your international education",
              duration: "90 minutes",
              price: "Free",
              color: "green",
            },
            {
              title: "Scholarship Guidance",
              desc: "Discover and apply for scholarships and financial aid",
              duration: "45 minutes",
              price: "Free",
              color: "yellow",
            },
          ].map((type, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="shadow-lg rounded-2xl h-full hover:shadow-xl transition-shadow">
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${type.color}-100 flex items-center justify-center`}
                  >
                    <div className={`w-8 h-8 bg-${type.color}-600 rounded-full`}></div>
                  </div>
                  <h3 className={`text-xl font-semibold text-${type.color}-600 mb-3`}>{type.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{type.desc}</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Duration: {type.duration}</p>
                    <p className="text-lg font-semibold text-green-600">{type.price}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
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
                  {/* Personal Information */}
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="country">Current Country *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, country: value })}>
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
                      <Label htmlFor="studyDestination">Preferred Study Destination *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, studyDestination: value })}>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="studyLevel">Study Level *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, studyLevel: value })}>
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
                      <Label htmlFor="consultationType">Consultation Type *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, consultationType: value })}>
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="preferredDate">Preferred Date *</Label>
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferredTime">Preferred Time *</Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, preferredTime: value })}>
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

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the Terms of Service and Privacy Policy *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-3 rounded-xl text-lg font-semibold"
                    disabled={!formData.agreeToTerms}
                  >
                    Book My Consultation
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
