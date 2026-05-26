
const getAddBooks = ()=>{
    const storedBooksSTR = localStorage.getItem("read") ;

    if(storedBooksSTR){
        const storedBooks = JSON.parse(storedBooksSTR);
        return storedBooks;
    }
    else{
         return [];
    }

}

const addBooksToLocal =(id)=>{
     const storedBooks = getAddBooks();

     if(storedBooks.includes(id)){
        alert("Book already exist");
     }
     else{
        storedBooks.push(id);
        const addedBooks = JSON.stringify(storedBooks);
        localStorage.setItem("read",addedBooks);

     }
}


export {addBooksToLocal,getAddBooks}