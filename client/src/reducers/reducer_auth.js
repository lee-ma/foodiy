import { FETCH_USER, UPDATE_USER, CREATE_USER } from "actions/types"

export default function(state = null, action) {
  switch (action.type) {
  case FETCH_USER:
    return action.payload || false
  case UPDATE_USER:
    return action.payload || false
  case CREATE_USER:
    return action.payload || false
  default:
    return state
  }
}
