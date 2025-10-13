"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ResponsiveHeader from "@/components/responsive-header"
import About from "@/components/about-home"
import Contact from "@/components/contact-home"
import Services from "@/components/services-section"
import Footer from "@/components/footer"
import Image from "next/image"




export default function Home() {
  return (
   <div className="min-h-screen flex flex-col">
      {/* Header */}
      <ResponsiveHeader />
<section className="w-full pt-24 pl-5">
  <div>
    <Image
    width={0}
    height={0}
    src="/images/banner.JPG"
    alt="Amber Education Banner"
    className="
      w-full h-auto max-h-[90vh]
      object-cover object-top
      scale-125 sm:scale-110 md:scale-100
      transition-transform duration-500
    "
  />
  </div>
</section>




{/* Country Section -(Flag Icons Above Names) */}
<section id="about" className="max-w-7xl mx-auto py-20 px-6">
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
    {[
      { title: "France", flag: "/images/flags/france.png" },
      { title: "Turkey", flag: "/images/flags/turkey.png" },
      { title: "Sweden", flag: "/images/flags/sweden.png" },
      { title: "Netherlands", flag: "/images/flags/netherlands.png" },
      { title: "Singapore", flag: "/images/flags/singapore.png" },
      { title: "New Zealand", flag: "/images/flags/new-zealand.png" },
      { title: "Australia", flag: "/images/flags/australia.png" },
      { title: "UK", flag: "/images/flags/uk.png" },
      { title: "USA", flag: "/images/flags/usa.png" },
      { title: "Canada", flag: "/images/flags/canada.png" },
    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
      >
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 text-center flex flex-col items-center">
            {/* Flag above name */}
            <div className="w-12 h-8 mb-4 relative">
              <Image
                src={item.flag}
                alt={`${item.title} flag`}
                fill
                className="rounded shadow-sm object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
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

      <Services/>
      <About /> 
      <Contact /> 
      <Footer />

      

    </div>
    

  )
}
