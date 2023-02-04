import React, { useState, useContext } from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookEdit = ({ book, onSubmit }) => {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleChange = (evt) => {
        setTitle(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        onSubmit();
        editBookById(book.id, title)
    } 

    return (
        <form className="book-edit" onSubmit={handleSubmit} >
            <label htmlFor="title">Title</label>
            <input className="input" value={title} onChange={handleChange}></input>
            <button className="button is-primary">Save</button>
        </form>
    )
}

export default BookEdit;