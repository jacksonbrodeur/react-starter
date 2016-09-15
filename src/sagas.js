import { put } from 'redux-saga/effects';
import { takeEvery } from 'redux-saga';
import { searchMovies, getMovieById } from './omdb';
import { updateResults, selectMovie } from './actions';
import types from './types';

export function* doSearch(action) {
  yield put(updateResults(null));
  const results = yield searchMovies(action.searchTerm);
  yield put(updateResults(results));
}

export function* watchForSearch() {
  yield* takeEvery(types.EXECUTE_SEARCH, doSearch);
}

export function* getMovie(action) {
  const movie = yield getMovieById(action.id);
  yield put(selectMovie(movie));
}

export function* watchForGetMovie() {
  yield* takeEvery(types.GET_MOVIE, getMovie);
}
