"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import Header from "@/components/responsive-header"

export default function ServicesPage() {
  const services = [
    {
      title: "Personalized Counselling",
      desc: "We offer one-to-one counselling sessions to help you choose the best courses and universities that match your goals, budget, and aspirations. Our expert team ensures every student receives tailored advice to achieve success abroad.",
      icon: "🧭",
      color: "purple",
    },
    {
      title: "Admission Assistance",
      desc: "From selecting the right college to completing your application, we guide you through every step. We help you craft strong Statements of Purpose, Recommendation Letters, and other documents that enhance your admission chances.",
      icon: "🎓",
      color: "green",
    },
    {
      title: "Visa Guidance & Support",
      desc: "Our experienced consultants simplify the visa process for every destination country. We help prepare all required documents, schedule visa appointments, and conduct mock interviews to ensure complete readiness for consulate interviews.",
      icon: "🛂",
      color: "yellow",
    },
    {
      title: "IELTS Training",
      desc: "Our IELTS training program equips you with the skills to achieve your target score. With expert faculty and structured weekend and weekday batches, we provide comprehensive practice sessions and personalized feedback.",
      icon: "🗣️",
      color: "purple",
    },
    {
      title: "Pre-Departure Briefing",
      desc: "Before you leave, we prepare you for your new journey — from accommodation and university orientation to insurance, clothing, and cultural guidance. You’ll know exactly what to expect before arriving.",
      icon: "🧳",
      color: "green",
    },
    {
      title: "Travel, Forex & Insurance",
      desc: "We assist students in booking affordable air tickets, arranging foreign exchange, and obtaining suitable health insurance. Our aim is to make your travel and transition smooth, safe, and worry-free.",
      icon: "✈️",
      color: "yellow",
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
    <Header />
      {/* Hero Section */}
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-200 via-purple-200 to-yellow-100 pt-32 pb-20">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-3xl mb-8"
        >
          End-to-end guidance for your global education journey — from counselling to campus arrival.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.15 }}
          >
            <Card className="shadow-xl rounded-2xl hover:shadow-2xl transition-shadow bg-white h-full">
              <CardContent className="p-8 text-center">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}-100 flex items-center justify-center`}
                >
                  <span className="text-3xl">{service.icon}</span>
                </div>
                <h3 className={`text-xl font-semibold text-${service.color}-600 mb-4`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {service.desc}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-10 mb-20"
      >
        <p className="text-lg text-gray-700 mb-6">
          Ready to begin your study abroad journey with Amber Education?
        </p>
        <a href="/booking">
          <Button className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-8 py-3 rounded-2xl text-lg shadow-lg">
            Get a Free Consultation
          </Button>
        </a>
      </motion.div>
      <Footer/>
    </div>
  )
}

  

