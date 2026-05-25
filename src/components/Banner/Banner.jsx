import React, { useState, useEffect, useCallback } from 'react';

const Banner = () => {

   const slides = [
    {
      id: 1,
      tag: "Sci-Fi & Fantasy",
      title: "Explore Uncharted Worlds",
      subtitle: "Dive into this month's most anticipated sci-fi releases and space operas.",
      bgGradient: "from-purple-900 via-indigo-950 to-slate-900",
      accentColor: "text-purple-400",
      btnClass: "bg-purple-600 hover:bg-purple-500",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 2,
      tag: "Biographies & History",
      title: "Stories That Shaped Our World",
      subtitle: "Discover the deeply personal journeys of history's most influential icons.",
      bgGradient: "from-amber-950 via-stone-900 to-neutral-950",
      accentColor: "text-amber-400",
      btnClass: "bg-amber-600 hover:bg-amber-500",
      image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&auto=format&fit=crop&q=80",
    },
    {
      id: 3,
      tag: "Thriller & Mystery",
      title: "Trust No One Until The Last Page",
      subtitle: "Heart-pounding psychological thrillers guaranteed to keep you up all night.",
      bgGradient: "from-rose-950 via-crimson-950 to-zinc-900",
      accentColor: "text-rose-400",
      btnClass: "bg-rose-600 hover:bg-rose-500",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=600&auto=format&fit=crop&q=80",
    }
  ];

  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Smooth slide changer
  const handleSlideChange = useCallback((index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrent(index);
    setTimeout(() => setIsAnimating(false), 700); // Matches transition duration
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const next = current === slides.length - 1 ? 0 : current + 1;
    handleSlideChange(next);
  }, [current, slides.length, handleSlideChange]);

  const prevSlide = () => {
    const prev = current === 0 ? slides.length - 1 : current - 1;
    handleSlideChange(prev);
  };

  // Auto-scroll effect (Stops on hover can be simulated, but standard interval keeps it smooth)
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Changes slide every 6 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);


    return (
      <div className="relative w-full h-[520px] sm:h-[580px] md:h-[650px] overflow-hidden bg-slate-900 text-white">
      
      {/* Slides Wrapper */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-gradient-to-br ${slide.bgGradient} transition-all duration-700 ease-in-out flex items-center ${
              index === current 
                ? 'opacity-100 pointer-events-auto z-10 scale-100' 
                : 'opacity-0 pointer-events-none z-0 scale-105'
            }`}
          >
            {/* Custom Mesh/Grid Overlay for visual texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] mix-blend-overlay" />

            <div className="max-w-7xl mx-auto w-full px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-20">
              
              {/* Left Column: Text Content */}
              <div className="md:col-span-7 space-y-4 md:space-y-6 text-center md:text-left">
                <span className={`inline-block text-xs md:text-sm font-bold tracking-widest uppercase border-b-2 pb-1 border-current ${slide.accentColor}`}>
                  {slide.tag}
                </span>
                
                <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-black tracking-tight leading-none min-h-[2.5em] md:min-h-[auto]">
                  {slide.title}
                </h1>
                
                <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mx-auto md:mx-0">
                  {slide.subtitle}
                </p>
                
                <div className="pt-2 flex flex-wrap justify-center md:justify-start gap-4">
                  <button className={`px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-300 shadow-lg transform hover:-translate-y-0.5 ${slide.btnClass}`}>
                    Browse Collection
                  </button>
                  <button className="px-6 py-3 rounded-lg font-semibold text-sm bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/10">
                    View Details
                  </button>
                </div>
              </div>

              {/* Right Column: Unique Floating Book Feature */}
              <div className="hidden md:col-span-5 md:flex justify-center relative">
                {/* Decorative background glow behind the book */}
                <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl -z-10 animate-pulse" />
                
                <div className="relative w-64 h-96 rounded-2xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] border border-white/10 transform rotate-3 hover:rotate-0 transition-transform duration-500 group cursor-pointer">
                  <img 
                    src={slide.image} 
                    alt={slide.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-xs text-slate-400 font-mono">Curator's Choice</span>
                    <h4 className="font-serif font-bold text-lg leading-tight mt-1">Featured Hardcover</h4>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Manual Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm hidden sm:block"
        aria-label="Previous Slide"
      >
        ←
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/20 hover:bg-black/50 border border-white/10 text-white/70 hover:text-white transition-all backdrop-blur-sm hidden sm:block"
        aria-label="Next Slide"
      >
        →
      </button>

      {/* Bottom Progress Bar & Slide Indicators */}
      <div className="absolute bottom-6 left-0 right-0 z-30 flex flex-col items-center gap-3">
        {/* Dash Indicators */}
        <div className="flex gap-2.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === current ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

    </div>
    );
};

export default Banner;