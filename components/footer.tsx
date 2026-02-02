import { FaFacebookF, FaInstagram } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-10 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div className="text-left max-w-sm">
          <h3 className="text-xl font-bold mb-3">
            Amber Education Consultants
          </h3>
          <p className="text-sm">
            Guiding students towards global success.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/booking" className="hover:underline">Booking</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h4 className="font-semibold mb-3">Connect With Us</h4>
          <div className="flex space-x-4 text-xl">
            <a
              href="https://www.facebook.com/share/1BNjeNGv74/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://www.instagram.com/amber.consultants?igsh=a3JiZHc2bHJjaXQ5&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-pink-600 hover:bg-pink-700 text-white p-3 rounded-full transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="text-center text-xs text-gray-200 mt-8">
        © {new Date().getFullYear()} Amber Education Consultants. All Rights Reserved.
      </div>
    </footer>
  )
}
