import React, { Component } from "react";

export default class SearchProfile extends Component {
  constructor() {
    super();
    this.state = { query: "" };
  }
  handleFormSubmit = event => {
    event.preventDefault();
  };
  handleInputChange = event => {
    this.setState({ query: event.target.value });
  };
  render() {
    return (
      <div className="notification">
        <form onSubmit={this.handleFormSubmit}>
          <div className="field">
            <div className="control">
              <input
                type="text"
                className="input"
                name="query"
                onChange={this.handleInputChange}
                value={this.state.query}
                placeholder="GitHub Handle"
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button" type="submit">
                Search
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
