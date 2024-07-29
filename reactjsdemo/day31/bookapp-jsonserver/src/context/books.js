import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const BooksContext = createContext();
//we will be moving our books array state variable
//and all its associated CRUD functions/operations here

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, books);

    //function to get or  fetch all existing records

    const fetchBooks = async () => {
        const response = await axios.get(`http://localhost:3500/books`);
        setBooks(response.data);
    }
    //sugary syntax for Promises 
    //fetch returns response as JSON, JSON.stringify()
    //object literal, JSON.parse()


    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3500/books/${id}`,
            {
                title: newTitle,
            });
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data };
            }
            return book;
        });
        setBooks(updatedBooks);
    };


    const deleteBookById = async (id) => {

        await axios.delete(`http://localhost:3500/books/${id}`);

        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const reponse = await axios.post(`http://localhost:3500/books`, {
            title,
        });
        const updatedBooks = [...books, reponse.data];
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
