import { ADD_RECIPE } from '../actions/types';

export default function(state = null, action) {
  switch (action.type) {
    case ADD_RECIPE:
      return [...state, action.payload]
    default:
      return state;
  }
}
