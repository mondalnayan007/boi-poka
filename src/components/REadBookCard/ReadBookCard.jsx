import React from 'react';
import { Link } from 'react-router';

const ReadBookCard = ({ readBook }) => {
  console.log(readBook);

  // Fallback verification mapping
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    rating,
    tags,
    totalPages,
    publisher,
    yearOfPublishing
  } = readBook;

  return (
    <div className="group relative w-full shadow-[0_20px_50px_rgba(0,0,0,0.9)] hover:shadow-[0_0_40px_rgba(245,158,11,0.15)] border border-white/5 hover:border-white/10 rounded-2xl p-4 md:p-5 flex flex-col sm:flex-row gap-6 transition-all duration-500 backdrop-blur-xl shadow-lg items-center sm:items-stretch overflow-hidden">
      
      {/* Background Matrix Sync Laser Line */}
      <div className="absolute top-0 left-0 w-[2px] h-0 bg-amber-400 group-hover:h-full transition-all duration-500" />
      
      {/* 1. Left Section: Compact Cover Art Plate */}
      <div className="w-full sm:w-32 max-w-[130px] aspect-[3/4] bg-slate-950 rounded-xl overflow-hidden border border-white/5 shadow-inner relative flex-shrink-0 group-hover:shadow-2xl transition-all duration-500">
        <img 
          src={image} 
          alt={bookName} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
      </div>

      {/* 2. Right Section: Detailed Metadata Blueprint (7 Columns Layout) */}
      <div className="flex-1 flex flex-col justify-between w-full space-y-4">
        
        {/* Top Segment: Title, Tags & Badges */}
        <div className="space-y-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[9px] font-mono tracking-widest uppercase bg-amber-400/10 text-amber-400 border border-amber-400/20 px-2 py-0.5 rounded-md">
              {category}
            </span>
            {tags && tags.slice(0, 2).map((tag, idx) => (
              <span key={idx} className="text-[9px] font-mono text-slate-500 tracking-wider">
                #{tag}
              </span>
            ))}
          </div>

          <h3 className="text-lg md:text-xl font-serif font-black text-white group-hover:text-amber-400 transition-colors duration-300 tracking-tight line-clamp-1">
            {bookName}
          </h3>
          <p className="text-xs text-slate-400 font-medium font-sans">
            By <span className="text-slate-300 italic font-serif">{author}</span>
          </p>
        </div>

        {/* Middle Segment: Technical Specifications Grid */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] font-mono text-slate-500 border-t border-white/5 pt-3">
          <div className="flex items-center gap-1">
            <span className="text-amber-400">★</span>
            <span className="text-slate-300 font-bold">{rating}</span>
          </div>
          <div>
            Pages: <span className="text-slate-300">{totalPages}p</span>
          </div>
          <div className="hidden sm:inline-block">
            Publisher: <span className="text-slate-400">{publisher}</span>
          </div>
          <div className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-full uppercase tracking-wider ml-auto font-sans font-bold">
            ✓ Finished
          </div>
        </div>

        {/* Bottom Segment: Dynamic Navigation Action Suite */}
        <div className="flex justify-end items-center pt-2 border-t border-white/5 sm:border-t-0 sm:pt-0">
          <Link 
            to={`/book/${bookId}`} 
            className="text-[11px] font-mono uppercase font-bold tracking-[0.15em] text-slate-400 hover:text-white transition-colors duration-200 flex items-center gap-1 group/btn"
          >
            Review Insights 
            <span className="transform translate-x-0 group-hover/btn:translate-x-1 transition-transform duration-300 text-amber-400">➔</span>
          </Link>
        </div>

      </div>

    </div>
  );
};

export default ReadBookCard;