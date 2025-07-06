"use client"
import React from 'react'
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'

const Footer = () => {
  const handleNavClick = (section) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="w-full bg-[#0a0a0a] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="flex flex-col">
            <h1 className="font-serif text-2xl cursor-pointer" onClick={() => handleNavClick('home')}>
              vc <span className="text-gray-400">.</span>
            </h1>
            <p className="text-gray-400 text-sm mt-4 max-w-xs leading-relaxed">
              Beautiful apps and AI engines crafted by Vaidik K.
            </p>
          </div>

          {/* Quicklinks */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Quicklinks</h3>
            <ul className="font-sans space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick('home')}>Home</li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick('pricing')}>Pricing</li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick('skills')}>About</li>
              <li className="hover:text-white cursor-pointer" onClick={() => handleNavClick('contact')}>Contact</li>
              <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Socials</h3>
            <ul className="font-sans space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Discord</li>
              <li className="hover:text-white cursor-pointer">GitHub</li>
              <li className="hover:text-white cursor-pointer">Instagram</li>
            </ul>
          </div>

          {/* Other */}
          <div>
            <h3 className="font-serif text-lg mb-4 text-white">Other</h3>
            <ul className="font-sans space-y-3 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">blynkerr</li>
              <li className="hover:text-white cursor-pointer">pars</li>
              <li className="hover:text-white cursor-pointer">hrax</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <h1 className="font-serif font-light text-sm">vaidik.co</h1>
          <h2 className="font-serif font-light text-sm text-gray-500">by Vaidik K</h2>
        </div>
      </div>
    </footer>
  )
}

export default Footer
