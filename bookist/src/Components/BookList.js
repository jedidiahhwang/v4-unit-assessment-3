import React from "react"
import Book from "./Book"

export default function BookList(props) {

    const mappedBooks = props.books.map((element, index) => {
        return <Book 
                    key={element.id}
                    book={element} 
                    index={index}
                    addNewBook={props.addNewBook}
                />
    });

    return <div className="book-list">{mappedBooks}</div>
}