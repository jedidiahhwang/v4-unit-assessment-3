import React, {Component} from "react";

export default class BookSearch extends Component {
    constructor () {
        super ();
        
        this.state = {
            input: "",
        };
    }

    handleInputChange(value) {
        this.setState({
            input: value,
        })
    }

    handleAdd() {
        this.props.add(this.state.input);
        this.setState({
            input: "",
        })
    }

    handleClear() {
        
    }

    render () {
        return (
        <div className="book-search">
            <input
                id="input"
                value={this.state.input}
                placeholder="Enter Title"
                onChange={(e) => this.handleInputChange(e.target.value)}
            />
            <button id="search-button" onClick={this.handleAdd}>Search</button>
            <button id="clear-button" onClick={this.handleClear}>Clear Search</button>
        </div>
        )
    }
}