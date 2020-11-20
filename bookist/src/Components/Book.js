import React from "react"

export default function Book(props) {
    return (
        <div 
            onClick={() => props.addNewBook(props.title)}
            className="book"
        >  
            <img 
                className="book-preview-image" 
                src={props.book.img}
                alt="book-cover"
            />
            <p>{props.book.title}</p>
            <p>{props.book.author}</p>
        </div>
    )
}