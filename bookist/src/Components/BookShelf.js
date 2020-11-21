import React from "react";

export default function BookShelf(props) {

    const mappedTitles = props.shelf.map((element) => {
        return ( 
            <div className="mapped-titles">
                <p>{element.title}</p>
            </div>
        )
    });

    return (
        <div className="book-shelf">
            <h1>Your Shelf</h1>
            {mappedTitles}
        </div>
    )
}