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
    <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
      Our Core Values
    </h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          title: "Reliability",
          desc: "We are your trusted partner throughout your educational journey, providing consistent support and guidance.",
          colorClasses: {
            outer: "bg-purple-100",
            inner: "bg-purple-600",
            text: "text-purple-600",
          },
        },
        {
          title: "Ambition",
          desc: "We share your ambitious dreams and work tirelessly to help you achieve goals that seemed impossible.",
          colorClasses: {
            outer: "bg-green-100",
            inner: "bg-green-600",
            text: "text-green-600",
          },
        },
        {
          title: "Global Vision",
          desc: "Our extensive network across 150+ countries ensures you have access to the best opportunities worldwide.",
          colorClasses: {
            outer: "bg-yellow-100",
            inner: "bg-yellow-600",
            text: "text-yellow-600",
          },
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
                className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${value.colorClasses.outer}`}
              >
                <div
                  className={`w-8 h-8 rounded-full ${value.colorClasses.inner}`}
                ></div>
              </div>
              <h3 className={`text-xl font-semibold mb-4 ${value.colorClasses.text}`}>
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{value.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-green-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white mb-6"
          >
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-white/90 mb-8 text-lg"
          >
            Join thousands of successful students who trusted us with their dreams.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
          <a href="/booking">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3 rounded-2xl shadow-lg">
             Book Consultation
          </Button>
              </a>
          <a href= "/contact">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-3 rounded-2xl shadow-lg">
              Contact Us
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-700 text-white py-10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-3">Amber Education Consultants</h3>
            <p className="text-sm">Crafting Gems of Tomorrow. Guiding students towards global success.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/booking" className="hover:underline">
                  Booking
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Connect With Us</h4>
            <p className="text-sm">Facebook | Instagram | LinkedIn</p>
          </div>
        </div>
        <div className="text-center text-xs text-gray-200 mt-6">
          © {new Date().getFullYear()} Amber Education Consultants. All Rights Reserved.
        </div>
      </footer>
    </div>
  )
}
