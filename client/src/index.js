import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import Home from './scenes/Home';
import Navbar from './components/Navbar';
import Dashboard from './scenes/Dashboard'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={Dashboard} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
