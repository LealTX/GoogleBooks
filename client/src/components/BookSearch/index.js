import React, { Component } from "react";
import axios from "axios";

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {book: {}}
    }


    details = event => {
        event.preventDefault();
        window.open(this.props.link);
    }
    save = event => {
        event.preventDefault();
        axios.post("/api/books", {
            title: this.state.book.title,
            authors: this.state.book.authors,
            thumbnail: this.state.book.thumbnail,
            synopsis: this.state.book.synopsis
        }).then(response => {
            this.props.saveRemove(this.state.book.id);
            console.log(response);
        }).catch(err => console.log(err))

    }

    onComponentMounted() {
        const bookInfo = {id: this.props.id, title: this.props.title, authors: this.props.authors, thumbnail: this.props.thumbnail, synopsis: this.props.synopsis};
        this.setState({book: bookInfo});
    }
    
    render() {
      return  (
        <div className="book mx-auto">
            <h2>{this.props.title} by {this.props.authors}</h2>
            <img className="img-fluid" src={this.props.thumbnail} alt="Book Jacket" />
            <br/>
            <button type="button" className="btn btn-success mb-2 mt-2" onClick={this.details}>Details</button>
            <button type="button" className="btn btn-success mb-2 mt-2 ml-2" onClick={this.save}>Save</button>
            <p>{this.props.synopsis}</p>
        </div>
    )
        }

};
export default BookSearch;