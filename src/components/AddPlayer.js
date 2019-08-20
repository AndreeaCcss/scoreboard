import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./addPlayer.css"


export default class AddPlayer extends Component {
  static propTypes = {
    addPlayer: PropTypes.func.isRequired
  };

  state = { name: "" };

  handleSubmit = (event) => {
    event.preventDefault();
    if(this.state.name.length > 2) {
        this.props.addPlayer(this.state.name)
        this.setState({
            name: ''
        });
    }
    else {
        alert("Name must have at least two characters")
        event.preventDefault();
    }   
}

  handleChange = event => {
    this.setState({
        [event.target.name]: event.target.value
    });
  };

  render() {
      console.log(this.state)
    return (
      <div className="add-player">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    );
  }
}
