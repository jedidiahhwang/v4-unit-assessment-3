import logo from './logo.svg';
import './App.css';

import React, {Component} from "react";
import Header from "./Components/Header";
import BookSearch from "./Components/BookSearch";
import BookContainer from "./Components/BookContainer";
import BookList from './Components/BookList';
import books from "./data.js";

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <BookSearch/>
        <BookContainer/>
      </div>
    );
  }
}

