import React, { useState, useEffect } from 'react';
import { useLoaderData, useParams, useNavigate, Link } from 'react-router';
import { addBooksToLocal } from '../../Utils/Utils';

const BookDetails = () => {
  const loaderData = useLoaderData();
  const { id } = useParams();
  const BookId = parseInt(id);
  const navigate = useNavigate();

  const [books, setBooks] = useState(loaderData);
  const [loading, setLoading] = useState(!loaderData);
  const [marked,setMarked] = useState(false);

  useEffect(() => {
    if (!loaderData) {
      setLoading(true);
      fetch('/books.json')
        .then((res) => res.json())
        .then((data) => {
          setBooks(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error(err);
          setLoading(false);
        });
    } else {
      setBooks(loaderData);
    }
  }, [loaderData]);

 const handleMarkAsRead = (id)=>{
     addBooksToLocal(id);
     setMarked(true);

     
 }




  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center gap-2">
        <span className="loading loading-spinner text-amber-500 w-10"></span>
        <p className="text-[10px] font-mono tracking-widest text-slate-500 uppercase animate-pulse">Initializing Portal...</p>
      </div>
    );
  }

  const booksArray = Array.isArray(books) ? books : (books?.books || books?.data || []);
  const singleBook = booksArray.find(book => book.bookId === BookId);

  if (!singleBook) {
    return (
      <div className="min-h-screen bg-slate-950 text-slate-400 font-mono flex flex-col items-center justify-center gap-4">
        <p className="text-amber-500 text-sm">Token catalog #{id} lost.</p>
        <button onClick={() => navigate(-1)} className="text-xs text-white uppercase tracking-wider border-b border-amber-500 pb-1">➔ Retract</button>
      </div>
    );
  }

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
    yearOfPublishing,
    online
  } = singleBook;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 pt-24 pb-12 px-4 md:px-12 relative overflow-hidden">
      
      {/* Editorial Matrix Aura Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-500/[0.03] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none" />

      {/* Main Structural Split Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
        
        {/* --- LEFT SIDE: FIXED PREMIUM CANVAS (lg:col-span-5) --- */}
        <div className="lg:col-span-5 lg:sticky lg:top-28 flex flex-col items-center lg:items-start space-y-4">
          <div className="relative w-full max-w-[360px] aspect-[3/4] bg-gradient-to-br from-slate-900 to-neutral-950 rounded-3xl p-5 border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.8)] group overflow-hidden">
            
            {/* Ambient Laser Edge Highlight on Cover Wrapper */}
            <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />
            
            {/* The Book Floating Plate */}
            <div className="w-full h-full rounded-2xl overflow-hidden relative shadow-2xl border border-black/50">
              <img 
                src={image} 
                alt={bookName} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
            </div>

            {/* Dynamic Genre Floater Overlay */}
            <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center z-20">
              <span className="text-[10px] font-mono tracking-widest uppercase bg-slate-950/90 text-amber-400 px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md shadow-lg">
                {category}
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-black/60 px-2.5 py-1.5 rounded border border-white/5 backdrop-blur-sm">
                EST: {yearOfPublishing}
              </span>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: MAGAZINE CHRONICLES (lg:col-span-7) --- */}
        <div className="lg:col-span-7 space-y-8 pt-4 lg:pt-0">
          
          {/* Section 1: Editorial Title Frame */}
          <div className="space-y-3 border-b border-white/5 pb-6">
            <div className="flex gap-2 flex-wrap">
              {tags && tags.map((tag, index) => (
                <span key={index} className="text-[9px] font-mono uppercase tracking-[0.2em] text-slate-400 bg-white/5 border border-white/5 px-3 py-1 rounded-md">
                  #{tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-6xl font-serif font-black text-white tracking-tight leading-[1.05] drop-shadow-sm">
              {bookName}
            </h1>
            
            <p className="text-sm md:text-base text-slate-400 font-mono tracking-wider">
              AUTHOR CURATION // <span className="text-amber-400 font-serif font-bold italic text-lg ml-1">{author}</span>
            </p>
          </div>

          {/* Section 2: Data Matrix Graphs Dashboard */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            
            {/* Metric Box 1: Rating */}
            <div className="bg-slate-950/50 border border-white/5 p-4 rounded-2xl relative overflow-hidden group/box">
              <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">Curation Index</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white font-serif">{rating}</span>
                <span className="text-xs text-amber-400">★</span>
              </div>
              {/* Fake Micro Graph Bar */}
              <div className="w-full bg-white/5 h-[3px] rounded-full mt-3 overflow-hidden">
                <div className="bg-amber-400 h-full transition-all duration-1000" style={{ width: `${(rating/5)*100}%` }} />
              </div>
            </div>

            {/* Metric Box 2: Pages */}
            <div className="bg-slate-950/50 border border-white/5 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">Volume Metric</span>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-black text-white font-serif">{totalPages}</span>
                <span className="text-[10px] font-mono text-slate-400">PAGES</span>
              </div>
              <div className="w-full bg-white/5 h-[3px] rounded-full mt-3 overflow-hidden">
                <div className="bg-purple-500 h-full" style={{ width: '70%' }} />
              </div>
            </div>

            {/* Metric Box 3: Publisher */}
            <div className="bg-slate-950/50 border border-white/5 p-4 rounded-2xl relative overflow-hidden">
              <span className="text-[10px] font-mono text-slate-500 uppercase block tracking-wider mb-1">House Register</span>
              <div className="text-sm font-bold text-slate-200 uppercase tracking-wide truncate mt-1">
                {publisher}
              </div>
              <div className="text-[9px] font-mono text-slate-500 mt-2">REF: #BP-00{BookId}</div>
            </div>

          </div>

          {/* Section 3: The Monolith Synopsis Box */}
          <div className="relative bg-gradient-to-br from-slate-900/60 to-neutral-950/40 border border-white/10 p-6 md:p-8 rounded-3xl shadow-inner">
            {/* Design Icon Ornament */}
            <div className="absolute top-4 right-6 text-xs font-mono text-slate-600 tracking-widest select-none">// SYNOPSIS CRITIQUE</div>
            <span className="text-6xl text-purple-500/10 font-serif absolute top-2 left-4 select-none">“</span>
            
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans italic pl-4 relative z-10 pt-4">
              {review}
            </p>
          </div>

          {/* Section 4: Premium Geometric CTA Footer Dock */}
          <div className="pt-4 flex flex-col sm:flex-row gap-4 items-center">
            
            {/* Primary Action */}
            <Link to={`${online}`} target="_blank"  className="w-full sm:flex-1 cursor-pointer bg-white hover:bg-amber-400 text-slate-950 font-serif font-black text-xs uppercase tracking-[0.2em] py-4 px-6 rounded-2xl shadow-xl transition-all duration-300 transform active:scale-95">
              Read Online
            </Link>

            {/* Secondary Action */}
            <button onClick={()=>handleMarkAsRead(id)}  className="w-full sm:flex-1 cursor-pointer bg-slate-900/60 hover:bg-white/5 text-white font-mono font-bold text-xs uppercase tracking-[0.15em] py-4 px-6 rounded-2xl border border-white/10 backdrop-blur-md transition-all duration-300 transform active:scale-95 flex items-center justify-center gap-2">
              Mark As Read
              <span className="text-slate-500">➔</span>
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default BookDetails;