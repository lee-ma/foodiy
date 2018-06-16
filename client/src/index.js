import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { fetchUser } from './actions'

import reducers from './reducers';

import { Landing, Profile, Recipe, Home } from './scenes'
import { NewRecipeForm } from './components'

import Navbar from './components/Navbar';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

/**  Request User No Matter Where They Entered From  **/
store.dispatch(fetchUser())

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Navbar/>
        <Route exact path="/" component={Landing} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/newrecipe" component={NewRecipeForm} />
        <Route path="/recipes/:id" component={Recipe} />
        <Route exact path="/browse" component={Home} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
