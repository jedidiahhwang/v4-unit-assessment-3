import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import Header from "./Components/Header";
import BookSearch from "./Components/BookSearch";
import BookList from "./Components/BookList";
import BookShelf from "./Components/BookShelf";
import books from "./data.js";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      books: books,
      shelf: [],
    }

    this.addToShelf = this.addToShelf.bind(this);
    this.clearShelf = this.clearShelf.bind(this);
    this.filterBooks = this.filterBooks.bind(this);
    this.reset = this.reset.bind(this);
  }

addToShelf(title) {
  this.setState({
    shelf: [title, ...this.state.shelf],
  })
}

clearShelf() {
  this.setState({
    shelf: [],
  })
}

reset() {
  this.setState({
    books: books,
  })
}

filterBooks(input) {
  let filteredBooks = this.state.books.filter((element) => {

    //If the title exists in the books array, return that book (i.e. indexOf() returns -1, the title does NOT exist)
    //Likewise, do the same to the author
    //For convenience, put the input to lower case (courtesy of Andrew Turner)
    if(element.title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
      return element;
    } else if(element.title.toLowerCase().indexOf(input.toLowerCase()) !== -1) {
      return element;
    }
  })
  this.setState({
    books: filteredBooks,
  })
}

  render() {
    return (
      <div className="App">
        <Header/>
        <BookSearch filterBooks={this.filterBooks} reset={this.reset}/>
        <BookList bookList={this.state.books} addToShelf={this.addToShelf} filterBooks={this.filterBooks}/>
        <BookShelf shelf={this.state.shelf} clearShelf={this.clearShelf}/>
      </div>
    );
  }
}

