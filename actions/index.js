// action creaters

import * as types from '../constants/ActionTypes'

export function addNewBug(text) {
  return { type: types.ADD_NEW_BUG, text }
}

export function toggleBug(id) {
  return { type: types.TOGGLE_BUG, id }
}
