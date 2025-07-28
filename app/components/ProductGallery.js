"use client"
import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Heart, BookOpen, Star } from 'lucide-react';

const ProductGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Generate image paths for 23 images
  const images = Array.from({ length: 23 }, (_, i) => ({
    id: i + 1,
    src: `/img1.jpeg`, // First 9 images use (1), rest use (2)
    alt: `Sonnets of Love - Product Image ${i + 1}`,
    title: i === 0 ? 'Cover Design' : 
           i === 1 ? 'Back Cover' : 
           i === 2 ? 'Inside Pages' : 
           i < 8 ? `Page ${i - 2}` : 
           i < 15 ? 'Interior Design' : 
           'Product Details'
  }));

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const prevImage = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleKeyDown = (e) => {
    if (selectedImage) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, currentIndex]);

  return (
    <section className="relative bg-gradient-to-br from-[#0a1403] via-[#0d1805] to-[#081202] min-h-screen py-20 px-4 sm:px-6">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#FFD700]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-[#a68d00]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#FFD700]/3 rounded-full blur-2xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      {/* Floating decorative elements */}
      <div
        className="absolute top-1/4 right-1/4 text-[#FFD700]/20 text-6xl animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "3s" }}
      >
        ❦
      </div>
      <div
        className="absolute bottom-1/3 left-1/6 text-[#a68d00]/20 text-4xl animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "4s" }}
      >
        ✧
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFD700]/80 font-medium mb-4">
            ✦ Product Gallery ✦
          </p>
          <h2 className="font-serif text-5xl lg:text-6xl text-[#FFD700] mb-6 leading-tight">
            <span className="block">INSIDE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-[#fff8dc] to-[#a68d00]">
              THE PRERELEASE HAMPER
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FFD700] to-[#a68d00] mx-auto mb-6"></div>
          <p className="text-lg text-[#dcd7ba]/80 max-w-2xl mx-auto leading-relaxed">
            Explore the beautiful craftsmanship of the Pre-Release hamper of SONNETS OF LOVE. Each element inside the box is bound to give uou a luxurious reading experience.
            1x SONNETS OF LOVE SIGNED COPY (Hardcover)
1x Attar bottle
2x Bookmarks
2x Wax candles
          </p>
        </div>

        {/* Stats */}
        <div
          className={`flex justify-center gap-8 mb-16 transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">23</div>
            <div className="text-sm text-[#dcd7ba]/70">Photos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">74</div>
            <div className="text-sm text-[#dcd7ba]/70">Pages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-[#FFD700] mb-2">11</div>
            <div className="text-sm text-[#dcd7ba]/70">Sonnets</div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div
          className={`transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
            {images.map((image, index) => (
              <div
                key={image.id}
                className="group relative aspect-[3/4] bg-gradient-to-br from-[#1a3008]/60 to-[#0e1a05]/60 backdrop-blur-xl border border-[#FFD700]/20 rounded-2xl overflow-hidden cursor-pointer hover:border-[#FFD700]/40 transition-all duration-500 hover:scale-105"
                onClick={() => openLightbox(image, index)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Image placeholder with golden border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2a1810] to-[#1a1005] flex items-center justify-center">
                  <div className="text-center">
                    <BookOpen size={48} className="text-[#FFD700]/40 mx-auto mb-4" />
                    <div className="text-[#FFD700]/60 font-serif text-lg mb-2">{image.title}</div>
                    <div className="text-[#dcd7ba]/40 text-sm">Image {image.id}</div>
                  </div>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-[#FFD700] font-serif text-lg mb-1">{image.title}</h3>
                    <p className="text-[#dcd7ba]/80 text-sm">Click to view larger</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <ZoomIn size={24} className="text-[#FFD700]/80" />
                  </div>
                </div>

                {/* Golden corner accents */}
                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-colors duration-300"></div>
                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-colors duration-300"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#FFD700]/30 group-hover:border-[#FFD700]/60 transition-colors duration-300"></div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/5 via-transparent to-[#a68d00]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="bg-gradient-to-br from-[#1a3008]/60 to-[#0e1a05]/60 backdrop-blur-xl border border-[#FFD700]/30 rounded-3xl p-8 lg:p-12 max-w-2xl mx-auto">
            <div className="flex justify-center items-center gap-4 mb-6">
              <Heart size={24} className="text-[#FFD700]" />
              <h3 className="font-serif text-2xl lg:text-3xl text-[#FFD700]">Ready to Own Your Copy?</h3>
              <Heart size={24} className="text-[#FFD700]" />
            </div>
            <p className="text-[#dcd7ba]/80 text-lg mb-8 leading-relaxed">
              Experience the full beauty of these sonnets in person. Premium quality printing, 
              elegant design, and timeless poetry await.
            </p>
            <button className="group bg-gradient-to-r from-[#FFD700] to-[#a68d00] text-black px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-[#FFD700]/30 transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center justify-center gap-2">
                Order Now - Rs.700
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <X size={24} className="text-white" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronLeft size={24} className="text-white" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-all duration-200"
            >
              <ChevronRight size={24} className="text-white" />
            </button>

            {/* Image container */}
            <div className="bg-gradient-to-br from-[#1a3008]/80 to-[#0e1a05]/80 backdrop-blur-xl border border-[#FFD700]/30 rounded-2xl overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-[#2a1810] to-[#1a1005] flex items-center justify-center">
                <div className="text-center p-8">
                  <BookOpen size={80} className="text-[#FFD700]/40 mx-auto mb-6" />
                  <h3 className="text-[#FFD700] font-serif text-3xl mb-4">{selectedImage.title}</h3>
                  <p className="text-[#dcd7ba]/60 text-lg mb-6">Image {selectedImage.id} of 23</p>
                  <div className="flex justify-center items-center gap-6">
                    <div className="flex items-center gap-2 text-[#FFD700]/80">
                      <Star size={20} />
                      <span>Premium Quality</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#FFD700]/80">
                      <Heart size={20} />
                      <span>Elegant Design</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 px-4 py-2 rounded-full">
              <span className="text-white text-sm font-medium">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductGallery;