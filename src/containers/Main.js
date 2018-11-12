import axios from 'axios';
import React, { Component } from 'react';
import { makePostCard, pickImage } from '../Helpers.js';
import './Main.css';

class Main extends Component {
  state = { posts: [] }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    axios.get("https://www.reddit.com/r/analog/top.json")
      .then(resp => {
        const posts = resp.data.data.children.map(post => {
          const data = post.data

          const { 
            title,
            ups,
            id,
            permalink, 
            created_utc
           } = data

          let postData = {title, ups, id, permalink}
          postData.date = created_utc
          postData.image = pickImage(data)
          postData.user = `/u/${data.author}`

          return postData
        });
        this.setState({ posts });
      });
  }

  renderPosts = () => {
    const { toggleFavorite, isFavorite } = this.props;

    return this.state.posts.map(post => {
      return makePostCard(post, "main", toggleFavorite, isFavorite);
    });
  }

  render() {
    return (
      <div className="main">
        {this.renderPosts()}
      </div>
    );
  }
}

export default Main;
