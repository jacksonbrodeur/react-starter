import types from './types';

export function updateSearchTerm(searchTerm) {
  return {
    type: types.UPDATE_SEARCH_TERM,
    searchTerm,
  };
}

export function executeSearch(searchTerm) {
  return {
    type: types.EXECUTE_SEARCH,
    searchTerm,
  };
}

export function getMovieById(id) {
  return {
    type: types.GET_MOVIE,
    id,
  };
}

export function selectMovie(selectedMovie) {
  return {
    type: types.SELECT_MOVIE,
    selectedMovie,
  };
}

export function deselectMovie() {
  return {
    type: types.DESELECT_MOVIE,
  };
}

export function updateResults(results) {
  return {
    type: types.UPDATE_RESULTS,
    results,
  };
}
