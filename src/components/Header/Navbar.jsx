import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // 🌟 NEW STATE: System Theme State Config (Default Dark Mod)
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🌟 THEME TOGGLE ENGINE HANDLER
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // Future expansion logic: document.documentElement.classList.toggle('light')
    console.log("System Node Matrix Shifted To:", !isDarkMode ? "Light Mode" : "Dark Mode");
  };

  const linkStyles = ({ isActive }) =>
    `relative px-5 py-2 text-xs font-mono tracking-[0.25em] uppercase transition-all duration-300 ${isActive
      ? 'text-amber-400 font-black scale-105'
      : 'text-slate-400 hover:text-white hover:translate-x-1 lg:hover:translate-x-0'
    }`;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 p-4 md:p-6 transition-all duration-500 pointer-events-none">
      <div className={`max-w-7xl mx-auto navbar relative rounded-2xl md:rounded-full border transition-all duration-500 pointer-events-auto ${isScrolled
        ? 'bg-slate-950/85 backdrop-blur-xl border-white/10 shadow-[0_25px_50px_-15px_rgba(0,0,0,0.8)] px-4 md:px-8 py-2'
        : 'bg-slate-900/30 backdrop-blur-md border-white/5 px-4 md:px-6 py-4'
      }`}>

        {/* --- NAVBAR START --- */}
        <div className="navbar-start flex items-center gap-2">
          
          {/* Hamburger Menu code remains identical for structural balance */}
          <div className="dropdown lg:hidden relative">
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(!isOpen);
              }}
              className="btn btn-ghost btn-circle text-white hover:bg-white/5 relative z-50 focus:bg-transparent active:bg-transparent"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col gap-1.5 w-5 justify-center items-start">
                <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-5 rotate-45 translate-y-[8px]' : 'w-5'}`} />
                <span className={`h-[2px] bg-amber-400 transition-all duration-200 ${isOpen ? 'w-0 opacity-0' : 'w-3'}`} />
                <span className={`h-[2px] bg-white transition-all duration-300 ${isOpen ? 'w-5 -rotate-45 -translate-y-[8px]' : 'w-4'}`} />
              </div>
            </button>

            {isOpen && (
              <div className="fixed inset-0 h-screen w-screen bg-transparent z-30" onClick={() => setIsOpen(false)} />
            )}

            <ul className={`menu menu-sm absolute left-0 top-12 w-64 bg-slate-950/95 border border-white/10 rounded-2xl p-4 gap-3 shadow-2xl backdrop-blur-2xl mt-2 z-40 transition-all duration-300 origin-top-left ${isOpen ? 'opacity-100 scale-100 pointer-events-auto visible' : 'opacity-0 scale-95 pointer-events-none invisible'}`}>
              <div className="text-[10px] text-slate-500 font-mono tracking-widest border-b border-white/5 pb-2 mb-1">NAVIGATION</div>
              <li><NavLink to="/" onClick={() => setIsOpen(false)} className={linkStyles}>Home</NavLink></li>
              <li><NavLink to="/listed-books" onClick={() => setIsOpen(false)} className={linkStyles}>Listed Books</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsOpen(false)} className={linkStyles}>About</NavLink></li>
            </ul>
          </div>

          <Link to="/" className="flex items-center gap-2 group focus:outline-none ml-1 md:ml-0">
            <div className="w-2.5 h-2.5 bg-amber-500 rounded-full relative" />
            <h2 className="text-sm md:text-base font-serif font-black tracking-[0.25em] text-white uppercase select-none">
              Boi<span className="text-amber-400 font-normal">Poka</span>
            </h2>
          </Link>
        </div>

        {/* --- NAVBAR CENTER --- */}
        <div className="navbar-center hidden lg:flex bg-slate-950/50 border border-white/5 p-1 rounded-full backdrop-blur-sm">
          <ul className="flex items-center gap-1">
            <li className="relative group/item">
              <NavLink to="/" className={linkStyles}>Home</NavLink>
              <span className="absolute bottom-1 left-1/2 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 -translate-x-1/2 group-hover/item:w-1/3" />
            </li>
            <li className="relative group/item">
              <NavLink to="/listed-books" className={linkStyles}>Listed Books</NavLink>
              <span className="absolute bottom-1 left-1/2 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 -translate-x-1/2 group-hover/item:w-1/3" />
            </li>
            <li className="relative group/item">
              <NavLink to="/about" className={linkStyles}>About</NavLink>
              <span className="absolute bottom-1 left-1/2 w-0 h-[1.5px] bg-amber-400 transition-all duration-300 -translate-x-1/2 group-hover/item:w-1/3" />
            </li>
          </ul>
        </div>

        {/* --- NAVBAR END (Asymmetrical Action Block) --- */}
        <div className="navbar-end flex items-center gap-3 md:gap-4">
          
          {/* ⭐ ULTRA-UNIQUE: THE KINETIC MATRIX THEME SWITCHER */}
          <button 
            onClick={toggleTheme}
            className="w-8 h-8 rounded-xl bg-white/[0.03] border border-white/5 hover:border-amber-400/30 hover:bg-white/[0.07] flex items-center justify-center transition-all duration-300 group/theme relative overflow-hidden active:scale-90"
            aria-label="Switch Identity Light System"
          >
            {/* Subtle internal grid glow trigger */}
            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/0 via-amber-400/[0.03] to-purple-500/0 opacity-0 group-hover/theme:opacity-100 transition-opacity duration-500" />
            
            {/* Dynamic Sliding Matrix Icon Core Container */}
            <div className="relative w-4 h-4 overflow-hidden">
              {/* Dark Moon System Icon Vector */}
              <svg 
                className={`w-4 h-4 absolute inset-0 text-amber-400 transition-all duration-500 transform ${
                  isDarkMode ? 'translate-y-0 rotate-0 scale-100' : 'translate-y-6 rotate-45 scale-50 opacity-0'
                }`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>

              {/* Light Sun System Icon Vector */}
              <svg 
                className={`w-4 h-4 absolute inset-0 text-purple-400 transition-all duration-500 transform ${
                  !isDarkMode ? 'translate-y-0 rotate-0 scale-100' : '-translate-y-6 -rotate-45 scale-50 opacity-0'
                }`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M16.243 17.657l.707.707M6.343 6.343l.707-.707M14 12a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </button>

          <Link
            to="/signin"
            className="text-[10px] font-mono uppercase text-slate-400 hover:text-white font-bold tracking-wider transition-colors duration-200 hidden sm:inline-block"
          >
            Sign In
          </Link>

          <Link
            to="/signup"
            className="relative px-4 py-2 text-[10px] font-bold font-mono uppercase tracking-widest text-slate-950 bg-white hover:bg-amber-400 rounded-xl md:rounded-full transition-all duration-300 shadow-[0_4px_20px_rgba(255,255,255,0.05)] active:scale-95"
          >
            Join
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;