import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorites from './containers/Favorites';
import Header from './containers/Header';
import Main from './containers/Main';

class App extends Component {
  state = { favorites: {} }

  toggleFavorite = (post) => {
    const postId = post.id
    if (!this.isFavorite(postId)) {
      this.setState({
        favorites: { ...this.state.favorites, [postId]: post }
      })
    } else {
      const newFavorites = Object.assign(this.state.favorites);
      delete newFavorites[postId]
      this.setState({
        favorites: newFavorites
      })
    }
  }

  isFavorite = (postId) => {
    return this.state.favorites[postId] ? true : false
  }

  main = () => {
    return (
      <Main
        toggleFavorite={this.toggleFavorite}
        isFavorite={this.isFavorite}
      />
    );
  }
  fav = () => {
    return (
      <Favorites
        favorites={this.state.favorites}
        toggleFavorite={this.toggleFavorite}
        isFavorite={this.isFavorite}
      />
    );
  }
  head = () => {
    return (
      <Header
        favoritesNum={Object.keys(this.state.favorites).length}
      />
    );
  }




  render() {
    return (
      <div className="App">
        <Route path="/" component={this.head} />
        <Switch>
          <Route
            exact={true}
            path="/"
            component={this.main}
          />
          <Route
            exact
            path="/favorites"
            component={this.fav}
          />
        </Switch>


      </div>
    );
  }
}

export default App;
