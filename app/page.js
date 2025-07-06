"use client";
import { Contact, Dot } from "lucide-react";
import Navbar from "./components/Navbar";
import DotGrid from "./components/DotGrid";
import Footer from "./components/Footer";
import TechSlider from "./components/TechSlider";
import { useState } from "react";
import { motion } from "framer-motion";
import SolutionsSection from "./components/Solutions";
import ContactSection from "./components/Contact";

const skillsData = [
  {
    id: "ecommerce",
    icon: "W",
    title: "E-commerce Platform",
    description:
      "vaidik.co creates comprehensive e-commerce solutions with integrated payment systems, real-time inventory, and seamless shopping interfaces.",
    category: ["Featured", "E-commerce"]
  },
  {
    id: "mobile",
    icon: "M",
    title: "Mobile App Development",
    description:
      "From concept to launch, we develop polished apps for iOS and Android focused on performance and intuitive UX.",
    category: ["Featured", "Mobile Apps"]
  },
  {
    id: "uiux",
    icon: "U",
    title: "UI/UX Design Systems",
    description:
      "vaidik.co delivers stunning design systems, ensuring your brand identity is consistent, modern, and user-friendly.",
    category: ["Featured", "UI/UX Design"]
  },
  {
    id: "marketing",
    icon: "D",
    title: "Digital Marketing Suite",
    description:
      "We run high-impact campaigns using SEO, social ads, and analytics to connect you with your audience.",
    category: ["Featured", "Digital Marketing"]
  },
  {
    id: "branding",
    icon: "L",
    title: "Logo & Branding Design",
    description:
      "vaidik.co crafts timeless logos and complete brand identities that set you apart in a crowded market.",
    category: ["UI/UX Design"]
  },
  {
    id: "webdev",
    icon: "W",
    title: "Custom Website Development",
    description:
      "We design and build high-performing websites tailored to your business needs with speed and aesthetics.",
    category: ["Web Development"]
  },
  {
    id: "banners",
    icon: "B",
    title: "Banners & Visual Assets",
    description:
      "Our creative team produces eye-catching banners and visuals that elevate your online and offline presence.",
    category: ["UI/UX Design"]
  },
  {
    id: "software",
    icon: "S",
    title: "Software Solutions",
    description:
      "We build powerful software tools—from CRMs to automation dashboards—to streamline your business.",
    category: ["Web Development"]
  }
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("Featured");

  const filteredSkills = selectedCategory === "Featured"
    ? skillsData
    : skillsData.filter(skill => skill.category.includes(selectedCategory));

  const categories = [
    "Featured",
    "Web Development",
    "Mobile Apps",
    "E-commerce",
    "UI/UX Design",
    "Digital Marketing"
  ];

  return (
    <div className="relative overflow-visible bg-[#0a0a0a] min-h-screen">
      <DotGrid />
      <Navbar />
      
      {/* Hero Section */}
      <motion.main
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col items-center justify-center relative z-10 px-4 sm:px-6 lg:px-8"
      >
        <h1 className="pt-[120px] sm:pt-[140px] lg:pt-[175px] text-[32px] sm:text-[42px] md:text-[50px] lg:text-[60px] m-0 font-serif text-center">
          Create Beyond Limits.
        </h1>
        <p className="text-[16px] sm:text-[18px] lg:text-[20px] mt-0 font-sans font-light text-[#cbcbcbde] text-center max-w-[90vw] sm:max-w-[70vw] lg:max-w-[50vw] leading-relaxed">
          Providing digital experiences which inspire. We at vaidik.co specialise in websites, logos, software, and tech solutions tailored to your vision.
        </p>
        <div className="mt-8 sm:mt-10 lg:mt-12 w-[90vw] sm:w-[85vw] lg:w-[80vw] p-2 sm:p-4 flex justify-center items-center rounded-lg">
          <img src="/3.png" className="w-full max-w-[90vw] sm:max-w-[70vw] lg:max-w-[60vw] rounded-lg sm:rounded-xl lg:rounded-2xl" />
        </div>
        <div id="lamp1"></div>
        <div id="lamp2"></div>
      </motion.main>

      {/* Skills Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col min-h-screen items-center justify-center mt-12 sm:mt-16 lg:mt-20 px-4 sm:px-6 lg:px-8 pb-4"
      >
        <div className="text-center mb-12 sm:mb-14 lg:mb-16">
          <p className="text-[#cbcbcbde] text-sm font-light mb-4">Our Skills</p>
          <h1 className="font-serif font-semibold text-2xl sm:text-3xl lg:text-5xl mb-4 sm:mb-6 px-2">
            Our skills make us <span className="italic font-light">different.</span>
          </h1>
          <p className="text-[#cbcbcbde] text-base sm:text-lg font-light max-w-xs sm:max-w-lg lg:max-w-2xl mx-auto px-2 leading-relaxed">
            Learn how vaidik.co handles real-world projects by discovering our skills in various fields.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 lg:mb-12 px-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
                selectedCategory === cat 
                  ? 'bg-white text-black' 
                  : 'bg-transparent text-[#cbcbcbde] border-[#333] hover:bg-[#1a1a1a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-7xl w-full"
        >
          {filteredSkills.map(({ id, icon, title, description }) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.03 }}
              className="bg-[#111111] border border-[#333] rounded-lg overflow-hidden hover:border-[#555] transition-colors group min-h-[240px] sm:min-h-[260px] flex flex-col"
            >
              <div className="p-4 sm:p-6 flex-1">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-gray-200 transition-colors">
                  <span className="text-black font-bold text-xs sm:text-sm">{icon}</span>
                </div>
                <h3 className="text-white font-semibold text-base sm:text-lg mb-2 font-serif leading-tight">
                  {title}
                </h3>
                <p className="text-[#cbcbcbde] text-sm font-light leading-relaxed">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
        className="min-h-screen flex flex-col items-center justify-center relative py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl mb-4 sm:mb-6 text-white">
            A price for <span className="font-light italic">everyone</span>
          </h1>
          <p className="text-[#cbcbcbde] text-base sm:text-lg font-light max-w-xs sm:max-w-lg mx-auto leading-relaxed">
            Three packages to choose from, we'll name 'em.<br />
            You pick a price that fits your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full">
          {/* Basic Zen */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-[#111111] border border-[#333] rounded-xl p-6 sm:p-8 hover:border-[#555] transition-colors group"
          >
            <div className="text-center mb-6">
              <h3 className="text-white font-serif text-xl sm:text-2xl mb-2">Basic Zen</h3>
              <div className="text-white text-3xl sm:text-4xl font-bold mb-1">₹500</div>
              <p className="text-[#cbcbcbde] text-sm">One-time payment</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">1 Landing page using Template</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Basic Logos and Banners</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Responsive Design</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">1 month Maintenance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">2 Free Revisions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">48h Delivery</p>
              </div>
            </div>
          </motion.div>

          {/* Pro Monk - Most Popular */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-purple-900/20 to-purple-800/20 border border-purple-600/50 rounded-xl p-6 sm:p-8 hover:border-purple-500/70 transition-colors group relative"
          >
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-purple-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                MOST POPULAR
              </span>
            </div>
            <div className="text-center mb-6">
              <h3 className="text-white font-serif text-xl sm:text-2xl mb-2">Pro Monk</h3>
              <div className="text-white text-3xl sm:text-4xl font-bold mb-1">₹1300</div>
              <p className="text-[#cbcbcbde] text-sm">One-time payment</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Fully Custom Website upto 5 Pages</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Full Branding Package</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Logo + Complete Brand Kit</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">10 Free Revisions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">7-day Priority Delivery</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Premium Design and Support</p>
              </div>
            </div>
          </motion.div>

          {/* VK Supreme */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-b from-amber-900/20 to-orange-900/20 border border-amber-600/50 rounded-xl p-6 sm:p-8 hover:border-amber-500/70 transition-colors group"
          >
            <div className="text-center mb-6">
              <h3 className="text-white font-serif text-xl sm:text-2xl mb-2">VK Supreme</h3>
              <div className="text-white text-3xl sm:text-4xl font-bold mb-1">₹1700</div>
              <p className="text-[#cbcbcbde] text-sm">One-time payment</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Fully Custom Website</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Professional Copywriting</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Everything in Pro Monk</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Priority Support & Hosting</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Advanced Analytics Setup</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">3-Month Free Maintenance</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">30 Revisions</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#cbcbcbde] text-sm">Free Advertising Consultation and Setup</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
      
      <SolutionsSection />
      <ContactSection/>
      <Footer />
    </div>
  );
}