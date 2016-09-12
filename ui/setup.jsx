import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

window.React = React;

const setup = {};

setup.render = function render(Component, store) {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('root'));
};

export default setup;
