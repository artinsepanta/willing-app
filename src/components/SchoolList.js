import React, { Component } from "react";
import axios from "axios";
import SchoolItem from "./SchoolItem";

export default class SchoolList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schools: [],
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("/api/schools")
      .then(response => {
        this.setState({ schools: response.data });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: "An unknown error occurred. DON'T TRY AGAIN!!!"
        });
      });
  }

  updateSchools = newSchools => {
    this.setState({ schools: newSchools});
  };

  render() {
    return (
      <>
        <ul>
          {this.state.schools.map(school => (
            <SchoolItem
              updateSchools={this.updateSchools}
              name={school.name}
          siteAddress={school.siteAddress}
              key={school.name}
            />
          ))}
        </ul>
        <p>{this.state.error}</p>
      </>
    );
  }
}
