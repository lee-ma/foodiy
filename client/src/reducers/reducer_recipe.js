import { ADD_RECIPE, FETCH_RECIPES, FETCH_RECIPE, ADD_COMMENT } from "actions/types"

export default function(state = null, action) {
  switch (action.type) {
  case ADD_RECIPE:
    if (state) return [...state, action.payload]
    return [action.payload]
  case FETCH_RECIPES:
    return action.payload
  case FETCH_RECIPE:
  case ADD_COMMENT:
    let newState = []
    const recipeInState = state ? state.find(recipe => recipe.id === action.payload.id) : false

    if (recipeInState) {
      state.forEach(recipe => {
        if (recipe.id === action.payload.id) {
          newState.push(action.payload)
        } else {
          newState.push(recipe)
        }
      })
      console.log("newState", newState)
      return newState
    } else if (state) {
      console.log("hesfdj")
      return [...state, action.payload]
    }
    console.log("action.payload", action.payload)
    return [action.payload]
  default:
    return state
  }
}
