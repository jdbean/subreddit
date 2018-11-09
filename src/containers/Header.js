import React, { Component } from 'react';
import { RedditLogo } from '../components/Reddit-Logo';
import { HeartIcon } from '../components/Heart-Icon';
import { NavLink } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    const favoritesNum = this.props.favoritesNum
    return (
      <div className="Header">
        <NavLink exact to="/" activeClassName="Header-active" className="Header-section">
          <RedditLogo className="Header-icon" alt="reddit logo" currentColor="white" />
          <div>/r/evilbuildings</div>
        </NavLink>
        <NavLink to="/favorites" activeClassName="Header-active" className="Header-section">
          <HeartIcon className="Header-icon" alt="heart icon" currentColor="#57a2e4" />
          <div>favorites ({favoritesNum})</div>
        </NavLink>
      </div>
    )
  }
}

export default Header;