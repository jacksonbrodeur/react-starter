import setup from './setup';
import App from './app';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from '../src/reducer';
import { watchForSearch, watchForGetMovie } from '../src/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
	reducer,
	applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchForSearch);
sagaMiddleware.run(watchForGetMovie);

setup.render(App, store);
