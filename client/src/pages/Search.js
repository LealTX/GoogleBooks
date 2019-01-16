import React, { Component } from "react";
import API from "../utils/API";
import BookSearch from "../components/BookSearch";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
    state = {
        search: "",
        title: "",
        authors: "",
        description: "",
        image: "",
        link: "",
        results: []
    }


    handleFormSubmit = event => {
        event.preventDefault();
        API.getBooks(this.state.search)
            .then(res => {
                this.setState({ results: res.data.items })
                // this.handleResetButton();
            });
    };

    handleResetButton = () => {
        this.setState({ search: "" })
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleBookSave = index => {
        const newBook = {
            title:
                (this.state.results[index]) ?
                    this.state.results[index]
                    :
                    this.state.results[index],
            link: this.state.results[index].web_url
        }
        API.saveBooks(newBook)
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Container fluid>
                <Row>
                    <h1>Search for Books</h1>
                </Row>
                <Col size="md-9">
                    <Row>
                        <form className="form-inline">
                            <Input
                                value={this.state.search}
                                onChange={this.handleInputChange}
                                name="search"
                                placeholder="Type a book"
                            />
                            <FormBtn
                                onClick={this.handleFormSubmit}
                            >
                                Search
                    </FormBtn>
                        </form>
                    </Row>
                    <div className="books">
                        {!this.state.results ? <h3>Search Results for {this.state.search}</h3> : <br />}
                        {this.state.results.map(book => (
                            <BookSearch
                                key={book.id}
                                id={book.id}
                                authors={book.volumeInfo.authors}
                                link={book.volumeInfo.previewLink}
                                title={book.volumeInfo.title}
                                thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                synopsis={book.volumeInfo.description}
                                saveRemove={this.handleBookSave}
                            />
                        ))}
                    </div>
                </Col>
            </Container>

        )
    }

}

export default Search;