// eslint-disable-next-line react/prefer-stateless-function
import React from 'react';
import { searchMovies, getMovieById } from '../src/omdb';
import Modal from 'react-modal';
import MovieDisplay from './MovieDisplay.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.updateSearchTerm = this.updateSearchTerm.bind(this);
    this.updateResults = this.updateResults.bind(this);
    this.getMovie = this.getMovie.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
      if (movies) {
        this.setState({ results: movies });
      } else {
        this.setState({ results: [] });
      }
    }, () => {});
  }

  render() {
    return (
      <div>
        <div className="searchBox">
          Search titles:
          <input type="text" value={this.state.searchTerm} onChange={this.updateSearchTerm} />
        </div>
        <button className="searchButton" onClick={this.updateResults}>
        FIND MY MOVIES
        </button>
        <div className="movieList">
          {this.state.results.map((movie, index) => (
            <div
              className="movieListItem"
              key={index}
              onClick={() => this.getMovie(movie.imdbID)}
            >
            {`${movie.Title} (${movie.Year})`}
            </div>
          ))}
        </div>
        <Modal isOpen={this.state.movie}>
          <div className="modalCloseButtonWrapper">
            <button className="modalCloseButton" onClick={this.closeModal}>Close</button>
          </div>
          <MovieDisplay movie={this.state.selected_movie} />
        </Modal>

      </div>
    );
  }
}
