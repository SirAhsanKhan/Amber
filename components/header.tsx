"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import Link from "next/link"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/amber-logo.png"
              alt="Amber Education Consultants"
              width={50}
              height={50}
              className="rounded-lg"
            />
            <div className="text-primary-foreground">
              <h1 className="text-xl font-bold">AMBER EDUCATION</h1>
              <p className="text-sm opacity-90">CONSULTANTS</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              About
            </Link>
            <Link href="/booking" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Booking
            </Link>
            <Link href="/contact" className="text-primary-foreground hover:text-accent transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* CTA Button - Hidden on mobile */}
          <Button
            className="hidden md:flex bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6"
            size="lg"
          >
            Get Started
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-primary-foreground/20">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                href="/"
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/booking"
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Booking
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
