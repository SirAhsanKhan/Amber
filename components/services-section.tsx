"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServicesSection() {
  const services = [
    {
      title: "Visa Consultation",
      desc: "Expert guidance through the complex visa application process with personalized support for each country's requirements.",
      color: "purple",
      icon: "🛂",
    },
    {
      title: "University Placement",
      desc: "Find the perfect university match based on your academic goals, budget, and career aspirations across 150+ countries.",
      color: "green",
      icon: "🎓",
    },
    {
      title: "Pre-Departure Guidance",
      desc: "Comprehensive preparation including accommodation, travel arrangements, and cultural orientation for your new journey.",
      color: "yellow",
      icon: "✈️",
    },
  ]

  return (
    <div className="flex flex-col">
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
          Comprehensive support at every step of your international education journey.
        </motion.p>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-10">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="shadow-xl rounded-2xl h-full hover:shadow-2xl transition-shadow">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${service.color}-100 flex items-center justify-center`}
                    >
                      <span className="text-3xl">{service.icon}</span>
                    </div>
                    <h3 className={`text-xl font-semibold text-${service.color}-600 mb-4`}>
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-700 mb-6">
              Ready to take the next step in your educational journey?
            </p>
            <a href="/services">
              <Button className="bg-gradient-to-r from-purple-600 to-green-600 hover:from-purple-700 hover:to-green-700 text-white px-8 py-3 rounded-2xl text-lg shadow-lg">
                Explore All Services
              </Button>
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
