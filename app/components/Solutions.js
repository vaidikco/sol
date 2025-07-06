"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const solutions = [
  {
    id: "shipengine",
    title: "Ship Engine Turbo",
    description:
      "An AI coding system that generates stunning Vite and Next.js projects with live code output, powered by Qwen 8B and Gemini split engine.",
    tags: ["AI", "Vite", "Code Engine"],
    link: "/ship",
    category: ["Featured", "AI Tools"]
  },
  {
    id: "vaseai",
    title: "Vase AI",
    description:
      "A web framework deisgned in python to replace flask and to make the syntax of python simpler to work with in webdev.",
    tags: ["AI", "Flask", "Video Gen"],
    link: "/vase",
    category: ["AI Tools"]
  },
  {
    id: "flaskvault",
    title: "vkAuth",
    description:
      "A secure authentication system built in Flask that integrates with Vault for encrypted storage of user credentials and session management.",
    tags: ["Flask", "Vault", "Security"],
    link: "#",
    category: ["Web Development"]
  },
  {
    id: "brandingkit",
    title: "vkLogger",
    description:
      "A logging and monitoring toolkit for python applications, providing real-time insights and error tracking with a simple syntax.",
    tags: ["Logo", "Design", "Brand"],
    link: "#",
    category: ["UI/UX Design", "AI"]
  },
  {
    id: "dashsystem",
    title: "clipifyAI",
    description:
      "Amazing AI tool that generates stunning video clips from text prompts, powered by gemini-2.0 flash.",
    tags: ["AI", "Content", "Video"],
    link: "#",
    category: ["Web Development"]
  },
  {
    id: "mathsim",
    title: "TriangleCAD",
    description:
      "3D triangle renderer and visual math toolkit for a CAD made for designs using Triangles. Integrates canvas editor and Python backend.",
    tags: ["Math", "3D", "Canvas"],
    link: "triangles.vaidik.co",
    category: ["Featured", "Education"]
  }
];

const categories = ["Featured", "AI Tools", "Web Development", "UI/UX Design", "Education"];

export default function SolutionsSection() {
  const [selected, setSelected] = useState("Featured");

  const filtered = selected === "Featured"
    ? solutions
    : solutions.filter(s => s.category.includes(selected));

  return (
    <section className="bg-[#0a0a0a] px-6 sm:px-10 lg:px-20 py-20">
      {/* Header */}
      <div className="max-w-5xl mb-12">
        <p className="text-sm text-[#cbcbcbde] font-light mb-3">Solutions</p>
        <h2 className="text-white font-serif text-4xl sm:text-5xl font-semibold mb-4">
          Real projects we’ve <span className="italic font-light">built for impact.</span>
        </h2>
        <p className="text-[#cbcbcbde] text-base sm:text-lg max-w-2xl font-light">
          From AI code engines to beautiful Flask tools and brand kits — explore what Vaidik builds.
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition ${
              selected === cat
                ? "bg-white text-black"
                : "bg-transparent text-[#cbcbcbde] border-[#333] hover:bg-[#1a1a1a]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl">
        {filtered.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-[#111] border border-[#2e2e2e] rounded-xl p-6 hover:border-[#555] transition-colors group flex flex-col justify-between"
          >
            <div>
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {s.tags.map((tag, idx) => (
                  <span key={idx} className="text-xs px-2 py-1 border border-[#333] rounded-full text-[#cbcbcbde] bg-[#1a1a1a]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-serif text-white font-semibold mb-2 group-hover:text-purple-300">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#cbcbcbde] font-light mb-6 leading-relaxed">
                {s.description}
              </p>
            </div>

            {/* CTA */}
            <div>
              <a
                href={s.link}
                className="text-purple-400 hover:text-purple-300 text-sm font-medium inline-flex items-center gap-2"
              >
                Explore Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
