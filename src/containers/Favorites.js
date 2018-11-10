import React, { Component } from 'react';
import './Main.css';
import './Favorites.css';
import { makePostCard } from '../Helpers.js'

class Favorites extends Component {

  renderPosts = () => {
    const { toggleFavorite, isFavorite } = this.props;
    const favorites = Object.values(this.props.favorites)
    return favorites.map(post => {
      return makePostCard(post, "favorites", toggleFavorite, isFavorite);
    });
  }

  render() {
    if (Object.keys(this.props.favorites).length < 1) {
      return (
        <div className="main">
          <div className="warning-box">
            <p>No favorites yet.</p>
          </div>
        </div>
      );
    }

    return (
      <div className="main">
        {this.renderPosts()}
      </div>
    );
  }
}

export default Favorites;
