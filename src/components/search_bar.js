import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'duh'
    };
  }
  render() {
    return (
      <div className="search-bar">
        <input
          value = {this.state.term}
          onChange={event => this.setState({term: event.target.value})}
          className="search-bar__input"
          type="text"
          placeholder="Search for a movie, TV show, or person..."
        />        
      </div>
    );
  }
}

export default SearchBar;