import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import MovieDisplay from './MovieDisplay';

window.React = React;

const setup = {};

setup.render = function render(Component, store) {
  ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/">
          <IndexRoute component={Component} />
          <Route path="/movies/:id" component={MovieDisplay} />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('root'));
};

export default setup;
