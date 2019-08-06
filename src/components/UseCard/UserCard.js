import React, { Component } from "react";
import cx from "classnames";
import styles from "./UserCard.module.scss";
export default class UserCard extends Component {
  render() {
    return (
      <div className={cx(styles.userCard, "card")}>
        <div className="card-image">
          <figure className="image">
            <img src={this.props.user.avatar_url} alt="" />
          </figure>
        </div>
        <div className="card-content has-background-white-ter">
          <div className="content">
            <p className="title">{this.props.user.name}</p>
            <p className="subtitle">{this.props.user.location}</p>
            <p>{this.props.user.bio}</p>
          </div>
        </div>
      </div>
    );
  }
}
