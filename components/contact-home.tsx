"use client"

import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveHeader from "@/components/responsive-header"

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <ResponsiveHeader />

      {/* HERO */}
      <section className="flex flex-col justify-center items-center text-center bg-gradient-to-r from-green-200 via-purple-200 to-yellow-100 pt-32 pb-20 px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold text-gray-800 mb-6"
        >
          Get In Touch
        </motion.h1>

        <p className="text-lg text-gray-700 max-w-2xl mb-6">
          Ready to start your international education journey? Contact our expert team instantly.
        </p>

        <a
          href="https://wa.me/923220303474"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg"
        >
          💬 Chat on WhatsApp
        </a>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        <Card className="shadow-lg rounded-2xl text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-purple-100 flex items-center justify-center text-2xl">
              🏢
            </div>
            <h3 className="text-xl font-semibold text-purple-600 mb-3">Visit Our Office</h3>
            <p className="text-gray-600">
              Office No. 13C, Mara Apartment, Ground Floor, Gulshan-e-Iqbal, Karachi
            </p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center text-2xl">
              📞
            </div>
            <h3 className="text-xl font-semibold text-green-600 mb-3">Call Us</h3>
            <p className="text-gray-600">+92 3220303474</p>
          </CardContent>
        </Card>

        <Card className="shadow-lg rounded-2xl text-center">
          <CardContent className="p-6">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-yellow-100 flex items-center justify-center text-2xl">
              ✉️
            </div>
            <h3 className="text-xl font-semibold text-yellow-600 mb-3">Email Us</h3>
            <p className="text-gray-600">info.amberconsultants@gmail.com</p>
          </CardContent>
        </Card>
      </section>

      {/* OFFICE HOURS */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <Card className="shadow-lg rounded-2xl">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Office Hours</h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-purple-600 mb-2">Weekdays</h4>
                <p className="text-gray-600">Monday – Friday: 10:00 AM – 8:00 PM</p>
              </div>

              <div>
                <h4 className="font-semibold text-green-600 mb-2">Weekends</h4>
                <p className="text-gray-600">
                  Saturday: 11:00 AM – 8:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* STRONG CTA */}
      <section className="pb-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Need Quick Guidance?</h3>
        <p className="text-gray-600 mb-6">Our consultants are available on WhatsApp for instant support.</p>

        <a
          href="https://wa.me/923220303474"
          target="_blank"
          className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full shadow-lg text-lg"
        >
          💬 Start Chat Now
        </a>
      </section>
    </div>
  )
}
