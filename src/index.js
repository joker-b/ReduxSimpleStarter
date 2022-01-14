//
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

//import YTS from 'youtube-api-search';

// const API_KEY = 'AIzaSyAkRrZ5U1WL242T5hKbccIUlKlaEp-rUMA'

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
        );
};

ReactDOM.render(<App />, document.querySelector('.container'));

