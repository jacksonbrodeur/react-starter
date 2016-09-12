// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import MovieDisplay from './MovieDisplay';

import * as Actions from '../src/actions';

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderMovieListItem = this.renderMovieListItem.bind(this);
  }

  renderMovieListItem(movie, index) {
    const { getMovieById, selectedMovie } = this.props;
    return (
      <div
        className="movie-list-item"
        key={index}
        onClick={() => getMovieById(movie.imdbID)}
      >
      {`${movie.Title} (${movie.Year})`}
      </div>
    );
  }

  render() {
    const { searchTerm, results, updateSearchTerm, executeSearch, selectedMovie, deselectMovie } = this.props;
    console.log(this.props);
    return (
      <div>
        <div className="search-box">
          Search titles:
          <input
            type="text"
            value={searchTerm}
            onChange={(evt) => updateSearchTerm(evt.target.value)}
          />
        </div>
        <button className="search-button" onClick={() => executeSearch(searchTerm)}>
        FIND MY MOVIES
        </button>
        <div className="movie-list">
          {results.map(this.renderMovieListItem)}
        </div>

        <Modal isOpen={selectedMovie != null}>
          <div className="modal-close-button-wrapper">
            <button className="modal-close-button" onClick={deselectMovie}>Close</button>
          </div>
          <MovieDisplay movie={selectedMovie} />
        </Modal>

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
