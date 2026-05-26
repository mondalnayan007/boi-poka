import React, { useEffect, useState } from 'react';
import BookCard from './BookCard'; // Automatic unique Vinyl ba Liquid premium cards trigger hbe

const Books = () => {
  const [allBooks, setAllBooks] = useState([]);
  const [language, setLanguage] = useState('Select Language');
  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    fetch('booksData.json')
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  console.log(allBooks);

  const handleSort =(type)=>{
    if(type==="English"){
      setLanguage('English'); setIsOpen(false);
      const englishBooks = allBooks.filter(ebook =>ebook.language === type)
      setAllBooks(englishBooks);
    }
    if(type==="Bangla"){
      setLanguage('Bangla'); setIsOpen(false);
      const banglaBooks = allBooks.filter(bbook =>bbook.language === type)
      setAllBooks(banglaBooks);
    }
  }

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black text-slate-300 py-16 px-4 md:px-12 relative overflow-hidden">

      {/* 1. Global Sync Identity: Matrix Line-Grid Effect Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:50px_50px] mix-blend-overlay pointer-events-none z-0" />

      {/* 2. Ambient Soft Aura Glows (Matches Navbar, Hero and Details Page) */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/[0.02] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-purple-500/[0.02] rounded-full blur-[150px] pointer-events-none z-0" />

      {/* Main Content Wrapper Container */}
      <div className="max-w-7xl mx-auto relative z-10 space-y-12">

        {/* --- HEADER ARCHITECTURE --- */}
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between border-b border-white/5 pb-6 gap-4">
          <div className="space-y-2 text-center md:text-left">
            {/* Minimalist Tech Indicator Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.2em] text-slate-400">
              <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-pulse" />
              LITERARY CATALOGUE
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-black tracking-tight text-white">
              Available <span className="text-amber-400 font-light italic font-sans">Books</span>
            </h2>
            {/* Total Counter Meter matching Footer style */}
            <div className="font-mono text-xs text-slate-500 tracking-widest bg-slate-950/60 border border-white/5 px-4 py-2 rounded-xl backdrop-blur-md">
              TOTAL REGISTER: <span className="text-amber-400 font-bold">{allBooks.length} ITEMS</span>
            </div>
          </div>


          {/* Drop down start */}

          <div>
            <div className="relative inline-block text-left z-30">

              {/* TRIGGER BUTTON */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-between gap-6 px-5 py-3 w-52 text-xs font-mono uppercase tracking-[0.2em] text-stone-300 bg-white/[0.02] border border-white/10 hover:border-amber-400/40 rounded-xl transition-all duration-300 group focus:outline-none"
              >
                <span className="truncate group-hover:text-white transition-colors">
                  {language}
                </span>
                <svg
                  className={`w-3 h-3 text-stone-500 group-hover:text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* OUTSIDE CLICK CLOSER */}
              {isOpen && (
                <div className="fixed inset-0 h-screen w-screen bg-transparent cursor-default" onClick={() => setIsOpen(false)} />
              )}

              {/* DROPDOWN MENU */}
              <div
                className={`absolute left-0 mt-2 w-52 bg-neutral-950 border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.9)] p-1.5 flex flex-col transition-all duration-300 origin-top-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto visible' : 'opacity-0 scale-95 pointer-events-none invisible'
                  }`}
              >
                {/* Option 1: English */}
                <button
                  onClick={() => {handleSort('English')  }}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/[0.03] text-xs font-mono text-stone-400 hover:text-amber-400 uppercase tracking-wider transition-all duration-200"
                >
                  English
                </button>

                {/* Option 2: Bengali */}
                <button
                  onClick={() => { handleSort('Bangla') }}
                  className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/[0.03] text-xs font-mono text-stone-400 hover:text-amber-400 uppercase tracking-wider transition-all duration-200"
                >
                  Bangla
                </button>
              </div>

            </div>
          </div>

          {/* Drop down star */}


        </div>

        {/* --- PREMIUM GRID INTERFACE --- */}
        {/* Automatic 3-column architecture, centered grid placement logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 justify-items-center">
          {
            allBooks.map(book => (
              <BookCard key={book.bookId} book={book} />
            ))
          }
        </div>

      </div>
    </div>
  );
};

export default Books;