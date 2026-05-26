import React from 'react';
import { Link } from 'react-router';

const BookCard = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    category,
    publisher,
    rating,
    review,
    tags,
    totalPages,
    yearOfPublishing
  } = book;

  // Rating star generator helper
  const renderStars = (ratingNum) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(ratingNum)) {
        stars.push(<span key={i} className="text-amber-400">★</span>);
      } else if (i - 0.5 === ratingNum) {
        stars.push(<span key={i} className="text-amber-400/80">½</span>);
      } else {
        stars.push(<span key={i} className="text-white/20">★</span>);
      }
    }
    return stars;
  };

  return (

    <Link to={`/bookdetails/${bookId}`}>
    <div className="group relative w-full  h-[460px] bg-slate-900/40 rounded-2xl overflow-hidden border border-white/5 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-amber-500/30 flex flex-col justify-end">
      
      {/* Background Image & Ambient Radial Glow */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <img 
          src={image} 
          alt={bookName} 
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Carousel er shathe milate Deep Linear to Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
      </div>

      {/* Top Badges (Category & Year) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        <span className="text-[10px] font-bold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-md backdrop-blur-md">
          {category}
        </span>
        <span className="text-[10px] font-mono text-white/50 bg-white/5 px-2 py-1 rounded border border-white/10 backdrop-blur-sm">
          {yearOfPublishing}
        </span>
      </div>

      {/* Main Content Area */}
      <div className="p-5 relative z-20 w-full transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
        
        {/* Dynamic Genre Tags */}
        <div className="flex gap-1.5 mb-2 flex-wrap">
          {tags && tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[9px] uppercase font-mono tracking-wider text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title & Author */}
        <h3 className="text-lg md:text-xl font-serif font-bold text-white tracking-tight leading-snug line-clamp-1 group-hover:text-amber-400 transition-colors duration-300">
          {bookName}
        </h3>
        <p className="text-xs text-slate-400 mt-0.5">
          By <span className="text-slate-300 italic group-hover:text-white transition-colors duration-300">{author}</span>
        </p>

        {/* Middle Stats Divider */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/5 text-[11px] text-slate-400">
          <div className="flex items-center gap-1">
            <div className="flex tracking-tighter text-xs">{renderStars(rating)}</div>
            <span className="font-bold text-slate-200 ml-0.5">{rating}</span>
          </div>
          <div className="font-mono text-slate-400">
            {totalPages} Pages
          </div>
        </div>

        {/* --- DYNAMIC SLIDE-UP REVEAL PANEL --- */}
        {/* Ei part ti Carousel er look guidelines follow kore seamlessly reveal hobe */}
        <div className="max-h-0 opacity-0 group-hover:max-h-[150px] group-hover:opacity-100 transition-all duration-500 ease-in-out overflow-hidden mt-0 group-hover:mt-3">
          <div className="pt-2 border-t border-white/10">
            <p className="text-[11px] text-slate-300 leading-relaxed line-clamp-4 italic">
              {review}
            </p>
            
            <div className="mt-3 flex justify-between items-center text-[10px] text-slate-400">
              <span className="truncate max-w-[140px]">
                Pub: <strong className="text-slate-200">{publisher}</strong>
              </span>
              <Link to={`/bookdetails/${bookId}`} className="text-amber-400 hover:text-amber-300 font-bold tracking-wider uppercase flex items-center gap-0.5 transition-colors duration-200">
                View Details ➔
              </Link >
            </div>
          </div>
        </div>

      </div>

    </div>
    </Link>
  );
};

export default BookCard;