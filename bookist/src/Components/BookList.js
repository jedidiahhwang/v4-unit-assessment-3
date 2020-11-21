import React from "react"

export default function BookList(props) {

    const mappedBooks = props.bookList.map((element, index) => {
        return (
            <div className="mapped-books" onClick={() => props.addToShelf(element)}>
                <img className="book-cover" src={element.img}/>
                <p className="book-detail">{element.title} by {element.author}</p>
            </div>
        )
    })

    return <div className="book-list">{mappedBooks}</div>

}