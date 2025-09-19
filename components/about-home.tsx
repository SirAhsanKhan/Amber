"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveHeader from "@/components/responsive-header"



export default function About() {
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
          About Amber Education
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg text-gray-700 max-w-3xl mb-8"
        >
          We are passionate about transforming dreams into reality, connecting ambitious students with world-class
          educational opportunities across 150+ countries.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Amber Education Consultants, we believe in crafting gems of tomorrow. Our mission is to make meaningful
              changes in the world by facilitating global collaboration through education. We connect students with
              opportunities that not only advance their careers but also contribute to global progress.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every student is our top priority. We are reliable, ambitious, and committed to providing personalized
              guidance that opens doors to international success.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-purple-100 to-green-100 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-6 text-center">
              <div>
                <h3 className="text-3xl font-bold text-purple-600">150+</h3>
                <p className="text-gray-600">Countries</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-green-600">10,000+</h3>
                <p className="text-gray-600">Students Helped</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-yellow-600">15+</h3>
                <p className="text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-purple-600">98%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Reliability",
                desc: "We are your trusted partner throughout your educational journey, providing consistent support and guidance.",
                color: "purple",
              },
              {
                title: "Ambition",
                desc: "We share your ambitious dreams and work tirelessly to help you achieve goals that seemed impossible.",
                color: "green",
              },
              {
                title: "Global Vision",
                desc: "Our extensive network across 150+ countries ensures you have access to the best opportunities worldwide.",
                color: "yellow",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="shadow-xl rounded-2xl h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${value.color}-100 flex items-center justify-center`}
                    >
                      <div className={`w-8 h-8 bg-${value.color}-600 rounded-full`}></div>
                    </div>
                    <h3 className={`text-xl font-semibold text-${value.color}-600 mb-4`}>{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Meet Our Expert Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Johnson", role: "Senior Visa Consultant", experience: "12+ years" },
            { name: "Michael Chen", role: "Study Abroad Specialist", experience: "10+ years" },
            { name: "Priya Sharma", role: "Scholarship Advisor", experience: "8+ years" },
          ].map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="shadow-lg rounded-2xl text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-green-400 rounded-full mx-auto mb-4"></div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.experience}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
