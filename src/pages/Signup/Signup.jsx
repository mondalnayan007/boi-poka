import React, { useState } from 'react';
import { Link } from 'react-router';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isFocused, setIsFocused] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) return;
    
    setIsLoading(true);
    setTimeout(() => {
      console.log("Token Compiled:", { name, email });
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-300 pt-28 pb-12 px-6 md:px-16 flex items-center justify-center relative overflow-hidden selection:bg-purple-500/30 selection:text-white">
      
      {/* 1. KINETIC BACKGROUND AMBIENCE (Pure Elegance) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ffffff02,transparent_40%)]" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/[0.03] rounded-full blur-[140px] pointer-events-none animate-pulse duration-[10s]" />
      
      {/* Structural Geometry Lines */}
      <div className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-white/[0.03] via-transparent to-transparent hidden md:block" />
      <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />

      {/* 2. THE ASYMMETRICAL EDITORIAL CANVAS GRID */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center relative z-10">
        
        {/* --- LEFT WING: THE TYPOGRAPHY MANIFESTO (5 Columns) --- */}
        <div className="md:col-span-5 space-y-6 text-left">
          <div className="inline-flex items-center gap-2 text-[9px] font-mono tracking-[0.4em] text-purple-400 uppercase">
            <span className="w-1 h-1 bg-purple-400 rounded-full animate-ping" />
            Core Manifesto // Open Node
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.05]">
            The Arcane <br />
            <span className="font-sans font-light italic text-stone-400 bg-clip-text bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500">Registry.</span>
          </h1>
          
          <div className="space-y-4 max-w-sm">
            <p className="text-[11px] font-mono text-stone-500 leading-relaxed uppercase tracking-widest border-l border-white/10 pl-4">
              Begin your curation process. Sign up to build your personal lexicon dashboard, lock reading intervals, and compile exclusive logs.
            </p>
          </div>
          
          <div className="hidden md:block text-[9px] font-mono text-stone-700 uppercase tracking-widest pt-8">
            [ BoiPoka System Corp © 2026 ]
          </div>
        </div>

        {/* --- RIGHT WING: THE PLATINUM FORM INTERFACE (7 Columns) --- */}
        <div className="md:col-span-7 relative">
          
          {/* Subtle Frame Shadow Backdrop for OLED depth */}
          <div className="absolute -inset-4 bg-gradient-to-br from-white/[0.01] to-transparent rounded-[2rem] blur-xl opacity-50 pointer-events-none" />

          <form onSubmit={handleSignup} className="space-y-8 relative">
            
            {/* Input 1: Collector Name */}
            <div className="relative border-b border-white/10 focus-within:border-purple-400/40 transition-colors duration-500 py-3 group">
              <input 
                type="text" 
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setIsFocused('name')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-transparent text-base text-white font-mono focus:outline-none pt-4 pb-1 relative z-10"
              />
              <label className={`absolute left-0 transition-all duration-500 ease-out pointer-events-none font-mono uppercase tracking-[0.2em] ${
                isFocused === 'name' || name 
                  ? '-translate-y-4 text-[9px] text-purple-400 font-black' 
                  : 'top-5 text-xs text-stone-600'
              }`}>
                Collector Name
              </label>
            </div>

            {/* Input 2: System Email */}
            <div className="relative border-b border-white/10 focus-within:border-purple-400/40 transition-colors duration-500 py-3 group">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-transparent text-base text-white font-mono focus:outline-none pt-4 pb-1 relative z-10"
              />
              <label className={`absolute left-0 transition-all duration-500 ease-out pointer-events-none font-mono uppercase tracking-[0.2em] ${
                isFocused === 'email' || email 
                  ? '-translate-y-4 text-[9px] text-purple-400 font-black' 
                  : 'top-5 text-xs text-stone-600'
              }`}>
                System Email Address
              </label>
            </div>

            {/* Input 3: Security Key */}
            <div className="relative border-b border-white/10 focus-within:border-purple-400/40 transition-colors duration-500 py-3 group">
              <input 
                type="password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused('password')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-transparent text-base text-white font-mono focus:outline-none pt-4 pb-1 relative z-10"
              />
              <label className={`absolute left-0 transition-all duration-500 ease-out pointer-events-none font-mono uppercase tracking-[0.2em] ${
                isFocused === 'password' || password 
                  ? '-translate-y-4 text-[9px] text-purple-400 font-black' 
                  : 'top-5 text-xs text-stone-600'
              }`}>
                Generate Secret Passkey
              </label>
            </div>

            {/* Input 4: Verify Key */}
            <div className="relative border-b border-white/10 focus-within:border-purple-400/40 transition-colors duration-500 py-3 group">
              <input 
                type="password" 
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onFocus={() => setIsFocused('confirm')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-transparent text-base text-white font-mono focus:outline-none pt-4 pb-1 relative z-10"
              />
              <label className={`absolute left-0 transition-all duration-500 ease-out pointer-events-none font-mono uppercase tracking-[0.2em] ${
                isFocused === 'confirm' || confirmPassword 
                  ? '-translate-y-4 text-[9px] text-purple-400 font-black' 
                  : 'top-5 text-xs text-stone-600'
              }`}>
                Confirm Key Verification
              </label>
            </div>

            {/* EXECUTION BUTTON DOCK */}
            <div className="pt-6 space-y-6">
              <button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-white hover:bg-purple-500 disabled:bg-stone-800 text-black hover:text-white font-mono font-black text-xs uppercase tracking-[0.3em] py-4.5 rounded-xl transition-all duration-500 transform active:scale-[0.99] relative overflow-hidden flex items-center justify-center gap-2 shadow-[0_20px_40px_rgba(0,0,0,0.5)] group/btn"
              >
                {isLoading ? (
                  <div className="flex items-center gap-1.5 py-0.5">
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-current rounded-full animate-bounce" />
                  </div>
                ) : (
                  <>
                    <span>Compile Account Pass</span>
                    <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300">➔</span>
                  </>
                )}
              </button>

              <div className="text-center pt-2">
                <p className="text-xs text-stone-600 tracking-wide font-sans">
                  Already have an authorized credential?{' '}
                  <Link to="/signin" className="text-white font-mono font-bold hover:text-purple-400 transition-colors ml-1 uppercase tracking-wider">
                    Sign In ➔
                  </Link>
                </p>
              </div>
            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Signup;