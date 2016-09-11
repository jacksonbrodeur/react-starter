// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import { searchMovies, getMovieById } from '../src/omdb';
import Modal from 'react-modal';
import MovieDisplay from './MovieDisplay';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.renderMovieListItem = this.renderMovieListItem.bind(this);

    this.state = {
      searchTerm: '',
      results: [],
      movie: false,
      selected_movie: null,
    };
  }

  getMovie(id) {
    getMovieById(id).then(movie => {
      this.setState({
        selected_movie: movie,
        movie: true,
      });
    });
  }

  closeModal() {
    this.setState({
      movie: false,
    });
  }

  updateSearchTerm(evt) {
    this.setState({
      searchTerm: evt.target.value,
    });
  }

  updateResults() {
    searchMovies(this.state.searchTerm).then(movies => {
      this.setState({
        results: movies,
      });
    });
  }

  renderMovieListItem(movie, index) {
    return (
      <div
        className="movie-list-item"
        key={index}
        onClick={() => this.getMovie(movie.imdbID)}
      >
      {`${movie.Title} (${movie.Year})`}
      </div>
    );
  }

  render() {
    return (
      <div>
        <div className="search-box">
          Search titles:
          <input type="text" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
        </div>
        <button className="search-button" onClick={this.updateResults}>
        FIND MY MOVIES
        </button>
        <div className="movie-list">
          {this.state.results.map(this.renderMovieListItem)}
        </div>
        <Modal isOpen={this.state.movie}>
          <div className="modal-close-button-wrapper">
            <button className="modal-close-button" onClick={this.closeModal}>Close</button>
          </div>
          <MovieDisplay movie={this.state.selected_movie} />
        </Modal>

      </div>
    );
  }
}
