import React, {Component} from "react";

export default class BookSearch extends Component {
    constructor () {
        super ();
        
        this.state = {
            input: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }

    handleChange(userInput) {
        this.setState({
            input: userInput,
        })
    }

    handleClick() {
        this.props.filterBooks(this.state.input);
    }

    handleClear() {
        this.setState ({
            input: "",
        })
        this.props.reset();
    }

    render () {
        console.log(this.state);
        return (
        <div className="book-search">
            <input
                id="input"
                placeholder="Enter Title or Author"
                value={this.state.input}
                onChange={(e) => this.handleChange(e.target.value)}
            />
            <button id="search-button" onClick={this.handleClick}>Search</button>
            <button id="clear-button" onClick={this.handleClear}>Clear Search</button>
        </div>
        )
    }
}