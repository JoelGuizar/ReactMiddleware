//middleware comes AFTER the action is sent, but BEFORE, it reaches the reducer
//it will log, stop, modify, or not touch an action.
//axios always returns a promise
import axios from 'axios';
import {
  FETCH_USERS
} from './types';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  request.then('')
  return {
    type: FETCH_USERS,
    payload: request
  }
}
