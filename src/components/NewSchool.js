import React, { Component } from "react";
import axios from "axios";

export default class NewSchool extends Component {
  constructor(props) {
    super(props);
    this.state = {
      school: "",
      siteAddress: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!this.state.siteAddress) {
            this.setState({ error: "Please insert a siteAddress" });
          } else {
            axios
              .post("/api/schools", {
                name: this.state.school,
                siteAddress: this.state.siteAddress
              })
              .then(response => {
                this.props.changeView("schools");
              })
              .catch(error => {
                console.log(error);
                this.setState({
                  error: "An error occurred, please try again."
                });
              });
          }
        }}
      >
        <input
          name="school"
          placeholder="school"
          onChange={this.handleChange}
          value={this.state.school}
        />
        <input
          name="siteAddress"
          placeholder="siteAddress"
          onChange={this.handleChange}
          value={this.state.siteAddress}
        />
        <button type="reset">Cancel</button>
        <button type="submit">Submit</button>
        {this.state.error ? <p>{this.state.error}</p> : null}
      </form>
    );
  }
}
