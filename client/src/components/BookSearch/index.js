import React, { Component } from "react";
import axios from "axios";
import API from "../../utils/API";

class BookSearch extends Component {
    constructor(props) {
        super(props);
        this.state = { book: {} }
    }


    bookDetails = event => {
        event.preventDefault();
        window.open(this.props.link);
    }

    handleBookSave = index => {
        index.preventDefault();
        API.saveBook({
            title: this.props.title,
            authors: this.props.authors,
            thumbnail: this.props.thumbnail,
            synopsis: this.props.synopsis
        })
            // .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    onComponentMounted() {
        const bookInfo = { id: this.props.id, title: this.props.title, authors: this.props.authors, thumbnail: this.props.thumbnail, synopsis: this.props.synopsis };
        this.setState({ book: bookInfo });
    }

    render() {
        return (
            <div className="book mx-auto">
                <h2>{this.props.title} by {this.props.authors}</h2>
                <img className="img-fluid" src={this.props.thumbnail} alt="Book Jacket" />
                <br />
                <button type="button" className="btn btn-success mb-2 mt-2" onClick={this.bookDetails}>Details</button>
                <button type="button" className="btn btn-success mb-2 mt-2 ml-2" onClick={this.handleBookSave}>Save</button>
                <p>{this.props.synopsis}</p>
            </div>
        )
    }

};
export default BookSearch;