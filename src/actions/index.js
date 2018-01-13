//middleware comes AFTER the action is sent, but BEFORE, it reaches the reducer
//it will log, stop, modify, or not touch an action.

import {
  FETCH_USERS
} from './types';

export function fetchUsers() {

  return {
    type: FETCH_USERS,
    payload: [
      { name: 'Errol'},
      { name: 'Mason'},
      { name: 'Nico'}
    ]
  }
}
