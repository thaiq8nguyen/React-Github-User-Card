import React, { Component } from "react";
import axios from "axios";
export default class SearchProfile extends Component {
  constructor() {
    super();
    this.state = { query: "", results: "" };
  }

  handleFormSubmit = event => {
    event.preventDefault();

    axios
      .get(`https://api.github.com/users/${this.state.query}`)
      .then(response => {
        this.setState({ query: "", results: response.data });
      });
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
        <div className="notification">
          <div className="columns is-multiline">
            {this.state.results && (
              <div className="column is-2">
                <article className="media">
                  <figure className="media-left">
                    <p className="image is-64x64">
                      <img src={this.state.results.avatar_url} alt="" />
                    </p>
                  </figure>
                  <div className="media-content">
                    <div className="content">
                      <p>
                        <strong>{this.state.results.login}</strong>
                      </p>
                      <a href={this.state.results.html_url}>Profile</a>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
