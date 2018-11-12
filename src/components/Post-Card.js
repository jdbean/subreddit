import React, { Component } from 'react';
import TimeAgo from 'react-timeago';
import { mmddyy } from '../Helpers';
import { BoltIcon } from './Bolt-Icon';
import { ClockIcon } from './Clock-Icon';
import { HeartIcon } from './Heart-Icon';
import { TrashIcon } from './Trash-Icon';
import { UserIcon } from './User-Icon';
import './Post-Card.css';

class PostCard extends Component {

  state = { isHovering: false }

  dateString = () => {
    const date = new Date(this.props.post.date * 1000)
    const relativeTime = this.props.relativeTime

    if (relativeTime) {
      return <TimeAgo date={date} />
    } else {
      return mmddyy(date)
    }
  };

  favoriteIcon = () => {
    const { type, isFavorite } = this.props
    const { id } = this.props.post
    const isThisFavorite = isFavorite(id)
    if (type === "favorites") {
      return (
        <TrashIcon
          className="inactive-overlay overlay favorite-icon"
          currentColor="white"
          onClick={this.toggleFavorite}
        />
      );
    } else {
      return (
        <HeartIcon
          className={isThisFavorite ?
            "active-overlay overlay favorite-icon" :
            "inactive-overlay overlay favorite-icon"
          }
          currentColor={isThisFavorite ?
            "#f47a76" :
            "white"
          }
          onClick={this.toggleFavorite}
        />
      );
    }
  }

  handleMouseHover = (state) => {
    this.setState({
      isHovering: !this.state.isHovering,
    });
  }

  toggleFavorite = () => {
    const { toggleFavorite, post } = this.props
    toggleFavorite(post)
  }

  render() {
    const { title, image, permalink, user, ups } = this.props.post
    return (
      <div className="post-card">
        <div className="post-image-container">
          <img
            className="post-image"
            alt={title}
            src={image}
          >
          </img>
          {this.favoriteIcon()}
        </div>
        <a
          className="post-title"
          href={`https://reddit.com${permalink}`}
        >
          {title}
        </a>
        <span className="post-data">
          <UserIcon />
          <a href={`https://reddit.com${user}`}>
            {user}
          </a>
          <span className="post-dot">•</span>
          <ClockIcon />
          {this.dateString()}
          <span className="post-dot">•</span>
          <BoltIcon />
          {ups}
        </span>
      </div>
    )
  }
}

export default PostCard;