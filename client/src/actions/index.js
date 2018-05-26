import axios from 'axios';
import { FETCH_USER, UPDATE_USER } from './types';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};

export const updateUser = userValues => dispatch => {
  axios
  .put('/api/user', userValues)
  .then(res => dispatch({ type: UPDATE_USER, payload: res.data }))
}
