import React, { Component } from "react";
import Header from "./components/Header";
import SchoolList from "./components/SchoolList";
import NewSchool from "./components/NewSchool";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: "schools"
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
              this.setState({ view: "schools" });
            }}
          >
            school
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
        {this.state.view === "schools" ? <SchoolList /> : null}
        {this.state.view === "new" && <NewSchool changeView={this.changeView} />}
      </div>
    );
  }
}

export default App;

