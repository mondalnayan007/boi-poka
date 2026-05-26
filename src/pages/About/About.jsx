import React from 'react';
import { Link } from 'react-router';

const About = () => {
  const metrics = [
    { value: "480K+", label: "Archived Tokens", detail: "Books categorized into secure user slots." },
    { value: "12M+", label: "Pages Synchronized", detail: "Real-time layout processing matrix lines." },
    { value: "99.4%", label: "System Uptime", detail: "Continuous reading data pipeline latency sync." }
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-stone-300 pt-36 pb-20 px-6 md:px-16 relative overflow-hidden font-sans">
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-amber-500/[0.01] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto space-y-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="md:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 text-[9px] font-mono tracking-[0.4em] text-amber-500 uppercase">
              Manifesto // System Specs
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.05]">
              The Core <br /><span className="font-sans font-light italic text-stone-400">Architecture.</span>
            </h1>
          </div>

          <div className="md:col-span-7 pt-4 md:pt-14 space-y-6 border-t md:border-t-0 md:border-l border-white/10 md:pl-12">
            <p className="text-lg md:text-xl font-light text-stone-400 leading-relaxed font-serif italic">
              "BoiPoka is not just a digital inventory. It is an analytical hub meticulously crafted for bibliophiles who view reading as a structured exploration of knowledge."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/5">
          {metrics.map((item, idx) => (
            <div key={idx} className="space-y-3 p-6 rounded-2xl bg-white/[0.01] border border-white/5 hover:border-amber-500/30 transition-all duration-500 group">
              <div className="text-3xl md:text-4xl font-serif font-black text-white group-hover:translate-x-1 transition-transform duration-300">{item.value}</div>
              <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-500 font-bold">{item.label}</div>
              <p className="text-xs text-stone-600 leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-indigo-950 via-crimson-950 to-zinc-900 text-white rounded p-8 md:p-14 text-center space-y-6 relative overflow-hidden shadow-2xl">
          <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight max-w-xl mx-auto">Ready to construct your personal library?</h2>
          <div className="pt-2">
            <Link to="/signup" className="inline-flex items-center gap-3 bg-amber-400 text-black font-mono font-black text-xs uppercase tracking-[0.25em] px-8 py-4 rounded-xl hover:bg-neutral-900 hover:text-white transition-all duration-300">
              Initialize Account Node ➔
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;