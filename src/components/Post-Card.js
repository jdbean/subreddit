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

  post = this.props.post

  title = this.props.post.title
  ups = this.props.post.ups
  relativeTime = this.props.relativeTime

  dateString = () => {
    const date = new Date(this.props.post.date * 1000)
    const relativeTime = this.props.relativeTime
    console.log(relativeTime)

    if (relativeTime) {
      return <TimeAgo date={date} />
    } else {
      return mmddyy(date)
    }
  };

  favoriteIcon = () => {
    if (this.props.type === "favorites") {
      return (
        <TrashIcon
          className="inactive-overlay overlay Header-icon"
          currentColor="white"
          onClick={this.toggleFavorite}
        />
      );
    } else {
      return (
        <HeartIcon
          className={this.props.isFavorite(this.props.post.id) ?
            "active-overlay overlay Header-icon" :
            "inactive-overlay overlay Header-icon"
          }
          currentColor={this.props.isFavorite(this.props.post.id) ?
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
    this.props.toggleFavorite(this.props.post)
  }

  render() {
    return (
      <div className="post-card">
        <img
          className="post-image"
          alt={this.props.post.title}
          src={this.props.post.image}
        >
        </img>
        {this.favoriteIcon()}
        <a
          className="post-title"
          href={`https://reddit.com/${this.props.post.permalink}`}
        >
          {this.title}
        </a>
        <span className="post-data">
          <UserIcon />
          <a href={`https://reddit.com${this.props.post.user}`}>
            {this.props.post.user}
          </a>
          <span className="post-dot">•</span>
          <ClockIcon />
          {this.dateString()}
          <span className="post-dot">•</span>
          <BoltIcon />
          {this.props.post.ups}
        </span>
      </div>
    )
  }
}

export default PostCard;