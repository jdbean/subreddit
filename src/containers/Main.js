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
    axios.get("https://www.reddit.com/r/evilbuildings/top.json")
      .then(resp => {
        const posts = resp.data.data.children.map(post => {
          let data = post.data
          let postData = {}

          postData.title = data.title
          postData.user = `/u/${data.author}`
          postData.image = pickImage(data)
          postData.ups = data.ups
          postData.date = data.created_utc
          postData.id = data.id
          postData.permalink = data.permalink
          postData.isFavorite = false
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
