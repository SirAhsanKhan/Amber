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


export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    interestedIn: "",
    studyLevel: "",
    preferredDestination: "",
    budget: "",
    timeline: "",
    currentEducation: "",
    workExperience: "",
    englishProficiency: "",
    previousVisaRejection: "",
    hearAboutUs: "",
    subject: "",
    message: "",
    agreeToTerms: false,
    subscribeNewsletter: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    // Handle form submission here
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
          Get In Touch
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-3xl mb-8"
        >
          Ready to start your international education journey? Contact our expert team for personalized guidance and
          support.
        </motion.p>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Visit Our Office",
              content: "123 Education Street\nNew Delhi, India 110001",
              icon: "🏢",
              color: "purple",
            },
            {
              title: "Call Us",
              content: "+91 98765 43210\n+91 87654 32109",
              icon: "📞",
              color: "green",
            },
            {
              title: "Email Us",
              content: "info@ambereducation.com\nsupport@ambereducation.com",
              icon: "✉️",
              color: "yellow",
            },
          ].map((contact, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="shadow-lg rounded-2xl text-center h-full">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${contact.color}-100 flex items-center justify-center text-2xl`}
                  >
                    {contact.icon}
                  </div>
                  <h3 className={`text-xl font-semibold text-${contact.color}-600 mb-3`}>{contact.title}</h3>
                  <p className="text-gray-600 whitespace-pre-line">{contact.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="shadow-xl rounded-2xl">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-green-600 text-white rounded-t-2xl">
                <CardTitle className="text-2xl text-center">Complete Contact Form</CardTitle>
                <p className="text-center text-white/90 mt-2">
                  Fill out all details to help us provide you with the best guidance
                </p>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Personal Information</h3>
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

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
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

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
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
                        <Label htmlFor="interestedIn">Interested In *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, interestedIn: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="visa-consultation">Visa Consultation</SelectItem>
                            <SelectItem value="study-abroad">Study Abroad Planning</SelectItem>
                            <SelectItem value="scholarship">Scholarship Guidance</SelectItem>
                            <SelectItem value="university-selection">University Selection</SelectItem>
                            <SelectItem value="application-assistance">Application Assistance</SelectItem>
                            <SelectItem value="general-inquiry">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Educational Background */}
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Educational Background</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="studyLevel">Desired Study Level *</Label>
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
                            <SelectItem value="professional">Professional Course</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="preferredDestination">Preferred Destination *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, preferredDestination: value })}>
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
                            <SelectItem value="netherlands">Netherlands</SelectItem>
                            <SelectItem value="new-zealand">New Zealand</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="currentEducation">Current Education Level *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, currentEducation: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select current level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">High School</SelectItem>
                            <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                            <SelectItem value="masters">Master's Degree</SelectItem>
                            <SelectItem value="phd">PhD</SelectItem>
                            <SelectItem value="diploma">Diploma</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="englishProficiency">English Proficiency Test *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, englishProficiency: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select test status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ielts-taken">IELTS - Already Taken</SelectItem>
                            <SelectItem value="toefl-taken">TOEFL - Already Taken</SelectItem>
                            <SelectItem value="pte-taken">PTE - Already Taken</SelectItem>
                            <SelectItem value="planning-ielts">Planning to take IELTS</SelectItem>
                            <SelectItem value="planning-toefl">Planning to take TOEFL</SelectItem>
                            <SelectItem value="planning-pte">Planning to take PTE</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="border-b pb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="budget">Budget Range (USD) *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, budget: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-20k">Under $20,000</SelectItem>
                            <SelectItem value="20k-40k">$20,000 - $40,000</SelectItem>
                            <SelectItem value="40k-60k">$40,000 - $60,000</SelectItem>
                            <SelectItem value="60k-80k">$60,000 - $80,000</SelectItem>
                            <SelectItem value="above-80k">Above $80,000</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timeline">When do you plan to start? *</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="immediate">Immediately</SelectItem>
                            <SelectItem value="3-months">Within 3 months</SelectItem>
                            <SelectItem value="6-months">Within 6 months</SelectItem>
                            <SelectItem value="1-year">Within 1 year</SelectItem>
                            <SelectItem value="2-years">Within 2 years</SelectItem>
                            <SelectItem value="not-sure">Not Sure</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="workExperience">Work Experience</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, workExperience: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select experience" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no-experience">No Experience</SelectItem>
                            <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                            <SelectItem value="1-3-years">1-3 years</SelectItem>
                            <SelectItem value="3-5-years">3-5 years</SelectItem>
                            <SelectItem value="5-plus-years">5+ years</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="previousVisaRejection">Previous Visa Rejection?</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, previousVisaRejection: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="no">No</SelectItem>
                            <SelectItem value="yes-usa">Yes - USA</SelectItem>
                            <SelectItem value="yes-canada">Yes - Canada</SelectItem>
                            <SelectItem value="yes-uk">Yes - UK</SelectItem>
                            <SelectItem value="yes-australia">Yes - Australia</SelectItem>
                            <SelectItem value="yes-other">Yes - Other Country</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="space-y-2">
                        <Label htmlFor="hearAboutUs">How did you hear about us?</Label>
                        <Select onValueChange={(value) => setFormData({ ...formData, hearAboutUs: value })}>
                          <SelectTrigger className="rounded-xl">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="google">Google Search</SelectItem>
                            <SelectItem value="social-media">Social Media</SelectItem>
                            <SelectItem value="friend-referral">Friend Referral</SelectItem>
                            <SelectItem value="advertisement">Advertisement</SelectItem>
                            <SelectItem value="education-fair">Education Fair</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Message Section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-800">Your Message</h3>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Brief subject of your inquiry"
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Detailed Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide detailed information about your goals, concerns, specific questions, or any other relevant details that will help us assist you better..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="rounded-xl min-h-[120px]"
                      />
                    </div>
                  </div>

                  {/* Agreements */}
                  <div className="space-y-4">
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
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.subscribeNewsletter}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, subscribeNewsletter: checked as boolean })
                        }
                      />
                      <Label htmlFor="newsletter" className="text-sm text-gray-600">
                        Subscribe to our newsletter for updates and educational opportunities
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white py-3 rounded-xl text-lg font-semibold"
                    disabled={!formData.agreeToTerms}
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">Weekdays</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <h4 className="font-semibold text-green-600 mb-2">Weekends</h4>
                  <p className="text-gray-600">
                    Saturday: 10:00 AM - 4:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">Emergency consultations available by appointment</p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}
