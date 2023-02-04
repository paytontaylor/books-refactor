import { useState} from "react";
import useBooksContext from "../hooks/useBooksContext";

const BookCreate = () => {
    const [title, setTitle] = useState("")
    const { createBook } = useBooksContext();

    const handleSubmit = (evt) => {
        evt.preventDefault();
        createBook(title)
        setTitle("")
    };

    const handleChange = (evt) => {
        setTitle(evt.target.value)
    };

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title: </label>
                <input 
                    type="text"
                    id="title" 
                    onChange={handleChange} 
                    value={title}
                    className="input"
                />
                <button type="submit" className="button">Submit</button>
            </form>
        </div>
    )
}

export default BookCreate;