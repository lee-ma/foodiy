import { combineReducers } from "redux"
import authReducer from "./reducer_auth"
import recipeReducer from "./reducer_recipe"
import { reducer as formReducer } from "redux-form"

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
  form: formReducer
})

export default rootReducer
