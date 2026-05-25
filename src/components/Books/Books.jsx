import React, { useEffect, useState } from 'react';
import BookCard from './BookCard';

const Books = () => {




    const [allBooks, setAllBooks] = useState([]);

    useEffect(() => {
        fetch('booksData.json')
            .then(res => res.json())
            .then(data => setAllBooks(data))

    }, [])

    console.log(allBooks);


    return (
        <div>

            <h2 className='text-3xl font-semibold text-center my-3'>Available Books</h2>
            <h1 className='font-bold my-2'>Total Books: {allBooks.length}</h1>

            <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
                {
                    allBooks.map(book => <BookCard key={book.bookId} book={book}></BookCard>)
                }
            </div>
        </div>
    );
};

export default Books;