import { createContext, useState } from "react";
import axios from 'axios';

const BooksContext = createContext();

const Provider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const resp = await axios.get("http://localhost:3001/books")
        setBooks(resp.data)
    };

    const createBook = async (title) => {
        const resp = await axios.post("http://localhost:3001/books", {
          title,
        });
        const updatedBooks = [...books,resp.data];
    
        setBooks(updatedBooks);
    };
    
    const deleteBookById = async (id) =>{
        await axios.delete(`http://localhost:3001/books/${id}`)
        const filteredBooks = books.filter(book =>{
          return book.id !== id;
        })
        setBooks(filteredBooks)
    };
    
    const editBookById = async (id, newTitle) => {
        const resp = await axios.put(`http://localhost:3001/books/${id}`, {
          title: newTitle
        })
        const updatedBooks = books.map((book) => {
          if (book.id === id){
            return { ...book, ...resp.data  }
          }
          return book;
        });
        setBooks(updatedBooks);
    };

    const valueToShare = {
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks
    }

    return (
    <BooksContext.Provider value={valueToShare}>
        {children}
    </BooksContext.Provider>
    )
}

export { Provider };
export default BooksContext;