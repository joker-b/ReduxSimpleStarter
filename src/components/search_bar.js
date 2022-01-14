import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return (
      <div className="search-bar">
        <input
          className="search-bar__input"
          type="text"
          placeholder="Search for a movie, TV show, or person..."
        />
        <button className="search-bar__button">
          <i className="fas fa-search" />
        </button>
      </div>
    );
  }
}

export default SearchBar;