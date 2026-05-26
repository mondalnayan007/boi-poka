import React, { useEffect, useState } from 'react';
import { getAddBooks } from '../../Utils/Utils';
import { useLoaderData } from 'react-router';
import ReadBookCard from '../../components/REadBookCard/ReadBookCard';

const ReadBooks = () => {

    const [allReadBooks, setAllReadBooks] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [currentSort, setCurrentSort] = useState('Sort Rules');

    const allBooksList = useLoaderData();
    console.log(allBooksList);


    useEffect(() => {
        const readBooksList = getAddBooks();
        const convertedBooks = readBooksList.map(id => parseInt(id))
        const readBook = allBooksList.filter(book => convertedBooks.includes(book.bookId));
        setAllReadBooks(readBook);
    }, [])


    const handleSort = (type)=>{
         

          if(type === 'page'){
             setCurrentSort(type)
            setCurrentSort('Sort by Page'); setIsOpen(false);
            const sortByPage = [...allReadBooks].sort((a,b)=> a.totalPages - b.totalPages);
            setAllReadBooks(sortByPage)
          }
          if(type === 'ratings'){
             setCurrentSort(type)
             setCurrentSort('Sort by Ratings'); setIsOpen(false); 
             const sortByPage = [...allReadBooks].sort((a,b)=> a.rating - b.rating);
            setAllReadBooks(sortByPage)

          }
    }





    return (
        <div className=' bg-gradient-to-b from-slate-950 via-slate-900 to-black'>


            <div className='pt-40  '>
                <div className='flex justify-end m-3'>
                    <div className="relative inline-block text-left z-30">

                        {/* TRIGGER BUTTON (Ekhane select kora value-ti dynamic-ally show korbe) */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-between gap-6 px-5 py-3 w-56 text-xs font-mono uppercase tracking-[0.2em] text-stone-300 bg-white/[0.02] border border-white/10 hover:border-amber-400/40 rounded-xl transition-all duration-300 group focus:outline-none"
                        >
                            <span className="truncate group-hover:text-white transition-colors">
                                {currentSort} {/* 🌟 Active state handler output text line */}
                            </span>
                            <svg
                                className={`w-3 h-3 text-stone-500 group-hover:text-amber-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* BACKDROP ACTION CAPTURE: Element er baire click korle close hbe */}
                        {isOpen && (
                            <div className="fixed inset-0 h-screen w-screen bg-transparent cursor-default" onClick={() => setIsOpen(false)} />
                        )}

                        {/* DROPDOWN MENU PANEL */}
                        <div
                            className={`absolute right-0 mt-2 w-64 bg-neutral-950 border border-white/10 rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.9)] p-2 gap-1 flex flex-col transition-all duration-300 origin-top-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto visible' : 'opacity-0 scale-95 pointer-events-none invisible'
                                }`}
                        >
                            {/* Option 1: Pages */}
                            <button
                                onClick={() => { handleSort('page') }}
                                className="w-full text-left p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-200 group/item flex flex-col gap-0.5"
                            >
                                <span className="text-xs font-mono text-stone-400 group-hover/item:text-amber-400 uppercase tracking-wider">Sort by Page</span>
                                <span className="text-[10px] text-stone-600">Arrange by token page density</span>
                            </button>

                            {/* Option 2: Ratings */}
                            <button
                                onClick={() => { handleSort('ratings') }}
                                className="w-full text-left p-3 rounded-lg hover:bg-white/[0.03] border border-transparent hover:border-white/5 transition-all duration-200 group/item flex flex-col gap-0.5"
                            >
                                <span className="text-xs font-mono text-stone-400 group-hover/item:text-amber-400 uppercase tracking-wider">Sort by Ratings</span>
                                <span className="text-[10px] text-stone-600">Filter via critical matrix score</span>
                            </button>
                        </div>

                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    {
                        allReadBooks.map(readBook => <ReadBookCard readBook={readBook}></ReadBookCard>)
                    }
                </div>

            </div>
        </div>
    );
};

export default ReadBooks;