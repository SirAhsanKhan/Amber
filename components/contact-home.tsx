"use client"

import type React from "react"
import { color, motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

        {/* WhatsApp CTA (page-level is OK) */}
        <a
          href="https://wa.me/923291406836?text=Hello%20Amber%20Consultants,%20I%20would%20like%20to%20get%20guidance%20for%20study%20abroad."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-lg transition text-lg"
        >
          💬 Chat on WhatsApp
        </a>
      </section>

      {/* Contact Information */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: "Visit Our Office",
              content: "Office No. 13C,Mara Apartment, Ground Floor,Gulshan-e-Iqbal, Block 13D-1, Umrao Tariq Road, Karachi, Pakistan,75300",
              icon: "🏢",
              color: "purple",
            },
            {
              title: "Call Us",
              content: "+92 329 1406836",
              icon: "📞",
              color: "green",
            },
            {
              title: "Email Us",
              content: "info.amberconsultants@gmail.com",
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

      {/* Office Hours */}
      <section className="max-w-7xl mx-auto py-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="shadow-lg rounded-2xl">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Office Hours
              </h3>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-purple-600 mb-2">
                    Weekdays
                  </h4>
                  <p className="text-gray-600">
                    Monday – Friday: 10:00 AM – 8:00 PM
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-green-600 mb-2">
                    Weekends
                  </h4>
                  <p className="text-gray-600">
                    Saturday: 11:00 AM – 8:00 PM
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </section>
      </div>
      )
    }


