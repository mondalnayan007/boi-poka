import React from 'react';

const BookCard = ({ book }) => {
  // Destructuring your specific data structure
  const {
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

  return (
    <div className="group relative w-full max-w-[340px] h-[480px] bg-stone-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col justify-end border border-stone-800">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 w-full h-full z-0 transition-transform duration-700 group-hover:scale-110">
        <img 
          src={image} 
          alt={bookName} 
          className="w-full h-full object-cover"
        />
        {/* Deep Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-stone-950/20" />
      </div>

      {/* Top Floating Badge (Category & Year) */}
      <div className="absolute top-4 left-4 right-4 z-20 flex justify-between items-center">
        <span className="bg-amber-500/90 text-stone-950 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full backdrop-blur-sm">
          {category}
        </span>
        <span className="bg-stone-900/80 text-amber-400 text-xs font-mono font-bold px-2.5 py-1 rounded-md border border-stone-700/50 backdrop-blur-sm">
          Est. {yearOfPublishing}
        </span>
      </div>

      {/* Card Content Base */}
      <div className="p-5 relative z-10 w-full bg-gradient-to-t from-stone-950 via-stone-950/95 to-transparent pt-20">
        
        {/* Dynamic Tags */}
        <div className="flex gap-2 mb-2 flex-wrap">
          {tags && tags.map((tag, index) => (
            <span 
              key={index} 
              className="text-[10px] uppercase font-semibold tracking-wider text-stone-400 bg-stone-800/60 border border-stone-700/50 px-2 py-0.5 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Book Title & Author */}
        <h3 className="text-xl font-serif font-bold text-stone-100 leading-tight group-hover:text-amber-400 transition-colors duration-300">
          {bookName}
        </h3>
        <p className="text-sm text-stone-400 font-medium mt-1">
          By <span className="text-stone-300 italic">{author}</span>
        </p>

        {/* Rating & Pages Quick Info */}
        <div className="flex justify-between items-center mt-3 pt-3 border-t border-stone-800 text-xs text-stone-400">
          <div className="flex items-center gap-1.5">
            <div className="flex text-amber-500">
              {/* Simple Dynamic Star Rating View */}
              {"★".repeat(Math.floor(rating))}
              {rating % 1 !== 0 && "½"}
            </div>
            <span className="font-bold text-stone-200">{rating}</span>
          </div>
          <div>
            Pages: <span className="font-bold text-stone-200">{totalPages}p</span>
          </div>
        </div>

        {/* --- UNIQUE HOVER REVEAL EFFECT --- */}
        {/* Hover korle nicher ongshoti upore uthe review and publisher dekhabe */}
        <div className="absolute inset-x-0 bottom-0 max-h-0 opacity-0 group-hover:max-h-[260px] group-hover:opacity-100 transition-all duration-500 ease-in-out bg-stone-950 p-5 border-t-2 border-amber-500 overflow-hidden flex flex-col justify-between z-30">
          
          <div>
            <span className="text-[10px] text-amber-500 uppercase tracking-widest font-bold block mb-1">
              Editorial Review
            </span>
            <p className="text-stone-300 text-xs leading-relaxed line-clamp-6 italic">
              {review}
            </p>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-800 flex justify-between items-center text-[11px]">
            <div className="text-stone-400">
              Publisher: <span className="text-stone-200 font-semibold">{publisher}</span>
            </div>
            <button className="bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-3 py-1.5 rounded transition-colors duration-200">
              Read More
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};

export default BookCard;