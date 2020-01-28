import React, { Component } from "react";
import axios from "axios";

export default class SchoolItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: ""
    };
  }

  handleChange = e => {
    this.setState({ newName: e.target.value });
  };

  handleClick = () => {
    axios
      .put("/api/schools/" + this.props.name, { name: this.state.newName })
      .then(response => {
        this.props.updateschools(response.data);
      });
  };

  render() {
    return (
      <li className="school-item">
        <img
          className="school-siteAddress"
          src={this.props.siteAddress}
          alt={this.props.name}
        />
        <h3>{this.props.name}</h3>
        <div>
          <input
            placeholder="Change Name"
            value={this.state.newName}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Update</button>
        </div>
      </li>
    );
  }
}
