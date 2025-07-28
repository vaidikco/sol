import { useState, useEffect } from "react";
import { Instagram, BookOpen, Heart, Star, ExternalLink, Quote } from "lucide-react";

const AboutAuthor = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('about-author');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about-author" className="min-h-screen flex justify-center items-center px-4 sm:px-6 py-20">
      <div className="w-full sm:w-[90%] lg:w-[82%] max-w-6xl">
        <div
          className={`relative bg-gradient-to-br from-[#1a3008]/60 to-[#0e1a05]/60 backdrop-blur-xl border border-[#FFD700]/30 shadow-2xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#FFD700]/5 via-transparent to-[#a68d00]/5"></div>
          <div className="absolute top-6 right-6 text-[#FFD700]/10 text-4xl sm:text-6xl animate-pulse">✧</div>
          <div className="absolute bottom-6 left-6 text-[#a68d00]/10 text-3xl sm:text-5xl animate-pulse" style={{animationDelay: '2s'}}>❦</div>

          <div className="relative">
            {/* Section Header */}
            <div className="text-center mb-12">
              <div className="overflow-hidden">
                <p
                  className={`text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#FFD700]/80 font-medium transition-all duration-1000 delay-300 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  ✦ Meet the Author ✦
                </p>
              </div>
              <div className="overflow-hidden">
                <h2
                  className={`font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFD700] mb-4 transition-all duration-1000 delay-500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                  }`}
                >
                  About the Author
                </h2>
              </div>
              <div
                className={`w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#a68d00] mx-auto transition-all duration-1000 delay-700 ${
                  isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                }`}
              ></div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-10 lg:gap-16">
              {/* Author Photo */}
              <div
                className={`flex-shrink-0 transition-all duration-1000 delay-900 ${
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
              >
                <div className="relative group">
                  {/* Glowing background effects */}
                  <div className="absolute -inset-6 sm:-inset-8 bg-gradient-to-r from-[#FFD700]/20 to-[#a68d00]/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  <div className="absolute -inset-4 sm:-inset-6 bg-gradient-to-r from-[#FFD700]/10 to-[#a68d00]/10 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Photo container */}
                  <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 to-[#a68d00]/20 rounded-full"></div>
                    <img 
                      src="/kk.jpeg" 
                      alt="Author KK"
                      className="relative z-10 w-full h-full object-cover rounded-full border-4 border-[#FFD700]/30 shadow-2xl group-hover:border-[#FFD700]/50 transition-all duration-300"
                    />
                    
                    {/* Decorative elements around photo */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#FFD700]/30 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 bg-[#a68d00]/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/4 -right-6 w-3 h-3 bg-[#FFD700]/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                    <div className="absolute bottom-1/3 -left-6 w-2 h-2 bg-[#a68d00]/20 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
                  </div>
                </div>
              </div>

              {/* Author Information */}
              <div className="flex-1 space-y-6 text-center lg:text-left">
                <div
                  className={`transition-all duration-1000 delay-1100 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#FFD700] mb-3">
                    KK
                  </h3>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#a68d00] mx-auto lg:mx-0 mb-6"></div>
                </div>

                <div
                  className={`transition-all duration-1000 delay-1300 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <p className="text-base sm:text-lg lg:text-xl text-[#dcd7ba] leading-relaxed mb-6">
                    A poet whose words dance between the shadows of longing and the light of hope. 
                    KK crafts verses that speak to the universal experience of unrequited love, 
                    weaving classical elegance with contemporary emotion.
                  </p>
                  
                  <p className="text-sm sm:text-base text-[#dcd7ba]/80 leading-relaxed mb-8">
                    Through eleven carefully crafted sonnets, KK explores the depths of human emotion, 
                    transforming personal pain into universal beauty. Each poem is a window into the 
                    soul's most vulnerable moments, rendered with grace and profound understanding.
                  </p>
                </div>

                {/* Quote */}
                <div
                  className={`relative bg-[#FFD700]/5 border border-[#FFD700]/20 rounded-xl p-4 sm:p-6 mb-8 transition-all duration-1000 delay-1500 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <Quote className="absolute top-2 left-2 text-[#FFD700]/30" size={24} />
                  <blockquote className="text-[#dcd7ba] italic text-sm sm:text-base leading-relaxed pl-8">
                    "In every unrequited love lies the seed of the most beautiful poetry. 
                    These sonnets are born from that sacred space where hope and heartbreak dance together."
                  </blockquote>
                  <div className="text-right mt-3">
                    <cite className="text-[#FFD700] font-serif not-italic">— K<span className="text-2xl">K</span></cite>
                  </div>
                </div>

                {/* Author Stats */}
                <div
                  className={`grid grid-cols-3 gap-4 sm:gap-6 mb-8 transition-all duration-1000 delay-1700 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1">11</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Sonnets Written</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1">74</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Pages of Poetry</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-[#FFD700] mb-1">∞</div>
                    <div className="text-xs sm:text-sm text-[#dcd7ba]/70">Emotions Captured</div>
                  </div>
                </div>

                {/* Social/Contact Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start transition-all duration-1000 delay-1900 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <button 
                    onClick={() => window.open('https://www.instagram.com/sanctuaryofkk', '_blank')}
                    className="group bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Instagram size={18} />
                    <span>Follow on Instagram</span>
                    <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  
                  <button 
                    onClick={() => document.getElementById('purchase').scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-[#FFD700]/50 text-[#FFD700] px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-[#FFD700]/10 hover:border-[#FFD700] transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2"
                  >
                    <BookOpen size={18} />
                    <span>Get the Book</span>
                  </button>
                </div>

                {/* Writing Themes */}
                <div
                  className={`mt-8 transition-all duration-1000 delay-2100 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                  }`}
                >
                  <h4 className="text-lg sm:text-xl font-serif text-[#FFD700] mb-4">Themes Explored</h4>
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
                    {[
                      "Unrequited Love",
                      "Longing",
                      "Hope",
                      "Melancholy",
                      "Beauty in Pain",
                      "Classical Form"
                    ].map((theme, index) => (
                      <span 
                        key={theme}
                        className="bg-[#FFD700]/10 border border-[#FFD700]/20 text-[#FFD700] px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm hover:bg-[#FFD700]/20 transition-all duration-200"
                        style={{animationDelay: `${2300 + index * 100}ms`}}
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthor;