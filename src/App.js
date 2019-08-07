import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import axios from "axios";
import Navbar from "./components/Navbar/Navbar";
import UserCard from "./components/UseCard/UserCard";
import UserFollowers from "./components/UserFollowers/UserFollowers";
import SearchProfile from "./components/SearchProfile/SearchProfile";
import styles from "./App.module.scss";
export default class App extends Component {
  state = {
    defaultUser: "thaiq8nguyen",
    user: "",
    followers: [],
    searchProfileDisplay: false
  };

  async componentDidMount() {
    const userProfile = await axios.get(
      `https://api.github.com/users/${this.state.defaultUser}`
    );
    const userFollowers = await axios.get(
      `https://api.github.com/users/${this.state.defaultUser}/followers`
    );

    this.setState({ user: userProfile.data, followers: userFollowers.data });
  }
  handleHomeDisplay = () => {
    this.setState({ searchProfileDisplay: false });
  };
  handleSearchDisplay = () => {
    this.setState(prevState => ({
      searchProfileDisplay: !prevState.searchProfileDisplay
    }));
  };
  render() {
    return (
      <>
        <Navbar
          toggleHomeDisplay={this.handleHomeDisplay}
          toggleSearchDisplay={this.handleSearchDisplay}
        />

        <CSSTransition
          in={this.state.searchProfileDisplay}
          classNames={{
            enter: styles["search-enter"],
            enterActive: styles["search-enter-active"],
            exit: styles["search-exit"],
            exitActive: styles["search-exit-active"]
          }}
          timeout={300}
          unmountOnExit
        >
          <SearchProfile />
        </CSSTransition>
        <CSSTransition
          in={!this.state.searchProfileDisplay}
          classNames={{
            enter: styles["profile-enter"],
            enterActive: styles["profile-enter-active"],
            exit: styles["profile-exit"],
            exitActive: styles["profile-exit-active"]
          }}
          timeout={500}
          unmountOnExit
        >
          <div className="columns">
            <div className="column is-4">
              {this.state.user && <UserCard user={this.state.user} />}
            </div>
            <div className="column is-4">
              {this.state.followers.length > 0 && (
                <UserFollowers followers={this.state.followers} />
              )}
            </div>
          </div>
        </CSSTransition>
      </>
    );
  }
}
