import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import reduxThunk from "redux-thunk"
import { fetchUser, fetchTags } from "actions"
import { ThemeProvider } from "styled-components"

import reducers from "reducers"

import theme from "theme"

import { Landing, Profile, Recipe, Home, NotFound } from "scenes"
import { NewRecipeForm, Navbar, Footer } from "components"

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

/**  Request User No Matter Where They Entered From  **/
store.dispatch(fetchUser())
store.dispatch(fetchTags())

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ minHeight: "95vh" }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/newrecipe" component={NewRecipeForm} />
            <Route path="/recipes/:id" component={Recipe} />
            <Route path="/browse" component={Home} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
)
