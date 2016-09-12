export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const EXECUTE_SEARCH = 'EXECUTE_SEARCH';
export const GET_MOVIE = 'GET_MOVIE';
export const DESELECT_MOVIE = 'DESELECT_MOVIE';
export const UPDATE_RESULTS = 'UPDATE_RESULTS';
export const SELECT_MOVIE = 'SELECT_MOVIE';

export function updateSearchTerm(searchTerm) {
  return {
    type: UPDATE_SEARCH_TERM,
    searchTerm,
  };
}

export function executeSearch(searchTerm) {
  return {
    type: EXECUTE_SEARCH,
    searchTerm,
  };
}

export function getMovieById(id) {
  return {
    type: GET_MOVIE,
    id,
  };
}

export function deselectMovie() {
  return {
    type: DESELECT_MOVIE,
  };
}
