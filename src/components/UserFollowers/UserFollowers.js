import React, { Component } from "react";
import cx from "classnames";
import styles from "./UserFollowers.module.scss";
export default class UserFollower extends Component {
  render() {
    return (
      <>
        <div className={cx(styles.userFollowersCard, "card")}>
          <div className="card-header">
            <p className="card-header-title">Followers</p>
          </div>
          <div className="card-content">
            <div className="columns is-multiline">
              {this.props.followers.map(follower => (
                <div className="column is-size-4" key={follower.id}>
                  <div className="media">
                    <figure className="media-left">
                      <p className="image is-64x64">
                        <img src={follower.avatar_url} alt="" />
                      </p>
                    </figure>
                    <div className="media-content">
                      <div className="content">
                        <p>
                          <strong>{follower.login}</strong>
                        </p>
                        <a href={follower.html_url}>Profile</a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}
