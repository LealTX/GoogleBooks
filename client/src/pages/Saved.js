import React, { Component } from "react";
import API from "../utils/API";
import BookSearch from "../components/BookSearch";
import { Container, Row, Col } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Saved extends Component {
    state = {
        book: {}
    };

    componentDidMount() {
        API.getSaved(this.props.match.params.id)
            .then(res => this.setState({ book: res.data }))
            .catch(err => console.log(err));
    }
}

export default Saved;