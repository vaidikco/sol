"use client";
import Navbar from "./components/Navbar";
import DotGrid from "./components/DotGrid";
import { useState, useEffect } from "react";
import { User, MapPin, Phone, Mail, CreditCard, Check, ArrowLeft, Send, ExternalLink, Heart, BookOpen, Star } from "lucide-react";
import AboutAuthor from "./components/AboutAuthor";
import ProductGallery from "./components/ProductGallery";

const skillsData = [/* your skillsData as before */];

// Footer Component
const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-[#0a1403] via-[#0d1805] to-[#081202] border-t border-[#FFD700]/20">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-[#FFD700]/5 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/3 w-24 h-24 bg-[#a68d00]/5 rounded-full blur-xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-serif text-2xl sm:text-3xl text-[#FFD700] mb-4">
              Sonnets of Love
            </h3>
            <p className="text-[#dcd7ba]/80 text-sm sm:text-base leading-relaxed mb-6">
              A collection of unrequited love sonnets, crafted with classical elegance and modern sensitivity.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[#FFD700]">
                <BookOpen size={16} />
                <span className="text-sm">74 Pages</span>
              </div>
              <div className="flex items-center gap-2 text-[#FFD700]">
                <Heart size={16} />
                <span className="text-sm">11 Sonnets</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg text-[#FFD700] mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-[#dcd7ba]/80 hover:text-[#FFD700] transition-all duration-200 text-sm sm:text-base flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => window.location.href = 'https://www.instagram.com/sanctuaryofkk'}
                  className="text-[#dcd7ba]/80 hover:text-[#FFD700] transition-all duration-200 text-sm sm:text-base flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Instagram
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('purchase')}
                  className="text-[#dcd7ba]/80 hover:text-[#FFD700] transition-all duration-200 text-sm sm:text-base flex items-center gap-2 group"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                  Purchase
                </button>
              </li>
            </ul>
          </div>

          {/* Book Info */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg text-[#FFD700] mb-4">Book Details</h4>
            <ul className="space-y-3 text-[#dcd7ba]/80">
              <li className="flex justify-between text-sm sm:text-base">
                <span>Format:</span>
                <span className="text-[#FFD700]">Hard Cover</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span>Pages:</span>
                <span className="text-[#FFD700]">74</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span>Price:</span>
                <span className="text-[#FFD700]">Rs.650</span>
              </li>
              <li className="flex justify-between text-sm sm:text-base">
                <span>Shipping:</span>
                <span className="text-[#FFD700]">Rs.50</span>
              </li>
            </ul>
          </div>

          {/* Contact & Features */}
          <div className="col-span-1">
            <h4 className="font-semibold text-lg text-[#FFD700] mb-4">Features</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#dcd7ba]/80 text-sm sm:text-base">
                <Star size={16} className="text-[#FFD700]" />
                Classical Poetry
              </li>
              <li className="flex items-center gap-2 text-[#dcd7ba]/80 text-sm sm:text-base">
                <Heart size={16} className="text-[#FFD700]" />
                Emotional Journey
              </li>
              <li className="flex items-center gap-2 text-[#dcd7ba]/80 text-sm sm:text-base">
                <BookOpen size={16} className="text-[#FFD700]" />
                Premium Quality
              </li>
              <li className="flex items-center gap-2 text-[#dcd7ba]/80 text-sm sm:text-base">
                <Mail size={16} className="text-[#FFD700]" />
                COD Available
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFD700]/20 mb-6"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-[#dcd7ba]/60 text-xs sm:text-sm text-center sm:text-left">
            © 2024 Sonnets of Love. All rights reserved.
          </div>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm">
            <span className="text-[#dcd7ba]/60">Site by</span>
            <a 
              href="https://vaidik.co" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#FFD700] hover:text-[#FFD700]/80 transition-colors duration-200 flex items-center gap-1 font-medium"
            >
              vaidik.co
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-4 left-4 text-[#FFD700]/10 text-2xl animate-pulse">❦</div>
        <div className="absolute top-4 right-4 text-[#a68d00]/10 text-xl animate-pulse" style={{animationDelay: '1s'}}>✧</div>
      </div>
    </footer>
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');
  
  // Purchase form states
  const [purchaseStep, setPurchaseStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    quantity: 1
  });

  useEffect(() => {
    setIsLoaded(true);
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitOrder = async () => {
    setIsSubmitting(true);
    
    // Discord webhook URL - Replace with your actual webhook URL
    const webhookUrl = "https://discord.com/api/webhooks/1399023042314768424/XTpukSQGl0vHSG-lAGFXk3L3JP-0I4B029kTaebJZCvVimTgxqcKtN0Rm-REvK3AApHX";
    
    const orderData = {
      embeds: [{
        title: "📚 New Book Order - Sonnets of Love",
        color: 0xFFD700,
        fields: [
          { name: "📝 Customer Name", value: formData.fullName, inline: true },
          { name: "📧 Email", value: formData.email, inline: true },
          { name: "📱 Phone", value: formData.phone, inline: true },
          { name: "📍 Address", value: formData.address, inline: false },
          { name: "🏙️ City", value: formData.city, inline: true },
          { name: "🗺️ State", value: formData.state, inline: true },
          { name: "📮 ZIP Code", value: formData.zipCode, inline: true },
          { name: "🌍 Country", value: formData.country, inline: true },
          { name: "📚 Quantity", value: formData.quantity.toString(), inline: true },
          { name: "💰 Total", value: `Rs${(700 * formData.quantity).toFixed(2)}`, inline: true }
        ],
        timestamp: new Date().toISOString(),
        footer: {
          text: "Sonnets of Love Order System"
        }
      }]
    };

    try {
      if (webhookUrl !== "YOUR_DISCORD_WEBHOOK_URL_HERE") {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(orderData)
        });
      }
      
      setOrderSubmitted(true);
      setPurchaseStep(3);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('There was an error submitting your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-[#0a1403] via-[#0d1805] to-[#081202] min-h-screen text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 h-48 sm:w-96 sm:h-96 bg-[#FFD700]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-40 h-40 sm:w-80 sm:h-80 bg-[#a68d00]/5 rounded-full blur-2xl sm:blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-[#FFD700]/3 rounded-full blur-xl sm:blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Interactive cursor glow */}
      {!isMobile && (
        <div 
          className="fixed w-64 h-64 sm:w-96 sm:h-96 bg-[#FFD700]/10 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-10 transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - (isMobile ? 128 : 192),
            top: mousePosition.y - (isMobile ? 128 : 192),
          }}
        ></div>
      )}

      <DotGrid />
      <Navbar />

      {/* Floating decorative elements */}
      <div
        className="absolute top-1/4 right-1/4 text-[#FFD700]/15 sm:text-[#FFD700]/20 text-3xl sm:text-4xl lg:text-6xl animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      >
        ❦
      </div>
      <div
        className="absolute bottom-1/3 left-1/6 text-[#a68d00]/15 sm:text-[#a68d00]/20 text-2xl sm:text-3xl lg:text-4xl animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      >
        ✧
      </div>
      <div
        className="absolute top-1/3 left-1/12 text-[#FFD700]/10 sm:text-[#FFD700]/15 text-3xl sm:text-4xl lg:text-5xl animate-bounce"
        style={{ animationDelay: "3s", animationDuration: "5s" }}
      >
        ◊
      </div>

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen flex justify-center items-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8">
        <div
          className={`w-full sm:w-[90%] lg:w-[82%] max-w-5xl transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative bg-gradient-to-br from-[#1a3008]/60 to-[#0e1a05]/60 backdrop-blur-xl border border-[#FFD700]/30 shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#a68d00]/5"></div>

            <div className="relative flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-12">
              {/* Left Side - Text Content */}
              <div className="flex-1 space-y-4 sm:space-y-5 text-center lg:text-left">
                <div className="overflow-hidden">
                  <p
                    className={`text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#FFD700]/80 font-medium transition-all duration-1000 delay-300 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                  >
                    ✦ A Literary Collection ✦
                  </p>
                </div>

                <div className="overflow-hidden">
                  <h1
                    className={`font-serif text-[#FFD700] mb-2 sm:mb-3 leading-[0.85] sm:leading-[0.9] transition-all duration-1000 delay-500 text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                    }`}
                  >
                    <span className="block relative">
                      SONNETS
                      <div className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 w-3 h-3 sm:w-4 sm:h-4 bg-[#FFD700] rounded-full animate-ping opacity-60"></div>
                    </span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#fff8dc] to-[#a68d00] relative">
                      OF LOVE
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FFD700]/20 to-[#a68d00]/20 blur-xl sm:blur-2xl -z-10"></div>
                    </span>
                  </h1>
                </div>

                <div className="overflow-hidden">
                  <div
                    className={`space-y-2 sm:space-y-3 transition-all duration-1000 delay-700 ${
                      isLoaded
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                  >
                    <p className="text-base sm:text-lg lg:text-xl text-[#dcd7ba] leading-relaxed">
                      A collection of unrequited love sonnets.
                    </p>
                    <p className="text-sm sm:text-base text-[#dcd7ba]/80 leading-relaxed max-w-lg mx-auto lg:mx-0">
                      Not just poems, but a journey through the heart's deepest
                      emotions, crafted with classical elegance and modern
                      sensitivity.
                    </p>
                  </div>
                </div>

                <div
                  className={`flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 transition-all duration-1000 delay-1000 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <button 
                    onClick={() => scrollToSection('purchase')}
                    className="group bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Buy Now
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        →
                      </span>
                    </span>
                  </button>
                  <button 
                    onClick={() => window.location.href = 'https://www.instagram.com/sanctuaryofkk'}
                    className="border-2 border-[#FFD700]/50 text-[#FFD700] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-300 backdrop-blur-sm"
                  >
                    About Author
                  </button>
                </div>

                <div
                  className={`flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 pt-4 sm:pt-6 border-t border-[#FFD700]/20 transition-all duration-1000 delay-1200 ${
                    isLoaded
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFD700]">11</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Sonnets</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFD700]">74</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Pages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg sm:text-xl lg:text-2xl font-bold text-[#FFD700]">11</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Emotions</div>
                  </div>
                </div>
              </div>

              {/* Right Side - Book Image */}
              <div
                className={`flex-1 flex justify-center items-center transition-all duration-1000 delay-900 ${
                  isLoaded
                    ? "translate-x-0 opacity-100"
                    : "translate-x-8 opacity-0"
                } mt-6 lg:mt-0`}
              >
                <div className="relative group w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[280px] xl:max-w-[320px]">
                  <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 bg-gradient-to-r from-[#FFD700]/20 to-[#a68d00]/20 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 bg-gradient-to-r from-[#FFD700]/10 to-[#a68d00]/10 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-30 sm:opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  <img 
                    src="/image copy.png" 
                    alt="Sonnets of Love Book Cover"
                    className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
                  />

                  <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 w-4 h-4 sm:w-6 sm:h-6 lg:w-8 lg:h-8 bg-[#FFD700]/20 rounded-full animate-pulse"></div>
                  <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-3 sm:-left-4 lg:-left-6 w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 bg-[#a68d00]/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-1/2 -right-4 sm:-right-6 lg:-right-8 w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-[#FFD700]/30 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 sm:w-32 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-[#FFD700]/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* ABOUT AUTHOR SECTION - Placeholder */}
      <ProductGallery></ProductGallery>

      {/* BUY NOW SECTION */}
      <section id="purchase" className="min-h-screen flex justify-center items-center px-4 sm:px-6 py-20">
        <div className="w-full sm:w-[90%] lg:w-[82%] max-w-4xl">
          <div className="relative bg-gradient-to-br from-[#1a3008]/60 to-[#0e1a05]/60 backdrop-blur-xl border border-[#FFD700]/30 shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#a68d00]/5"></div>
            
            <div className="relative">
              {/* Section Header */}
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFD700] mb-4">
                  Get Your Copy
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#a68d00] mx-auto mb-6"></div>
              </div>

              {!orderSubmitted ? (
                <>
                  {/* Step Indicator */}
                  <div className="flex justify-center mb-8">
                    <div className="flex items-center space-x-4">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        purchaseStep >= 1 ? 'bg-[#FFD700] border-[#FFD700] text-black' : 'border-[#FFD700]/50 text-[#FFD700]/50'
                      }`}>
                        1
                      </div>
                      <div className={`w-12 sm:w-16 h-0.5 ${purchaseStep >= 2 ? 'bg-[#FFD700]' : 'bg-[#FFD700]/30'}`}></div>
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                        purchaseStep >= 2 ? 'bg-[#FFD700] border-[#FFD700] text-black' : 'border-[#FFD700]/50 text-[#FFD700]/50'
                      }`}>
                        2
                      </div>
                    </div>
                  </div>

                  {purchaseStep === 1 && (
                    <div className="space-y-6">
                      <div className="text-center mb-8">
                        <h3 className="text-xl sm:text-2xl font-serif text-[#FFD700] mb-4">Order Details</h3>
                        <p className="text-[#dcd7ba]/80 text-sm sm:text-base">Review your order and proceed to shipping</p>
                      </div>

                      {/* Product Display */}
                      <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl p-4 sm:p-6">
                        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                          <div className="w-16 h-20 sm:w-20 sm:h-28 bg-gradient-to-br from-[#2a1810] to-[#1a1005] rounded-lg border-2 border-[#FFD700]/40 flex flex-col justify-center items-center flex-shrink-0">
                              <img src="/image copy.png"></img>
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-serif text-[#FFD700] mb-2">Sonnets of Love</h4>
                            <p className="text-[#dcd7ba]/80 text-sm mb-3">A Literary Collection - 74 Pages</p>
                            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-4">
                              <span className="text-xl sm:text-2xl font-bold text-[#FFD700]">Rs.650</span>
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                                  className="w-8 h-8 rounded-full border border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-200 flex items-center justify-center"
                                >
                                  -
                                </button>
                                <span className="w-12 text-center text-[#dcd7ba]">{formData.quantity}</span>
                                <button 
                                  onClick={() => setFormData(prev => ({ ...prev, quantity: prev.quantity + 1 }))}
                                  className="w-8 h-8 rounded-full border border-[#FFD700]/50 text-[#FFD700] hover:bg-[#FFD700]/10 transition-all duration-200 flex items-center justify-center"
                                >
                                  +
                                </button>
                              </div>
                              <div className="">+ Rs.50 Shipping Charges(per order)</div>
                            </div>
                          </div>
                        </div>
                        <div className="border-t border-[#FFD700]/20 mt-4 pt-4 flex justify-between items-center">
                          <span className="text-[#dcd7ba] text-sm sm:text-base">Total:</span>
                          <span className="text-xl sm:text-2xl font-bold text-[#FFD700]">Rs.{(700 * formData.quantity).toFixed(2)}</span>
                        </div>
                      </div>

                      <button 
                        onClick={() => setPurchaseStep(2)}
                        className="w-full bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105"
                      >
                        Proceed to Shipping →
                      </button>
                    </div>
                  )}

                  {purchaseStep === 2 && (
                    <div className="space-y-6">
                      <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
                        <button 
                          onClick={() => setPurchaseStep(1)}
                          className="flex items-center gap-2 text-[#FFD700] hover:text-[#FFD700]/80 transition-colors order-2 sm:order-1"
                        >
                          <ArrowLeft size={20} />
                          <span className="text-sm sm:text-base">Back to Order</span>
                        </button>
                        <h3 className="text-xl sm:text-2xl font-serif text-[#FFD700] order-1 sm:order-2">Shipping Information</h3>
                        <div className="order-3 sm:order-3"></div>
                      </div>

                      <form className="space-y-4 sm:space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">
                              <User size={16} className="inline mr-2" />
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">
                              <Mail size={16} className="inline mr-2" />
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                              placeholder="Enter your email"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">
                            <Phone size={16} className="inline mr-2" />
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                            placeholder="Enter your phone number"
                          />
                        </div>

                        {/* Address Information */}
                        <div>
                          <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">
                            <MapPin size={16} className="inline mr-2" />
                            Street Address *
                          </label>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                            placeholder="Enter your street address"
                          />
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                          <div>
                            <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">City *</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                              placeholder="City"
                            />
                          </div>
                          <div>
                            <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">State/Province *</label>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                              placeholder="State"
                            />
                          </div>
                          <div className="sm:col-span-2 lg:col-span-1">
                            <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">ZIP/Postal Code *</label>
                            <input
                              type="text"
                              name="zipCode"
                              value={formData.zipCode}
                              onChange={handleInputChange}
                              required
                              className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                              placeholder="ZIP"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-[#dcd7ba] mb-2 text-sm font-medium">Country *</label>
                          <input
                            type="text"
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            required
                            className="w-full bg-[#FFD700]/5 border border-[#FFD700]/30 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-[#dcd7ba] text-sm sm:text-base focus:outline-none focus:border-[#FFD700] focus:bg-[#FFD700]/10 transition-all duration-200"
                            placeholder="Enter your country"
                          />
                        </div>
                      </form>

                      {/* Order Summary */}
                      <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl p-4 sm:p-6 mt-6 sm:mt-8">
                        <h4 className="text-base sm:text-lg font-serif text-[#FFD700] mb-4">Order Summary</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between text-[#dcd7ba] text-sm sm:text-base">
                            <span>Sonnets of Love × {formData.quantity}</span>
                            <span>Rs{(650 * formData.quantity).toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-[#dcd7ba] text-sm sm:text-base">
                            <span>Shipping(per-order)</span>
                            <span>Rs.50</span>
                          </div>
                          <div className="border-t border-[#FFD700]/20 pt-2 flex justify-between font-bold text-[#FFD700] text-base sm:text-lg">
                            <span>Total</span>
                            <span>Rs.{(700 * formData.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>

                      <button 
                        onClick={handleSubmitOrder}
                        disabled={isSubmitting || !formData.fullName || !formData.email || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.zipCode || !formData.country}
                        className="w-full bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            <span className="text-sm sm:text-base">Processing Order...</span>
                          </>
                        ) : (
                          <>
                            <Send size={20} />
                            <span className="text-sm sm:text-base">Complete Order</span>
                          </>
                        )}
                      </button>

                      <p className="text-[#dcd7ba]/60 text-xs sm:text-sm text-center">
                        * We'll contact you via email to arrange payment and finalize shipping details.
                      </p>
                    </div>
                  )}
                </>
              ) : (
                /* Order Confirmation */
                <div className="text-center py-8 sm:py-12">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-[#FFD700]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={32} className="sm:hidden text-[#FFD700]" />
                    <Check size={40} className="hidden sm:block text-[#FFD700]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FFD700] mb-4">Order Received!</h3>
                  <p className="text-[#dcd7ba] text-base sm:text-lg mb-6 max-w-md mx-auto px-4">
                    Thank you for your order! We've received your information and will contact you shortly to arrange payment and shipping. This service is COD only.
                  </p>
                  <div className="bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl p-4 sm:p-6 max-w-md mx-auto">
                    <h4 className="text-base sm:text-lg font-serif text-[#FFD700] mb-3">Order Details</h4>
                    <div className="space-y-2 text-[#dcd7ba] text-sm sm:text-base">
                      <div className="flex justify-between">
                        <span>Name:</span>
                        <span className="text-right ml-2 break-all">{formData.fullName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Email:</span>
                        <span className="text-right ml-2 break-all">{formData.email}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Quantity:</span>
                        <span>{formData.quantity}</span>
                      </div>
                      <div className="flex justify-between font-bold text-[#FFD700] pt-2 border-t border-[#FFD700]/20">
                        <span>Total:</span>
                        <span>Rs.{(700 * formData.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <button 
                    onClick={() => {
                      setOrderSubmitted(false);
                      setPurchaseStep(1);
                      setFormData({
                        fullName: '',
                        email: '',
                        phone: '',
                        address: '',
                        city: '',
                        state: '',
                        zipCode: '',
                        country: '',
                        quantity: 1
                      });
                    }}
                    className="mt-6 sm:mt-8 border-2 border-[#FFD700]/50 text-[#FFD700] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-300"
                  >
                    Place Another Order
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Scroll indicator */}
      <div className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center space-y-2 animate-bounce">
        <div className="text-[#FFD700]/60 text-xs sm:text-sm">Scroll to explore</div>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border border-[#FFD700]/40 sm:border-2 rounded-full flex justify-center">
          <div className="w-0.5 h-2 sm:w-1 sm:h-3 bg-[#FFD700]/60 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Mobile-specific floating CTA */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 sm:hidden z-40">
        <button 
          onClick={() => scrollToSection('purchase')}
          className="bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm shadow-2xl shadow-[#FFD700]/30 animate-pulse"
        >
          Get Your Copy
        </button>
      </div>
    </div>
  );
}