import axios from 'axios'
import { FETCH_USER, UPDATE_USER, ADD_RECIPE, FETCH_RECIPE, FETCH_RECIPES } from './types'

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
  axios
    .put('/api/recipes', recipeData)
    .then(res => dispatch({ type: ADD_RECIPE, payload: res.data }))
}

export const fetchRecipes = () => dispatch => {
  axios
    .get('/api/recipes')
    .then(res => dispatch({ type: FETCH_RECIPES, payload: res.data }))
}

export const fetchRecipe = id => dispatch => {
  axios
    .get(`/api/recipes/${id}`)
    .then(res => dispatch({ type: FETCH_RECIPE, payload: res.data }))
}
