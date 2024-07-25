import { createContext, useState } from 'react';

const BooksContext = createContext();
//we will be moving our books array state variable
//and all its associated CRUD functions/operations here

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
            }

            return book;
        });

        setBooks(updatedBooks);
    };


    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title,
            },
        ];
        setBooks(updatedBooks);
    };
    //declare a new object
    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
    }

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    )

}



export { Provider };//named Context
export default BooksContext;//default Context
