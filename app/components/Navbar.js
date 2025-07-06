"use client";
import React, { useState, useEffect } from "react";
import { Globe } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // 🧠 Dynamic Favicon Render
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#0a0a0a"; // dark background
    ctx.fillRect(0, 0, 64, 64);

    ctx.font = "bold 28px serif";
    ctx.fillStyle = "#ffffff";
    ctx.fillText("vc", 8, 40);

    ctx.fillStyle = "#888888";
    ctx.fillText(".", 50, 40);

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = canvas.toDataURL("image/png");

    // Remove existing favicons
    document.querySelectorAll("link[rel='icon']").forEach((el) => el.remove());

    document.head.appendChild(favicon);
  }, []);

  return (
    <div
      className={`text-white min-w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1
            className="font-serif text-xl cursor-pointer"
            onClick={() => handleNavClick("home")}
          >
            vc <span className="text-gray-400">.</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <ul className="hidden ml-[165px] md:flex items-center gap-8 font-medium text-gray-300">
          {["home", "skills", "pricing", "solutions"].map((item) => (
            <li
              key={item}
              className="hover:text-white cursor-pointer transition-colors capitalize"
              onClick={() => handleNavClick(item)}
            >
              {item === "skills" ? "Our Skills" : item.charAt(0).toUpperCase() + item.slice(1)}
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-gray-300 hover:text-white cursor-pointer transition-colors">
            <Globe size={18} />
            <span className="text-sm">English</span>
            <svg
              className="w-4 h-4"
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

          <button
            className="bg-white text-gray-900 px-4 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors"
            onClick={() => handleNavClick("contact")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
