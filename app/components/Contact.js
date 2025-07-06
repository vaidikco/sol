"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ContactSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const webhookUrl =
      "https://discord.com/api/webhooks/1391360740342104094/zIayvSH5hlq3vkIBbd8Wetbhs7TNayrycYMCiOn6GjGyRkl0uoea4ZU46bTkC0CIkxRV";

    try {
      const res = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📝 **New Contact Submission**\n**Name:** ${formData.name}\n**Contact:** ${formData.contact}\n**Message:** ${formData.message}`,
        }),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", contact: "", message: "" });
        setTimeout(() => {
          setShowForm(false);
          setSuccess(false);
        }, 2000);
      } else {
        alert("Something went wrong.");
      }
    } catch {
      alert("Network error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative z-10 px-6 lg:px-20 pb-32 pt-10 max-w-6xl mx-auto"
    >
      <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-[#333] p-10 sm:p-14 rounded-2xl text-left">
        <h2 className="text-4xl font-serif mb-4">Let’s build something stunning.</h2>
        <p className="text-[#cbcbcbde] font-light text-base sm:text-lg mb-6 max-w-2xl">
          Whether you want a custom solution, web app, or advanced AI tool — I can help you get
          started. Drop your idea, and I’ll take it from there.
        </p>
        <button
          onClick={() => setShowForm(true)}
          className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-gray-200 transition-all duration-300"
        >
          Contact Me
        </button>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-[1000]"
          >
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#111] text-white p-8 rounded-2xl max-w-md w-full border border-[#333] relative"
            >
              <button
                onClick={() => setShowForm(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-serif mb-6">Start a Conversation</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  onChange={handleChange}
                  value={formData.name}
                  className="w-full bg-[#1a1a1a] border border-[#444] rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  name="contact"
                  required
                  placeholder="Email or Phone"
                  onChange={handleChange}
                  value={formData.contact}
                  className="w-full bg-[#1a1a1a] border border-[#444] rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                />
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell me what you're building..."
                  onChange={handleChange}
                  value={formData.message}
                  className="w-full bg-[#1a1a1a] border border-[#444] rounded-md px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className={`w-full bg-white text-black px-4 py-2 rounded-md font-medium transition-all ${
                    loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-200"
                  }`}
                >
                  {loading
                    ? "Sending..."
                    : success
                    ? "Sent ✔️"
                    : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
