import React, { Component } from "react";
import Header from "./components/Header";
import BookList from "./components/BookList";
import NewBook from "./components/NewBook";
import './index.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "books"
    };
    this.changeView = this.changeView.bind(this);
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    return (
      <div>
        <Header />
        <nav>
          <button
            onClick={() => {
              this.setState({ view: "books" });
            }}
          >
            Book
          </button>
          <button
            onClick={() => {
              this.setState({ view: "new" });
            }}
          >
            +
          </button>
          <button>memories</button>
        </nav>
        {this.state.view === "books" ? <BookList /> : null}
        {this.state.view === "new" && <NewBook changeView={this.changeView} />}
      </div>
    );
  }
}

export default App;

