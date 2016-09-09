import React from 'react';

class MovieDisplay extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="moviePage">
        <table>
          <tbody>
            <tr>
              <td>
                <img className="posterImage" src={movie.Poster} alt="poster" />
              </td>
              <td className="movieDetails">
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

MovieDisplay.propTypes = {
  movie: React.PropTypes.object,
};

export default MovieDisplay;

