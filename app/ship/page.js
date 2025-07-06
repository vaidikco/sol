"use client";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DotGrid from "../components/DotGrid";
import { motion } from "framer-motion";
import { Zap, Settings2, Code, Brain } from "lucide-react";

export default function ShipAIEnginePage() {
  useEffect(() => {
    window.scrollTo(0, 0); // scroll to top on load
  }, []);

  return (
    <div className="relative bg-[#0a0a0a] min-h-screen text-white">
      <DotGrid />
      <Navbar />

      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pt-[140px] pb-20 px-6 text-center relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
          <h1 className="font-sans font-semibold italic">ship<span className="font-serif">AI</span></h1> <span className="text-purple-600">Engine</span>
        </h1>
        <p className="text-[#cbcbcbde] text-lg sm:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Your personal AI development companion. Build stunning UIs, full-stack
          apps, and websites powered by Qwen, Gemini, or DeepSeek — all
          automated and stunningly fast.
        </p>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="px-6 pb-20 relative z-10 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Auto Code Generation",
              desc: "Turn prompts into working Vite/Next.js projects. Pages, components, routing — all structured and downloadable.",
              icon: <Code className="text-purple-400" />,
            },
            {
              title: "Multi-Model Smartness",
              desc: "Uses DeepSeek, Qwen, and Gemini to split and generate intelligently — each with defined roles.",
              icon: <Brain className="text-blue-400" />,
            },
            {
              title: "High-Quality UI by Default",
              desc: "Built-in dark theme, serif-sans typography, animated dot grid, and ultra-slick UI components.",
              icon: <Zap className="text-yellow-400" />,
            },
            {
              title: "Downloadable Codebase",
              desc: "Get ready-to-run codebases with working frontend and backend logic — no setup needed.",
              icon: <Settings2 className="text-green-400" />,
            },
            {
              title: "Prompt Splitting Engine",
              desc: "Gemini analyzes intent and splits prompts into file creations or code chunks. No hallucinations.",
              icon: <Zap className="text-pink-400" />,
            },
            {
              title: "Flask + Vite Backend",
              desc: "Driven by a Python backend with file writing, structure detection, and prompt routing built in.",
              icon: <Code className="text-cyan-400" />,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111] border border-[#333] rounded-xl p-6 transition-all group"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-serif text-xl mb-2 group-hover:text-purple-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#cbcbcbde] font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 px-6"
      >
        <p className="text-[#cbcbcbde] text-sm mb-4">Ready to get started?</p>
        <button className="bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-gray-200 transition-all">
          Pre book your AI Engine.
        </button>
      </motion.section>

      <Footer />
    </div>
  );
}
