import React from 'react';
import * as Actions from '../src/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

export class MovieList extends React.Component {

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
    const { results } = this.props;
    return (
      <div className="movie-list">
        {results.map(this.renderMovieListItem)}
      </div>
    );
  }
}

MovieList.propTypes = {
  results: React.PropTypes.array,
  getMovieById: React.PropTypes.func,
};

function mapStateToProps(state) {
  return {
    results: state.results,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieList);
