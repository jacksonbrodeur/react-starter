import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as Actions from '../src/actions';
import { bindActionCreators } from 'redux';

class MovieDisplay extends React.Component {

  static propTypes = {
    movie: React.PropTypes.object,
    deselectMovie: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    this.props.getMovieById(this.props.params.id);
  }

  render() {
    const { movie, deselectMovie } = this.props;
    const closeButton = (
      <div className="close-button">
        <Link to="/">
          <button className="close-button" onClick={deselectMovie}>Close</button>
        </Link>
      </div>
    );
    if (movie == null) {
      return (
        <div>
          {closeButton}
          Loading...
        </div>
      );
    }
    return (
      <div className="movie-page">
        {closeButton}
        <table>
          <tbody>
            <tr>
              <td>
                <img className="poster-image" src={movie.Poster} alt="poster" />
              </td>
              <td className="movie-details">
                <h1 className="title">Title: {movie.Title}</h1>
                <p>Rated: {movie.Rated}</p>
                <p>Plot: {movie.Plot}</p>
                <p>Released: {movie.Released}</p>
                <p>Runtime: {movie.Runtime}</p>
                <p>Genre: {movie.Genre}</p>
                <p>Director: {movie.Director}</p>
                <p>Writer: {movie.Writer}</p>
                <p>Language: {movie.Language}</p>
                <p>Awards: {movie.Awards}</p>
                <p>IMDB Rating: {movie.imdbRating}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movie: state.selectedMovie,
  };
}

function mapActionCreatorsToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapActionCreatorsToProps)(MovieDisplay);

