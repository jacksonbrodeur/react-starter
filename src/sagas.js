import { put, take, fork } from 'redux-saga/effects';
import { searchMovies, getMovieById } from './omdb';
import * as types from './actions';

export function* doSearch(searchTerm) {
  const results = yield searchMovies(searchTerm);
  yield put({ type: types.UPDATE_RESULTS, results });
}

export function* watchForSearch() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const action = yield take('EXECUTE_SEARCH');
    yield fork(doSearch, action.searchTerm);
  }
}

export function* getMovie(id) {
  const movie = yield getMovieById(id);
  yield put({ type: types.SELECT_MOVIE, selectedMovie: movie });
}

export function* watchForGetMovie() {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const action = yield take('GET_MOVIE');
    yield fork(getMovie, action.id);
  }
}
