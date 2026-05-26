import React, { useEffect, useState } from 'react';
import { getAddBooks } from '../../Utils/Utils';
import { useLoaderData } from 'react-router';
import ReadBookCard from '../../components/REadBookCard/ReadBookCard';

const ReadBooks = () => {

    const [allReadBooks, setAllReadBooks] = useState([]);

    const allBooksList = useLoaderData();
    console.log(allBooksList);


    useEffect(() => {
        const readBooksList = getAddBooks();
        const convertedBooks = readBooksList.map(id => parseInt(id))
        const readBook = allBooksList.filter(book => convertedBooks.includes(book.bookId));
        setAllReadBooks(readBook);
    }, [])





    return (
        <div className=' bg-gradient-to-b from-slate-950 via-slate-900 to-black'>
            <div className='pt-40 flex flex-col gap-4 '>
                {
                    allReadBooks.map(readBook => <ReadBookCard readBook={readBook}></ReadBookCard>)
                }
            </div>
        </div>
    );
};

export default ReadBooks;