import React from 'react';
import * as Actions from '../src/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class MovieList extends React.Component {

  static propTypes = {
    results: React.PropTypes.array,
    getMovieById: React.PropTypes.func,
    isFirstSearch: React.PropTypes.bool,
  }

  renderMovieListItem = (movie, index) => {
    const { getMovieById } = this.props;
    return (
      <div
        className="movie-list-item"
        key={index}
        onClick={() => getMovieById(movie.imdbID)}
      >
      <Link to={`/movies/${movie.imdbID}`}>
        {`${movie.Title} (${movie.Year})`}
      </Link>
      </div>
    );
  }

  render() {
    const { results, isFirstSearch } = this.props;
    if (results === null) {
      return (
        <div className="loading-message">
        Loading...
        </div>
      )
    }

    if (results.length == 0 && !isFirstSearch) {
      return (
        <div className="no-results-message">
        No results
        </div>
      )
    }
    return (
      <div className="movie-list">
        {results.map(this.renderMovieListItem)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    results: state.results,
    isFirstSearch: state.isFirstSearch,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieList);
