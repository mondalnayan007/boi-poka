import React from 'react';

const PremiumFooter = () => {
  return (
    <footer className="relative w-full bg-gradient-to-b  from-slate-900 via-slate-950 to-black text-slate-400 font-sans overflow-hidden border-t border-white/5">
      
      {/* Hero Section-er moto Matrix Line-Grid Effect Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] mix-blend-overlay pointer-events-none" />
      
      {/* Top Ambient Glow (Matches Carousel Aura) */}
      <div className="absolute top-0 left-1/4 w-96 h-32 bg-gradient-to-r from-purple-500/10 via-amber-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        
        {/* --- TOP ROW: BRAND & NEWSLETTER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 border-b border-white/5 items-center">
          
          {/* Brand Intro */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
              <h2 className="text-xl font-serif font-black tracking-wider text-white uppercase">
                Boi<span className="text-amber-400">Poka</span>
              </h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 max-w-sm leading-relaxed">
              Curating exceptional literary journeys since 1925. From timeless epics to modern psychological thrillers.
            </p>
          </div>

          {/* Premium Newsletter Box */}
          <div className="lg:col-span-7 w-full space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Join The Literary Circle
            </h4>
            <form className="flex w-full max-w-md bg-white/5 p-1.5 rounded-xl border border-white/10 backdrop-blur-md focus-within:border-amber-500/50 transition-colors duration-300">
              <input 
                type="email" 
                placeholder="Enter your email for secret drops..." 
                className="w-full bg-transparent px-3 py-2 text-xs text-white placeholder-slate-500 outline-none"
                required
              />
              <button className="bg-white hover:bg-amber-400 text-slate-950 font-bold text-xs px-5 py-2 rounded-lg transition-all duration-300 transform active:scale-95 whitespace-nowrap">
                Subscribe ➔
              </button>
            </form>
          </div>
        </div>

        {/* --- MIDDLE ROW: LINKS GRID --- */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 text-xs">
          
          {/* Col 1 */}
          <div className="space-y-4">
            <h5 className="font-mono font-bold uppercase tracking-wider text-slate-200 border-l-2 border-amber-500 pl-2">
              Explore Genres
            </h5>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Sci-Fi & Cyberpunk</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Psychological Thrillers</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Historical Biographies</a></li>
              <li><a href="#" className="hover:text-amber-400 transition-colors duration-200">Award Winners</a></li>
            </ul>
          </div>

          {/* Col 2 */}
          <div className="space-y-4">
            <h5 className="font-mono font-bold uppercase tracking-wider text-slate-200 border-l-2 border-purple-500 pl-2">
              Curation
            </h5>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Bestsellers Grid</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Editor's Hardcover Pick</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Rare & Out of Print</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors duration-200">Audiobook Lounge</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-4">
            <h5 className="font-mono font-bold uppercase tracking-wider text-slate-200 border-l-2 border-cyan-500 pl-2">
              Services
            </h5>
            <ul className="space-y-2.5 font-medium">
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Book Club Membership</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Gift Vouchers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Institutional Orders</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors duration-200">Author Submissions</a></li>
            </ul>
          </div>

          {/* Col 4: Contact/Store Info */}
          <div className="space-y-4">
            <h5 className="font-mono font-bold uppercase tracking-wider text-slate-200 border-l-2 border-rose-500 pl-2">
              BoiPoka
            </h5>
            <ul className="space-y-2 text-slate-400 leading-relaxed font-mono">
              <li>Dhaka, Bangladesh</li>
              <li>support@pageturner.com</li>
              <li className="text-slate-500 mt-2">Mon - Sun: 9:00 AM - 10:00 PM</li>
            </ul>
          </div>

        </div>

        {/* --- BOTTOM ROW: COPYRIGHT & SOCIAL --- */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] font-mono text-slate-500">
          
          <div>
            © {new Date().getFullYear()} BoiPoka. INC. ALL RIGHTS RESERVED.
          </div>

          {/* Dynamic Social Anchors */}
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase tracking-widest">TWITTER</a>
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase tracking-widest">INSTAGRAM</a>
            <a href="#" className="hover:text-white transition-colors duration-200 uppercase tracking-widest">GOODREADS</a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default PremiumFooter;