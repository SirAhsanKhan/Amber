"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveHeader from "@/components/responsive-header"
import About from "@/components/about-home"
import Contact from "@/components/contact-home"
import Booking from "@/components/booking-home"
import Image from "next/image"




export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
      {/* Header */}
      <ResponsiveHeader />
{/* Hero Section */}
<section className="relative flex flex-col justify-center items-center text-center flex-grow bg-gradient-to-r from-green-200 via-purple-200 to-yellow-100 pt-32 pb-20 overflow-hidden">

  {/* Content */}
  <motion.h1
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="relative text-4xl md:text-6xl font-bold text-gray-800 mb-6"
  >
    Crafting Gems of Tomorrow
  </motion.h1>

  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="relative text-lg text-gray-700 max-w-2xl mb-8"
  >
    Guiding ambitious students towards success in 150+ countries. Reliable, trusted, and always your first choice.
  </motion.p>

  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.8 }}
    className="relative flex space-x-4"
  >
    <a href="/booking">
      <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-2xl shadow-lg">
        Get Consultation
      </Button>
    </a>
    <Button className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-2xl shadow-lg">
      Explore Countries
    </Button>
  </motion.div>
</section>

      {/* Country Section */}
<section id="about" className="max-w-7xl mx-auto py-20 px-6">
  
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {[
      { title: "France" },
      { title: "Turkey" },
      { title: "Sweden" },
      { title: "Netherlands" },
      { title: "Singapore" },
      { title: "New Zealand" },
      { title: "Australia" },
      { title: "UK" },
      { title: "USA" },
      { title: "Canada" },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
      >
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center">
            <h3 className="text-xl font-semibold text-purple-600 mb-3">
              {item.title}
            </h3>
          </CardContent>
        </Card>
      </motion.div>
    ))}
  </div>
</section>

      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Why Students Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Reliable", desc: "Trusted partner for thousands of students worldwide." },
            { title: "Ambitious", desc: "We aim to create global leaders through education." },
            { title: "Global Reach", desc: "Collaboration with 150+ countries for opportunities." },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
            >
              <Card className="shadow-xl rounded-2xl">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-purple-600 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {["Visa Consultancy", "Study Abroad Guidance", "Scholarship Assistance"].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
              >
                <Card className="shadow-lg hover:shadow-2xl transition rounded-2xl">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-green-600 mb-3">{service}</h3>
                    <p className="text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About /> 
      <Booking /> 
      <Contact /> 

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
