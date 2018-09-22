import axios from 'axios'
import { FETCH_USER, UPDATE_USER, ADD_RECIPE, FETCH_RECIPE, FETCH_RECIPES, ADD_COMMENT } from './types'

/** USER ACTIONS **/

export const fetchUser = () => dispatch => {
  axios
    .get('/api/user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }))
}

export const updateUser = userValues => dispatch => {
  axios
    .put('/api/user', userValues)
    .then(res => dispatch({ type: UPDATE_USER, payload: res.data }))
}

/** RECIPE ACTIONS **/

export const addRecipe = recipeData => dispatch => {
  // Create new FormData object
  let data = new FormData()
  data.append('title', recipeData.title)
  data.append('description', recipeData.description)
  data.append('time', recipeData.time)
  data.append('steps', JSON.stringify(recipeData.steps))
  data.append('ingredients', JSON.stringify(recipeData.ingredients))
  for (var i = 0; i < recipeData.images.length; i++) {
    data.append("images", recipeData.images[i])
  }

  axios
    .post('/api/recipes', data)
    .then(res => dispatch({ type: ADD_RECIPE, payload: res.data }))
}

export const fetchRecipes = searchQuery => dispatch => {
  if (!searchQuery) {
    axios
      .get('/api/recipes')
      .then(res => dispatch({ type: FETCH_RECIPES, payload: res.data }))
  }
  else {
    axios
      .get('/api/recipes', { params: {
        q: searchQuery
      }
      })
      .then(res => dispatch({ type: FETCH_RECIPES, payload: res.data }))
  }
}

export const fetchRecipe = id => dispatch => {
  axios
    .get(`/api/recipes/${id}`)
    .then(res => dispatch({ type: FETCH_RECIPE, payload: res.data }))
}

export const addComment = (recipeId, data) => dispatch => {
  axios
    .post(`/api/recipes/${recipeId}/comments`, data)
    .then(res => dispatch({ type: ADD_COMMENT, payload: res.data }))
}

/* TO GET DATA FROM STATE */
export const getRecipeById = (state, id) => state.recipes
  ? state.recipes.find(recipe => recipe.id === Number(id)) || {}
  : {}