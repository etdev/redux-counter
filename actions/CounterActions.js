import * as types from '../constants/ActionTypes';

export function incrementCount() {
  return {
    type: types.INCREMENT
  }
}

export function decrementCount() {
  return {
    type: types.DECREMENT
  }
}
