import React, {Component} from "react";
import BookList from "./BookList";
import BookShelf from "./BookShelf";
import books from "../data.js";

export default class BookContainer extends Component {
    constructor () {
        super ();
        
        this.state = {
            shelf: [],
        }

        this.addNewBook = this.addNewBook.bind(this);
    }

    addNewBook(title) {
        this.setState({
            shelf: this.shelf.push(title),
        })
    }

    render () {
        return (
        <div className="book-container">
            <BookList 
                addNewBook={this.addNewBook}
                books={books}
            />
            <BookShelf/>
        </div>
        )
    }
}