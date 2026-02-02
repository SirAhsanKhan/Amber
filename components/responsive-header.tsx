"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ResponsiveHeader() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/booking", label: "Booking" },
    { href: "/contact", label: "Contact" },
    { href: "/services", label: "Services" },
  ]

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <a href="/">
       <div className="flex items-center space-x-3">
        <Image
          src="/images/amber-logo.png"
          alt="Amber Education Logo"
          width={40}
          height={40}
          className="rounded-full"
        />

        <div className="flex flex-col leading-tight">
          <span className="font-bold text-xl text-gray-800">
          Amber Consultants
          </span>
          <span className="text-sm italic text-gray-500">
          Crafting Gems of Tomorrow
          </span>
        </div>
      </div>

        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-purple-600 transition-colors duration-200">
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-6 mt-8">
              <div className="flex items-center space-x-3 pb-4 border-b">
                <Image
                  src="/images/amber-logo.png"
                  alt="Amber Education Logo"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <span className="font-bold text-lg text-gray-800">Amber Education</span>
              </div>

              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-gray-700 hover:text-purple-600 transition-colors duration-200 py-2"
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <div className="pt-6 border-t">
      <Link href="/booking">
           <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                Get Consultation
          </Button>
              </Link>
                  </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
