"use client";
import React, { useState, useEffect } from "react";
import { Globe, Menu, X, ExternalLink } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    if (section === "product") {
      // Redirect to hero/landing section
      window.open("https://sonnetsoflove.shop/", "_blank", "noopener,noreferrer");
    } else if (section === "author") {
      // Redirect to Instagram
      window.open("https://sonnetsoflove.shop/about", "_blank", "noopener,noreferrer");
    } else if (section === "purchase") {
      // Redirect to purchase section
      const element = document.getElementById("purchase");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Default behavior for other sections
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    
    // Close mobile menu after navigation
    setMobileMenuOpen(false);
  };

  // 🧠 Dynamic Favicon Render
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#0a1403"; // Match site background
    ctx.fillRect(0, 0, 64, 64);

    ctx.font = "bold 24px serif";
    ctx.fillStyle = "#FFD700"; // Golden color
    ctx.fillText("SL", 8, 38);

    ctx.fillStyle = "#a68d00";
    ctx.fillText(".", 48, 38);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = canvas.toDataURL("image/png");

    // Remove existing favicons
    document.querySelectorAll("link[rel='icon']").forEach((el) => el.remove());

    document.head.appendChild(favicon);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-gradient-to-r from-[#0a1403]/95 via-[#0d1805]/95 to-[#081202]/95 backdrop-blur-md border-b border-[#FFD700]/20" 
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo - Left Side */}
            <div className="flex items-center flex-shrink-0">
              <button
                onClick={() => handleNavClick("home")}
                className="flex items-center gap-2 sm:gap-3 group transition-all duration-300"
              >
                <img 
                  src="gg-1.png" 
                  alt="Sonnets of Love Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-transform duration-300 group-hover:scale-105"
                />
          
              </button>
            </div>

            {/* Center Navigation - Desktop Only */}
            <div className="hidden md:flex items-center justify-center flex-1 max-w-md mx-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <button
                  onClick={() => handleNavClick("product")}
                  className="px-3 py-2 text-sm lg:text-base text-[#dcd7ba]/80 hover:text-[#FFD700] transition-all duration-300 font-medium rounded-lg hover:bg-[#FFD700]/10"
                >
                  Product
                </button>
                <button
                  onClick={() => handleNavClick("author")}
                  className="px-3 py-2 text-sm lg:text-base text-[#dcd7ba]/80 hover:text-[#FFD700] transition-all duration-300 font-medium rounded-lg hover:bg-[#FFD700]/10 flex items-center gap-1"
                >
                  Author
                  <ExternalLink size={14} className="opacity-60" />
                </button>
              </div>
            </div>

            {/* Right Side - Language & Buy Now */}
            <div className="flex items-center gap-3 sm:gap-4 flex-shrink-0">
              {/* Language Selector - Desktop */}
              <div className="hidden md:flex items-center gap-2 text-[#dcd7ba]/60 hover:text-[#FFD700] cursor-pointer transition-colors duration-300 group">
                <Globe size={16} />
                <span className="text-sm font-medium">EN</span>
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>

              {/* Buy Now Button - Desktop */}
              <button
                onClick={() => handleNavClick("purchase")}
                className="hidden md:block bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold text-sm lg:text-base hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Buy Now
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#dcd7ba] hover:text-[#FFD700] transition-colors duration-300 rounded-lg hover:bg-[#FFD700]/10"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X size={24} />
                ) : (
                  <Menu size={24} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          ></div>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu-container fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gradient-to-br from-[#1a3008]/95 to-[#0e1a05]/95 backdrop-blur-xl border-l border-[#FFD700]/30 transform transition-all duration-300 ease-in-out z-50 md:hidden ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-[#FFD700]/20">
            <div className="flex items-center gap-3">
              <img 
                src="gg-1.png" 
                alt="Sonnets of Love Logo"
                className="w-10 h-10"
              />
              <h2 className="font-serif text-lg text-[#FFD700]">Menu</h2>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[#dcd7ba] hover:text-[#FFD700] transition-colors duration-300 rounded-lg hover:bg-[#FFD700]/10"
            >
              <X size={20} />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex-1 px-6 py-8">
            <div className="space-y-2">
              <button
                onClick={() => handleNavClick("product")}
                className="w-full text-left px-4 py-3 text-[#dcd7ba]/80 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300 rounded-lg font-medium flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-[#FFD700]/60 rounded-full"></span>
                Product
              </button>
              
              <button
                onClick={() => handleNavClick("author")}
                className="w-full text-left px-4 py-3 text-[#dcd7ba]/80 hover:text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-300 rounded-lg font-medium flex items-center gap-3"
              >
                <span className="w-2 h-2 bg-[#FFD700]/60 rounded-full"></span>
                Author
                <ExternalLink size={16} className="opacity-60 ml-auto" />
              </button>
            </div>

            {/* Language Selector in Mobile */}
            <div className="mt-8 pt-6 border-t border-[#FFD700]/20">
              <div className="flex items-center gap-3 px-4 py-3 text-[#dcd7ba]/60 rounded-lg">
                <Globe size={18} />
                <span className="text-sm font-medium">Language: English</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Footer */}
          <div className="p-6 border-t border-[#FFD700]/20">
            <button
              onClick={() => handleNavClick("purchase")}
              className="w-full bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-6 py-3 rounded-full font-semibold text-base hover:shadow-lg hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Buy Now
              <span className="text-lg">→</span>
            </button>
            
            <p className="text-center text-[#dcd7ba]/60 text-xs mt-4">
              Get your copy of Sonnets of Love
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;