import React, { useState } from 'react';
import { Link } from 'react-router';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      console.log("Core Grid Sync established:", { email, password });
      setIsLoading(false);
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 pt-28 pb-12 px-4 md:px-12 relative flex items-center justify-center overflow-hidden">
      
      {/* BACKGROUND MATRIX SYSTEM BACKGROUND */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* --- ASYMMETRICAL FLOATING GLASS GRID --- */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-12 bg-gradient-to-b from-slate-900/40 via-slate-950/20 to-black/40 border border-white/10 rounded-[2.5rem] overflow-hidden backdrop-blur-3xl shadow-[0_30px_70px_rgba(0,0,0,0.9)] transition-all duration-700 relative z-10 group">
        
        {/* Top Edge Shimmer Laser */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent -translate-x-full animate-[shimmer_4s_infinite] pointer-events-none" />

        {/* --- LEFT HAND SIDE: THE CURATED SYNC BANNER (5 Columns) --- */}
        <div className="md:col-span-5 bg-gradient-to-b from-slate-950 via-neutral-950 to-slate-950 p-8 md:p-10 flex flex-col justify-between relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:14px_14px]" />
          
          <div className="flex items-center gap-2 relative z-10">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
            <span className="text-[9px] font-mono font-black uppercase tracking-[0.25em] text-slate-400">BOIPOKA CORE ENTRY</span>
          </div>

          <div className="my-10 md:my-0 space-y-3 relative z-10">
            <h3 className="text-3xl font-serif font-black text-white leading-tight">
              Vault <br />
              Decryption <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-200 font-sans font-light italic">Node</span>
            </h3>
            <p className="text-[11px] font-mono text-slate-500 leading-relaxed uppercase tracking-widest">
              Synchronize dynamic logs to authenticate bookmarks, reading metrics, and historical metadata.
            </p>
          </div>

          <div className="text-[9px] font-mono text-slate-600 tracking-widest relative z-10 uppercase">
            // SECURE TUNNEL ESTABLISHED
          </div>
        </div>

        {/* --- RIGHT HAND SIDE: INTERACTIVE FORM TERMINAL (7 Columns) --- */}
        <div className="md:col-span-7 p-8 md:p-12 flex flex-col justify-center space-y-6 relative bg-slate-950/10">
          
          <div className="space-y-1">
            <h2 className="text-xl md:text-2xl font-mono uppercase font-black text-white tracking-widest">
              Identity Verification
            </h2>
            <p className="text-xs text-slate-500">
              Input credential strings to map user data payload.
            </p>
          </div>

          {/* Form Core Layout */}
          <form onSubmit={handleSignIn} className="space-y-5">
            
            {/* Field 1: Email Account Node */}
            <div className="relative group/input">
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused('email')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-slate-950/40 border border-white/5 focus:border-amber-500/30 rounded-2xl px-5 pt-6 pb-2 text-sm text-white font-mono placeholder-transparent focus:outline-none transition-all duration-300 shadow-inner group-hover/input:border-white/10"
              />
              <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-mono uppercase tracking-[0.15em] ${
                isFocused === 'email' || email
                  ? 'top-2 text-[9px] text-amber-400 font-black' 
                  : 'top-[18px] text-xs text-slate-500'
              }`}>
                User Identity Email
              </label>
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-500 ${isFocused === 'email' ? 'w-4/5' : 'w-0'}`} />
            </div>

            {/* Field 2: Password Account Node (With Feature: Animated Eye Toggle) */}
            <div className="relative group/input">
              <input 
                type={showPassword ? 'text' : 'password'} 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onFocus={() => setIsFocused('password')}
                onBlur={() => setIsFocused('')}
                placeholder=" "
                className="w-full bg-slate-950/40 border border-white/5 focus:border-amber-400/30 rounded-2xl px-5 pr-12 pt-6 pb-2 text-sm text-white font-mono placeholder-transparent focus:outline-none transition-all duration-300 shadow-inner group-hover/input:border-white/10"
              />
              <label className={`absolute left-5 transition-all duration-300 pointer-events-none font-mono uppercase tracking-[0.15em] ${
                isFocused === 'password' || password
                  ? 'top-2 text-[9px] text-amber-400 font-black' 
                  : 'top-[18px] text-xs text-slate-500'
              }`}>
                Security Password
              </label>

              {/* ⭐ UNIQUE FEATURE: Password Eye Visiblity Suite */}
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 mt-1 text-slate-500 hover:text-white transition-colors p-1"
              >
                {showPassword ? (
                  <span className="text-xs font-mono font-bold text-amber-400 tracking-tighter">HIDE</span>
                ) : (
                  <span className="text-xs font-mono font-bold text-slate-500 tracking-tighter">SHOW</span>
                )}
              </button>
              
              <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-500 ${isFocused === 'password' ? 'w-4/5' : 'w-0'}`} />
            </div>

            <div className="text-right">
              <a href="#reset" className="text-[10px] font-mono text-slate-600 hover:text-amber-400 transition-colors">
                Lost passkey?
              </a>
            </div>

            {/* CTA Auth Execution Engine button */}
            <div className="pt-2 space-y-4">
              <button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-white hover:bg-amber-400 text-slate-950 font-mono font-black text-xs uppercase tracking-[0.25em] py-4 rounded-2xl transition-all duration-300 transform active:scale-[0.98] shadow-2xl flex items-center justify-center gap-2 group/btn disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <span className="loading loading-spinner loading-xs text-slate-950"></span>
                    <span>Compiling Node Parameters...</span>
                  </>
                ) : (
                  <>
                    <span>Execute Access Code</span>
                    <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300">➔</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* --- ⭐ UNIQUE FEATURE: SOCIAL AUTH QUICK NODES SPLIT SEPARATOR --- */}
          <div className="relative flex py-2 items-center">
            <div className="flex-grow border-t border-white/5"></div>
            <span className="flex-shrink mx-4 text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em]">OR INTERCONNECT VIA</span>
            <div className="flex-grow border-t border-white/5"></div>
          </div>

          {/* Quick Matrix Action Nodes Buttons Grid */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-white/10 text-xs text-slate-300 font-mono py-3 px-4 rounded-xl transition-all duration-300 active:scale-95">
              <span className="text-sm">G</span> Google Node
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/[0.02] hover:bg-white/5 border border-white/5 hover:border-white/10 text-xs text-slate-300 font-mono py-3 px-4 rounded-xl transition-all duration-300 active:scale-95">
              <span className="text-sm">𝕏</span> GitHub Log
            </button>
          </div>

          <div className="text-center pt-2">
            <p className="text-xs text-slate-500">
              Unregistered token registry?{' '}
              <Link to="/signup" className="text-amber-400 font-mono font-bold hover:text-white transition-colors ml-1">
                Compile Account ➔
                  </Link>
            </p>
          </div>

        </div>

      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Signin;