// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import SearchComponent from './SearchComponent';
import MovieList from './MovieList';

export class App extends React.Component {

  render() {
    return (
      <div>
        <SearchComponent />
        <MovieList />
      </div>
    );
  }
}

export default App;
