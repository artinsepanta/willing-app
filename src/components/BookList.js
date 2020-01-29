import React, { Component } from "react";
import axios from "axios";
import BookItem from "./BookItem";

export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/books")
      .then(response => {
        this.setState({ books: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unknown error occurred. DON'T TRY AGAIN!!!"
        });
      });
  }

  updateBooks = newBooks => {
    this.setState({ books: newBooks});
  };

  render() {
    return (
      <>
        <ul>
          {this.state.books.map(book => (
            <BookItem
              updateBooks={this.updateBooks}
              name={book.name}
              image={book.image}
              key={book.name}
            />
          ))}
        </ul>
        <p>{this.state.error}</p>
      </>
    );
  }
}
