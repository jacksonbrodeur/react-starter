import * as types from './actions';

const defaultState = {
  searchTerm: '',
  results: [],
  selectedMovie: null,
}

function reduce(state = defaultState, action) {
  switch (action.type) {
    case types.UPDATE_RESULTS:
      return {
        ...state,
        results: action.results,
      };
    case types.UPDATE_SEARCH_TERM:
      return {
        ...state,
        searchTerm: action.searchTerm,
      };
    case types.SELECT_MOVIE:
      return {
        ...state,
         selectedMovie: action.selectedMovie
      };
    case types.DESELECT_MOVIE:
      return {
        ...state,
        selectedMovie: null,
      }
    default:
      return state;
  }
}

export default reduce;
