"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DotGrid from "../components/DotGrid";
import { motion } from "framer-motion";
import { FlaskConical, FileCode2, Settings, ClipboardList } from "lucide-react";

export default function VaseAIPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: FlaskConical,
      title: "Flask-Compatible Syntax",
      description: "Vase uses Pythonic syntax similar to Flask, with fewer lines and no boilerplate."
    },
    {
      icon: FileCode2,
      title: "Minimal Code Output",
      description: "Get fully working apps without bloated files. Vase focuses on clean logic first."
    },
    {
      icon: Settings,
      title: "Modular & Scalable",
      description: "Despite being simple, Vase apps follow modular folder patterns and separation of concerns."
    },
    {
      icon: ClipboardList,
      title: "Auto API Docs",
      description: "All endpoints come with generated docs so you can use or share them instantly."
    }
  ];

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white">
      <DotGrid />
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="pt-[140px] px-6 lg:px-20 pb-10 max-w-6xl mx-auto"
      >
        <h1 className="text-[44px] sm:text-[54px] lg:text-[64px] font-serif mb-6 leading-tight">
          Vase AI<span className="text-gray-400"> —</span><br />
          Flask, but smarter and simpler.
        </h1>
        <p className="text-[#cbcbcbde] text-lg sm:text-xl max-w-3xl font-light leading-relaxed">
          Vase is a minimal web framework inspired by Flask — but trimmed down to only what you need. Perfect for building microservices, APIs, or AI agents that require clean backend logic, fast.
        </p>
      </motion.section>

      {/* Why Vase Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="px-6 lg:px-20 pb-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-serif mb-6">Why Vase over Flask?</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {features.map(({ icon: Icon, title, description }, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="border border-[#333] bg-[#111] hover:border-[#555] rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center">
                  <Icon size={18} className="text-black" />
                </div>
                <h3 className="text-xl font-serif">{title}</h3>
              </div>
              <p className="text-[#cbcbcbde] text-sm font-light">{description}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Flask vs Vase Code Comparison */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 lg:px-20 pb-20 max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-serif mb-6">See the Difference</h2>
        <div className="grid md:grid-cols-2 gap-6 text-sm font-mono bg-[#111] border border-[#333] rounded-xl p-6 overflow-x-auto">
          <div>
            <p className="text-gray-400 mb-2">Flask</p>
            <pre className="text-[#e2e2e2] whitespace-pre-wrap">
{`from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    return "Hello, world!"

if __name__ == "__main__":
    app.run(debug=True)`}
            </pre>
          </div>
          <div>
            <p className="text-gray-400 mb-2">Vase</p>
            <pre className="text-[#e2e2e2] whitespace-pre-wrap">
{`import vase
app = Vase()
def home():
    return "Hello, world!"
app.add("/, home)
vase.run()`}
            </pre>
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-6 lg:px-20 pb-24 max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-br from-[#6b21a8]/20 to-[#1e3a8a]/20 border border-[#333] p-8 sm:p-10 rounded-2xl">
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">
            Start shipping Flask-style backends faster.
          </h2>
          <p className="text-[#cbcbcbde] font-light text-base sm:text-lg mb-6 max-w-2xl">
            Whether you're building microservices or AI-powered tools, Vase helps you skip setup and get straight to the code.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-all duration-300">
            Try Vase Now
          </button>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
