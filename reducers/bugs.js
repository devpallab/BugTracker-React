/* bugs reducer : Used for defining initial state and predictable states */

import { ADD_NEW_BUG, TOGGLE_BUG } from '../constants/ActionTypes'

const initialState = [
		{id : 1, name : 'Object reference not set to an instance', isClosed : false},
		{id : 2, name : 'Server communication failure', isClosed : true},
		{id : 3, name : 'User request is not acknowledged', isClosed : false},
	]

export default function bugs(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_BUG:
      return [
        {
          id: state.reduce((maxId, bug) => Math.max(bug.id, maxId), -1) + 1,
          isClosed: false,
          name: action.text
        }, 
        ...state
      ]
	  
    case TOGGLE_BUG:
     return state.map(bug =>
        bug.id === action.id ?
          Object.assign({}, bug, { isClosed: !bug.isClosed }) :
          bug
      )
    default:
      return state
  }
}
