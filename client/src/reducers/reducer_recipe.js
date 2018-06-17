import { ADD_RECIPE, FETCH_RECIPES, FETCH_RECIPE } from '../actions/types'

export default function(state = null, action) {
  switch (action.type) {
  case ADD_RECIPE:
    if (state) return [...state, action.payload]
    return action.payload
  case FETCH_RECIPES:
    return action.payload
  case FETCH_RECIPE:
    return [...state, action.payload]
  default:
    return state
  }
}
