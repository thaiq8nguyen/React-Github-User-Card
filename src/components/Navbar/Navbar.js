import React, { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = { mobileMenu: false };
  }
  toggleHomeDisplay = () => {
    this.setState({ mobileMenu: false });
    this.props.toggleHomeDisplay();
  };
  toggleSearchDisplay = () => {
    this.setState({ mobileMenu: false });
    this.props.toggleSearchDisplay();
  };
  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenu: !prevState.mobileMenu }));
  };
  render() {
    return (
      <nav className="navbar is-info">
        <div className="navbar-brand">
          <p className="navbar-item">GitHub Profile Card</p>
          <a
            href="#/"
            className="navbar-burger burger"
            role="button"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleMobileMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          className={
            this.state.mobileMenu ? "navbar-menu is-active" : "navbar-menu"
          }
        >
          <div className="navbar-start">
            <a
              href="#/"
              className="navbar-item"
              onClick={this.toggleHomeDisplay}
            >
              Home
            </a>
            <a
              href="#/"
              className="navbar-item"
              onClick={this.toggleSearchDisplay}
            >
              Search User Profile
            </a>
          </div>
        </div>
      </nav>
    );
  }
}
