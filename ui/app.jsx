// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchComponent from './SearchComponent';
import MovieList from './MovieList';


import * as Actions from '../src/actions';

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

App.propTypes = {
  searchTerm: React.PropTypes.string,
  results: React.PropTypes.array,
  updateSearchTerm: React.PropTypes.func,
  executeSearch: React.PropTypes.func,
  getMovieById: React.PropTypes.func,
  selectedMovie: React.PropTypes.object,
  deselectMovie: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    results: state.results,
    selectedMovie: state.selectedMovie,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(App);
